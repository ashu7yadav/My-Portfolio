import React from 'react';
import { Mail, Cpu, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './Icons';

interface SocialBarProps {
  onCopyEmail?: () => void;
}

export const SocialBar: React.FC<SocialBarProps> = () => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'whatsapp':
        return <WhatsAppIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedInIcon className="w-5 h-5" />;
      case 'github':
        return <GitHubIcon className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'kaggle':
        return <Cpu className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-mono font-bold text-xs uppercase tracking-widest text-carbon bg-white border border-carbon px-2.5 py-1.5 shadow-[2px_2px_0px_#11110F]">
        CONNECT //
      </span>

      {socialLinks.map((social) => {
        const isEmail = social.name.toLowerCase() === 'email';

        return (
          <a
            key={social.name}
            href={social.url}
            target={isEmail ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={`group flex items-center gap-2 bg-white text-carbon border-2 border-carbon px-3.5 py-2 font-mono text-xs font-bold uppercase shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg ${
              social.name.toLowerCase() === 'whatsapp'
                ? 'hover:bg-neon-lime'
                : social.name.toLowerCase() === 'linkedin'
                ? 'hover:bg-electric-blue hover:text-white'
                : social.name.toLowerCase() === 'github'
                ? 'hover:bg-carbon hover:text-white'
                : 'hover:bg-coral hover:text-white'
            } active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm transition-all`}
            aria-label={social.label}
          >
            <span className="transition-transform group-hover:scale-110">
              {getIcon(social.name)}
            </span>
            <span className="hidden sm:inline">{social.name}</span>
          </a>
        );
      })}
    </div>
  );
};
