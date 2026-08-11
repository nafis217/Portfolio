"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { Github, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

// Project specific color worlds matching Savoy color philosophy
interface ProjectColorWorld {
  bg: string;
  accent: string;
  darkText: string;
  surface: string;
  btnBg: string;
  btnText: string;
  badgeBg: string;
}

const PROJECT_COLOR_WORLDS: Record<string, ProjectColorWorld> = {
  "igloo-oms": {
    bg: "#CDEAF4",        // Sky Blue background
    accent: "#1676A8",    // Deep blue accent
    darkText: "#172432",  // Ink text
    surface: "#FFFFFF",   // White surface
    btnBg: "#1676A8",
    btnText: "#FFFFFF",
    badgeBg: "#EAF6FA",
  },
  "nafis-agro": {
    bg: "#DAF0DE",        // Pistachio background
    accent: "#478B5A",    // Dark green accent
    darkText: "#203229",  // Deep forest text
    surface: "#F0F9F2",   // Soft mint surface
    btnBg: "#478B5A",
    btnText: "#FFFFFF",
    badgeBg: "#E2F4E5",
  },
  "my-salon": {
    bg: "#F7D8E4",        // Rose background
    accent: "#C94C78",    // Rose dark accent
    darkText: "#38232B",  // Deep plum dark text
    surface: "#FFF4F7",   // Pale pink surface
    btnBg: "#C94C78",
    btnText: "#FFFFFF",
    badgeBg: "#FCE4EC",
  },
  iglootrack: {
    bg: "#CAEAF7",        // Sky blue background
    accent: "#1676A8",    // Deep blue accent
    darkText: "#172432",  // Ink text
    surface: "#FFFFFF",   // White surface
    btnBg: "#1676A8",
    btnText: "#FFFFFF",
    badgeBg: "#EAF6FA",
  },
  "fake-news": {
    bg: "#DDD7F4",        // Lavender background
    accent: "#675AA8",    // Deep purple accent
    darkText: "#252238",  // Dark lavender text
    surface: "#F5F2FF",   // Pale lavender surface
    btnBg: "#675AA8",
    btnText: "#FFFFFF",
    badgeBg: "#EDE9FE",
  },
  "gesture-automation": {
    bg: "#FFF0C9",        // Warm Mango background
    accent: "#E18B23",    // Amber accent
    darkText: "#2B2925",  // Dark cocoa text
    surface: "#FFF8EC",   // Soft vanilla surface
    btnBg: "#E18B23",
    btnText: "#FFFFFF",
    badgeBg: "#FFF4D6",
  },
};

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const flexContainerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [scrollSectionHeight, setScrollSectionHeight] = useState("420vh");
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = PORTFOLIO_DATA.projects;
  const activeProject = projects[activeIndex] || projects[0];
  const activeColors = PROJECT_COLOR_WORLDS[activeProject.id] || PROJECT_COLOR_WORLDS["igloo-oms"];

  // Keep the vertical travel in sync with the real horizontal distance. A
  // ResizeObserver also catches late font/image layout changes, not just window
  // resizes.
  useEffect(() => {
    const calculateRange = () => {
      if (flexContainerRef.current) {
        const totalWidth = flexContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const nextRange = Math.max(0, totalWidth - viewportWidth);
        setScrollRange(nextRange);
        // A small end buffer keeps the final card fully readable before the
        // sticky section releases into the next section.
        setScrollSectionHeight(`${nextRange + window.innerHeight * 1.2}px`);
      }
    };

    calculateRange();
    window.addEventListener("resize", calculateRange);
    const resizeObserver = new ResizeObserver(calculateRange);
    if (flexContainerRef.current) {
      resizeObserver.observe(flexContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", calculateRange);
      resizeObserver.disconnect();
    };
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Continuous background color interpolation for silky 60fps color morphing
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "#CDEAF4", // 0: Igloo OMS (Sky Blue)
      "#DAF0DE", // 1: Nafis Agro (Pistachio Mint)
      "#F7D8E4", // 2: MY-SALON (Rose)
      "#CAEAF7", // 3: IglooTrack (Sky Blue)
      "#DDD7F4", // 4: Fake News (Lavender)
      "#FFF0C9", // 5: Hand Gesture (Warm Mango)
    ]
  );

  // Dynamic pixel transform for 100% pixel-perfect horizontal scroll
  // Finish the horizontal movement slightly before the sticky section ends.
  // The remaining progress acts as a calm reading pause on the final card.
  const x = useTransform(scrollYProgress, [0, 0.94, 1], [0, -scrollRange, -scrollRange]);

  // Smoothly update active index for active card badges and text states
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalProjects = projects.length;
    const step = 1 / totalProjects;
    const newIdx = Math.min(
      totalProjects - 1,
      Math.max(0, Math.floor(latest / step))
    );
    if (newIdx !== activeIndex) {
      setActiveIndex(newIdx);
    }
  });

  return (
    <motion.section
      id="projects"
      style={{ backgroundColor }}
      className="project-scroll-section relative border-t border-ink/10 transition-colors duration-700"
    >
      {/* Section Header (Fixed Top) */}
      <div className="pt-24 pb-8 px-6 lg:px-12 max-w-7xl mx-auto space-y-4 relative z-10">
        <div className="flex items-center justify-between border-b border-ink/15 pb-4">
          <div className="flex items-center gap-3">
            <span
              style={{ color: activeColors.accent, backgroundColor: activeColors.surface }}
              className="font-mono text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-ink/10 transition-colors duration-500 shadow-subtle flex items-center gap-1.5"
            >
              <Sparkles size={14} />
              <span>04 / SELECTED WORK</span>
            </span>
            <span style={{ backgroundColor: activeColors.accent }} className="h-1 w-12 rounded-full transition-colors duration-500" />
          </div>
          <span style={{ color: activeColors.darkText }} className="font-mono text-xs font-bold opacity-80 uppercase tracking-wider transition-colors duration-500">
            PROJECT ({activeIndex + 1}/{projects.length})
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 style={{ color: activeColors.darkText }} className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight transition-colors duration-500">
              Selected Work
            </h2>
            <p style={{ color: activeColors.darkText }} className="text-base sm:text-lg opacity-85 mt-1 font-medium transition-colors duration-500 max-w-xl">
              Enterprise systems, supply chain platforms, SaaS & AI products I've engineered.
            </p>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: activeColors.btnText, backgroundColor: activeColors.btnBg }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-subtle hover:scale-105 transition-all font-mono group"
          >
            <span>Explore all on GitHub</span>
            <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* DESKTOP STICKY HORIZONTAL SCROLL VIEWPORT */}
      <div
        ref={targetRef}
        style={{ height: scrollSectionHeight }}
        className="hidden lg:block relative"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            ref={flexContainerRef}
            style={{ x }}
            className="flex gap-10 pl-12 pr-24 w-max items-center"
          >
            {projects.map((project, idx) => (
              <ProjectPosterCardDesktop
                key={project.id}
                project={project}
                isActive={idx === activeIndex}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* MOBILE STACKED VERTICAL CONTAINER */}
      <div className="lg:hidden px-6 pb-24 space-y-12 max-w-2xl mx-auto pt-4">
        {projects.map((project) => (
          <ProjectPosterCardMobile key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

{/* Desktop Poster Project Panel Component */}
function ProjectPosterCardDesktop({ project, isActive }: { project: Project; isActive: boolean }) {
  const colors = PROJECT_COLOR_WORLDS[project.id] || PROJECT_COLOR_WORLDS["igloo-oms"];

  return (
    <div
      style={{ backgroundColor: colors.surface, borderColor: isActive ? colors.accent : "rgba(23, 36, 50, 0.12)" }}
      className={`w-[75vw] max-w-5xl h-[82vh] max-h-[780px] rounded-3xl border-2 shadow-poster flex flex-col justify-between p-6 xl:p-8 shrink-0 relative overflow-hidden group transition-[transform,opacity,border-color,box-shadow] duration-500 ease-out ${
        isActive ? "scale-100 opacity-100 shadow-glow" : "scale-[0.97] opacity-85"
      }`}
    >
      {/* Editorial Watermark Typography behind content */}
      <div
        style={{ color: colors.accent }}
        className="absolute top-1/2 left-8 -translate-y-1/2 font-black text-[12vw] uppercase opacity-[0.05] select-none pointer-events-none tracking-tighter leading-none z-0"
      >
        {project.title.split(" ")[0]}
      </div>

      {/* Top Poster Header */}
      <div className="flex justify-between items-center border-b border-ink/10 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <span style={{ color: colors.accent }} className="font-mono text-3xl font-black">
            {project.number}
          </span>
          <span
            style={{ color: colors.accent, backgroundColor: colors.badgeBg }}
            className="text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-ink/10 shadow-subtle"
          >
            {project.category}
          </span>
        </div>
        <span style={{ color: colors.darkText }} className="font-mono text-xs font-bold opacity-80 bg-white/70 px-3 py-1 rounded-md border border-ink/10">
          YEAR // {project.year}
        </span>
      </div>

      {/* Main Asymmetric Grid Composition */}
      <div className="grid grid-cols-12 gap-6 my-auto items-center relative z-10 min-h-0">
        {/* Left Info Column (5 cols) */}
        <div className="col-span-5 space-y-2.5">
          <div>
            <span style={{ color: colors.accent }} className="font-mono text-xs font-bold uppercase tracking-wider block mb-1">
              {project.subtitle}
            </span>
            <h3 style={{ color: colors.darkText }} className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              {project.title}
            </h3>
          </div>

          <p style={{ color: colors.darkText }} className="text-xs sm:text-sm leading-relaxed opacity-90 font-medium">
            {project.description}
          </p>

          {/* Highlights checklist */}
          <ul className="space-y-1 pt-0.5">
            {project.highlights.slice(0, 3).map((hl, i) => (
              <li key={i} style={{ color: colors.darkText }} className="flex items-start gap-2 text-xs font-semibold">
                <CheckCircle2 size={15} style={{ color: colors.accent }} className="shrink-0 mt-0.5" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Pills */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{ color: colors.darkText, backgroundColor: colors.badgeBg }}
                  className="px-2.5 py-1 rounded-md font-mono text-[11px] font-bold border border-ink/10 shadow-subtle"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Large Product Visual Mockup (7 cols) */}
        <div className="col-span-7 relative h-[clamp(12rem,30vh,19rem)] rounded-2xl overflow-hidden border-2 border-ink/10 shadow-poster group-hover:scale-[1.02] transition-transform duration-500 bg-white">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className={project.id === "my-salon" ? "object-cover" : "object-contain p-3"}
          />
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex justify-end items-center pt-2 relative z-10">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: colors.btnBg, color: colors.btnText }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-poster hover:scale-105 transition-all font-mono group"
        >
          <span>VIEW CASE</span>
          <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

{/* Mobile Poster Project Card Component */}
function ProjectPosterCardMobile({ project }: { project: Project }) {
  const colors = PROJECT_COLOR_WORLDS[project.id] || PROJECT_COLOR_WORLDS["igloo-oms"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ backgroundColor: colors.surface, borderColor: colors.accent }}
      className="rounded-3xl border-2 p-6 shadow-poster space-y-6"
    >
      <div className="flex justify-between items-center border-b border-ink/10 pb-3">
        <span style={{ color: colors.accent }} className="font-mono text-2xl font-black">
          {project.number}
        </span>
        <span style={{ color: colors.accent, backgroundColor: colors.badgeBg }} className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-lg border border-ink/10">
          {project.year}
        </span>
      </div>

      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-ink/10 shadow-subtle bg-white">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className={project.id === "my-salon" ? "object-cover" : "object-contain p-2"}
        />
      </div>

      <div className="space-y-2">
        <span style={{ color: colors.accent }} className="text-xs font-mono font-bold uppercase block">{project.subtitle}</span>
        <h3 style={{ color: colors.darkText }} className="text-2xl font-black">{project.title}</h3>
        <p style={{ color: colors.darkText }} className="text-xs opacity-90 leading-relaxed pt-1 font-medium">{project.description}</p>
      </div>

      <ul className="space-y-1.5 pt-1">
        {project.highlights.map((hl, i) => (
          <li key={i} style={{ color: colors.darkText }} className="flex items-start gap-2 text-xs font-semibold">
            <CheckCircle2 size={14} style={{ color: colors.accent }} className="shrink-0 mt-0.5" />
            <span>{hl}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {project.tech.map((t) => (
          <span key={t} style={{ color: colors.darkText, backgroundColor: colors.badgeBg }} className="px-2.5 py-1 font-mono text-[10px] font-bold rounded-md border border-ink/10">
            {t}
          </span>
        ))}
      </div>

      <div className="pt-2 flex justify-end items-center">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: colors.btnBg, color: colors.btnText }}
          className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl font-mono shadow-subtle group"
        >
          <span>VIEW CASE</span>
          <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
