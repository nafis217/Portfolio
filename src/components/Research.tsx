import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RESEARCH_DATA } from '../data/research';

const showTodo = import.meta.env.DEV;
const isTodo = (v: string) => v.startsWith('TODO');

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

          {/* Evaluation context */}
          {[['Dataset', RESEARCH_DATA.dataset], ['Baseline', RESEARCH_DATA.baseline]]
            .filter(([, v]) => showTodo || !isTodo(v))
            .map(([label, value]) => (
              <p key={label} className="text-xs font-mono text-slate-600">
                <span className="font-semibold text-slate-800">{label}:</span> {value}
              </p>
            ))}

          {/* Research Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {RESEARCH_DATA.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-mono text-slate-600 block">{m.label}</span>
                <span className="text-2xl font-bold font-mono text-indigo-700 block mt-1">{m.value}</span>
                {m.note && <span className="text-[11px] font-mono text-slate-400">{m.note}</span>}
              </div>
            ))}
          </div>

          {/* Optional publication links */}
          {RESEARCH_DATA.links && Object.values(RESEARCH_DATA.links).some(Boolean) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {([['paper', 'Paper'], ['thesis', 'Thesis'], ['repo', 'Code']] as const).map(([key, label]) => {
                const href = RESEARCH_DATA.links?.[key];
                return href ? (
                  <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="btn-secondary-editorial text-xs py-2 px-3.5">
                    <span>{label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : null;
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
