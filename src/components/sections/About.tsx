"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code2, Server, Database, Smartphone, Layers, ShieldCheck } from "lucide-react";

const WORK_AREAS = [
  {
    icon: Server,
    title: "Enterprise Web Applications",
    desc: "Modular full-stack systems built for complex operations and data workflows.",
    bgColor: "bg-sky/60",
    iconColor: "text-blue",
    borderColor: "border-blue/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform iOS & Android mobile apps built with React Native & Expo.",
    bgColor: "bg-strawberry/20",
    iconColor: "text-strawberry-dark",
    borderColor: "border-strawberry/30",
  },
  {
    icon: Code2,
    title: "REST APIs & Backend",
    desc: "Robust API architectures using ASP.NET Core & Node.js with secure authentication.",
    bgColor: "bg-pistachio/20",
    iconColor: "text-pistachio-dark",
    borderColor: "border-pistachio/40",
  },
  {
    icon: Database,
    title: "Database Architecture",
    desc: "Reliable database schemas, queries & caching using SQL Server, PostgreSQL & Redis.",
    bgColor: "bg-mango/20",
    iconColor: "text-mango-dark",
    borderColor: "border-mango/40",
  },
  {
    icon: Layers,
    title: "ERP & OMS Workflows",
    desc: "Order management, telemetry tracking, inventory & enterprise role permissions.",
    bgColor: "bg-lavender/30",
    iconColor: "text-lavender-dark",
    borderColor: "border-lavender/40",
  },
  {
    icon: ShieldCheck,
    title: "Modern Frontend Engineering",
    desc: "Pixel-perfect, accessible, highly responsive web interfaces with Next.js & React.",
    bgColor: "bg-coral/15",
    iconColor: "text-coral",
    borderColor: "border-coral/30",
  },
];

export default function About() {
  const personal = PORTFOLIO_DATA.personal;

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-vanilla border-t border-ink/10 relative overflow-hidden"
    >
      {/* Decorative accent geometry */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-12 w-20 h-20 rounded-full border-2 border-coral/30 opacity-60 pointer-events-none hidden lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-12 left-8 w-1.5 h-32 bg-mango/50 rounded-full pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Header Label */}
        <div className="flex items-center justify-between border-b border-ink/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-coral uppercase tracking-widest bg-coral/10 px-3.5 py-1.5 rounded-full border border-coral/20">
              02 / ABOUT
            </span>
            <span className="h-1 w-12 bg-coral rounded-full" />
          </div>
          <span className="hidden sm:block font-mono text-xs font-bold text-ink/60">
            PHILOSOPHY &amp; FOCUS
          </span>
        </div>

        {/* Asymmetric Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="heading-section font-black text-ink tracking-tight">
              {personal.aboutHeadline}
            </h2>
            <div className="h-1.5 w-28 bg-coral rounded-full" />

            <div className="space-y-4 text-base sm:text-lg text-ink/80 leading-relaxed pt-2 font-normal">
              {personal.aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Architectural Highlights Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white p-5 sm:p-10 rounded-3xl border-2 border-ink/10 shadow-poster space-y-6 relative"
          >
            {/* Color accent dots */}
            <div aria-hidden="true" className="absolute top-4 right-4 flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-coral" />
              <span className="w-2.5 h-2.5 rounded-full bg-mango" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue" />
            </div>

            <h3 className="text-xs font-mono font-bold text-coral uppercase tracking-widest border-b border-ink/10 pb-3">
              ENGINEERING APPROACH
            </h3>

            <div className="space-y-5 text-sm text-ink/80">
              <div className="flex gap-3.5">
                <span className="font-mono text-xs font-extrabold text-blue bg-sky px-2.5 py-1 rounded-md border border-blue/20 shrink-0">
                  01
                </span>
                <div>
                  <h4 className="font-extrabold text-ink text-base">
                    Reliability First
                  </h4>
                  <p className="text-xs text-ink/70 mt-0.5 leading-relaxed">
                    Focusing on system stability, strict typing, error handling, and scalable backend logic.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="font-mono text-xs font-extrabold text-coral bg-coral/15 px-2.5 py-1 rounded-md border border-coral/30 shrink-0">
                  02
                </span>
                <div>
                  <h4 className="font-extrabold text-ink text-base">
                    Practical UX
                  </h4>
                  <p className="text-xs text-ink/70 mt-0.5 leading-relaxed">
                    Designing clear, simple interfaces that reduce cognitive friction for end-users.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="font-mono text-xs font-extrabold text-pistachio-dark bg-mint px-2.5 py-1 rounded-md border border-pistachio/40 shrink-0">
                  03
                </span>
                <div>
                  <h4 className="font-extrabold text-ink text-base">
                    Maintainable Codebase
                  </h4>
                  <p className="text-xs text-ink/70 mt-0.5 leading-relaxed">
                    Adhering to clean architecture principles, modular components, and good testing practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-ink/10 flex justify-between items-center text-xs font-mono text-ink/60">
              <span>LOCATION: DHAKA, BD</span>
              <span className="text-coral font-extrabold">AVAILABLE FOR PROJECTS</span>
            </div>
          </motion.div>
        </div>

        {/* Work Domains Matrix */}
        <div className="pt-8 space-y-8">
          <div className="space-y-1">
            <h3 className="text-xs font-mono font-bold text-coral uppercase tracking-widest">
              CAPABILITIES &amp; WORK DOMAINS
            </h3>
            <p className="text-2xl sm:text-3xl font-black text-ink">
              What I design, build &amp; maintain
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white p-6 rounded-2xl border-2 border-ink/10 hover:border-coral shadow-subtle hover:shadow-card transition-all duration-300 group"
                >
                  <div
                    className={`p-3.5 w-fit rounded-xl ${area.bgColor} ${area.iconColor} border ${area.borderColor} mb-4 transition-transform group-hover:scale-110 duration-300`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h4 className="text-base font-extrabold text-ink group-hover:text-coral transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs text-ink/70 mt-2 leading-relaxed font-medium">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
