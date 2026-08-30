import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Shield,
  CheckCircle
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ onOpenSchedule }) {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get('service') || location.hash.replace('#', '') || '';
    if (!serviceParam) return;

    const s = serviceParam.toLowerCase();
    let targetIdx = -1;

    if (['security', 'security_monitoring', 'cctv', 'surveillance'].includes(s)) targetIdx = 0;
    else if (['av', 'audio_video', 'audio', 'video'].includes(s)) targetIdx = 1;
    else if (['firesafety', 'fire_safety', 'fire_safety_rodent', 'fire', 'leakage'].includes(s)) targetIdx = 2;
    else if (['network', 'network_connectivity', 'connectivity', 'it'].includes(s)) targetIdx = 3;
    else if (['fitout', 'fitout_leasehold', 'interiors', 'workspace', 'leasehold'].includes(s)) targetIdx = 4;
    else if (['injection', 'injection_moulding', 'moulding', 'manufacturing'].includes(s)) targetIdx = 5;

    if (targetIdx !== -1) {
      setActiveTab(targetIdx);
      const el = document.getElementById('services-interactive');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.search, location.hash, searchParams]);

  const handleTabChange = useCallback((idx) => {
    setActiveTab(idx);
  }, []);

  const current = useMemo(() => servicesData[activeTab] || servicesData[0], [activeTab]);

  return (
    <section id="services-interactive" className="relative py-24 bg-[#120722] bg-tech-grid overflow-hidden">
      <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/15 top-1/4 -right-40"></div>
      <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/10 bottom-20 -left-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge justify-center mb-3">SERVICES DIRECTORY</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4">
            OUR SPECIALIZED <span className="text-gold-gradient">SERVICE DOMAINS</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d1c4e9]">
            Select any domain below to explore detailed offerings, technical capabilities, and tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {servicesData.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-[#10061e] border-amber-300 font-extrabold shadow-xl scale-102'
                    : 'bg-[#180933]/90 text-[#c4b5fd] border-white/10 hover:border-amber-400/40 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono opacity-80 uppercase">0{idx + 1}</span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#10061e]' : 'text-amber-400'}`} />
                </div>
                <div className="text-xs font-bold font-heading line-clamp-2">
                  {s.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        <div className="glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-6 sm:p-10 bg-gradient-to-br from-[#1b0a36] via-[#140828] to-[#1c0b38]">
          <div className="mb-8 pb-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{current.subHeadline}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-snug mb-3">
                {current.headline}
              </h3>
              {current.introTitle && (
                <h4 className="text-sm sm:text-base font-bold text-amber-300 mb-2">
                  {current.introTitle}
                </h4>
              )}
              <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed">
                {current.intro}
              </p>
            </div>

            <button
              onClick={onOpenSchedule}
              className="btn-gold px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-xl shrink-0 self-start lg:self-center"
            >
              <span>{current.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>CORE SERVICE CAPABILITIES</span>
              </div>

              {current.coreOfferings.map((offering, oIdx) => (
                <div key={oIdx} className="p-5 sm:p-6 rounded-2xl bg-[#140828] border border-white/10 space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-heading text-white text-gold-gradient">
                      {offering.name}
                    </h4>
                    {offering.subtitle && (
                      <div className="text-xs text-amber-300/90 font-medium mt-0.5">
                        {offering.subtitle}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2.5">
                    {offering.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d1c4e9] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {offering.subgroups && (
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                        {offering.subgroupTitle || 'Key Deployments & Options:'}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {offering.subgroups.map((sub, sIdx) => (
                          <div key={sIdx} className="p-3 rounded-xl bg-[#10061e]/90 border border-white/10 flex flex-col justify-between">
                            <span className="font-bold text-white text-xs block mb-1">{sub.title}</span>
                            <span className="text-[#c4b5fd] text-[11px] leading-snug">{sub.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {offering.integrationNote && (
                    <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 leading-relaxed flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{offering.integrationNote}</span>
                    </div>
                  )}

                  {offering.tags && (
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-amber-400" />
                        <span>{offering.tagTitle || 'Key Featured Technologies:'}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {offering.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-[#251047] border border-amber-400/40 text-amber-200 text-xs font-medium shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/15 shadow-xl bg-black">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#140828]/90 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                  {current.title}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#17082e] border border-amber-400/30 flex-1 flex flex-col justify-start">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>{current.benefitsTitle}</span>
                  </h4>
                  {current.benefitsSubtitle && (
                    <p className="text-xs text-[#c4b5fd] font-medium mb-4 italic">
                      {current.benefitsSubtitle}
                    </p>
                  )}
                  <div className="space-y-3">
                    {current.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#d1c4e9] leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#2a0e4c] via-[#1a0833] to-[#2a0e4c] border border-amber-400/40 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="text-center sm:text-left">
              <div className="text-[10px] font-bold tracking-widest uppercase text-amber-400 mb-1">
                {current.closingBadge || 'EXPERT INSTALLATION & AMC SUPPORT'}
              </div>
              <h4 className="text-base sm:text-xl font-extrabold font-heading text-white">
                {current.closingHeadline || 'Peace of mind starts here. Tailored infrastructure installations.'}
              </h4>
            </div>
            <button
              onClick={onOpenSchedule}
              className="btn-gold px-7 py-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-2xl shrink-0"
            >
              <span>{current.closingCta || 'Schedule Consultation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
