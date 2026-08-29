import React from 'react';
import { ArrowUp, Terminal, FileDown } from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';

interface FooterProps {
  onDownloadResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadResume }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer className="bg-carbon text-white border-t-3 border-carbon pt-14 pb-10 relative overflow-hidden">
      
      {/* Background Subtle Tech Watermark */}
      <div className="absolute -bottom-10 right-4 font-display font-black text-9xl text-white/5 select-none pointer-events-none">
        AY.DEV
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-white/20 items-start">
          
          {/* Brand Column (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-neon-lime border-2 border-white flex items-center justify-center shadow-[3px_3px_0px_#FFFFFF]">
                <span className="font-display font-black text-carbon text-2xl">
                  AY
                </span>
              </div>
              <div>
                <h3 className="font-display font-black text-2xl tracking-tight text-white uppercase">
                  {personalInfo.name}
                </h3>
                <p className="font-mono text-xs text-neon-lime uppercase tracking-widest">
                  AI/ML ENGINEER & PYTHON DEVELOPER
                </p>
              </div>
            </div>

            <p className="font-sans text-sm text-white/80 max-w-sm leading-relaxed mt-2">
              Engineering practical artificial intelligence systems, predictive machine learning pipelines, and intelligent web applications.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <Terminal className="w-3.5 h-3.5 text-neon-lime" />
              <span>SR GROUP OF INSTITUTIONS (SRIMT) // LUCKNOW</span>
            </div>
          </div>

          {/* Quick Navigation Links (4 Cols) */}
          <div className="md:col-span-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-neon-lime mb-4">
              // SITEMAP NAVIGATION
            </div>
            <div className="grid grid-cols-2 gap-2 font-display text-sm font-bold uppercase">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white/80 hover:text-neon-lime hover:translate-x-1 transition-all py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Resume (3 Cols) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-neon-lime mb-1">
              // CONNECT
            </div>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold uppercase text-white/90 hover:text-neon-lime flex items-center justify-between p-2 border border-white/20 hover:border-neon-lime bg-white/5 transition-all"
                >
                  <span>{social.name}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              onClick={onDownloadResume}
              className="mt-2 bg-neon-lime text-carbon font-display font-bold text-xs uppercase p-3 border border-white shadow-[2px_2px_0px_#FFFFFF] hover:bg-white flex items-center justify-center gap-2 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React, TypeScript & Tailwind</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-neon-lime text-carbon border-2 border-white shadow-[2px_2px_0px_#FFFFFF] hover:-translate-y-1 transition-all flex items-center gap-1.5 font-bold"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="font-display text-xs uppercase">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
