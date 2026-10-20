import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { NAMAZ_LINKS } from "@/config/namaz";
import { productTiles } from "@/lib/showcaseData";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { MetaList } from "@/components/ui/MetaList";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageIntro } from "@/components/content/PageIntro";
import { StoreLinks } from "@/components/content/StoreLinks";
import { ProductTiles } from "@/components/showcase/ProductTiles";
import { ScrollStory } from "@/components/showcase/ScrollStory";

/**
 * Namaz Motivasyonu: a short, calm product page in green — slower reveals
 * (`data-calm`), no pointer tilt.
 */
export function NamazView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.namaz;
  const s = dict.showcase.namaz;
  const facts = dict.products.namaz.facts;
  const labels = dict.products.factLabels;
  const newTab = dict.common.newTab;
  const namaz = IMG.namaz;

  const stores = [
    { label: t.hero.ctaAppStore, href: NAMAZ_LINKS.appStore },
    { label: t.hero.ctaGooglePlay, href: NAMAZ_LINKS.googlePlay },
  ];
  const screens = [
    { src: namaz.screenToday, alt: s.heroShotAlt },
    { src: namaz.screenStats, alt: s.statsShotAlt },
    { src: namaz.screenGroup, alt: s.groupShotAlt },
  ];
  const docs = [
    { href: NAMAZ_LEGAL.privacy, label: s.docs.privacy },
    { href: NAMAZ_LEGAL.kvkk, label: s.docs.kvkk },
    { href: NAMAZ_LEGAL.terms, label: s.docs.terms },
    { href: NAMAZ_LEGAL.accountDeletion, label: s.docs.accountDeletion },
  ];

  return (
    <PageTransition>
      <div data-theme="namaz" data-calm="true" className="bg-bg text-fg">
        <PageIntro
          kicker={t.hero.kicker}
          title={BRAND.products.namaz}
          lead={t.hero.tagline}
          actions={<StoreLinks items={stores} newTabLabel={newTab} />}
        >
          <MetaList
            className="hero-rise hero-rise-4 mt-12"
            items={[
              { label: labels.platform, value: facts.platform },
              { label: labels.audience, value: facts.audience },
              { label: labels.status, value: facts.status },
            ]}
          />
        </PageIntro>

        {/* Stage: key art + one calm line on deep green */}
        <section className="pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <div className="grid overflow-hidden rounded-3xl bg-tile-namaz text-white lg:grid-cols-2">
                <div className="relative aspect-square lg:aspect-auto lg:min-h-[32rem]">
                  <Image
                    src={namaz.art}
                    alt={s.artAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-end p-8 sm:p-12">
                  <p className="max-w-md text-display-m text-balance">
                    {t.hero.statement}
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* In the app */}
        <section className="border-t border-fg/10 py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead kicker={t.story.kicker} title={t.story.title} />
            </Reveal>
            <div className="mt-6 lg:mt-0">
              <ScrollStory
                beats={t.story.beats.map((beat, i) => ({
                  ...beat,
                  image: { ...screens[i], w: namaz.screenW, h: namaz.screenH },
                }))}
              />
            </div>
          </Container>
        </section>

        {/* Privacy & documents (green band) */}
        <section data-surface="dark" className="py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <h2 className="text-heading">{t.privacy.title}</h2>
              <p className="mt-6 text-lead text-fg-muted">{t.privacy.body}</p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <h3 className="text-sm font-semibold">{s.docsTitle}</h3>
              {locale === "en" ? (
                <p className="mt-1 text-xs text-fg-muted">{s.docsNote}</p>
              ) : null}
              <ul className="mt-4 border-t border-fg/20">
                {docs.map((doc) => (
                  <li key={doc.href} className="border-b border-fg/20">
                    <Link
                      href={doc.href}
                      className="group flex min-h-14 items-center justify-between gap-4 py-3 font-medium"
                    >
                      <span className="link-underline">{doc.label}</span>
                      <ArrowRight
                        className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* Closing: get the app */}
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="max-w-4xl text-display-m text-balance">
                {BRAND.products.namaz} {t.closing.title}
              </h2>
              <StoreLinks
                className="mt-10"
                items={stores}
                newTabLabel={newTab}
              />
            </Reveal>
          </Container>
        </section>

        {/* The other product */}
        <section className="pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <Kicker as="h2">{dict.showcase.otherProduct}</Kicker>
            </Reveal>
            <Reveal className="mt-8">
              <ProductTiles
                tiles={[productTiles(dict, locale).ole]}
                exploreLabel={dict.home.products.explore}
                calm
              />
            </Reveal>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}
