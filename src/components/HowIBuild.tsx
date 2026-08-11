import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Lightbulb, Workflow } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

export const HowIBuild: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const steps = PORTFOLIO_DATA.workflow;
  const activeStep = steps[activeStepIndex];

  return (
    <section id="how-i-build" className="py-20 border-y border-slate-200 bg-white/70 backdrop-blur-sm">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-sky-700 font-mono text-xs uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5" />
              <span>Architectural Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              How I Build: <span className="text-sky-700">Business Operations → Software</span>
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1">
              A structured 5-stage engineering lifecycle bridging operational problems with practical, scalable digital products.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200 self-start md:self-auto">
            Interactive System Blueprint
          </div>
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {steps.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-sky-400' : 'text-slate-400'}`}>
                    {item.step}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>}
                </div>
                <div className={`text-xs font-bold font-heading line-clamp-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </div>
                <div className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="editorial-panel p-6 sm:p-8 bg-white border-slate-200 shadow-sm relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold font-mono text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-100">
                  STAGE {activeStep.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    {activeStep.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">{activeStep.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                {activeStep.description}
              </p>

              {/* Deliverables Grid */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                  Key Deliverables & Artifacts:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStep.deliverables.map((deliv, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Principle Callout */}
            <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-6 rounded-xl space-y-4 border border-slate-800">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono">
                <Lightbulb className="w-4 h-4" />
                <span>ENGINEERING PRINCIPLE</span>
              </div>
              
              <blockquote className="text-sm font-medium text-slate-200 leading-relaxed italic border-l-2 border-sky-500 pl-3">
                "{activeStep.keyPrinciple}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-slate-400" /> Operations + Code
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % steps.length)}
                  className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
