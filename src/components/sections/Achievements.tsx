"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Star, Award, Users, Globe, Cpu } from "lucide-react";

const PASTEL_BLOCKS = [
  { bg: "#CDEAF4", border: "rgba(22, 118, 168, 0.3)", text: "#1676A8", iconBg: "#FFFFFF" },
  { bg: "#F7D8E4", border: "rgba(201, 76, 120, 0.3)", text: "#C94C78", iconBg: "#FFFFFF" },
  { bg: "#DAF0DE", border: "rgba(71, 139, 90, 0.3)", text: "#478B5A", iconBg: "#FFFFFF" },
  { bg: "#FFF0C9", border: "rgba(225, 139, 35, 0.3)", text: "#E18B23", iconBg: "#FFFFFF" },
];

const HIGHLIGHT_ICONS: Record<string, React.ElementType> = {
  iccr: Award,
  "class-rep": Users,
  community: Globe,
  engineering: Cpu,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 lg:px-12 bg-vanilla border-t border-ink/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Label */}
        <div className="flex items-center justify-between border-b border-ink/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-coral uppercase tracking-widest bg-coral/15 px-3.5 py-1.5 rounded-full border border-coral/30">
              07 / HIGHLIGHTS
            </span>
            <span className="h-1 w-12 bg-coral rounded-full" />
          </div>
          <span className="font-mono text-xs font-bold text-ink/60">
            BEYOND CODE
          </span>
        </div>

        {/* Section Title */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight">
            Beyond Code & Leadership
          </h2>
          <p className="text-base text-ink/80 max-w-xl font-medium">
            Scholarships, academic leadership, and active involvement across engineering communities.
          </p>
        </div>

        {/* Alternating Pastel Editorial Staggered Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PORTFOLIO_DATA.achievements.map((item, idx) => {
            const Icon = HIGHLIGHT_ICONS[item.id] || Star;
            const blockStyle = PASTEL_BLOCKS[idx % PASTEL_BLOCKS.length];
            const isStaggered = idx % 2 === 1 ? "lg:translate-y-4" : "lg:-translate-y-2";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ backgroundColor: blockStyle.bg, borderColor: blockStyle.border }}
                className={`p-7 rounded-3xl border-2 shadow-subtle hover:shadow-poster transition-all duration-300 flex flex-col justify-between space-y-6 ${isStaggered} hover:translate-y-0 group`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span style={{ color: blockStyle.text }} className="font-mono text-3xl font-black">
                      {item.number}
                    </span>
                    <div style={{ color: blockStyle.text, backgroundColor: blockStyle.iconBg }} className="p-2.5 rounded-2xl border border-ink/10 shadow-subtle group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div>
                    <span style={{ color: blockStyle.text }} className="text-[10px] font-mono font-extrabold uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black text-ink leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-ink/80 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-ink/10 flex justify-between items-center text-[10px] font-mono font-bold text-ink/60">
                  <span>VERIFIED HIGHLIGHT</span>
                  <span style={{ color: blockStyle.text }}>0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
