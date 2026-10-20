import Link from "next/link";
import { ArrowRight, BarChart3, Flame, Sunrise, Users } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { productCapsules } from "@/lib/productCapsules";
import { storeBadges } from "@/lib/stores";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { StoreBadges } from "@/components/content/StoreBadges";
import { Closing } from "@/components/content/Closing";
import { ProductHero, SPOTS_FOUR } from "@/components/showcase/ProductHero";
import { FeatureCard } from "@/components/showcase/FeatureCard";
import { OtherProducts } from "@/components/showcase/OtherProducts";
import {
  NamazGroup,
  NamazToday,
  NamazWeek,
} from "@/components/mock/NamazMocks";

const FIELD_ICONS = [Sunrise, BarChart3, Users, Flame];

/**
 * Namaz Motivasyonu: a short, calm product page in green — slower reveals
 * (`data-calm`), no orange. Hero with store badges, three coded app
 * mock-ups, privacy and the Turkish-only documents, then the closing.
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
  const mock = dict.mock;
  const newTab = dict.common.newTab;
  const capsules = productCapsules(locale);
  const stores = storeBadges(dict, "namaz");

  const field = t.hero.capsules.map((label, i) => {
    const Icon = FIELD_ICONS[i];
    return {
      key: label,
      label,
      color: "green" as const,
      icon: <Icon aria-hidden="true" />,
    };
  });

  const visuals = [
    <NamazToday
      key="today"
      copy={mock.namaz}
      done={[true, true, true, false, false]}
    />,
    <NamazWeek key="week" copy={mock.namaz} />,
    <NamazGroup key="group" copy={mock.namaz} />,
  ];

  const docs = [
    { href: NAMAZ_LEGAL.privacy, label: s.docs.privacy },
    { href: NAMAZ_LEGAL.kvkk, label: s.docs.kvkk },
    { href: NAMAZ_LEGAL.terms, label: s.docs.terms },
    { href: NAMAZ_LEGAL.accountDeletion, label: s.docs.accountDeletion },
  ];

  return (
    <PageTransition>
      <div data-theme="namaz" data-calm="true">
        <ProductHero
          name={BRAND.products.namaz}
          color="green"
          icon={capsules[2].icon}
          kicker={t.hero.kicker}
          titleLines={t.hero.titleLines}
          lead={t.hero.lead}
          capsules={field}
          spots={SPOTS_FOUR}
          actions={
            <StoreBadges
              items={stores}
              newTabLabel={newTab}
              className="justify-center"
            />
          }
        />

        {/* In the app (bento of three) */}
        <section className="section-surface py-[clamp(5rem,11vw,9.5rem)]">
          <Container>
            <Reveal>
              <SectionHead
                kicker={t.features.kicker}
                title={t.features.title}
                titleMuted={t.features.titleMuted}
              />
            </Reveal>
            <Reveal
              variant="trigger"
              className="mt-[clamp(3rem,6vw,5rem)] grid gap-4 lg:grid-cols-3 lg:gap-5"
            >
              {t.features.beats.map((beat, i) => (
                <FeatureCard key={beat.title} title={beat.title} body={beat.body}>
                  {visuals[i]}
                </FeatureCard>
              ))}
            </Reveal>
            <p className="mt-8 text-center text-xs text-fg-faint">
              {mock.caption}
            </p>
          </Container>
        </section>

        {/* Privacy & documents */}
        <section className="py-[clamp(5rem,11vw,9.5rem)]">
          <Container>
            <Reveal className="grid gap-10 rounded-panel bg-[#eef5f1] p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-heading">{t.privacy.title}</h2>
                <p className="mt-5 max-w-[52ch] leading-relaxed text-fg-muted">
                  {t.privacy.body}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">{s.docsTitle}</h3>
                {locale === "en" ? (
                  <p className="mt-1 text-xs text-fg-soft">{s.docsNote}</p>
                ) : null}
                <ul className="mt-4 grid gap-2">
                  {docs.map((doc) => (
                    <li key={doc.href}>
                      <Link
                        href={doc.href}
                        className="group flex min-h-14 items-center justify-between gap-4 rounded-2xl bg-white px-5 py-3 font-medium shadow-xs transition-shadow hover:shadow-md"
                      >
                        {doc.label}
                        <ArrowRight
                          className="size-4 shrink-0 text-accent transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* The other products */}
        <section className="pb-[clamp(5rem,11vw,9.5rem)]">
          <Container>
            <Reveal>
              <Kicker as="h2">{dict.showcase.otherProduct}</Kicker>
              <OtherProducts
                items={capsules.filter((c) => c.key !== "namaz")}
                dict={dict}
                className="mt-8"
              />
            </Reveal>
          </Container>
        </section>

        <Closing
          lines={[BRAND.products.namaz, t.closing.title]}
          capsules={field}
          fillers={["green", "green"]}
          action={
            <StoreBadges
              items={stores}
              newTabLabel={newTab}
              className="justify-center"
            />
          }
        />
      </div>
    </PageTransition>
  );
}
