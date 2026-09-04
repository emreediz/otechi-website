import {
  QrCode,
  Coins,
  Megaphone,
  Bell,
  LayoutTemplate,
  Building2,
  LineChart,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/content/PageHero";
import { FeatureGrid } from "@/components/content/FeatureGrid";
import { FeatureFlow } from "@/components/content/FeatureFlow";
import { StepList } from "@/components/content/StepList";
import { CheckList } from "@/components/content/CheckList";
import { Faq } from "@/components/content/Faq";
import { PhoneGallery } from "@/components/content/PhoneGallery";
import { ProductShowcase } from "@/components/content/ProductShowcase";
import { ProductDocs } from "@/components/content/ProductDocs";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { Button } from "@/components/ui/Button";
import { ShowcaseTile } from "@/components/visual/ShowcaseTile";
import { DeviceFrame } from "@/components/visual/DeviceFrame";
import { BrowserFrame } from "@/components/visual/BrowserFrame";

const OLE_URL = "https://oletr.com";

const FEATURE_ICONS = [
  QrCode,
  Coins,
  Megaphone,
  Bell,
  LayoutTemplate,
  Building2,
  LineChart,
];

export function OleView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.ole;
  const s = dict.showcase.ole;

  const flowVisuals = [
    <DeviceFrame
      key="loyalty"
      src={IMG.ole.screenLoyalty}
      alt={s.loyaltyShotAlt}
      className="w-56 sm:w-64"
    />,
    <DeviceFrame
      key="business"
      src={IMG.ole.screenBusiness}
      alt={s.businessShotAlt}
      className="w-56 sm:w-64"
    />,
    <DeviceFrame
      key="notify"
      src={IMG.ole.screenNotification}
      alt={s.notificationShotAlt}
      className="w-56 sm:w-64"
    />,
    <BrowserFrame
      key="panel"
      src={IMG.ole.panel}
      alt={s.panelShotAlt}
      className="max-w-lg"
    />,
  ];

  return (
    <div data-theme="ole" className="bg-bg text-fg">
      <PageHero
        backdrop="ole"
        kicker={t.hero.kicker}
        title={BRAND.products.ole}
        titleExtra={
          <span
            aria-hidden="true"
            className="draw-line mt-3 block h-1 w-24 rounded-full bg-accent"
          />
        }
        subtitle={t.hero.tagline}
        actions={
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-fg">{t.hero.launched}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={OLE_URL} external>
                {t.hero.ctaDemo}
              </Button>
              <Button href={OLE_URL} external variant="secondary">
                {t.hero.ctaDownload}
              </Button>
            </div>
          </div>
        }
        aside={
          <div className="relative mx-auto max-w-sm">
            <ShowcaseTile
              tone="ole"
              imageSrc={IMG.ole.art}
              imageAlt={s.artAlt}
              imageWidth={IMG.ole.artW}
              imageHeight={IMG.ole.artH}
              priority
            />
            <DeviceFrame
              src={IMG.ole.screenHome}
              alt={s.homeShotAlt}
              priority
              className="mx-auto -mt-16 w-40 sm:absolute sm:-bottom-10 sm:-right-4 sm:mt-0 sm:w-44"
            />
          </div>
        }
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {t.benefit.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            {t.benefit.body}
          </p>
        </div>
      </Section>

      <Section subtle animate={false}>
        <SectionHeading title={s.flowTitle} />
        <div className="mt-12">
          <FeatureFlow
            rows={s.flow.map((row, i) => ({
              title: row.title,
              body: row.body,
              visual: flowVisuals[i],
            }))}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading title={t.features.title} />
        <FeatureGrid
          className="mt-10"
          items={t.features.items}
          icons={FEATURE_ICONS}
        />
      </Section>

      <Section subtle>
        <SectionHeading title={t.how.title} />
        <div className="mt-12">
          <StepList steps={t.how.steps} />
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-bg">
        <Container className="py-16 sm:py-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {s.panelTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                {s.panelBody}
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <BrowserFrame
                src={IMG.ole.panel}
                alt={s.panelShotAlt}
                caption={s.panelCaption}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <Section subtle>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {t.audience.title}
            </h2>
            <CheckList className="mt-6" items={t.audience.items} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {t.pricing.title}
            </h2>
            <CheckList className="mt-6" items={t.pricing.items} />
            <div className="mt-6">
              <ComingSoon label={t.pricing.note} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t.platforms.title} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.platforms.items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-bg p-5 text-sm leading-relaxed text-fg-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section subtle>
        <SectionHeading title={s.galleryTitle} />
        <div className="mt-10">
          <PhoneGallery
            items={[
              { src: IMG.ole.screenHome, alt: s.homeShotAlt, caption: s.gallery[0] },
              {
                src: IMG.ole.screenLoyalty,
                alt: s.loyaltyShotAlt,
                caption: s.gallery[1],
              },
              {
                src: IMG.ole.screenNotification,
                alt: s.notificationShotAlt,
                caption: s.gallery[2],
              },
              {
                src: IMG.ole.screenBusiness,
                alt: s.businessShotAlt,
                caption: s.gallery[3],
              },
            ]}
          />
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
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {t.closing.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                {t.closing.body}
              </p>
              <Button href={OLE_URL} external className="mt-6">
                oletr.com
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ProductDocs title={s.docsTitle} note={s.docsNote} docs={s.docs} />

      <ProductShowcase
        theme="namaz"
        eyebrow={dict.showcase.otherProduct}
        name={BRAND.products.namaz}
        tagline={dict.home.products.namaz.tagline}
        points={dict.products.namaz.points}
        href={localizedPath("productNamaz", locale)}
        ctaLabel={dict.common.learnMore}
        reversed
        visual={
          <DeviceFrame
            src={IMG.namaz.screenToday}
            alt={dict.showcase.namaz.heroShotAlt}
            className="mx-auto w-52 sm:w-56"
          />
        }
      />
    </div>
  );
}
