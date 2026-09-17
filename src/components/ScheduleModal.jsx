import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Calculator, 
  Users, 
  Building2, 
  Clock, 
  MapPin, 
  Briefcase,
  Sparkles,
  ShieldCheck,
  Video
} from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';
import confetti from 'canvas-confetti';
import CustomSelect from './CustomSelect';

const ALL_SERVICES = [
  'Corporate Surveillance & Monitoring (4K CCTV & Access)',
  'Audio & Video Solutions (Boardrooms & Video Walls)',
  'Fire Safety, Leakage & Rodent Management',
  'High-Speed Enterprise Network & IT Infrastructure',
  'Ergonomic Workspace Fit-Outs & MEP Improvements',
  'Precision Injection Moulding Solutions',
  'Turnkey Integrated Workspace Solutions'
];

export default function ScheduleModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }) {
  const { submitInquiry, modalConfig, closeModal } = useInquiry();

  // If controlled via props or via InquiryContext
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : modalConfig.isOpen;
  const activeType = modalConfig.type || 'meeting';

  const [currentTab, setCurrentTab] = useState(activeType);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    // Meeting specific
    meetingDate: '',
    timeSlot: '11:00 AM - 12:00 PM',
    meetingMode: 'Virtual Video Call (Google Meet / Zoom)',
    meetingTopic: 'Corporate Surveillance & Monitoring (4K CCTV & Access)',
    meetingAgenda: '',
    // Inquiry specific
    inquiryService: 'Corporate Surveillance & Monitoring (4K CCTV & Access)',
    facilityType: 'Corporate Office / Headquarters',
    inquiryMessage: '',
    // Quote specific
    quoteServices: 'Turnkey Integrated Workspace Solutions',
    estimatedArea: '5,000 - 15,000 sq.ft',
    targetBudget: '₹15 Lakhs – ₹50 Lakhs',
    projectTimeline: 'Within 1 Month',
    projectCity: 'Delhi NCR',
    quoteNotes: '',
    // General
    engagementType: 'Corporate Client Onboarding / Vendor Registration',
    generalMessage: ''
  });

  const [isBooked, setIsBooked] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync tab and contextual prefilled fields when modal opens or config changes
  useEffect(() => {
    if (isOpen) {
      const type = modalConfig.type || 'meeting';
      setCurrentTab(type);
      setIsBooked(false);

      // Pre-fill service if passed from solution/card
      let matchedService = ALL_SERVICES[0];
      if (modalConfig.service) {
        const found = ALL_SERVICES.find(s => 
          s.toLowerCase().includes(modalConfig.service.toLowerCase()) || 
          modalConfig.service.toLowerCase().includes(s.toLowerCase().split(' ')[0])
        );
        if (found) matchedService = found;
        else matchedService = modalConfig.service;
      }

      setFormData(prev => ({
        ...prev,
        inquiryService: matchedService,
        meetingTopic: matchedService,
        quoteServices: matchedService,
        estimatedArea: modalConfig.metadata?.estimatedArea || prev.estimatedArea,
        projectCity: modalConfig.metadata?.location || prev.projectCity
      }));
    }
  }, [isOpen, modalConfig]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsBooked(false);
    setSubmittedData(null);
    if (controlledOnClose) controlledOnClose();
    closeModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let payload = {
      type: currentTab,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || (currentTab === 'meeting' ? 'Consultation Client' : 'Enterprise Client')
    };

    if (currentTab === 'meeting') {
      payload = {
        ...payload,
        service: `Scheduled Meeting: ${formData.meetingTopic}`,
        budget: 'Consultation Session',
        location: `${formData.meetingMode} • ${formData.meetingDate || 'Date TBD'} (${formData.timeSlot})`,
        message: formData.meetingAgenda 
          ? `[Meeting Mode: ${formData.meetingMode}] Agenda: ${formData.meetingAgenda}`
          : `Requested ${formData.meetingMode} for ${formData.meetingTopic} on ${formData.meetingDate} at ${formData.timeSlot}.`,
        meetingDate: formData.meetingDate,
        timeSlot: formData.timeSlot,
        meetingMode: formData.meetingMode,
        topic: formData.meetingTopic
      };
    } else if (currentTab === 'inquiry') {
      payload = {
        ...payload,
        service: formData.inquiryService,
        facilityType: formData.facilityType,
        budget: 'Custom Specification',
        location: formData.facilityType,
        message: formData.inquiryMessage || `Detailed inquiry regarding ${formData.inquiryService} for ${formData.facilityType}.`
      };
    } else if (currentTab === 'quote') {
      payload = {
        ...payload,
        service: `Quotation Request: ${formData.quoteServices}`,
        estimatedArea: formData.estimatedArea,
        budget: formData.targetBudget,
        timeline: formData.projectTimeline,
        location: `${formData.projectCity} (${formData.estimatedArea})`,
        message: formData.quoteNotes || `Requested commercial quote for ${formData.quoteServices}. Estimated Area: ${formData.estimatedArea}, Target Budget: ${formData.targetBudget}, Timeline: ${formData.projectTimeline} at ${formData.projectCity}.`
      };
    } else { // 'general'
      payload = {
        ...payload,
        service: `Corporate Engagement: ${formData.engagementType}`,
        budget: 'Corporate Partnership',
        location: formData.company || 'Corporate Client',
        engagementType: formData.engagementType,
        message: formData.generalMessage || `General collaboration inquiry regarding ${formData.engagementType}.`
      };
    }

    const result = await submitInquiry(payload);
    setIsSubmitting(false);

    if (result) {
      setSubmittedData({ ...payload, id: result.id });
      setIsBooked(true);
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.5 },
        colors: currentTab === 'meeting' 
          ? ['#f59e0b', '#fbbf24', '#c084fc'] 
          : currentTab === 'quote' 
          ? ['#10b981', '#fbbf24', '#38bdf8']
          : ['#a855f7', '#fbbf24', '#ec4899']
      });
    }
  };

  // Header visuals & content
  const tabHeaders = {
    meeting: {
      icon: Calendar,
      title: modalConfig.title || 'Schedule Strategy Consultation',
      subtitle: modalConfig.subtitle || '30-minute session with our technical solution architects',
      color: 'amber'
    },
    inquiry: {
      icon: HelpCircle,
      title: modalConfig.title || (modalConfig.service ? `Inquire: ${modalConfig.service}` : 'Service Technical Inquiry'),
      subtitle: modalConfig.subtitle || 'Direct inquiry with our infrastructure specialists and project engineers',
      color: 'purple'
    },
    quote: {
      icon: Calculator,
      title: modalConfig.title || 'Request Itemized Quotation & BOQ',
      subtitle: modalConfig.subtitle || 'Get a transparent, itemized commercial quote for your facility',
      color: 'emerald'
    },
    general: {
      icon: Building2,
      title: modalConfig.title || 'Corporate Collaboration & Onboarding',
      subtitle: modalConfig.subtitle || 'Connect directly with Global Enterprises senior management',
      color: 'sky'
    }
  };

  const currentHeader = tabHeaders[currentTab] || tabHeaders.meeting;
  const HeaderIcon = currentHeader.icon;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl p-5 sm:p-7 rounded-3xl bg-[#180930] border border-amber-400/30 shadow-2xl my-auto max-h-[94dvh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pr-10 shrink-0">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
            currentTab === 'meeting' ? 'bg-amber-400/15 border border-amber-400/30 text-amber-400' :
            currentTab === 'quote' ? 'bg-emerald-500/15 border border-emerald-400/30 text-emerald-400' :
            currentTab === 'inquiry' ? 'bg-purple-500/15 border border-purple-400/30 text-purple-300' :
            'bg-sky-500/15 border border-sky-400/30 text-sky-400'
          }`}>
            <HeaderIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-tight">
              {currentHeader.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-amber-300/90 font-medium mt-0.5">
              {currentHeader.subtitle}
            </p>
          </div>
        </div>

        {/* Dynamic Mode Switcher Pills */}
        {!isBooked && (
          <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-[#100422] border border-white/10 mb-4 shrink-0">
            <button
              type="button"
              onClick={() => setCurrentTab('meeting')}
              className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all text-center truncate cursor-pointer ${
                currentTab === 'meeting' 
                  ? 'bg-amber-400 text-[#120722] shadow-sm font-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              📅 Meeting
            </button>
            <button
              type="button"
              onClick={() => setCurrentTab('inquiry')}
              className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all text-center truncate cursor-pointer ${
                currentTab === 'inquiry' 
                  ? 'bg-purple-500 text-white shadow-sm font-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              💡 Inquire
            </button>
            <button
              type="button"
              onClick={() => setCurrentTab('quote')}
              className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all text-center truncate cursor-pointer ${
                currentTab === 'quote' 
                  ? 'bg-emerald-500 text-[#120722] shadow-sm font-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              💰 Get Quote
            </button>
            <button
              type="button"
              onClick={() => setCurrentTab('general')}
              className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all text-center truncate cursor-pointer ${
                currentTab === 'general' 
                  ? 'bg-sky-500 text-[#120722] shadow-sm font-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🤝 Partner
            </button>
          </div>
        )}

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto pr-1 flex-1 space-y-4">
          {isBooked ? (
            <div className="py-6 text-center flex flex-col items-center animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold font-heading text-white mb-1.5">
                {currentTab === 'meeting' ? 'Consultation Reserved' :
                 currentTab === 'quote' ? 'Quotation Request Dispatched' :
                 currentTab === 'inquiry' ? 'Inquiry Received Securely' : 'Collaboration Request Sent'}
              </h3>
              
              <p className="text-xs text-gray-300 max-w-sm mb-5 leading-relaxed">
                {currentTab === 'meeting' ? (
                  <>Your strategy session is scheduled. A calendar invite & meeting link will be sent to <span className="text-amber-400 font-semibold">{formData.email}</span>.</>
                ) : currentTab === 'quote' ? (
                  <>Our commercial BOQ desk is processing your request. An itemized estimate will be shared with <span className="text-emerald-400 font-semibold">{formData.email}</span>.</>
                ) : (
                  <>Our technical team will review your requirements and reach out to you at <span className="text-purple-300 font-semibold">{formData.phone}</span>.</>
                )}
              </p>

              <div className="p-3.5 rounded-xl bg-[#120722] border border-white/10 w-full mb-5 text-left text-xs space-y-2">
                <div className="text-gray-400 text-[10px] uppercase font-mono tracking-wider font-bold text-amber-400">
                  Submission Summary ({submittedData?.id || 'CONFIRMED'})
                </div>

                {currentTab === 'meeting' && (
                  <>
                    <div className="text-gray-300"><span className="text-white font-medium">Topic:</span> {formData.meetingTopic}</div>
                    <div className="text-gray-300"><span className="text-white font-medium">Date & Time:</span> {formData.meetingDate || 'To be confirmed'} ({formData.timeSlot})</div>
                    <div className="text-gray-300"><span className="text-white font-medium">Meeting Mode:</span> {formData.meetingMode}</div>
                  </>
                )}

                {currentTab === 'inquiry' && (
                  <>
                    <div className="text-gray-300"><span className="text-white font-medium">Service Inquired:</span> {formData.inquiryService}</div>
                    <div className="text-gray-300"><span className="text-white font-medium">Facility:</span> {formData.facilityType}</div>
                    {formData.company && <div className="text-gray-300"><span className="text-white font-medium">Organization:</span> {formData.company}</div>}
                  </>
                )}

                {currentTab === 'quote' && (
                  <>
                    <div className="text-gray-300"><span className="text-white font-medium">Scope:</span> {formData.quoteServices}</div>
                    <div className="text-gray-300"><span className="text-white font-medium">Facility Area:</span> {formData.estimatedArea}</div>
                    <div className="text-gray-300"><span className="text-white font-medium">Budget:</span> {formData.targetBudget}</div>
                    <div className="text-gray-300"><span className="text-white font-medium">Timeline:</span> {formData.projectTimeline}</div>
                  </>
                )}

                {currentTab === 'general' && (
                  <>
                    <div className="text-gray-300"><span className="text-white font-medium">Nature:</span> {formData.engagementType}</div>
                    <div className="text-gray-300"><span className="text-white font-medium">Organization:</span> {formData.company}</div>
                  </>
                )}
              </div>

              <button
                onClick={handleClose}
                className="btn-gold px-8 py-3 rounded-xl text-xs font-bold w-full cursor-pointer shadow-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Primary Contact Row */}
              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-200 mb-1">
                    Work Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-200 mb-1">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                  />
                </div>
              </div>

              {/* Company name for quote, inquiry and general */}
              {(currentTab === 'quote' || currentTab === 'general' || currentTab === 'inquiry') && (
                <div>
                  <label className="block text-xs font-medium text-gray-200 mb-1">
                    Company / Organization Name {currentTab !== 'inquiry' && <span className="text-amber-400">*</span>}
                  </label>
                  <input
                    type="text"
                    required={currentTab !== 'inquiry'}
                    placeholder="e.g. Acme Corp / Global Logistics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                  />
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 1: MEETING FORM FIELDS */}
              {/* ==================================================== */}
              {currentTab === 'meeting' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Preferred Date <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.meetingDate}
                        onChange={(e) => setFormData({ ...formData, meetingDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-xs transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Time Slot
                      </label>
                      <CustomSelect
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        options={[
                          '10:00 AM - 11:00 AM',
                          '11:00 AM - 12:00 PM',
                          '02:00 PM - 03:00 PM',
                          '04:00 PM - 05:00 PM'
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Consultation Mode
                    </label>
                    <CustomSelect
                      value={formData.meetingMode}
                      onChange={(e) => setFormData({ ...formData, meetingMode: e.target.value })}
                      options={[
                        'Virtual Video Call (Google Meet / Zoom)',
                        'In-Person Facility / Office Visit',
                        'Direct Telephonic Strategy Call'
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Consultation Focus / Topic
                    </label>
                    <CustomSelect
                      value={formData.meetingTopic}
                      onChange={(e) => setFormData({ ...formData, meetingTopic: e.target.value })}
                      direction="up"
                      options={ALL_SERVICES}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Agenda / Specific Discussion Points <span className="text-gray-400 text-[10px]">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly describe what you would like our engineers to prepare for the consultation..."
                      value={formData.meetingAgenda}
                      onChange={(e) => setFormData({ ...formData, meetingAgenda: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                    />
                  </div>
                </>
              )}

              {/* ==================================================== */}
              {/* TAB 2: SERVICE INQUIRY FIELDS */}
              {/* ==================================================== */}
              {currentTab === 'inquiry' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Required Solution / Service <span className="text-amber-400">*</span>
                    </label>
                    <CustomSelect
                      value={formData.inquiryService}
                      onChange={(e) => setFormData({ ...formData, inquiryService: e.target.value })}
                      options={ALL_SERVICES}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Facility / Property Type
                    </label>
                    <CustomSelect
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                      options={[
                        'Corporate Office / Headquarters',
                        'IT / Software Development Park',
                        'Industrial & Manufacturing Facility',
                        'Commercial Mall & Retail Showroom',
                        'Educational Campus / University',
                        'Hospital & Healthcare Center',
                        'Multi-Floor Commercial Building'
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Inquiry Details &amp; Specific Requirements <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your project requirements, current challenges, desired camera counts, floor area, or technical specs..."
                      value={formData.inquiryMessage}
                      onChange={(e) => setFormData({ ...formData, inquiryMessage: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                    />
                  </div>
                </>
              )}

              {/* ==================================================== */}
              {/* TAB 3: GET A QUOTE / ESTIMATION FIELDS */}
              {/* ==================================================== */}
              {currentTab === 'quote' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Quotation Scope <span className="text-amber-400">*</span>
                    </label>
                    <CustomSelect
                      value={formData.quoteServices}
                      onChange={(e) => setFormData({ ...formData, quoteServices: e.target.value })}
                      options={ALL_SERVICES}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Estimated Facility Area
                      </label>
                      <CustomSelect
                        value={formData.estimatedArea}
                        onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                        options={[
                          'Below 5,000 sq.ft',
                          '5,000 - 15,000 sq.ft',
                          '15,000 - 50,000 sq.ft',
                          '50,000 - 100,000 sq.ft',
                          '100,000+ sq.ft (Multi-floor Campus)'
                        ]}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Target Budget Range
                      </label>
                      <CustomSelect
                        value={formData.targetBudget}
                        onChange={(e) => setFormData({ ...formData, targetBudget: e.target.value })}
                        options={[
                          'Under ₹5 Lakhs',
                          '₹5 Lakhs – ₹15 Lakhs',
                          '₹15 Lakhs – ₹50 Lakhs',
                          '₹50 Lakhs – ₹1.5 Crore',
                          '₹1.5 Crore+ (Enterprise Turnkey)',
                          'Undisclosed / Need Estimation'
                        ]}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Project Location / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Delhi NCR, Okhla, Gurugram..."
                        value={formData.projectCity}
                        onChange={(e) => setFormData({ ...formData, projectCity: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Project Implementation Timeline
                      </label>
                      <CustomSelect
                        value={formData.projectTimeline}
                        onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                        direction="up"
                        options={[
                          'Immediate (Within 1-2 weeks)',
                          'Within 1 Month',
                          '1 - 3 Months',
                          'Budgeting & Planning Stage'
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Scope Notes / Special BOQ Specifications
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific architectural brands, hardware preferences, or deployment requirements..."
                      value={formData.quoteNotes}
                      onChange={(e) => setFormData({ ...formData, quoteNotes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                    />
                  </div>
                </>
              )}

              {/* ==================================================== */}
              {/* TAB 4: GENERAL / COLLABORATION FIELDS */}
              {/* ==================================================== */}
              {currentTab === 'general' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Nature of Engagement
                    </label>
                    <CustomSelect
                      value={formData.engagementType}
                      onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                      options={[
                        'Corporate Client Onboarding / Vendor Registration',
                        'Annual Maintenance Contract (AMC)',
                        'Strategic Business Partnership',
                        'General Infrastructure Inquiry'
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1">
                      Message / Proposal Details <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="How can Global Enterprises support your corporate facility or enterprise operations?..."
                      value={formData.generalMessage}
                      onChange={(e) => setFormData({ ...formData, generalMessage: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs transition-all"
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all ${
                    currentTab === 'meeting' ? 'btn-gold' :
                    currentTab === 'quote' ? 'bg-emerald-500 hover:bg-emerald-400 text-[#120722]' :
                    currentTab === 'inquiry' ? 'bg-purple-600 hover:bg-purple-500 text-white' :
                    'bg-sky-500 hover:bg-sky-400 text-[#120722]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>
                        {currentTab === 'meeting' ? 'Confirm Consultation Booking' :
                         currentTab === 'quote' ? 'Request Official BOQ Quotation' :
                         currentTab === 'inquiry' ? 'Submit Service Inquiry' : 'Send Collaboration Request'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
