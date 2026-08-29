import React from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Sparkles, 
  Quote, 
  Award, 
  CheckCircle2, 
  Shield, 
  ArrowRight, 
  Zap, 
  Building 
} from 'lucide-react';

export default function AboutSection({ onOpenSchedule }) {
  const stats = [
    {
      icon: Calendar,
      label: 'ESTABLISHED',
      value: '2017',
      sub: 'Years of continuous industry excellence'
    },
    {
      icon: Users,
      label: 'FOUNDERS',
      value: 'Mr. Sachin & Mrs. Rajni Arora',
      sub: 'Visionary leadership & client relationships'
    },
    {
      icon: MapPin,
      label: 'HEADQUARTERS',
      value: 'CR Park, New Delhi',
      sub: 'Serving enterprises nationwide'
    }
  ];

  const whatWeDoTech = [
    'Security systems including CCTV, body-worn cameras and access control',
    'Audio-visual solutions for conference and collaboration spaces',
    'Fire safety installation and regulatory compliance for workplaces',
    'Integrated systems designed for reliable daily operations'
  ];

  const whatWeDoSpaces = [
    "Interior fit-outs that reflect your company's identity",
    'Ergonomic furniture that keeps your team comfortable',
    'Custom partitioning to create the ideal floor layout',
    'Comprehensive office essentials and infrastructure setup'
  ];

  const coreValues = [
    { title: 'Quality', statement: "We don't cut corners. Ever." },
    { title: 'Timeliness', statement: 'We respect your deadlines because we know they matter.' },
    { title: 'Value', statement: "Fair pricing for exceptional results – that's our promise." },
    { title: 'Dedication', statement: "We're invested in your success and work closely with you every step of the way." },
    { title: 'Integrity', statement: 'Straightforward communication and honest practices are non-negotiable.' },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#140827] overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="section-badge mb-3">ABOUT GLOBAL ENTERPRISES</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              OUR STORY &amp; <span className="text-gold-gradient">VISION</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-[#230e3d] border border-amber-400/30 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg">
              <Award className="w-4 h-4 text-amber-400" />
              <span>One-Stop Enterprise Partner</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 h-full min-h-[440px] bg-[#1a0b32] group shadow-2xl">
              <img
                src="/images/headquarters.jpg"
                alt="Global Enterprises Headquarters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-[#120722]/30 to-transparent"></div>

              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#140828]/95 backdrop-blur-xl border border-amber-400/40 shadow-2xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/95 border border-amber-400/50 shadow-md flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Global Enterprises Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-heading tracking-wide">
                    GLOBAL ENTERPRISES
                  </div>
                  <div className="text-[10px] text-amber-300/90 font-medium">
                    Smart Solutions, Secure Spaces
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-[#160829]/95 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    HEADQUARTERS
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Est. 2017 &bull; New Delhi
                  </span>
                </div>
                <p className="text-xs text-[#d1c4e9] leading-snug">
                  52/21 Basement, Pocket 52, CR Park, New Delhi-110019
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="glass-card p-8 sm:p-9 rounded-3xl border border-white/10 relative overflow-hidden bg-[#1a0a33]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#271047] border border-amber-400/30 text-amber-300 text-xs font-bold mb-5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Our Story</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug mb-4">
                When <span className="text-amber-400 font-semibold">Mr. Sachin Arora</span> and <span className="text-amber-400 font-semibold">Mrs. Rajni Arora</span> founded <span className="text-white">Global Enterprises</span> in 2017, they had a clear vision: <span className="text-purple-200">to build an entity that truly makes business operations straightforward and dependable.</span>
              </h3>

              <p className="text-sm sm:text-base text-[#d1c4e9] leading-relaxed mb-4">
                And that&apos;s exactly what we&apos;ve become – your single-window partner for modern workplace technology and secure office environments.
              </p>

              <p className="text-sm sm:text-base text-[#d1c4e9] leading-relaxed">
                We believe that every business deserves access to quality equipment, expert support, and environments that inspire productivity. That&apos;s why we focus on understanding your specific requirements and delivering solutions that perform day after day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 group bg-[#16082c]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#28114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all mb-3 shadow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                      {stat.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold font-heading text-white mt-0.5 leading-snug">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[#b8a7dc] mt-1 line-clamp-2">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#240e44] via-[#1a0b32] to-[#240e44] border border-amber-400/30 flex items-start gap-4 shadow-xl">
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm italic text-amber-200 font-medium leading-relaxed">
                  &ldquo;Because we believe in long-term relationships rather than one-off transactions, we offer end-to-end turnkey project execution and maintenance support to keep your facilities running smoothly.&rdquo;
                </p>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-amber-400/80">
                  &mdash; Founders: Mr. Sachin &amp; Mrs. Rajni Arora
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge justify-center mb-2">WHAT WE DO</div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-3">
              FOCUS ON <span className="text-gold-gradient">YOUR CORE BUSINESS</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#d1c4e9]">
              We take care of your workspace setup, security infrastructure, and ongoing maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 bg-[#190933]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-heading text-white">
                  Technology Solutions
                </h4>
              </div>

              <div className="space-y-3">
                {whatWeDoTech.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#120722] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-[#d1c4e9]">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 bg-[#190933]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-heading text-white">
                  Workspace Environments
                </h4>
              </div>

              <div className="space-y-3">
                {whatWeDoSpaces.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#120722] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-[#d1c4e9]">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge justify-center mb-2">OUR VALUES</div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-2">
              REAL PEOPLE DELIVERING <span className="text-gold-gradient">REAL RESULTS</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#d1c4e9]">
              The operational principles that guide our everyday client engagements:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all bg-[#17082e] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono mb-2">
                    VALUE 0{idx + 1}
                  </div>
                  <h5 className="text-lg font-bold font-heading text-white mb-2">
                    {val.title}
                  </h5>
                  <p className="text-xs text-[#d1c4e9] leading-relaxed">
                    {val.statement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#270f49] via-[#17082e] to-[#270f49] border border-amber-400/30 mb-16 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>WHY CLIENTS CHOOSE US</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-4">
              Trusted by Private Enterprises &amp; Public Institutions
            </h3>

            <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed mb-4">
              We work with organizations across India &ndash; from dynamic private companies to established brands like <span className="text-white font-semibold">Interglobe Aviation (IndiGo)</span>, <span className="text-white font-semibold">FedEx Express</span>, and <span className="text-white font-semibold">Rio Tinto India</span>, as well as public services including <span className="text-white font-semibold">Civil Defense</span> and the <span className="text-white font-semibold">National Disaster Response Force (NDRF)</span>.
            </p>

            <p className="text-xs sm:text-sm text-[#c4b5fd] leading-relaxed">
              Our clients count on us for reliable delivery, proactive communication, and solutions tailored to their operational scale.
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="section-badge justify-center mb-3">NEXT STEPS</div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-3">
            Ready to Upgrade Your Workspace?
          </h3>
          <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed mb-6">
            Get in touch with our engineering team to discuss your security, audio-visual, or office fit-out requirements.
          </p>
          <div className="p-6 rounded-2xl bg-[#1b0a36] border border-amber-400/30 inline-block">
            <p className="text-sm font-bold text-amber-300 mb-4">
              Let&apos;s build an environment that helps your team do their best work.
            </p>
            <button
              onClick={onOpenSchedule}
              className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-xl"
            >
              <span>Schedule a meeting today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
