import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { IMG, type PhotoKey } from "@/config/assets";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { productTiles } from "@/lib/showcaseData";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { MetaList } from "@/components/ui/MetaList";
import { Reveal } from "@/components/motion/Reveal";
import { PageIntro } from "@/components/content/PageIntro";
import { NumberedList } from "@/components/content/NumberedList";
import { StoreLinks } from "@/components/content/StoreLinks";
import { ProductTiles } from "@/components/showcase/ProductTiles";
import { PageTransition } from "@/components/motion/PageTransition";
import { DragGallery } from "@/components/showcase/DragGallery";

const PHOTOS: PhotoKey[] = ["namaz1", "namaz3", "namaz2", "namaz4"];

/**
 * Namaz Motivasyonu: calm, minimal, green. Slower reveals (`data-calm`), no
 * pointer tilt or scroll-linked effects.
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
  const stores = [
    { label: t.hero.ctaAppStore, status: dict.common.comingSoon },
    { label: t.hero.ctaGooglePlay, status: dict.common.comingSoon },
  ];
  const docs = [
    { href: NAMAZ_LEGAL.privacy, label: s.docs.privacy },
    { href: NAMAZ_LEGAL.kvkk, label: s.docs.kvkk },
    { href: NAMAZ_LEGAL.terms, label: s.docs.terms },
    { href: NAMAZ_LEGAL.accountDeletion, label: s.docs.accountDeletion },
  ];
  const screens = [
    {
      src: IMG.namaz.screenToday,
      alt: s.heroShotAlt,
      caption: s.gallery.today,
    },
    {
      src: IMG.namaz.screenGroup,
      alt: s.groupShotAlt,
      caption: s.gallery.group,
    },
  ];

  return (
    <PageTransition>
      <div data-theme="namaz" data-calm="true" className="bg-bg text-fg">
        <PageIntro
          kicker={t.hero.kicker}
          title={BRAND.products.namaz}
          lead={t.hero.tagline}
          actions={<StoreLinks items={stores} />}
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

        {/* Stage: key art + Today screen on deep green */}
        <section className="pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <div className="grid overflow-hidden rounded-3xl bg-tile-namaz text-white lg:grid-cols-2">
                <div className="relative aspect-square lg:aspect-auto lg:min-h-[36rem]">
                  <Image
                    src={IMG.namaz.art}
                    alt={s.artAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-12 overflow-hidden px-8 pt-10 sm:px-12 sm:pt-14">
                  <p className="max-w-md text-statement text-balance">
                    {t.hero.statement}
                  </p>
                  <Image
                    src={IMG.namaz.screenToday}
                    alt={s.heroShotAlt}
                    width={IMG.namaz.screenW}
                    height={IMG.namaz.screenH}
                    sizes="16rem"
                    className="-mb-24 h-auto w-52 self-center rounded-[1.4rem] border-4 border-black/60 shadow-2xl sm:-mb-32 sm:w-60"
                  />
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Approach */}
        <section className="border-t border-fg/10 py-24 sm:py-32">
          <Container className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Kicker as="h2">{t.intro.title}</Kicker>
            </Reveal>
            <Reveal className="lg:col-span-8">
              <p className="text-statement text-balance">{t.intro.body}</p>
            </Reveal>
          </Container>
        </section>

        {/* Features */}
        <section className="border-t border-fg/10 py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead title={t.features.title} />
            </Reveal>
            <Reveal variant="trigger" className="mt-12 sm:mt-16">
              <NumberedList items={t.features.items} columns={2} />
            </Reveal>
            <p className="mt-10 text-sm text-fg-muted">{t.features.note}</p>
          </Container>
        </section>

        {/* Through the day */}
        <section className="overflow-hidden border-t border-fg/10 py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead kicker={s.galleryTitle} title={s.dayTitle} />
            </Reveal>
            <Reveal className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:w-2/3">
              {screens.map((screen) => (
                <figure key={screen.src}>
                  <div className="flex justify-center overflow-hidden rounded-3xl bg-bg-subtle px-[12%] pt-[10%]">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={IMG.namaz.screenW}
                      height={IMG.namaz.screenH}
                      sizes="(min-width: 1024px) 20rem, 40vw"
                      className="-mb-[30%] h-auto w-full rounded-[1.25rem] border-4 border-black/70 shadow-xl"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-fg-muted">
                    {screen.caption}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </Container>
          <Reveal className="mt-14 sm:mt-20">
            <DragGallery
              items={PHOTOS.map((k) => ({
                ...IMG.photos[k],
                alt: dict.home.gallery.items[k],
              }))}
              label={dict.home.gallery.label}
              prevLabel={dict.home.gallery.prev}
              nextLabel={dict.home.gallery.next}
            />
          </Reveal>
        </section>

        {/* How it works */}
        <section className="border-t border-fg/10 py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead title={t.how.title} />
            </Reveal>
            <Reveal variant="trigger" className="mt-12 sm:mt-16">
              <NumberedList items={t.how.steps} columns={3} big />
            </Reveal>
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

        {/* Closing */}
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="max-w-4xl text-display-m text-balance">
                {t.closing.title}
              </h2>
              <p className="mt-6 max-w-xl text-lead text-fg-muted">
                {t.closing.body}
              </p>
              <StoreLinks className="mt-10" items={stores} />
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
