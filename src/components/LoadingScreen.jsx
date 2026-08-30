import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Video, 
  Lock, 
  Scan, 
  Flame, 
  Server, 
  Tv, 
  Sparkles 
} from 'lucide-react';

const equipmentList = [
  { icon: Video, label: '4K CCTV & Optical Surveillance', category: 'SURVEILLANCE' },
  { icon: Lock, label: 'Dorset Smart Door Locks', category: 'ACCESS CONTROL' },
  { icon: Scan, label: 'Optical Speedgates & Turnstiles', category: 'PERIMETER' },
  { icon: Flame, label: 'Addressable Fire Alarm Systems', category: 'FIRE SAFETY' },
  { icon: Server, label: 'Enterprise Network & IT Infrastructure', category: 'CONNECTIVITY' },
  { icon: Tv, label: 'Boardroom AV & Video Conferencing', category: 'COLLABORATION' },
  { icon: ShieldCheck, label: 'Unified Enterprise Security', category: 'INTEGRATION' }
];

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth, responsive progress calibration (~600ms total)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + jump, 100);
      });
    }, 40);

    // Fast cycling through security equipment icons
    const iconInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % equipmentList.length);
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(iconInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Smooth fade-out triggered immediately upon 100% completion
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 80);

      // Unmount right when fade-out animation finishes (350ms)
      const finishTimer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 430);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onFinish]);

  const CurrentIcon = equipmentList[currentIndex].icon;
  const currentItem = equipmentList[currentIndex];

  return (
    <div
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-[#0d041a] text-white select-none transition-all duration-350 ease-out ${
        isFadingOut ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Crisp glowing ambient backdrop */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-900/30 blur-[90px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-amber-500/20 blur-[70px] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none"></div>

      <div className="relative flex flex-col items-center max-w-sm px-6 text-center z-10">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] font-mono font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <Sparkles className="w-3 h-3 text-amber-400 animate-spin-slow" />
          <span>THE GLOBAL ENTERPRISES</span>
        </div>

        {/* Central Security Scanner & Dynamic Icon Stage */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-8">
          {/* Outer rotating dashed ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/50 animate-spin-slow"></div>

          {/* Inner reverse rotating ring */}
          <div className="absolute inset-2.5 rounded-full border border-purple-500/40 animate-spin-reverse-slow"></div>

          {/* Glowing center hub */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#240b49] via-[#15062c] to-[#0e0419] border border-amber-400/80 shadow-[0_0_35px_rgba(245,158,11,0.5),inset_0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center">
            {/* Animated Equipment Icon */}
            <div 
              key={currentIndex} 
              className="animate-scaleIn flex items-center justify-center transition-all duration-150"
            >
              <CurrentIcon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
            </div>
          </div>

          {/* Ping radar blip */}
          <div className="absolute top-1 right-2 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
        </div>

        {/* Dynamic Telemetry Status */}
        <div className="h-12 flex flex-col items-center justify-center mb-6">
          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-amber-400 mb-1">
            {currentItem.category}
          </span>
          <div className="text-xs sm:text-sm font-bold text-white font-heading truncate max-w-[280px]">
            {currentItem.label}
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-64 sm:w-72 mb-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#c4b5fd] mb-2 font-bold">
            <span className="tracking-wider">SYSTEM INITIALIZATION</span>
            <span className="text-amber-300 font-mono">{progress}%</span>
          </div>

          <div className="w-full h-1.5 bg-[#1f0b3b] rounded-full overflow-hidden border border-white/15 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#f59e0b]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Bottom sub-status */}
        <div className="text-[10px] text-[#9f8fb9] font-mono tracking-wider">
          CALIBRATING SECURITY &amp; WORKSPACE SYSTEMS
        </div>
      </div>
    </div>
  );
}
