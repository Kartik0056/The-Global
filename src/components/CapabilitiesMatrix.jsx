import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle,
  Search,
  Info,
  X,
  FileSpreadsheet
} from 'lucide-react';

export default function CapabilitiesMatrix({ onOpenSchedule }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  const products = [
    {
      id: 'p1',
      title: '4K AI Optical Starlight Dome Camera',
      category: 'cctv',
      categoryLabel: 'SURVEILLANCE',
      image: '/images/cctv.jpg',
      specs: '3840x2160 • IP67 Weatherproof • IK10 Vandal-proof • 0.001 Lux Starlight',
      detailedSpecs: [
        'Resolution: 4K Ultra-HD (3840 x 2160 @ 30fps)',
        'Sensor: 1/1.8" Progressive Scan Starlight CMOS',
        'AI Features: Facial Telemetry, Line Crossing, Object Abandoned',
        'Storage: Dual H.265+ Compression with MicroSD & Cloud VMS',
        'Certifications: CE, FCC, RoHS, NDAA Compliant'
      ],
      applications: 'Corporate Headquarters, Aviation Hangars, Banking Vaults',
      stockStatus: 'In-Stock & Deployable'
    },
    {
      id: 'p2',
      title: 'High-Throughput Optical Speed Gate Turnstile',
      category: 'access',
      categoryLabel: 'ACCESS CONTROL',
      image: '/images/speedgates.jpg',
      specs: 'Biometric Face + Palm • 45 Persons/min • Anti-Tailgating 16-Beam IR Array',
      detailedSpecs: [
        'Throughput: Up to 45 passages per minute',
        'Biometric Reader: 0.2s 3D Structured Light Facial Match',
        'Barrier Type: High-impact 10mm Tempered Glass Wing',
        'Safety Link: Automatic Emergency Egress Breakout on Fire Alarm',
        'Chassis: SUS304 Brushed Stainless Steel'
      ],
      applications: 'High-Rise Lobbies, Tech Parks, Government Secretariats',
      stockStatus: 'In-Stock & Deployable'
    },
    {
      id: 'p3',
      title: 'Executive Ultra-HD Boardroom AV Suite',
      category: 'av',
      categoryLabel: 'SMART AV',
      image: '/images/av_room.jpg',
      specs: '4K Interactive Video Wall • Dante DSP • Auto Speaker Tracking Array',
      detailedSpecs: [
        'Display: 4K UHD Anti-Glare Capacitive Touch Surface',
        'Microphone: Ceiling Tile Beamforming Array with 360° pickup',
        'Audio DSP: Integrated Acoustic Echo & Noise Cancellation',
        'Connectivity: Wireless BYOD 1-Touch Screen Casting (4K)',
        'Integration: Zoom Rooms, Microsoft Teams, Webex Certified'
      ],
      applications: 'C-Suite Boardrooms, Global Strategy War Rooms',
      stockStatus: 'Engineered on Demand'
    },
    {
      id: 'p4',
      title: 'Commercial Addressable Fire Safety Command Hub',
      category: 'fire',
      categoryLabel: 'LIFE SAFETY',
      image: '/images/firesafety.jpg',
      specs: 'Optical Thermal Detection • Civil Defense Certified • Auto HVAC/Door Cut-off',
      detailedSpecs: [
        'Standard: National Building Code (NBC 2016) & Civil Defense Certified',
        'Loop Capacity: Up to 4 Loops supporting 1016 Addressable Devices',
        'Sensors: Multi-Criteria Optical Smoke + Rate-of-Rise Heat Detection',
        'Auxiliary Relay: Automatic elevator homing & fire damper shut-off',
        'Backup: 72-Hour Standby Battery Pack with Charger'
      ],
      applications: 'Industrial Warehouses, Critical Data Centers, Corporate Towers',
      stockStatus: 'Certified In-Stock'
    },
    {
      id: 'p5',
      title: 'Ergonomic Motorized Sit-Stand Workstations',
      category: 'workspace',
      categoryLabel: 'ERGONOMICS',
      image: '/images/workspace.jpg',
      specs: 'Dual Synchronized Motors • Anti-Collision • BIFMA Level 3 Certified',
      detailedSpecs: [
        'Height Range: 620mm - 1280mm with 4 Memory Presets',
        'Motors: Dual Whisper-Quiet German Bosch Drive Motors (<42dB)',
        'Desktop Material: E0 Eco-Friendly Anti-Microbial Compact Laminate',
        'Cable Management: Integrated Under-Desk Steel Raceway & Power Distribution',
        'Warranty: 10-Year Structural & 5-Year Motor Warranty'
      ],
      applications: 'Agile Corporate Workspaces, 24/7 Control Rooms',
      stockStatus: 'Custom Finishes Available'
    },
    {
      id: 'p6',
      title: 'Turnkey AMC & Managed Workspace SLA Package',
      category: 'turnkey',
      categoryLabel: 'ANNUAL AMC',
      image: '/images/speedgates.jpg',
      specs: '4-Hour Emergency Dispatch • Quarterly Preventative Maintenance • Spare Vault',
      detailedSpecs: [
        'SLA Response: 4-Hour Guaranteed On-Site Certified Engineer Arrival',
        'Preventative Audits: Comprehensive Quarterly Optical & Electrical Inspections',
        'Spare Standby: Dedicated Local Buffer Stock for Instant Hot-Swaps',
        'Helpdesk: 24/7/365 Dedicated SLA Escalation Hotline & Portal',
        'Coverage: Complete Hardware, Firmware & Cabling Infrastructure'
      ],
      applications: 'All Commercial Infrastructure Operations',
      stockStatus: 'Active Service SLA'
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 bg-[#120722] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/15 top-1/4 -left-20"></div>
      <div className="bg-glow-orb w-[600px] h-[600px] bg-amber-500/10 bottom-1/4 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'cctv', label: 'Surveillance' },
              { id: 'access', label: 'Access Control' },
              { id: 'av', label: 'Smart AV' },
              { id: 'fire', label: 'Life Safety' },
              { id: 'workspace', label: 'Ergonomics' },
              { id: 'turnkey', label: 'Managed AMC' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-amber-400 text-[#120722] shadow-lg'
                    : 'bg-white/5 border border-white/10 text-[#d1c4e9] hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="w-full bg-[#180933] border border-white/15 rounded-xl py-2 pl-9 pr-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="glass-card rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col overflow-hidden group bg-[#16082b]"
            >
              {/* Header Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140828] via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#10061e]/90 border border-amber-400/40 text-[10px] font-bold text-amber-300 uppercase tracking-widest backdrop-blur-md">
                  {prod.categoryLabel}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors mb-2">
                    {prod.title}
                  </h3>
                  <div className="p-2.5 rounded-xl bg-[#10061e] border border-white/10 text-[11px] text-[#c4b5fd] font-mono mb-4 leading-relaxed">
                    {prod.specs}
                  </div>
                  <div className="text-[11px] text-[#b8a7dc]">
                    <span className="font-bold text-white">Applications:</span> {prod.applications}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProductModal(prod)}
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>Technical Datasheet</span>
                  </button>

                  <button
                    onClick={onOpenSchedule}
                    className="btn-gold px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire BOQ</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Datasheet Modal */}
        {selectedProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-amber-400/50 p-5 sm:p-8 bg-[#180933] shadow-2xl max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-amber-400 hover:text-[#10061e] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <FileSpreadsheet className="w-4 h-4" />
                <span>OFFICIAL SPECIFICATION DATASHEET</span>
              </div>

              <h3 className="text-2xl font-black font-heading text-white mb-4">
                {selectedProductModal.title}
              </h3>

              <div className="aspect-[16/8] rounded-2xl overflow-hidden border border-white/10 mb-5 bg-black">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                  Technical Specifications:
                </div>
                {selectedProductModal.detailedSpecs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#d1c4e9] p-2 rounded-lg bg-[#10061e]/70 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified Turnkey Deployment Ready</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedProductModal(null);
                    onOpenSchedule();
                  }}
                  className="btn-gold w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Request Deployment Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
