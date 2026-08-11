import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA, type Project } from '../config/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("igloo-oms");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Enterprise Product", "Mobile & Asset Tracking", "Governance Prototype", "E-commerce", "Computer Vision & APIs"];

  const filteredProjects = selectedCategory === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  return (
    <section id="work" className="py-24 relative bg-slate-50/50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-sky-800 font-mono text-xs uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Product Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Selected <span className="text-sky-800">Product Case Studies</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-1">
              Detailed breakdown of enterprise order management systems, mobile field tracking, workflow governance prototypes, and custom e-commerce storefronts.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-lg border border-slate-200 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Case Studies Grid / List */}
        <div className="space-y-8">
          {filteredProjects.map((project: Project) => {
            const isExpanded = expandedProjectId === project.id;
            
            return (
              <article
                key={project.id}
                className="editorial-card overflow-hidden bg-white border-slate-200 transition-all"
              >
                {/* Header Strip */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-sm font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                        {project.number}
                      </span>
                      <span className="tag-editorial">
                        {project.category}
                      </span>
                      {project.isPrototype && (
                        <span className="tag-editorial tag-accent flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-sky-700" /> Enterprise Prototype
                        </span>
                      )}
                      {project.metricsBadge && (
                        <span className="tag-editorial tag-sage font-semibold">
                          {project.metricsBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Right Actions */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-secondary text-xs py-2 px-3"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-primary text-xs py-2 px-3"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="btn-editorial-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                    >
                      <span>{isExpanded ? 'Collapse Case Study' : 'Read Case Study'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                </div>

                {/* Tech Stack Pills Bar */}
                <div className="px-6 sm:px-8 py-3 bg-slate-50/80 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-1">Role: <strong className="text-slate-700 font-semibold">{project.roleSummary}</strong></span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs font-mono text-slate-500">Tech:</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable Case Study Deep Dive Section */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-slate-900 text-slate-100 border-t border-slate-800 space-y-8 animate-fade-in">
                    
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                        PRODUCT CASE STUDY DEEP DIVE — {project.title}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Structured System Analysis
                      </span>
                    </div>

                    {/* Case Study Grid: 6 Structured Dimensions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                      
                      {/* 01 Context */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-sky-400">01 — CONTEXT</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.context}
                        </p>
                      </div>

                      {/* 02 Problem */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-amber-400">02 — OPERATIONAL PROBLEM</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.problem}
                        </p>
                      </div>

                      {/* 03 System */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-emerald-400">03 — SYSTEM ARCHITECTURE</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.system}
                        </p>
                      </div>

                      {/* 04 My Role */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-indigo-400">04 — MY ROLE & SCOPE</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.role}
                        </p>
                      </div>

                      {/* 05 Engineering */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-purple-400">05 — ENGINEERING & TECH</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.engineering}
                        </p>
                      </div>

                      {/* 06 Outcome */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-teal-400">06 — OPERATIONAL OUTCOME</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.outcome}
                        </p>
                      </div>

                    </div>

                    {/* Operational Abstract Diagram Note */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>System architecture structured for operational stability & security compliance.</span>
                      </span>
                      <button
                        onClick={() => setExpandedProjectId(null)}
                        className="text-sky-400 hover:text-sky-300 underline"
                      >
                        Close Breakdown
                      </button>
                    </div>

                  </div>
                )}

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
