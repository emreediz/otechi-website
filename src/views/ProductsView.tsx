import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { productCapsules, type ProductKey } from "@/lib/productCapsules";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { Closing } from "@/components/content/Closing";
import { Capsule } from "@/components/visual/Capsule";
import { OleRewardCard } from "@/components/mock/OleMocks";
import { PanelQrCard } from "@/components/mock/PanelMocks";
import { NamazToday } from "@/components/mock/NamazMocks";

/**
 * Products: a short centred intro, then one tall card per product (coded
 * mock-up on top; name, one line, three facts and the link below).
 */
export function ProductsView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.products;
  const copy = dict.home.products.items;
  const mock = dict.mock;
  const capsules = productCapsules(locale);
  const contactHref = localizedPath("contact", locale);

  const visuals: Record<ProductKey, ReactNode> = {
    ole: <OleRewardCard copy={mock.ole} filled={3} />,
    panel: <PanelQrCard copy={mock.panel} />,
    namaz: (
      <NamazToday copy={mock.namaz} done={[true, true, true, false, false]} />
    ),
  };

  return (
    <PageTransition>
      <section className="pb-16 pt-16 text-center sm:pt-24">
        <Container>
          <Kicker className="hero-rise hero-rise-1">{t.kicker}</Kicker>
          <h1 className="mt-6 text-display-l">
            {t.titleLines.map((line) => (
              <span key={line} className="hero-line">
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero-rise hero-rise-3 mx-auto mt-6 max-w-[36ch] text-lead text-fg-muted">
            {t.lead}
          </p>
        </Container>
      </section>

      <section className="pb-[clamp(5rem,11vw,9.5rem)]">
        <Container>
          <Reveal
            variant="trigger"
            className="grid gap-4 lg:grid-cols-3 lg:gap-5"
          >
            {capsules.map((product) => {
              const facts = t.facts[product.key];
              return (
                <article
                  key={product.key}
                  data-theme={product.key}
                  className="card stagger-item flex flex-col !p-0"
                >
                  <div
                    aria-hidden="true"
                    className="grid h-[25rem] place-items-center overflow-hidden bg-[radial-gradient(80%_70%_at_50%_100%,var(--accent-soft),var(--surface))] p-6 [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]"
                  >
                    <div className="origin-center scale-[0.9]">
                      {visuals[product.key]}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <Capsule
                      color={product.color}
                      icon={product.icon}
                      className="self-start [--h:2.75rem]"
                    >
                      {product.label}
                    </Capsule>
                    <h2 className="mt-6 text-title text-balance">
                      <span className="sr-only">{product.label} — </span>
                      {copy[product.key].title}
                    </h2>
                    <p className="mt-2.5 text-fg-soft">
                      {copy[product.key].body}
                    </p>
                    <dl className="mt-6 grid gap-2 border-t border-border pt-5 text-sm">
                      {(["platform", "audience", "status"] as const).map(
                        (key) => (
                          <div key={key} className="flex justify-between gap-4">
                            <dt className="text-fg-soft">
                              {t.factLabels[key]}
                            </dt>
                            <dd className="text-right font-medium">
                              {facts[key]}
                            </dd>
                          </div>
                        ),
                      )}
                    </dl>
                    <Link
                      href={product.href}
                      className="group mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-8 font-semibold"
                    >
                      <span className="border-b-[1.5px] border-accent pb-0.5">
                        {copy[product.key].cta}
                      </span>
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </Reveal>
          <p className="mt-8 text-center text-xs text-fg-faint">
            {mock.caption}
          </p>
        </Container>
      </section>

      <Closing
        lines={[dict.common.cta.kicker, dict.common.cta.title]}
        capsules={capsules}
        capsulesLabel={dict.home.hero.capsulesLabel}
        action={
          <Button href={contactHref} size="lg">
            {dict.nav.cta}
          </Button>
        }
      />
    </PageTransition>
  );
}
