import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Building2, 
  CheckCircle,
  CheckCircle2,
  Award,
  Video,
  Scan,
  Tv,
  Flame,
  Armchair,
  Wrench,
  Clock,
  Shield,
  Plane,
  Truck,
  Factory,
  AlertOctagon,
  ChevronRight,
  ChevronDown,
  Calculator,
  Layers,
  ArrowUpRight,
  Radio,
  Lock,
  PhoneCall,
  Server,
  Star,
  Users,
  BadgeCheck,
  Check
} from 'lucide-react';

export default function HomePage({ onOpenSchedule }) {
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [estimateArea, setEstimateArea] = useState(10000);
  const [selectedEstimatorServices, setSelectedEstimatorServices] = useState(['cctv', 'speedgates', 'fire']);
  const [openFaq, setOpenFaq] = useState(0);

  // Section 3: All 10 Comprehensive Solutions from Google Doc 1
  const comprehensiveSolutions = [
    {
      id: 'cctv',
      title: 'CCTV Systems',
      subtitle: 'SMART 4K SURVEILLANCE',
      category: 'SURVEILLANCE',
      icon: Video,
      image: '/images/cctv.jpg',
      badge: 'EAGLE EYE OPTICS / AMC',
      desc: 'Unlimited Peace of mind with our smart CCTV solutions with eagle’s eyes, providing vigilant security. From discreet checks to Annual Maintenance Contract (AMC), we tailor solutions to your specific needs.',
      features: [
        'Discreet security inspections & smart 4K optics',
        'Tailored Annual Maintenance Contracts (AMC)',
        'Remote mobile & central cloud VMS telemetry'
      ]
    },
    {
      id: 'body_worn',
      title: 'Body-worn Cameras',
      subtitle: 'LTE EVIDENCE RECORDING',
      category: 'BODY CAMERAS',
      icon: Shield,
      image: '/images/hero_bg.jpg',
      badge: 'AIRLINE TRUSTED & LTE',
      desc: 'Leading airlines like Air India, Etihad, IndiGo, British Airways, and more rely on our LTE-enabled body-worn cameras. These cameras record and stream high-quality video evidence, trusted by businesses globally.',
      features: [
        'LTE-enabled live video streaming & evidence capture',
        'Trusted by Air India, IndiGo, Etihad & British Airways',
        'Encrypted local & cloud compliance storage'
      ]
    },
    {
      id: 'fire_safety',
      title: 'Fire Detection & Extinguishing Systems',
      subtitle: 'LIFE SAFETY & SUPPRESSION',
      category: 'FIRE SAFETY',
      icon: Flame,
      image: '/images/firesafety.jpg',
      badge: 'EARLY DETECTION / RAPID RESPONSE',
      desc: 'Protect your most valuable – your people and your property – with our fire detection & Extinguishing systems. Early detection and rapid response are crucial, and our systems are designed for maximum effectiveness.',
      features: [
        'Automated fire suppression & sprinkler networks',
        'Certified addressable & conventional smoke alarms',
        'Designed for rapid emergency response & code compliance'
      ]
    },
    {
      id: 'av_solutions',
      title: 'Advanced Audio & Video Solutions',
      subtitle: 'PERSONALIZED BUSINESS AV',
      category: 'SMART AV',
      icon: Tv,
      image: '/images/av_room.jpg',
      badge: 'HD CONFERENCING & SIGNAGE',
      desc: 'Personal audio-video solutions for businesses, including high-definition conferencing, interactive presentations, professional audio, and digital signage. Ongoing support enhance communication, productivity, and engagement in meeting rooms and collaboration spaces.',
      features: [
        'High-definition video conferencing & beamforming audio',
        'Interactive presentation touchscreens & digital signage',
        'Ongoing support for meeting rooms & collaboration spaces'
      ]
    },
    {
      id: 'access_control',
      title: 'Access Control Systems',
      subtitle: 'INTELLIGENT PREMISES SECURITY',
      category: 'ACCESS CONTROL',
      icon: Scan,
      image: '/images/speedgates.jpg',
      badge: 'UNAUTHORISED ENTRY DETERRENCE',
      desc: 'Manage and monitor access to your premises with our intelligent access control systems. They are designed to deter unauthorised entry like a bouncer at a club, but for your office.',
      features: [
        'Intelligent card readers & biometric entry locks',
        'Visitor management & real-time credentialing',
        'Deters unauthorised access across all perimeter doors'
      ]
    },
    {
      id: 'smart_locks',
      title: 'Smart Door Locks',
      subtitle: 'HERO ELECTRONIX / QUBO',
      category: 'SMART LOCKS',
      icon: Lock,
      image: '/images/speedgates.jpg',
      badge: 'AUTHORIZED QUBO INSTALLER',
      desc: 'Install the convenience and protection of QUBO smart door locks. As authorized installers for QUBO (a Hero Electronix Pvt. Ltd. company), we serve the NCR region and other areas of North India.',
      features: [
        'Official authorized installer for QUBO (Hero Electronix)',
        'Keyless biometric, passcode & remote app access',
        'Full service coverage across NCR & North India'
      ]
    },
    {
      id: 'public_access',
      title: 'Public Access & Attendance Systems',
      subtitle: 'ATTENDANCE TRACKING & GATES',
      category: 'ATTENDANCE',
      icon: Users,
      image: '/images/speedgates.jpg',
      badge: 'ACCURATE TIME REPORTS',
      desc: 'Attendance tracking and managing public access with our user-friendly set-ups. While we can\'t guarantee a 100% reduction in unnecessary smoke breaks, we can certainly provide detailed reports on it.',
      features: [
        'Automated time & attendance reporting dashboards',
        'Controlled public access & optical turnstile gates',
        'Face readers, fingerprint & RFID mobile scanning'
      ]
    },
    {
      id: 'epabx',
      title: 'EPABX Office Communications',
      subtitle: 'TELEPHONY & CALL MANAGEMENT',
      category: 'EPABX',
      icon: PhoneCall,
      image: '/images/av_room.jpg',
      badge: 'FREE INTERNAL CALLS',
      desc: 'Simplify your office communications with our EPABX (Electronic Private Automatic Branch Exchange) service. Enjoy free internal calls, effortless call management, and a more productive workday.',
      features: [
        'Free internal intercom calling between departments',
        'Effortless call routing, queuing & voicemail management',
        'Dependable PBX hardware installation & maintenance'
      ]
    },
    {
      id: 'leasehold_fitout',
      title: 'Leasehold Improvements',
      subtitle: 'OFFICE INTERIORS & FINISHING',
      category: 'INTERIOR FIT-OUT',
      icon: Armchair,
      image: '/images/workspace.jpg',
      badge: 'MODERN WORKSPACES',
      desc: 'Get the most out of your leased space. Our leasehold improvement services deliver the perfect environment for your business, including painting, flooring, and partition installations etc.',
      features: [
        'Custom demountable partitions & drywall layouts',
        'Premium flooring, painting, and ceiling finishings',
        'Ergonomic modular workstations & conference desks'
      ]
    },
    {
      id: 'network_integration',
      title: 'Network Integration',
      subtitle: 'CORE IT & SERVER ROOMS',
      category: 'NETWORKING',
      icon: Server,
      image: '/images/headquarters.jpg',
      badge: 'SEAMLESS CONNECTIVITY',
      desc: 'We build reliable, efficient networks. Implementing core infrastructure to seamless voice and data solutions, we handle everything: connectivity, server rooms, and, ensuring your business stays connected and secure.',
      features: [
        'Core network planning, routing & switch deployment',
        'Server room design, rack setups & structured cabling',
        'High-bandwidth wireless & point-to-point links'
      ]
    }
  ];

  // Section 4: Why Choose Global Enterprises
  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'Your Workplace, Secured',
      desc: 'A suite of security solutions – CCTV, fire detection, and access control – all working in harmony to optimise security. We take a holistic approach to security, ensuring every vulnerability is addressed.'
    },
    {
      icon: Zap,
      title: 'Innovation Meets Execution',
      desc: 'We leverage international-grade tech and back it up with exceptional customer service. With seamless implementation and continuous support, we\'re with you every step of the way.'
    },
    {
      icon: Layers,
      title: 'One-Stop Shop',
      desc: 'Why juggle multiple vendors when you can get everything you need from one trusted partner? We handle all your security and connectivity needs, saving you time, money, and hassle.'
    },
    {
      icon: Award,
      title: 'Focus on What Matters',
      desc: 'Focus on growing your business, knowing that your workplace is secure, connected, and operating at peak efficiency. We provide the peace of mind you need to thrive.'
    }
  ];

  // Section 5: Community of Clients (from Doc 1)
  const clientCommunity = [
    { name: 'Agile Airport Services', icon: Plane, tag: 'Airport Ground Operations' },
    { name: 'Air Canada', icon: Plane, tag: 'International Airline' },
    { name: 'Air France', icon: Plane, tag: 'Global Aviation Fleet' },
    { name: 'Air India Limited', icon: Plane, tag: 'Flag Carrier Fleet' },
    { name: 'Akasa Air', icon: Plane, tag: 'Commercial Aviation' },
    { name: 'British Airways', icon: Plane, tag: 'International Airline' },
    { name: 'Divine Interiors', icon: Building2, tag: 'Commercial Fit-Outs' },
    { name: 'Egypt Air', icon: Plane, tag: 'Aviation Fleet Security' },
    { name: 'Etihad Airways', icon: Plane, tag: 'Global Airline Partner' },
    { name: 'Singapore Airlines Limited', icon: Plane, tag: 'Premier International Airline' },
  ];

  // Section 6: Trusted Brand Partners (from Doc 1)
  const brandPartners = [
    { name: 'Hikvision', category: 'CCTV & Video Security' },
    { name: 'Vivotech', category: 'Optical Surveillance' },
    { name: 'TYCO', category: 'Fire & Electronic Security' },
    { name: 'QUBO', category: 'Smart Door Locks (Hero Electronix)' },
    { name: 'Bosch', category: 'Security & PA Systems' },
    { name: 'Honeywell', category: 'Building Automation & Fire' },
    { name: 'Henrich', category: 'Industrial Networking' },
    { name: 'Sparsh', category: 'Surveillance Electronics' },
    { name: 'Panasonic', category: 'Display & Communications' },
    { name: 'Polycab', category: 'Wires & Structured Cables' },
    { name: 'Ahuja', category: 'Public Address & Audio' },
    { name: 'AKG', category: 'Professional Microphones' },
    { name: 'D-Link', category: 'Networking & Switches' },
    { name: 'Netgear', category: 'Enterprise Network Gear' },
  ];

  // Section 7: Client Testimonials
  const clientTestimonials = [
    {
      quote: 'The Global Enterprises transformed our flight operations security with robust body-worn cameras and CCTV systems. Their single-point turnkey accountability eliminated vendor friction entirely.',
      author: 'Senior Infrastructure Director',
      org: 'Aviation Fleet Partner',
      rating: 5
    },
    {
      quote: 'Their smart access control, fire detection, and rapid AMC support have kept our facilities secure and 100% operational for years. True professionals.',
      author: 'Head of Workplace Infrastructure',
      org: 'Corporate Enterprise Hub',
      rating: 5
    },
    {
      quote: 'From QUBO smart locks to complete network and server room integration, Sachin and his team delivered on time and within budget. Highly recommended!',
      author: 'Director of Operations',
      org: 'NCR Commercial Space',
      rating: 5
    }
  ];

  // Section 8: FAQ from Google Doc 1
  const faqItems = [
    {
      q: 'What are the components of a good security system?',
      a: 'A comprehensive security system majorly includes elements like access control, surveillance (CCTV), intrusion detection, fire detection, and emergency response plans. It should also consider cybersecurity.'
    },
    {
      q: 'How can I learn more or get a demo?',
      a: 'You can book a demo by calling/emailing us directly. Look for a "Book a Demo" button or contact information on our website or marketing materials.'
    },
    {
      q: 'What are the benefits of using a single vendor for multiple solutions?',
      a: 'Using a single vendor helps with procurement, makes communication easy, and often results in quality integration and support for the overall system.'
    }
  ];

  const currentSolution = comprehensiveSolutions[activeSolutionTab];

  const toggleEstimatorService = (id) => {
    if (selectedEstimatorServices.includes(id)) {
      if (selectedEstimatorServices.length > 1) {
        setSelectedEstimatorServices(selectedEstimatorServices.filter(s => s !== id));
      }
    } else {
      setSelectedEstimatorServices([...selectedEstimatorServices, id]);
    }
  };

  const calculateEstimate = () => {
    let baseRate = 0;
    if (selectedEstimatorServices.includes('cctv')) baseRate += 45;
    if (selectedEstimatorServices.includes('speedgates')) baseRate += 55;
    if (selectedEstimatorServices.includes('fire')) baseRate += 40;
    if (selectedEstimatorServices.includes('av')) baseRate += 60;
    if (selectedEstimatorServices.includes('workspace')) baseRate += 120;
    if (selectedEstimatorServices.includes('turnkey')) baseRate += 30;
    
    const est = (estimateArea * baseRate);
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(est);
  };

  return (
    <div className="relative">
      {/* Section 1: Hero Banner */}
      <Hero onOpenSchedule={onOpenSchedule} />

      {/* Section 2: Stats & Credibility Ribbon */}
      <section className="py-8 sm:py-10 bg-gradient-to-r from-[#17082e] via-[#210c40] to-[#17082e] border-y border-amber-400/30 relative overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold shrink-0 shadow-lg">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="text-sm sm:text-lg font-black font-heading text-white tracking-wide">
                  10+ Years of Serving &nbsp;|&nbsp; All-in-one Integration Solutions &nbsp;|&nbsp; Trusted by 200+ Businesses
                </div>
                <div className="text-xs text-[#c4b5fd] mt-0.5 font-medium">
                  Next-Gen Workspace Solutions engineered and maintained under one accountable roof.
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSchedule}
              className="btn-gold px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-xl shrink-0"
            >
              <span>Schedule a meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Our Comprehensive Solutions */}
      <section id="comprehensive-solutions" className="py-24 bg-[#120722] bg-tech-grid relative overflow-hidden">
        <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/15 top-20 right-0"></div>
        <div className="bg-glow-orb w-[500px] h-[500px] bg-amber-500/10 bottom-10 left-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="section-badge mb-2">SECTION 3 / ENTERPRISE PORTFOLIO</div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                OUR COMPREHENSIVE <span className="text-gold-gradient">SOLUTIONS</span>
              </h2>
              <p className="text-sm sm:text-base text-[#d1c4e9] mt-3 max-w-3xl">
                Integrated corporate solutions for security, communication, and productivity.
              </p>
            </div>

            <Link
              to="/services"
              className="btn-gold px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2 w-fit shadow-xl"
            >
              <span>View All 6 Dedicated Service Pages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive 10-Item Tabbed Display */}
          <div className="glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-5 sm:p-8 bg-[#180933]/90 backdrop-blur-2xl">
            
            {/* 10 Navigation Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
              {comprehensiveSolutions.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeSolutionTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSolutionTab(idx)}
                    className={`p-3 rounded-2xl text-left transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-[#10061e] border-amber-300 font-extrabold shadow-lg scale-102'
                        : 'bg-[#120722]/80 text-[#c4b5fd] border-white/10 hover:border-amber-400/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-wider opacity-80 font-mono">
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#10061e]' : 'text-amber-400'}`} />
                    </div>
                    <div className="text-xs font-bold font-heading truncate">
                      {item.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Solution Visual & Detailed Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Preview */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/15 shadow-2xl group bg-black">
                <img
                  src={currentSolution.image}
                  alt={currentSolution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10061e] via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-[#10061e]/90 border border-amber-400/60 text-[10px] font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md shadow-lg">
                  {currentSolution.badge}
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#17082e]/90 backdrop-blur-md border border-white/10">
                  <span className="text-xs text-white font-semibold">
                    {currentSolution.subtitle}
                  </span>
                </div>
              </div>

              {/* Solution Narrative & Bullets */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                    ENTERPRISE SOLUTION NODE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
                    {currentSolution.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed mb-5 bg-[#140828] p-4 rounded-2xl border border-white/10">
                    {currentSolution.desc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {currentSolution.features.map((feat, fIdx) => (
                      <div key={fIdx} className="p-3 rounded-xl bg-[#120722] border border-white/10 flex items-start gap-2.5 text-xs text-[#d1c4e9]">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3 CTA */}
                <div className="p-4 rounded-2xl bg-[#230e3d] border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#e9d5ff] font-medium text-center sm:text-left">
                    Ready to enhance your workplace security and efficiency?
                  </div>
                  <button
                    onClick={onOpenSchedule}
                    className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shrink-0"
                  >
                    <span>Book a demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Why Choose Global Enterprises? */}
      <section className="py-24 bg-[#10061e] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge justify-center mb-2">SECTION 4 / THE DIFFERENCE</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              WHY CHOOSE <span className="text-gold-gradient">GLOBAL ENTERPRISES?</span>
            </h2>
            <div className="inline-block mt-3 px-4 py-1.5 rounded-full bg-[#200c3b] border border-amber-400/30 text-amber-300 font-bold text-xs sm:text-sm tracking-wide uppercase">
              Because You Deserve More Than Just a Vendor.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 bg-[#16082c]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1 font-mono">
                      PILLAR 0{idx + 1}
                    </div>

                    <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#d1c4e9] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-amber-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>Verified Value</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 4 Callout CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#280f47] via-[#1a0b32] to-[#280f47] border border-amber-400/40 text-center max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold font-heading text-white mb-2">
              Experience the Global Enterprises difference.
            </h3>
            <p className="text-xs sm:text-sm text-[#d1c4e9] mb-6 max-w-xl mx-auto">
              Contact our directors to assess your facility and receive an itemized, transparent proposal.
            </p>
            <button
              onClick={onOpenSchedule}
              className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-xl"
            >
              <span>Get a free quote today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Section 5: Our Community of Clients */}
      <section className="py-24 bg-[#140828] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge justify-center mb-2">SECTION 5 / CLIENT COMMUNITY</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              OUR COMMUNITY <span className="text-gold-gradient">OF CLIENTS</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c4e9] mt-2">
              Trusted by international aviation leaders, corporate enterprises, and premier brands across India.
            </p>
          </div>

          {/* 10 Client Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {clientCommunity.map((client, idx) => {
              const Icon = client.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all flex flex-col justify-between group bg-[#180830]"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors font-heading leading-snug">
                      {client.name}
                    </div>
                  </div>
                  <div className="text-[10px] text-amber-300/80 font-mono mt-2 pt-2 border-t border-white/10">
                    {client.tag}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 5 CTA */}
          <div className="text-center">
            <button
              onClick={onOpenSchedule}
              className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-2xl"
            >
              <span>Join this list today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Section 6: Our Trusted Brand Partners */}
      <section className="py-20 bg-[#10061e] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="section-badge justify-center mb-2">SECTION 6 / BRAND ECOSYSTEM</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              OUR TRUSTED <span className="text-gold-gradient">BRAND PARTNERS</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c4e9] mt-2">
              Offering a comprehensive selection of products from leading brands, including:
            </p>
          </div>
        </div>

        {/* Single-Line Continuous Horizontal Scrolling Showcase */}
        <div className="relative w-full overflow-hidden">
          {/* Left & Right Gradient Shadows for seamless smooth edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#10061e] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#10061e] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Row */}
          <div className="animate-marquee flex items-center gap-4 py-2 hover:[animation-play-state:paused] cursor-pointer">
            {[...brandPartners, ...brandPartners].map((brand, idx) => (
              <div
                key={idx}
                className="w-[220px] min-w-[220px] glass-card px-5 py-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all text-center group bg-[#16082c] shrink-0 shadow-lg"
              >
                <div className="text-sm font-extrabold font-heading text-white group-hover:text-amber-300 transition-colors">
                  {brand.name}
                </div>
                <div className="text-[10px] text-[#b8a7dc] mt-1 font-mono leading-tight truncate">
                  {brand.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: See What Our Satisfied Clients Are Saying */}
      <section className="py-24 bg-[#140828] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge justify-center mb-2">SECTION 7 / TESTIMONIALS</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              SEE WHAT OUR <span className="text-gold-gradient">SATISFIED CLIENTS ARE SAYING</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card p-7 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all bg-[#17082f]"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm italic text-[#e9d5ff] leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-bold text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#b8a7dc]">
                    {t.org}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Client</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 8: FAQ from Google Doc 1 */}
      <section className="py-24 bg-[#10061e] border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="section-badge justify-center mb-2">SECTION 8 / FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              FREQUENTLY ASKED <span className="text-gold-gradient">QUESTIONS (FAQ)</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all bg-[#17082f]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold">Q:</span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#d1c4e9] leading-relaxed border-t border-white/5 pt-3">
                      <span className="text-emerald-400 font-mono font-bold mr-1.5">A:</span>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Indicative Fast Estimator Calculator */}
      <section className="py-20 bg-[#120722] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="section-badge mb-2">INSTANT BUDGET ESTIMATOR</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight mb-4">
                CALCULATE YOUR <span className="text-gold-gradient">FACILITY SCOPE</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#d1c4e9] leading-relaxed mb-6">
                Select your required technology and architectural modules along with your facility size for an indicative turnkey budget estimate.
              </p>

              <div className="space-y-3 text-xs text-[#c4b5fd]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Itemized Bill of Quantities (BOQ) with zero hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Includes full Turnkey AMC and compliance handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Guaranteed on-time milestone delivery record</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-400/40 bg-[#1b0a36] shadow-2xl">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                    <Calculator className="w-5 h-5 text-amber-400" />
                    <span>Indicative Turnkey Estimator</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                    REAL-TIME
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold text-white mb-2">
                    <span>Approx. Facility Area:</span>
                    <span className="text-amber-400 font-mono text-sm">{estimateArea.toLocaleString()} SQ. FT</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={estimateArea}
                    onChange={(e) => setEstimateArea(Number(e.target.value))}
                    className="w-full h-2 bg-[#2d1253] rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-[#9c8eb9] mt-1">
                    <span>1,000 sq.ft (Boutique)</span>
                    <span>25,000 sq.ft (Mid-Scale)</span>
                    <span>50,000+ sq.ft (Tower)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[11px] font-bold text-[#d1c4e9] uppercase tracking-wider mb-2">
                    Select Required Systems:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'cctv', label: 'CCTV & Body-Worn' },
                      { id: 'speedgates', label: 'Access & Smart Locks' },
                      { id: 'fire', label: 'Fire Safety Systems' },
                      { id: 'av', label: 'Audio & Video Suites' },
                      { id: 'workspace', label: 'Leasehold Improvements' },
                      { id: 'turnkey', label: 'Network Integration' },
                    ].map((svc) => {
                      const isSelected = selectedEstimatorServices.includes(svc.id);
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => toggleEstimatorService(svc.id)}
                          className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-amber-400 text-[#10061e] border-amber-300 shadow'
                              : 'bg-[#120722] text-[#c4b5fd] border-white/10 hover:border-amber-400/30'
                          }`}
                        >
                          <div className="truncate">{svc.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#120722] border border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                      INDICATIVE TURNKEY SCOPE
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-heading text-white mt-0.5">
                      {calculateEstimate()}*
                    </div>
                    <div className="text-[10px] text-[#9c8eb9]">
                      *Includes certified hardware, labor, wiring &amp; compliance testing.
                    </div>
                  </div>

                  <button
                    onClick={onOpenSchedule}
                    className="btn-gold px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shrink-0"
                  >
                    <span>Request Exact BOQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* High-Impact Executive Callout Banner */}
      <section className="py-20 bg-gradient-to-r from-[#290e4f] via-[#16082b] to-[#290e4f] border-t border-amber-400/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#3b156e] border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>GLOBAL ENTERPRISES &bull; CR PARK, NEW DELHI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            NEXT-GEN WORKSPACE SOLUTIONS, <span className="text-gold-gradient">HERE AND NOW.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#d1c4e9] max-w-2xl mx-auto leading-relaxed mb-8">
            Consult directly with our engineering team to design, deploy, and maintain an integrated workplace environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="btn-glass px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold"
            >
              About Global Enterprises
            </Link>

            <button
              onClick={onOpenSchedule}
              className="btn-gold px-8 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-2xl"
            >
              <span>Schedule a meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
