import React from 'react';
import { SKILL_GROUPS, type SkillGroup } from '../data/skills';

export const SkillsSystem: React.FC = () => {
  return (
    <section id="skills" className="section-padding relative border-t border-slate-200/80">
      <div className="page-container">
        
        {/* Desktop 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Left Heading (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
              Stack
            </span>
            <h2 className="section-title">
              Skills & Technologies
            </h2>
            <p className="body-large">
              A comprehensive technical toolkit applied across enterprise backends, mobile operational tools, and modern web applications.
            </p>
          </div>

          {/* Right Column: 5 Clean Skill Groups (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {SKILL_GROUPS.map((group: SkillGroup, index: number) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-white/80 border border-slate-200/80 space-y-3 transition-colors hover:border-slate-300"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="text-xs font-mono font-medium text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
