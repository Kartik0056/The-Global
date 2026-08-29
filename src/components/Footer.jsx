import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Users 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0b0316] border-t border-white/10 pt-16 pb-12 overflow-hidden text-sm">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/95 border-2 border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.45)] overflow-hidden p-0.5 shrink-0">
                  <img
                    src="/logo.png"
                    alt="The Global Enterprises Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-base font-black tracking-wider text-white font-heading uppercase block">
                    The Global Enterprises
                  </span>
                  <span className="text-[10px] tracking-[0.16em] text-amber-400 font-semibold uppercase block">
                    Smart Solutions, Secure Spaces
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-[#b8a7dc] leading-relaxed max-w-sm mb-6">
                Your trusted partner for workplace infrastructure, fire safety systems, access control, 4K CCTV surveillance, and ergonomic interior fit-outs.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#d1c4e9]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Est. 2017</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Sachin &amp; Rajni Arora</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400 mb-4 font-heading">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#d1c4e9]">
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">Security &amp; Monitoring Systems</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">Audio &amp; Video Solutions</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">Fire Safety &amp; Rodent Management</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">Network &amp; Connectivity Services</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">Fit-out &amp; Leasehold Improvements</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">Injection Moulding Solutions</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400 mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#d1c4e9]">
              <li><Link to="/" className="hover:text-amber-300 transition-colors">Home Overview</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link to="/capabilities" className="hover:text-amber-300 transition-colors">Capabilities</Link></li>
              <li><Link to="/values" className="hover:text-amber-300 transition-colors">Core Values</Link></li>
              <li><Link to="/mission" className="hover:text-amber-300 transition-colors">Our Mission</Link></li>
              <li><Link to="/clients" className="hover:text-amber-300 transition-colors">Client Trust</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Contact &amp; Quote</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400 mb-4 font-heading">
              National Headquarters
            </h4>
            <div className="space-y-3 text-xs text-[#d1c4e9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>52/21 Basement, Pocket 52, CR Park, New Delhi-110019</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919899933768" className="hover:text-amber-300 transition-colors font-medium">
                  +91 98999 33768
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:globalenterprises010@gmail.com" className="hover:text-amber-300 transition-colors break-all">
                  globalenterprises010@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e7ea8]">
          <div>
            &copy; {new Date().getFullYear()} The Global Enterprises. All rights reserved. &bull; Smart Solutions, Secure Spaces.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-300 transition-all cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
