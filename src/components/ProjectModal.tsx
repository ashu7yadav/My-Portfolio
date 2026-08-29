import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, AlertTriangle } from 'lucide-react';
import type { Project } from '../types';
import { GitHubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-carbon/80 backdrop-blur-sm"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-cream border-3 border-carbon shadow-neo-xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="bg-carbon text-white px-4 sm:px-6 py-3.5 border-b-3 border-carbon flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-neon-lime bg-carbon border border-neon-lime px-2 py-0.5">
                PROJECT {project.number}
              </span>
              <span className="font-display font-bold text-sm tracking-wider uppercase truncate max-w-[200px] sm:max-w-md">
                {project.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 bg-white text-carbon hover:bg-neon-lime transition-colors border border-carbon shadow-[2px_2px_0px_#C7FF2F]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Top Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Image Preview (7 Cols) */}
              <div className="md:col-span-7 bg-white border-2 border-carbon p-2 shadow-neo">
                <div className="relative aspect-[16/9] overflow-hidden border border-carbon bg-carbon/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-carbon text-white font-mono text-[10px] font-bold px-2 py-0.5">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metrics Grid (5 Cols) */}
              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="font-mono text-xs font-bold text-muted-text uppercase">
                  // PERFORMANCE METRICS
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {project.details.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-white border-2 border-carbon p-3 shadow-neo-sm"
                    >
                      <div className="font-mono text-[10px] text-muted-text uppercase">
                        {metric.label}
                      </div>
                      <div className="font-display font-black text-xl text-carbon mt-1">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Action Links in Header */}
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-primary py-2.5 text-xs flex items-center justify-center gap-2"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>VIEW SOURCE ON GITHUB</span>
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn-secondary py-2.5 text-xs flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>OPEN LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border-2 border-carbon p-5 shadow-neo">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-coral uppercase mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  PROBLEM STATEMENT
                </div>
                <p className="font-sans text-sm text-carbon/90 leading-relaxed">
                  {project.details.problem}
                </p>
              </div>

              <div className="bg-white border-2 border-carbon p-5 shadow-neo">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-carbon uppercase mb-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-lime" />
                  ENGINEERING SOLUTION
                </div>
                <p className="font-sans text-sm text-carbon/90 leading-relaxed">
                  {project.details.solution}
                </p>
              </div>

            </div>

            {/* Architecture Pipeline Stages */}
            <div className="bg-white border-2 border-carbon p-6 shadow-neo">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-carbon uppercase mb-4 border-b-2 border-carbon pb-2">
                <Layers className="w-4 h-4 text-electric-blue" />
                SYSTEM ARCHITECTURE & PIPELINE
              </div>
              <div className="space-y-2.5">
                {project.details.architecture.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-cream border border-carbon"
                  >
                    <span className="font-mono text-xs font-bold bg-carbon text-neon-lime px-2 py-0.5 shrink-0">
                      STAGE 0{idx + 1}
                    </span>
                    <span className="font-sans text-sm text-carbon leading-snug">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights & Features Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border-2 border-carbon p-5 shadow-neo">
                <div className="font-display font-bold text-sm text-carbon uppercase mb-3 border-b border-carbon/20 pb-2">
                  // CORE FEATURES
                </div>
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-carbon">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-lime border border-carbon shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-carbon p-5 shadow-neo">
                <div className="font-display font-bold text-sm text-carbon uppercase mb-3 border-b border-carbon/20 pb-2">
                  // TECHNICAL HIGHLIGHTS
                </div>
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-carbon">
                  {project.details.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-coral font-bold shrink-0">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Complete Tech Stack */}
            <div className="pt-2">
              <div className="font-mono text-xs font-bold text-muted-text uppercase mb-2">
                // COMPLETE TECH STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-bold px-3 py-1 bg-white border-2 border-carbon text-carbon shadow-[2px_2px_0px_#11110F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Bar */}
          <div className="bg-cream border-t-3 border-carbon p-4 px-6 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="font-mono text-xs text-muted-text">
              ASHUTOSH YADAV // AI-ML WORKSPACE
            </div>
            <button
              onClick={onClose}
              className="neo-btn-primary py-2 px-6 text-xs uppercase"
            >
              CLOSE WINDOW
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
