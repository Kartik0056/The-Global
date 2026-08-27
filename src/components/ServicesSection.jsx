import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Tv, 
  Flame, 
  Cpu, 
  Palette, 
  Armchair, 
  LayoutGrid, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Building,
  Layers,
  ChevronRight,
  Shield,
  Video,
  Scan,
  Lock,
  Users,
  PhoneCall,
  Server,
  Droplets,
  Bug,
  Boxes,
  Phone,
  CheckCircle
} from 'lucide-react';

export default function ServicesSection({ onOpenSchedule }) {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      id: 'security_monitoring',
      title: 'Security & Monitoring Systems',
      shortTitle: 'Security & Monitoring',
      icon: Shield,
      image: '/images/cctv.jpg',
      headline: "Let's Make Your Place Safer, Together.",
      subHeadline: 'Surveillance & Monitoring Systems Installed for Your Protection and Convenience.',
      intro: "Imagine feeling completely secure, no matter where you are. We make that happen. We're your friendly professionals for security and safety installations, so you can relax knowing your workplace is protected.",
      coreOfferings: [
        {
          name: 'Professional CCTV Camera Installation',
          points: [
            'Strategic Camera Placement: Site assessments for optimal and clear surveillance coverage.',
            'Expert System Configuration: Seamless operation and easy retrieval of recorded footage.',
            'Remote Viewing Setup: Live camera feeds via mobile or computer from anywhere.',
            'CCTV Types: IP-based (high-res digital network video), HD-based (analog coax), and Standalone localized systems.'
          ]
        },
        {
          name: 'Body-Worn Cameras',
          points: [
            "Team deployment and practical training so your personnel are confident in the field.",
            'Secure encrypted video data storage and management.'
          ]
        },
        {
          name: 'Access Control Systems',
          points: [
            'Card reader installations to ensure only authorized personnel enter.',
            'High-security biometric fingerprint and 3D facial recognition systems.',
            'Visitor management systems to track and account for all premises visitors.'
          ]
        },
        {
          name: 'Public Access & Attendance Systems',
          points: [
            'Effortless digital time tracking for streamlined and accurate attendance.',
            'Controlled turnstiles and speed gates preventing unauthorized entry.',
            'Real-time video monitoring and mobile entrance communication.'
          ]
        },
        {
          name: 'Smart Door Locks (Authorized QUBO Partner)',
          points: [
            'Enterprise Smart Door Lock Systems with keyless entry and audit logs.',
            'Professional deployment and integration into existing doors and infrastructure.',
            'Remote access configuration and integrated video doorbell mobile communication.'
          ]
        }
      ],
      benefitsTitle: 'How Global Enterprises Make Your Life Easier',
      benefits: [
        'Your place will be super secure, allowing you to relax.',
        'You can avoid accidents and stay safe.',
        'Your day-to-day operations will be smoother.',
        'You\'ll have peace of mind knowing you\'re protected.',
        'A plan tailored just for you will be created.',
        'All installation and support will be handled, so you don\'t have to worry.'
      ],
      ctaText: 'Schedule a Callback'
    },
    {
      id: 'audio_video',
      title: 'Audio & Video Solutions',
      shortTitle: 'Audio & Video Solutions',
      icon: Tv,
      image: '/images/av_room.jpg',
      headline: 'Leading Audio & Video Solutions Provider in India',
      subHeadline: 'Driving Productivity Through Seamless Connectivity & Immersive Experiences',
      intro: 'Consider audio-visual (AV) solutions as means to assist businesses to communicate and connect more effectively. They make meetings easier to understand, presentations more captivating, and customer experiences more memorable.',
      coreOfferings: [
        {
          name: 'Video & Audio Conferencing Systems',
          points: [
            'High-definition face-to-face video systems that encourage collaboration and save on travel.',
            'Audio conferencing from basic speakerphones to sophisticated DSP processing with noise-canceling array microphones.'
          ]
        },
        {
          name: 'Display, Presentation & Digital Signage',
          points: [
            'Large displays, 4K laser projectors, and wireless presentation screen sharing.',
            'Interactive touchscreens and electronic whiteboards.',
            'Digital signage (LCD/LED video walls) with cloud content management systems (CMS).'
          ]
        },
        {
          name: 'Conference Halls & E-Classrooms',
          points: [
            'Complete conference hall integration: LED walls, projectors, mics, speakers, and simple centralized touch controls.',
            'Interactive E-classrooms with multimedia learning software for remote and in-person instruction.'
          ]
        },
        {
          name: 'Board Rooms & Hybrid Meeting Rooms',
          points: [
            'Smart meeting room automation: lighting adjustment, room booking, and clean cable management.',
            'Speaker-tracking hybrid cameras that automatically focus on whoever is talking.'
          ]
        },
        {
          name: 'Public Address Systems & EPABX',
          points: [
            'PA systems designed for clear voice delivery in small offices to large auditoriums.',
            'EPABX telephone installation, setup, intelligent call routing, and voicemail management.'
          ]
        }
      ],
      benefitsTitle: 'Comprehensive Solutions for Diverse Needs',
      benefits: [
        'Large Corporations & Headquarters',
        'Small to Medium-sized Businesses (SMBs)',
        'Hotels & Hospitality',
        'Healthcare Facilities & Hospitals',
        'Government Buildings & Secretariats',
        'Educational Institutions & Auditoriums'
      ],
      ctaText: 'Discuss Your AV Needs'
    },
    {
      id: 'fire_safety_rodent',
      title: 'Fire Safety, Leakage & Rodent Management',
      shortTitle: 'Fire Safety & Leakage',
      icon: Flame,
      image: '/images/firesafety.jpg',
      headline: 'Comprehensive Protection Against Fire, Water, and Rodent',
      subHeadline: 'Safeguarding Operational Integrity and Ensuring Business Continuity',
      intro: 'Early detection and rapid response are crucial. We provide engineered solutions for extinguishing fires, lessening water damage, and managing pests in a coordinated, reliable way.',
      coreOfferings: [
        {
          name: 'Fire Detection & Extinguishing Systems',
          points: [
            'Advanced Early Warning: Cutting-edge alarm panels and highly sensitive smoke detectors.',
            'Automated Fire Suppression: Strategically installed sprinkler systems for immediate protection of server rooms and offices.',
            'Fire Extinguisher Deployment & Training: Positioning industry-grade extinguishers and conducting staff emergency response training.'
          ]
        },
        {
          name: 'Conventional & Addressable Fire Alarms',
          points: [
            'Conventional Systems: Optimized for Indian building conditions, differential voltages, reducing false alarms at budget-friendly cost.',
            'Addressable Systems: Precise location identification for hospitals, industrial plants, and commercial towers.'
          ]
        },
        {
          name: 'Water Leakage Detection System',
          points: [
            'Sensor-based water leak detection for continuous monitoring of server rooms, data centers, and utility spaces.',
            'Proactive early warnings that prevent expensive water damage and data interruptions.'
          ]
        },
        {
          name: 'Rodent Management & Wire Protection',
          points: [
            'Corporate rodent management, modern rodent mesh nets, and efficient eradication plans.',
            'Prevents rodent damage to electrical wiring, networking cables, and critical infrastructure.'
          ]
        }
      ],
      benefitsTitle: 'What Sets Us Apart in Protection',
      benefits: [
        'Thorough hazard risk assessments conducted by certified safety engineers.',
        'Full compliance with local and National Building Codes (NBC 2016).',
        'Combined protection against fire, water leakage, and infrastructure pests.',
        'Continuous preventative inspection schedules and testing.'
      ],
      ctaText: 'Let’s Protect Your Workplace'
    },
    {
      id: 'network_connectivity',
      title: 'Network & Connectivity Services',
      shortTitle: 'Network & Connectivity',
      icon: Server,
      image: '/images/headquarters.jpg',
      headline: 'Smooth Network & Connectivity Services, Everywhere.',
      subHeadline: 'Expert Wireless Network Planning and Deployment for Seamless, High-Speed Connectivity.',
      intro: "These days, if your internet's down, your business is down. It's not just about having a connection; it's about having a reliable one. We build networks that handle high traffic, minimize outages, and keep your team productive.",
      coreOfferings: [
        {
          name: 'Core Network Services',
          points: [
            'Strategic Network Planning: Robust IP addressing schemes and wireless network architecture for high scalability.',
            'Expert Deployment: Certified network engineers ensuring implementation with minimal operational disruption.',
            'Optimised Configuration: Enterprise routers, switches, and access points tuned for peak speed and security.'
          ]
        },
        {
          name: 'Communication & Data Connectivity',
          points: [
            'VOIP Implementation: Cost-effective voice solutions for crystal-clear corporate communications.',
            'Point-to-Point Wireless Links: High-bandwidth wireless bridges for inter-building and remote connectivity.'
          ]
        },
        {
          name: 'EPABX Systems & Server Rooms',
          points: [
            'EPABX installation, configuration, call routing, queue control, and voicemail recording.',
            'Server room design, rack installations, structured cable dressing, and cooling airflow management.'
          ]
        }
      ],
      benefitsTitle: 'How Global Enterprises Helps Businesses',
      benefits: [
        'Making things run faster with seamless interoperability.',
        'Cutting down on communication and telephone costs.',
        'Knowing your corporate data is safe and secured.',
        'Staying consistently connected with minimal downtime.',
        'Technology that scales and grows with your business expansion.',
        'Spend less time worrying about IT and more time on core business goals.'
      ],
      ctaText: 'Get a Free IT Consultation'
    },
    {
      id: 'fitout_leasehold',
      title: 'Fit-out & Leasehold Improvement Services',
      shortTitle: 'Fit-out & Interiors',
      icon: Armchair,
      image: '/images/workspace.jpg',
      headline: 'Building Offices That Inspire. Your Office, Our Expertise.',
      subHeadline: 'Office Finishings, Fit-out & Leasehold Improvement Services.',
      intro: "Ever walked into an office and just felt good? We believe your workspace should be a place where you and your team can grow, be productive, and actually enjoy being there. We take the stress out of creating the most positive office environment.",
      coreOfferings: [
        {
          name: 'Physical Space Solutions & Structural Work',
          points: [
            'Adding or removing walls and custom partitions to optimize layouts.',
            'Modifying acoustic ceilings, doors, and window placements.',
            'Comprehensive space planning, design, and relocation assistance.'
          ]
        },
        {
          name: 'Interior Finishing & MEP Services',
          points: [
            'Flooring installation (commercial carpet, tile, hardwood, vinyl).',
            'Professional painting, wallpapering, and acoustic wall panels.',
            'Upgrading lighting fixtures, electrical outlets, and specialized wiring.',
            'Plumbing modifications for office restrooms and pantry facilities.'
          ]
        },
        {
          name: 'Modular Workstations & Furniture',
          points: [
            'Modular workstations with ergonomic privacy panels and work surfaces.',
            'Executive task chairs, desks, filing cabinets, conference tables, and lounge seating.'
          ]
        },
        {
          name: 'Technology, Safety & Cafeteria Infrastructure',
          points: [
            'Integrated structured data cabling, server room build-outs, security and fire suppression.',
            'Cafeteria space design and commercial kitchen equipment setup.'
          ]
        }
      ],
      benefitsTitle: 'The Global Enterprises Difference in Fit-outs',
      benefits: [
        'Comprehensive Space Solutions under a single contract.',
        'Expert, Efficient Execution with minimal downtime.',
        'Quality & Precision Focused joinery and finishes.',
        'Collaborative client approach tailored to your brand identity.'
      ],
      ctaText: 'Schedule Office Makeover'
    },
    {
      id: 'injection_moulding',
      title: 'Injection Moulding Solutions',
      shortTitle: 'Injection Moulding',
      icon: Boxes,
      image: '/images/speedgates.jpg',
      headline: 'Injection Moulding Solutions',
      subHeadline: 'Precise Work for Professional Environments.',
      intro: "Whether you're a Fortune 500 company, a growing SMB, or a government facility, we understand the unique demands of professional environments. Our injection moulding expertise helps you meet compliance requirements, improve operational efficiency, and maintain professional standards.",
      coreOfferings: [
        {
          name: 'Running Your Moulds (Job Work Services)',
          points: [
            'Whether it is a few parts or a huge production run, we take great care in using your existing moulds.',
            'We work with all grades of engineering plastics and maintain strict quality control.',
            'Rapid turnaround capabilities when you are up against critical delivery deadlines.'
          ]
        },
        {
          name: 'Creating Custom Products From Scratch',
          points: [
            'Design optimization for efficient manufacturability (DFM).',
            'Rapid prototyping to test form, fit, and mechanical function.',
            'Custom mould tooling design tailored to your exact component specifications.',
            'Expert material selection to balance mechanical performance with cost efficiency.',
            'Smooth scaling and ramp-up to high-volume commercial production.'
          ]
        }
      ],
      benefitsTitle: 'Why People Choose Us for Manufacturing',
      benefits: [
        'Quality: Registered and certified processes from raw resin to finished parts.',
        'Smart Solutions: Deep plastics engineering knowledge to solve tricky design hurdles.',
        'Modern Equipment: Upgraded precision machines for consistent part tolerances.',
        'Responsive Collaboration: Flexible, attentive, and dedicated to your project success.'
      ],
      ctaText: 'Partner with Us on Moulding'
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
