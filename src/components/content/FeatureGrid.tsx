import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

export type Feature = {
  title: string;
  body: string;
};

export function FeatureGrid({
  items,
  icons,
  columns = 3,
  className,
}: {
  items: Feature[];
  icons?: LucideIcon[];
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <Reveal variant="trigger" className={className}>
      <ul
        className={cn(
          "grid gap-5",
          columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        {items.map((item, i) => {
          const Icon = icons?.[i];
          return (
            <li
              key={item.title}
              className="stagger-item rounded-xl border border-border bg-bg p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]"
            >
              {Icon ? (
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon
                    className="size-5"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </span>
              ) : null}
              <h3
                className={cn(
                  "font-display text-base font-semibold",
                  Icon && "mt-4",
                )}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {item.body}
              </p>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
