import React from 'react';
import { PROFILE_DATA } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative border-t border-slate-200/80">
      <div className="page-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Concise Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
              Perspective
            </span>

            <h2 className="section-title">
              About & Mindset
            </h2>

            <p className="body-large">
              {PROFILE_DATA.about.philosophy}
            </p>
          </div>

          {/* Right Column: Beyond the Screen (5 Cols) */}
          <div className="lg:col-span-5 pt-4 lg:pt-12 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-4">
              <h3 className="text-base font-bold font-heading text-slate-900">
                Beyond the Screen
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {PROFILE_DATA.about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
