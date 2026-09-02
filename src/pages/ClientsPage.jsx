import React from 'react';
import ClientsSection from '../components/ClientsSection';
import {
  Shield,
  Award,
  ArrowRight,
  Star
} from 'lucide-react';

export default function ClientsPage({ onOpenSchedule }) {
  const testimonials = [
    {
      quote: 'The Global Enterprises transformed our flight operations security. Their single-accountable turnkey model eliminated vendor friction entirely.',
      author: 'Senior Infrastructure Director',
      org: 'Aviation Fleet Client',
      badge: 'Verified Aviation Partner'
    },
    {
      quote: 'Their guaranteed emergency on-site AMC response has kept our logistics hubs running with zero surveillance downtime for over 4 years.',
      author: 'Head of Facility Operations',
      org: 'Global Logistics Partner',
      badge: 'Verified Logistics Partner'
    },
    {
      quote: 'From Dorset smart locks to 4K boardrooms and network cabling, the craftsmanship and attention to detail from Sachin and his team are exemplary.',
      author: 'Chief Operating Officer',
      org: 'NCR Corporate Technology Hub',
      badge: 'Verified Corporate Partner'
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative min-h-[280px] sm:min-h-[320px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/firesafety.jpg"
            alt="Mission Critical Security & Corporate Clients"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d041a]/95 via-[#120722]/85 to-[#120722]"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-60"></div>
        </div>

        <div className="bg-glow-orb w-[500px] h-[500px] bg-purple-700/20 -top-20 left-1/3"></div>
        <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/15 bottom-0 right-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 mb-2.5 px-3 py-1 rounded-full bg-[#261047]/90 border border-amber-400/40 backdrop-blur-md">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-black tracking-[0.2em] text-amber-300 uppercase">
              CLIENT COMMUNITY &amp; TRUST
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight mb-3">
            OUR COMMUNITY <span className="text-gold-gradient">OF CLIENTS</span>
          </h1>

          <p className="text-sm sm:text-base text-[#d1c4e9] max-w-3xl mx-auto leading-relaxed">
            Proudly serving leading airlines (<span className="text-white font-semibold">Air India, IndiGo, British Airways, Air Canada, Air France, Etihad, Akasa Air, Egypt Air, Singapore Airlines</span>), corporations (<span className="text-white font-semibold">FedEx Express, Rio Tinto India</span>), and national safety forces (<span className="text-white font-semibold">Civil Defense &amp; NDRF</span>).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 text-xs text-[#d8b4fe]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400" />
              <span>200+ Enterprise Installations</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Aviation &amp; Defense Trusted</span>
            </div>
          </div>
        </div>
      </div>

      <ClientsSection onOpenSchedule={onOpenSchedule} />

      <section className="py-14 sm:py-16 bg-[#140828] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge justify-center mb-2">SATISFIED CLIENTS</div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              SEE WHAT OUR SATISFIED <span className="text-gold-gradient">CLIENTS ARE SAYING</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card p-7 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all bg-[#17082f]"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm italic text-[#e9d5ff] leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-bold text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#b8a7dc]">
                    {t.org}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1">
                    {t.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#220c3d] via-[#16082b] to-[#220c3d] border-t border-amber-400/30 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-black font-heading text-white mb-3">
            Ready to enhance your workplace security and efficiency?
          </h3>
          <p className="text-xs sm:text-sm text-[#d1c4e9] max-w-xl mx-auto mb-6">
            Join over 200+ thriving enterprises, airlines, and corporate facilities.
          </p>
          <button
            onClick={onOpenSchedule}
            className="btn-gold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-2xl cursor-pointer"
          >
            <span>Join Us Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
