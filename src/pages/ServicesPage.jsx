import React, { useState } from 'react';
import ServicesSection from '../components/ServicesSection';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Building,
  ChevronDown,
  CheckCircle
} from 'lucide-react';

export default function ServicesPage({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What are the components of a complete security system?',
      a: 'A complete security system includes access control, video surveillance (CCTV), intrusion detection, fire alarms, and emergency egress protocols, supported by proper network configuration.'
    },
    {
      q: 'How can I schedule a consultation or site audit?',
      a: 'You can schedule a consultation by calling or emailing us directly, or using the "Schedule a meeting" button on our website.'
    },
    {
      q: 'What are the benefits of using a single vendor for multiple infrastructure needs?',
      a: 'Using a single vendor simplifies project coordination, eliminates finger-pointing between contractors, and ensures smooth integration across security, IT, and interior fit-outs.'
    },
    {
      q: 'What is included in The Global Enterprises Turnkey AMC contract?',
      a: 'Our Turnkey AMC includes scheduled preventative maintenance, sensor calibration, optical lens cleaning, emergency technician dispatch, and dedicated account management.'
    },
    {
      q: 'Are your fire safety installations certified according to safety codes?',
      a: 'Yes. All fire safety installations, control panels, smoke detectors, and emergency linkages comply with statutory safety guidelines and National Building Code (NBC 2016) standards.'
    }
  ];

  const amcTiers = [
    {
      tier: 'Standard Maintenance AMC',
      target: 'Commercial & Retail Facilities',
      response: 'Within 12 Hours',
      visits: 'Quarterly Checkup (4/year)',
      spareParts: 'Standard OEM Rate',
      vmsMonitoring: 'Local Client Access',
      features: [
        'Preventative hardware inspections',
        'Camera lens cleaning & refocusing',
        'Fire alarm bell & zone testing',
        'Direct telephone & email support'
      ]
    },
    {
      tier: 'Enterprise Platinum AMC',
      target: 'Aviation, Logistics & Corporate Campuses',
      badge: 'RECOMMENDED',
      response: 'Guaranteed 4-Hour On-Site SLA',
      visits: 'Bi-Monthly Checkup (6/year)',
      spareParts: 'Priority Sourcing & Direct Replacement',
      vmsMonitoring: 'Central Cloud Monitoring Support',
      features: [
        'Dedicated Lead Systems Engineer',
        'Guaranteed 4-hour emergency dispatch',
        'Full compliance & sensor calibration audits',
        'Hot-swap spare buffer availability',
        'Priority technical phone hotline',
        'Comprehensive multi-year contract options'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative min-h-[420px] sm:min-h-[460px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cctv.jpg"
            alt="Security Surveillance & Smart Workspace Technology"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d041a]/95 via-[#120722]/85 to-[#120722]"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-60"></div>
        </div>

        <div className="bg-glow-orb w-[500px] h-[500px] bg-purple-700/20 -top-20 left-1/3"></div>
        <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/15 bottom-0 right-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#261047]/90 border border-amber-400/40 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-[0.2em] text-amber-300 uppercase">
              COMPREHENSIVE ENTERPRISE SERVICES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-[1.1] mb-5">
            Let's Make Your Place <span className="text-gold-gradient">Safer, Together.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#d1c4e9] max-w-3xl mx-auto leading-relaxed mb-8">
            Surveillance &amp; Monitoring Systems Installed for Your Protection and Convenience. Imagine feeling completely secure, no matter where you are &mdash; we make that happen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenSchedule}
              className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-2xl cursor-pointer"
            >
              <span>Get a Callback</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#d8b4fe]">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Tech That Works For You</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Building className="w-4 h-4 text-purple-300" />
              <span>Spaces That Inspire</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Single Accountable Partner</span>
            </div>
          </div>
        </div>
      </div>

      <ServicesSection onOpenSchedule={onOpenSchedule} />

      <section className="py-24 bg-[#10061e] border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge justify-center mb-2">LIFECYCLE ASSURANCE</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              ANNUAL MAINTENANCE <span className="text-gold-gradient">CONTRACT (AMC) TIERS</span>
            </h2>
            <p className="text-sm text-[#d1c4e9] mt-2">
              Guaranteed technician response times and preventative care for corporate and industrial infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {amcTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`glass-card p-8 rounded-3xl border flex flex-col justify-between relative ${
                  tier.badge
                    ? 'border-amber-400 bg-gradient-to-br from-[#240e44] to-[#15082a] shadow-2xl scale-102'
                    : 'border-white/10 bg-[#16082c]'
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-[#10061e] text-[10px] font-black uppercase tracking-wider shadow">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    SERVICE LEVEL AGREEMENT
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-1">
                    {tier.tier}
                  </h3>
                  <div className="text-xs text-[#b8a7dc] mb-6">
                    Designed for: {tier.target}
                  </div>

                  <div className="space-y-3 p-4 rounded-2xl bg-[#10061e]/80 border border-white/10 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#a895be]">Response SLA:</span>
                      <span className="font-bold text-white">{tier.response}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a895be]">Preventative Audits:</span>
                      <span className="font-bold text-white">{tier.visits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a895be]">VMS &amp; Telemetry:</span>
                      <span className="font-bold text-white">{tier.vmsMonitoring}</span>
                    </div>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#d1c4e9] mb-3">
                    Deliverables Included:
                  </div>
                  <div className="space-y-2 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#d1c4e9]">
                        <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenSchedule}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                    tier.badge ? 'btn-gold' : 'btn-glass'
                  }`}
                >
                  <span>Inquire for Facility AMC</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 bg-[#140828] border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="section-badge justify-center mb-2">COMMON INQUIRIES</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              FREQUENTLY ASKED <span className="text-gold-gradient">QUESTIONS</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c4e9] mt-2">
              Everything you need to know about our solutions, execution, and single-vendor integration.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all bg-[#17082f]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold">Q:</span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#d1c4e9] leading-relaxed border-t border-white/5 pt-3">
                      <span className="text-emerald-400 font-mono font-bold mr-1.5">A:</span>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#17082e] via-[#240f42] to-[#17082e] border-t border-amber-400/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Peace of mind starts here. <span className="text-gold-gradient">Expert security and monitoring installations.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#d1c4e9] max-w-2xl mx-auto mb-6">
            Get in touch with our friendly professionals for custom site assessments, 4K CCTV surveillance, turnstiles, and turnkey facility protection.
          </p>
          <button
            onClick={onOpenSchedule}
            className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-2xl cursor-pointer"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
