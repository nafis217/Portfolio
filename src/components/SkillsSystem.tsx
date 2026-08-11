import React from 'react';
import { Cpu, CheckCircle2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const SkillsSystem: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-sky-800 font-mono text-xs uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Technical Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Engineering <span className="text-sky-800">Capabilities & Tools</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-1">
            Categorized stack organized by operational context—from client interfaces and REST APIs to relational database schemas and e-commerce infrastructure.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 bg-white border-slate-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-700" />
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                </div>

                <p className="text-xs font-mono text-slate-500">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Operational Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div>
            <strong className="text-slate-900 font-semibold">Quality Rule:</strong> Technologies are chosen based on business requirements, team maintainability, and operational stability—not trend hype.
          </div>
          <a href="#contact" className="btn-editorial-secondary text-xs py-1.5 px-3 whitespace-nowrap">
            Discuss Stack Requirements
          </a>
        </div>

      </div>
    </section>
  );
};
