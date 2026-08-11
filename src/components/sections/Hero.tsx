"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const personal = PORTFOLIO_DATA.personal;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 px-6 lg:px-12 bg-sky overflow-hidden bg-grid-pattern"
    >
      {/* Background oversized faded "N" watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.05] z-0"
      >
        <span className="font-display text-[45vw] font-black text-blue leading-none">
          N
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN (~55% – 7 cols) */}
        <motion.div
          style={{ y: textY, opacity }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6"
        >
          {/* Main Title — clamp() responsive size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="heading-display font-black text-ink tracking-tight">
              Md Nafis{" "}
              <span className="text-blue font-extrabold block sm:inline">
                Al Safayet
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Role Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <p className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
              Software Engineer{" "}
              <span className="text-ink/75 font-medium block sm:inline">
                {personal.tagline}
              </span>
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-ink pt-1">
              <span className="px-3 py-1 bg-white/90 text-blue rounded-lg border border-blue/20 shadow-subtle">
                Web Systems
              </span>
              <span className="px-3 py-1 bg-white/90 text-coral rounded-lg border border-coral/20 shadow-subtle">
                Mobile Apps
              </span>
              <span className="px-3 py-1 bg-white/90 text-mango-dark rounded-lg border border-mango/30 shadow-subtle">
                Enterprise APIs
              </span>
            </div>
          </motion.div>

          {/* Natural Concise Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-ink/80 max-w-2xl leading-relaxed font-medium"
          >
            I turn complex ideas and business workflows into polished, reliable
            digital products built for people, performance, and scale.
          </motion.p>

          {/* CTA Buttons & Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* View My Work */}
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-white hover:bg-blue text-xs font-bold uppercase tracking-wider rounded-xl shadow-poster transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>View My Work</span>
              <ArrowDownRight
                size={16}
                className="transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
              />
            </Link>

            {/* Resume Button — only show if real PDF exists */}
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-ink hover:bg-vanilla border border-blue/20 text-xs font-bold uppercase tracking-wider rounded-xl shadow-subtle transition-all duration-300"
              >
                <span>Download Resume</span>
              </a>
            )}

            {/* Secondary Let's Talk Link */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue hover:text-coral transition-colors py-2 group font-mono"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight
                size={15}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4 flex items-center gap-4 text-xs text-ink/75"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 font-bold">
              Connect:
            </span>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-1.5 hover:text-coral transition-colors font-bold text-ink"
            >
              <Linkedin size={15} className="text-blue" />
              <span>LinkedIn</span>
            </a>
            <span className="text-blue/30" aria-hidden="true">
              •
            </span>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-1.5 hover:text-coral transition-colors font-bold text-ink"
            >
              <Github size={15} className="text-blue" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN (~45% – 5 cols) — Editorial Abstract Portrait */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Strawberry pink accent circle */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-4 w-28 h-28 rounded-full bg-strawberry opacity-85 pointer-events-none shadow-subtle"
            />
            {/* Pistachio thin line element */}
            <div
              aria-hidden="true"
              className="absolute top-1/3 -right-6 w-1 h-40 bg-pistachio rounded-full pointer-events-none hidden sm:block"
            />

            {/* Main portrait frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/80 bg-white p-3 shadow-poster z-10">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-vanilla">
                <Image
                  src={personal.portraitImage}
                  alt={`Portrait of ${personal.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay at bottom */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80"
                />
                {/* Editorial Metadata Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-mango uppercase font-extrabold">
                      PORTRAIT // AUTHENTIC
                    </p>
                    <p className="text-base font-black tracking-tight text-white">
                      {personal.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-blue text-[10px] font-mono text-white font-extrabold tracking-wider uppercase shadow-subtle">
                      DHAKA, BD
                    </span>
                  </div>
                </div>
              </div>

              {/* Frame details bar */}
              <div className="pt-3 pb-1 px-2 flex justify-between items-center text-[10px] font-mono text-ink/70 border-t border-ink/10 mt-2">
                <span className="truncate mr-2">{personal.coordinates}</span>
                <span className="text-blue font-extrabold shrink-0">
                  SOFTWARE ENGINEER
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
