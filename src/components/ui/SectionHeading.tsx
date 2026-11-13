import { Reveal } from './Reveal';
import { SplitText } from './SplitText';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ index, eyebrow, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl space-y-5 ${className}`}>
      <Reveal className="flex items-center gap-3">
        <span className="eyebrow">{index} / {eyebrow}</span>
        <span className="h-px w-16 bg-gradient-to-r from-accent/60 to-transparent" />
      </Reveal>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-fg">
        <SplitText text={title} by="word" />
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="text-base sm:text-lg text-muted max-w-2xl">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
