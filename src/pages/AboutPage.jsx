import React from 'react';
import AboutSection from '../components/AboutSection';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  Users, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Building
} from 'lucide-react';

export default function AboutPage({ onOpenSchedule }) {
  const coreStrengths = [
    {
      icon: ShieldCheck,
      title: 'Tech That Works For You',
      desc: 'Security systems including CCTV, body-worn cameras, access control, fire safety, and full system integration.'
    },
    {
      icon: Building,
      title: 'Spaces That Inspire',
      desc: 'Interior fit-outs that reflect your company personality, ergonomic furniture, custom partitioning, and essential setups.'
    },
    {
      icon: Users,
      title: 'Relationships Over Transactions',
      desc: 'Full turnkey project management and ongoing maintenance services to keep everything running smoothly for years to come.'
    },
    {
      icon: Award,
      title: 'Proven Client Trust',
      desc: 'Trusted by IndiGo, FedEx Express, Rio Tinto India, Civil Defense, NDRF, and over 200+ thriving businesses across India.'
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative min-h-[420px] sm:min-h-[460px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/headquarters.jpg"
            alt="Global Enterprises Headquarters"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e041b]/95 via-[#140828]/85 to-[#140828]"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-60"></div>
        </div>

        <div className="bg-glow-orb w-[500px] h-[500px] bg-purple-700/20 -top-20 left-1/4"></div>
        <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/15 bottom-0 right-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#261047]/90 border border-amber-400/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-[0.2em] text-amber-300 uppercase">
              ABOUT GLOBAL ENTERPRISES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-[1.1] mb-5">
            MAKING BUSINESS LIFE <span className="text-gold-gradient">EASIER</span>
          </h1>

          <p className="text-base sm:text-lg text-[#d1c4e9] max-w-3xl mx-auto leading-relaxed">
            Founded in 2017 by <span className="text-amber-400 font-semibold">Mr. Sachin Arora</span> and <span className="text-amber-400 font-semibold">Mrs. Rajni Arora</span>, Global Enterprises is your one-stop solution for modern workplace technology and secure office spaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs text-[#d8b4fe]">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Established 2017</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>CR Park, New Delhi</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Trusted by 200+ Businesses</span>
            </div>
          </div>
        </div>
      </div>

      <AboutSection onOpenSchedule={onOpenSchedule} />

      <section className="py-24 bg-[#10061e] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-badge justify-center mb-2">OUR COMMITMENT</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-2">
              Why Companies Partner With Us
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c4e9]">
              Every project is managed with personal accountability, genuine craftsmanship, and long-term care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between bg-[#16082c]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4 shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#d1c4e9] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 glass-card p-8 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-[#240e44] via-[#16082b] to-[#240e44] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                <MapPin className="w-4 h-4" />
                <span>HEADQUARTERS &bull; CR PARK, NEW DELHI</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Visit Our Office in New Delhi
              </h3>
              <p className="text-xs sm:text-sm text-[#d1c4e9] max-w-2xl leading-relaxed">
                52/21 Basement, Pocket 52, CR Park, New Delhi-110019. Let&apos;s discuss your workspace technology, security, and interior design requirements.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={onOpenSchedule}
                className="btn-gold px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Schedule a meeting</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
