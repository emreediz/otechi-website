import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Gift,
  Heart,
  Mail,
  Store,
  Tag,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { OLE_LINKS } from "@/config/ole";
import { productCapsules } from "@/lib/productCapsules";
import { storeBadges } from "@/lib/stores";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { StoreBadges } from "@/components/content/StoreBadges";
import { Closing } from "@/components/content/Closing";
import type { CapsuleColor } from "@/components/visual/Capsule";
import { ProductHero, SPOTS_SIX } from "@/components/showcase/ProductHero";
import { FeatureCard } from "@/components/showcase/FeatureCard";
import { OtherProducts } from "@/components/showcase/OtherProducts";
import {
  OleCampaignCard,
  OleNotification,
  OleRewardCard,
} from "@/components/mock/OleMocks";
import { PanelDashboard, QrPattern } from "@/components/mock/PanelMocks";

const FIELD_ICONS = [Heart, Bell, Tag, Gift, Store, BarChart3];
const FIELD_COLORS: CapsuleColor[] = [
  "orange",
  "orange",
  "orange",
  "navy",
  "navy",
  "navy",
];

/**
 * Ole: hero with feature capsules, a one-line statement with the store
 * badges, a bento of coded mock-ups, a link to Ole Panel and the closing.
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
  const mock = dict.mock;
  const newTab = dict.common.newTab;
  const capsules = productCapsules(locale);
  const panelHref = localizedPath("productPanel", locale);

  const field = t.hero.capsules.map((label, i) => {
    const Icon = FIELD_ICONS[i];
    return {
      key: label,
      label,
      color: FIELD_COLORS[i],
      icon: <Icon aria-hidden="true" />,
    };
  });

  const facts = [
    { label: t.facts.platformLabel, value: t.facts.platform },
    { label: t.facts.modelLabel, value: t.facts.model },
    { label: t.facts.customersLabel, value: t.facts.customers },
    { label: t.facts.statusLabel, value: t.facts.status },
  ];

  return (
    <PageTransition>
      <div data-theme="ole">
        <ProductHero
          name={BRAND.products.ole}
          color="orange"
          icon={capsules[0].icon}
          kicker={t.hero.kicker}
          titleLines={t.hero.titleLines}
          lead={t.hero.lead}
          capsules={field}
          spots={SPOTS_SIX}
          actions={
            <>
              <Button
                href={OLE_LINKS.demo}
                external
                newTabLabel={newTab}
                size="lg"
              >
                {t.hero.ctaDemo}
              </Button>
              <Button href={panelHref} variant="secondary" size="lg">
                {t.panelLink.cta}
              </Button>
            </>
          }
        />

        {/* Statement + stores */}
        <section className="pb-[clamp(5rem,11vw,9.5rem)] pt-6">
          <Container>
            <Reveal className="mx-auto max-w-4xl text-center">
              <Image
                src={IMG.ole.token}
                alt=""
                width={96}
                height={96}
                className="mx-auto size-14"
              />
              <p className="mt-6 text-statement text-balance">{t.intro}</p>
              <StoreBadges
                items={storeBadges(dict, "ole")}
                newTabLabel={newTab}
                className="mt-10 justify-center"
              />
            </Reveal>
          </Container>
        </section>

        {/* Features (bento) */}
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
              className="mt-[clamp(3rem,6vw,5rem)] grid gap-4 lg:grid-cols-12 lg:gap-5"
            >
              <FeatureCard
                large
                className="lg:col-span-7"
                title={t.features.reward.title}
                body={t.features.reward.body}
              >
                <OleRewardCard copy={mock.ole} filled={3} />
              </FeatureCard>
              <FeatureCard
                className="lg:col-span-5"
                title={t.features.scan.title}
                body={t.features.scan.body}
              >
                <div className="flex items-center gap-6">
                  <QrPattern className="size-28 rounded-2xl bg-white p-3 shadow-md" />
                  <Image
                    src={IMG.ole.nfc}
                    alt={t.alt.nfc}
                    width={IMG.ole.nfcW}
                    height={IMG.ole.nfcH}
                    sizes="6rem"
                    className="h-44 w-auto -rotate-6 drop-shadow-[0_18px_24px_rgb(120_40_0/0.3)]"
                  />
                </div>
              </FeatureCard>
              <FeatureCard
                className="lg:col-span-5"
                title={t.features.notify.title}
                body={t.features.notify.body}
              >
                <OleNotification copy={mock.ole} />
              </FeatureCard>
              <FeatureCard
                large
                className="lg:col-span-7"
                title={t.features.campaign.title}
                body={t.features.campaign.body}
              >
                <OleCampaignCard copy={mock.ole} />
              </FeatureCard>
            </Reveal>

            <Reveal
              variant="trigger"
              className="mt-4 grid grid-cols-2 gap-4 lg:mt-5 lg:grid-cols-4 lg:gap-5"
            >
              {facts.map((f) => (
                <div key={f.label} className="card stagger-item !p-5 sm:!p-6">
                  <p className="text-sm text-fg-soft">{f.label}</p>
                  <p className="mt-1.5 font-semibold text-balance">{f.value}</p>
                </div>
              ))}
            </Reveal>
            <p className="mt-8 text-center text-xs text-fg-faint">
              {mock.caption}
            </p>
          </Container>
        </section>

        {/* Ole Panel (business side) */}
        <section className="py-[clamp(5rem,11vw,9.5rem)]">
          <Container>
            <Reveal>
              <Link
                href={panelHref}
                className="group grid overflow-hidden rounded-panel bg-ole-navy text-white lg:grid-cols-[1fr_1.15fr]"
              >
                <span className="flex flex-col p-8 sm:p-12">
                  <span className="text-sm text-white/75">
                    {t.panelLink.label}
                  </span>
                  <span className="mt-3 text-display-m text-balance">
                    {t.panelLink.title}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-10 font-semibold">
                    <span className="border-b-[1.5px] border-brand pb-0.5">
                      {t.panelLink.cta}
                    </span>
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="block px-6 pt-2 sm:px-10 lg:pt-12"
                >
                  <PanelDashboard
                    copy={mock.panel}
                    className="translate-y-6 text-fg transition-transform duration-700 ease-out-expo group-hover:translate-y-2"
                  />
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>

        {/* The other products */}
        <section className="pb-[clamp(5rem,11vw,9.5rem)]">
          <Container>
            <Reveal>
              <Kicker as="h2">{dict.showcase.otherProduct}</Kicker>
              <OtherProducts
                items={capsules.filter((c) => c.key !== "ole")}
                dict={dict}
                className="mt-8"
              />
            </Reveal>
          </Container>
        </section>

        <Closing
          lines={[t.closing.lines[0], t.closing.lines[1]]}
          capsules={capsules}
          capsulesLabel={dict.home.hero.capsulesLabel}
          action={
            <>
              <Button
                href={OLE_LINKS.demo}
                external
                newTabLabel={newTab}
                size="lg"
              >
                {t.hero.ctaDemo}
              </Button>
              <Button
                href={`mailto:${OLE_LINKS.supportEmail}`}
                variant="secondary"
                size="lg"
              >
                <Mail className="size-4" aria-hidden="true" />
                <span className="sr-only">{t.closing.supportLabel}: </span>
                {OLE_LINKS.supportEmail}
              </Button>
            </>
          }
        />
      </div>
    </PageTransition>
  );
}
