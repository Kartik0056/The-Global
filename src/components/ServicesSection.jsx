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
      headline: "Let's Make Your Place Safer, Together.",
      subHeadline: 'Surveillance & Monitoring Systems Installed for Your Protection and Convenience',
      intro: "Imagine feeling completely secure, no matter where you are. We make that happen. We're your friendly professionals for security and safety installations, so you can relax knowing your workplace is protected.",
      coreOfferings: [
        {
          name: 'CCTV Surveillance & Monitoring Systems',
          points: [
            'Camera Installation & Strategic Positioning: Optimal camera angles for complete and clear perimeter coverage.',
            'Recording System Setup & Configuration: NVR/DVR setup for seamless recording and instant footage retrieval.',
            'Remote Viewing Configuration: Access live camera feeds anytime via mobile devices or desktop workstations.',
            'Supported CCTV Systems: IP-based digital networks, HD-based coaxial systems, and Standalone recording units.'
          ]
        },
        {
          name: 'Body-Worn Cameras',
          points: [
            'Camera Deployment & Training: Hands-on staff training for field deployment and operational confidence.',
            'Secure Data Storage & Management: Encrypted video archival, audit logs, and footage management.'
          ]
        },
        {
          name: 'Access Control Systems',
          points: [
            'Card Reader & Smart Card Systems: Restrict and authorize staff entry across secure operational zones.',
            'Biometric Access Control: Eye scanner, 3D face reader, and precision fingerprint recognition terminals.',
            'Visitor Management Systems: Digital visitor logging, pass issuance, and audit verification.'
          ]
        },
        {
          name: 'Public Access & Attendance Systems',
          points: [
            'Time & Attendance Tracking: Digital shift logs with automated payroll software sync.',
            'Optical Speed Gates & Turnstiles: High-throughput controlled access for corporate lobbies.',
            'Mobile Access & Intercoms: Entrance video door monitoring and smartphone credential verification.'
          ]
        },
        {
          name: 'Smart Door Locks (Authorized QUBO Partner)',
          points: [
            'Smart Lock Installation: Keyless digital entry, PIN keypad, and biometric locks for office doors.',
            'Remote Access Configuration: Manage permissions, temporary digital keys, and entry logs remotely.',
            'Video Doorbell & Video Phone: Real-time two-way audio/video communication with visitors.'
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
      ctaText: 'Get a Callback'
    },
    {
      id: 'audio_video',
      title: 'Audio & Video Solutions',
      shortTitle: 'Audio & Video Solutions',
      icon: Tv,
      image: '/images/av_room.jpg',
      headline: 'Leading Audio & Video Solutions Provider in India',
      subHeadline: 'Driving Productivity Through Seamless Connectivity & Immersive Experiences',
      intro: 'Consider audio-visual (AV) solutions as means to assist businesses to communicate and connect more effectively. They range from video conferencing, digital signage, and sound systems. To any business, these solutions make meetings easier to understand, presentations more captivating, and customer experiences more memorable. We offer integrated solutions that allow for effective and clear communication, whether in the same room or on different continents.',
      coreOfferings: [
        {
          name: 'Video & Audio Conferencing Systems',
          points: [
            'Video Conferencing Systems: High-definition video meetings that encourage hybrid collaboration and reduce travel costs.',
            'Audio Conferencing Systems: Sophisticated DSP audio processing and noise-cancelling microphone arrays for crystal-clear voice.'
          ]
        },
        {
          name: 'Conference Hall Integration & E-Classrooms',
          points: [
            'Conference Hall Integration: Large LED/LCD video walls, stage audio, handheld mics, and simple central touch controls.',
            'E-Classrooms: Interactive touchscreens, smart digital whiteboards, and remote learning software platforms.'
          ]
        },
        {
          name: 'Presentation Systems & Digital Signage',
          points: [
            'Presentation Systems: 4K laser projectors, commercial displays, and wireless 1-touch screen sharing.',
            'Digital Signage: Networked display panels and video walls with cloud content management systems for scheduling.'
          ]
        },
        {
          name: 'Board Rooms & Hybrid Meeting Rooms',
          points: [
            'Board Rooms & Meeting Rooms: Speaker-tracking smart cameras, automated lighting presets, and cable cubbies.',
            'Public Address (PA) Systems: Zoned background audio and audible voice announcements from small offices to large auditoriums.'
          ]
        },
        {
          name: 'EPABX Call Handling Solutions',
          points: [
            'EPABX Installation & Configuration: Business telephone PBX systems customized to your operational scale.',
            'Call Routing & Management: Intelligent queue routing, automated attendant (IVR), voice mail setup, and call recording.'
          ]
        }
      ],
      benefitsTitle: 'Comprehensive Solutions for Diverse Needs',
      benefits: [
        'Large Corporations & Corporate Headquarters',
        'Small to Medium-sized Businesses (SMBs)',
        'Hotels and Hospitality Spaces',
        'Healthcare Facilities & Hospitals',
        'Government Buildings & Secretariats',
        'Auditoriums & Training Centers'
      ],
      ctaText: 'Discuss Your Needs'
    },
    {
      id: 'fire_safety_rodent',
      title: 'Fire Safety, Leakage & Rodent Management',
      shortTitle: 'Fire Safety & Leakage',
      icon: Flame,
      image: '/images/firesafety.jpg',
      headline: 'Comprehensive Protection Against Fire, Water, and Rodent',
      subHeadline: 'Protecting Your Assets and Ensuring Business Continuity',
      intro: "Protecting your assets and ensuring business continuity. Early detection, automated rapid suppression, and comprehensive risk mitigation against fire, water ingress, and rodent disruption.",
      coreOfferings: [
        {
          name: 'Fire Alarm & Early Warning Systems',
          points: [
            'Alarm Panel & Smoke Detector Installation: Cutting-edge addressable and conventional alarm panels with multi-criteria optical sensors.',
            'Conventional Fire Alarm Systems: Cost-effective zoned fire alarms designed specifically for Indian voltage conditions and SMB offices.',
            'Addressable Fire Alarm Systems: Pinpoint location identification of fire alarm signals for hospitals, industrial plants, and high-rise commercial buildings.'
          ]
        },
        {
          name: 'Fire Detection & Extinguishing Systems',
          points: [
            'Sprinkler System Installation: Automated sprinkler networks and clean-agent gas suppression for data centres and server rooms.',
            'Fire Extinguisher Installation & Training: Strategically positioned extinguishers coupled with hands-on emergency training for staff.'
          ]
        },
        {
          name: 'Environmental Safety: Water Leakage & Rodent Control',
          points: [
            'Leak Detection System Installation: Sensor-based water leak detection cables offering continuous monitoring of server rooms, UPS areas, and plumbing shafts.',
            'Rodent Control Solutions: Heavy-duty rodent nets, armored wire conduits, and preventative eradication plans to protect electrical wiring and fiber cables.'
          ]
        }
      ],
      benefitsTitle: 'What Sets Us Apart',
      benefits: [
        'Real, unmatched foresight: Thorough risk assessments to find specific answers for extinguishing fires, lessening water damage, and managing pests.',
        'Continuous, proactive excellence: Client-centric approach with constant dedication to exceeding safety expectations.',
        'Full compliance with statutory safety regulations, National Building Code (NBC), and local fire safety codes.',
        'Seamless integration with your building management systems (BMS) and central control panels.'
      ],
      ctaText: 'Schedule a meeting'
    },
    {
      id: 'network_connectivity',
      title: 'Network & Connectivity Services',
      shortTitle: 'Network & Connectivity',
      icon: Server,
      image: '/images/headquarters.jpg',
      headline: 'Smooth Network & Connectivity Services, Everywhere.',
      subHeadline: 'High-Velocity Connectivity, Seamlessly Delivered',
      intro: "These days, if your internet's down, your business is down. It's not just about having a connection; it's about having a reliable one. Everything runs through it – your data, your tools, how you talk to customers. You need a network that lets you move around, handle a lot of traffic, and just works, all the time. No one wants to deal with constant outages. That's where we come in. We're really good at building networks. We set up everything right, making sure it's running smoothly. Frankly, it's about making sure your team can get stuff done and your clients are happy. Because at the end of the day, that's what matters, right?",
      coreOfferings: [
        {
          name: 'Core Network Planning & Implementation',
          points: [
            'IP Addressing Schemes & Wireless Planning: Robust subnetting, VLAN segmentation, and enterprise Wi-Fi heatmap design.',
            'Router & Switch Configuration: Layer 2/3 managed switches and enterprise routers configured for peak throughput and firewall security.',
            'Wireless Access Point Deployment: Seamless roaming Wi-Fi access points across all office floors.'
          ]
        },
        {
          name: 'Data, Voice & Point-to-Point Connectivity',
          points: [
            'VOIP Solutions: Cost-effective digital telephony and high-definition voice over IP.',
            'Wireless Point-to-Point Connections: High-bandwidth wireless bridge links connecting multiple buildings or remote sites.',
            'EPABX Installation & Configuration: Call routing, interactive voice response (IVR), voice mail setup, and call recording solutions.'
          ]
        },
        {
          name: 'IT Infrastructure & Server Rooms',
          points: [
            'Server Rack Installation & Cable Dressing: Server room design, standard 42U rack mounting, PDU power distribution, and structured patch cabling.'
          ]
        }
      ],
      benefitsTitle: 'How Global Enterprises Help Businesses',
      benefits: [
        'Making things run faster. We build systems that work together seamlessly, boosting productivity without any frustrating delays.',
        'Cutting down on those communication costs. We implement cost-effective smartphone and internet solutions, optimising your budget.',
        'Knowing your data is secure. We provide robust network defenses, ensuring the protection of your sensitive data.',
        'Staying consistently connected. We develop reliable networks that minimise downtime and maintain uninterrupted online access.',
        'Tech that grows with your business. Our solutions are designed to scale, adapting to your evolving needs without holding you back.',
        'Focus on what you do best. Spend less time worrying about IT and more time dedicated to your core business goals.'
      ],
      ctaText: 'Schedule a meeting today'
    },
    {
      id: 'fitout_leasehold',
      title: 'Fit-out & Leasehold Improvement Services',
      shortTitle: 'Fit-out & Interiors',
      icon: Armchair,
      image: '/images/workspace.jpg',
      headline: 'Building Offices That Inspire. Your Office, Our Expertise',
      subHeadline: 'Office Finishings, Fit-out & Leasehold Improvement Services',
      intro: "Ever walked into an office and just felt good? We believe your workspace should be a place where you and your team can grow, be productive, and actually enjoy being there. That's why we're here to take the stress out of creating the most positive office environment. We are your friendly office makeover team. We'll handle all the nitty-gritty details, so you can focus on what you do best – running your business.",
      coreOfferings: [
        {
          name: 'Physical Space & Leasehold Properties',
          points: [
            'Space Planning & Architectural Design: Optimizing office layout for collaboration, traffic flow, and team density.',
            'Negotiation Support & Property Advisory: Technical due-diligence for leasehold facilities.',
            'Relocation Services: Turnkey office shifting and IT hardware relocation without operational disruption.'
          ]
        },
        {
          name: 'Leasehold Improvements & MEP Services',
          points: [
            'Painting & Decorating: Commercial painting, custom finishes, and brand color integration.',
            'Flooring Installation: Commercial carpet tiles, hardwood, vitrified tiles, and vinyl flooring.',
            'Partition & Wall Construction: Demountable glass partitions, acoustic drywalls, and ceiling baffles.',
            'Lighting & Electrical: LED fixtures, architectural mood lighting, and power raceways.'
          ]
        },
        {
          name: 'Interior Work & Amenities',
          points: [
            'Furniture Selection & Modular Workstations: Ergonomic chairs, linear/cluster workstations, executive desks, and conference tables.',
            'Acoustic Treatment & Sound Dampening: Wall acoustic panels and ceiling baffles to reduce reverberation.',
            'Signage Installation: Brand reception logos, directional signage, and safety egress markers.',
            'Cafeteria Design & Kitchen Equipment: Full pantry and cafeteria layout with commercial kitchen equipment setup.'
          ]
        }
      ],
      benefitsTitle: 'The Global Enterprises Difference',
      benefits: [
        'Comprehensive Space Solutions from design to handover.',
        'Expert, Efficient Execution minimizing disruption.',
        'Quality & Precision Focused commercial materials.',
        'Collaborative Client Approach tailored to your goals.'
      ],
      ctaText: 'Schedule a meeting today'
    },
    {
      id: 'injection_moulding',
      title: 'Injection Moulding Solutions',
      shortTitle: 'Injection Moulding',
      icon: Boxes,
      image: '/images/injection_moulding.jpg',
      headline: 'Experts who keep moulds running at their best',
      subHeadline: 'Precise Work for Professional Environments',
      intro: "Whether you're a Fortune 500 company, a growing SMB, or a government facility, we understand the unique demands of professional environments. Our injection moulding expertise can help you meet compliance requirements, improve operational efficiency, and maintain the professional standards your organization requires.",
      coreOfferings: [
        {
          name: 'Running Your Moulds (Job Work Services)',
          points: [
            "Whether it's a few parts or a huge production run, we'll take great care in using your existing moulds.",
            'We work with all sorts of plastics, keep a close eye on quality, and can even turn things around quickly if you\'re up against a deadline.'
          ]
        },
        {
          name: 'Creating Custom Products From Scratch',
          points: [
            'We can help you tweak your design to make it perfect for manufacturing, build prototypes to see how it works, and design the ideal mould for exactly what you need.',
            "We'll also help you pick the right materials to balance how it performs and what it costs.",
            "Then, when you're ready to go big, we'll smoothly ramp up to full production."
          ]
        },
        {
          name: 'Who We Work With',
          points: [
            'Large Corporations: Custom components for enterprise operations.',
            'Small to Medium-sized Businesses (SMBs): Scalable solutions for growing companies.'
          ]
        }
      ],
      benefitsTitle: 'Why People Choose Us',
      benefits: [
        'Quality: We\'re serious about quality – registered, certified, with full attention from raw material to finished product.',
        'Smart Solutions: Our team knows plastics inside and out, solving tricky problems and finding better ways to make your parts.',
        'Modern Equipment: Constantly upgraded machinery and advanced technology for superior parts.',
        'We\'re Nice to Work With: Responsive, flexible, and genuinely dedicated to your project\'s success.'
      ],
      ctaText: 'Schedule a meeting today'
    }
  ];

  const current = servicesData[activeTab];

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
