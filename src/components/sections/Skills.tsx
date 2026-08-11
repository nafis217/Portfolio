"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Cpu, Code, Server, Database, Smartphone, Wrench, Sparkles } from "lucide-react";

// Category color blocks & subtle editorial rotations
const CATEGORY_STYLES: Record<string, { bg: string; border: string; text: string; iconBg: string; rotation: string }> = {
  FRONTEND: {
    bg: "#CDEAF4",        // sky
    border: "rgba(22, 118, 168, 0.3)",
    text: "#1676A8",
    iconBg: "#FFFFFF",
    rotation: "-rotate-1",
  },
  BACKEND: {
    bg: "#DDF1DF",        // mint/pistachio
    border: "rgba(77, 152, 98, 0.3)",
    text: "#478B5A",
    iconBg: "#FFFFFF",
    rotation: "rotate-1",
  },
  DATABASE: {
    bg: "#FFDFA6",        // warm mango/amber
    border: "rgba(225, 139, 35, 0.3)",
    text: "#E18B23",
    iconBg: "#FFFFFF",
    rotation: "-rotate-1",
  },
  MOBILE: {
    bg: "#F6CEDB",        // soft strawberry
    border: "rgba(201, 76, 120, 0.3)",
    text: "#C94C78",
    iconBg: "#FFFFFF",
    rotation: "rotate-0",
  },
  "TOOLS / PLATFORM": {
    bg: "#E6E6E2",        // editorial soft stone
    border: "rgba(23, 36, 50, 0.2)",
    text: "#172432",
    iconBg: "#FFFFFF",
    rotation: "-rotate-1",
  },
  OTHER: {
    bg: "#DDD7F4",        // lavender
    border: "rgba(103, 90, 168, 0.3)",
    text: "#675AA8",
    iconBg: "#FFFFFF",
    rotation: "rotate-1",
  },
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  FRONTEND: Code,
  BACKEND: Server,
  DATABASE: Database,
  MOBILE: Smartphone,
  "TOOLS / PLATFORM": Wrench,
  OTHER: Sparkles,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", ...PORTFOLIO_DATA.skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === "ALL"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-6 lg:px-12 bg-vanilla border-t border-ink/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Label */}
        <div className="flex items-center justify-between border-b border-ink/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-blue uppercase tracking-widest bg-sky px-3.5 py-1.5 rounded-full border border-blue/20">
              05 / SKILLS
            </span>
            <span className="h-1 w-12 bg-blue rounded-full" />
          </div>
          <span className="font-mono text-xs font-bold text-ink/60">
            TECHNICAL DOMAINS
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight">
              Skills Architecture
            </h2>
            <p className="text-base text-ink/80 mt-1 max-w-xl font-medium">
              Languages, frameworks, databases, and platform tools engineered across web, mobile & enterprise stacks.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue text-white shadow-subtle scale-105"
                    : "bg-white text-ink/80 hover:text-blue hover:bg-sky/50 border border-ink/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Architecture Grid */}
        <div className="space-y-12">
          {filteredSkills.map((group, groupIdx) => {
            const Icon = CATEGORY_ICONS[group.category] || Cpu;
            const groupStyle = CATEGORY_STYLES[group.category] || CATEGORY_STYLES.FRONTEND;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-ink/10 pb-2">
                  <div
                    style={{ backgroundColor: groupStyle.bg, color: groupStyle.text }}
                    className="p-2 rounded-xl border border-ink/10 shadow-subtle"
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-xs font-extrabold uppercase tracking-widest text-ink">
                    {group.category}
                  </h3>
                  <span style={{ color: groupStyle.text }} className="text-xs font-mono font-bold">
                    ({group.skills.length})
                  </span>
                </div>

                {/* Skill Items Grid with Subtle Editorial Rotations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.skills.map((skill, sIdx) => {
                    const rotationClass = sIdx % 2 === 0 ? groupStyle.rotation : "rotate-0";

                    return (
                      <div
                        key={skill.name}
                        style={{ backgroundColor: groupStyle.bg, borderColor: groupStyle.border }}
                        className={`p-6 rounded-2xl border-2 shadow-subtle hover:shadow-poster transition-all duration-300 transform ${rotationClass} hover:rotate-0 group`}
                      >
                        <div className="flex items-center justify-between">
                          <span style={{ color: groupStyle.text }} className="font-black text-base transition-colors">
                            {skill.name}
                          </span>
                          <span
                            style={{ color: groupStyle.text, backgroundColor: "#FFFFFF" }}
                            className="font-mono text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-ink/10 shadow-subtle"
                          >
                            VERIFIED
                          </span>
                        </div>
                        <p className="text-xs text-ink/80 mt-2.5 leading-relaxed font-medium">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
