import { CalendarCheck, BellRing, TrendingUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/content/PageHero";
import { FeatureGrid } from "@/components/content/FeatureGrid";
import { StepList } from "@/components/content/StepList";
import { PhoneGallery } from "@/components/content/PhoneGallery";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { Button } from "@/components/ui/Button";
import { ShowcaseTile } from "@/components/visual/ShowcaseTile";
import { DeviceFrame } from "@/components/visual/DeviceFrame";

const FEATURE_ICONS = [CalendarCheck, BellRing, TrendingUp];

export function NamazView({
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.namaz;
  const s = dict.showcase.namaz;

  return (
    <div data-theme="namaz" data-calm="true" className="bg-bg text-fg">
      <PageHero
        backdrop="namaz"
        kicker={t.hero.kicker}
        title={BRAND.products.namaz}
        subtitle={t.hero.tagline}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <ComingSoon
              label={`${t.hero.ctaAppStore} · ${dict.common.comingSoon}`}
            />
            <ComingSoon
              label={`${t.hero.ctaGooglePlay} · ${dict.common.comingSoon}`}
            />
          </div>
        }
        aside={
          <div className="relative mx-auto max-w-sm">
            <ShowcaseTile
              tone="namaz"
              imageSrc={IMG.namaz.art}
              imageAlt={s.artAlt}
              imageWidth={IMG.namaz.artW}
              imageHeight={IMG.namaz.artH}
              priority
            />
            <DeviceFrame
              src={IMG.namaz.screenToday}
              alt={s.heroShotAlt}
              priority
              className="mx-auto -mt-16 w-40 sm:absolute sm:-bottom-10 sm:-right-4 sm:mt-0 sm:w-44"
            />
          </div>
        }
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {t.intro.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            {t.intro.body}
          </p>
        </div>
      </Section>

      <Section subtle>
        <SectionHeading title={t.features.title} />
        <FeatureGrid
          className="mt-10"
          items={t.features.items}
          icons={FEATURE_ICONS}
          columns={3}
        />
        <p className="mt-6 text-sm text-fg-muted">{t.features.note}</p>
      </Section>

      <Section>
        <SectionHeading title={s.galleryTitle} />
        <div className="mt-10">
          <PhoneGallery
            items={[
              {
                src: IMG.namaz.screenToday,
                alt: s.heroShotAlt,
                caption: s.gallery[0],
              },
              {
                src: IMG.namaz.screenGroup,
                alt: s.gallery[1],
                caption: s.gallery[1],
              },
            ]}
          />
        </div>
      </Section>

      <Section subtle>
        <SectionHeading title={t.how.title} />
        <div className="mt-12">
          <StepList steps={t.how.steps} />
        </div>
      </Section>

      <section className="bg-bg">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="max-w-3xl rounded-2xl border border-border bg-bg-subtle p-8">
              <h2 className="font-display text-xl font-bold tracking-tight">
                {t.privacy.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {t.privacy.body}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

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
            </div>
          </Reveal>
        </Container>
      </section>

      <Section subtle>
        <SectionHeading title={s.docsTitle} intro={s.docsNote} />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={NAMAZ_LEGAL.privacy} variant="secondary">
            {s.docs[0]}
          </Button>
          <Button href={NAMAZ_LEGAL.kvkk} variant="secondary">
            {s.docs[1]}
          </Button>
          <Button href={NAMAZ_LEGAL.terms} variant="secondary">
            {s.docs[2]}
          </Button>
        </div>
      </Section>
    </div>
  );
}
