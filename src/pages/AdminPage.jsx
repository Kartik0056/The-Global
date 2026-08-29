import React, { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Phone, 
  Mail, 
  Building, 
  Calendar, 
  MessageSquare, 
  Search, 
  Filter, 
  Volume2, 
  VolumeX, 
  Bell, 
  LogOut, 
  Send, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Trash2, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  BarChart3,
  KeyRound,
  Smartphone,
  Shield,
  RefreshCw,
  X
} from 'lucide-react';

export default function AdminPage() {
  const { 
    inquiries, 
    unreadCount, 
    adminUser, 
    isLoggedIn, 
    openAdminLogin,
    login, 
    logout, 
    updateInquiryStatus, 
    updateInquiryNotes, 
    markAsRead, 
    deleteInquiry,
    bulkDeleteInquiries,
    soundEnabled,
    setSoundEnabled,
    playChime,
    requestOTP,
    changePassword
  } = useInquiry();

  // CRM Filter & Selection States
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [customReplyMessage, setCustomReplyMessage] = useState('');
  const [selectedLeadIds, setSelectedLeadIds] = useState([]);

  // Checkbox Selection Helpers
  const toggleSelectLead = (id) => {
    setSelectedLeadIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = () => {
    if (selectedLeadIds.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedLeadIds.length} selected lead(s)?`)) {
      bulkDeleteInquiries(selectedLeadIds);
      setSelectedLeadIds([]);
    }
  };

  // Password Change Security Modal States
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [secTab, setSecTab] = useState('old_pass'); // 'old_pass' or 'otp'
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [otpDestination, setOtpDestination] = useState('9899933768');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [activeOtpCode, setActiveOtpCode] = useState('');
  const [secMessage, setSecMessage] = useState(null); // { type: 'success' | 'error', text }

  // Quick Reply Message Templates
  const replyTemplates = [
    {
      title: 'Initial Acknowledgement',
      text: (inq) => `Hello ${inq.name}, thank you for reaching out to The Global Enterprises regarding your inquiry for ${inq.service}. We have received your details and our senior engineering team will contact you shortly.`
    },
    {
      title: 'Schedule Technical Audit',
      text: (inq) => `Dear ${inq.name}, regarding your ${inq.service} project at ${inq.location}, we would like to schedule a 30-minute technical site audit. Please let us know your preferred date and time.`
    },
    {
      title: 'Send Commercial BOQ Quotation',
      text: (inq) => `Hello ${inq.name}, your preliminary turnkey proposal for ${inq.service} is ready. We have customized the specifications for ${inq.company}. Shall we email the official document to ${inq.email}?`
    }
  ];

  // Open Direct WhatsApp Chat with Pre-filled Message
  const openWhatsApp = (phone, text) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const formattedPhone = cleanPhone.length === 10 ? '91' + cleanPhone : cleanPhone;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${formattedPhone}?text=${encodedText}`, '_blank');
  };

  // Handle Request OTP
  const handleSendOTP = async () => {
    setSecMessage(null);
    const res = await requestOTP(otpDestination);
    if (res.success) {
      setActiveOtpCode(res.otpDemo || '849201');
      setSecMessage({
        type: 'success',
        text: res.message + ` (Live Verification OTP: ${res.otpDemo || '849201'})`
      });
    } else {
      setSecMessage({ type: 'error', text: 'Failed to dispatch OTP.' });
    }
  };

  // Handle Password Change Submission
  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();
    setSecMessage(null);

    if (newPass !== confirmPass) {
      setSecMessage({ type: 'error', text: 'New password and Confirm password do not match!' });
      return;
    }

    if (newPass.length < 4) {
      setSecMessage({ type: 'error', text: 'New password must be at least 4 characters long.' });
      return;
    }

    let payload = {};
    if (secTab === 'old_pass') {
      payload = { mode: 'old_password', oldPassword: oldPass, newPassword: newPass };
    } else {
      payload = { mode: 'otp', otpCode: enteredOtp, newPassword: newPass };
    }

    const res = await changePassword(payload);
    if (res.success) {
      setSecMessage({ type: 'success', text: res.message });
      setOldPass('');
      setNewPass('');
      setConfirmPass('');
      setEnteredOtp('');
      setTimeout(() => {
        setIsSecurityModalOpen(false);
        setSecMessage(null);
      }, 2500);
    } else {
      setSecMessage({ type: 'error', text: res.message });
    }
  };

  // Filtered Inquiries (Dynamic Array)
  const filteredInquiries = inquiries.filter(inq => {
    const matchesTab = 
      activeTab === 'ALL' ? true :
      activeTab === 'NEW' ? inq.status === 'New' :
      activeTab === 'IN_PROGRESS' ? inq.status === 'In Progress' :
      activeTab === 'CONTACTED' ? inq.status === 'Contacted' :
      activeTab === 'CLOSED' ? inq.status === 'Closed' : true;

    const matchesSearch = 
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      inq.service.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  // Dynamic Pipeline Metrics
  const newLeadsCount = inquiries.filter(i => i.status === 'New').length;
  const inProgressCount = inquiries.filter(i => i.status === 'In Progress').length;
  const closedCount = inquiries.filter(i => i.status === 'Closed').length;

  // -------------------------------------------------------------
  // VIEW 1: ADMIN LOGIN PORTAL (Unauthenticated State)
  // -------------------------------------------------------------
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-[#0d041a] relative overflow-hidden px-4">
        {/* Glow Effects */}
        <div className="bg-glow-orb w-[500px] h-[500px] bg-purple-700/20 top-10 left-10"></div>
        <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/15 bottom-10 right-10"></div>

        <div className="max-w-md w-full glass-card p-8 sm:p-10 rounded-3xl border border-amber-400/30 text-center relative z-10 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-400 mx-auto flex items-center justify-center mb-5 shadow-lg">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
            Restricted CRM Dashboard
          </span>
          <h1 className="text-2xl font-bold font-heading text-white mb-3">
            Admin Authentication Required
          </h1>
          <p className="text-xs text-gray-300 leading-relaxed mb-6">
            Access to client inquiries, leads pipeline, and consultation schedules requires verified administrative sign-in.
          </p>

          <button
            onClick={openAdminLogin}
            className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Open Admin Sign In</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED DYNAMIC ADMIN CRM BOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0d041a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                DYNAMIC CENTRAL CRM BOARD &bull; LIVE DATABASE ACTIVE
              </span>
            </div>
            <h1 className="text-3xl font-black font-heading text-white">
              INQUIRIES &amp; <span className="text-gold-gradient">LEADS CRM</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Delete Selected Leads Button (Bulk Delete) */}
            {selectedLeadIds.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold transition-all flex items-center gap-2 text-xs shadow-lg cursor-pointer animate-pulse"
                title="Delete Selected Leads"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Selected ({selectedLeadIds.length}) Leads</span>
              </button>
            )}

            {/* Password & Security Modal Trigger */}
            <button
              onClick={() => setIsSecurityModalOpen(true)}
              className="p-2.5 rounded-xl bg-[#2b1250] border border-amber-400/60 text-amber-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-md"
              title="Change Password & Security Settings"
            >
              <KeyRound className="w-4 h-4 text-amber-400" />
              <span>Change Password</span>
            </button>

            {/* Audio Chime Notification Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playChime();
              }}
              title={soundEnabled ? 'Audio Chime Enabled' : 'Audio Chime Muted'}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 text-xs font-bold cursor-pointer ${
                soundEnabled 
                  ? 'bg-amber-400/20 border-amber-400 text-amber-300' 
                  : 'bg-white/5 border-white/10 text-gray-400'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{soundEnabled ? 'Audio Chime ON' : 'Muted'}</span>
            </button>

            {/* Notification Bell Badge */}
            <div className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-amber-400">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white font-bold text-[10px] flex items-center justify-center shadow-lg animate-pulse">
                  {unreadCount}
                </span>
              )}
            </div>

            {/* Admin Profile & Logout */}
            <div className="flex items-center gap-3 pl-3 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-white">{adminUser.name || 'Super Admin'}</div>
                <div className="text-[10px] text-amber-400 font-mono">{adminUser.role || 'Super Admin'}</div>
              </div>

              <button
                onClick={logout}
                className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title="Logout Admin Session"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Metrics Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="glass-card p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1d0b38] to-[#120722]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#a895be] uppercase">TOTAL DYNAMIC LEADS</span>
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-black text-white font-heading">{inquiries.length}</div>
            <div className="text-[11px] text-emerald-400 mt-1 font-semibold">100% Real Website Submissions</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-amber-400/40 bg-gradient-to-br from-[#29104f] to-[#16082b]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-amber-300 uppercase">UNREAD LEADS</span>
              <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
            </div>
            <div className="text-3xl font-black text-amber-300 font-heading">{unreadCount}</div>
            <div className="text-[11px] text-amber-400 mt-1 font-semibold">Action Required</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1d0b38] to-[#120722]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#a895be] uppercase">ACTIVE IN PROGRESS</span>
              <BarChart3 className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl font-black text-white font-heading">{inProgressCount}</div>
            <div className="text-[11px] text-purple-300 mt-1 font-semibold">Under Evaluation</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1d0b38] to-[#120722]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#a895be] uppercase">CLOSED CONVERTED</span>
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-emerald-400 font-heading">{closedCount}</div>
            <div className="text-[11px] text-[#c4b5fd] mt-1">Completed Turnkey Contracts</div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="glass-card p-4 rounded-2xl border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { label: 'ALL LEADS', key: 'ALL', count: inquiries.length },
              { label: 'NEW', key: 'NEW', count: newLeadsCount },
              { label: 'IN PROGRESS', key: 'IN_PROGRESS', count: inProgressCount },
              { label: 'CLOSED', key: 'CLOSED', count: closedCount }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-amber-400 text-[#120722] shadow-lg font-black'
                    : 'bg-white/5 border border-white/10 text-[#d1c4e9] hover:bg-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  activeTab === tab.key ? 'bg-[#120722] text-amber-300' : 'bg-white/10 text-white'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Name, Phone, Service..."
              className="w-full bg-[#16082b] border border-white/15 rounded-xl py-2 pl-10 pr-4 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Main Dynamic Leads List */}
        <div className="space-y-6">
          {filteredInquiries.length === 0 ? (
            <div className="glass-card p-14 text-center rounded-3xl border border-amber-400/30 bg-[#16082b]">
              <FileText className="w-14 h-14 text-amber-400/40 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">No Leads Received Yet</h3>
              <p className="text-xs sm:text-sm text-[#d1c4e9] max-w-md mx-auto leading-relaxed">
                Your CRM database is 100% dynamic! Any form submission or meeting booked on the website will automatically pop up here with live sound notifications.
              </p>
            </div>
          ) : (
            filteredInquiries.map((inq) => (
              <div
                key={inq.id}
                onClick={() => markAsRead(inq.id)}
                className={`glass-card p-6 sm:p-7 rounded-3xl border transition-all relative overflow-hidden group ${
                  !inq.read 
                    ? 'border-amber-400/70 bg-gradient-to-r from-[#260e47] via-[#1a0833] to-[#1a0833] shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
                    : 'border-white/10 hover:border-amber-400/40 bg-[#16082b]'
                }`}
              >
                {!inq.read && (
                  <div className="absolute top-0 left-0 bg-amber-400 text-[#120722] text-[9px] font-black px-3 py-1 rounded-br-xl font-mono uppercase tracking-widest">
                    NEW UNREAD INQUIRY
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pt-2">
                  
                  {/* Left Column: Lead Details */}
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Lead Selection Checkbox for Bulk Actions */}
                      <label className="flex items-center gap-2 cursor-pointer bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg hover:bg-white/10">
                        <input
                          type="checkbox"
                          checked={selectedLeadIds.includes(inq.id)}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleSelectLead(inq.id);
                          }}
                          className="w-4 h-4 accent-amber-400 cursor-pointer rounded"
                        />
                        <span className="text-[11px] font-mono font-bold text-amber-300">Select</span>
                      </label>

                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
                        {inq.id}
                      </span>
                      <span className="text-xs text-[#a895be] font-mono">
                        {new Date(inq.createdAt).toLocaleString()}
                      </span>
                      
                      {/* Status Selector Dropdown */}
                      <select
                        value={inq.status}
                        onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                        className={`text-xs font-bold px-3 py-1 rounded-full border cursor-pointer focus:outline-none ${
                          inq.status === 'New' ? 'bg-red-500/20 text-red-300 border-red-500/50' :
                          inq.status === 'In Progress' ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' :
                          inq.status === 'Contacted' ? 'bg-purple-500/20 text-purple-300 border-purple-500/50' :
                          'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                        }`}
                      >
                        <option value="New" className="bg-[#120722] text-white">🔴 Status: New</option>
                        <option value="In Progress" className="bg-[#120722] text-white">🟡 Status: In Progress</option>
                        <option value="Contacted" className="bg-[#120722] text-white">🟣 Status: Contacted</option>
                        <option value="Closed" className="bg-[#120722] text-white">🟢 Status: Closed</option>
                      </select>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold font-heading text-white flex items-center gap-2">
                        <span>{inq.name}</span>
                        {inq.company && <span className="text-xs font-semibold text-amber-300">({inq.company})</span>}
                      </h3>
                      <div className="text-xs font-bold text-amber-400 mt-1 uppercase tracking-wider">
                        Required Service: {inq.service}
                      </div>
                    </div>

                    {/* Contact Pills */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#d1c4e9]">
                      <div className="flex items-center gap-1.5 font-mono font-semibold text-white bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span>{inq.phone}</span>
                      </div>

                      {inq.email && (
                        <div className="flex items-center gap-1.5 font-mono text-[#d1c4e9] bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                          <Mail className="w-3.5 h-3.5 text-purple-400" />
                          <span>{inq.email}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 text-amber-300 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/30 font-bold">
                        <span>Budget: {inq.budget}</span>
                      </div>
                    </div>

                    {/* Client Message Payload */}
                    <div className="p-3.5 rounded-2xl bg-[#100422] border border-white/5 text-xs text-[#d1c4e9] leading-relaxed">
                      <span className="font-bold text-white block mb-0.5">Inquiry Details &amp; Requirements:</span>
                      <span>{inq.message}</span>
                    </div>

                    {/* Saved Admin Internal Notes */}
                    {inq.notes && (
                      <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs text-purple-200">
                        <span className="font-bold text-amber-300 block mb-0.5">Admin Internal Notes:</span>
                        <span>{inq.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Direct 1-Click Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider font-mono">
                      DIRECT CUSTOMER ACTION
                    </span>

                    {/* 💬 DIRECT WHATSAPP MESSAGE BUTTON */}
                    <button
                      onClick={() => openWhatsApp(inq.phone, replyTemplates[0].text(inq))}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send WhatsApp Msg</span>
                    </button>

                    {/* 📞 DIRECT CALL BUTTON */}
                    <a
                      href={`tel:${inq.phone}`}
                      className="w-full bg-amber-400 hover:bg-amber-300 text-[#120722] font-extrabold text-xs py-2.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Direct Phone Call</span>
                    </a>

                    {/* ✉️ EMAIL BUTTON */}
                    {inq.email && (
                      <a
                        href={`mailto:${inq.email}?subject=Regarding your infrastructure inquiry with The Global Enterprises&body=${encodeURIComponent(replyTemplates[0].text(inq))}`}
                        className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2 px-4 rounded-xl transition-all border border-white/20 flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4 text-amber-400" />
                        <span>Send Official Email</span>
                      </a>
                    )}

                    {/* Interactive Action Details Modal Button */}
                    <button
                      onClick={() => {
                        setSelectedInquiry(inq);
                        setEditingNotes(inq.notes || '');
                        setCustomReplyMessage(replyTemplates[0].text(inq));
                      }}
                      className="w-full bg-[#261047] hover:bg-[#32165b] text-amber-300 font-bold text-xs py-2 px-4 rounded-xl border border-amber-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Quick Templates &amp; Notes</span>
                    </button>

                    {/* Delete Lead Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm(`Are you sure you want to delete lead ${inq.name}?`)) {
                          deleteInquiry(inq.id);
                        }
                      }}
                      className="text-red-400 hover:text-red-300 text-[11px] font-semibold flex items-center justify-center gap-1 mt-2 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete Lead</span>
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* SECURITY & PASSWORD CHANGE MODAL (Old Password OR OTP) */}
      {/* ------------------------------------------------------------- */}
      {isSecurityModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-amber-400/60 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <KeyRound className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold font-heading text-white">
                  CHANGE ADMIN PASSWORD
                </h3>
              </div>
              <button
                onClick={() => setIsSecurityModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-6 p-1 rounded-xl bg-[#120626] border border-white/10">
              <button
                onClick={() => setSecTab('old_pass')}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  secTab === 'old_pass' ? 'bg-amber-400 text-[#120722]' : 'text-gray-300 hover:text-white'
                }`}
              >
                Via Old Password
              </button>
              <button
                onClick={() => setSecTab('otp')}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  secTab === 'otp' ? 'bg-amber-400 text-[#120722]' : 'text-gray-300 hover:text-white'
                }`}
              >
                Via Email / Mobile OTP
              </button>
            </div>

            {secMessage && (
              <div className={`mb-5 p-3 rounded-xl border text-xs flex items-center gap-2 ${
                secMessage.type === 'success' 
                  ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300' 
                  : 'bg-red-950/80 border-red-500/50 text-red-300'
              }`}>
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{secMessage.text}</span>
              </div>
            )}

            <form onSubmit={handlePasswordChangeSubmit} className="space-y-4">
              
              {/* MODE 1: Old Password */}
              {secTab === 'old_pass' && (
                <div>
                  <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                    Current Old Password
                  </label>
                  <input
                    type="password"
                    required
                    value={oldPass}
                    onChange={(e) => setOldPass(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full bg-[#16082b] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}

              {/* MODE 2: OTP Verification */}
              {secTab === 'otp' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                      Registered Email or Mobile Number
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        value={otpDestination}
                        onChange={(e) => setOtpDestination(e.target.value)}
                        placeholder="e.g. 9899933768 or admin@theglobal.com"
                        className="flex-1 bg-[#16082b] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                      <button
                        type="button"
                        onClick={handleSendOTP}
                        className="btn-gold px-3.5 py-2 rounded-xl text-xs font-bold shrink-0"
                      >
                        Send OTP
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                      Enter 6-Digit OTP Code
                    </label>
                    <input
                      type="text"
                      required
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                      placeholder="e.g. 849201"
                      className="w-full bg-[#16082b] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs text-white font-mono font-bold tracking-widest focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              )}

              {/* New Password */}
              <div>
                <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                  New Admin Password
                </label>
                <input
                  type="password"
                  required
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder="Enter new strong password"
                  className="w-full bg-[#16082b] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full bg-[#16082b] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Shield className="w-4 h-4" />
                <span>Save New Password &amp; Update Security</span>
              </button>
            </form>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* QUICK TEMPLATES & NOTES MODAL */}
      {/* ------------------------------------------------------------- */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-amber-400/60 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                  LEAD ACTION CENTER &bull; {selectedInquiry.id}
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  {selectedInquiry.name} ({selectedInquiry.phone})
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-lg hover:bg-white/20"
              >
                &times;
              </button>
            </div>

            {/* Quick WhatsApp Reply Message Generator */}
            <div className="mb-6 space-y-3">
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider">
                Select Pre-Filled WhatsApp / SMS Response Template:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {replyTemplates.map((tmpl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCustomReplyMessage(tmpl.text(selectedInquiry))}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400 text-left text-xs font-bold text-white transition-all"
                  >
                    {tmpl.title}
                  </button>
                ))}
              </div>

              <textarea
                rows={4}
                value={customReplyMessage}
                onChange={(e) => setCustomReplyMessage(e.target.value)}
                className="w-full bg-[#120722] border border-white/20 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400"
              />

              <button
                onClick={() => openWhatsApp(selectedInquiry.phone, customReplyMessage)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch to WhatsApp Now ({selectedInquiry.phone})</span>
              </button>
            </div>

            {/* Admin Internal Notes Textarea */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider">
                Save Internal Admin Notes:
              </label>
              <textarea
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Add private office notes regarding site visits, quotation status, procurement..."
                className="w-full bg-[#120722] border border-white/20 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400"
              />
              <button
                onClick={() => {
                  updateInquiryNotes(selectedInquiry.id, editingNotes);
                  setSelectedInquiry(null);
                }}
                className="btn-gold w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider"
              >
                Save Notes &amp; Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
