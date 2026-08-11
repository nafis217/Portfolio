import React, { useState } from 'react';
import { Mail, Copy, Check, Calendar, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900 text-slate-100">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Have a project, product idea, or operational engineering problem?
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you're looking to discuss enterprise software architecture, full-stack web applications, mobile operational systems, or custom e-commerce storefronts—feel free to start a conversation.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Card 1: Direct Email & Copy Box */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Direct Email</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Send an email directly or copy the address below.
                </p>
              </div>

              {/* Copy Box */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 font-mono text-xs">
                <span className="text-sky-300 truncate font-medium">{PORTFOLIO_DATA.contact.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 flex items-center gap-1 text-[11px]"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="btn-editorial-primary justify-center text-xs py-3 w-full bg-sky-600 hover:bg-sky-500 border-sky-600 text-white"
            >
              <span>Compose Mail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Schedule & Social Links */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Schedule Discussion</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect for a dedicated discussion on system requirements or technical roles.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="text-white">{PORTFOLIO_DATA.personal.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Availability:</span>
                  <span className="text-emerald-400 font-semibold">Open to Opportunities</span>
                </div>
              </div>
            </div>

            <a
              href={PORTFOLIO_DATA.contact.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary justify-center text-xs py-3 w-full bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Book Discussion Slot</span>
              <ArrowUpRight className="w-4 h-4 ml-1 text-slate-400" />
            </a>
          </div>

        </div>

        {/* Social Channels Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4 text-slate-300" />
            <span>github.com/nafis217</span>
          </a>

          <a
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center gap-2"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

      </div>
    </section>
  );
};
