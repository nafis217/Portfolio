import React from 'react';
import { ArrowRight, MapPin, Building2, GraduationCap, Layers, Database, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-24 border-b border-slate-200/80 bg-architectural-grid">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Identity & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Systems Engineer</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
            </div>

            {/* Name & Primary Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold font-heading text-sky-800 tracking-tight">
                {PORTFOLIO_DATA.personal.title}
              </div>
            </div>

            {/* Core Value Headline */}
            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed max-w-2xl">
              "{PORTFOLIO_DATA.personal.headline}"
            </p>

            {/* Human Bio */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Organization & Education Badges */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Building2 className="w-4 h-4 text-sky-700 shrink-0" />
                <span>Igloo Ice Cream / Abdul Monem Limited</span>
                <span className="text-[10px] text-slate-500 font-normal">({PORTFOLIO_DATA.experience[0].period})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.educationBrief}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#work" className="btn-editorial-primary">
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#how-i-build" className="btn-editorial-secondary">
                <span>How I Build Systems</span>
              </a>
            </div>

          </div>

          {/* Right Column: BUSINESS → SYSTEM → SOFTWARE Diagram */}
          <div className="lg:col-span-5">
            <div className="editorial-panel p-6 sm:p-7 bg-white border-slate-200 shadow-sm relative space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Operational Blueprint Matrix
                </span>
                <span className="text-[10px] font-mono bg-sky-50 text-sky-700 px-2 py-0.5 rounded border border-sky-200 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Full Lifecycle
                </span>
              </div>

              {/* 3-Tier Diagram Blocks */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Tier 1: Business Operations */}
                <div className="p-3.5 rounded-lg bg-amber-50/60 border border-amber-200/80 space-y-1">
                  <div className="flex items-center justify-between font-bold text-amber-900">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-700" /> 01. BUSINESS OPERATIONS
                    </span>
                    <span className="text-[10px] bg-amber-200/60 px-1.5 py-0.5 rounded">Friction</span>
                  </div>
                  <p className="text-[11px] text-amber-800 font-sans">
                    Order flows, delivery dispatch, distributor approvals, physical freezer tracking & RACI accountability.
                  </p>
                </div>

                <div className="flex justify-center text-slate-400">
                  <ArrowRightLeft className="w-4 h-4 rotate-90" />
                </div>

                {/* Tier 2: System Architecture */}
                <div className="p-3.5 rounded-lg bg-sky-50/60 border border-sky-200/80 space-y-1">
                  <div className="flex items-center justify-between font-bold text-sky-900">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-sky-700" /> 02. SYSTEM ARCHITECTURE
                    </span>
                    <span className="text-[10px] bg-sky-200/60 px-1.5 py-0.5 rounded">Design</span>
                  </div>
                  <p className="text-[11px] text-sky-800 font-sans">
                    Relational SQL Server schemas, ASP.NET Core REST APIs, security roles & state machines.
                  </p>
                </div>

                <div className="flex justify-center text-slate-400">
                  <ArrowRightLeft className="w-4 h-4 rotate-90" />
                </div>

                {/* Tier 3: Practical Software */}
                <div className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                  <div className="flex items-center justify-between font-bold text-emerald-900">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-emerald-700" /> 03. PRACTICAL SOFTWARE
                    </span>
                    <span className="text-[10px] bg-emerald-200/60 px-1.5 py-0.5 rounded">Deliverable</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-sans">
                    React web management dashboards, React Native mobile scanner apps & Shopify Liquid storefronts.
                  </p>
                </div>

              </div>

              {/* Bottom Quote */}
              <div className="pt-3 border-t border-slate-200 text-[11px] font-sans text-slate-500 italic">
                "Software isn't just UI code; it's the operational spine of a working business."
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
