import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { CheckCircle, Bell, X } from 'lucide-react';

const API_BASE = import.meta.env?.VITE_API_URL || 'http://localhost:5000/api';
const STORAGE_KEYS = {
  INQUIRIES: 'global_inquiries_cache',
  TOKEN: 'global_admin_token',
  USER: 'global_admin_user',
};

const InquiryContext = createContext(null);

function playNotificationChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, now);
    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.4);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1174.66, now + 0.12);
    gain2.gain.setValueAtTime(0.25, now + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.12);
    osc2.stop(now + 0.6);
  } catch {
    // Audio context may be restricted by browser autoplay policies
  }
}

export function InquiryProvider({ children }) {
  const [inquiries, setInquiries] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEYS.TOKEN) || '');
  const [toastNotification, setToastNotification] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdminLoginOpen, setAdminLoginOpen] = useState(false);

  const openAdminLogin = useCallback(() => setAdminLoginOpen(true), []);
  const closeAdminLogin = useCallback(() => setAdminLoginOpen(false), []);

  const isLoggedIn = Boolean(adminUser && token);

  const syncInquiriesState = useCallback((data) => {
    if (!Array.isArray(data)) return;
    setInquiries(data);
    setUnreadCount(data.filter((item) => !item.read).length);
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(data));
    } catch (err) {
      console.error('Failed to cache inquiries to localStorage', err);
    }
  }, []);

  const fetchInquiries = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/inquiries`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          syncInquiriesState(json.data);
          return;
        }
      }
    } catch {
      // Backend unavailable, fallback to local storage
    }

    try {
      const cached = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      if (cached) {
        syncInquiriesState(JSON.parse(cached));
      }
    } catch (err) {
      console.error('Failed to read cached inquiries', err);
    }
  }, [syncInquiriesState]);

  useEffect(() => {
    fetchInquiries();
    const interval = setInterval(fetchInquiries, 5000);
    return () => clearInterval(interval);
  }, [fetchInquiries]);

  const showToast = useCallback((toast, duration = 6000) => {
    const id = Date.now();
    setToastNotification({ id, ...toast });
    setTimeout(() => {
      setToastNotification((current) => (current?.id === id ? null : current));
    }, duration);
  }, []);

  const submitInquiry = async (formData) => {
    setIsLoading(true);
    let createdInquiry = null;

    try {
      const res = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          createdInquiry = json.data;
        }
      }
    } catch {
      // Backend offline fallback
    }

    if (!createdInquiry) {
      createdInquiry = {
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.name,
        company: formData.company || '',
        phone: formData.phone,
        email: formData.email || '',
        service: formData.service || '',
        budget: formData.budget || '',
        location: formData.location || '',
        message: formData.message || '',
        status: 'New',
        read: false,
        notes: '',
        createdAt: new Date().toISOString(),
      };
    }

    setInquiries((prev) => {
      const updated = [createdInquiry, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
      } catch {}
      return updated;
    });
    setUnreadCount((prev) => prev + 1);

    showToast({
      type: 'user',
      title: 'Inquiry Sent Successfully',
      message: `Thank you ${createdInquiry.name}! Our team will contact you at ${createdInquiry.phone}.`,
    });

    if (isLoggedIn) {
      if (soundEnabled) {
        playNotificationChime();
      }

      showToast({
        type: 'admin',
        title: 'New Lead Received',
        name: createdInquiry.name,
        phone: createdInquiry.phone,
        service: createdInquiry.service,
        time: 'Just now',
      });
    }

    setIsLoading(false);
    return createdInquiry;
  };

  const login = async (adminId, password) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminId, password }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setToken(json.token);
        setAdminUser(json.admin);
        localStorage.setItem(STORAGE_KEYS.TOKEN, json.token);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(json.admin));

        const pendingUnread = inquiries.filter((i) => !i.read).length;
        if (pendingUnread > 0) {
          if (soundEnabled) playNotificationChime();
          showToast(
            {
              type: 'admin',
              title: 'Welcome Back',
              message: `You have ${pendingUnread} new lead(s) waiting in your CRM.`,
            },
            7000
          );
        }

        setIsLoading(false);
        return { success: true };
      }

      setIsLoading(false);
      return { success: false, message: json.message || 'Invalid Admin ID or Password' };
    } catch {
      setIsLoading(false);
      return { success: false, message: 'Invalid credentials or authentication server error.' };
    }
  };

  const logout = () => {
    setToken('');
    setAdminUser(null);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
  };

  const requestOTP = async (destination) => {
    try {
      const res = await fetch(`${API_BASE}/admin/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination }),
      });
      return await res.json();
    } catch {
      const dummyOTP = Math.floor(100000 + Math.random() * 900000).toString();
      return { success: true, message: `OTP sent to ${destination}`, otpDemo: dummyOTP };
    }
  };

  const changePassword = async (payload) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      setIsLoading(false);
      return json;
    } catch {
      setIsLoading(false);
      return { success: false, message: 'Failed to update password. Ensure backend API is active.' };
    }
  };

  const updateInquiryStatus = async (id, status) => {
    setInquiries((prev) => {
      const updated = prev.map((inq) => (inq.id === id ? { ...inq, status } : inq));
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
      } catch {}
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
    } catch (err) {
      console.warn('API update status fallback:', err);
    }
  };

  const updateInquiryNotes = async (id, notes) => {
    setInquiries((prev) => {
      const updated = prev.map((inq) => (inq.id === id ? { ...inq, notes } : inq));
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
      } catch {}
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      });
    } catch (err) {
      console.warn('API update notes fallback:', err);
    }
  };

  const markAsRead = async (id) => {
    setInquiries((prev) => {
      const updated = prev.map((inq) => (inq.id === id ? { ...inq, read: true } : inq));
      setUnreadCount(updated.filter((item) => !item.read).length);
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
      } catch {}
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true }),
      });
    } catch (err) {
      console.warn('API mark as read fallback:', err);
    }
  };

  const deleteInquiry = async (id) => {
    setInquiries((prev) => {
      const updated = prev.filter((inq) => inq.id !== id);
      setUnreadCount(updated.filter((item) => !item.read).length);
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
      } catch {}
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('API delete fallback:', err);
    }
  };

  const bulkDeleteInquiries = async (ids) => {
    if (!Array.isArray(ids) || ids.length === 0) return;

    setInquiries((prev) => {
      const updated = prev.filter((inq) => !ids.includes(inq.id));
      setUnreadCount(updated.filter((item) => !item.read).length);
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
      } catch {}
      return updated;
    });

    try {
      await fetch(`${API_BASE}/inquiries/bulk-delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids }),
      });
    } catch (err) {
      console.warn('API bulk delete fallback:', err);
    }
  };

  const contextValue = useMemo(
    () => ({
      inquiries,
      unreadCount,
      adminUser,
      isLoggedIn,
      isLoading,
      toastNotification,
      soundEnabled,
      setSoundEnabled,
      isAdminLoginOpen,
      openAdminLogin,
      closeAdminLogin,
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
      playChime: playNotificationChime,
    }),
    [
      inquiries,
      unreadCount,
      adminUser,
      isLoggedIn,
      isLoading,
      toastNotification,
      soundEnabled,
      isAdminLoginOpen,
      openAdminLogin,
      closeAdminLogin,
    ]
  );

  return (
    <InquiryContext.Provider value={contextValue}>
      {children}

      {toastNotification && (
        <div className="fixed bottom-6 right-6 z-[9999] max-w-md w-full transition-all duration-300">
          <div className="bg-[#180930]/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-start justify-between gap-3.5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-sm">
                {toastNotification.type === 'user' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Bell className="w-5 h-5" />
                )}
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-amber-300 tracking-wide">
                  {toastNotification.title}
                </div>
                {toastNotification.message ? (
                  <p className="text-xs text-gray-200 leading-relaxed font-normal">
                    {toastNotification.message}
                  </p>
                ) : (
                  <div className="text-xs text-gray-200">
                    <p className="font-medium text-white">
                      {toastNotification.name} ({toastNotification.phone})
                    </p>
                    {toastNotification.service && (
                      <p className="text-gray-400 truncate max-w-[220px]">
                        {toastNotification.service}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setToastNotification(null)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
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

