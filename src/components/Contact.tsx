import React, { useRef, useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const emailRef = useRef<HTMLSpanElement>(null);

  const selectEmail = () => {
    const node = emailRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleCopyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(PROFILE_DATA.contact.email);
      setStatus('copied');
    } catch {
      // Fallback: select the text so the visitor can copy it manually.
      selectEmail();
      setStatus('failed');
    }
    setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <section id="contact" className="section-padding relative border-t border-slate-200/80 bg-slate-900 text-slate-100">
      <div className="page-container">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Contact
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Have something worth building?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether it's a digital product, internal system, e-commerce experience or engineering challenge, I'm always interested in a good problem.
          </p>

          <p className="inline-flex items-center gap-2 text-sm font-mono text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
            {PROFILE_DATA.availability}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              className="btn-primary-editorial bg-sky-600 border-sky-600 hover:bg-sky-500 text-white text-sm py-3 px-6"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <button
              onClick={handleCopyEmail}
              aria-live="polite"
              className="btn-secondary-editorial bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 text-sm py-3 px-5 flex items-center gap-2"
            >
              {status === 'copied' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold font-mono">Email Copied!</span>
                </>
              ) : status === 'failed' ? (
                <>
                  <Copy className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 font-mono">Copy failed — press Ctrl/Cmd+C</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="font-mono">Copy email</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm font-mono text-slate-300">
            <span ref={emailRef}>{PROFILE_DATA.contact.email}</span>
          </p>

          {/* Social Channels Row */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a
              href={PROFILE_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/{PROFILE_DATA.contact.githubHandle}</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={PROFILE_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
