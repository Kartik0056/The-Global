import React, { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  FileSpreadsheet
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { submitInquiry } = useInquiry();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    service: 'Security & Monitoring Systems',
    facilityType: 'Corporate Headquarters',
    estimatedArea: '5,000 - 15,000 sq.ft',
    budget: 'Select budget range',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    'Security & Monitoring Systems (4K CCTV & AI)',
    'Biometric Access Control & Optical Speed Gates',
    'Certified Fire Safety & Detection Systems',
    'Audio-Visual Collaboration & Conference Setup',
    'Modular Workstations & Demountable Glass Walls',
    'Complete Turnkey Workspace Architecture'
  ];

  const facilityTypes = [
    'Corporate Headquarters',
    'IT Park / Software Development Center',
    'Industrial & Manufacturing Facility',
    'Retail Showroom & Commercial Mall',
    'Healthcare / Hospital Facility',
    'Educational Campus / Institution'
  ];

  const areaRanges = [
    'Below 5,000 sq.ft',
    '5,000 - 15,000 sq.ft',
    '15,000 - 50,000 sq.ft',
    '50,000 - 100,000 sq.ft',
    '100,000+ sq.ft (Multi-floor Campus)'
  ];

  const budgetOptions = [
    'Select budget range',
    'Under ₹5 Lakhs',
    '₹5 Lakhs – ₹15 Lakhs',
    '₹15 Lakhs – ₹50 Lakhs',
    '₹50 Lakhs – ₹1.5 Crore',
    '₹1.5 Crore+ (Enterprise Turnkey)'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await submitInquiry({
      name: formData.fullName,
      company: formData.companyName || '',
      phone: formData.phoneNumber,
      email: formData.email,
      service: formData.service,
      budget: formData.budget !== 'Select budget range' ? formData.budget : '',
      location: `${formData.facilityType} (${formData.estimatedArea})`,
      message: formData.message || `Inquiry for ${formData.service} at ${formData.facilityType} (${formData.estimatedArea}).`
    });

    setLoading(false);
    setIsSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#a855f7', '#38bdf8']
    });
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 bg-[#140828] overflow-hidden">
      <div className="bg-glow-orb w-[600px] h-[600px] bg-amber-500/10 -top-20 -right-20"></div>
      <div className="bg-glow-orb w-[600px] h-[600px] bg-purple-700/20 bottom-0 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="section-badge justify-center mb-2">ENTERPRISE CONSULTATION</div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-3">
            LET&apos;S ARCHITECT YOUR <span className="text-gold-gradient">IDEAL WORKSPACE</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#d1c4e9]">
            Speak with our turnkey workspace architects and security engineering directors today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#28114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all shadow-md shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-400">
                  EMAIL US
                </div>
                <a
                  href="mailto:globalenterprises010@gmail.com"
                  className="text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors break-all mt-0.5 block"
                >
                  globalenterprises010@gmail.com
                </a>
                <p className="text-xs text-[#b8a7dc] mt-0.5">
                  Guaranteed response within 2 hours
                </p>
              </div>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#28114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all shadow-md shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-400">
                  CALL US
                </div>
                <a
                  href="tel:+919899933768"
                  className="text-base sm:text-lg font-bold text-white hover:text-amber-300 transition-colors mt-0.5 block"
                >
                  +91 98999 33768
                </a>
                <p className="text-xs text-[#b8a7dc] mt-0.5">
                  Mon &ndash; Sat from 9:00 AM to 7:00 PM IST
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=52%2F21+Basement%2C+Pocket+52%2C+Chittaranjan+Park%2C+New+Delhi%2C+Delhi+110019"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-amber-400/50 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#28114b] border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#120722] transition-all shadow-md shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-400 flex items-center gap-1">
                  <span>VISIT US</span>
                  <span className="text-[9px] text-[#c4b5fd] font-normal underline">(Open Map)</span>
                </div>
                <p className="text-sm font-bold text-white mt-0.5 leading-snug group-hover:text-amber-300 transition-colors">
                  52/21 Basement, Pocket 52, CR Park, New Delhi-110019
                </p>
                <p className="text-xs text-[#b8a7dc] mt-0.5">
                  National Headquarters &amp; Experience Studio &rarr;
                </p>
              </div>
            </a>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#240e44] to-[#17082e] border border-amber-400/20 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#d1c4e9] leading-relaxed">
                <span className="font-bold text-white">Full NDA Confidentiality:</span> All project proposals, layout blueprints, and security telemetry data remain strictly protected under Indian NDA compliance.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl bg-[#1b0a36]/90 backdrop-blur-xl">
              {isSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center my-auto">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">
                    Proposal Request Received
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="text-amber-400 font-semibold">{formData.fullName || 'there'}</span>. Our technical director will evaluate your space requirements and contact you at <span className="text-white font-medium">{formData.email}</span> within 2 hours.
                  </p>

                  <div className="w-full max-w-md p-4 rounded-2xl bg-[#120722]/80 border border-white/10 text-left text-xs space-y-1.5 mb-8">
                    <div className="text-gray-300"><strong className="text-white">Service:</strong> {formData.service}</div>
                    <div className="text-gray-300"><strong className="text-white">Facility:</strong> {formData.facilityType} ({formData.estimatedArea})</div>
                    {formData.budget !== 'Select budget range' && (
                      <div className="text-gray-300"><strong className="text-white">Budget:</strong> {formData.budget}</div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        companyName: '',
                        phoneNumber: '',
                        service: 'Security & Monitoring Systems',
                        facilityType: 'Corporate Headquarters',
                        estimatedArea: '5,000 - 15,000 sq.ft',
                        budget: 'Select budget range',
                        message: ''
                      });
                    }}
                    className="btn-glass px-8 py-3 rounded-xl text-xs font-bold hover:border-amber-400/50 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                        Request Project Proposal &amp; BOQ
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">
                        Receive a comprehensive architectural &amp; security estimate tailored to your facility.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 hidden sm:flex">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Enter name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Work Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Acme Enterprises"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Primary Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                      >
                        {servicesList.map((svc, sIdx) => (
                          <option key={sIdx} value={svc} className="bg-[#120722] text-white">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Facility / Space Type
                      </label>
                      <select
                        name="facilityType"
                        value={formData.facilityType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                      >
                        {facilityTypes.map((fac, fIdx) => (
                          <option key={fIdx} value={fac} className="bg-[#120722] text-white">
                            {fac}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Estimated Facility Area
                      </label>
                      <select
                        name="estimatedArea"
                        value={formData.estimatedArea}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                      >
                        {areaRanges.map((area, aIdx) => (
                          <option key={aIdx} value={area} className="bg-[#120722] text-white">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                        Estimated Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                      >
                        {budgetOptions.map((bgt, bIdx) => (
                          <option key={bIdx} value={bgt} className="bg-[#120722] text-white">
                            {bgt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-200 mb-1.5">
                      Project Scope &amp; Special Requirements <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Need 4K CCTV with 60-day backup, 4 optical speed gates, and turnkey workstation fit-out for Gurgaon office..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-[#120722] border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Submit</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-gray-400 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>2-Hour Turnaround</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        <span>100% NDA Protected</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>On-site Engineering Audit</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
