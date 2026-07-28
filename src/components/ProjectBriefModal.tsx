import React, { useState } from 'react';
import { X, ArrowRight, Check, Sparkles, Shield, Users, TrendingUp, Compass, Mail, Clock } from 'lucide-react';
import { ProjectBrief, ProjectGoal, WebsiteStatus } from '../types';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectBriefModal({ isOpen, onClose }: ProjectBriefModalProps) {
  const [step, setStep] = useState(1);
  const [brief, setBrief] = useState<ProjectBrief>({
    goal: 'credibility',
    status: 'none',
    companyName: '',
    email: '',
    additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleGoalSelect = (goal: ProjectGoal) => {
    setBrief((prev) => ({ ...prev, goal }));
  };

  const handleStatusSelect = (status: WebsiteStatus) => {
    setBrief((prev) => ({ ...prev, status }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBrief((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (!brief.companyName || !brief.email) {
      alert('Please fill out your company name and email to continue.');
      return;
    }
    setIsSubmitting(true);
    // Simulate premium generation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setStep(4);
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setBrief({
      goal: 'credibility',
      status: 'none',
      companyName: '',
      email: '',
      additionalInfo: '',
    });
    setIsSubmitted(false);
    onClose();
  };

  // Strategic customized advice based on user inputs
  const getStrategicAdvice = () => {
    let diagnosis = '';
    let recommendation = '';
    let impact = '';

    switch (brief.status) {
      case 'none':
        diagnosis = "Launching a fresh presence is a blank canvas. Building trust from day one is your highest priority.";
        recommendation = "We recommend a highly structured narrative-driven home page featuring explicit benefit definitions, premium interactive typography, and a streamlined contact mechanism to convert first-time visitors.";
        impact = "+120% projected initial inquiry rate compared to template-built solutions.";
        break;
      case 'outdated':
        diagnosis = "An outdated website actively signals high friction and a lack of modern attention to detail, costing you up to 70% of potential leads.";
        recommendation = "We recommend a complete cosmetic and structural overhaul centered around 'Instrument Serif' display hierarchy, fluid micro-interactions, and premium glassmorphic visual cues to immediately reposition your authority.";
        impact = "Up to 3.5x reduction in customer bounce rate and immediate restoration of brand prestige.";
        break;
      case 'ineffective':
        diagnosis = "A website that doesn't convert is often suffering from a misalignment between its design language, visual proof, and key opportunities.";
        recommendation = "We recommend redesigning your site into an active 24/7 salesperson: restructuring user journeys around a singular, high-value CTA, implementing social proof systems, and optimizing loading performance to under 1.1s.";
        impact = "Average increase of 65% in quality qualified opportunities generated within 60 days.";
        break;
    }

    let goalFocus = '';
    switch (brief.goal) {
      case 'credibility':
        goalFocus = "Focus heavily on authority signals—editorial-grade case studies, strategic trust seals, and a focus on pristine spacing that mirrors elite high-end consultation.";
        break;
      case 'leads':
        goalFocus = "Focus heavily on friction reduction—streamlined interactive project builders, high-contrast CTA placements, and a clean value proposition that answers 'Why Trusevo / Your Brand' instantly.";
        break;
      case 'growth':
        goalFocus = "Focus heavily on architectural scalability—optimizing SEO landing architectures, highly readable service details, and clean business integrations to handle incoming growth effortlessly.";
        break;
      case 'design':
        goalFocus = "Focus heavily on artistic and cinematic presentation—fluid web canvas motion, large premium media containers, and a bespoke design language that sets you as the absolute industry benchmark.";
        break;
    }

    return { diagnosis, recommendation, impact, goalFocus };
  };

  const advice = getStrategicAdvice();

  return (
    <div id="project-brief-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#200E06]/85 backdrop-blur-xl animate-fade-in">
      <div 
        id="project-brief-modal" 
        className="relative w-full max-w-2xl bg-[#28140B] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFB9FA]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header */}
        <div className="flex justify-between items-center pb-5 border-b border-white/5 relative z-10">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#FFB9FA] uppercase font-body">Project Discovery</span>
            <h2 className="text-2xl font-normal text-white mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {isSubmitted ? 'Your Website Strategy Proposal' : 'Design Your 24/7 Salesperson'}
            </h2>
          </div>
          <button 
            id="close-modal-btn"
            onClick={resetForm}
            className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/70 hover:text-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        {!isSubmitted && (
          <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-4 relative z-10">
            <div 
              className="bg-[#FFB9FA] h-1 transition-all duration-500 ease-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Form Steps */}
        <div className="flex-1 overflow-y-auto py-6 relative z-10 pr-1">
          {step === 1 && (
            <div className="space-y-6 animate-fade-rise">
              <p className="text-sm text-gray-300 font-body">
                What is the primary strategic goal for your new digital experience? Select one to configure your salesperson:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'credibility', label: 'Establish Premium Credibility', desc: 'Build instant authority and look like the industry leader.', icon: Shield },
                  { id: 'leads', label: 'Attract Quality Opportunities', desc: 'Turn casual visitors into qualified business inquiries.', icon: Users },
                  { id: 'growth', label: 'Scale Business Operations', desc: 'Support active sales goals and open up new channels.', icon: TrendingUp },
                  { id: 'design', label: 'Bespoke Premium Design', desc: 'Stand out with custom layouts and cinematic typography.', icon: Compass },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = brief.goal === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleGoalSelect(item.id as ProjectGoal)}
                      className={`flex flex-col text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                        isSelected 
                          ? 'bg-[#FFB9FA]/10 border-[#FFB9FA] shadow-[0_0_15px_rgba(255,185,250,0.1)]' 
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 text-[#FFB9FA]">
                          <Check size={18} />
                        </div>
                      )}
                      <Icon className={`mb-3 ${isSelected ? 'text-[#FFB9FA]' : 'text-gray-400'}`} size={24} />
                      <span className="font-semibold text-white text-base mb-1 font-body">{item.label}</span>
                      <span className="text-xs text-gray-400 font-body">{item.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-rise">
              <p className="text-sm text-gray-300 font-body">
                What is the current status of your business’s website? This helps us diagnose the core issues:
              </p>

              <div className="space-y-3">
                {[
                  { id: 'none', label: "We do not have a website yet", desc: "Starting completely fresh, looking to enter the market with a premium impression." },
                  { id: 'outdated', label: "Our current website is outdated", desc: "The design doesn't reflect who we are today or look premium enough." },
                  { id: 'ineffective', label: "It exists, but fails to attract opportunities", desc: "We get visitors, but they rarely reach out or show genuine trust." },
                ].map((item) => {
                  const isSelected = brief.status === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleStatusSelect(item.id as WebsiteStatus)}
                      className={`flex items-start text-left p-5 w-full rounded-xl border transition-all duration-300 relative ${
                        isSelected 
                          ? 'bg-[#FFB9FA]/10 border-[#FFB9FA] shadow-[0_0_15px_rgba(255,185,250,0.1)]' 
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="mr-4 mt-0.5">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#FFB9FA] bg-[#FFB9FA]' : 'border-white/30'
                        }`}>
                          {isSelected && <Check size={12} className="text-[#200E06] stroke-[3]" />}
                        </div>
                      </div>
                      <div className="font-body">
                        <span className="block font-semibold text-white text-base mb-1">{item.label}</span>
                        <span className="block text-xs text-gray-400">{item.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-fade-rise">
              <p className="text-sm text-gray-300 font-body">
                Let’s tie your strategy together. Provide your details so we can compile your tactical outline:
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-body" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={brief.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Acme Corp"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#FFB9FA] focus:ring-1 focus:ring-[#FFB9FA] rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-body" htmlFor="email">
                    Your Professional Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={brief.email}
                    onChange={handleInputChange}
                    placeholder="e.g. you@company.com"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#FFB9FA] focus:ring-1 focus:ring-[#FFB9FA] rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-body" htmlFor="additionalInfo">
                    Additional Context / Specific Requirements (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    value={brief.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Tell us a bit about your services or target market..."
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#FFB9FA] focus:ring-1 focus:ring-[#FFB9FA] rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all font-body text-sm resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && isSubmitted && (
            <div className="space-y-6 animate-fade-rise font-body">
              <div className="bg-[#FFB9FA]/10 border border-[#FFB9FA]/20 rounded-xl p-5 flex items-start space-x-3">
                <Sparkles className="text-[#FFB9FA] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-white text-sm">Strategic Discovery Analysis Compiled</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Based on your objective to <strong>{brief.goal === 'credibility' ? 'Establish Premium Credibility' : brief.goal === 'leads' ? 'Attract Opportunities' : brief.goal === 'growth' ? 'Support Business Growth' : 'Implement Bespoke Design'}</strong> for <strong>{brief.companyName}</strong>.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase text-[#FFB9FA] tracking-wider block mb-1">Structural Diagnosis</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{advice.diagnosis}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase text-[#FFB9FA] tracking-wider block mb-1">Trusevo Direct Solution</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{advice.recommendation}</p>
                </div>

                <div className="border-l-2 border-[#FFB9FA]/40 pl-3 py-1 bg-white/[0.01]">
                  <span className="text-xs font-bold text-white tracking-wide block">Strategic Focus Area</span>
                  <p className="text-[#FFB9FA] text-xs leading-relaxed font-semibold mt-0.5">{advice.goalFocus}</p>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3 flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock size={14} className="text-[#FFB9FA]" />
                    <span>Projected Operational Lift:</span>
                  </div>
                  <span className="font-bold text-white text-right">{advice.impact}</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center pt-2">
                We have recorded this brief and will send a custom scheduling link to <strong>{brief.email}</strong> within 1 hour.
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
          {!isSubmitted ? (
            <>
              <button
                onClick={handleBack}
                className={`text-sm text-gray-400 hover:text-white transition-colors py-2 px-4 font-body ${
                  step === 1 ? 'opacity-0 pointer-events-none' : ''
                }`}
              >
                Back
              </button>

              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] flex items-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Analyzing...</span>
                ) : (
                  <>
                    <span>{step === 3 ? 'Generate Strategic Brief' : 'Next'}</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </>
          ) : (
            <div className="w-full flex justify-center">
              <button
                onClick={resetForm}
                className="liquid-glass rounded-full px-10 py-3 text-sm text-white hover:scale-[1.03]"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
