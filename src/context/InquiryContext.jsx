import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const API_BASE = 'http://localhost:5000/api';

const InquiryContext = createContext();

// Web Audio API Chime Synthesizer for instant new lead notifications
function playNotificationChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const now = ctx.currentTime;
    
    // Tone 1: High crisp bell (A5)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, now);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.5);

    // Tone 2: D6 harmonic chime
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1174.66, now + 0.15);
    gain2.gain.setValueAtTime(0.4, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.75);
  } catch (err) {
    console.warn('Audio chime playback omitted:', err);
  }
}

export function InquiryProvider({ children }) {
  const [inquiries, setInquiries] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [adminUser, setAdminUser] = useState(() => {
    const saved = localStorage.getItem('global_admin_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('global_admin_token') || '');
  const [toastNotification, setToastNotification] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = !!adminUser && !!token;

  // Fetch inquiries from Backend API (Dynamic database)
  const fetchInquiries = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/inquiries`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          const cleanData = json.data.filter(item => !['INQ-1001', 'INQ-1002', 'INQ-1003'].includes(item.id));
          setInquiries(cleanData);
          const unread = cleanData.filter(item => !item.read).length;
          setUnreadCount(unread);
          localStorage.setItem('global_inquiries_cache', JSON.stringify(cleanData));
          return;
        }
      }
    } catch (err) {
      console.warn('Backend API offline, using local storage cache:', err);
    }

    // LocalStorage Fallback
    const cached = localStorage.getItem('global_inquiries_cache');
    if (cached) {
      const parsed = JSON.parse(cached).filter(item => !['INQ-1001', 'INQ-1002', 'INQ-1003'].includes(item.id));
      setInquiries(parsed);
      setUnreadCount(parsed.filter(item => !item.read).length);
      localStorage.setItem('global_inquiries_cache', JSON.stringify(parsed));
    }
  }, []);

  useEffect(() => {
    fetchInquiries();
    // Poll every 5 seconds for real-time lead sync
    const interval = setInterval(fetchInquiries, 5000);
    return () => clearInterval(interval);
  }, [fetchInquiries]);

  // Submit new inquiry (called by website contact forms & modals)
  const submitInquiry = async (formData) => {
    setIsLoading(true);
    let createdInquiry = null;

    try {
      const res = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success) {
          createdInquiry = json.data;
        }
      }
    } catch (err) {
      console.warn('Backend offline, saving inquiry locally:', err);
    }

    // Local Fallback if API offline
    if (!createdInquiry) {
      createdInquiry = {
        id: 'INQ-' + Math.floor(1000 + Math.random() * 9000),
        name: formData.name,
        company: formData.company || 'Enterprise Client',
        phone: formData.phone,
        email: formData.email || 'N/A',
        service: formData.service || 'General Infrastructure Inquiry',
        budget: formData.budget || 'Undisclosed',
        location: formData.location || 'NCR, India',
        message: formData.message || 'Submitted via website form.',
        status: 'New',
        read: false,
        notes: '',
        createdAt: new Date().toISOString()
      };
    }

    // Update state dynamically
    setInquiries(prev => {
      const updated = [createdInquiry, ...prev];
      localStorage.setItem('global_inquiries_cache', JSON.stringify(updated));
      return updated;
    });
    setUnreadCount(prev => prev + 1);

    // 1. User Feedback Toast (Shown to User)
    setToastNotification({
      id: Date.now(),
      type: 'user',
      title: '✅ INQUIRY SENT SUCCESSFULLY!',
      message: `Thank you ${createdInquiry.name}! Our team will contact you at ${createdInquiry.phone}.`
    });

    // 2. Admin Notification & Chime (ONLY IF ADMIN IS LOGGED IN)
    if (isLoggedIn) {
      if (soundEnabled) {
        playNotificationChime();
      }

      setToastNotification({
        id: Date.now(),
        type: 'admin',
        title: '🔔 NEW INQUIRY RECEIVED IN CRM!',
        name: createdInquiry.name,
        phone: createdInquiry.phone,
        service: createdInquiry.service,
        time: 'Just now'
      });
    }

    setTimeout(() => {
      setToastNotification(null);
    }, 6000);

    setIsLoading(false);
    return createdInquiry;
  };

  // Admin Login Handler (Triggers Pending Lead Notifications Upon Login)
  const login = async (adminId, password) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminId, password })
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setToken(json.token);
        setAdminUser(json.admin);
        localStorage.setItem('global_admin_token', json.token);
        localStorage.setItem('global_admin_user', JSON.stringify(json.admin));

        // Check for pending unread leads when admin logs in
        const currentUnread = inquiries.filter(i => !i.read).length;
        if (currentUnread > 0) {
          if (soundEnabled) {
            playNotificationChime();
          }

          setToastNotification({
            id: Date.now(),
            type: 'admin',
            title: `🔔 WELCOME BACK ADMIN!`,
            message: `You have ${currentUnread} new unread lead(s) waiting in your CRM.`
          });

          setTimeout(() => setToastNotification(null), 7000);
        }

        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, message: json.message || 'Invalid Admin ID/Phone or Password' };
      }
    } catch (err) {
      console.warn('Backend login error:', err);
      setIsLoading(false);
      return { success: false, message: 'Invalid Credentials. Use your active Admin password.' };
    }
  };

  // Request 6-Digit OTP for Password Change
  const requestOTP = async (destination) => {
    try {
      const res = await fetch(`${API_BASE}/admin/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination })
      });
      return await res.json();
    } catch (err) {
      // Fallback OTP for testing
      const dummyOTP = Math.floor(100000 + Math.random() * 900000).toString();
      return { success: true, message: `OTP sent to ${destination}`, otpDemo: dummyOTP };
    }
  };

  // Change Admin Password (Old Password OR OTP Verification)
  const changePassword = async (payload) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      setIsLoading(false);
      return json;
    } catch (err) {
      setIsLoading(false);
      return { success: false, message: 'Failed to update password. Ensure backend API is active.' };
    }
  };

  // Admin Logout Handler
  const logout = () => {
    setToken('');
    setAdminUser(null);
    localStorage.removeItem('global_admin_token');
    localStorage.removeItem('global_admin_user');
  };

  // Update Inquiry Status (New, In Progress, Contacted, Quoted, Closed)
  const updateInquiryStatus = async (id, status) => {
    setInquiries(prev => {
      const updated = prev.map(inq => inq.id === id ? { ...inq, status } : inq);
      localStorage.setItem('global_inquiries_cache', JSON.stringify(updated));
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
    } catch (err) {
      console.warn('API update status fallback:', err);
    }
  };

  // Update Admin Notes
  const updateInquiryNotes = async (id, notes) => {
    setInquiries(prev => {
      const updated = prev.map(inq => inq.id === id ? { ...inq, notes } : inq);
      localStorage.setItem('global_inquiries_cache', JSON.stringify(updated));
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes })
      });
    } catch (err) {
      console.warn('API update notes fallback:', err);
    }
  };

  // Mark Inquiry as Read
  const markAsRead = async (id) => {
    setInquiries(prev => {
      const updated = prev.map(inq => inq.id === id ? { ...inq, read: true } : inq);
      setUnreadCount(updated.filter(item => !item.read).length);
      localStorage.setItem('global_inquiries_cache', JSON.stringify(updated));
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true })
      });
    } catch (err) {
      console.warn('API mark as read fallback:', err);
    }
  };

  // Delete Inquiry
  const deleteInquiry = async (id) => {
    setInquiries(prev => {
      const updated = prev.filter(inq => inq.id !== id);
      setUnreadCount(updated.filter(item => !item.read).length);
      localStorage.setItem('global_inquiries_cache', JSON.stringify(updated));
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, {
        method: 'DELETE'
      });
    } catch (err) {
      console.warn('API delete fallback:', err);
    }
  };

  // Delete Selected Multiple Inquiries (Bulk Delete)
  const bulkDeleteInquiries = async (ids) => {
    if (!Array.isArray(ids) || ids.length === 0) return;

    setInquiries(prev => {
      const updated = prev.filter(inq => !ids.includes(inq.id));
      setUnreadCount(updated.filter(item => !item.read).length);
      localStorage.setItem('global_inquiries_cache', JSON.stringify(updated));
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/bulk-delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids })
      });
    } catch (err) {
      console.warn('API bulk delete fallback:', err);
    }
  };

  return (
    <InquiryContext.Provider
      value={{
        inquiries,
        unreadCount,
        adminUser,
        isLoggedIn,
        isLoading,
        toastNotification,
        soundEnabled,
        setSoundEnabled,
        login,
        logout,
        submitInquiry,
        updateInquiryStatus,
        updateInquiryNotes,
        markAsRead,
        deleteInquiry,
        bulkDeleteInquiries,
        requestOTP,
        changePassword,
        playChime: playNotificationChime
      }}
    >
      {children}

      {/* Floating Global Real-time Notification Toast Banner */}
      {toastNotification && (
        <div className="fixed bottom-6 right-6 z-[9999] max-w-md w-full bg-gradient-to-r from-[#240e44] via-[#1a0833] to-[#2b1050] border-2 border-amber-400 p-4 rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.6)] backdrop-blur-2xl animate-bounce flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-[#120722] flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
              {toastNotification.type === 'user' ? '✅' : '🔔'}
            </div>
            <div>
              <div className="text-xs font-black text-amber-300 tracking-wider uppercase">
                {toastNotification.title}
              </div>
              {toastNotification.message ? (
                <div className="text-xs font-semibold text-white leading-relaxed mt-0.5">
                  {toastNotification.message}
                </div>
              ) : (
                <>
                  <div className="text-sm font-bold text-white leading-tight">
                    {toastNotification.name} ({toastNotification.phone})
                  </div>
                  <div className="text-xs text-[#d1c4e9] truncate max-w-[220px]">
                    {toastNotification.service}
                  </div>
                </>
              )}
            </div>
          </div>

          <button
            onClick={() => setToastNotification(null)}
            className="text-amber-400 hover:text-white font-bold text-sm px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}
