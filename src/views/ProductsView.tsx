import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { productTiles } from "@/lib/showcaseData";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { MetaList } from "@/components/ui/MetaList";
import { Reveal } from "@/components/motion/Reveal";
import { PageIntro } from "@/components/content/PageIntro";
import { NumberedList } from "@/components/content/NumberedList";
import { ClosingCta } from "@/components/content/ClosingCta";
import { ProductTiles } from "@/components/showcase/ProductTiles";

export function ProductsView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.products;
  const tiles = productTiles(dict, locale);
  const details = [
    { tile: tiles.ole, copy: t.ole },
    { tile: tiles.namaz, copy: t.namaz },
  ];

  return (
    <>
      <PageIntro kicker={t.title} title={t.intro} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <h2 className="sr-only">{dict.home.products.title}</h2>
          <Reveal>
            <ProductTiles
              exploreLabel={dict.home.products.explore}
              tiles={[tiles.ole, tiles.namaz]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-fg/10 py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHead kicker={t.detailsKicker} title={t.detailsTitle} />
          </Reveal>

          <div className="mt-12 sm:mt-16">
            {details.map(({ tile, copy }) => (
              <Reveal key={tile.theme}>
                <article
                  data-theme={tile.theme}
                  className="grid gap-10 border-t border-fg/15 py-12 lg:grid-cols-12 lg:gap-8"
                >
                  <div className="lg:col-span-4">
                    <span className="text-xs tabular-nums tracking-widest text-fg-muted">
                      {tile.index}
                    </span>
                    <h3 className="mt-3 text-heading">{tile.name}</h3>
                    <p className="mt-4 max-w-sm leading-relaxed text-fg-muted">
                      {copy.tagline}
                    </p>
                    <Link
                      href={tile.href}
                      className="group mt-6 inline-flex min-h-11 items-center gap-2 font-semibold"
                    >
                      <span className="link-underline">
                        {dict.common.learnMore}
                      </span>
                      <ArrowRight
                        className="size-4 text-accent transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                  <div className="min-w-0 lg:col-span-7 lg:col-start-6">
                    <MetaList
                      items={[
                        {
                          label: t.factLabels.platform,
                          value: copy.facts.platform,
                        },
                        {
                          label: t.factLabels.audience,
                          value: copy.facts.audience,
                        },
                        {
                          label: t.factLabels.status,
                          value: copy.facts.status,
                        },
                      ]}
                    />
                    <Reveal variant="trigger" className="mt-10">
                      <NumberedList
                        items={copy.points.map((title) => ({ title }))}
                      />
                    </Reveal>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta
        kicker={dict.common.cta.kicker}
        title={dict.common.cta.title}
        href={localizedPath("contact", locale)}
      />
    </>
  );
}
