import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { MaskedTitle } from "@/components/ui/MaskedTitle";

/**
 * Editorial page opening: kicker, large masked h1, then a ruled row with the
 * lead text and actions. Plays on load (`hero-rise`, `.mask-word`), never on
 * scroll, and is fully visible without JS.
 */
export function PageIntro({
  kicker,
  title,
  highlight,
  lead,
  actions,
  children,
}: {
  kicker: string;
  title: string;
  highlight?: string;
  lead?: string;
  actions?: ReactNode;
  /** Extra content below the ruled row (e.g. a scroll hint). */
  children?: ReactNode;
}) {
  return (
    <section>
      <Container className="pb-16 pt-14 sm:pb-24 sm:pt-24 lg:pt-32">
        <Kicker className="hero-rise hero-rise-1">{kicker}</Kicker>
        <h1 className="mt-8 max-w-6xl text-display-l sm:mt-10">
          <MaskedTitle text={title} highlight={highlight} />
        </h1>

        {lead || actions ? (
          <div className="mt-12 grid gap-8 border-t border-fg/15 pt-8 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            {lead ? (
              <p className="hero-rise hero-rise-3 max-w-xl text-lead text-fg-muted">
                {lead}
              </p>
            ) : null}
            {actions ? (
              <div className="hero-rise hero-rise-4 flex flex-wrap gap-3">
                {actions}
              </div>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
