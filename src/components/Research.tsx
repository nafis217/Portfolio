import { ArrowUpRight } from 'lucide-react';
import { RESEARCH_DATA } from '../data/research';
import { Counter } from './ui/Counter';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

const showTodo = import.meta.env.DEV;
const isTodo = (v: string) => v.startsWith('TODO');

function decimalsOf(value: string): number {
  const dot = value.indexOf('.');
  return dot === -1 ? 0 : value.length - dot - 1;
}

export function Research() {
  const context = [
    ['Dataset', RESEARCH_DATA.dataset],
    ['Baseline', RESEARCH_DATA.baseline],
  ].filter(([, v]) => showTodo || !isTodo(v));
  const links = RESEARCH_DATA.links;
  const linkList: { label: string; href: string }[] = [];
  if (links?.paper) linkList.push({ label: 'Paper', href: links.paper });
  if (links?.thesis) linkList.push({ label: 'Thesis', href: links.thesis });
  if (links?.repo) linkList.push({ label: 'Code', href: links.repo });

  return (
    <section id="research" className="relative section-pad">
      <div className="page-container">
        <SectionHeading
          index="05"
          eyebrow="Academic research"
          title="Research & Engineering"
          description="Quantitative research on statistical data recovery and missing-data imputation."
        />

        <Reveal className="mt-14">
          <SpotlightCard className="space-y-8 p-7 sm:p-10">
            <div>
              <span className="chip chip-accent">{RESEARCH_DATA.period}</span>
              <h3 className="mt-4 max-w-3xl font-display text-2xl font-bold text-fg sm:text-4xl">{RESEARCH_DATA.title}</h3>
              <p className="mt-2 font-mono text-xs text-deep-2">{RESEARCH_DATA.frameworkName}</p>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{RESEARCH_DATA.description}</p>

            {context.length > 0 && (
              <div className="space-y-1.5 font-mono text-xs text-muted">
                {context.map(([label, value]) => (
                  <p key={label}>
                    <span className="font-semibold text-fg">{label}:</span> {value}
                  </p>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {RESEARCH_DATA.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-line bg-white/70 p-5">
                  <span className="block font-mono text-xs uppercase tracking-wider text-subtle">{m.label}</span>
                  <Counter to={Number(m.value)} decimals={decimalsOf(m.value)} className="mt-2 block font-display text-5xl font-bold text-gradient" />
                  {m.note && <span className="mt-1 block font-mono text-[11px] text-subtle">{m.note}</span>}
                </div>
              ))}
            </div>

            {linkList.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {linkList.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5 !px-4 text-xs">
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
