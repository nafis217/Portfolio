"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

// Contextual experience color definitions
const EXP_COLOR_WORLDS: Record<string, { bg: string; accent: string; badgeBg: string; border: string }> = {
  igloo: {
    bg: "#D9EFF8",      // soft ice blue
    accent: "#1676A8",  // deep blue
    badgeBg: "#CDEAF4",
    border: "rgba(22, 118, 168, 0.3)",
  },
  clicko: {
    bg: "#FFF0E5",      // soft warm peach
    accent: "#FF7A45",  // coral
    badgeBg: "#FFE4D6",
    border: "rgba(255, 122, 69, 0.3)",
  },
  technocolabs: {
    bg: "#E5F3E7",      // soft pistachio
    accent: "#4D9862",  // pistachio dark green
    badgeBg: "#DDF1DF",
    border: "rgba(77, 152, 98, 0.3)",
  },
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeExpId, setActiveExpId] = useState<string>("igloo");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const activeColor = EXP_COLOR_WORLDS[activeExpId] || EXP_COLOR_WORLDS.igloo;

  return (
    <motion.section
      id="experience"
      animate={{ backgroundColor: activeColor.bg }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-28 px-6 lg:px-12 border-t border-ink/10 relative transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Label */}
        <div className="flex items-center justify-between border-b border-ink/15 pb-4">
          <div className="flex items-center gap-3">
            <span
              style={{ color: activeColor.accent, backgroundColor: activeColor.badgeBg, borderColor: activeColor.border }}
              className="font-mono text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border transition-colors duration-500"
            >
              03 / EXPERIENCE
            </span>
            <span style={{ backgroundColor: activeColor.accent }} className="h-1 w-12 rounded-full transition-colors duration-500" />
          </div>
          <span className="font-mono text-xs font-bold text-ink/60">
            PROFESSIONAL TIMELINE
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight">
            Work Experience
          </h2>
          <p className="text-base text-ink/80 font-medium">
            Engineering reliable enterprise systems, APIs, and web/mobile software solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pt-6">
          {/* Central Progress Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-ink/15 z-0 rounded-full">
            <motion.div
              style={{ scaleY, transformOrigin: "top", backgroundColor: activeColor.accent }}
              className="w-full h-full rounded-full transition-colors duration-500"
            />
          </div>

          {/* Experience Case-Study Rows */}
          <div className="space-y-16 relative z-10">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => {
              const expColors = EXP_COLOR_WORLDS[exp.id] || EXP_COLOR_WORLDS.igloo;
              const isActive = activeExpId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  onViewportEnter={() => setActiveExpId(exp.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start pl-12 md:pl-16 relative group transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div
                    style={{ borderColor: expColors.accent, backgroundColor: isActive ? expColors.accent : "#FFFFFF" }}
                    className="absolute left-4 md:left-8 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-4 shadow-subtle transition-all duration-300 group-hover:scale-125"
                  />

                  {/* LEFT: Year & Company Badge (md: 4 cols) */}
                  <div className="md:col-span-4 space-y-3 md:sticky md:top-32">
                    <div
                      style={{ color: expColors.accent, backgroundColor: expColors.badgeBg, borderColor: expColors.border }}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold px-3.5 py-1.5 rounded-lg border shadow-subtle transition-colors duration-300"
                    >
                      <Calendar size={14} />
                      <span>{exp.date}</span>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white border-2 border-ink/10 p-1.5 shadow-card shrink-0">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-ink tracking-tight">
                          {exp.company}
                        </h3>
                        {exp.subtitle && (
                          <p style={{ color: expColors.accent }} className="text-xs font-mono font-bold mt-0.5">
                            {exp.subtitle}
                          </p>
                        )}
                        <div className="flex items-center gap-1 text-xs text-ink/70 font-semibold mt-1">
                          <MapPin size={12} style={{ color: expColors.accent }} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span
                        style={{ color: expColors.accent, backgroundColor: expColors.badgeBg, borderColor: expColors.border }}
                        className="inline-block text-[11px] font-mono font-bold px-3 py-1 rounded-lg border"
                      >
                        {exp.category}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT: Role Case Study Details (md: 8 cols) */}
                  <div
                    style={{ borderColor: isActive ? expColors.accent : "rgba(23, 36, 50, 0.1)" }}
                    className="md:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-poster space-y-6 transition-all duration-500"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-4 border-b border-ink/10 pb-4">
                      <div>
                        <h4 className="text-2xl font-black text-ink">
                          {exp.role}
                        </h4>
                        <p className="text-xs text-ink/70 font-mono mt-0.5 font-bold">
                          Official Engineering Position
                        </p>
                      </div>
                      <div
                        style={{ color: expColors.accent, backgroundColor: expColors.badgeBg, borderColor: expColors.border }}
                        className="flex items-center gap-1.5 text-xs font-bold font-mono px-3.5 py-1.5 rounded-full border shadow-subtle"
                      >
                        <Briefcase size={14} />
                        <span>Verified Role</span>
                      </div>
                    </div>

                    {/* Responsibilities list */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-mono font-bold text-ink uppercase tracking-wider">
                        Technical Impact & Responsibilities
                      </h5>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-ink/80 leading-relaxed font-medium">
                            <CheckCircle2 size={16} style={{ color: expColors.accent }} className="shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies tags */}
                    <div className="pt-4 border-t border-ink/10 space-y-2">
                      <span className="text-[11px] font-mono text-ink/60 uppercase tracking-wider block font-extrabold">
                        Technologies & Stack:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            style={{ color: expColors.accent, backgroundColor: expColors.badgeBg, borderColor: expColors.border }}
                            className="px-3 py-1 rounded-lg font-mono text-xs font-bold border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
