import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onDownloadResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for sticky shadow & active link detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b-2 md:border-b-3 border-carbon ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_4px_0_0_#11110F]'
          : 'bg-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: AY Logo in Black Square */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 select-none"
          aria-label="Ashutosh Yadav Home"
        >
          <div className="w-12 h-12 bg-carbon border-2 border-carbon flex items-center justify-center shadow-[3px_3px_0px_#C7FF2F] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            <span className="font-display font-extrabold text-neon-lime text-xl tracking-tighter">
              AY
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase leading-none">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest mt-1">
              AI/ML ENGINEER
            </span>
          </div>
        </a>

        {/* Center/Right: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-display text-xs xl:text-sm font-bold tracking-wider px-3 py-2 border-2 transition-all duration-150 ${
                  isActive
                    ? 'bg-neon-lime text-carbon border-carbon shadow-[3px_3px_0px_#11110F] -translate-y-0.5'
                    : 'border-transparent hover:border-carbon hover:bg-white hover:shadow-[2px_2px_0px_#11110F] text-carbon'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button on Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            onClick={() => onDownloadResume && onDownloadResume()}
            className="neo-btn-secondary py-2 px-4 text-xs flex items-center gap-1.5"
            title="Download Ashutosh Yadav's Resume"
          >
            <FileDown className="w-4 h-4" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 bg-white border-2 border-carbon shadow-[3px_3px_0px_#11110F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full Screen / Slide Down Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-cream/98 backdrop-blur-lg border-t-2 border-carbon z-50 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs text-muted-text uppercase tracking-widest mb-2 px-2">
              // NAVIGATION DIRECTORY
            </div>
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between p-3.5 border-2 border-carbon font-display text-base font-bold tracking-wider transition-all ${
                    isActive
                      ? 'bg-neon-lime shadow-[4px_4px_0px_#11110F]'
                      : 'bg-white shadow-[2px_2px_0px_#11110F]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-text">
                      0{index + 1}
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <div className="pt-6 mt-4 border-t-2 border-carbon/20 flex flex-col gap-3">
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              onClick={() => {
                setIsOpen(false);
                if (onDownloadResume) onDownloadResume();
              }}
              className="neo-btn-secondary w-full py-3.5 flex items-center justify-center gap-2 text-sm"
            >
              <FileDown className="w-5 h-5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            <div className="text-center font-mono text-[11px] text-muted-text pt-2">
              LUCKNOW, UP, INDIA • AY // PORTFOLIO
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
