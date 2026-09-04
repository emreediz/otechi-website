import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "./Container";

export function Section({
  id,
  className,
  containerClassName,
  subtle = false,
  animate = true,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  subtle?: boolean;
  animate?: boolean;
  children: ReactNode;
}) {
  const inner = <Container className={containerClassName}>{children}</Container>;
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24", subtle && "bg-bg-subtle", className)}
    >
      {animate ? <Reveal>{inner}</Reveal> : inner}
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  className,
}: {
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 text-base leading-relaxed text-fg-muted sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
