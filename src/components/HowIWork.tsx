import React from 'react';

export const HowIWork: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Understand",
      description: "Understand the actual operational problem and people involved."
    },
    {
      step: "02",
      title: "Structure",
      description: "Map workflows, permissions, data and edge cases."
    },
    {
      step: "03",
      title: "Build",
      description: "Create interfaces, APIs and reliable data flows."
    },
    {
      step: "04",
      title: "Improve",
      description: "Test with real usage, solve friction and iterate."
    }
  ];

  return (
    <section id="how-i-work" className="section-padding relative border-t border-slate-200/80">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
            Methodology
          </span>
          <h2 className="section-title">
            How I Approach a Problem
          </h2>
          <p className="body-large">
            A disciplined, product-focused workflow for engineering reliable systems.
          </p>
        </div>

        {/* 4-Step Horizontal Editorial Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3 relative hover:border-slate-300 transition-colors"
            >
              <span className="font-mono text-xs font-bold text-sky-700 block">
                {item.step}
              </span>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
