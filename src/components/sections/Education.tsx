"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, Award, CheckCircle2, School } from "lucide-react";

export default function Education() {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-28 px-6 lg:px-12 bg-cocoa-light border-t border-ink/10 relative overflow-hidden">
      {/* Editorial Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.06] z-0 text-center w-full">
        <span className="font-display text-[18vw] font-black tracking-tighter text-cocoa leading-none block">
          NIT ROURKELA
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Label */}
        <div className="flex items-center justify-between border-b border-cocoa/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-cocoa uppercase tracking-widest bg-cocoa-surface px-3.5 py-1.5 rounded-full border border-cocoa/20 shadow-subtle">
              06 / EDUCATION
            </span>
            <span className="h-1 w-12 bg-cocoa-accent rounded-full" />
          </div>
          <span className="font-mono text-xs font-bold text-cocoa/80">
            ACADEMIC BACKGROUND
          </span>
        </div>

        {/* Main University Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Academic Photo Banner Visual + Official NIT Crest Logo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-cocoa/20 bg-ink min-h-[400px] lg:min-h-full p-8 sm:p-10 flex flex-col justify-between shadow-poster group"
          >
            {/* Authentic Campus Photo Background */}
            <div className="absolute inset-0 z-0">
              <Image
                src={edu.bannerImage || ""}
                alt="Nafis at NIT Rourkela"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/75" />
            </div>

            {/* Top Bar with Official NIT Rourkela Logo */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-wider font-extrabold drop-shadow-sm">
                  <GraduationCap size={18} />
                  <span>PREMIER TECHNICAL INSTITUTE</span>
                </div>
              </div>

              {/* Official NIT Rourkela Logo Badge */}
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white border-2 border-white/80 p-1 shadow-poster shrink-0">
                <Image
                  src={edu.logo}
                  alt="NIT Rourkela Crest"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
            </div>

            {/* Title & Location */}
            <div className="relative z-10 mt-auto space-y-2 pt-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md">
                NIT ROURKELA
              </h3>
              <p className="text-xs font-mono text-white/90 font-bold drop-shadow-sm">
                {edu.location}
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/25 flex justify-between items-center text-xs font-mono text-white font-bold drop-shadow-sm">
              <span>FACULTY OF ENGINEERING</span>
              <span className="text-white font-black">INDIA</span>
            </div>
          </motion.div>

          {/* RIGHT: Degree & Curriculum Details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-cocoa-surface p-8 sm:p-10 rounded-3xl border-2 border-cocoa/20 shadow-poster space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4 border-b border-cocoa/15 pb-6">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-ink">
                    {edu.degree}
                  </h4>
                  <p className="text-base font-bold text-cocoa-accent mt-1">
                    {edu.field}
                  </p>
                </div>
                <span className="px-4 py-1.5 bg-cocoa-medium/30 rounded-xl text-xs font-mono font-bold text-cocoa border border-cocoa/20 shadow-subtle">
                  {edu.institution}
                </span>
              </div>
            </div>

            {/* Detailed highlights */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono font-bold text-cocoa uppercase tracking-wider">
                Academic Curriculum & Merit Honors
              </h5>
              <ul className="space-y-3">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ink/85 leading-relaxed font-medium">
                    <CheckCircle2 size={16} className="text-cocoa-accent shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-cocoa/15 flex items-center gap-2 text-xs font-mono font-bold text-cocoa bg-cocoa-medium/25 p-3.5 rounded-2xl border border-cocoa/20 shadow-subtle">
              <Award size={18} className="text-cocoa-accent shrink-0" />
              <span>Awarded ICCR Government Merit Scholarship</span>
            </div>
          </motion.div>
        </div>

        {/* Secondary Education Grid (BNMPC & Rangpur Zilla School with Official Logos) */}
        {edu.secondaryEducation && (
          <div className="pt-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cocoa uppercase tracking-wider">
              <School size={16} className="text-cocoa-accent" />
              <span>Secondary & Higher Secondary Institutions</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {edu.secondaryEducation.map((secEdu, i) => (
                <motion.div
                  key={secEdu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cocoa-surface p-6 rounded-3xl border-2 border-cocoa/20 shadow-subtle hover:shadow-poster transition-all duration-300 flex gap-5 items-center group"
                >
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white border-2 border-cocoa/15 p-1.5 shadow-subtle shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src={secEdu.logo}
                      alt={secEdu.institution}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold text-cocoa-accent uppercase tracking-wider block">
                      {secEdu.degree} • {secEdu.field}
                    </span>
                    <h5 className="text-base font-extrabold text-ink leading-snug">
                      {secEdu.institution}
                    </h5>
                    <p className="text-xs text-cocoa/80 font-mono font-bold">
                      {secEdu.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
