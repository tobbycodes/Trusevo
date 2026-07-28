import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, Zap, Sparkles, Laptop, Smartphone, ArrowRight } from 'lucide-react';

interface Benefit {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  detail: string;
  bullet1: string;
  bullet2: string;
  icon: any;
}

export default function StrategicArc() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const benefits: Benefit[] = [
    {
      id: 1,
      label: "01 / Trust Engineering",
      title: "Premium Trust Architecture",
      subtitle: "Undisputed credibility by design.",
      detail: "Elite clients judge your caliber in seconds. We build custom editorial typography, generous whitespace, and calculated alignments that declare your authority instantly.",
      bullet1: "Sophisticated typography curation",
      bullet2: "Mathematical negative spacing",
      icon: Shield
    },
    {
      id: 2,
      label: "02 / Seamless Conversions",
      title: "High-Intent Lead Capture",
      subtitle: "Turn visitors into qualified clients.",
      detail: "Instead of generic forms and loud widgets, we establish organic user pathways that guide high-intent prospects naturally to your schedule.",
      bullet1: "Frictionless scheduling integrations",
      bullet2: "Conversion-optimized journeys",
      icon: Zap
    },
    {
      id: 3,
      label: "03 / Tactile Performance",
      title: "Sub-Second Global Speeds",
      subtitle: "Near-instant responsiveness.",
      detail: "Slow load times lose high-end attention. We utilize ultra-fast global content delivery network edge assets to maintain flawless user retention.",
      bullet1: "95+ Google Lighthouse speed scores",
      bullet2: "Dynamic responsive asset caching",
      icon: Sparkles
    },
    {
      id: 4,
      label: "04 / Bespoke Craftsmanship",
      title: "Bespoke Custom Codebase",
      subtitle: "Zero template limitations.",
      detail: "We construct custom components from scratch to match your specific brand. No template slop—every line of code is handwritten to serve your goal.",
      bullet1: "100% bespoke React architecture",
      bullet2: "Buttery-smooth fluid interactions",
      icon: Laptop
    },
    {
      id: 5,
      label: "05 / Authority Scaling",
      title: "Continuous Digital Advocacy",
      subtitle: "An active business asset working 24/7.",
      detail: "Your website works while you sleep, capturing intentions in the US, UK, Canada, UAE, and Europe. We structure SEO patterns to sustain your presence.",
      bullet1: "Tailored SEO semantic metadata",
      bullet2: "Global search market optimization",
      icon: Smartphone
    }
  ];

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Helper to start the automatic rotation timer
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
  };

  // Start automatic rotation and window resize tracking on mount
  useEffect(() => {
    resetTimer();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle Wheel rotation and counter-rotation of child nodes when activeIndex changes
  useEffect(() => {
    // Base formula: active index rotates to the 180 degrees mark (leftmost point)
    const targetRotation = 180 - (activeIndex * 72);

    if (wheelRef.current) {
      // Main wheel container rotation
      gsap.to(wheelRef.current, {
        rotation: targetRotation,
        duration: 0.95,
        ease: "power3.out",
        overwrite: "auto"
      });

      // Individual nodes counter-rotation to remain upright
      const nodes = wheelRef.current.querySelectorAll('.wheel-node');
      gsap.to(nodes, {
        rotation: -targetRotation,
        duration: 0.95,
        ease: "power3.out",
        overwrite: "auto"
      });
    }

    // Elegant text slide up and fade in transition on index change
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", overwrite: "auto" }
      );
    }
  }, [activeIndex]);

  const activeBenefit = benefits[activeIndex];

  // Manual jump with timer reset
  const handleNodeClick = (index: number) => {
    setActiveIndex(index);
    resetTimer(); // resets the 5-second timer so they have a fresh 5s of viewing
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full py-28 md:py-36 bg-[#1e0a15] text-white overflow-hidden border-y border-white/5"
    >
      {/* Background Ambience Grid and Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,185,250,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB9FA]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative flex flex-col items-center">
        
        {/* ==========================================
            1. HEADING ON TOP
           ========================================== */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16 animate-fade-rise">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#FFB9FA] uppercase font-body block">
            The Strategic Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.15]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Why Businesses Choose Trusevo
          </h2>
          <p className="text-xs text-gray-400 font-body max-w-md mx-auto leading-relaxed">
            We engineer high-performance systems that communicate prestige, elevate authority, and capture premium global demand.
          </p>
        </div>

        {/* ==========================================
            2. CIRCULAR ANIMATION (CENTERED)
           ========================================== */}
        <div className="flex items-center justify-center relative w-full h-[320px] sm:h-[420px] mb-12">
          
          {/* Focal Point Indicator Line & Ring on the leftmost edge */}
          <div className="absolute left-[2%] sm:left-[10%] md:left-[15%] top-1/2 -translate-y-1/2 flex items-center z-20 pointer-events-none">
            <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-[#FFB9FA] to-transparent relative">
              <div className="absolute -left-1.5 -top-1.5 w-3 h-3 rounded-full bg-[#FFB9FA] shadow-[0_0_12px_#FFB9FA] animate-ping" />
              <div className="absolute -left-1.5 -top-1.5 w-3 h-3 rounded-full bg-[#FFB9FA]" />
            </div>
          </div>

          {/* Main Wheel Viewport wrapper */}
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            
            {/* Outer decorative dashed wheel */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 pointer-events-none scale-105" />
            
            {/* Inner glowing circle */}
            <div className="absolute inset-4 rounded-full border border-white/5 bg-white/[0.01] pointer-events-none" />

            {/* Central Core Branding */}
            <div className="absolute w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] rounded-full bg-[#15050f] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-center z-10 select-none">
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-gray-500 uppercase font-body">TRUSEVO</span>
              <span className="text-lg sm:text-xl text-white font-normal my-0.5" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Pillars
              </span>
              <div className="flex items-center space-x-1 mt-1">
                {benefits.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === activeIndex ? 'w-4 bg-[#FFB9FA]' : 'w-1 bg-white/20'
                    }`} 
                  />
                ))}
              </div>
            </div>

            {/* The Actual Rotating Container (gsap-targeted) */}
            <div 
              ref={wheelRef} 
              className="absolute w-full h-full"
              style={{ transform: 'rotate(180deg)' }}
            >
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                const isActive = idx === activeIndex;
                
                // Compute dynamic coordinate positions around a 360-degree layout (360 / 5 = 72)
                const angle = idx * 72;
                const radian = (angle * Math.PI) / 180;
                
                // Radius is 180px on desktop, 120px on mobile
                const R = windowWidth >= 640 ? 180 : 120;
                const x = R * Math.cos(radian);
                const y = R * Math.sin(radian);

                return (
                  <button
                    key={benefit.id}
                    onClick={() => handleNodeClick(idx)}
                    className="wheel-node absolute focus:outline-none group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 30
                    }}
                  >
                    <div className="relative flex flex-col items-center">
                      
                      {/* Node Bubble with dynamic highlight */}
                      <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border transition-all duration-300 relative ${
                        isActive 
                          ? 'bg-[#FFB9FA] border-[#FFB9FA] text-[#1e0a15] scale-110 shadow-[0_0_24px_rgba(255,185,250,0.4)]' 
                          : 'bg-[#15050f] border-white/15 text-white/70 group-hover:border-white/40 group-hover:text-white group-hover:scale-105'
                      }`}>
                        
                        <Icon size={windowWidth >= 640 ? 20 : 16} />

                        {/* Dynamic index numbering */}
                        <span className={`absolute -top-1 -right-1 text-[8px] px-1.5 py-0.5 rounded-full font-bold font-body border ${
                          isActive
                            ? 'bg-white text-[#1e0a15] border-[#FFB9FA]'
                            : 'bg-[#1e0a15] text-[#FFB9FA] border-white/10'
                        }`}>
                          {idx + 1}
                        </span>
                      </div>

                      {/* Text Label orbiting */}
                      <div className={`absolute -bottom-7 whitespace-nowrap px-2.5 py-0.5 rounded-md border text-[8px] sm:text-[9px] font-semibold tracking-wider font-body uppercase transition-all duration-300 ${
                        isActive
                          ? 'bg-[#FFB9FA]/10 border-[#FFB9FA]/20 text-[#FFB9FA] opacity-100 scale-100'
                          : 'bg-black/40 border-transparent text-gray-400 opacity-40 group-hover:opacity-80 scale-95'
                      }`}>
                        {benefit.title.split(' ')[0]}
                      </div>

                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

        {/* ==========================================
            3. INFO OF THE CIRCULAR ANIMATION (CENTERED BELOW)
           ========================================== */}
        <div 
          ref={textRef} 
          className="w-full max-w-xl mx-auto bg-[#15050f]/60 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xl min-h-[220px] flex flex-col justify-center font-body z-10"
        >
          <div className="space-y-1">
            <span className="text-[#FFB9FA] text-[10px] font-bold uppercase tracking-[0.2em] block">
              {activeBenefit.label}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {activeBenefit.title}
            </h3>
            <p className="text-xs text-[#FFB9FA]/90 italic font-medium">
              "{activeBenefit.subtitle}"
            </p>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            {activeBenefit.detail}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB9FA]" />
              <span>{activeBenefit.bullet1}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB9FA]" />
              <span>{activeBenefit.bullet2}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
