import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Cpu, HeartHandshake } from 'lucide-react';

interface PillarItem {
  id: number;
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  detail: string;
  image: string;
  icon: any;
}

export default function CardStack() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const pillars: PillarItem[] = [
    {
      id: 1,
      step: "01 / STRATEGY",
      title: "Unconditional Trust Building",
      subtitle: "Removing client skepticism through high-end credibility architecture.",
      badge: "Credibility",
      detail: "Elite clients judge your caliber in seconds. We carefully frame your authority, design exquisite mathematical spacing, and use premium displays so high-value partners choose you instantly.",
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
      icon: ShieldCheck
    },
    {
      id: 2,
      step: "02 / ENGINEERING",
      title: "Elite Custom UI/UX Design",
      subtitle: "Custom-coded interfaces completely built from scratch for global markets.",
      badge: "Bespoke Code",
      detail: "No generic templates or slow visual page builders. We code custom-engineered layouts tailored to high-intent clients in London, New York, Toronto, Dubai, and across Western Europe.",
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      icon: Cpu
    },
    {
      id: 3,
      step: "03 / PARTNERSHIP",
      title: "Friction-Free Support",
      subtitle: "Removing fear and technical complexity so you can focus on scaling.",
      badge: "Client Peace",
      detail: "We manage DNS, security, sub-second content delivery network (CDN) caching, and performance optimizations. You get direct on-demand developer access—no tickets, no friction.",
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="w-full font-body mt-12">
      {/* 3-Column Interactive Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isHovered = hoveredId === pillar.id;

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setHoveredId(pillar.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group bg-[#FAF9F6] border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden ${
                isHovered 
                  ? 'border-[#321323]/30 shadow-[0_30px_60px_rgba(32,19,35,0.08)] bg-white -translate-y-1.5' 
                  : 'border-[#321323]/10 hover:border-[#321323]/20'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#321323]/50">
                    {pillar.step}
                  </span>
                  <span className="bg-[#321323]/5 border border-[#321323]/10 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-[#321323]/80">
                    {pillar.badge}
                  </span>
                </div>

                {/* Stretchy Image Container */}
                <div 
                  className={`w-full rounded-2xl overflow-hidden relative border border-[#321323]/5 bg-[#FAF9F6] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered 
                      ? 'h-[230px] md:h-[260px]' 
                      : 'h-[160px] md:h-[180px]'
                  }`}
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Action Circle */}
                  <div className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-black/5 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered ? 'scale-110 rotate-45 bg-[#FFB9FA]/90 text-black border-[#FFB9FA]/20' : 'scale-90 text-[#321323]'
                  }`}>
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Text Descriptions */}
                <div className="mt-6 text-left">
                  <div className="flex items-center space-x-2.5 mb-2.5">
                    <div className="p-1.5 bg-[#321323]/5 rounded-lg text-[#321323] group-hover:bg-[#FFB9FA]/20 transition-all duration-500">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-lg font-bold text-[#200E06] tracking-tight group-hover:text-[#321323] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs font-semibold text-[#200E06]/80 leading-normal mb-3">
                    {pillar.subtitle}
                  </p>
                  
                  <p className="text-xs text-[#200E06]/60 leading-relaxed font-light font-body">
                    {pillar.detail}
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="w-full h-1 bg-[#321323]/5 rounded-full overflow-hidden mt-6 relative">
                <div className={`absolute left-0 top-0 h-full bg-[#FFB9FA] transition-all duration-1000 ease-out ${
                  isHovered ? 'w-full' : 'w-0'
                }`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Quote to support, remove fear, and make life easy for business owners */}
      <div className="mt-12 p-6 rounded-2xl bg-[#321323]/5 border border-[#321323]/10 max-w-3xl mx-auto text-center animate-fade-rise">
        <p className="text-xs italic text-[#200E06]/80 leading-relaxed font-light">
          "Your website should be an automated asset that frees your time, establishes absolute authority, and removes the burden of customer vetting. We handle every detail, from architecture to execution, so you can scale with total peace of mind."
        </p>
        <span className="block text-[9px] font-bold tracking-wider text-[#321323] uppercase mt-2.5 font-body">
          — The Trusevo Executive Commitment
        </span>
      </div>
    </div>
  );
}
