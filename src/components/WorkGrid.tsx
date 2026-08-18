import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Paintbrush, Laptop, FileText, Code2, Search } from 'lucide-react';
import gsap from 'gsap';

interface ServiceSlide {
  id: number;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  icon: any;
  colorBadge: string;
}

export default function WorkGrid() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const services: ServiceSlide[] = [
    {
      id: 1,
      title: "CREATIVE DIRECTION",
      tagline: "Positioning your business above generic templates.",
      description: "We set the precise aesthetic standards, visual identities, typography scaling, and premium grids that convey absolute credibility and institutional-grade authority in global markets.",
      deliverables: ["Visual Identity Curation", "Grid & Ratio Formulation", "Brand Style Matrices"],
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
      icon: Paintbrush,
      colorBadge: "Creative Authority"
    },
    {
      id: 2,
      title: "UI/UX DESIGN",
      tagline: "Frictionless layouts optimized for high-intent validation.",
      description: "Every pixel, spacing, and micro-hover effect is designed to eliminate skepticism. We build touch-first, mobile-optimized screens that turn casual readers into direct inquires.",
      deliverables: ["User Journey Blueprints", "High-Fidelity Wireframes", "Interactive Interactive Prototypes"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
      icon: Laptop,
      colorBadge: "UX Architecture"
    },
    {
      id: 3,
      title: "COPYWRITING & NARRATIVE",
      tagline: "Converting high-intent visitors into committed partners.",
      description: "We write direct, crystal-clear, premium copy that speaks straight to the fears and aspirations of high-caliber decision makers, making buying decisions effortless.",
      deliverables: ["Executive Positioning copy", "Zero-friction Headings", "Frictionless Lead Pathways"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      icon: FileText,
      colorBadge: "Strategic Narrative"
    },
    {
      id: 4,
      title: "BESPOKE WEB DEVELOPMENT",
      tagline: "Custom React architectures built from scratch.",
      description: "We write clean, lightning-fast custom React platforms with zero builders or pre-made themes. This guarantees exceptional Lighthouse speeds and robust responsiveness.",
      deliverables: ["React / Vite Integration", "Sub-Second Global Speeds", "W3C Compliant Clean Markup"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      icon: Code2,
      colorBadge: "Elite Codebase"
    },
    {
      id: 5,
      title: "SEO & AUTHORITY SCALING",
      tagline: "Sustaining dominant organic presence globally.",
      description: "We deploy comprehensive schema tags and strategic semantic metadata structured to capture high-value organic search demand. This ensures your business ranks for the most relevant, high-intent keywords in your industry.",
      deliverables: ["Semantic Schema Injection", "Global Keyword Strategy", "Technical Speed Audits"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      icon: Search,
      colorBadge: "Global Discovery"
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // Silky slide entry transitions
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(slideRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [activeSlide]);

  const slide = services[activeSlide];
  const Icon = slide.icon;

  return (
    <div 
      id="services-carousel-container"
      className="w-full py-28 md:py-36 bg-[#FAF9F6] text-[#200E06] relative overflow-hidden"
    >
      {/* Structural Guideline Lines */}
      <div className="absolute inset-y-0 left-8 w-px bg-[#200E06]/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-8 w-px bg-[#200E06]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-[#200E06]/10">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#321323]/60 uppercase font-body block">
              Our Curated Deliverables. Trusevo Studio is a web design and development studio creating modern digital experiences that help businesses communicate their value, build trust and turn visitors into customers.
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#200E06] font-normal leading-[1.1]" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Bespoke Services Designed to Convert
            </h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <button 
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-[#200E06]/10 hover:border-[#321323] flex items-center justify-center transition-all hover:bg-white text-[#200E06]"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-[#200E06]/10 hover:border-[#321323] flex items-center justify-center transition-all hover:bg-white text-[#200E06]"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ==========================================
            HORIZONTAL SMOOTH TRANSITION VIEWPORT
           ========================================== */}
        <div 
          ref={slideRef} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[460px]"
        >
          {/* Left Column: Context, Metadata and copy descriptions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#321323] uppercase font-mono">
                0{activeSlide + 1} / 05
              </span>
              <span className="w-6 h-px bg-[#200E06]/20" />
              <span className="bg-[#321323]/5 border border-[#321323]/10 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-[#321323]/80">
                {slide.colorBadge}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-[#321323]/5 rounded-xl text-[#321323]">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#200E06]">
                  {slide.title}
                </h3>
              </div>
              <p className="text-base font-semibold text-[#321323]/80 tracking-tight leading-relaxed font-body">
                {slide.tagline}
              </p>
            </div>

            <p className="text-sm text-[#200E06]/75 font-light leading-relaxed font-body max-w-lg">
              {slide.description}
            </p>

            {/* Structured Deliverables Bullet List */}
            <div className="space-y-3 pt-4 border-t border-[#200E06]/10">
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase font-body block">
                Included Outcomes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body">
                {slide.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <CheckCircle2 size={14} className="text-[#321323] flex-shrink-0" />
                    <span className="text-xs text-[#200E06]/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Vivid, High-contrast Colored Image displaying faces/products */}
          <div className="lg:col-span-6">
            <div className="w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#200E06]/10 shadow-[0_24px_50px_rgba(32,14,6,0.06)] relative group bg-[#0D0502]">
              <img 
                src={slide.image} 
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105"
              />
              {/* Soft elegant warm gradient border highlight inside */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#200E06]/10 text-left font-body shadow-sm">
                <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-wider">Premium Execution</span>
                <span className="block text-xs font-semibold text-[#200E06]">{slide.title} Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            CAROUSEL PROGRESS INDICATORS (NAVBAR)
           ========================================== */}
        <div className="grid grid-cols-5 gap-3 mt-16 pt-8 border-t border-[#200E06]/10 w-full max-w-4xl mx-auto">
          {services.map((item, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSlide(idx)}
                className="group flex flex-col items-start focus:outline-none text-left"
              >
                {/* Horizontal dynamic line */}
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-3 relative">
                  <div 
                    className={`absolute inset-0 bg-[#321323] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-1/3'
                    }`}
                  />
                </div>
                
                {/* Micro detail label */}
                <span className={`text-[8px] font-bold tracking-widest font-mono uppercase transition-colors duration-300 ${
                  isActive ? 'text-[#321323]' : 'text-gray-400'
                }`}>
                  0{idx + 1}
                </span>
                <span className={`hidden sm:inline text-[9px] font-semibold tracking-wider font-body mt-0.5 truncate max-w-full transition-colors duration-300 ${
                  isActive ? 'text-[#321323]' : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  {item.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
