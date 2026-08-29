import React, { useState } from 'react';
import { Trophy, Award, Code, BookMarked, Sparkles, CheckCircle2, Activity } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'CERTIFICATION', 'EXTRACURRICULAR'];

  const filteredItems = achievementsData.filter((item) => {
    if (filter === 'ALL') return true;
    return item.type === filter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'EXTRACURRICULAR':
        return <Activity className="w-5 h-5 text-coral" />;
      case 'HACKATHON':
        return <Trophy className="w-5 h-5 text-coral" />;
      case 'CERTIFICATION':
        return <Award className="w-5 h-5 text-electric-blue" />;
      case 'PROJECT':
        return <Code className="w-5 h-5 text-carbon" />;
      case 'LEARNING':
        return <BookMarked className="w-5 h-5 text-carbon" />;
      default:
        return <Sparkles className="w-5 h-5 text-carbon" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 border-b-3 border-carbon bg-cream bg-grid-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-neon-lime text-carbon font-mono text-xs font-bold uppercase px-3 py-1 border border-carbon shadow-[2px_2px_0px_#11110F] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>CREDENTIALS // 07</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-carbon">
              CERTIFICATIONS &amp; ACHIEVEMENTS
            </h2>
            <p className="font-sans text-base sm:text-lg text-carbon/80 max-w-xl mt-2 font-medium">
              Verified industry training, institutional internship certifications, and collegiate sports achievements.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs font-bold uppercase px-3 py-1.5 border-2 transition-all ${
                  filter === cat
                    ? 'bg-carbon text-neon-lime border-carbon shadow-[3px_3px_0px_#C7FF2F]'
                    : 'bg-white text-carbon border-carbon hover:bg-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border-3 border-carbon p-6 shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Type and Year */}
                <div className="flex items-center justify-between border-b-2 border-carbon pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-cream border border-carbon">
                      {getTypeIcon(item.type)}
                    </div>
                    <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-neon-lime border border-carbon text-carbon">
                      {item.type}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold text-muted-text">
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-carbon mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Issuer */}
                <div className="font-mono text-xs text-coral font-bold uppercase tracking-wider mb-3">
                  // {item.issuer}
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-carbon/85 leading-relaxed mb-4">
                  "{item.description}"
                </p>
              </div>

              {/* Tag Badge */}
              <div className="pt-3 border-t border-carbon/20 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-cream border border-carbon text-carbon">
                  {item.tag}
                </span>
                <span className="font-mono text-xs text-muted-text flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-coral" />
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
