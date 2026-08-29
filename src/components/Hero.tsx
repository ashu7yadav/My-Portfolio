import React from 'react';
import { ArrowRight, FileDown, Mail, Terminal, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SocialBar } from './SocialBar';

interface HeroProps {
  onDownloadResume: () => void;
  onCopyEmail?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume, onCopyEmail }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b-3 border-carbon bg-cream bg-grid-pattern overflow-hidden"
    >
      {/* Background Decorative Crosshairs & Plus Signs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-carbon/30 select-none hidden md:block">
        + LOC: 26.8467°N // 80.9462°E
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-carbon/30 select-none hidden md:block">
        [ SYSTEM // READY ]
      </div>
      <div className="absolute bottom-10 left-12 font-mono text-lg text-carbon/20 select-none hidden lg:block">
        + + + +
      </div>
      <div className="absolute bottom-20 right-16 font-mono text-lg text-carbon/20 select-none hidden lg:block">
        ✦ ✦ ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border-2 border-carbon px-3.5 py-1.5 shadow-neo-sm mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-lime border border-carbon"></span>
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-carbon">
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Oversized Bold Typography: ASHUTOSH YADAV */}
            <div className="relative mb-3">
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl xl:text-8xl text-carbon tracking-tight leading-[0.9] uppercase select-none">
                <span className="block">ASHUTOSH</span>
                <span className="block text-carbon relative">
                  YADAV
                  <span className="absolute -bottom-2 left-0 w-32 sm:w-48 h-3 bg-neon-lime -z-10 transform -rotate-1 border-y-2 border-carbon"></span>
                </span>
              </h1>
            </div>

            {/* Sub-Roles / Degree Banner */}
            <div className="flex flex-wrap items-center gap-2.5 my-4">
              <div className="bg-carbon text-white font-mono text-xs sm:text-sm font-bold uppercase px-3 py-1.5 border-2 border-carbon shadow-[2px_2px_0px_#C7FF2F]">
                AI/ML ENGINEER
              </div>
              <div className="bg-neon-lime text-carbon font-mono text-xs sm:text-sm font-bold uppercase px-3 py-1.5 border-2 border-carbon shadow-[2px_2px_0px_#11110F]">
                B.TECH CSE (AI/ML)
              </div>
              <div className="bg-white text-carbon font-mono text-xs sm:text-sm font-bold uppercase px-3 py-1.5 border-2 border-carbon shadow-[2px_2px_0px_#FF5964] hidden sm:flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                LUCKNOW, INDIA
              </div>
            </div>

            {/* Hero Skill Pill Badges */}
            <div className="flex flex-wrap gap-2 my-3">
              {personalInfo.heroTags.map((tag, idx) => (
                <span
                  key={tag}
                  className={`font-mono text-xs font-bold uppercase px-2.5 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] ${
                    idx === 0
                      ? 'bg-neon-lime'
                      : idx === 1
                      ? 'bg-white'
                      : idx === 2
                      ? 'bg-coral text-white'
                      : idx === 3
                      ? 'bg-electric-blue text-white'
                      : 'bg-cream'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero Description */}
            <p className="font-sans text-base sm:text-lg text-carbon/90 font-medium leading-relaxed my-4 max-w-2xl bg-white/70 border-l-4 border-carbon p-3.5 backdrop-blur-sm shadow-[3px_3px_0px_#11110F]">
              "{personalInfo.heroBio}"
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap gap-3.5 my-5 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="neo-btn-primary flex-1 sm:flex-none flex items-center justify-center gap-2 group text-sm"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                onClick={onDownloadResume}
                className="neo-btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="neo-btn-outline flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>CONTACT ME</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="mt-4 pt-4 border-t-2 border-carbon/20 w-full">
              <SocialBar onCopyEmail={onCopyEmail} />
            </div>

          </div>

          {/* Right Column: Editorial Photo Frame & Technical Metadata (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Offset Geometric Shadow Box */}
              <div className="absolute inset-0 bg-neon-lime border-3 border-carbon translate-x-4 translate-y-4 -z-10 shadow-[4px_4px_0px_#11110F]" />

              {/* Main Profile Card Frame */}
              <div className="relative bg-white border-3 border-carbon p-3 sm:p-4 shadow-neo-lg">
                
                {/* Editorial Top Window Header */}
                <div className="flex items-center justify-between bg-carbon text-white px-3 py-2 border-2 border-carbon mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-coral border border-black inline-block"></span>
                    <span className="w-3 h-3 bg-neon-lime border border-black inline-block"></span>
                    <span className="w-3 h-3 bg-electric-blue border border-black inline-block"></span>
                  </div>
                  <span className="font-mono text-xs tracking-wider text-neon-lime font-bold">
                    ASHUTOSH_PROFILE.JPG
                  </span>
                  <Terminal className="w-4 h-4 text-neon-lime" />
                </div>

                {/* Profile Image Viewport */}
                <div className="relative overflow-hidden border-2 border-carbon bg-cream aspect-[4/4.8] group">
                  <img
                    src={personalInfo.profileImage}
                    alt="Ashutosh Yadav - AI/ML Engineer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Graceful fallback to SVG if JPG is not present
                      (e.target as HTMLImageElement).src = personalInfo.avatarSvg;
                    }}
                  />

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-carbon pointer-events-none" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-carbon pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-carbon pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-carbon pointer-events-none" />

                  {/* Editorial Tag Overlay */}
                  <div className="absolute bottom-3 left-3 bg-carbon text-white font-mono text-[11px] font-bold px-2.5 py-1 border border-white">
                    ROLE: AI/ML ENGINEER
                  </div>
                </div>

                {/* Card Sub-Stickers */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="bg-cream border-2 border-carbon p-2 text-center">
                    <span className="block font-mono text-[10px] text-muted-text uppercase">SPECIALIZATION</span>
                    <span className="block font-display font-bold text-xs uppercase text-carbon">AI & MACHINE LEARNING</span>
                  </div>
                  <div className="bg-neon-lime border-2 border-carbon p-2 text-center">
                    <span className="block font-mono text-[10px] text-carbon uppercase font-semibold">LOCATION</span>
                    <span className="block font-display font-bold text-xs uppercase text-carbon">LUCKNOW, UP (IN)</span>
                  </div>
                </div>

                {/* Technical Coordinates Stamp */}
                <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-muted-text px-1">
                  <span>DEV_ID: AY-2026</span>
                  <span className="text-carbon font-bold">SR GROUP // SRIMT</span>
                </div>
              </div>

              {/* Floating Decorative Neo-Badge */}
              <div className="absolute -bottom-4 -left-4 bg-coral text-white font-display font-black text-xs uppercase px-3.5 py-1.5 border-2 border-carbon shadow-[3px_3px_0px_#11110F] rotate-[-3deg] hidden sm:block">
                PYTHON + AI/ML ⚡
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
