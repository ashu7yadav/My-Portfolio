import React, { useState } from 'react';
import {
  UserCheck,
  MapPin,
  Terminal,
  Copy,
  Check,
  Cpu,
  Layers,
  Zap,
  Sliders,
  Languages,
} from 'lucide-react';

import { quickProfile, personalInfo, spokenLanguages } from '../data/portfolioData';

interface AboutProps {
  onShowToast?: (type: 'success' | 'info' | 'warning', title: string, message: string) => void;
}

export const About: React.FC<AboutProps> = ({ onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'dna' | 'terminal'>('bio');
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [imageFilter, setImageFilter] = useState<'normal' | 'vibrant' | 'mono'>('normal');

  const handleCopyPitch = () => {
    const pitch =
      "Ashutosh Yadav — B.Tech CSE (AI/ML) student at SR Group of Institutions and AI/ML Engineer with internship experience at MNNIT Allahabad, specializing in Machine Learning, Python, Flutter, and Full-Stack Development.";
    navigator.clipboard.writeText(pitch);
    setCopiedPitch(true);
    if (onShowToast) {
      onShowToast('success', 'ELEVATOR PITCH COPIED', 'Summary copied to clipboard!');
    }
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  const getImageFilterClass = () => {
    switch (imageFilter) {
      case 'vibrant':
        return 'contrast-125 saturate-125';
      case 'mono':
        return 'grayscale contrast-125';
      default:
        return 'contrast-105';
    }
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream relative overflow-hidden"
    >
      {/* Background Subtle Coordinate Markings */}
      <div className="absolute top-10 right-8 font-mono text-xs text-carbon/25 hidden md:block">
        // SECTION: 01_ABOUT_PROFILE_AND_PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-coral text-white font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
              <span>ABOUT // 01</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-carbon relative inline-block">
              ABOUT ME
              <span className="block h-2 bg-coral mt-1.5 w-28 sm:w-40 border-b-2 border-carbon"></span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-muted-text mt-3 uppercase tracking-wider">
              B.TECH CSE (AI/ML) STUDENT &amp; APPLIED AI DEVELOPER
            </p>
          </div>

          {/* Quick Pitch Copy Button */}
          <button
            onClick={handleCopyPitch}
            className="neo-btn-secondary py-2.5 px-4 text-xs flex items-center gap-2 self-start md:self-auto"
            title="Copy recruiter one-liner elevator pitch"
          >
            {copiedPitch ? <Check className="w-4 h-4 text-carbon stroke-[3]" /> : <Copy className="w-4 h-4" />}
            <span>{copiedPitch ? 'PITCH COPIED!' : 'COPY ELEVATOR PITCH'}</span>
          </button>
        </div>

        {/* Main Grid: Comprehensive Editorial & Philosophy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main Column: Editorial Bio Card with Integrated Image & Tabs (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            <div className="bg-white border-3 border-carbon p-6 sm:p-8 shadow-neo-lg relative">
              
              {/* Card Label Bar */}
              <div className="flex flex-wrap items-center justify-between border-b-2 border-carbon pb-4 mb-6 gap-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-coral" />
                  <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-carbon">
                    BIOGRAPHY &amp; ENGINEERING BACKGROUND
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs bg-neon-lime px-2.5 py-1 border border-carbon font-bold shadow-[1px_1px_0px_#11110F]">
                    SR GROUP OF INSTITUTIONS
                  </span>
                </div>
              </div>

              {/* Advanced Image & Content Editorial Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
                
                {/* Embedded Portrait Frame (5 Cols) */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  <div className="relative bg-white border-3 border-carbon p-2 shadow-neo group">
                    
                    {/* Header Bar */}
                    <div className="flex items-center justify-between bg-carbon text-white px-2 py-1 border border-carbon mb-1.5">
                      <span className="font-mono text-[10px] text-neon-lime font-bold truncate">
                        ASHUTOSH_PORTRAIT.JPG
                      </span>
                      <span className="w-2 h-2 rounded-full bg-neon-lime"></span>
                    </div>

                    {/* Image Container with Custom Filter & Frame */}
                    <div className="relative aspect-[3/4.2] overflow-hidden border-2 border-carbon bg-cream">
                      <img
                        src="/assets/about_portrait.jpg"
                        alt="Ashutosh Yadav - AI/ML Engineer in field"
                        className={`w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-300 ${getImageFilterClass()}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/profile.jpg';
                        }}
                      />

                      {/* Technical Corner Target Crosshairs */}
                      <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-white pointer-events-none" />
                      <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-white pointer-events-none" />
                      <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-white pointer-events-none" />
                      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-white pointer-events-none" />

                      {/* Overlay Tag */}
                      <div className="absolute bottom-2 left-2 bg-carbon text-white font-mono text-[9px] font-bold px-2 py-0.5 border border-white">
                        AI/ML SPECIALIST
                      </div>
                    </div>

                    {/* Quick Filter Control Buttons */}
                    <div className="mt-2 flex items-center justify-between pt-1 border-t border-carbon/20">
                      <span className="font-mono text-[9px] text-muted-text font-bold uppercase flex items-center gap-1">
                        <Sliders className="w-2.5 h-2.5" /> LENS:
                      </span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setImageFilter('normal')}
                          className={`font-mono text-[9px] px-1.5 py-0.5 border ${
                            imageFilter === 'normal'
                              ? 'bg-carbon text-white font-bold'
                              : 'bg-cream text-carbon hover:bg-white'
                          }`}
                        >
                          ORIGINAL
                        </button>
                        <button
                          onClick={() => setImageFilter('vibrant')}
                          className={`font-mono text-[9px] px-1.5 py-0.5 border ${
                            imageFilter === 'vibrant'
                              ? 'bg-neon-lime text-carbon font-bold'
                              : 'bg-cream text-carbon hover:bg-white'
                          }`}
                        >
                          VIBRANT
                        </button>
                        <button
                          onClick={() => setImageFilter('mono')}
                          className={`font-mono text-[9px] px-1.5 py-0.5 border ${
                            imageFilter === 'mono'
                              ? 'bg-coral text-white font-bold'
                              : 'bg-cream text-carbon hover:bg-white'
                          }`}
                        >
                          MONO
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center font-mono text-[10px] text-muted-text">
                    📍 Lucknow, Uttar Pradesh • Class of 2028
                  </div>
                </div>

                {/* Perspective View Selector & Dynamic Content (7 Cols) */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  
                  {/* Perspective Toggle Tabs */}
                  <div className="flex flex-wrap gap-1.5 mb-4 p-1 bg-cream border-2 border-carbon">
                    <button
                      onClick={() => setActiveTab('bio')}
                      className={`font-display text-xs font-bold uppercase px-3 py-1.5 border transition-all ${
                        activeTab === 'bio'
                          ? 'bg-carbon text-neon-lime border-carbon shadow-[2px_2px_0px_#C7FF2F]'
                          : 'bg-white text-carbon border-carbon hover:bg-cream'
                      }`}
                    >
                      [01] BIOGRAPHY
                    </button>
                    <button
                      onClick={() => setActiveTab('dna')}
                      className={`font-display text-xs font-bold uppercase px-3 py-1.5 border transition-all ${
                        activeTab === 'dna'
                          ? 'bg-carbon text-neon-lime border-carbon shadow-[2px_2px_0px_#C7FF2F]'
                          : 'bg-white text-carbon border-carbon hover:bg-cream'
                      }`}
                    >
                      [02] CORE DNA
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`font-display text-xs font-bold uppercase px-3 py-1.5 border transition-all ${
                        activeTab === 'terminal'
                          ? 'bg-carbon text-neon-lime border-carbon shadow-[2px_2px_0px_#C7FF2F]'
                          : 'bg-white text-carbon border-carbon hover:bg-cream'
                      }`}
                    >
                      [03] CLI ETHOS
                    </button>
                  </div>

                  {/* Tab 1: Biography */}
                  {activeTab === 'bio' && (
                    <div className="space-y-3.5 font-sans text-sm sm:text-base text-carbon leading-relaxed animate-fadeIn">
                      <p className="bg-white/90 p-3.5 border-l-4 border-neon-lime shadow-[2px_2px_0px_#11110F]">
                        I am a passionate <strong className="font-extrabold text-carbon">B.Tech Computer Science Engineering student</strong> specializing in <strong className="bg-neon-lime px-1 border border-carbon">Artificial Intelligence &amp; Machine Learning</strong> at SR Group of Institutions (Expected Graduation: 2028). I have hands-on experience in <strong className="text-carbon font-bold">Machine Learning, Python, Flutter, and Full-Stack Development</strong>.
                      </p>

                      <p className="bg-cream p-3.5 border border-carbon shadow-[2px_2px_0px_#11110F]">
                        I completed an <strong className="text-coral font-bold">AI &amp; Machine Learning internship at MNNIT Allahabad</strong>, where I worked on real-world AI applications, including a <strong className="underline decoration-coral decoration-2">Loan Approval Prediction System</strong> with XGBoost, Flask, SQLite, and Google Cloud Run.
                      </p>

                      <p className="text-carbon/90 text-sm">
                        My primary technical interests include <strong className="text-carbon font-semibold">Generative AI, Data Science, Mobile App Development (Flutter), and Software Engineering</strong>.
                      </p>
                    </div>
                  )}

                  {/* Tab 2: Engineering DNA */}
                  {activeTab === 'dna' && (
                    <div className="space-y-2.5 font-sans text-xs sm:text-sm text-carbon animate-fadeIn">
                      <div className="p-2.5 bg-cream border border-carbon flex items-start gap-2.5 shadow-[2px_2px_0px_#11110F]">
                        <Zap className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold font-display uppercase block">Applied AI &amp; Machine Learning</span>
                          <span className="text-carbon/85">Developing robust XGBoost &amp; Scikit-learn pipelines with missing value imputation, feature scaling, and ROC-AUC evaluation.</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-cream border border-carbon flex items-start gap-2.5 shadow-[2px_2px_0px_#11110F]">
                        <Cpu className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold font-display uppercase block">Mobile &amp; Full-Stack Intelligence</span>
                          <span className="text-carbon/85">Combining cross-platform Flutter/Dart mobile apps with on-device OCR APIs and Flask REST backends.</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-cream border border-carbon flex items-start gap-2.5 shadow-[2px_2px_0px_#11110F]">
                        <Layers className="w-4 h-4 text-carbon shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold font-display uppercase block">Cloud Deployment Rigour</span>
                          <span className="text-carbon/85">Deploying containerized microservices to Google Cloud Run with structured SQLite/Firestore databases.</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: CLI Ethos Terminal */}
                  {activeTab === 'terminal' && (
                    <div className="bg-carbon text-white p-3.5 border-2 border-carbon font-mono text-xs space-y-1.5 shadow-[3px_3px_0px_#C7FF2F] animate-fadeIn">
                      <div className="text-neon-lime font-bold">
                        ashutosh@ai-lab:~$ python -m profile.status
                      </div>
                      <div className="text-white/80">
                        [✓] Initializing AI &amp; ML Engineering Profile...
                      </div>
                      <div className="text-coral">
                        &gt; Focus: Python • AI/ML • Full-Stack • Flutter • GenAI
                      </div>
                      <div className="text-white/90">
                        &gt; Internship: MNNIT Allahabad (Innovation &amp; Incubation Hub)
                      </div>
                      <div className="text-neon-lime">
                        &gt; Education: SR Group of Institutions (2024-2028)
                      </div>
                      <div className="text-white/50 text-[10px] pt-1">
                        Exit code: 0 (SYSTEM READY)
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Bottom Principle Quote Box */}
              <div className="pt-4 border-t-2 border-carbon bg-cream p-4 border border-dashed border-carbon">
                <div className="font-mono text-xs text-muted-text uppercase mb-1 flex items-center justify-between">
                  <span>// ENGINEERING PRINCIPLE</span>
                  <span className="text-carbon font-bold">LUCKNOW, INDIA</span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-carbon">
                  "{personalInfo.heroBio}"
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border-2 border-carbon p-3 shadow-neo-sm text-center"
                >
                  <div className="font-mono text-[10px] text-muted-text uppercase">
                    {stat.label}
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-carbon mt-1">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Structured Quick Profile Card & Languages (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Profile Card */}
            <div className="bg-white border-3 border-carbon p-6 shadow-neo-lg">
              
              {/* Header */}
              <div className="bg-carbon text-white p-3 border-2 border-carbon mb-5 flex items-center justify-between">
                <span className="font-display font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-neon-lime" />
                  QUICK PROFILE
                </span>
                <span className="font-mono text-xs text-neon-lime">ACTIVE</span>
              </div>

              {/* Focus Areas Section */}
              <div className="mb-5">
                <div className="font-mono text-xs font-bold text-muted-text uppercase tracking-wider mb-2.5">
                  // FOCUS DOMAINS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickProfile.focusAreas.map((area, idx) => (
                    <span
                      key={area}
                      className={`font-mono text-xs font-bold uppercase px-2.5 py-1 border border-carbon shadow-[1px_1px_0px_#11110F] ${
                        idx === 0
                          ? 'bg-neon-lime text-carbon'
                          : idx === 1
                          ? 'bg-coral text-white'
                          : idx === 2
                          ? 'bg-electric-blue text-white'
                          : idx === 3
                          ? 'bg-white text-carbon'
                          : 'bg-cream text-carbon'
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured Metadata Rows */}
              <div className="space-y-2.5 pt-4 border-t-2 border-carbon">
                {quickProfile.details.map((item) => (
                  <div
                    key={item.label}
                    className="p-2.5 bg-cream/60 border border-carbon flex flex-col justify-between gap-1"
                  >
                    <span className="font-mono text-[10px] font-bold text-muted-text uppercase tracking-wider">
                      {item.label}:
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-carbon">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Location Badge */}
              <div className="mt-5 p-3.5 bg-neon-lime border-2 border-carbon shadow-neo-sm flex items-center gap-3">
                <div className="p-2 bg-carbon text-white">
                  <MapPin className="w-4 h-4 text-neon-lime" />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold text-carbon uppercase">
                    LOCATION
                  </div>
                  <div className="font-display font-bold text-sm text-carbon">
                    Lucknow, Uttar Pradesh, India
                  </div>
                </div>
              </div>

            </div>

            {/* Spoken Languages Card */}
            <div className="bg-white border-3 border-carbon p-6 shadow-neo-lg">
              <div className="bg-carbon text-white p-3 border-2 border-carbon mb-4 flex items-center justify-between">
                <span className="font-display font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                  <Languages className="w-4 h-4 text-coral" />
                  LANGUAGES SPOKEN
                </span>
                <span className="font-mono text-xs text-neon-lime">LINGUISTIC</span>
              </div>

              <div className="space-y-3">
                {spokenLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 bg-cream border-2 border-carbon flex items-center justify-between shadow-[2px_2px_0px_#11110F]"
                  >
                    <div>
                      <div className="font-display font-extrabold text-base uppercase text-carbon">
                        {lang.name}
                      </div>
                      <div className="font-mono text-xs text-muted-text">
                        {lang.proficiency}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase px-2.5 py-1 bg-neon-lime text-carbon border border-carbon shadow-[1px_1px_0px_#11110F]">
                      {lang.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
