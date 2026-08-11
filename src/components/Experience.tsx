import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-50/50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 text-sky-800 font-mono text-xs uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Software Engineering <span className="text-sky-800">Experience</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-1">
            Proven track record across enterprise software engineering, mobile operational systems, and custom e-commerce storefront development.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((item) => (
            <div
              key={item.id}
              className="editorial-card p-6 sm:p-8 bg-white border-slate-200 space-y-6"
            >
              
              {/* Role Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                    {item.role}
                  </h3>
                  {item.departmentRole && (
                    <div className="text-xs font-mono text-sky-800 font-medium bg-sky-50 px-2.5 py-1 rounded border border-sky-200 inline-block">
                      Corporate Title: {item.departmentRole}
                    </div>
                  )}
                  <div className="text-base font-semibold text-slate-800 flex items-center gap-2 pt-1">
                    <Building2 className="w-4 h-4 text-sky-700" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-sky-700" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Role Summary */}
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {item.summary}
              </p>

              {/* Responsibilities List */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                  Core Engineering Scope & Responsibilities:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
                {item.techStack.map((tech) => (
                  <span key={tech} className="tag-editorial">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
