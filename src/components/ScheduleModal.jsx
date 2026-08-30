import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
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
    
    await submitInquiry({
      name: meetingData.name,
      company: 'Scheduled Consultation',
      phone: meetingData.phone,
      email: meetingData.email,
      service: `Scheduled Meeting: ${meetingData.topic}`,
      budget: 'Consultation Session',
      location: `Virtual Meeting: ${meetingData.date || 'TBD'} (${meetingData.timeSlot})`,
      message: `Scheduled strategy consultation regarding ${meetingData.topic} for ${meetingData.date} at ${meetingData.timeSlot}.`
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-lg p-5 sm:p-7 rounded-3xl bg-[#180930] border border-amber-400/30 shadow-2xl my-auto max-h-[92dvh] flex flex-col">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5 pr-10 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-heading text-white leading-tight">
              Schedule Strategy Consultation
            </h3>
            <p className="text-xs text-amber-400 font-medium mt-0.5">
              30-minute session with our technical solution architects
            </p>
          </div>
        </div>

        <div className="overflow-y-auto pr-1 flex-1 space-y-4">
          {isBooked ? (
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Consultation Reserved
              </h3>
              <p className="text-xs text-gray-300 max-w-sm mb-5 leading-relaxed">
                Your session is booked. A calendar invite and meeting link will be sent to <span className="text-amber-400 font-semibold">{meetingData.email}</span>.
              </p>
              <div className="p-3.5 rounded-xl bg-[#120722] border border-white/10 w-full mb-5 text-left text-xs space-y-1.5">
                <div className="text-gray-300"><span className="text-white font-medium">Topic:</span> {meetingData.topic}</div>
                <div className="text-gray-300"><span className="text-white font-medium">Time Slot:</span> {meetingData.timeSlot}</div>
                <div className="text-gray-300"><span className="text-white font-medium">Date:</span> {meetingData.date || 'To be confirmed'}</div>
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
              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  value={meetingData.name}
                  onChange={(e) => setMeetingData({ ...meetingData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-200 mb-1.5">
                    Work Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={meetingData.email}
                    onChange={(e) => setMeetingData({ ...meetingData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-200 mb-1.5">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={meetingData.phone}
                    onChange={(e) => setMeetingData({ ...meetingData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-200 mb-1.5">
                    Preferred Date <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={meetingData.date}
                    onChange={(e) => setMeetingData({ ...meetingData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-200 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={meetingData.timeSlot}
                    onChange={(e) => setMeetingData({ ...meetingData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                  >
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                    <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1.5">
                  Consultation Focus
                </label>
                <select
                  value={meetingData.topic}
                  onChange={(e) => setMeetingData({ ...meetingData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border border-white/15 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-all cursor-pointer"
                >
                  <option value="Integrated Workspace Architecture">Integrated Workspace Architecture</option>
                  <option value="4K Surveillance & Access Systems">4K Surveillance & Access Systems</option>
                  <option value="Fire Safety & Compliance Audit">Fire Safety & Compliance Audit</option>
                  <option value="Turnkey Office Fit-Out Project">Turnkey Office Fit-Out Project</option>
                  <option value="Network & VoIP Infrastructure">Network & VoIP Infrastructure</option>
                  <option value="Injection Moulding Solutions">Injection Moulding Solutions</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all"
                >
                  <span>Confirm Consultation Booking</span>
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
