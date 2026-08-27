import React, { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Calculator,
  Building2,
  FileSpreadsheet
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { submitInquiry } = useInquiry();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    service: 'Security & Workspace Solutions',
    budget: 'Select budget range',
    facilityType: 'Corporate Headquarters',
    estimatedArea: '5,000 - 15,000 sq.ft'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    'Security & Workspace Solutions',
    '4K CCTV & Body-Worn Cameras',
    'Access Control & Speed Gates',
    'Fire Safety Installation',
    'Audio-Visual Collaboration',
    'Interior Fit-Outs & Ergonomic Furniture',
    'System Integration & Turnkey Management'
  ];

  const budgetOptions = [
    'Select budget range',
    'Below $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Submit to Central CRM Backend & Trigger Audio Chime
    await submitInquiry({
      name: formData.fullName,
      company: formData.companyName || 'Enterprise Corporate Client',
      phone: formData.phoneNumber,
      email: formData.email,
      service: formData.service,
      budget: formData.budget,
      location: `${formData.facilityType} (${formData.estimatedArea})`,
      message: `Inquiry submitted for ${formData.service}. Estimated facility area: ${formData.estimatedArea}.`
    });

    setLoading(false);
    setIsSubmitted(true);
    
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#a855f7', '#ec4899', '#38bdf8']
    });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#140828] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="bg-glow-orb w-[600px] h-[600px] bg-amber-500/10 -top-20 -right-20"></div>
      <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/20 bottom-0 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-badge justify-center mb-3">ENTERPRISE CONSULTATION</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4">
            LET&apos;S ARCHITECT YOUR <span className="text-gold-gradient">IDEAL WORKSPACE</span>
          </h2>
          <p className="text-base sm:text-lg text-[#d1c4e9]">
            Speak with our turnkey workspace architects and security engineering directors today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Email Card */}
            <div className="glass-card p-7 rounded-3xl border border-white/10 flex items-start gap-5 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-13 h-13 rounded-2xl bg-[#28114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all shadow-md shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-amber-400">
                  EMAIL US
                </div>
                <a
                  href="mailto:globalenterprises010@gmail.com"
                  className="text-base sm:text-lg font-bold text-white hover:text-amber-300 transition-colors break-all mt-0.5 block"
                >
                  globalenterprises010@gmail.com
                </a>
                <p className="text-xs text-[#b8a7dc] mt-1">
                  Guaranteed response within 2 hours
                </p>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-card p-7 rounded-3xl border border-white/10 flex items-start gap-5 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-13 h-13 rounded-2xl bg-[#28114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all shadow-md shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-amber-400">
                  CALL US
                </div>
                <a
                  href="tel:+919899933768"
                  className="text-lg sm:text-xl font-bold text-white hover:text-amber-300 transition-colors mt-0.5 block"
                >
                  +91 98999 33768
                </a>
                <p className="text-xs text-[#b8a7dc] mt-1">
                  Mon &ndash; Sat from 9:00 AM to 7:00 PM IST
                </p>
              </div>
            </div>

            {/* Visit Headquarters Card */}
            <div className="glass-card p-7 rounded-3xl border border-white/10 flex items-start gap-5 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-13 h-13 rounded-2xl bg-[#28114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all shadow-md shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-amber-400">
                  VISIT US
                </div>
                <p className="text-base font-bold text-white mt-0.5 leading-snug">
                  52/21 Basement, Pocket 52, CR Park, New Delhi-110019
                </p>
                <p className="text-xs text-[#b8a7dc] mt-1">
                  National Headquarters &amp; Experience Studio
                </p>
              </div>
            </div>

            {/* Security Assurance Guarantee */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#240e44] to-[#17082e] border border-amber-400/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs text-[#d1c4e9] leading-relaxed">
                <span className="font-bold text-white">Full NDA Confidentiality:</span> All project proposals, layout blueprints, and security telemetry data remain strictly protected under Indian NDA compliance.
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form & Scope Selector */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl bg-[#1b0a36]/90 backdrop-blur-xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold font-heading text-white mb-2">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[#d1c4e9] max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="text-amber-400 font-semibold">{formData.fullName || 'Valued Partner'}</span>. Our technical director will review your facility requirements and contact you at <span className="text-white font-semibold">{formData.email}</span> within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        companyName: '',
                        phoneNumber: '',
                        service: 'Security & Workspace Solutions',
                        budget: 'Select budget range',
                        facilityType: 'Corporate Headquarters',
                        estimatedArea: '5,000 - 15,000 sq.ft'
                      });
                    }}
                    className="btn-glass px-6 py-2.5 rounded-xl text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-white">
                        Request Turnkey Proposal &amp; BOQ
                      </h3>
                      <p className="text-xs text-[#c4b5fd] mt-0.5">
                        Receive a comprehensive architectural &amp; security estimate for your facility.
                      </p>
                    </div>
                    <FileSpreadsheet className="w-6 h-6 text-amber-400 hidden sm:block" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-[#e9d5ff] uppercase tracking-wider mb-1.5">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-[#e9d5ff] uppercase tracking-wider mb-1.5">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. vikram@enterprise.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-[#e9d5ff] uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="e.g. Tata / Reliance / Startup Hub"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-[#e9d5ff] uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-[11px] font-extrabold text-[#e9d5ff] uppercase tracking-wider mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                    >
                      {servicesList.map((svc, sIdx) => (
                        <option key={sIdx} value={svc} className="bg-[#120722] text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div>
                    <label className="block text-[11px] font-extrabold text-[#e9d5ff] uppercase tracking-wider mb-1.5">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                    >
                      {budgetOptions.map((bgt, bIdx) => (
                        <option key={bIdx} value={bgt} className="bg-[#120722] text-white">
                          {bgt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-[#120722] border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Submit Turnkey Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
