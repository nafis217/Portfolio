import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          
          {/* Identity Signature */}
          <div>
            <span className="text-white font-bold font-heading text-sm block">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-slate-500 block mt-0.5">
              {PORTFOLIO_DATA.personal.title} • {PORTFOLIO_DATA.personal.location}
            </span>
          </div>

          {/* Copyright & Action */}
          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
