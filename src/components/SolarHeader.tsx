import React from 'react';
import { ChevronRight } from 'lucide-react';

export const SolarHeader: React.FC = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-bg-primary/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-cyan to-neon-green flex items-center justify-center">
            <svg
              className="w-6 h-6 text-bg-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <span className="text-lg font-bold gradient-text hidden sm:inline">
            SOLAR BUY-SIDE
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToOffer}
          className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
        >
          <span className="hidden sm:inline">GARANTIR VANTAGEM AGORA</span>
          <span className="sm:hidden">GARANTIR</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </header>
  );
};
