import Image from "next/image";
import { Layers, PenTool, Infinity as InfinityIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/content/PageHero";
import { FeatureGrid } from "@/components/content/FeatureGrid";
import { ProductCard } from "@/components/content/ProductCard";
import { Faq } from "@/components/content/Faq";
import { GeometricBackdrop } from "@/components/visual/GeometricBackdrop";

const WHAT_ICONS = [Layers, PenTool, InfinityIcon];

export function HomeView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home;
  const s = dict.showcase;

  return (
    <>
      <PageHero
        backdrop="none"
        kicker={t.hero.kicker}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        actions={
          <>
            <Button href={localizedPath("products", locale)}>
              {t.hero.ctaPrimary}
            </Button>
            <Button
              href={localizedPath("about", locale)}
              variant="secondary"
            >
              {t.hero.ctaSecondary}
            </Button>
          </>
        }
        aside={
          <Image
            src={IMG.home.hero}
            alt={`${BRAND.products.ole} & ${BRAND.products.namaz}`}
            width={IMG.home.heroW}
            height={IMG.home.heroH}
            priority
            sizes="(min-width: 1024px) 34rem, 90vw"
            className="mx-auto h-auto w-full max-w-md drop-shadow-[0_18px_36px_rgba(0,0,0,0.10)] lg:mx-0 lg:max-w-none"
          />
        }
      />

      <Section>
        <SectionHeading title={t.what.title} intro={t.what.intro} />
        <FeatureGrid className="mt-10" items={t.what.items} icons={WHAT_ICONS} />
      </Section>

      <Section subtle>
        <SectionHeading title={t.products.title} intro={t.products.subtitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ProductCard
            theme="ole"
            name={BRAND.products.ole}
            tagline={t.products.ole.tagline}
            href={localizedPath("productOle", locale)}
            ctaLabel={dict.common.learnMore}
            logoSrc={IMG.ole.logo}
            logoAlt={s.home.oleLogoAlt}
            logoW={IMG.ole.logoW}
            logoH={IMG.ole.logoH}
            mediaVariant="contain-dark"
          />
          <ProductCard
            theme="namaz"
            name={BRAND.products.namaz}
            tagline={t.products.namaz.tagline}
            href={localizedPath("productNamaz", locale)}
            ctaLabel={dict.common.learnMore}
            logoSrc={IMG.namaz.art}
            logoAlt={s.home.namazLogoAlt}
            logoW={IMG.namaz.artW}
            logoH={IMG.namaz.artH}
            mediaVariant="cover"
          />
        </div>
      </Section>

      <section className="relative isolate overflow-hidden border-y border-border bg-bg">
        <GeometricBackdrop variant="otechi" />
        <Container className="relative py-16 sm:py-24">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {s.home.studioTitle}
              </h2>
              <div>
                <p className="text-lg leading-relaxed text-fg-muted">
                  {s.home.studioBody}
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {t.approach.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-border bg-bg p-5 text-sm leading-relaxed text-fg-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section subtle>
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {t.aboutStrip.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            {t.aboutStrip.body}
          </p>
          <Button
            href={localizedPath("about", locale)}
            variant="secondary"
            className="mt-6"
          >
            {t.aboutStrip.cta}
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t.faq.title} />
        <div className="mt-8 max-w-3xl">
          <Faq items={t.faq.items} />
        </div>
      </Section>

      <section className="border-t border-border bg-bg">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {t.closing.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button href={localizedPath("productOle", locale)}>
                  {t.closing.ctaOle}
                </Button>
                <Button
                  href={localizedPath("productNamaz", locale)}
                  variant="secondary"
                >
                  {t.closing.ctaNamaz}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
