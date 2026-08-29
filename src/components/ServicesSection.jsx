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
          name: 'Professional CCTV Camera Installation Services',
          points: [
            'Strategic Camera Placement: With thorough site assessments to determine optimal camera locations, we give complete and clear surveillance coverage.',
            'Expert System Configuration: We configure your recording system for seamless operation and easy retrieval of recorded footage.',
            'Remote Viewing Setup: Sleep peacefully with remote access to your live camera feeds via your mobile or computer. Monitor your office property from anywhere.',
            'Installation of Various CCTV Systems: IP-based (network digital video), HD-based (coaxial high-definition), and Standalone localized recording systems.'
          ]
        },
        {
          name: 'Body-Worn Cameras',
          points: [
            "If you need body cameras, we'll show your team how to use them, so they're comfortable and confident.",
            "We'll also handle storing all that video, keeping it safe and sound."
          ]
        },
        {
          name: 'Access Control Systems',
          points: [
            "We'll put in card readers so only the right people can get in.",
            'Want something super secure? We can set up fingerprint or face recognition.',
            "We can even help you keep track of visitors, making sure everyone's accounted for."
          ]
        },
        {
          name: 'Public Access & Attendance Systems',
          points: [
            'Effortless Time Tracking: We offer digital systems for streamlined, accurate attendance.',
            'Implement controlled access via turnstiles, enhancing security and preventing unauthorized entry.',
            'Real-time video monitoring and communication for corporate entrances, enhancing security and visitor management with mobile integration.'
          ]
        },
        {
          name: 'Smart Door Locks (Authorized QUBO Partner)',
          points: [
            'Enterprise Smart Door Lock Systems: Keyless entry, remote management, and audit logs for enhanced security and efficiency.',
            'Smart Lock Integration: Professional deployment into existing infrastructure, optimizing security protocols.',
            'Remote Access Configuration: Robust remote access for flexible premises management.',
            'Integrated Video Doorbell & Mobile Communication: Real-time video and mobile access for advanced visitor management.'
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
            'Video Conferencing Systems: Allow for face-to-face meetings over distance, encourage collaboration, and save on travel expenses with high-definition video and audio.',
            'Audio Conferencing Systems: Ranging from basic speakerphones to sophisticated audio processing systems with noise-cancelling array microphones so everyone can hear and be heard.'
          ]
        },
        {
          name: 'Display, Presentation & Digital Signage',
          points: [
            'Large displays, projectors, and wireless presentation systems for easy content sharing.',
            'Interactive touchscreens and digital whiteboards for collaborative working.',
            'Digital Signage: Blending display screens (LCD, LED, video walls, touchscreens) with content management software for scheduling and cloud management.'
          ]
        },
        {
          name: 'Conference Hall Integration & E-Classrooms',
          points: [
            'Conference Hall Integration: Setting up LCD/LED screens, projectors, microphones, speakers, and simple central touch controls.',
            'E-Classrooms: Interactive touchscreens, advanced AV systems, and software facilitating remote digital learning.',
            'Presentation Systems: Projectors, displays, and control systems to make sure your message stands out and fascinates the audience.'
          ]
        },
        {
          name: 'Board Rooms & Hybrid Meeting Rooms',
          points: [
            'Board Rooms & Meeting Rooms: Simple controls, automatic adjustments for lights and equipment, smart hybrid cameras that focus on active speakers.',
            'Public Address Systems: Clear and audible voice in any setting, from small office spaces to huge auditoriums.'
          ]
        },
        {
          name: 'EPABX: Streamlined Call Handling',
          points: [
            'EPABX Installation & Setup: Dependable and effective telephone communication system customised to your unique business requirements.',
            'Call Routing & Management: Route calls to the right staff, control call queues, monitor call activity, voicemail setup, and call recording.'
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
      intro: 'Early detection and rapid response are essential for protecting life and safeguarding critical infrastructure. We deploy cutting-edge alarm panels, automated fire suppression, sensor-based water leak detection, and preventative rodent management so your business operates without interruption.',
      coreOfferings: [
        {
          name: 'Fire Detection & Extinguishing Systems',
          points: [
            'Advanced Early Warning Systems: Cutting-edge alarm panels and highly sensitive smoke detectors designed for rapid detection in corporate environments.',
            'Automated Fire Suppression: Strategically installed sprinkler systems providing automated, immediate fire suppression for data centres and offices.',
            'Strategic Fire Extinguisher Deployment & Training: Industry-grade fire extinguishers coupled with comprehensive staff emergency training.'
          ]
        },
        {
          name: 'Conventional & Addressable Fire Alarms',
          points: [
            'Conventional Fire Alarm Systems: All-inclusive systems designed specifically for Indian power conditions and smaller commercial spaces.',
            'Addressable Fire Alarm Systems: Advanced systems providing accurate location identification of fire alarm signals for hospitals, industrial plants, and high-rises.'
          ]
        },
        {
          name: 'Water Leakage Detection & Rodent Control',
          points: [
            'Leak Detection System Installation: Sensor-based water leakage detection offering continuous monitoring of server rooms, data centres, and utility spaces.',
            'Rodent Management for a Hygienic Workplace: Setting up modern rodent nets, conduit protection, and prevention plans to protect wiring and essential infrastructure.'
          ]
        }
      ],
      benefitsTitle: 'What Sets Us Apart',
      benefits: [
        'Fullest assurance of continuous, proactive excellence.',
        'Thorough risk assessments tailored to Indian building codes.',
        'Integrated answers for extinguishing fires, lessening water damage, and managing pests.',
        'Trained engineers ensuring all local and international safety standards are met.'
      ],
      ctaText: "Let's Protect Your Workplace"
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
          name: 'Core Network Services',
          points: [
            'Strategic Network Planning: We design robust IP addressing and wireless networks for seamless connectivity and scalability.',
            'Expert Deployment: Our certified engineers handle all aspects of implementation, ensuring minimal disruption.',
            'Optimised Configuration: Routers, switches, and access points are configured for peak performance and security.'
          ]
        },
        {
          name: 'Communication & Connectivity',
          points: [
            'VOIP Implementation: Cost-effective voice solutions for enhanced communication.',
            'Reliable Point-to-Point Links: High-bandwidth wireless connections for remote locations.',
            'Advanced EPABX Systems: Streamlined call management, voicemail setup, and recording tools.',
            'Infrastructure Support: Server room design and rack implementation for optimal performance.'
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
          name: 'Structural Modifications & Space Planning',
          points: [
            'Adding or removing walls and partitions to create new rooms or modify existing layouts.',
            'Modifying ceilings, acoustic baffles, and changing door and window placements.',
            'Comprehensive space planning, design, negotiation support, and relocation services.'
          ]
        },
        {
          name: 'Interior Finishing & MEP Services',
          points: [
            'Installing new flooring (carpet, tile, wood, vinyl) and painting/wallpapering.',
            'Installing new ceiling tiles and acoustic treatments.',
            'Electrical and Lighting: Upgrading fixtures, adding/modifying outlets, and specialized electrical systems.',
            'Plumbing: Installing or modifying sinks, toilets, and relocating plumbing lines.'
          ]
        },
        {
          name: 'Furniture, Modular Workstations & Amenities',
          points: [
            'Modular workstations (panels, partitions, work surfaces) and ergonomic office chairs.',
            'Desks, filing cabinets, bookcases, conference tables, and lounge furniture.',
            'Cafeteria design, kitchen equipment installation, and breakroom setups.'
          ]
        },
        {
          name: 'Technology, Communication & Safety Integration',
          points: [
            'Installing cabling for internet and phone systems.',
            'Setting up server rooms or data centers.',
            'Installing security systems and fire suppression systems under single-point accountability.'
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
