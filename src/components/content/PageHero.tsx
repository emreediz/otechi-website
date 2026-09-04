import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { GeometricBackdrop } from "@/components/visual/GeometricBackdrop";
import { cn } from "@/lib/cn";

export function PageHero({
  kicker,
  title,
  titleExtra,
  subtitle,
  actions,
  aside,
  backdrop = "otechi",
  className,
}: {
  kicker?: string;
  title: string;
  /** Rendered right after the title (e.g. the Ole underline). */
  titleExtra?: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  backdrop?: "otechi" | "ole" | "namaz" | "none";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-bg-subtle",
        className,
      )}
    >
      {backdrop !== "none" ? <GeometricBackdrop variant={backdrop} /> : null}
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div
          className={cn(
            "grid items-center gap-12",
            aside ? "lg:grid-cols-[1.05fr_0.95fr]" : "",
          )}
        >
          <div className="max-w-2xl">
            {kicker ? (
              <p className="hero-rise hero-rise-1 font-display text-sm font-semibold uppercase tracking-wide text-accent">
                {kicker}
              </p>
            ) : null}
            <h1 className="hero-rise hero-rise-2 mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {titleExtra}
            {subtitle ? (
              <p className="hero-rise hero-rise-3 mt-5 text-lg leading-relaxed text-fg-muted">
                {subtitle}
              </p>
            ) : null}
            {actions ? (
              <div className="hero-rise hero-rise-4 mt-8 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            ) : null}
          </div>
          {aside ? (
            <div className="hero-rise hero-rise-3 min-w-0">{aside}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
