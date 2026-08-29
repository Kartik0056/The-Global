import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Shield,
  Tv,
  Flame,
  Server,
  Armchair,
  Boxes,
  CheckCircle
} from 'lucide-react';

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

  const servicesData = [
    {
      id: 'security_monitoring',
      title: 'Security & Monitoring Systems',
      shortTitle: 'Security & Monitoring',
      icon: Shield,
      image: '/images/cctv.jpg',
      headline: "Let's Make Your Workplace Safe & Protected.",
      subHeadline: 'Surveillance & Monitoring Systems Installed for Your Protection and Convenience',
      intro: "Security is essential for smooth business operations. We provide certified CCTV surveillance, access barriers, and monitoring infrastructure so you can focus on running your business with confidence.",
      coreOfferings: [
        {
          name: 'Professional CCTV Camera Installation',
          points: [
            'Strategic Camera Placement: Site assessments for optimal and clear surveillance coverage.',
            'System Configuration: Clear operation and straightforward retrieval of recorded footage.',
            'Remote Viewing Setup: Live camera feeds accessible via mobile or desktop workstations.',
            'CCTV Options: IP-based digital networks, HD analog coax systems, and standalone installations.'
          ]
        },
        {
          name: 'Body-Worn Cameras',
          points: [
            'Field deployment and hands-on staff training for airport and security teams.',
            'Secure encrypted video data storage and management protocols.'
          ]
        },
        {
          name: 'Access Control Systems',
          points: [
            'Card reader installations to ensure only authorized personnel enter specific zones.',
            'Biometric fingerprint readers and facial recognition terminals.',
            'Visitor management systems to log and verify all building visitors.'
          ]
        },
        {
          name: 'Turnstiles & Attendance Systems',
          points: [
            'Digital time tracking for accurate payroll and shift reporting.',
            'Optical speed gates and turnstiles managing high foot-traffic entry.',
            'Integrated intercoms and door phone systems for front entrances.'
          ]
        },
        {
          name: 'Smart Door Locks (Authorized QUBO Partner)',
          points: [
            'Commercial smart locks with keyless entry, PIN codes, and audit logs.',
            'Professional installation and integration into existing doors and frames.',
            'Remote access management and video doorbell integration.'
          ]
        }
      ],
      benefitsTitle: 'Key Advantages of Our Security Systems',
      benefits: [
        '24/7 continuous monitoring and perimeter protection.',
        'Immediate deterrent against unauthorized entry and incidents.',
        'Smooth daily operations with streamlined staff access.',
        'Tailored system architecture designed for your floor plan.',
        'Complete installation, testing, and warranty support.'
      ],
      ctaText: 'Schedule a Consultation'
    },
    {
      id: 'audio_video',
      title: 'Audio & Video Solutions',
      shortTitle: 'Audio & Video Solutions',
      icon: Tv,
      image: '/images/av_room.jpg',
      headline: 'Complete Audio & Video Solutions for Modern Workplaces',
      subHeadline: 'Clear Audio, Video Collaboration & Reliable Room Technology',
      intro: 'Modern AV solutions enable teams to communicate clearly and collaborate without technical friction. From executive boardrooms to training halls, we design and install systems that work reliably every time.',
      coreOfferings: [
        {
          name: 'Video & Audio Conferencing Systems',
          points: [
            'High-definition video systems compatible with Zoom Rooms, Microsoft Teams, and Webex.',
            'Beamforming ceiling microphone arrays with integrated acoustic echo cancellation.'
          ]
        },
        {
          name: 'Displays, Projectors & Digital Signage',
          points: [
            'Commercial 4K displays, laser projectors, and wireless 1-touch screen sharing.',
            'Interactive touchscreens and digital whiteboards for collaborative working.',
            'Video walls and reception digital signage with central content management.'
          ]
        },
        {
          name: 'Conference Halls & Training Rooms',
          points: [
            'Turnkey conference hall setups: LED video walls, PA systems, and central touch controllers.',
            'Multimedia e-classrooms equipped for both in-person and remote sessions.'
          ]
        },
        {
          name: 'Boardrooms & Hybrid Meeting Rooms',
          points: [
            'Smart meeting room automation: lighting presets, display routing, and cable management.',
            'Speaker-tracking cameras that automatically focus on active participants.'
          ]
        },
        {
          name: 'Public Address Systems & EPABX',
          points: [
            'Zoned PA systems for clear voice announcements in offices and facilities.',
            'EPABX telephone systems, IVR setup, intelligent call routing, and voicemail.'
          ]
        }
      ],
      benefitsTitle: 'Tailored Environments We Support',
      benefits: [
        'Corporate Headquarters & Office Campuses',
        'Small to Medium-Sized Enterprises',
        'Hotels & Hospitality Spaces',
        'Healthcare & Hospital Facilities',
        'Government Offices & Secretariats',
        'Auditoriums & Training Centers'
      ],
      ctaText: 'Discuss Your AV Requirements'
    },
    {
      id: 'fire_safety_rodent',
      title: 'Fire Safety, Leakage & Rodent Management',
      shortTitle: 'Fire Safety & Leakage',
      icon: Flame,
      image: '/images/firesafety.jpg',
      headline: 'Protection Against Fire, Water Ingress & Pest Damage',
      subHeadline: 'Safeguarding Operational Infrastructure and Business Continuity',
      intro: 'Early detection and rapid response are essential for life safety and property protection. We provide certified fire detection, water leak sensors, and wire protection tailored to commercial standards.',
      coreOfferings: [
        {
          name: 'Fire Detection & Suppression Systems',
          points: [
            'Early Warning: Modern addressable alarm panels and optical smoke sensors.',
            'Automated Suppression: Clean agent and sprinkler systems for server rooms and offices.',
            'Fire Extinguishers: Placement, certification, and hands-on emergency training for staff.'
          ]
        },
        {
          name: 'Conventional & Addressable Fire Alarms',
          points: [
            'Conventional Systems: Cost-effective zoned protection for smaller offices.',
            'Addressable Systems: Precise location pinpointing for commercial towers and large campuses.'
          ]
        },
        {
          name: 'Water Leakage Detection Systems',
          points: [
            'Sensor cable detection for server rooms, UPS areas, and plumbing shafts.',
            'Real-time alerts to prevent equipment damage and costly network downtime.'
          ]
        },
        {
          name: 'Rodent Management & Cable Protection',
          points: [
            'Protective cable conduits, stainless steel wire mesh, and professional rodent exclusion.',
            'Prevents rodent damage to electrical wiring and fiber optic lines.'
          ]
        }
      ],
      benefitsTitle: 'Our Safety & Compliance Standards',
      benefits: [
        'Risk assessments conducted by safety engineers.',
        'Compliance with National Building Code (NBC 2016) guidelines.',
        'Combined protection across fire, water, and electrical infrastructure.',
        'Scheduled preventative maintenance and periodic system audits.'
      ],
      ctaText: 'Protect Your Workplace'
    },
    {
      id: 'network_connectivity',
      title: 'Network & Connectivity Services',
      shortTitle: 'Network & Connectivity',
      icon: Server,
      image: '/images/headquarters.jpg',
      headline: 'Reliable Network Infrastructure & Connectivity Services',
      subHeadline: 'High-Speed, Reliable Connectivity for Modern Operations',
      intro: "A dependable network is the foundation of daily business operations. We design and install structured cabling, switches, and enterprise Wi-Fi systems engineered for high uptime.",
      coreOfferings: [
        {
          name: 'Core Network Services',
          points: [
            'Structured Network Design: IP planning, VLAN segmentation, and enterprise Wi-Fi coverage.',
            'Deployment: Certified cabling and equipment installation with minimal work disruption.',
            'Hardware Configuration: Routers, managed switches, and firewalls optimized for security.'
          ]
        },
        {
          name: 'Voice & Inter-Site Connectivity',
          points: [
            'VoIP Solutions: Cost-effective telephony for crystal-clear internal and external calls.',
            'Point-to-Point Wireless: High-bandwidth wireless links between separate buildings.'
          ]
        },
        {
          name: 'Server Rooms & EPABX Systems',
          points: [
            'EPABX installation, IVR configuration, call queuing, and attendant consoles.',
            'Server room build-outs: Rack mounting, cable dressing, UPS distribution, and ventilation.'
          ]
        }
      ],
      benefitsTitle: 'Operational Benefits for Your Team',
      benefits: [
        'Optimized network speed and reliable interoperability.',
        'Lower recurring telephone and communications costs.',
        'Secure network architecture with role-based access.',
        'Consistent uptime and fast troubleshooting response.',
        'Scalable infrastructure ready for team expansion.',
        'Comprehensive AMC support and SLA-backed maintenance.'
      ],
      ctaText: 'Request an IT Network Consultation'
    },
    {
      id: 'fitout_leasehold',
      title: 'Fit-out & Leasehold Improvement Services',
      shortTitle: 'Fit-out & Interiors',
      icon: Armchair,
      image: '/images/workspace.jpg',
      headline: 'Workspace Fit-Outs & Turnkey Office Improvements',
      subHeadline: 'Commercial Interior Fit-Outs, Partitioning & Ergonomic Furnishings',
      intro: "Your workplace environment directly affects team productivity and morale. We handle complete interior fit-outs from architectural partitioning to acoustic ceilings and ergonomic workstations under a single contract.",
      coreOfferings: [
        {
          name: 'Space Planning & Civil Works',
          points: [
            'Demountable glass partitions and acoustic drywall layout optimization.',
            'Ceiling modifications, acoustic baffles, and door hardware installation.',
            'Comprehensive floor planning and architectural site coordination.'
          ]
        },
        {
          name: 'Finishing & MEP Coordination',
          points: [
            'Commercial flooring: Carpet tiles, hardwood, vinyl, and epoxy finishes.',
            'Commercial painting, wall coverings, and acoustic acoustic paneling.',
            'LED lighting schemes, task illumination, and electrical power distribution.',
            'Pantry and restroom plumbing adjustments.'
          ]
        },
        {
          name: 'Modular Furniture & Workstations',
          points: [
            'Modular linear and cluster workstations with wire management raceways.',
            'Ergonomic mesh chairs, executive desks, conference tables, and breakout furniture.'
          ]
        },
        {
          name: 'Technology & Safety Integration',
          points: [
            'Under-floor data cabling, wall floor boxes, and server closet connections.',
            'Cafeteria layout and commercial breakroom setups.'
          ]
        }
      ],
      benefitsTitle: 'Our Fit-Out Execution Principles',
      benefits: [
        'Single-point turnkey accountability from design to handover.',
        'Adherence to agreed project milestones and completion schedules.',
        'Quality craftsmanship and commercial-grade materials.',
        'Spaces designed around your workflow and corporate branding.'
      ],
      ctaText: 'Plan Your Office Fit-Out'
    },
    {
      id: 'injection_moulding',
      title: 'Injection Moulding Solutions',
      shortTitle: 'Injection Moulding',
      icon: Boxes,
      image: '/images/speedgates.jpg',
      headline: 'Precision Injection Moulding & Manufacturing',
      subHeadline: 'Custom Tooling and Component Manufacturing for Industry',
      intro: "We provide injection moulding services for commercial components, enclosures, and custom parts. From running customer-owned moulds to custom tooling and serial production, we maintain consistent tolerances and quality control.",
      coreOfferings: [
        {
          name: 'Mould Job Work Services',
          points: [
            'Production runs using customer-supplied tooling with careful maintenance.',
            'Processing across standard and engineering-grade thermoplastics.',
            'Reliable batch turnaround to meet scheduled supply chain requirements.'
          ]
        },
        {
          name: 'Custom Product Development',
          points: [
            'Design for Manufacturability (DFM) reviews and optimization.',
            'Prototyping for dimensional validation and mechanical testing.',
            'Mould tooling fabrication built to technical component specifications.',
            'Material recommendation balancing strength, finish, and unit cost.',
            'Smooth transition from initial pilot runs to full-scale volume production.'
          ]
        }
      ],
      benefitsTitle: 'Why Work With Us on Moulding',
      benefits: [
        'Rigorous quality checks from raw polymer to finished parts.',
        'Experienced engineering support for tooling and cycle optimization.',
        'Modern injection moulding machinery ensuring dimensional repeatability.',
        'Transparent delivery schedules and responsive project communication.'
      ],
      ctaText: 'Discuss Moulding Requirements'
    }
  ];

  const current = servicesData[activeTab];

  return (
    <section id="services-interactive" className="relative py-24 bg-[#120722] bg-tech-grid overflow-hidden">
      {/* Glow Orbs */}
      <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/15 top-1/4 -right-40"></div>
      <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/10 bottom-20 -left-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge justify-center mb-3">SERVICES DIRECTORY</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4">
            OUR SPECIALIZED <span className="text-gold-gradient">SERVICE DOMAINS</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d1c4e9]">
            Select any domain below to explore detailed offerings, technical capabilities, and tailored solutions.
          </p>
        </div>

        {/* 6 Core Service Tabs */}
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

        {/* Service Detailed Container */}
        <div className="glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-6 sm:p-10 bg-gradient-to-br from-[#1b0a36] via-[#140828] to-[#1c0b38]">
          
          {/* Header Banner for Selected Service */}
          <div className="mb-8 pb-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{current.subHeadline}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-snug mb-3">
                {current.headline}
              </h3>
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

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            
            {/* Left: Core Offerings List */}
            <div className="lg:col-span-8 space-y-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>CORE SERVICE CAPABILITIES</span>
              </div>

              {current.coreOfferings.map((offering, oIdx) => (
                <div key={oIdx} className="p-5 rounded-2xl bg-[#140828] border border-white/10">
                  <h4 className="text-sm sm:text-base font-bold font-heading text-white mb-3 text-gold-gradient">
                    {offering.name}
                  </h4>
                  <ul className="space-y-2">
                    {offering.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d1c4e9]">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right: Benefits & Client Highlights */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Image Preview */}
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

              {/* Benefits Box */}
              <div className="p-6 rounded-2xl bg-[#17082e] border border-amber-400/30 flex-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>{current.benefitsTitle}</span>
                </h4>
                <div className="space-y-2.5">
                  {current.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-[#d1c4e9]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Action Ribbon */}
          <div className="p-5 rounded-2xl bg-[#230e3d] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#e9d5ff] font-medium text-center sm:text-left">
              Need customized integration across multiple sites or offices?
            </div>
            <button
              onClick={onOpenSchedule}
              className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shrink-0"
            >
              <span>{current.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
