import React from 'react';
import { 
  Plane, 
  Truck, 
  Factory, 
  Shield, 
  AlertOctagon, 
  CheckCircle,
  Building,
  Award,
  Lock,
  Radio,
  FileCheck,
  Building2,
  ArrowRight
} from 'lucide-react';

export default function ClientsSection({ onOpenSchedule }) {
  const communityClients = [
    { name: 'Agile Airport Services', icon: Plane, sector: 'Airport Ground Operations' },
    { name: 'Air Canada', icon: Plane, sector: 'International Commercial Aviation' },
    { name: 'Air France', icon: Plane, sector: 'Global Airline Fleet' },
    { name: 'Air India Limited', icon: Plane, sector: 'National Flag Carrier' },
    { name: 'Akasa Air', icon: Plane, sector: 'Commercial Airline' },
    { name: 'British Airways', icon: Plane, sector: 'International Flag Carrier' },
    { name: 'Divine Interiors', icon: Building2, sector: 'Commercial Space Design' },
    { name: 'Egypt Air', icon: Plane, sector: 'International Aviation' },
    { name: 'Etihad Airways', icon: Plane, sector: 'Global Airline Fleet' },
    { name: 'Singapore Airlines Limited', icon: Plane, sector: 'Premier Global Airline' },
  ];

  const featuredEnterpriseClients = [
    {
      category: 'Aviation Infrastructure',
      name: 'Interglobe Aviation (IndiGo)',
      icon: Plane,
      image: '/images/cctv.jpg',
      desc: 'LTE body-worn cameras, operations command centers & airport workspace security technology.',
      tier: 'TIER-1 AVIATION SECURITY',
    },
    {
      category: 'Global Logistics Security',
      name: 'FedEx Express',
      icon: Truck,
      image: '/images/speedgates.jpg',
      desc: 'Continuous tracking, access control barriers, high-throughput distribution hub surveillance & rapid AMC.',
      tier: 'GLOBAL LOGISTICS STANDARD',
    },
    {
      category: 'Industrial Enterprise',
      name: 'Rio Tinto India',
      icon: Factory,
      image: '/images/headquarters.jpg',
      desc: 'Heavy industrial facility safety, integrated access architecture & hazardous zone optical monitoring nodes.',
      tier: 'HEAVY INDUSTRIAL SPEC',
    },
    {
      category: 'Government Agency',
      name: 'Civil Defense',
      icon: Shield,
      image: '/images/firesafety.jpg',
      desc: 'Critical emergency response coordination systems, fire safety, automated alerting & emergency gear deployment.',
      tier: 'GOVT PUBLIC SAFETY',
    },
    {
      category: 'Critical National Defense',
      name: 'National Disaster Response Force (NDRF)',
      icon: AlertOctagon,
      image: '/images/hero_bg.jpg',
      desc: 'Mission-critical thermal monitoring, ruggedized body-worn cameras & disaster command center setups.',
      tier: 'DEFENSE-GRADE MISSION CRITICAL',
    }
  ];

  return (
    <section id="clients" className="relative py-28 bg-[#120722] bg-tech-grid overflow-hidden">
      {/* Subtle Glows */}
      <div className="bg-glow-orb w-[600px] h-[600px] bg-amber-500/10 -top-20 -right-20"></div>
      <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/15 bottom-0 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge justify-center mb-3">OUR CLIENTS &amp; PARTNERS</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4">
            OUR COMMUNITY <span className="text-gold-gradient">OF CLIENTS</span>
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#240e44] border border-amber-400/30 text-amber-300 font-bold text-xs sm:text-sm tracking-widest uppercase mb-4">
            WHY OUR CLIENTS TRUST US
          </div>
          <p className="text-base sm:text-lg text-[#d1c4e9]">
            We are incredibly proud to work with some of the most amazing organisations across India – from growing startups to established airlines, corporations, and vital government services.
          </p>
        </div>

        {/* 10 Community of Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {communityClients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all flex flex-col justify-between group bg-[#16082c]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                    {client.name}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-amber-300/80 font-mono">
                  {client.sector}
                </div>
              </div>
            );
          })}
        </div>

        {/* Major Enterprise & Defense Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredEnterpriseClients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden bg-[#180933]"
              >
                <div>
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 border border-white/15 bg-black">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#120722]/90 border border-amber-400/50 backdrop-blur-md flex items-center justify-center text-amber-400 font-bold shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-300 px-2.5 py-1 rounded-full bg-[#120722]/90 border border-amber-400/40 font-mono backdrop-blur-md">
                        {client.tier}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                    {client.category}
                  </div>

                  <h3 className="text-xl font-extrabold font-heading text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {client.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed">
                    {client.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Deployment</span>
                  </div>
                  <span className="text-amber-400/90 font-mono text-[11px]">
                    Turnkey AMC
                  </span>
                </div>
              </div>
            );
          })}

          {/* Onboarding Callout Card */}
          <div className="glass-card p-6 rounded-3xl border border-amber-400/40 bg-gradient-to-br from-[#2b1250] to-[#17082e] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 border border-amber-400/30 bg-black">
                <img
                  src="/images/workspace.jpg"
                  alt="Enterprise Onboarding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17082e] via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-amber-400 text-[#120722] flex items-center justify-center font-bold shadow-xl">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <div className="text-[11px] font-bold text-amber-300 uppercase tracking-widest mb-1">
                ENTERPRISE PARTNERSHIP
              </div>
              <h3 className="text-2xl font-extrabold font-heading text-white mb-2.5">
                Join This List Today
              </h3>
              <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed">
                Elevate your corporate security, 4K CCTV surveillance, access barriers, and fire safety systems with our dedicated engineering board.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onOpenSchedule}
                className="btn-gold w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Join this list today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
