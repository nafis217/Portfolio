"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-white relative pt-20 pb-12 px-6 lg:px-12 overflow-hidden border-t border-white/10">
      {/* Large Subtle Background Watermark Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.05] whitespace-nowrap z-0">
        <span className="font-display text-[22vw] font-black tracking-tighter text-white leading-none">
          NAFIS
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Footer Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16">
          {/* Left Brand info */}
          <div className="space-y-4 max-w-md">
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-medium">
              Software Engineer based in Dhaka, Bangladesh. Building reliable enterprise web, mobile, and REST API systems.
            </p>
          </div>

          {/* Center Navigation Shortcuts */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-xs font-mono font-bold uppercase tracking-wider text-white/70">
            <Link href="#about" className="hover:text-mango transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-mango transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-mango transition-colors">
              Work
            </Link>
            <Link href="#skills" className="hover:text-mango transition-colors">
              Skills
            </Link>
            <Link href="#education" className="hover:text-mango transition-colors">
              Education
            </Link>
            <Link href="#contact" className="hover:text-mango transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Social Shortcuts & Back to Top */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-4 text-white/80">
              <a
                href={PORTFOLIO_DATA.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-white/10 hover:bg-mango hover:text-ink transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-white/10 hover:bg-mango hover:text-ink transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.social.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full bg-white/10 hover:bg-mango hover:text-ink transition-all"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-mango hover:text-white transition-colors py-1 group"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Coordinates Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/60 font-bold">
          <p>© {new Date().getFullYear()} Md Nafis Al Safayet. All rights reserved.</p>
          <p>{PORTFOLIO_DATA.personal.coordinates}</p>
        </div>
      </div>
    </footer>
  );
}
