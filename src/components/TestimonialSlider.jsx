import React, { useRef, useState, useEffect } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Quote, 
  Sparkles,
  Building2,
  ShieldCheck
} from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "The Global Enterprises completely transformed our flight terminal surveillance. Their single-accountable turnkey model eliminated vendor friction entirely, delivering 4K coverage across all critical departure zones.",
    author: "Rajeev Menon",
    role: "Senior Director of Aviation Security",
    org: "Interglobe Aviation (IndiGo Fleet)",
    rating: 5,
    score: "5.0",
    badge: "Aviation Fleet Partner",
    category: "4K CCTV & ACCESS CONTROL"
  },
  {
    id: 2,
    quote: "Their emergency on-site AMC response has kept our pan-India express logistics hubs running with zero surveillance downtime for over 4 continuous years. Exceptional technical agility and proactive maintenance.",
    author: "Col. Vikram Rathore (Retd.)",
    role: "Head of Facility Infrastructure",
    org: "FedEx Express India",
    rating: 4,
    hasHalf: true,
    score: "4.8",
    badge: "Logistics & Supply Chain",
    category: "24/7 AMC & SURVEILLANCE"
  },
  {
    id: 3,
    quote: "Implementing the optical speed gates and high-definition boardroom AV systems was seamless. The precision engineering and prompt turnaround by Sachin and his team exceeded our corporate governance standards.",
    author: "Ananya Deshmukh",
    role: "Chief Operating Officer",
    org: "NCR Corporate Technology Hub",
    rating: 5,
    score: "5.0",
    badge: "Enterprise Workspace",
    category: "AV & SPEED GATES"
  },
  {
    id: 4,
    quote: "For our heavy industrial mining and refinery operations, equipment durability is vital. Global Enterprises installed ruggedized LTE body-worn cameras and automated fire suppression loops that operate flawlessly.",
    author: "Debasish Mukherjee",
    role: "General Manager - HSE",
    org: "Rio Tinto India",
    rating: 4,
    hasHalf: true,
    score: "4.9",
    badge: "Industrial & Mining Safety",
    category: "BODY-WORN & FIRE SAFETY"
  },
  {
    id: 5,
    quote: "From Dorset biometric smart locks to high-throughput EPABX conference systems, their turnkey execution saved us months of multi-vendor coordination during our 65,000 sq ft headquarters fit-out.",
    author: "Pooja Singhania",
    role: "VP - Workplace Solutions",
    org: "Apex Financial Services HQ",
    rating: 4,
    hasHalf: false,
    score: "4.8",
    badge: "Commercial Real Estate",
    category: "FIT-OUT & SMART LOCKS"
  },
  {
    id: 6,
    quote: "Deploying certified emergency public address and automated heat/smoke interlocks across our multi-facility campus was executed with 100% compliance to Civil Defense and National Building Code standards.",
    author: "Sanjay Kulkarni",
    role: "Superintending Safety Engineer",
    org: "National Civil Defense Infrastructure",
    rating: 5,
    score: "5.0",
    badge: "Public Defense & Security",
    category: "FIRE & PUBLIC ADDRESS"
  },
  {
    id: 7,
    quote: "Their customized acoustic conference room setups and interactive video walls make our global stakeholder board meetings smooth and crystal-clear. The support team responds within minutes.",
    author: "Kavita Ramachandran",
    role: "Director of Digital Collaboration",
    org: "International Consulting Group",
    rating: 4,
    hasHalf: true,
    score: "4.9",
    badge: "Digital Workplace",
    category: "HD VIDEO WALLS & CONFERENCING"
  },
  {
    id: 8,
    quote: "Reliability is non-negotiable for 24/7 airside passenger baggage security. Global Enterprises delivers rugged CCTV and perimeter alarms that have operated with 99.98% uptime across all seasons.",
    author: "Harpreet Singh Sandhu",
    role: "Airside Operations Lead",
    org: "Air India Regional Hubs",
    rating: 5,
    score: "5.0",
    badge: "Aviation Infrastructure",
    category: "AIRSIDE CCTV & PERIMETER"
  }
];

export default function TestimonialSlider() {
  const scrollContainerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate approximate active card index
    const cardWidth = el.querySelector('.testimonial-card')?.offsetWidth || 340;
    const index = Math.round(el.scrollLeft / (cardWidth + 24));
    setActiveIndex(Math.min(Math.max(0, index), testimonialsData.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState, { passive: true });
      updateScrollState();
      return () => el.removeEventListener('scroll', updateScrollState);
    }
  }, []);

  const scrollToCard = (index) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.testimonial-card')?.offsetWidth || 340;
    const targetScroll = index * (cardWidth + 24);
    el.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const handlePrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.testimonial-card')?.offsetWidth || 340;
    el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.testimonial-card')?.offsetWidth || 340;
    el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  // Mouse Drag Handlers (Manual Only - No Auto Scroll)
  const handleMouseDown = (e) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const renderStars = (rating, hasHalf, score) => {
    return (
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => {
            const isFull = i < rating;
            const isHalfStar = i === rating && hasHalf;
            return (
              <div key={i} className="relative">
                <Star
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                    isFull
                      ? 'fill-amber-400 text-amber-400'
                      : isHalfStar
                      ? 'fill-amber-400/50 text-amber-400'
                      : 'text-white/20'
                  }`}
                />
              </div>
            );
          })}
        </div>
        <span className="text-xs font-bold text-amber-300 font-mono px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20">
          {score}
        </span>
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {/* Top Header Controls: Arrows and Slider Indicator */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2 text-xs text-[#c4b5fd]">
          <Quote className="w-4 h-4 text-amber-400" />
          <span>Swipe or drag to explore verified feedback ({testimonialsData.length} Reviews)</span>
        </div>

        {/* Manual Left / Right Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous Testimonial"
            className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? 'bg-[#220c42] border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-[#10061e] shadow-lg active:scale-95'
                : 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed opacity-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next Testimonial"
            className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'bg-[#220c42] border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-[#10061e] shadow-lg active:scale-95'
                : 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed opacity-50'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Interactive Horizontal Scroll / Drag Track (Manual swipe, NO auto scroll) */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex items-stretch gap-5 sm:gap-6 overflow-x-auto select-none py-2 px-1 pb-4 no-scrollbar scroll-smooth ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {testimonialsData.map((t, idx) => (
          <div
            key={t.id}
            style={{ scrollSnapAlign: 'start' }}
            className="testimonial-card w-[290px] sm:w-[350px] lg:w-[380px] min-w-[290px] sm:min-w-[350px] lg:min-w-[380px] glass-card p-5 sm:p-7 rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between bg-gradient-to-br from-[#1a0a33] via-[#140828] to-[#180830] shadow-xl group hover:-translate-y-1 shrink-0"
          >
            <div>
              {/* Header: Category Badge & Stars */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-extrabold font-mono text-amber-400 uppercase tracking-widest truncate">
                  {t.category}
                </span>
                <Quote className="w-5 h-5 text-amber-400/30 group-hover:text-amber-400 transition-colors shrink-0" />
              </div>

              {/* Stars with Alternating Score */}
              {renderStars(t.rating, t.hasHalf, t.score)}

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-[#e2d5f8] leading-relaxed mb-6 font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author Meta */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold font-heading text-white truncate group-hover:text-amber-300 transition-colors">
                  {t.author}
                </div>
                <div className="text-[11px] text-[#b8a7dc] truncate">
                  {t.role}
                </div>
                <div className="text-[10px] text-amber-400 font-semibold truncate mt-0.5">
                  {t.org}
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-end">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonialsData.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => scrollToCard(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === dotIdx
                ? 'w-7 bg-amber-400 shadow-[0_0_10px_#f59e0b]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
