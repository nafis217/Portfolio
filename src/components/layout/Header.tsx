"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Linkedin, Github, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4",
          scrolled
            ? "glass-header border-b border-blue/20 shadow-subtle py-3.5"
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            aria-label="Back to top"
            className="hidden md:block font-display text-lg font-black tracking-[0.2em] text-ink hover:text-blue transition-colors"
          >
            NAFIS
          </Link>

          {/* Navigation items */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-ink/80">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 -mx-3 transition-all hover:text-blue",
                    isActive
                      ? "bg-white/70 text-blue font-extrabold shadow-subtle"
                      : "text-ink/80 hover:bg-white/40"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* FAR RIGHT: Social links & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 border-l border-ink/20 pl-4">
              <a
                href={PORTFOLIO_DATA.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-ink/80 hover:text-blue transition-colors rounded-full hover:bg-white/50"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-ink/80 hover:text-blue transition-colors rounded-full hover:bg-white/50"
              >
                <Github size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink hover:text-blue transition-colors rounded-xl border border-ink/20 bg-white/70 shadow-subtle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Panel */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}
