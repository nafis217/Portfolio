import React from 'react';
import { EDUCATION_DATA, type Education as EducationType } from '../data/education';

export const Education: React.FC = () => {
  const primaryEdu = EDUCATION_DATA.find(e => e.isPrimary)!;
  const secondaryEdu = EDUCATION_DATA.filter(e => !e.isPrimary);

  return (
    <section id="education" className="section-padding relative border-t border-slate-200/80">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
            Academics
          </span>
          <h2 className="section-title">
            Education
          </h2>
          <p className="body-large">
            Formal computer science engineering education and academic background.
          </p>
        </div>

        {/* Primary Education Card (NIT Rourkela) */}
        <div className="editorial-card-soft p-8 bg-white mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono text-sky-700 font-semibold">{primaryEdu.period}</span>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mt-0.5">
                {primaryEdu.institution}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">{primaryEdu.location}</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-slate-800">
              {primaryEdu.degree} in {primaryEdu.field}
            </h4>
            {primaryEdu.scholarship && (
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                <span>★</span>
                <span>{primaryEdu.scholarship}</span>
              </div>
            )}
          </div>
        </div>

        {/* Subtle Earlier Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
          {secondaryEdu.map((edu: EducationType) => (
            <div key={edu.institution} className="p-5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>
              <h4 className="text-base font-bold font-heading text-slate-900">
                {edu.institution}
              </h4>
              <p className="text-xs text-slate-600 font-mono">
                {edu.degree} ({edu.field})
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
