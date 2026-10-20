"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

/**
 * In-page chapter links for a long product page. Desktop: sticks under the
 * header and marks the chapter in view (one IntersectionObserver). Mobile:
 * a horizontally scrollable row in the flow (not sticky).
 */
export function ChapterNav({
  label,
  items,
}: {
  label: string;
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    // Chapters currently crossing the band; none → nothing is marked (e.g.
    // back up in the intro, between chapters).
    const inBand = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) inBand.add(e.target.id);
          else inBand.delete(e.target.id);
        }
        setActive(items.find((item) => inBand.has(item.id))?.id ?? null);
      },
      // A thin band ~35% down the viewport decides the current chapter.
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav
      aria-label={label}
      data-chapter-nav
      className="border-y border-fg/10 bg-bg/90 backdrop-blur-md lg:sticky lg:top-16 lg:z-30"
    >
      <Container>
        <ol className="no-scrollbar -mx-5 flex overflow-x-auto px-5 sm:-mx-8 sm:px-8">
          {items.map((item, i) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  // Inset focus ring: the scrolling row would clip an outside one.
                  "inline-flex min-h-12 items-center gap-2 whitespace-nowrap px-3 text-sm font-medium transition-colors focus-visible:outline-offset-[-2px]",
                  active === item.id
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                <span className="text-xs tabular-nums text-fg-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="link-underline">{item.label}</span>
                {active === item.id ? (
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent"
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
