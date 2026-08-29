import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Project } from '../types';
import { GitHubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'coral':
        return {
          headerBg: 'bg-coral text-white',
          tagBg: 'bg-coral text-white',
          shadowHover: 'hover:shadow-[8px_8px_0px_#FF5964]',
          accentText: 'text-coral',
        };
      case 'blue':
        return {
          headerBg: 'bg-electric-blue text-white',
          tagBg: 'bg-electric-blue text-white',
          shadowHover: 'hover:shadow-[8px_8px_0px_#4F63FF]',
          accentText: 'text-electric-blue',
        };
      case 'lime':
        return {
          headerBg: 'bg-neon-lime text-carbon',
          tagBg: 'bg-neon-lime text-carbon',
          shadowHover: 'hover:shadow-[8px_8px_0px_#C7FF2F]',
          accentText: 'text-carbon',
        };
      default:
        return {
          headerBg: 'bg-carbon text-white',
          tagBg: 'bg-carbon text-white',
          shadowHover: 'hover:shadow-neo-lg',
          accentText: 'text-carbon',
        };
    }
  };

  const theme = getThemeClasses(project.badgeTheme);

  return (
    <div className="group relative bg-white border-3 border-carbon shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 flex flex-col justify-between overflow-hidden">
      
      {/* Top Banner with Project Index and Category */}
      <div className="flex items-center justify-between border-b-3 border-carbon bg-cream p-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-black bg-carbon text-white px-2 py-0.5 border border-carbon">
            #{project.number}
          </span>
          <span className="font-mono text-[11px] font-bold text-muted-text uppercase tracking-wider truncate max-w-[200px]">
            {project.category}
          </span>
        </div>
        <div className="w-3 h-3 rounded-full border border-carbon bg-neon-lime"></div>
      </div>

      {/* Image Preview with Hover Zoom & Watermark */}
      <div className="relative aspect-[16/9] border-b-3 border-carbon bg-carbon/5 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Giant Watermark Number */}
        <div className="absolute -bottom-4 -right-2 font-display font-black text-8xl text-carbon/10 select-none pointer-events-none group-hover:text-carbon/20 transition-colors">
          {project.number}
        </div>

        {/* Category Pill on Image */}
        <div className="absolute top-3 left-3">
          <span className={`font-mono text-[10px] font-bold uppercase px-2.5 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] ${theme.tagBg}`}>
            {project.categoryTags[0] || 'AI / ML'}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-carbon mb-3 group-hover:text-coral transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-sm text-carbon/85 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="mb-5 bg-cream/70 border border-carbon p-3">
            <div className="font-mono text-[10px] text-muted-text uppercase font-bold tracking-wider mb-2">
              // KEY HIGHLIGHTS
            </div>
            <ul className="space-y-1.5 font-sans text-xs text-carbon">
              {project.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-carbon shrink-0"></span>
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <div className="pt-2 border-t border-carbon/20 mb-4">
            <div className="font-mono text-[10px] text-muted-text uppercase font-bold tracking-wider mb-2">
              // TECH STACK
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] font-semibold px-2 py-0.5 bg-white border border-carbon text-carbon shadow-[1px_1px_0px_#11110F]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t-2 border-carbon">
            <button
              onClick={() => onOpenDetails(project)}
              className="neo-btn-primary py-2.5 px-3 text-xs flex items-center justify-center gap-1.5 group/btn"
            >
              <span>VIEW DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn-outline flex-1 py-2.5 px-2 text-xs flex items-center justify-center"
                title="View GitHub Repository"
                aria-label={`GitHub source for ${project.title}`}
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-secondary flex-1 py-2.5 px-2 text-xs flex items-center justify-center"
                  title="View Live Demo"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
