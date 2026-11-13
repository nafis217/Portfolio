import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, AlertCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SELECTED_PROJECTS, EXPERIMENT_PROJECTS, type ProjectItem } from '../data/projects';
import { GithubIcon } from './SocialIcons';

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// TODO placeholders are only shown in dev so they never ship to the live site.
const visibleMetrics = (metrics?: string[]) =>
  (metrics ?? []).filter(m => import.meta.env.DEV || !m.startsWith('TODO'));

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
                  
                  {/* Cover: first screenshot, or placeholder when none supplied */}
                  <div className={`${isWideFirst ? 'lg:col-span-7' : 'lg:col-span-5 lg:order-2'} w-full overflow-hidden`}>
                    <div className="project-image-wrap relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200/80">
                      {project.images && project.images.length > 0 ? (
                        <img
                          src={assetUrl(project.images[0])}
                          alt={`${project.title} screenshot`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-400 p-6 text-center">
                          <ImageIcon className="w-8 h-8" aria-hidden="true" />
                          <span className="text-xs font-mono">
                            Screenshots available on request
                          </span>
                        </div>
                      )}
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

                    {visibleMetrics(project.metrics).length > 0 && (
                      <ul className="flex flex-wrap gap-2" aria-label="Key results">
                        {visibleMetrics(project.metrics).map(m => (
                          <li key={m} className="text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                            {m}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-mono text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary-editorial text-xs py-2 px-3.5"
                        >
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed font-sans">
                      <div className="space-y-1 bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <strong className="text-emerald-400 font-mono block">System Delivered:</strong>
                        <p className="text-slate-300">{project.caseStudyDetails.system}</p>
                      </div>

                      <div className="space-y-1 bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <strong className="text-amber-400 font-mono block">Technology:</strong>
                        <p className="text-slate-300">{project.caseStudyDetails.technology}</p>
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
