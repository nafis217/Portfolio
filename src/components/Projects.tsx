import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, AlertCircle, Sparkles } from 'lucide-react';
import { SELECTED_PROJECTS, EXPERIMENT_PROJECTS, type ProjectItem } from '../data/projects';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  return (
    <section id="work" className="section-padding relative">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
            Portfolio Showcase
          </span>
          <h2 className="section-title">
            Selected Work
          </h2>
          <p className="body-large">
            A selection of systems, digital products and commerce experiences I've worked on.
          </p>
        </div>

        {/* Asymmetric Editorial Project Grid */}
        <div className="space-y-14 mb-20">
          {SELECTED_PROJECTS.map((project: ProjectItem, index: number) => {
            const isExpanded = expandedProjectId === project.id;
            // Alternating asymmetric widths on desktop (65% / 35% vs 35% / 65%)
            const isWideFirst = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="project-card-group group flex flex-col space-y-4"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isWideFirst ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Visual Preview Banner Block */}
                  <div className={`${isWideFirst ? 'lg:col-span-7' : 'lg:col-span-5'} ${!isWideFirst && 'lg:order-2'} w-full overflow-hidden`}>
                    <div className="project-image-wrap relative min-h-[220px] sm:min-h-[260px] flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-slate-100 to-slate-200/80">
                      
                      {/* Visual Editorial Frame */}
                      <div className="w-full h-full rounded-xl bg-white shadow-xs border border-slate-200/80 p-5 flex flex-col justify-between overflow-hidden relative">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <span className="font-mono text-xs font-bold text-slate-500">{project.number}</span>
                          <span className="text-[11px] font-mono font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                            {project.category}
                          </span>
                        </div>

                        <div className="space-y-1.5 py-4">
                          <div className="text-lg font-bold font-heading text-slate-900 leading-snug">
                            {project.title}
                          </div>
                          {project.subtitle && (
                            <div className="text-xs text-slate-500 font-mono">
                              {project.subtitle}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                          {project.technologies.slice(0, 4).map(tech => (
                            <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Editorial Text Content Block */}
                  <div className={`${isWideFirst ? 'lg:col-span-5' : 'lg:col-span-7'} space-y-4 ${!isWideFirst && 'lg:order-1'}`}>
                    
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400">{project.number}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono font-medium text-sky-700">{project.category}</span>
                      {project.isPrototype && (
                        <span className="text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Prototype
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-slate-900 project-title-hover">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-mono text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex items-center gap-4">
                      {project.caseStudyDetails && (
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="btn-secondary-editorial text-xs py-2 px-3.5 flex items-center gap-1.5"
                        >
                          <span>{isExpanded ? 'Hide Case Overview' : 'Case Overview'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>

                  </div>

                </div>

                {/* Expandable Case Overview Drawer */}
                {isExpanded && project.caseStudyDetails && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-slate-100 space-y-6 animate-fade-in border border-slate-800">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                        Case Overview — {project.title}
                      </span>
                      <button
                        onClick={() => setExpandedProjectId(null)}
                        className="text-xs font-mono text-slate-400 hover:text-white"
                      >
                        Close
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed font-sans">
                      <div className="space-y-1 bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <strong className="text-sky-400 font-mono block">Operational Challenge:</strong>
                        <p className="text-slate-300">{project.caseStudyDetails.problem}</p>
                      </div>

                      <div className="space-y-1 bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <strong className="text-indigo-400 font-mono block">Engineering Contribution:</strong>
                        <p className="text-slate-300">{project.caseStudyDetails.contribution}</p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <strong className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Capabilities:</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {project.caseStudyDetails.keyWork.map((kw, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                            <span>{kw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Experiments & Archive Section */}
        <div className="pt-12 border-t border-slate-200 space-y-8">
          <div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Experiments & Archive
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Smaller projects, API integrations, and experimental computer vision systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIMENT_PROJECTS.map((exp: ProjectItem) => (
              <div
                key={exp.id}
                className="editorial-card-soft p-6 bg-white space-y-3 flex flex-col justify-between border border-slate-200"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{exp.number}</span>
                    <span className="text-sky-700 font-medium">{exp.category}</span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-slate-900">
                    {exp.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-700 hover:text-slate-900 flex items-center gap-1.5 font-semibold"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
