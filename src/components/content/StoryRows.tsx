import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

export type StoryRow = { title: string; body: string; media: ReactNode };

/**
 * Alternating media / text rows with large numbers — a product story told
 * step by step. Each row is a reveal trigger, so `clip-reveal` media inside
 * opens as the row scrolls in.
 */
export function StoryRows({ items }: { items: StoryRow[] }) {
  return (
    <ol className="space-y-20 sm:space-y-28">
      {items.map((item, i) => {
        const flip = i % 2 === 1;
        return (
          <li key={item.title}>
            <Reveal
              variant="trigger"
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8"
            >
              <div
                className={cn(
                  "lg:col-span-6 lg:row-start-1",
                  flip ? "lg:col-start-7" : "lg:col-start-1",
                )}
              >
                {item.media}
              </div>
              <div
                className={cn(
                  "stagger-item lg:col-span-5 lg:row-start-1",
                  flip ? "lg:col-start-1" : "lg:col-start-8",
                )}
              >
                <span
                  aria-hidden="true"
                  className="block text-number text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-lead text-fg-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
