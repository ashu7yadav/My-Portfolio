import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Cpu, Database, BookOpen, Cloud } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'LANGUAGES':
        return <Code2 className="w-5 h-5" />;
      case 'AI & MACHINE LEARNING':
        return <Cpu className="w-5 h-5" />;
      case 'FRAMEWORKS & DATABASES':
        return <Database className="w-5 h-5" />;
      case 'DEVELOPMENT & CLOUD':
        return <Cloud className="w-5 h-5" />;
      case 'COURSEWORK':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'ADVANCED':
        return 'bg-neon-lime text-carbon';
      case 'INTERMEDIATE':
        return 'bg-electric-blue text-white';
      case 'LEARNING':
        return 'bg-coral text-white';
      default:
        return 'bg-white text-carbon';
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream bg-dots-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-neon-lime text-carbon font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
            <span>SKILLS // 05</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-carbon">
            TECH STACK &amp; SKILLS
          </h2>
          <p className="font-sans text-base sm:text-lg text-carbon/80 max-w-xl mt-2 font-medium">
            Categorized technical capabilities and engineering tooling with verified proficiency levels.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white border-3 border-carbon p-6 shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b-2 border-carbon pb-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-carbon text-neon-lime">
                      {getCategoryIcon(cat.title)}
                    </div>
                    <h3 className="font-display font-black text-lg uppercase tracking-tight text-carbon">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-text font-bold">
                    [0{idx + 1}]
                  </span>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between gap-2 p-2 bg-cream border-2 border-carbon w-full shadow-[2px_2px_0px_#11110F] hover:bg-white transition-colors"
                    >
                      <span className="font-display font-bold text-sm uppercase text-carbon">
                        {skill.name}
                      </span>
                      <span
                        className={`font-mono text-[10px] font-bold uppercase px-2 py-0.5 border border-carbon shadow-[1px_1px_0px_#11110F] ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-carbon/20 font-mono text-[11px] text-muted-text text-right uppercase">
                {cat.skills.length} VERIFIED TECHNOLOGIES
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
