import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video, ArrowRight, ShieldCheck } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';
import confetti from 'canvas-confetti';

export default function ScheduleModal({ isOpen, onClose }) {
  const { submitInquiry } = useInquiry();
  const [meetingData, setMeetingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '11:00 AM - 12:00 PM',
    topic: 'Integrated Workspace Architecture'
  });
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit scheduled consultation to CRM Backend & Trigger Audio Chime
    await submitInquiry({
      name: meetingData.name,
      company: 'Scheduled Consultation Lead',
      phone: meetingData.phone,
      email: meetingData.email,
      service: `Scheduled Meeting: ${meetingData.topic}`,
      budget: 'Consultation Session',
      location: `Virtual Meeting Slot: ${meetingData.date || 'TBD'} @ ${meetingData.timeSlot}`,
      message: `User scheduled an executive consultation on ${meetingData.topic} for ${meetingData.date} during ${meetingData.timeSlot}.`
    });

    setIsBooked(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#f59e0b', '#fbbf24', '#c084fc']
    });
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg p-4 sm:p-7 rounded-3xl bg-[#180930] border border-amber-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.95)] my-auto max-h-[92dvh] flex flex-col">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-20 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-white/5 border border-white/10 text-[#d1c4e9] hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 pr-10 shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/95 border border-amber-400/50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-lg">
            <img
              src="/logo.png"
              alt="The Global Enterprises Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-tight">
              Schedule Strategy Session
            </h3>
            <p className="text-[10px] sm:text-xs text-amber-400 font-semibold">
              30-min consultation with our solution architects
            </p>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto pr-1 flex-1 space-y-3 sm:space-y-3.5">
          {isBooked ? (
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-4 animate-pulse">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Consultation Scheduled!
              </h3>
              <p className="text-xs text-[#d1c4e9] max-w-sm mb-5 leading-relaxed">
                We have reserved your slot with a Senior Project Director. Confirmation sent to <span className="text-amber-400 font-semibold">{meetingData.email}</span>.
              </p>
              <div className="p-3.5 rounded-xl bg-[#120722] border border-white/10 w-full mb-5 text-left text-xs space-y-1">
                <div className="text-[#c4b5fd]"><strong className="text-white">Topic:</strong> {meetingData.topic}</div>
                <div className="text-[#c4b5fd]"><strong className="text-white">Time:</strong> {meetingData.timeSlot}</div>
                <div className="text-[#c4b5fd]"><strong className="text-white">Date:</strong> {meetingData.date || 'To be confirmed'}</div>
              </div>
              <button
                onClick={handleClose}
                className="btn-gold px-8 py-3 rounded-xl text-xs font-bold w-full cursor-pointer shadow-lg"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              
              <div>
                <label className="block text-[11px] font-bold text-[#e9d5ff] uppercase mb-1">
                  Your Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mr. / Ms. Name"
                  value={meetingData.name}
                  onChange={(e) => setMeetingData({ ...meetingData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#e9d5ff] uppercase mb-1">
                    Work Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={meetingData.email}
                    onChange={(e) => setMeetingData({ ...meetingData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#e9d5ff] uppercase mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98999 XXXXX"
                    value={meetingData.phone}
                    onChange={(e) => setMeetingData({ ...meetingData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#e9d5ff] uppercase mb-1">
                    Preferred Date*
                  </label>
                  <input
                    type="date"
                    required
                    value={meetingData.date}
                    onChange={(e) => setMeetingData({ ...meetingData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#e9d5ff] uppercase mb-1">
                    Time Slot
                  </label>
                  <select
                    value={meetingData.timeSlot}
                    onChange={(e) => setMeetingData({ ...meetingData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-xs"
                  >
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                    <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#e9d5ff] uppercase mb-1">
                  Consultation Focus
                </label>
                <select
                  value={meetingData.topic}
                  onChange={(e) => setMeetingData({ ...meetingData, topic: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-xs"
                >
                  <option value="Integrated Workspace Architecture">Integrated Workspace Architecture</option>
                  <option value="4K Surveillance & Access Systems">4K Surveillance & Access Systems</option>
                  <option value="Fire Safety & Compliance Audit">Fire Safety & Compliance Audit</option>
                  <option value="Turnkey Office Fit-Out Project">Turnkey Office Fit-Out Project</option>
                  <option value="Network & VoIP Infrastructure">Network & VoIP Infrastructure</option>
                  <option value="Injection Moulding Solutions">Injection Moulding Solutions</option>
                </select>
              </div>

              <div className="pt-1.5 pb-1">
                <button
                  type="submit"
                  className="btn-gold w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Confirm Strategy Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
