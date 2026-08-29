import React from 'react';
import { Brain, BarChart3, Bot, Globe, Cpu } from 'lucide-react';
import { expertiseData } from '../data/portfolioData';

export const Expertise: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'exp-01':
        return <Brain className="w-6 h-6 text-carbon" />;
      case 'exp-02':
        return <BarChart3 className="w-6 h-6 text-carbon" />;
      case 'exp-03':
        return <Bot className="w-6 h-6 text-carbon" />;
      case 'exp-04':
        return <Globe className="w-6 h-6 text-carbon" />;
      case 'exp-05':
        return <Cpu className="w-6 h-6 text-carbon" />;
      default:
        return <Cpu className="w-6 h-6 text-carbon" />;
    }
  };

  const getBadgeColor = (accent: string) => {
    switch (accent) {
      case 'coral':
        return 'bg-coral text-white';
      case 'blue':
        return 'bg-electric-blue text-white';
      case 'lime':
        return 'bg-neon-lime text-carbon';
      default:
        return 'bg-carbon text-white';
    }
  };

  return (
    <section
      id="expertise"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream bg-dots-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-neon-lime text-carbon font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
            <span>WHAT I DO // 02</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-carbon">
            CORE EXPERTISE
          </h2>
          <p className="font-sans text-base sm:text-lg text-carbon/80 max-w-2xl mt-2 font-medium">
            Technologies and disciplines I focus on while engineering intelligent applications and data-driven systems.
          </p>
        </div>

        {/* 5 Stacked / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertiseData.map((item, index) => {
            const isFullWidthOnLarge = index === 3 || index === 4;

            return (
              <div
                key={item.id}
                className={`group relative bg-white border-3 border-carbon p-6 sm:p-7 shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 flex flex-col justify-between ${
                  isFullWidthOnLarge ? 'md:col-span-1 lg:col-span-1.5' : ''
                }`}
              >
                {/* Large Watermark Number */}
                <div className="absolute top-4 right-4 font-display font-black text-5xl sm:text-6xl text-carbon/10 select-none pointer-events-none group-hover:text-carbon/20 transition-colors">
                  {item.number}
                </div>

                <div>
                  {/* Top Bar: Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-cream border-2 border-carbon shadow-[2px_2px_0px_#11110F] group-hover:bg-neon-lime transition-colors">
                      {getIcon(item.id)}
                    </div>
                    <span
                      className={`font-mono text-xs font-bold uppercase px-2.5 py-1 border border-carbon shadow-[1px_1px_0px_#11110F] ${getBadgeColor(
                        item.accent
                      )}`}
                    >
                      CARD {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-carbon mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-carbon/85 leading-relaxed mb-6">
                    "{item.description}"
                  </p>
                </div>

                {/* Technologies Badges */}
                <div className="pt-4 border-t-2 border-carbon/20">
                  <div className="font-mono text-[10px] text-muted-text uppercase font-bold tracking-wider mb-2">
                    // KEY TECHNOLOGIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs font-semibold px-2 py-0.5 bg-cream border border-carbon text-carbon shadow-[1px_1px_0px_#11110F]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
