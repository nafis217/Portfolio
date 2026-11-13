import { useRef, useState } from 'react';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Magnetic } from './ui/Magnetic';
import { Reveal } from './ui/Reveal';
import { SplitText } from './ui/SplitText';

export function Contact() {
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
    window.setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <section id="contact" className="relative overflow-hidden section-pad">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 bg-accent/20" />
        <div className="font-display text-outline absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[22vw] font-bold leading-none opacity-30">
          HELLO
        </div>
      </div>

      <div className="page-container relative z-10">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <Reveal className="flex items-center justify-center gap-3">
            <span className="eyebrow">08 / Contact</span>
          </Reveal>

          <h2 className="font-display text-4xl font-bold text-fg sm:text-6xl">
            <SplitText text="Have something worth building?" by="word" />
          </h2>

          <Reveal delay={0.1}>
            <p className="mx-auto max-w-2xl text-base text-muted sm:text-lg">
              Whether it's a digital product, internal system, e-commerce experience or engineering challenge — I'm always interested in a good problem.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 font-mono text-sm text-accent">
              <span className="pulse-dot" aria-hidden="true" />
              {PROFILE_DATA.availability}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Magnetic>
              <a href={`mailto:${PROFILE_DATA.contact.email}`} className="btn btn-primary !px-7 !py-4">
                <span>Start a conversation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <button type="button" onClick={handleCopyEmail} aria-live="polite" className="btn btn-ghost !px-7 !py-4">
                {status === 'copied' ? (
                  <>
                    <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span className="font-mono text-accent">Email copied!</span>
                  </>
                ) : status === 'failed' ? (
                  <>
                    <Copy className="h-4 w-4 text-amber-300" aria-hidden="true" />
                    <span className="font-mono text-amber-300">Copy failed — press Ctrl/Cmd+C</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono">Copy email</span>
                  </>
                )}
              </button>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="font-mono text-sm text-muted">
              <span ref={emailRef}>{PROFILE_DATA.contact.email}</span>
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap items-center justify-center gap-6 pt-6 font-mono text-xs text-muted">
            <a href={PROFILE_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
              <GithubIcon className="h-4 w-4" />
              <span>github.com/{PROFILE_DATA.contact.githubHandle}</span>
            </a>
            <span className="text-line-strong" aria-hidden="true">•</span>
            <a href={PROFILE_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
