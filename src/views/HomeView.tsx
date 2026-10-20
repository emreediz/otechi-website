import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowDown, ArrowUpRight, MoveHorizontal } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG, type PhotoKey } from "@/config/assets";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Faq } from "@/components/content/Faq";
import { ProductTiles } from "@/components/home/ProductTiles";
import { WorkIndex } from "@/components/home/WorkIndex";
import { DragGallery, type GalleryItem } from "@/components/home/DragGallery";
import { ScrollFillText } from "@/components/home/ScrollFillText";

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

const SCREEN_W = 900;

export function HomeView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home;
  const s = dict.showcase;
  const c = dict.contact;

  const oleHref = localizedPath("productOle", locale);
  const namazHref = localizedPath("productNamaz", locale);
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
        w: 1800,
        h: 1047,
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
    return {
      src,
      w: SCREEN_W,
      h: isOle ? 1947 : 1650,
      alt: t.gallery.items[g.screen],
      caption: `${isOle ? BRAND.products.ole : BRAND.products.namaz} — ${t.work.rows.ole.kind}`,
      screen: isOle ? "ole" : "namaz",
    };
  });

  return (
    <>
      {/* ------------------------------------------------ Hero */}
      <section className="relative">
        <Container className="pb-16 pt-14 sm:pb-24 sm:pt-24 lg:pt-32">
          <Kicker className="hero-rise hero-rise-1">{t.hero.kicker}</Kicker>
          <h1 className="mt-8 font-display text-[clamp(2.25rem,8.6vw,7rem)] font-semibold leading-[1.02] tracking-[-0.035em] sm:mt-10">
            <HeroTitle title={t.hero.title} highlight={t.hero.highlight} />
          </h1>

          <div className="mt-12 grid gap-8 border-t border-fg/15 pt-8 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <p className="hero-rise hero-rise-3 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="hero-rise hero-rise-4 flex flex-wrap gap-3">
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
            </div>
          </div>

          <p className="hero-rise hero-rise-4 mt-14 hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fg-muted md:flex">
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            {t.hero.scroll}
          </p>
        </Container>
      </section>

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
              tiles={[
                {
                  theme: "ole",
                  index: "01",
                  name: BRAND.products.ole,
                  category: t.products.oleCategory,
                  tagline: t.products.ole.tagline,
                  href: oleHref,
                  art: {
                    src: IMG.ole.art,
                    alt: s.ole.artAlt,
                    w: IMG.ole.artW,
                    h: IMG.ole.artH,
                  },
                  screens: [
                    {
                      src: IMG.ole.screenHome,
                      w: SCREEN_W,
                      h: 1947,
                    },
                    {
                      src: IMG.ole.screenLoyalty,
                      w: SCREEN_W,
                      h: 1947,
                    },
                  ],
                },
                {
                  theme: "namaz",
                  index: "02",
                  name: BRAND.products.namaz,
                  category: t.products.namazCategory,
                  tagline: t.products.namaz.tagline,
                  href: namazHref,
                  art: {
                    src: IMG.namaz.art,
                    alt: s.home.namazLogoAlt,
                    w: IMG.namaz.artW,
                    h: IMG.namaz.artH,
                    cover: true,
                  },
                  screens: [
                    {
                      src: IMG.namaz.screenToday,
                      w: SCREEN_W,
                      h: 1650,
                    },
                    {
                      src: IMG.namaz.screenGroup,
                      w: SCREEN_W,
                      h: 1650,
                    },
                  ],
                },
              ]}
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
            className="mt-8 max-w-5xl font-display text-[clamp(1.6rem,3.6vw,3.25rem)] font-medium leading-[1.18] tracking-[-0.02em]"
          />
          <Reveal variant="trigger" className="mt-16 sm:mt-24">
            <ul className="grid gap-x-8 gap-y-10 md:grid-cols-3">
              {t.what.items.map((item, i) => (
                <li
                  key={item.title}
                  className="stagger-item border-t border-fg/15 pt-6"
                >
                  <span className="font-mono text-xs tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
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
            <WorkIndex
              rows={[
                {
                  id: "ole",
                  name: BRAND.products.ole,
                  kind: t.work.rows.ole.kind,
                  desc: t.work.rows.ole.desc,
                  href: oleHref,
                  image: IMG.photos.ole1,
                },
                {
                  id: "ole-panel",
                  name: BRAND.products.ole,
                  suffix: t.work.rows.olePanel.suffix,
                  kind: t.work.rows.olePanel.kind,
                  desc: t.work.rows.olePanel.desc,
                  href: oleHref,
                  image: { src: IMG.ole.panel, w: 1800, h: 1047 },
                },
                {
                  id: "namaz",
                  name: BRAND.products.namaz,
                  kind: t.work.rows.namaz.kind,
                  desc: t.work.rows.namaz.desc,
                  href: namazHref,
                  image: IMG.photos.namaz1,
                },
                {
                  id: "next",
                  name: t.work.rows.next.name,
                  kind: t.work.rows.next.kind,
                  desc: t.work.rows.next.desc,
                  href: contactHref,
                  image: IMG.photos.ole2,
                },
              ]}
            />
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
      <section className="bg-black py-24 text-white sm:py-32">
        <Container>
          <Reveal>
            <Kicker tone="dark">{t.approach.kicker}</Kicker>
            <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {s.home.studioTitle}
            </h2>
          </Reveal>

          <Reveal variant="trigger" className="mt-16 sm:mt-20">
            <h3 className="mb-8 text-lg text-white/60">{t.approach.title}</h3>
            <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.approach.items.map((item, i) => (
                <li
                  key={item}
                  className="stagger-item border-t border-white/20 pt-6"
                >
                  <span className="font-display text-5xl font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 leading-relaxed text-white/80">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-20 flex flex-col gap-6 border-t border-white/20 pt-10 md:flex-row md:items-center md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold">{t.aboutStrip.title}</h3>
              <p className="mt-2 leading-relaxed text-white/60">
                {t.aboutStrip.body}
              </p>
            </div>
            <Link
              href={localizedPath("about", locale)}
              className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start rounded-full border border-white/25 px-6 font-medium transition-colors hover:border-white hover:bg-white hover:text-black md:self-auto"
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
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
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

      {/* ------------------------------------------------ Closing / contact */}
      <section className="border-t border-fg/10">
        <Container className="py-24 sm:py-32">
          <Reveal>
            <Kicker>{t.closing.kicker}</Kicker>
            <h2 className="mt-8">
              <Link
                href={contactHref}
                className="group flex items-center justify-between gap-6"
              >
                <span className="font-display text-[clamp(2.5rem,9vw,8rem)] font-semibold leading-[0.98] tracking-[-0.04em] transition-colors duration-300 group-hover:text-accent">
                  {t.closing.contactTitle}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 sm:size-24"
                >
                  <ArrowUpRight className="size-6 sm:size-10" />
                </span>
              </Link>
            </h2>
          </Reveal>

          <Reveal className="mt-16 grid gap-8 border-t border-fg/15 pt-8 sm:mt-24 sm:grid-cols-3">
            <div>
              <p className="text-sm text-fg-muted">{c.phoneLabel}</p>
              <a
                href={c.phoneHref}
                className="mt-1 inline-block text-lg font-semibold hover:text-accent"
              >
                {c.phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-fg-muted">{c.emailLabel}</p>
              <a
                href={c.emailHref}
                className="mt-1 inline-block break-words text-lg font-semibold hover:text-accent"
              >
                {c.email}
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-sm text-fg-muted">{t.closing.title}</p>
              <Link
                href={oleHref}
                className="inline-flex min-h-9 items-center font-semibold hover:text-accent"
              >
                {t.closing.ctaOle}
              </Link>
              <Link
                href={namazHref}
                className="inline-flex min-h-9 items-center font-semibold hover:text-accent"
              >
                {t.closing.ctaNamaz}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

/** Small label with the Otechi orange dot. */
function Kicker({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-sm font-medium",
        tone === "dark" ? "text-white/70" : "text-fg-muted",
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
      {children}
    </p>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {title}
      </h2>
    </div>
  );
}

/**
 * Splits the headline into masked words that slide up on load; the words
 * of `highlight` are set in the accent colour. The spans keep the reading
 * order, so screen readers still get the plain sentence.
 */
function HeroTitle({ title, highlight }: { title: string; highlight: string }) {
  const hlStart = title.indexOf(highlight);
  const hlEnd = hlStart === -1 ? -1 : hlStart + highlight.length;

  // Split on spaces, keeping each word's offset so a word can be partly
  // highlighted (e.g. "products." -> "products" + ".").
  const words: { text: string; at: number }[] = [];
  let pos = 0;
  for (const text of title.split(" ")) {
    if (text) words.push({ text, at: pos });
    pos += text.length + 1;
  }

  return words.map(({ text, at }, i) => {
    const from = Math.max(0, Math.min(text.length, hlStart - at));
    const to = Math.max(0, Math.min(text.length, hlEnd - at));
    return (
      <span key={i}>
        {i > 0 ? " " : null}
        <span className="mask-word">
          <span style={{ "--i": i } as CSSProperties}>
            {text.slice(0, from)}
            {to > from ? (
              <span className="text-accent">{text.slice(from, to)}</span>
            ) : null}
            {text.slice(Math.max(from, to))}
          </span>
        </span>
      </span>
    );
  });
}
