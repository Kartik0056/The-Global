import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  ShieldCheck, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  AlertCircle,
  Loader2,
  LockKeyhole,
  Check
} from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

export default function AdminLoginDrawer({ isOpen, onClose }) {
  const { login } = useInquiry();
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!adminId.trim() || !password) {
      setErrorMessage('Please enter both Admin ID and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await login(adminId.trim(), password);
      if (res.success) {
        onClose();
        navigate('/admin');
      } else {
        setErrorMessage(res.message || 'Invalid credentials. Please try again.');
      }
    } catch {
      setErrorMessage('Authentication service temporarily unavailable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9990] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        aria-label="Admin Login Drawer"
        aria-modal="true"
        role="dialog"
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#150727] border-l border-amber-400/20 shadow-2xl z-[9999] flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 sm:p-7 border-b border-white/10 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold font-mono tracking-widest text-amber-400 uppercase block">
                  Secure Access
                </span>
                <h2 className="text-xl font-bold font-heading text-white">
                  Admin Sign In
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-300 mt-3 leading-relaxed">
            Enter your administrative credentials to manage inquiries, pipeline status, and consultations.
          </p>
        </div>

        <div className="p-6 sm:p-7 flex-1 overflow-y-auto">
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              <div className="leading-relaxed">{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label 
                htmlFor="admin-identifier" 
                className="block text-xs font-semibold text-gray-200 mb-1.5"
              >
                Admin ID / Email / Phone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="admin-identifier"
                  type="text"
                  required
                  autoFocus={isOpen}
                  autoComplete="username"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  placeholder="admin or admin@theglobal.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f041d] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="admin-password" 
                className="block text-xs font-semibold text-gray-200 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#0f041d] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label 
                onClick={(e) => {
                  e.preventDefault();
                  setRememberMe(!rememberMe);
                }}
                className="flex items-center gap-2.5 cursor-pointer text-gray-300 hover:text-white select-none group"
              >
                <div 
                  className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all duration-200 ${
                    rememberMe 
                      ? 'bg-amber-400 border-amber-300 text-[#10061e] shadow-[0_0_12px_rgba(245,158,11,0.5)]' 
                      : 'bg-[#0f041d] border-white/30 text-transparent group-hover:border-amber-400/60'
                  }`}
                >
                  <Check className={`w-3 h-3 stroke-[3] transition-transform ${rememberMe ? 'scale-100' : 'scale-0'}`} />
                </div>
                <span className="font-medium text-xs text-[#d1c4e9] group-hover:text-white transition-colors">
                  Remember this device
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-3"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to CRM</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="p-5 border-t border-white/10 bg-[#0f041d]/70 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
            <LockKeyhole className="w-3.5 h-3.5 text-amber-400" />
            <span>End-to-end encrypted administrative portal</span>
          </div>
        </div>
      </aside>
    </>
  );
}
