import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  PhoneCall, 
  ChevronDown,
  Video,
  Scan,
  Tv,
  Flame,
  Armchair,
  Wrench,
  CheckCircle2,
  ChevronRight,
  Zap,
  ShieldCheck,
  ShoppingBag,
  Heart,
  User,
  LogOut,
  Server,
  Boxes
} from 'lucide-react';

export default function Navbar({ onOpenSchedule }) {
  const { unreadCount } = useInquiry();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeMenuService, setActiveMenuService] = useState(0);
  
  const dropdownTimeoutRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const location = useLocation();

  // (rest unchanged down to right action suite)
  // ...


  const servicesMegaMenu = [
    {
      id: 'security',
      title: 'Security & Monitoring Systems',
      category: 'CCTV, BODY-WORN & ACCESS',
      icon: Video,
      image: '/images/cctv.jpg',
      badge: '4K CCTV & BODY CAMERAS',
      desc: 'Smart 4K CCTV surveillance, LTE body-worn cameras, intelligent access control, and QUBO smart door locks.',
      points: ['Strategic 4K Camera Placement', 'LTE Body-Worn Video Evidence', 'Biometric Access & QUBO Smart Locks']
    },
    {
      id: 'av',
      title: 'Audio & Video Solutions',
      category: 'CONFERENCING & DISPLAY',
      icon: Tv,
      image: '/images/av_room.jpg',
      badge: 'HD CONFERENCING & PA',
      desc: 'High-definition video conferencing, interactive presentations, public address (PA), digital signage, and EPABX.',
      points: ['Video & Audio Conferencing', 'Digital Signage & Video Walls', 'Conference Hall Integration & EPABX']
    },
    {
      id: 'firesafety',
      title: 'Fire Safety & Leakage Management',
      category: 'DETECTION & SUPPRESSION',
      icon: Flame,
      image: '/images/firesafety.jpg',
      badge: 'FIRE, WATER & RODENT',
      desc: 'Addressable and conventional fire alarms, automated sprinkler suppression, water leak detection, and rodent control.',
      points: ['Early Warning Fire Alarm Panels', 'Water Leakage Detection Sensors', 'Corporate Rodent Netting & Control']
    },
    {
      id: 'network',
      title: 'Network & Connectivity Services',
      category: 'CORE IT & VOIP',
      icon: Server,
      image: '/images/headquarters.jpg',
      badge: 'HIGH-VELOCITY NETWORK',
      desc: 'Strategic wireless network planning, router and switch configuration, VoIP implementation, and server room design.',
      points: ['Strategic Network Architecture', 'Enterprise VoIP & Point-to-Point', 'Server Rack & Cable Dressing']
    },
    {
      id: 'fitout',
      title: 'Fit-out & Leasehold Improvements',
      category: 'OFFICE INTERIORS',
      icon: Armchair,
      image: '/images/workspace.jpg',
      badge: 'SPACES THAT INSPIRE',
      desc: 'Office space planning, structural partitions, painting, flooring, electrical lighting, and modular workstations.',
      points: ['Modular Workstations & Furniture', 'Custom Demountable Partitions', 'Complete MEP & Flooring Finishings']
    },
    {
      id: 'injection',
      title: 'Injection Moulding Solutions',
      category: 'PRECISION MANUFACTURING',
      icon: Boxes,
      image: '/images/speedgates.jpg',
      badge: 'JOB WORK & CUSTOM MOULDS',
      desc: 'Job work for existing moulds and custom plastics product manufacturing from prototype to full production ramp-up.',
      points: ['Running Your Moulds (Job Work)', 'Custom Product & Mould Design', 'Certified Quality & Smart Solutions']
    }
  ];

  const currentPreview = servicesMegaMenu[activeMenuService];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Core Values', path: '/values' },
    { name: 'Mission', path: '/mission' },
    { name: 'Client Trust', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  // Mouse hover handlers with robust debounce timer
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 220);
  };

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#120722]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <nav className="w-full px-3 sm:px-5 lg:px-6 2xl:px-8 py-2.5 sm:py-3 relative max-w-[1800px] mx-auto">
        <div className="w-full flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
          
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-white/95 border-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.45)] group-hover:shadow-[0_0_28px_rgba(245,158,11,0.75)] group-hover:scale-105 transition-all duration-300 overflow-hidden p-0.5">
              <img
                src="/logo.png"
                alt="The Global Enterprises Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm 2xl:text-base font-black tracking-wider text-white font-heading uppercase group-hover:text-amber-300 transition-colors whitespace-nowrap">
                The Global Enterprises
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.16em] text-amber-400 font-extrabold uppercase whitespace-nowrap hidden sm:block">
                Smart Solutions, Secure Spaces
              </span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-2 2xl:gap-3.5 flex-nowrap font-bold">
            <Link 
              to="/" 
              className={`text-[11px] 2xl:text-xs font-bold transition-colors py-1 whitespace-nowrap relative group ${
                location.pathname === '/' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/about" 
              className={`text-[11px] 2xl:text-xs font-bold transition-colors py-1 whitespace-nowrap relative group ${
                location.pathname === '/about' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <div 
              ref={dropdownContainerRef}
              className="relative py-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <Link
                  to="/services"
                  className={`text-[11px] 2xl:text-xs font-bold transition-colors flex items-center gap-0.5 cursor-pointer py-1 whitespace-nowrap ${
                    location.pathname === '/services' || servicesDropdownOpen ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                  }`}
                >
                  <span>What We Do</span>
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen(prev => !prev);
                  }}
                  className="p-0.5 text-[#d1c4e9] hover:text-amber-300 focus:outline-none cursor-pointer"
                  aria-label="Toggle What We Do dropdown"
                >
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </button>
              </div>

              {servicesDropdownOpen && (
                <div 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="fixed top-full left-0 right-0 w-full bg-[#110620] border-y border-amber-400/40 shadow-[0_30px_70px_rgba(0,0,0,0.98)] z-50 animate-fadeIn px-6 sm:px-12 lg:px-16 py-7 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:content-['']"
                >
                  <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-stretch">
                    
                    <div className="col-span-12 lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          <span>ENTERPRISE SOLUTIONS &amp; HARDWARE NODES</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {servicesMegaMenu.map((item, idx) => {
                            const Icon = item.icon;
                            const isHovered = activeMenuService === idx;
                            return (
                              <Link
                                key={item.id}
                                to="/services"
                                onMouseEnter={() => setActiveMenuService(idx)}
                                onClick={() => setServicesDropdownOpen(false)}
                                className={`p-3 rounded-2xl border transition-all duration-300 flex items-start gap-3 group/item ${
                                  isHovered 
                                    ? 'bg-gradient-to-r from-amber-400/20 to-purple-600/20 border-amber-400 shadow-lg translate-x-1' 
                                    : 'bg-[#180830]/80 border-white/10 hover:border-white/20'
                                }`}
                              >
                                <div className={`p-2 rounded-xl transition-colors ${isHovered ? 'bg-amber-400 text-[#120722]' : 'bg-white/10 text-amber-400'}`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-white group-hover/item:text-amber-300 truncate">
                                    {item.title}
                                  </div>
                                  <div className="text-[10px] text-[#b8a7dc] truncate">
                                    {item.category}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#c4b5fd]">
                        <span>Need all-in-one turnkey architectural execution?</span>
                        <Link
                          to="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                        >
                          <span>View All Services &rarr;</span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-between pl-0 lg:pl-4">
                      <div>
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/20 shadow-2xl mb-3 group/img bg-black">
                          <img
                            src={currentPreview.image}
                            alt={currentPreview.title}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#120722]/95 via-[#120722]/20 to-transparent pointer-events-none"></div>
                          
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-[#120722]/95 border border-amber-400/60 text-[9px] font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md shadow-lg">
                            {currentPreview.badge}
                          </div>

                          <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-[#160829]/90 backdrop-blur-md border border-white/10">
                            <h4 className="text-xs font-bold font-heading text-white">
                              {currentPreview.title}
                            </h4>
                          </div>
                        </div>

                        <p className="text-[11px] text-[#d1c4e9] leading-relaxed mb-3">
                          {currentPreview.desc}
                        </p>

                        <div className="space-y-1.5 mb-3">
                          {currentPreview.points.slice(0, 2).map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-1.5 text-[10px] text-[#c4b5fd]">
                              <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                              <span className="truncate">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="btn-gold w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg"
                      >
                        <span>Explore Full Scope &amp; Deliverables</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/capabilities" 
              className={`text-[11px] 2xl:text-xs font-bold transition-colors py-1 whitespace-nowrap relative group ${
                location.pathname === '/capabilities' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
              }`}
            >
              Capabilities
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all ${location.pathname === '/capabilities' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/values" 
              className={`text-[11px] 2xl:text-xs font-bold transition-colors py-1 whitespace-nowrap relative group ${
                location.pathname === '/values' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
              }`}
            >
              Core Values
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all ${location.pathname === '/values' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/mission" 
              className={`text-[11px] 2xl:text-xs font-bold transition-colors py-1 whitespace-nowrap relative group ${
                location.pathname === '/mission' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
              }`}
            >
              Mission
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all ${location.pathname === '/mission' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/clients" 
              className={`text-[11px] 2xl:text-xs font-bold transition-colors py-1 whitespace-nowrap relative group ${
                location.pathname === '/clients' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
              }`}
            >
              Client Trust
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all ${location.pathname === '/clients' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/contact" 
              className={`text-[11px] 2xl:text-xs font-bold transition-colors py-1 whitespace-nowrap relative group ${
                location.pathname === '/contact' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* Right Action Suite (Phone, Admin CRM & Meeting CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            <a
              href="tel:+919899933768"
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-bold text-white hover:text-amber-300 px-3 py-2 rounded-xl bg-[#1b0a36] border border-white/15 hover:border-amber-400 transition-all shadow-md whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 98999 33768</span>
            </a>

            {/* Admin CRM Portal Link with Unread Badge Counter */}
            <Link
              to="/admin"
              className="relative flex items-center gap-1.5 px-3.5 py-2 sm:py-2.5 rounded-xl bg-[#261047] border border-amber-400/50 text-amber-300 hover:text-white hover:border-amber-400 text-xs font-bold transition-all shadow-md shrink-0"
              title="Admin CRM Portal"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Admin CRM</span>
              {unreadCount > 0 && (
                <span className="w-4.5 h-4.5 rounded-full bg-red-500 text-white font-black text-[10px] flex items-center justify-center animate-pulse shadow-md">
                  {unreadCount}
                </span>
              )}
            </Link>

            <button
              onClick={onOpenSchedule}
              className="btn-gold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 cursor-pointer font-extrabold shadow-xl shrink-0 whitespace-nowrap"
            >
              <span>Schedule a meeting</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Mobile / Tablet Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-[#1e0e38] border border-white/10 text-white hover:text-amber-400 shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#120722] border-t border-white/10 px-4 sm:px-6 py-5 transition-all animate-fadeIn mt-3 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-3 text-sm">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/5 font-semibold ${
                  location.pathname === '/' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/5 font-semibold ${
                  location.pathname === '/about' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                }`}
              >
                About Us
              </Link>

              {/* Mobile Accordion for What We Do */}
              <div className="border-b border-white/5 py-1">
                <div className="flex items-center justify-between py-1">
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-semibold ${
                      location.pathname === '/services' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                    }`}
                  >
                    What We Do
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 text-[#d1c4e9] hover:text-amber-400 focus:outline-none"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3 pt-2 pb-1 space-y-2 text-xs">
                    {servicesMegaMenu.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.id}
                          to="/services"
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-amber-400/20 text-[#c4b5fd] hover:text-white transition-colors"
                        >
                          <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-semibold text-white">{item.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/5 font-semibold ${
                  location.pathname === '/capabilities' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                }`}
              >
                Capabilities
              </Link>
              <Link
                to="/values"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/5 font-semibold ${
                  location.pathname === '/values' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                }`}
              >
                Core Values
              </Link>
              <Link
                to="/mission"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/5 font-semibold ${
                  location.pathname === '/mission' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                }`}
              >
                Mission
              </Link>
              <Link
                to="/clients"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/5 font-semibold ${
                  location.pathname === '/clients' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                }`}
              >
                Client Trust
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/5 font-semibold ${
                  location.pathname === '/contact' ? 'text-amber-400' : 'text-[#d1c4e9] hover:text-amber-300'
                }`}
              >
                Contact
              </Link>

              <div className="pt-3 flex flex-col gap-3">
                <a
                  href="tel:+919899933768"
                  className="flex items-center gap-2 text-xs text-amber-300 font-bold"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call: +91 98999 33768</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSchedule();
                  }}
                  className="btn-gold w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Schedule a meeting</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Backdrop overlay for mega menu */}
      {servicesDropdownOpen && (
        <div 
          className="fixed inset-0 top-[60px] bg-black/50 backdrop-blur-[2px] z-40"
          onClick={() => setServicesDropdownOpen(false)}
        ></div>
      )}
    </header>
  );
}

