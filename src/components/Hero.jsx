import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Video, 
  Tv, 
  Flame, 
  Scan, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  Lock,
  ChevronRight,
  Zap
} from 'lucide-react';
import OrbitalSystem from './OrbitalSystem';

export default function Hero({ onOpenSchedule }) {
  const [activeTab, setActiveTab] = useState(0);

  const heroSpotlights = [
    {
      id: 'cctv',
      title: '4K AI Optical Surveillance',
      category: 'ENTERPRISE SECURITY',
      badge: '4K UHD / AI TELEMETRY',
      image: '/images/cctv.jpg',
      specs: ['3840x2160 Ultra-HD Starlight', 'Real-Time Intrusion AI Tracking', 'Central VMS & Cloud Backup'],
      tagline: 'Precision 24/7 visual deterrence and perimeter protection.'
    },
    {
      id: 'speedgates',
      title: 'Optical Speed Gates & Turnstiles',
      category: 'ACCESS CONTROL',
      badge: 'BIOMETRIC / RFID',
      image: '/images/speedgates.jpg',
      specs: ['0.2s Facial Recognition Entry', 'Anti-Tailgating Infrared Array', 'Emergency Auto-Open Protocol'],
      tagline: 'High-throughput secure visitor and personnel management.'
    },
    {
      id: 'av',
      title: 'Executive Boardroom Collaboration',
      category: 'AUDIO-VISUAL SYSTEMS',
      badge: '4K DIGITAL CONFERENCING',
      image: '/images/av_room.jpg',
      specs: ['Ceiling Beamforming Audio Array', 'Zero-Latency Wireless Screen Share', 'Acoustic Soundproofing Treatment'],
      tagline: 'State-of-the-art immersive executive suites and video walls.'
    },
    {
      id: 'workspace',
      title: 'Modern Ergonomic Fit-Outs',
      category: 'SPACES THAT INSPIRE',
      badge: 'BIFMA LEVEL 3 / ERGONOMIC',
      image: '/images/workspace.jpg',
      specs: ['Motorized Sit-to-Stand Desks', 'Acoustic Glass Demountable Walls', 'Modular Expandable Space Layouts'],
      tagline: 'Dynamic workspaces engineered for team health and peak productivity.'
    },
    {
      id: 'firesafety',
      title: 'Certified Thermal Fire Alarms',
      category: 'LIFE SAFETY SYSTEMS',
      badge: 'UL LISTED / CE CERTIFIED',
      image: '/images/firesafety.jpg',
      specs: ['Optical Thermal Smoke Sensing', 'Addressable Central Control Hub', 'Direct Emergency Egress Link'],
      tagline: 'Rapid thermal detection and certified commercial protection.'
    }
  ];

  // Auto rotate spotlight
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroSpotlights.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSpotlights.length]);

  const current = heroSpotlights[activeTab];

  return (
    <section id="home" className="relative min-h-screen pt-36 lg:pt-40 pb-24 flex flex-col justify-center overflow-hidden">
      
      {/* Cinematic Background Layer Image with Dark Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.jpg"
          alt="Smart Workspace Technology Background"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0419]/95 via-[#120722]/85 to-[#120722]"></div>
        <div className="absolute inset-0 bg-radial-hero"></div>
        <div className="absolute inset-0 bg-tech-grid opacity-60"></div>
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/25 top-20 -left-32"></div>
      <div className="bg-glow-orb w-[700px] h-[700px] bg-amber-500/15 top-40 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Column: Headings & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-2.5 sm:px-3 py-1 rounded-lg bg-[#251044]/90 border border-amber-400/40 max-w-full backdrop-blur-md">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.12em] sm:tracking-[0.18em] text-amber-300 uppercase font-heading truncate">
                THE GLOBAL ENTERPRISES &bull; SMART SOLUTIONS, SECURE SPACES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold font-heading text-white leading-[1.1] sm:leading-[1.08] tracking-tight mb-4 sm:mb-5 drop-shadow-md">
              Next-Gen <br className="hidden sm:inline" />
              Workspace <br className="hidden sm:inline" />
              Solutions,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-[0_4px_25px_rgba(245,158,11,0.4)]">
                Here &amp; Now.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-lg text-[#d1c4e9] max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal">
              One accountable partner for the systems that keep a modern workplace secure, connected and productive &mdash; designed, installed and maintained under one roof.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-9">
              <button
                onClick={onOpenSchedule}
                className="btn-gold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer group font-extrabold shadow-2xl w-full sm:w-auto"
              >
                <span>Schedule a meeting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="btn-glass px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 hover:border-amber-400 w-full sm:w-auto"
              >
                <span>Explore our services</span>
              </a>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#d8b4fe]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"></span>
                <span className="font-bold text-white">10+</span>
                <span className="text-[#c4b5fd]">Years serving</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"></span>
                <span className="font-bold text-white">200+</span>
                <span className="text-[#c4b5fd]">Businesses</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"></span>
                <span className="font-bold text-white">All-in-one</span>
                <span className="text-[#c4b5fd]">integration</span>
              </div>
            </div>

          </div>

          {/* Right Column: Orbital Dynamic Planetary Core with Moving Nodes */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <OrbitalSystem
              activeNodeId={heroSpotlights[activeTab]?.id}
              onSelectNode={(nodeId) => {
                const foundIndex = heroSpotlights.findIndex(s => s.id === nodeId || (nodeId === 'speedgate' && s.id === 'speedgates') || (nodeId === 'fire' && s.id === 'firesafety') || (nodeId === 'furniture' && s.id === 'workspace') || (nodeId === 'defense' && s.id === 'cctv') || (nodeId === 'lock' && s.id === 'speedgates'));
                if (foundIndex !== -1) {
                  setActiveTab(foundIndex);
                }
              }}
            />
          </div>

        </div>

        {/* CP PLUS-Style Interactive Live Hardware & Workspace Showcase Banner */}
        <div className="glass-card rounded-3xl border border-white/20 overflow-hidden shadow-2xl p-5 sm:p-7 bg-[#1b0a36]/90 backdrop-blur-2xl">
          
          {/* Navigation Pill Selectors */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 border-b border-white/10 no-scrollbar">
            {heroSpotlights.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === idx
                    ? 'bg-amber-400 text-[#120722] shadow-[0_0_18px_rgba(245,158,11,0.5)] scale-105'
                    : 'bg-white/5 text-[#c4b5fd] hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.category}</span>
              </button>
            ))}
          </div>

          {/* Featured Content & High-Res Imagery Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Image with Live HUD Overlay */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden group aspect-[16/9] border border-white/15 bg-black/40">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120722]/90 via-transparent to-transparent pointer-events-none"></div>

              {/* Top Left Live Telemetry HUD Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#120722]/90 border border-amber-400/50 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[10px] font-extrabold tracking-wider text-amber-300 uppercase">
                  {current.badge}
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#140828]/90 backdrop-blur-md border border-white/10">
                <p className="text-xs text-white font-medium">
                  {current.tagline}
                </p>
              </div>
            </div>

            {/* Right Technical Specs & Quick Action */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                  ENTERPRISE CAPABILITY
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed mb-4">
                  Turnkey architectural engineering, certified deployment, and continuous AMC lifetime maintenance.
                </p>

                {/* Tech Specs List */}
                <div className="space-y-2 mb-6">
                  {current.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#c4b5fd]">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenSchedule}
                  className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Live Demo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#services"
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                >
                  View Full Specs &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
