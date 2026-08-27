import React from 'react';
import ContactSection from '../components/ContactSection';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  Building,
  PhoneCall,
  Calendar,
  CheckCircle,
  Headphones
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Front Hero Header with Layered Executive HQ Background Image */}
      <div className="relative min-h-[420px] sm:min-h-[460px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/headquarters.jpg"
            alt="The Global Enterprises Executive Consultation Headquarters"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d041a]/95 via-[#120722]/85 to-[#120722]"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-60"></div>
        </div>

        {/* Ambient Glows */}
        <div className="bg-glow-orb w-[500px] h-[500px] bg-purple-700/20 -top-20 left-1/4"></div>
        <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/15 bottom-0 right-1/4"></div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#261047]/90 border border-amber-400/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-[0.2em] text-amber-300 uppercase">
              DIRECT CONSULTATION &amp; SCOPE ESTIMATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-[1.1] mb-5">
            CONTACT &amp; <span className="text-gold-gradient">TURNKEY PROPOSAL</span>
          </h1>

          <p className="text-base sm:text-lg text-[#d1c4e9] max-w-3xl mx-auto leading-relaxed">
            Reach our national engineering directors at CR Park, New Delhi or submit your workspace specifications for an itemized BOQ estimate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs text-[#d8b4fe]">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 98999 33768</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>globalenterprises010@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>HQ Open: Mon - Sat 9:00 AM - 7:00 PM IST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact & RFQ Form Component */}
      <ContactSection />

      {/* Emergency AMC & Direct SLA Support Section */}
      <section className="py-20 bg-[#10061e] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* AMC 4-Hour Support Hotline */}
            <div className="glass-card p-8 rounded-3xl border border-amber-400/40 bg-gradient-to-br from-[#240e44] to-[#15082a] flex flex-col justify-between shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  FOR EXISTING AMC PARTNERS
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-2">
                  24/7 Emergency Dispatch Helpline
                </h3>
                <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed mb-6">
                  Existing corporate and defense AMC clients can reach our dedicated on-call engineering dispatcher for guaranteed 4-hour on-site escalation.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="tel:+919899933768"
                  className="btn-gold px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Emergency Dispatch</span>
                </a>
              </div>
            </div>

            {/* Experience Studio Directions & Visits */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-[#16082c] flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">
                  NATIONAL HEADQUARTERS
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-2">
                  CR Park Experience Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed mb-6">
                  52/21 Basement, Pocket 52, Chittaranjan Park (CR Park), New Delhi, Delhi 110019. Easily accessible via Greater Kailash &amp; Nehru Place metro links.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://maps.google.com/?q=CR+Park+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 hover:border-amber-400"
                >
                  <span>Open in Google Maps</span>
                  <MapPin className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
