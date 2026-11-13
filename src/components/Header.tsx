import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

const CV_HREF = `${import.meta.env.BASE_URL}${PROFILE_DATA.cvPath}`;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Approach', href: '#how-i-work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 header-sticky flex items-center transition-all duration-300 ${isScrolled ? 'shadow-xs border-b border-slate-200/80' : ''}`}>
      <div className="page-container flex items-center justify-between w-full">
        
        {/* Left: Brand Identity */}
        <a href="#hero" className="flex items-center gap-2.5 group text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs group-hover:bg-sky-700 transition-colors">
            NS
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm text-slate-900 tracking-tight leading-none">
              {PROFILE_DATA.name}
            </span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5">
              {PROFILE_DATA.role}
            </span>
          </div>
        </a>

        {/* Right: Desktop Links & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href={CV_HREF}
            download
            className="btn-primary-editorial text-xs py-2 px-4"
          >
            <span>Download CV</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[var(--header-height)] bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-sky-700 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href={CV_HREF}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary-editorial w-full justify-center text-xs py-3"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
