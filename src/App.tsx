declare module 'react/jsx-runtime';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Shield, Sparkles, CheckCircle, Smartphone, Laptop, MessageSquare, Mail, Phone, ExternalLink } from 'lucide-react';
import ProjectBriefModal from './components/ProjectBriefModal';
import CardStack from './components/CardStack';
import StrategicArc from './components/StrategicArc';
import WorkGrid from './components/WorkGrid';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // References for premium smooth-scrolling anchors
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    setIsMobileMenuOpen(false);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={homeRef} className="relative min-h-screen text-white bg-[#200E06] overflow-x-hidden flex flex-col justify-between selection:bg-[#FFB9FA]/30 selection:text-white">
      
      {/* ==========================================
          1. PREMIUM VIDEO BACKDROP HERO SECTION
         ========================================== */}
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Fullscreen Looping Video Background */}
        <div className="absolute inset-0 w-full h-full object-cover z-0 overflow-hidden select-none pointer-events-none">
          {/* Solid deep fallback color while loading */}
          <div className="absolute inset-0 bg-[#200E06] z-[-2]" />
          
          {/* High-contrast gradient visual overlay */}
          <div className="absolute inset-0 video-overlay z-[-1]" />
          
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover z-[-2] transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          />
        </div>

        {/* Top Floating Glassmorphic Navigation Pill */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300">
          {/* Logo and Social links */}
          <div className="flex items-center space-x-6">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(homeRef);
              }}
              className="text-2xl tracking-tight text-white flex items-center space-x-2 font-normal" 
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              <span>Trusevo Studio</span>
            </a>
            
            {/* Social icons next to title */}
            <div className="hidden sm:flex items-center space-x-2 border-l border-white/10 pl-5">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-[#FFB9FA] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-[#FFB9FA] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Top Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(servicesRef)}
              className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection(workRef)}
              className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => setIsBriefModalOpen(true)}
              className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop Outlined Call-to-action */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsBriefModalOpen(true)}
              className="border border-white/20 hover:border-white/45 bg-white/5 hover:bg-white/10 rounded-full px-5 py-2 text-[10px] uppercase tracking-widest text-white transition-all flex items-center space-x-1.5"
            >
              <span>Get Started</span>
              <ArrowUpRight size={12} className="text-[#FFB9FA]" />
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu Inside Floating Nav */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 z-50 rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col space-y-4 bg-black/90 backdrop-blur-xl animate-fade-rise">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-left py-2 border-b border-white/5 text-gray-400 hover:text-white text-sm uppercase tracking-wider font-body"
              >
                About Philosophy
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-left py-2 border-b border-white/5 text-gray-400 hover:text-white text-sm uppercase tracking-wider font-body"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection(workRef)}
                className="text-left py-2 border-b border-white/5 text-gray-400 hover:text-white text-sm uppercase tracking-wider font-body"
              >
                Bespoke Case Studies
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBriefModalOpen(true);
                }}
                className="text-left py-2 border-b border-white/5 text-gray-400 hover:text-white text-sm uppercase tracking-wider font-body"
              >
                Consultation Discovery
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBriefModalOpen(true);
                }}
                className="liquid-glass w-full text-center py-3.5 rounded-full text-white text-xs uppercase tracking-widest font-semibold hover:scale-[1.01] mt-2"
              >
                Start Your Project
              </button>
            </div>
          )}
        </header>

        {/* Hero Copywriting Centerpiece */}
        <div className="flex-grow flex flex-col justify-center items-start text-left px-8 max-w-7xl mx-auto w-full z-10 pt-36 pb-24">
          
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-[-2px] max-w-5xl font-normal text-white animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Turn your website into <br className="hidden sm:inline" />
            your <span className="text-[#FFB9FA] italic">best salesperson.</span>
          </h1>

          <p 
            className="text-[#D1D5DB] text-sm sm:text-base max-w-xl mt-10 leading-relaxed font-light animate-fade-rise-delay font-body"
          >
            We design websites that build trust, attract enquiries, and help customers choose your business with confidence.
          </p>

          <div className="animate-fade-rise-delay-2 mt-10">
            <button
              onClick={() => setIsBriefModalOpen(true)}
              className="liquid-glass rounded px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:scale-[1.03] cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Minimal Scroll Anchor */}
        <div className="w-full pb-8 text-center text-[10px] tracking-widest uppercase text-gray-500/80 font-body animate-pulse">
          <span>Scroll to begin discovery</span>
        </div>

      </div>

      {/* ==========================================
          2. PHILOSOPHY / CASCADING CARD SECTION
         ========================================== */}
      <div ref={aboutRef} className="w-full py-28 md:py-40 bg-[#FAF9F6] text-[#200E06] border-y border-[#200E06]/5 relative">
        {/* Decorative corner ambient glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#321323]/2 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#321323]/5 border border-[#321323]/10 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#321323] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold font-body text-[#321323]">
                We communicate your unique business value
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl text-[#200E06] leading-tight font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Helping premium businesses become the only choice online.
            </h2>

            <p className="text-[#200E06]/80 text-sm md:text-base leading-relaxed font-body font-light">
              Your website is often the single most critical point of client validation. If it looks standard, you are instantly compared on price. If it feels bespoke, you build immediate authority and secure high-value partnerships automatically.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#200E06]/10 font-body">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#321323] block">01 / Credibility Blueprint</span>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  We design pristine, mathematical interfaces that instantly reinforce your market tenure and authority.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#321323] block">02 / Dynamic Conversion</span>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  Structuring organic, high-intent pathways that turn cold traffic into dedicated inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Cascading 3D Card Stack Component */}
          <div className="relative">
            <CardStack />
          </div>

        </div>
      </div>

      {/* ==========================================
          3. STRATEGIC TIMELINE ARC SECTION
         ========================================== */}
      <div className="w-full">
        <StrategicArc />
      </div>

      {/* ==========================================
          4. CASE STUDIES & WORK SHOWCASE SECTION
         ========================================== */}
      <div ref={servicesRef}>
        <div ref={workRef}>
          <WorkGrid />
        </div>
      </div>

      {/* ==========================================
          5. READY TO BUILD / TWO COLUMN SECTION
         ========================================== */}
      <div className="w-full py-28 md:py-36 bg-[#1a0714] text-white border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFB9FA]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column: Business Professional photo with colorful luxury aesthetic */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group bg-[#15050f]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Business Owner Collaboration" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_12%] group-hover:scale-110 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            {/* Elegant dark gradient border overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 bg-[#1a0714]/90 border border-white/10 backdrop-blur-md px-5 py-3.5 rounded-xl shadow-lg flex items-center space-x-3.5 font-body">
              <div className="w-10 h-10 rounded-full bg-[#FFB9FA] flex items-center justify-center text-[#1a0714] font-bold text-sm">
                TS
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Tailored Consultation</span>
                <span className="block text-[10px] text-gray-300">Scheduled on-demand with our design leads</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Conversion Prompt */}
          <div className="space-y-8 text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFB9FA] uppercase font-body block">Let's Partner Up</span>
            
            <h2 className="text-5xl md:text-6xl text-white leading-tight font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Ready to construct a website that works while you sleep?
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-body font-light">
              Let's engineer a deliberate digital platform that establishes absolute trust. We do not build cookie-cutter templates. Every line of our custom code is calculated to maximize authority and capture qualified intent.
            </p>

            <div className="pt-4 font-body">
              <button
                onClick={() => setIsBriefModalOpen(true)}
                className="bg-[#FFB9FA] hover:bg-white text-[#1a0714] hover:text-[#1a0714] rounded px-10 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-500 hover:scale-[1.03] shadow-lg cursor-pointer inline-flex items-center"
              >
                <span>Get Started Now</span>
                <ArrowUpRight size={14} className="text-[#1a0714] ml-2 animate-pulse" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          6. CONTACT / BLACK FINALE FOOTER SECTION
         ========================================== */}
      <div ref={contactRef} className="w-full bg-black text-white py-20 border-t border-white/5 relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB9FA]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Direct Inquiries */}
          <div className="space-y-10 text-left">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-normal leading-[0.95]" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Make it easier for <br />your customers
              </h2>
              <div className="w-16 h-0.5 bg-[#FFB9FA] rounded-full" />
            </div>

            <div className="space-y-6 font-body">
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block mb-2">Get in touch</span>
                <a 
                  href="mailto:hello@trusevo.com" 
                  className="text-lg md:text-xl text-white hover:text-[#FFB9FA] transition-colors flex items-center space-x-2"
                >
                  <Mail size={16} className="text-[#FFB9FA]" />
                  <span>hello@trusevo.com</span>
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block mb-2">Direct Line</span>
                <a 
                  href="tel:1270899999" 
                  className="text-lg md:text-xl text-white hover:text-[#FFB9FA] transition-colors flex items-center space-x-2"
                >
                  <Phone size={16} className="text-[#FFB9FA]" />
                  <span>+1 (267) 702-9634</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-10 text-xs text-gray-600 font-body">
              <span>&copy; {new Date().getFullYear()} Trusevo Studio. All rights reserved.</span>
            </div>
          </div>

          {/* Right Column: Dynamic collaboration representation */}
          <div className="space-y-8 text-left w-full">
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl bg-zinc-900 group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Strategic Planning Meeting" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/5 flex justify-between items-center text-xs font-body">
                <span className="text-gray-300 font-medium">Bespoke Strategic Delivery</span>
                <span className="text-[#FFB9FA] font-bold">100% Client Managed</span>
              </div>
            </div>

            {/* Social Buttons Bottom-Right aligned with reference style */}
            <div className="flex justify-end space-x-3 font-body">
              <a 
                href="https://www.instagram.com/trusevo_studio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-white/20 hover:border-white/50 px-5 py-2 text-xs uppercase tracking-wider text-white hover:text-[#FFB9FA] transition-all rounded"
              >
                Instagram
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-white/20 hover:border-white/50 px-5 py-2 text-xs uppercase tracking-wider text-white hover:text-[#FFB9FA] transition-all rounded"
              >
                X
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Strategic Survey Modal Container */}
      <ProjectBriefModal 
        isOpen={isBriefModalOpen} 
        onClose={() => setIsBriefModalOpen(false)} 
      />
    </div>
  );
}
