interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  duration?: number;
}

/** Endless horizontal ticker. The second copy is hidden from assistive tech. */
export function Marquee({ items, reverse = false, duration = 40 }: MarqueeProps) {
  return (
    <div className="marquee" role="list" aria-label="Technologies">
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ '--dur': `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-group" aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                role={copy === 0 ? 'listitem' : undefined}
                className="font-display text-2xl sm:text-4xl font-semibold text-fg/80 border border-line rounded-full px-6 py-3 whitespace-nowrap bg-white/[0.03]"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
