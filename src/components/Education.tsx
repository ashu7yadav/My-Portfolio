import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-coral text-white font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS // 06</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-carbon">
            EDUCATION
          </h2>
          <p className="font-sans text-base sm:text-lg text-carbon/80 max-w-xl mt-2 font-medium">
            Academic degree, university foundation, and specialized AI/ML engineering curriculum.
          </p>
        </div>

        {/* Education Editorial Card */}
        <div className="bg-white border-3 border-carbon p-6 sm:p-10 shadow-neo-lg relative overflow-hidden">
          
          {/* Top Right Decorative Stamp */}
          <div className="absolute top-4 right-4 bg-neon-lime text-carbon font-mono text-xs font-black px-3 py-1 border-2 border-carbon rotate-2 shadow-[2px_2px_0px_#11110F] hidden sm:block">
            ACTIVE ENROLLMENT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Degree & University Overview (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-coral font-mono text-xs font-bold uppercase mb-2">
                <Calendar className="w-4 h-4" />
                <span>{educationData.period}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-carbon mb-3">
                {educationData.degree}
              </h3>

              <div className="bg-cream border-2 border-carbon p-4 mb-6 shadow-neo-sm">
                <div className="font-display font-bold text-base sm:text-lg text-carbon">
                  {educationData.institution}
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-muted-text mt-1">
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <div className="font-mono text-xs font-bold text-muted-text uppercase">
                  // ACADEMIC FOCUS & MILESTONES
                </div>
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-carbon/90">
                    <span className="text-neon-lime font-black bg-carbon px-1.5 py-0.5 text-xs">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Relevant Coursework Matrix (5 Cols) */}
            <div className="lg:col-span-5 bg-cream border-2 border-carbon p-6 shadow-neo">
              <div className="flex items-center gap-2 font-display font-bold text-sm uppercase text-carbon border-b-2 border-carbon pb-3 mb-4">
                <BookOpen className="w-4 h-4 text-electric-blue" />
                <span>RELEVANT COURSEWORK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {educationData.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-2.5 bg-white border border-carbon flex items-center gap-2 shadow-[2px_2px_0px_#11110F]"
                  >
                    <span className="w-2 h-2 bg-coral border border-carbon shrink-0"></span>
                    <span className="font-mono text-xs font-bold text-carbon truncate">
                      {course}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 bg-white border border-carbon font-mono text-[11px] text-carbon/80">
                ⚡ Comprehensive curriculum blending core computer science foundations with specialized AI, data structures, and statistical machine learning.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
