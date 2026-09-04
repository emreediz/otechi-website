import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

export type FlowRow = {
  title: string;
  body: string;
  visual: ReactNode;
};

/**
 * Alternating text / framed-visual rows that walk through a product story
 * (used on the Ole page for QR loyalty → campaigns → notifications → setup).
 */
export function FeatureFlow({ rows }: { rows: FlowRow[] }) {
  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      {rows.map((row, i) => {
        const flip = i % 2 === 1;
        return (
          <Reveal key={row.title}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={cn(flip && "lg:order-2")}>
                <span
                  className="inline-flex size-9 items-center justify-center rounded-xl bg-accent/10 font-display text-sm font-semibold text-accent"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {row.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-fg-muted">
                  {row.body}
                </p>
              </div>
              <div className={cn("flex justify-center", flip && "lg:order-1")}>
                {row.visual}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
