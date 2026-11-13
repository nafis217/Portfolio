import React from 'react';
import { RESEARCH_DATA } from '../data/research';

export const Research: React.FC = () => {
  return (
    <section id="research" className="section-padding relative border-t border-slate-200/80">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100">
            Academic Research
          </span>
          <h2 className="section-title">
            Research & Engineering
          </h2>
          <p className="body-large">
            Quantitative research focused on statistical data recovery and missing data imputation algorithms.
          </p>
        </div>

        {/* Sophisticated Research Block */}
        <div className="editorial-card-soft p-8 bg-white/90 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono text-indigo-700 font-semibold block">
                {RESEARCH_DATA.period}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-1">
                {RESEARCH_DATA.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-0.5">
                {RESEARCH_DATA.frameworkName}
              </p>
            </div>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed max-w-3xl">
            {RESEARCH_DATA.description}
          </p>

          {/* Research Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {RESEARCH_DATA.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600">{m.label}</span>
                <span className="text-lg font-bold font-mono text-indigo-700">{m.value}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
