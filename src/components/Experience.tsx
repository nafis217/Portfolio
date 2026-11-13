import React from 'react';
import { EXPERIENCE_DATA, type Experience as ExperienceType } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
            Career
          </span>
          <h2 className="section-title">
            Professional Experience
          </h2>
          <p className="body-large">
            Full-stack engineering history across enterprise software, mobile field applications, and custom e-commerce products.
          </p>
        </div>

        {/* Horizontal Editorial Rows (No Timeline Dots) */}
        <div className="space-y-0">
          {EXPERIENCE_DATA.map((exp: ExperienceType) => (
            <div key={exp.id} className="experience-row">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left 4 Cols: Period & Company */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="text-xs font-mono font-semibold text-sky-700 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    {exp.location}
                  </p>
                </div>

                {/* Right 8 Cols: Role & Scope */}
                <div className="lg:col-span-8 space-y-3">
                  <div>
                    <h4 className="text-lg font-bold font-heading text-slate-900">
                      {exp.role}
                    </h4>
                    {exp.subRole && (
                      <span className="text-xs font-mono text-slate-600 block mt-0.5">
                        {exp.subRole}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-600">
                    {exp.highlights.map((item, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="text-sky-600">•</span>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
