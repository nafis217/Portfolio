import React from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Building2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-[110px] pb-16 sm:pt-[130px] sm:pb-24 border-b border-slate-200/60 relative">
      <div className="page-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Short, Impactful Editorial Content */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-sky-600"></span>
              <span className="uppercase tracking-wider font-semibold">SOFTWARE ENGINEER</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3 h-3 text-slate-400" /> {PROFILE_DATA.location}
              </span>
            </div>

            {/* Scaled Name Heading (No clipping under header) */}
            <div className="space-y-1">
              <h1 className="hero-heading">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-900 leading-snug max-w-xl">
                {PROFILE_DATA.headline}
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="body-large text-slate-600">
              {PROFILE_DATA.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#work" className="btn-primary-editorial">
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#about" className="btn-secondary-editorial">
                <span>About Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Current Context Line */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <Building2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
              <span>{PROFILE_DATA.currentRoleContext}</span>
            </div>

          </div>

          {/* Right Column: Abstract Editorial Visual Block */}
          <div className="lg:col-span-5 w-full overflow-hidden">
            <div className="editorial-card-soft p-5 sm:p-6 space-y-4 bg-white border border-slate-200">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Engineering Scope
                </span>
                <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 font-medium">
                  Full-Stack
                </span>
              </div>

              {/* 3 Restrained Pillars */}
              <div className="space-y-3 font-heading">
                
                {/* Pillar 01 */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">01. ENGINEERING</span>
                    <span className="text-[10px] font-mono text-sky-700 font-medium">System</span>
                  </div>
                  <p className="text-xs text-slate-500 font-sans">ASP.NET Core, React, TypeScript & SQL Server architectures.</p>
                </div>

                {/* Pillar 02 */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">02. PRODUCT</span>
                    <span className="text-[10px] font-mono text-indigo-700 font-medium">Interface</span>
                  </div>
                  <p className="text-xs text-slate-500 font-sans">React Native mobile apps & custom Shopify Liquid storefronts.</p>
                </div>

                {/* Pillar 03 */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">03. OPERATIONS</span>
                    <span className="text-[10px] font-mono text-emerald-700 font-medium">Business</span>
                  </div>
                  <p className="text-xs text-slate-500 font-sans">Order management workflows, approvals & freezer asset tracking.</p>
                </div>

              </div>

              <div className="pt-1 text-[11px] font-mono text-slate-400 text-center">
                Built for operational reliability.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
