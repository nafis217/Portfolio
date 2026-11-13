import { NAV_LINKS } from '../data/nav';
import { useActiveSection } from '../hooks/useActiveSection';

const IDS = ['hero', ...NAV_LINKS.map((l) => l.id)];

/** Vertical dot navigation on wide screens. */
export function SectionRail() {
  const active = useActiveSection(IDS);

  return (
    <nav aria-label="Page sections" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
      {[{ id: 'hero', label: 'Top' }, ...NAV_LINKS].map((link) => {
        const isActive = active === link.id;
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-label={link.label}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-fg opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {link.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive ? 'h-6 w-[6px] bg-ink' : 'h-[6px] w-[6px] bg-subtle/60 group-hover:bg-deep'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
