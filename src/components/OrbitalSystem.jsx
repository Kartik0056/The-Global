import React, { useState, useEffect } from 'react';
import { 
  Video, 
  ShieldCheck, 
  Lock, 
  PhoneCall, 
  Flame, 
  Building2, 
  Network,
  Scan
} from 'lucide-react';

export default function OrbitalSystem({ activeNodeId, onSelectNode }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth continuous rotation angle update
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        setRotationAngle((prev) => (prev + delta * 10) % 360); // 10 degrees per sec
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Orbit nodes configuration
  const nodes = [
    // Outer orbit nodes
    {
      id: 'lock',
      title: 'Secure Access Control',
      category: 'ACCESS CONTROL',
      icon: Lock,
      orbit: 'outer',
      orbitRadius: 220,
      baseAngle: 0,
      image: '/images/speedgates.jpg',
      desc: 'Encrypted smart locks and multi-factor authentication.'
    },
    {
      id: 'av',
      title: 'Audio-Visual Collaboration',
      category: 'SMART CONFERENCING',
      icon: PhoneCall,
      orbit: 'outer',
      orbitRadius: 220,
      baseAngle: 72,
      image: '/images/av_room.jpg',
      desc: 'Executive boardrooms & ultra-HD conference video walls.'
    },
    {
      id: 'furniture',
      title: 'Ergonomic Workspaces',
      category: 'INTERIOR FIT-OUTS',
      icon: Building2,
      orbit: 'outer',
      orbitRadius: 220,
      baseAngle: 144,
      image: '/images/workspace.jpg',
      desc: 'Custom glass partitioning & height-adjustable workstations.'
    },
    {
      id: 'defense',
      title: 'Perimeter Defense',
      category: 'PERIMETER SECURITY',
      icon: ShieldCheck,
      orbit: 'outer',
      orbitRadius: 220,
      baseAngle: 216,
      image: '/images/cctv.jpg',
      desc: 'Physical and digital security infrastructure.'
    },
    {
      id: 'cctv',
      title: '4K CCTV & Body Cameras',
      category: 'VIDEO SURVEILLANCE',
      icon: Video,
      orbit: 'outer',
      orbitRadius: 220,
      baseAngle: 288,
      image: '/images/cctv.jpg',
      desc: 'High-definition 4K optical surveillance & body-worn cameras.'
    },

    // Inner orbit nodes
    {
      id: 'integration',
      title: 'Turnkey System Integration',
      category: 'SYSTEM INTEGRATION',
      icon: Network,
      orbit: 'inner',
      orbitRadius: 155,
      baseAngle: 300,
      image: '/images/speedgates.jpg',
      desc: 'Unified ecosystem connecting security, IoT and IT nodes.'
    },
    {
      id: 'speedgate',
      title: 'Speed Gates & Access',
      category: 'ACCESS CONTROL',
      icon: Scan,
      orbit: 'inner',
      orbitRadius: 155,
      baseAngle: 60,
      image: '/images/speedgates.jpg',
      desc: 'Biometric, RFID & automated turnstiles for fast entry.'
    },
    {
      id: 'fire',
      title: 'Fire Safety & Thermal Alarm',
      category: 'LIFE SAFETY',
      icon: Flame,
      orbit: 'inner',
      orbitRadius: 155,
      baseAngle: 180,
      image: '/images/firesafety.jpg',
      desc: 'Certified thermal early-warning detection & suppression.'
    }
  ];

  const activeOrHovered = hoveredNode || nodes.find(n => n.id === activeNodeId) || null;

  // Tooltip placement relative to node coordinates
  const getTooltipPositionClass = (x, y) => {
    if (y > 40) {
      return "top-full mt-3 left-1/2 -translate-x-1/2";
    } else if (y < -40) {
      return "bottom-full mb-3 left-1/2 -translate-x-1/2";
    } else if (x > 0) {
      return "left-full ml-3 top-1/2 -translate-y-1/2";
    } else {
      return "right-full mr-3 top-1/2 -translate-y-1/2";
    }
  };

  return (
    <div className="w-full flex items-center justify-center overflow-visible py-4">
      <div 
        className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none scale-[0.62] xs:scale-75 sm:scale-85 md:scale-95 lg:scale-100 origin-center transition-transform"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredNode(null);
        }}
      >
        {/* Ambient background glow */}
        <div className="absolute w-72 h-72 rounded-full bg-purple-900/30 blur-3xl -z-10 pointer-events-none animate-pulse"></div>
        <div className="absolute w-52 h-52 rounded-full bg-amber-500/10 blur-2xl -z-10 pointer-events-none"></div>

        {/* Central Integrated Core Orb (Logo slightly smaller & geometrically centered) */}
        <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#1b0736] via-[#100422] to-[#15062c] border-2 border-amber-400/90 shadow-[0_0_40px_rgba(245,158,11,0.6),inset_0_0_20px_rgba(10,3,20,0.9)] overflow-hidden">
            {/* Inner Dashed Ring */}
            <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-400/60 animate-spin-slow pointer-events-none"></div>
            
            {/* Central Logo - Geometrically centered & slightly smaller */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center relative z-10 p-1">
              <img
                src="/logo.png"
                alt="The Global Enterprises Logo"
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.85)]"
              />
            </div>
          </div>

          {/* Subtitle text below orb */}
          <div className="mt-2 text-center flex items-center justify-center">
            <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-[0.22em] text-amber-400 uppercase text-center block">
              INTEGRATED WORKSPACE
            </span>
          </div>
        </div>

        {/* Concentric Orbit Rings SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none -z-0" viewBox="0 0 540 540">
          {/* Inner Decorative Ring */}
          <circle
            cx="270"
            cy="270"
            r="95"
            fill="none"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Middle Active Orbit Ring (Inner Orbit) */}
          <circle
            cx="270"
            cy="270"
            r="155"
            fill="none"
            stroke="rgba(255, 255, 255, 0.14)"
            strokeWidth="1.2"
          />

          {/* Outer Active Orbit Ring (Outer Orbit) */}
          <circle
            cx="270"
            cy="270"
            r="220"
            fill="none"
            stroke="rgba(255, 255, 255, 0.16)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />

          {/* Active Pulsing Laser Line */}
          {activeOrHovered && (() => {
            const isOuter = activeOrHovered.orbit === 'outer';
            const calcAngle = isOuter
              ? (activeOrHovered.baseAngle + rotationAngle) % 360
              : (activeOrHovered.baseAngle - rotationAngle) % 360;
            const rad = ((calcAngle - 90) * Math.PI) / 180;
            return (
              <line
                x1="270"
                y1="270"
                x2={270 + activeOrHovered.orbitRadius * Math.cos(rad) * 0.9}
                y2={270 + activeOrHovered.orbitRadius * Math.sin(rad) * 0.9}
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="4 3"
                className="animate-pulse"
              />
            );
          })()}
        </svg>

        {/* Orbiting Moving Nodes (Outer = Clockwise, Inner = Anti-Clockwise) */}
        {nodes.map((node) => {
          const isOuter = node.orbit === 'outer';
          // Outer orbit rotates CLOCKWISE (+), Inner orbit rotates ANTI-CLOCKWISE (-)
          const currentAngle = isOuter
            ? (node.baseAngle + rotationAngle) % 360
            : (node.baseAngle - rotationAngle) % 360;

          const angleInRadians = (currentAngle - 90) * (Math.PI / 180);
          const x = node.orbitRadius * Math.cos(angleInRadians);
          const y = node.orbitRadius * Math.sin(angleInRadians);
          const isHovered = hoveredNode?.id === node.id;
          const isSelected = activeNodeId === node.id;
          const IconComponent = node.icon;

          return (
            <div
              key={node.id}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: isPaused ? 'transform 0.15s ease-out' : 'none',
              }}
              className={`absolute transition-all ${isHovered || isSelected ? 'z-[100]' : 'z-20'}`}
            >
              <div className="relative group">
                <button
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => {
                    if (onSelectNode) onSelectNode(node.id, node);
                  }}
                  aria-label={node.title}
                  className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-300 cursor-pointer ${
                    isHovered || isSelected
                      ? 'bg-[#2b1250] border-2 border-amber-400 text-amber-300 scale-125 shadow-[0_0_25px_rgba(245,158,11,0.85)] z-50'
                      : 'bg-[#190933]/90 backdrop-blur-md border border-amber-400/40 text-amber-400 hover:text-white hover:border-amber-300 shadow-xl'
                  }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>

                {/* Smart Outward Tooltip - Zero Overlap Guaranteed */}
                {isHovered && (
                  <div 
                    className={`absolute w-52 p-2.5 rounded-xl bg-[#1a0933]/95 border border-amber-400/80 shadow-[0_15px_35px_rgba(0,0,0,0.95)] backdrop-blur-2xl pointer-events-none z-50 animate-fadeIn text-left flex items-center gap-2.5 ${getTooltipPositionClass(x, y)}`}
                  >
                    <img
                      src={node.image}
                      alt={node.title}
                      className="w-11 h-11 rounded-lg object-cover border border-white/20 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-[9px] font-extrabold uppercase tracking-wider text-amber-400 truncate">
                        {node.category}
                      </div>
                      <div className="text-xs font-bold text-white leading-tight truncate">
                        {node.title}
                      </div>
                      <div className="text-[10px] text-[#c4b5fd] mt-0.5 leading-tight truncate">
                        Click to inspect
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Decorative pulse dots */}
        <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-amber-400/80 animate-ping"></div>
        <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-purple-400/80 animate-pulse"></div>
      </div>
    </div>
  );
}


