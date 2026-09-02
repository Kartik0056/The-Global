import React from 'react';
import {
  Target,
  Layers,
  Leaf,
  Compass,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function MissionSection({ onOpenSchedule }) {
  const pillars = [
    {
      icon: Layers,
      title: 'Quality & Variety',
      desc: 'Comprehensive portfolio of commercial hardware, modular furniture, and custom security packages.',
      metric: '500+ Products'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      desc: 'Eco-conscious materials, energy-efficient lighting, and modular installations built for long lifecycle value.',
      metric: 'Eco-Friendly Systems'
    },
    {
      icon: Compass,
      title: 'Expert Guidance',
      desc: 'Strategic consultation from experienced space architects, network engineers, and safety specialists.',
      metric: 'Certified Engineers'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      desc: 'Dedicated professionals with extensive field experience across aviation, logistics, and corporate facilities.',
      metric: '10+ Years Experience'
    }
  ];

  return (
    <section id="mission" className="relative py-12 sm:py-16 bg-[#140828] overflow-hidden">
      <div className="bg-glow-orb w-[500px] h-[500px] bg-purple-600/15 top-1/3 -left-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-badge mb-2">04 / MISSION</div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight mb-2">
            PROVIDING A <span className="text-gold-gradient">ONE-STOP SOLUTION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between h-full glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 relative shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#271047] border border-amber-400/30 text-amber-300 text-xs font-bold mb-4 sm:mb-6 w-fit">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>Core Purpose &amp; Dedication</span>
              </div>

              <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold font-heading text-white leading-snug mb-4">
                Combining reliable technology with <span className="text-amber-400">dependable support and service.</span>
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-[#d1c4e9] leading-relaxed mb-4">
                Our mission is to provide a single, accountable source for all your workplace infrastructure needs &mdash; combining modern equipment with dedicated ongoing support.
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-[#d1c4e9] leading-relaxed mb-6 sm:mb-8">
                We are committed to delivering tailored, end-to-end solutions that ensure reliable functionality, aesthetic appeal, and long-term durability for every client.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#230f3f] to-purple-600/15 border border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
              <div>
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Turnkey Commitment
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  Designed, Installed &amp; Maintained Under One Roof
                </div>
              </div>
              <button
                onClick={onOpenSchedule}
                className="btn-gold px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Consult</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 sm:p-6 rounded-3xl border border-white/10 hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1 relative flex flex-col justify-between h-full shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#29114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all shadow-md">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-amber-400/80 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                        {pillar.metric}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-heading text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#c4b5fd]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Quality Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
