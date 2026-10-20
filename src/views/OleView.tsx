import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { IMG, type PhotoKey } from "@/config/assets";
import { OLE_LINKS } from "@/config/ole";
import { productTiles } from "@/lib/showcaseData";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { MaskedTitle } from "@/components/ui/MaskedTitle";
import { MetaList } from "@/components/ui/MetaList";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Faq } from "@/components/content/Faq";
import { NumberedList } from "@/components/content/NumberedList";
import { StoryRows } from "@/components/content/StoryRows";
import { StoreLinks } from "@/components/content/StoreLinks";
import { ScreenStage } from "@/components/visual/ScreenStage";
import { ChapterNav } from "@/components/product/ChapterNav";
import { OlePricing } from "@/components/product/OlePricing";
import { ProductTiles } from "@/components/showcase/ProductTiles";
import { IndexList, type IndexRow } from "@/components/showcase/IndexList";
import { DragGallery } from "@/components/showcase/DragGallery";
import { ScrollFillText } from "@/components/showcase/ScrollFillText";
import { PageTransition } from "@/components/motion/PageTransition";

const PHOTOS: PhotoKey[] = ["ole1", "ole3", "ole4", "ole2"];

/** External link styling shared by the small text links on this page. */
const TEXT_LINK =
  "inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4";

/**
 * Ole: the full product story — two sides, how it works, features, the
 * dashboard, integrations, pricing with the scenario calculator, FAQ.
 * Every external link comes from `config/ole.ts` (main domain only).
 */
export function OleView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.ole;
  const a = t.anchors;
  const newTab = dict.common.newTab;
  const f = t.features.items;
  const ole = IMG.ole;
  const phone = { w: ole.screenW, h: ole.screenH };

  const stores = [
    { label: t.hero.ctaAppStore, href: OLE_LINKS.appStore },
    { label: t.hero.ctaGooglePlay, href: OLE_LINKS.googlePlay },
  ];

  const features: IndexRow[] = [
    {
      id: "loyalty",
      ...f.loyalty,
      image: { src: ole.screenLoyalty, ...phone, fit: "contain" },
    },
    { id: "qr", ...f.qr, image: { ...ole.panelQrForm, fit: "contain" } },
    { id: "code", ...f.code, image: { ...ole.panelVerify, fit: "contain" } },
    {
      id: "campaigns",
      ...f.campaigns,
      image: { ...ole.screenCampaign, fit: "contain" },
    },
    { id: "notifications", ...f.notifications, image: ole.screenWinback },
    {
      id: "branches",
      ...f.branches,
      image: { src: ole.panel, w: ole.panelW, h: ole.panelH },
    },
    { id: "reports", ...f.reports },
    {
      id: "businessPage",
      ...f.businessPage,
      image: { src: ole.screenBusiness, ...phone, fit: "contain" },
    },
    {
      id: "nfc",
      ...f.nfc,
      image: { src: ole.nfc, w: ole.nfcW, h: ole.nfcH, fit: "contain" },
    },
    { id: "pos", ...f.pos },
  ];

  const docs = [
    { href: OLE_LINKS.cookies, label: t.docs.cookies },
    { href: OLE_LINKS.kvkk, label: t.docs.kvkk },
    { href: OLE_LINKS.membership, label: t.docs.membership },
    { href: OLE_LINKS.support, label: t.docs.support },
  ];

  return (
    <PageTransition>
      <div data-theme="ole" className="bg-bg text-fg">
        {/* ------------------------------------------------ Hero */}
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
              <div className="hero-rise hero-rise-4 mt-10 flex flex-wrap gap-3">
                <Button
                  href={OLE_LINKS.demo}
                  external
                  newTabLabel={newTab}
                  size="lg"
                >
                  {t.hero.ctaDemo}
                </Button>
                <Button href={`#${a.pricing}`} variant="secondary" size="lg">
                  {t.hero.ctaPricing}
                </Button>
              </div>
              <div className="hero-rise hero-rise-4 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <StoreLinks items={stores} newTabLabel={newTab} />
                <a
                  href={OLE_LINKS.panel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={TEXT_LINK}
                >
                  {t.hero.panelLogin}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> {newTab}</span>
                </a>
              </div>
            </div>

            {/* Navy stage: glass token + app home screen */}
            <div className="hero-rise hero-rise-3 lg:col-span-6">
              <div className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-ole-navy sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={ole.art}
                  alt={dict.showcase.ole.artAlt}
                  width={ole.artW}
                  height={ole.artH}
                  loading="eager"
                  sizes="(min-width: 1024px) 18rem, 50vw"
                  className="absolute left-[8%] top-[9%] w-[52%] drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] sm:w-[40%] lg:w-[52%]"
                />
                <Image
                  src={ole.screenHome}
                  alt={t.alt.stage}
                  width={phone.w}
                  height={phone.h}
                  loading="eager"
                  sizes="(min-width: 1024px) 16rem, 44vw"
                  className="absolute bottom-0 right-[8%] w-[46%] translate-y-[26%] rounded-[1.6rem] border-[5px] border-black/80 shadow-2xl sm:w-[34%] lg:w-[46%]"
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

        <ChapterNav
          label={t.chapters.label}
          items={[
            { id: a.how, label: t.chapters.how },
            { id: a.features, label: t.chapters.features },
            { id: a.panel, label: t.chapters.panel },
            { id: a.integrations, label: t.chapters.integrations },
            { id: a.pricing, label: t.chapters.pricing },
            { id: a.faq, label: t.chapters.faq },
          ]}
        />

        {/* ------------------------------------------------ Two sides */}
        <section className="py-24 sm:py-32">
          <Container>
            <ScrollFillText
              as="h2"
              text={t.sides.statement}
              className="max-w-5xl text-statement"
            />
            <div className="mt-16 grid gap-12 sm:mt-20 md:grid-cols-2 md:gap-8">
              {[t.sides.business, t.sides.customer].map((side) => (
                <Reveal key={side.title}>
                  <h3 className="flex items-center gap-2.5 text-sm font-medium text-fg-muted">
                    <span
                      aria-hidden="true"
                      className="size-2 rounded-full bg-accent"
                    />
                    {side.title}
                  </h3>
                  <ul className="mt-5 border-t border-fg/15">
                    {side.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-fg/15 py-4 text-lg leading-snug"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ------------------------------------------------ How it works */}
        <section
          id={a.how}
          className="scroll-mt-28 border-t border-fg/10 py-24 sm:py-32"
        >
          <Container>
            <Reveal>
              <SectionHead kicker={t.how.kicker} title={t.how.title} />
            </Reveal>
            <div className="mt-16 sm:mt-20">
              <StoryRows
                items={[
                  {
                    ...t.how.steps[0],
                    media: (
                      <ScreenStage
                        kind="phone"
                        src={ole.screenLoyalty}
                        alt={t.alt.loyalty}
                        {...phone}
                      />
                    ),
                  },
                  {
                    ...t.how.steps[1],
                    media: (
                      <ScreenStage
                        kind="card"
                        alt={t.alt.qrForm}
                        {...ole.panelQrForm}
                      />
                    ),
                  },
                  {
                    ...t.how.steps[2],
                    media: (
                      <ScreenStage
                        kind="card"
                        alt={t.alt.verify}
                        {...ole.panelVerify}
                      />
                    ),
                  },
                  {
                    ...t.how.steps[3],
                    media: (
                      <ScreenStage
                        kind="card"
                        alt={t.alt.winback}
                        {...ole.screenWinback}
                      />
                    ),
                  },
                ]}
              />
            </div>
            <Reveal className="mt-20 grid items-center gap-6 border-y border-fg/15 py-8 sm:grid-cols-[auto_1fr] sm:gap-10">
              <Image
                src={ole.nfc}
                alt={t.alt.nfc}
                width={ole.nfcW}
                height={ole.nfcH}
                sizes="4rem"
                className="h-28 w-auto"
              />
              <p className="max-w-2xl text-lead">{t.how.nfcNote}</p>
            </Reveal>
          </Container>
        </section>

        {/* ------------------------------------------------ Features */}
        <section
          id={a.features}
          className="scroll-mt-28 border-t border-fg/10 py-24 sm:py-32"
        >
          <Container>
            <Reveal>
              <SectionHead
                kicker={t.features.kicker}
                title={t.features.title}
              />
            </Reveal>
            <Reveal className="mt-10 sm:mt-14">
              <IndexList rows={features} />
            </Reveal>
          </Container>
        </section>

        {/* ------------------------------------------------ Dashboard (navy) */}
        <section
          id={a.panel}
          data-surface="dark"
          className="scroll-mt-28 py-24 sm:py-32"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <Reveal className="lg:col-span-6">
                <Kicker>{t.panel.kicker}</Kicker>
                <h2 className="mt-6 text-display-m text-balance">
                  {t.panel.title}
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-5 lg:col-start-8 lg:self-end">
                <p className="text-lead text-fg-muted">{t.panel.body}</p>
                <a
                  href={OLE_LINKS.panel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${TEXT_LINK} mt-4`}
                >
                  {t.hero.panelLogin}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> {newTab}</span>
                </a>
              </Reveal>
            </div>
            <Reveal variant="trigger" className="mt-14">
              <ScreenStage
                kind="browser"
                src={ole.panel}
                alt={t.alt.panel}
                w={ole.panelW}
                h={ole.panelH}
                sizes="(min-width: 1152px) 72rem, 100vw"
              />
            </Reveal>
            <Reveal variant="trigger" className="mt-14">
              <h3 className="mb-6 text-sm font-medium text-fg-muted">
                {t.panel.menuTitle}
              </h3>
              <NumberedList
                items={t.panel.menu.map((title) => ({ title }))}
                columns={4}
              />
            </Reveal>
          </Container>
        </section>

        {/* ------------------------------------------------ Integrations */}
        <section id={a.integrations} className="scroll-mt-28 py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <SectionHead
                kicker={t.integrations.kicker}
                title={t.integrations.title}
              />
              <p className="mt-6 max-w-md text-lead text-fg-muted">
                {t.integrations.body}
              </p>
              <Button
                href={OLE_LINKS.integration}
                external
                newTabLabel={newTab}
                variant="secondary"
                className="mt-8"
              >
                {t.integrations.cta}
              </Button>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <ul className="border-t border-fg/15">
                  {t.integrations.partners.map((p) => (
                    <li
                      key={p.name}
                      className="flex flex-wrap items-center justify-between gap-3 border-b border-fg/15 py-5"
                    >
                      <span className="text-row">{p.name}</span>
                      <span className="rounded-full border border-fg/20 px-3 py-1 text-xs font-medium">
                        {p.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal variant="trigger" className="mt-12">
                <NumberedList items={t.integrations.steps} columns={1} />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ------------------------------------------------ Who it's for */}
        <section className="border-t border-fg/10 py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
            <Reveal className="lg:col-span-7">
              <Kicker>{t.sectors.kicker}</Kicker>
              <h2 className="mt-6 text-heading text-balance">
                {t.sectors.title}
              </h2>
              <p className="mt-8 text-display-m text-fg-muted">
                {t.sectors.items.map((item, i) => (
                  <span key={item}>
                    {i > 0 ? (
                      <span aria-hidden="true" className="text-accent">
                        {" "}
                        ·{" "}
                      </span>
                    ) : null}
                    <span className="text-fg">{item}</span>
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal variant="trigger" className="lg:col-span-5">
              <div className="clip-reveal relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={IMG.photos.ole3.src}
                  alt={dict.home.gallery.items.ole3}
                  fill
                  sizes="(min-width: 1024px) 28rem, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ------------------------------------------------ Pricing (navy) */}
        <section
          id={a.pricing}
          data-surface="dark"
          className="scroll-mt-28 py-24 sm:py-32"
        >
          <Container>
            <OlePricing t={t.pricing} newTab={newTab} locale={locale} />
          </Container>
        </section>

        {/* ------------------------------------------------ Gallery */}
        <section className="overflow-hidden py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead kicker={t.gallery.kicker} title={t.gallery.title} />
            </Reveal>
          </Container>
          <Reveal className="mt-10 sm:mt-14">
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

        {/* ------------------------------------------------ Getting started */}
        <section className="border-t border-fg/10 py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHead
                kicker={t.onboarding.kicker}
                title={t.onboarding.title}
              />
            </Reveal>
            <Reveal variant="trigger" className="mt-12 sm:mt-16">
              <NumberedList items={t.onboarding.steps} columns={3} big />
            </Reveal>
          </Container>
        </section>

        {/* ------------------------------------------------ FAQ + documents */}
        <section
          id={a.faq}
          className="scroll-mt-28 border-t border-fg/10 py-24 sm:py-32"
        >
          <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.faq.title}
              </h2>
            </Reveal>
            <div>
              <Reveal>
                <Faq items={t.faq.items} />
              </Reveal>
              <Reveal className="mt-16">
                <h3 className="text-sm font-semibold">{t.docs.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-8">
                  {docs.map((doc) => (
                    <li key={doc.href}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <span className="link-underline">{doc.label}</span>
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        <span className="sr-only"> {newTab}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ------------------------------------------------ Closing (navy) */}
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
                className="group inline-flex min-h-11 items-center gap-3"
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

        {/* ------------------------------------------------ The other product */}
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
