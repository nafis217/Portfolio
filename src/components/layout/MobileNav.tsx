"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, ArrowUpRight, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  activeSection: string;
}

export default function MobileNav({
  isOpen,
  onClose,
  navItems,
  activeSection,
}: MobileNavProps) {
  // Close on ESC key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll while nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-sky flex flex-col justify-between px-5 sm:px-6 pt-24 pb-8 sm:pb-12 xl:hidden overflow-y-auto"
        >
          {/* Top bar */}
          <div className="flex justify-between items-center border-b border-ink/20 pb-4">
            <span className="font-mono text-xs text-ink/70 tracking-wider font-bold">
              {PORTFOLIO_DATA.personal.coordinates}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-ink hover:text-blue transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Nav Items */}
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3 sm:gap-6 my-auto py-8">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between text-2xl sm:text-3xl font-extrabold tracking-tight py-2 transition-colors ${
                      isActive ? "text-blue" : "text-ink hover:text-blue"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className="font-mono text-xs text-ink/60 font-bold"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Socials & Resume */}
          <div className="border-t border-ink/20 pt-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <a
                  href={PORTFOLIO_DATA.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-2 text-xs font-bold text-ink hover:text-blue transition-colors"
                >
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-2 text-xs font-bold text-ink hover:text-blue transition-colors"
                >
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
              </div>
              {PORTFOLIO_DATA.personal.resumeUrl && (
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-coral hover:text-blue transition-colors"
                >
                  Resume <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </div>
            <p className="text-[11px] text-ink/60 font-mono text-center font-bold">
              &copy; {new Date().getFullYear()} Md Nafis Al Safayet. All rights reserved.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
