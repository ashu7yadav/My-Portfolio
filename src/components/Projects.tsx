import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types';
import { Filter, FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = ['ALL', 'AI / ML', 'FINTECH', 'MOBILE / FLUTTER'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI / ML') {
      return (
        project.category.includes('AI') ||
        project.category.includes('MACHINE LEARNING') ||
        project.techStack.includes('Scikit-learn') ||
        project.techStack.includes('XGBoost')
      );
    }
    if (activeFilter === 'FINTECH') {
      return project.category.includes('FINTECH') || project.categoryTags.includes('FINTECH');
    }
    if (activeFilter === 'MOBILE / FLUTTER') {
      return project.category.includes('MOBILE') || project.category.includes('FLUTTER') || project.techStack.includes('Flutter');
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream bg-grid-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-coral text-white font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SELECTED WORK // 03</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-carbon">
              FEATURED PROJECTS
            </h2>
            <p className="font-sans text-base sm:text-lg text-carbon/80 max-w-xl mt-2 font-medium">
              Real-world Machine Learning, Python, Flutter, and full-stack software applications I've developed.
            </p>
          </div>

          {/* Project Counter Badge */}
          <div className="bg-white border-2 border-carbon px-4 py-2 shadow-neo-sm self-start md:self-auto font-mono text-xs font-bold">
            SHOWING: <span className="text-coral">{filteredProjects.length}</span> / {projectsData.length} PROJECTS
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b-2 border-carbon/20">
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs font-bold text-muted-text mr-2 py-2">
            <Filter className="w-3.5 h-3.5" />
            FILTER:
          </div>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`font-display text-xs font-bold tracking-wider uppercase px-4 py-2 border-2 transition-all duration-150 ${
                activeFilter === tab
                  ? 'bg-neon-lime text-carbon border-carbon shadow-[3px_3px_0px_#11110F] -translate-y-0.5'
                  : 'bg-white text-carbon border-carbon hover:bg-cream hover:shadow-[2px_2px_0px_#11110F]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Open Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
