import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { OLE_LINKS } from "@/config/ole";
import { productTiles } from "@/lib/showcaseData";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { MaskedTitle } from "@/components/ui/MaskedTitle";
import { MetaList } from "@/components/ui/MetaList";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { StoreLinks } from "@/components/content/StoreLinks";
import { ScreenStage } from "@/components/visual/ScreenStage";
import { ProductTiles } from "@/components/showcase/ProductTiles";
import { ScrollStory } from "@/components/showcase/ScrollStory";

/**
 * Ole: a short product page — what it is, how it feels for customers (scroll
 * story), what the business gets (visual grid), and how to start. Every
 * external link comes from `config/ole.ts` (main domain only).
 */
export function OleView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.ole;
  const newTab = dict.common.newTab;
  const ole = IMG.ole;
  const phone = { w: ole.screenW, h: ole.screenH };

  const stores = [
    { label: t.hero.ctaAppStore, href: OLE_LINKS.appStore },
    { label: t.hero.ctaGooglePlay, href: OLE_LINKS.googlePlay },
  ];

  const screens = [
    { src: ole.screenHome, alt: t.alt.home },
    { src: ole.screenLoyalty, alt: t.alt.loyalty },
    { src: ole.screenBusiness, alt: t.alt.business },
    { src: ole.screenNotification, alt: t.alt.notification },
  ];

  const tiles = [
    {
      kind: "card" as const,
      caption: t.business.qr,
      alt: t.alt.qrForm,
      ...ole.panelQrForm,
    },
    {
      kind: "card" as const,
      caption: t.business.verify,
      alt: t.alt.verify,
      ...ole.panelVerify,
    },
    {
      kind: "card" as const,
      caption: t.business.campaign,
      alt: t.alt.campaign,
      ...ole.screenCampaign,
    },
    {
      kind: "object" as const,
      caption: t.business.nfc,
      alt: t.alt.nfc,
      src: ole.nfc,
      w: ole.nfcW,
      h: ole.nfcH,
    },
  ];

  return (
    <PageTransition>
      <div data-theme="ole" className="bg-bg text-fg">
        {/* ---------------------------------------------- Hero */}
        <section>
          <Container className="grid gap-12 pb-12 pt-14 sm:pt-24 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-28">
            <div className="lg:col-span-6">
              <Kicker className="hero-rise hero-rise-1">{t.hero.kicker}</Kicker>
              <h1 className="mt-8 text-display-xl sm:mt-10">
                <MaskedTitle text={BRAND.products.ole} />
              </h1>
              <p className="hero-rise hero-rise-2 mt-6 text-heading text-balance">
                {t.hero.statement}
              </p>
              <p className="hero-rise hero-rise-3 mt-6 max-w-md text-lead text-fg-muted">
                {t.hero.lead}
              </p>
              <div className="hero-rise hero-rise-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button
                  href={OLE_LINKS.demo}
                  external
                  newTabLabel={newTab}
                  size="lg"
                >
                  {t.hero.ctaDemo}
                </Button>
                <a
                  href={OLE_LINKS.panel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4"
                >
                  {t.hero.panelLogin}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> {newTab}</span>
                </a>
              </div>
              <StoreLinks
                className="hero-rise hero-rise-4 mt-6"
                items={stores}
                newTabLabel={newTab}
              />
            </div>

            {/* Navy stage: the glass token */}
            <div className="hero-rise hero-rise-3 lg:col-span-6">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-ole-navy sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={ole.art}
                  alt={dict.showcase.ole.artAlt}
                  width={ole.artW}
                  height={ole.artH}
                  loading="eager"
                  sizes="(min-width: 1024px) 26rem, 70vw"
                  className="w-[64%] drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)] sm:w-[46%] lg:w-[64%]"
                />
              </div>
            </div>
          </Container>
          <Container className="pb-16 sm:pb-20">
            <MetaList
              columns={4}
              className="hero-rise hero-rise-4"
              items={[
                { label: t.facts.platformLabel, value: t.facts.platform },
                { label: t.facts.modelLabel, value: t.facts.model },
                { label: t.facts.customersLabel, value: t.facts.customers },
                { label: t.facts.statusLabel, value: t.facts.status },
              ]}
            />
          </Container>
        </section>

        {/* ---------------------------------------------- Customer story (navy) */}
        <section data-surface="dark" className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead kicker={t.story.kicker} title={t.story.title} />
            </Reveal>
            <div className="mt-6 lg:mt-0">
              <ScrollStory
                beats={t.story.beats.map((beat, i) => ({
                  ...beat,
                  image: { ...screens[i], ...phone },
                }))}
              />
            </div>
          </Container>
        </section>

        {/* ---------------------------------------------- Business side */}
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead
                kicker={t.business.kicker}
                title={t.business.title}
              />
            </Reveal>
            <Reveal
              variant="trigger"
              className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-16 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4"
            >
              <figure className="col-span-2 lg:col-span-4">
                <ScreenStage
                  kind="browser"
                  src={ole.panel}
                  alt={t.alt.panel}
                  w={ole.panelW}
                  h={ole.panelH}
                  sizes="(min-width: 1152px) 72rem, 100vw"
                />
                <figcaption className="mt-4 text-lg font-semibold">
                  {t.business.panel}
                </figcaption>
              </figure>
              {tiles.map((tile) => (
                <figure key={tile.src}>
                  <ScreenStage
                    kind={tile.kind}
                    src={tile.src}
                    alt={tile.alt}
                    w={tile.w}
                    h={tile.h}
                    sizes="(min-width: 1024px) 17rem, 45vw"
                  />
                  <figcaption className="mt-3 text-sm font-semibold sm:mt-4 sm:text-base">
                    {tile.caption}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </Container>
        </section>

        {/* ---------------------------------------------- Closing (navy) */}
        <section data-surface="dark" className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <Kicker>{t.closing.kicker}</Kicker>
              <h2 className="mt-8">
                <a
                  href={OLE_LINKS.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6"
                >
                  <span className="text-display-xl text-balance transition-colors duration-300 group-hover:text-accent">
                    {t.closing.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-focus-visible:rotate-45 sm:size-24"
                  >
                    <ArrowUpRight className="size-6 sm:size-10" />
                  </span>
                  <span className="sr-only"> {newTab}</span>
                </a>
              </h2>
            </Reveal>
            <Reveal className="mt-16 flex flex-col gap-6 border-t border-fg/20 pt-8 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={`mailto:${OLE_LINKS.supportEmail}`}
                className="inline-flex min-h-11 items-center gap-3"
              >
                <Mail className="size-5 text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-fg-muted">
                    {t.closing.supportLabel}
                  </span>
                  <span className="link-underline font-semibold">
                    {OLE_LINKS.supportEmail}
                  </span>
                </span>
              </a>
              <StoreLinks items={stores} newTabLabel={newTab} />
            </Reveal>
          </Container>
        </section>

        {/* ---------------------------------------------- The other product */}
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <Kicker as="h2">{dict.showcase.otherProduct}</Kicker>
            </Reveal>
            <Reveal className="mt-8">
              <ProductTiles
                tiles={[productTiles(dict, locale).namaz]}
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
