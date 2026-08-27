import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video, ArrowRight } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';
import confetti from 'canvas-confetti';

export default function ScheduleModal({ isOpen, onClose }) {
  const { submitInquiry } = useInquiry();
  const [step, setStep] = useState(1);
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
      message: `User scheduled a executive consultation on ${meetingData.topic} for ${meetingData.date} during ${meetingData.timeSlot}.`
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg p-5 sm:p-8 rounded-3xl bg-[#1a0b32] border border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-[#d1c4e9] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-5 animate-pulse">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">
              Consultation Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-[#d1c4e9] max-w-sm mb-6 leading-relaxed">
              We have reserved your slot with a Senior Project Director. A calendar invite has been dispatched to <span className="text-amber-400 font-semibold">{meetingData.email}</span>.
            </p>
            <div className="p-4 rounded-xl bg-[#230f3f] border border-white/10 w-full mb-6 text-left text-xs space-y-1">
              <div className="text-[#c4b5fd]"><strong className="text-white">Topic:</strong> {meetingData.topic}</div>
              <div className="text-[#c4b5fd]"><strong className="text-white">Time:</strong> {meetingData.timeSlot}</div>
              <div className="text-[#c4b5fd]"><strong className="text-white">Host:</strong> Global Enterprises Engineering Board</div>
            </div>
            <button
              onClick={handleClose}
              className="btn-gold px-8 py-3 rounded-xl text-xs font-bold w-full"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-white/95 border border-amber-400/50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-lg">
                <img
                  src="/logo.png"
                  alt="The Global Enterprises Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Schedule Direct Strategy Session
                </h3>
                <p className="text-xs text-amber-400 font-semibold">
                  30-minute consultation with our solution architects
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#e9d5ff] uppercase mb-1">
                Your Full Name*
              </label>
              <input
                type="text"
                required
                placeholder="Mr. / Ms. Name"
                value={meetingData.name}
                onChange={(e) => setMeetingData({ ...meetingData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#e9d5ff] uppercase mb-1">
                  Work Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={meetingData.email}
                  onChange={(e) => setMeetingData({ ...meetingData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#e9d5ff] uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98999 XXXXX"
                  value={meetingData.phone}
                  onChange={(e) => setMeetingData({ ...meetingData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#e9d5ff] uppercase mb-1">
                  Preferred Date*
                </label>
                <input
                  type="date"
                  required
                  value={meetingData.date}
                  onChange={(e) => setMeetingData({ ...meetingData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#e9d5ff] uppercase mb-1">
                  Time Slot
                </label>
                <select
                  value={meetingData.timeSlot}
                  onChange={(e) => setMeetingData({ ...meetingData, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-xs"
                >
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                  <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#e9d5ff] uppercase mb-1">
                Consultation Focus
              </label>
              <select
                value={meetingData.topic}
                onChange={(e) => setMeetingData({ ...meetingData, topic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-xs"
              >
                <option value="Integrated Workspace Architecture">Integrated Workspace Architecture</option>
                <option value="4K Surveillance & Access Systems">4K Surveillance & Access Systems</option>
                <option value="Fire Safety & Compliance Audit">Fire Safety & Compliance Audit</option>
                <option value="Turnkey Office Fit-Out Project">Turnkey Office Fit-Out Project</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Confirm Strategy Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
