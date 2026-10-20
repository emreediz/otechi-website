import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveHorizontal } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG, type PhotoKey } from "@/config/assets";
import { productTiles, workRows } from "@/lib/showcaseData";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Faq } from "@/components/content/Faq";
import { PageIntro } from "@/components/content/PageIntro";
import { NumberedList } from "@/components/content/NumberedList";
import { ClosingCta } from "@/components/content/ClosingCta";
import { ProductTiles } from "@/components/showcase/ProductTiles";
import { IndexList } from "@/components/showcase/IndexList";
import {
  DragGallery,
  type GalleryItem,
} from "@/components/showcase/DragGallery";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollFillText } from "@/components/showcase/ScrollFillText";

/** Gallery order: lifestyle photos interleaved with app screens. */
const GALLERY: (
  | { photo: PhotoKey }
  | { screen: "oleLoyalty" | "namazToday" | "namazGroup" }
  | { panel: true }
)[] = [
  { photo: "ole1" },
  { screen: "oleLoyalty" },
  { photo: "namaz1" },
  { photo: "ole3" },
  { screen: "namazToday" },
  { photo: "ole4" },
  { photo: "namaz3" },
  { panel: true },
  { photo: "namaz2" },
  { photo: "ole2" },
  { screen: "namazGroup" },
  { photo: "namaz4" },
];

export function HomeView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home;
  const s = dict.showcase;
  const tiles = productTiles(dict, locale);
  const contactHref = localizedPath("contact", locale);

  const galleryItems: GalleryItem[] = GALLERY.map((g) => {
    if ("photo" in g) {
      const p = IMG.photos[g.photo];
      return {
        ...p,
        alt: t.gallery.items[g.photo],
        caption: g.photo.startsWith("ole")
          ? BRAND.products.ole
          : BRAND.products.namaz,
      };
    }
    if ("panel" in g) {
      return {
        src: IMG.ole.panel,
        w: IMG.ole.panelW,
        h: IMG.ole.panelH,
        alt: t.gallery.items.olePanel,
        caption: `${BRAND.products.ole} — ${t.work.rows.olePanel.kind}`,
      };
    }
    const isOle = g.screen === "oleLoyalty";
    const src =
      g.screen === "oleLoyalty"
        ? IMG.ole.screenLoyalty
        : g.screen === "namazToday"
          ? IMG.namaz.screenToday
          : IMG.namaz.screenGroup;
    const dims = isOle ? IMG.ole : IMG.namaz;
    return {
      src,
      w: dims.screenW,
      h: dims.screenH,
      alt: t.gallery.items[g.screen],
      caption: `${isOle ? BRAND.products.ole : BRAND.products.namaz} — ${t.work.rows.ole.kind}`,
      screen: isOle ? "ole" : "namaz",
    };
  });

  return (
    <PageTransition>
      {/* ------------------------------------------------ Hero */}
      <PageIntro
        kicker={t.hero.kicker}
        title={t.hero.title}
        highlight={t.hero.highlight}
        lead={t.hero.subtitle}
        actions={
          <>
            <Button href={localizedPath("products", locale)} size="lg">
              {t.hero.ctaPrimary}
            </Button>
            <Button
              href={localizedPath("about", locale)}
              variant="secondary"
              size="lg"
            >
              {t.hero.ctaSecondary}
            </Button>
          </>
        }
      >
        <p className="hero-rise hero-rise-4 mt-14 hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fg-muted md:flex">
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          {t.hero.scroll}
        </p>
      </PageIntro>

      {/* ------------------------------------------------ Products */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <SectionHead
              kicker={t.products.title}
              title={t.products.subtitle}
            />
          </Reveal>
          <Reveal className="mt-10 sm:mt-14">
            <ProductTiles
              exploreLabel={t.products.explore}
              tiles={[tiles.ole, tiles.namaz]}
            />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Studio statement */}
      <section className="border-t border-fg/10 py-24 sm:py-32">
        <Container>
          <Reveal>
            <Kicker>{t.what.kicker}</Kicker>
            <h2 className="sr-only">{t.what.title}</h2>
          </Reveal>
          <ScrollFillText
            text={s.home.studioBody}
            className="mt-8 max-w-5xl text-statement"
          />
          <Reveal variant="trigger" className="mt-16 sm:mt-24">
            <NumberedList items={t.what.items} />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Work index */}
      <section className="border-t border-fg/10 py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHead kicker={t.work.kicker} title={t.work.title} />
          </Reveal>
          <Reveal className="mt-10 sm:mt-14">
            <IndexList rows={workRows(dict, locale)} />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Gallery */}
      <section className="overflow-hidden border-t border-fg/10 py-24 sm:py-32">
        <Container>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead kicker={t.gallery.kicker} title={t.gallery.title} />
            <p className="flex items-center gap-2 text-sm text-fg-muted">
              <MoveHorizontal className="size-4" aria-hidden="true" />
              {t.gallery.hint}
            </p>
          </Reveal>
        </Container>
        <Reveal className="mt-10 sm:mt-14">
          <DragGallery
            items={galleryItems}
            label={t.gallery.label}
            prevLabel={t.gallery.prev}
            nextLabel={t.gallery.next}
          />
        </Reveal>
      </section>

      {/* ------------------------------------------------ Approach (dark) */}
      <section data-surface="dark" className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <Kicker>{t.approach.kicker}</Kicker>
            <h2 className="mt-8 max-w-4xl text-display-m">
              {s.home.studioTitle}
            </h2>
          </Reveal>

          <Reveal variant="trigger" className="mt-16 sm:mt-20">
            <h3 className="mb-8 text-lg text-fg-muted">{t.approach.title}</h3>
            <NumberedList
              items={t.approach.items.map((body) => ({ body }))}
              columns={4}
              big
            />
          </Reveal>

          <Reveal className="mt-20 flex flex-col gap-6 border-t border-fg/20 pt-10 md:flex-row md:items-center md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold">{t.aboutStrip.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">
                {t.aboutStrip.body}
              </p>
            </div>
            <Link
              href={localizedPath("about", locale)}
              className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start rounded-full border border-fg/25 px-6 font-medium transition-colors hover:border-fg hover:bg-fg hover:text-bg md:self-auto"
            >
              {t.aboutStrip.cta}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:rotate-45"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ FAQ */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.faq.title}
            </h2>
            <Faq
              items={t.faq.items.map((item) => ({
                q: item.q,
                a: item.a,
                link: item.contactLink
                  ? { href: contactHref, label: item.contactLink }
                  : undefined,
              }))}
            />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Closing */}
      <ClosingCta
        kicker={dict.common.cta.kicker}
        title={dict.common.cta.title}
        href={contactHref}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <p className="text-sm text-fg-muted">{t.closing.title}</p>
          <Link
            href={tiles.ole.href}
            className="inline-flex min-h-11 items-center font-semibold"
          >
            <span className="link-underline">{t.closing.ctaOle}</span>
          </Link>
          <Link
            href={tiles.namaz.href}
            className="inline-flex min-h-11 items-center font-semibold"
          >
            <span className="link-underline">{t.closing.ctaNamaz}</span>
          </Link>
        </div>
      </ClosingCta>
    </PageTransition>
  );
}
