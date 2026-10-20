import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Page-closing call to action: one very large linked line with a turning
 * arrow, plus optional secondary links underneath.
 */
export function ClosingCta({
  kicker,
  title,
  href,
  children,
}: {
  kicker: string;
  title: string;
  href: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-t border-fg/10">
      <Container className="py-24 sm:py-32">
        <Reveal>
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-8">
            <Link
              href={href}
              className="group flex items-center justify-between gap-6"
            >
              <span className="text-display-xl text-balance transition-colors duration-300 group-hover:text-accent">
                {title}
              </span>
              <span
                aria-hidden="true"
                className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-focus-visible:rotate-45 sm:size-24"
              >
                <ArrowUpRight className="size-6 sm:size-10" />
              </span>
            </Link>
          </h2>
        </Reveal>
        {children ? (
          <Reveal className="mt-16 border-t border-fg/15 pt-8 sm:mt-24">
            {children}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
