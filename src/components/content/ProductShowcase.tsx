import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Rich product block for detail pages: copy on one side, a framed visual on
 * the other. Sets its own `data-theme` so Ole shows orange and Namaz shows
 * green regardless of the page it sits on.
 */
export function ProductShowcase({
  theme,
  eyebrow,
  name,
  tagline,
  points,
  href,
  ctaLabel,
  visual,
  reversed = false,
}: {
  theme: "ole" | "namaz";
  eyebrow?: string;
  name: string;
  tagline: string;
  points?: string[];
  href: string;
  ctaLabel: string;
  visual: ReactNode;
  reversed?: boolean;
}) {
  return (
    <section data-theme={theme} className="bg-bg py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={cn(reversed && "lg:order-2")}>
              {eyebrow ? (
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
                  {eyebrow}
                </p>
              ) : null}
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-fg-muted">
                {tagline}
              </p>
              {points && points.length > 0 ? (
                <ul className="mt-6 flex flex-col gap-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm text-fg-muted"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link
                href={href}
                className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5"
              >
                {ctaLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div
              className={cn(
                "relative rounded-3xl bg-bg-subtle p-6 sm:p-10",
                reversed && "lg:order-1",
              )}
            >
              {visual}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
