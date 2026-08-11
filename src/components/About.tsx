import React from 'react';
import { User, GraduationCap, Compass, Heart, Award, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const About: React.FC = () => {
  const edu = PORTFOLIO_DATA.education[0];
  const personalNotes = PORTFOLIO_DATA.personal.personalNotes;

  return (
    <section id="about" className="py-24 relative border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 text-sky-800 font-mono text-xs uppercase tracking-wider mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            About & <span className="text-sky-800">Mindset</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-1">
            Understanding software engineering through the lens of operational clarity, product utility, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 7 Cols: Personal Philosophy & Education */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Engineering Mindset Card */}
            <div className="editorial-card p-6 sm:p-8 bg-white border-slate-200 space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-sky-700" />
                Product Engineering Philosophy
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                I enjoy taking complex, chaotic business processes—such as multi-tier distributor order approvals or paper-based freezer asset management—and translating them into dependable, clean digital software.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                My work spans the complete lifecycle: defining user roles, designing SQL Server schemas, building ASP.NET Core API logic, and creating responsive React and React Native user interfaces. I believe software is most effective when it simplifies daily operations for real people on the ground.
              </p>
            </div>

            {/* Education Card */}
            <div className="editorial-card p-6 sm:p-8 bg-white border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-xl font-bold font-heading text-slate-900">Academic Foundation</h3>
                </div>
                <span className="text-xs font-mono text-slate-500">{edu.period}</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900">{edu.institution}</h4>
                <div className="text-sm font-semibold text-sky-800">{edu.degree}</div>
                {edu.scholarship && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{edu.scholarship}</span>
                  </div>
                )}
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  {edu.details}
                </p>
              </div>
            </div>

          </div>

          {/* Right 5 Cols: Personal Touch & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Beyond Code Card */}
            <div className="editorial-panel p-6 sm:p-7 bg-white border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <Heart className="w-4 h-4 text-rose-500" />
                <h3 className="text-base font-bold font-heading text-slate-900">Personal Perspective</h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Beyond software architecture and database design, I find creative inspiration in exploring new places, understanding different regional cultures, and paying attention to apparel and fashion aesthetics.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                  Interests & Inspirations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {personalNotes.interests.map((interest, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quality Commitment Box */}
            <div className="p-5 rounded-xl bg-slate-900 text-slate-100 space-y-3 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>DEPENDABLE PRODUCTION CODE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Focused on maintainable code architecture, strict type checking in TypeScript, normalized SQL queries, and smooth cross-platform delivery.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
