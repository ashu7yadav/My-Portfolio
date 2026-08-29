import React from 'react';
import { Calendar, Milestone } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-electric-blue text-white font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>TIMELINE // 04</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-carbon">
            EXPERIENCE & JOURNEY
          </h2>
          <p className="font-sans text-base sm:text-lg text-carbon/80 max-w-xl mt-2 font-medium">
            My learning roadmap, engineering projects, and academic progression in Artificial Intelligence & Computer Science.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-3 md:border-l-4 border-carbon ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {experienceData.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Lime Node Marker on Timeline */}
              <div className="absolute -left-[35px] sm:-left-[51px] md:-left-[59px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 bg-neon-lime border-3 border-carbon shadow-[2px_2px_0px_#11110F] flex items-center justify-center group-hover:scale-125 group-hover:bg-coral group-hover:rotate-45 transition-all duration-200">
                <span className="w-1.5 h-1.5 bg-carbon rounded-none"></span>
              </div>

              {/* Timeline Card */}
              <div className="bg-white border-3 border-carbon p-6 sm:p-8 shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200">
                
                {/* Header: Year, Role and Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-carbon pb-4 mb-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm sm:text-base font-black bg-carbon text-neon-lime px-3 py-1 border border-carbon flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-neon-lime" />
                      {item.year}
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-carbon">
                      {item.role}
                    </h3>
                  </div>

                  <span className="font-mono text-xs font-bold uppercase px-2.5 py-1 bg-neon-lime border border-carbon text-carbon shadow-[1px_1px_0px_#11110F]">
                    {item.badge}
                  </span>
                </div>

                {/* Organization */}
                {item.organization && (
                  <div className="font-mono text-xs text-muted-text uppercase font-bold tracking-wider mb-4">
                    // {item.organization}
                  </div>
                )}

                {/* Bullet Points Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm sm:text-base text-carbon/90">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-cream/70 border border-carbon flex items-start gap-2.5"
                    >
                      <span className="font-mono text-coral font-black mt-0.5 shrink-0">
                        [✓]
                      </span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
