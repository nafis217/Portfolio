import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-10">
      <div className="page-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          
          {/* Identity Signature */}
          <div>
            <span className="text-white font-bold font-heading text-sm block">
              {PROFILE_DATA.name}
            </span>
            <span className="text-slate-500 block mt-0.5">
              {PROFILE_DATA.role} • {PROFILE_DATA.location}
            </span>
          </div>

          {/* Copyright & Action */}
          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
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
