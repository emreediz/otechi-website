import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, Megaphone, QrCode } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { OLE_LINKS } from "@/config/ole";
import { productCapsules } from "@/lib/productCapsules";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { Closing } from "@/components/content/Closing";
import type { CapsuleColor } from "@/components/visual/Capsule";
import { ProductHero, SPOTS_FOUR } from "@/components/showcase/ProductHero";
import { FeatureCard } from "@/components/showcase/FeatureCard";
import { OtherProducts } from "@/components/showcase/OtherProducts";
import { OleRewardCard } from "@/components/mock/OleMocks";
import {
  PanelBranches,
  PanelCampaignsCard,
  PanelDashboard,
  PanelNotifyCard,
  PanelQrCard,
  PanelReportCard,
  PanelVerifyCard,
} from "@/components/mock/PanelMocks";

const FIELD_ICONS = [QrCode, BadgeCheck, Megaphone, BarChart3];
const FIELD_COLORS: CapsuleColor[] = ["navy", "orange", "navy", "orange"];

/**
 * Ole Panel: the web dashboard businesses use to run Ole — hero, a large
 * coded dashboard, a bento of everyday tasks, a link to the Ole app and
 * the closing. Navy accent (`data-theme="panel"`).
 */
export function OlePanelView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.olePanel;
  const f = t.features;
  const mock = dict.mock;
  const newTab = dict.common.newTab;
  const capsules = productCapsules(locale);
  const oleHref = localizedPath("productOle", locale);

  const field = t.hero.capsules.map((label, i) => {
    const Icon = FIELD_ICONS[i];
    return {
      key: label,
      label,
      color: FIELD_COLORS[i],
      icon: <Icon aria-hidden="true" />,
    };
  });

  const actions = (
    <>
      <Button href={OLE_LINKS.panel} external newTabLabel={newTab} size="lg">
        {t.hero.ctaPanel}
      </Button>
      <Button
        href={OLE_LINKS.demo}
        external
        newTabLabel={newTab}
        variant="secondary"
        size="lg"
      >
        {t.hero.ctaDemo}
      </Button>
    </>
  );

  return (
    <PageTransition>
      <div data-theme="panel">
        <ProductHero
          name={BRAND.products.olePanel}
          color="navy"
          icon={capsules[1].icon}
          kicker={t.hero.kicker}
          titleLines={t.hero.titleLines}
          lead={t.hero.lead}
          capsules={field}
          spots={SPOTS_FOUR}
          actions={actions}
        />

        {/* The dashboard */}
        <section className="pb-[clamp(5rem,11vw,9.5rem)]">
          <Container>
            <Reveal className="mx-auto max-w-5xl">
              <PanelDashboard copy={mock.panel} campaignLive />
              <p className="mt-4 text-center text-xs text-fg-faint">
                {mock.caption}
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Everyday tasks (bento) */}
        <section className="section-surface py-[clamp(5rem,11vw,9.5rem)]">
          <Container>
            <Reveal>
              <SectionHead
                kicker={f.kicker}
                title={f.title}
                titleMuted={f.titleMuted}
              />
            </Reveal>
            <Reveal
              variant="trigger"
              className="mt-[clamp(3rem,6vw,5rem)] grid gap-4 lg:grid-cols-12 lg:gap-5"
            >
              <FeatureCard large className="lg:col-span-7" {...f.qr}>
                <PanelQrCard copy={mock.panel} />
              </FeatureCard>
              <FeatureCard className="lg:col-span-5" {...f.verify}>
                <PanelVerifyCard copy={mock.panel} />
              </FeatureCard>
              <FeatureCard className="lg:col-span-5" {...f.campaigns}>
                <PanelCampaignsCard copy={mock.panel} />
              </FeatureCard>
              <FeatureCard large className="lg:col-span-7" {...f.notify}>
                <PanelNotifyCard copy={mock.panel} />
              </FeatureCard>
              <FeatureCard className="lg:col-span-6" {...f.branches}>
                <PanelBranches copy={mock.panel} />
              </FeatureCard>
              <FeatureCard className="lg:col-span-6" {...f.reports}>
                <PanelReportCard copy={mock.panel} />
              </FeatureCard>
            </Reveal>
          </Container>
        </section>

        {/* Ole (customer side) */}
        <section className="py-[clamp(5rem,11vw,9.5rem)]" data-theme="ole">
          <Container>
            <Reveal>
              <Link
                href={oleHref}
                className="group grid overflow-hidden rounded-panel bg-[radial-gradient(90%_80%_at_80%_100%,#ff9a52,#fd5e00_60%,#e85600)] text-ole-navy lg:grid-cols-[1.15fr_1fr]"
              >
                <span className="flex flex-col p-8 sm:p-12">
                  <span className="text-sm font-medium text-ole-navy/80">
                    {t.appLink.label}
                  </span>
                  <span className="mt-3 text-display-m text-balance">
                    {t.appLink.title}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-10 font-semibold">
                    <span className="border-b-[1.5px] border-ole-navy pb-0.5">
                      {t.appLink.cta}
                    </span>
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="grid place-items-center px-6 pb-10 sm:px-10 lg:py-12"
                >
                  <OleRewardCard
                    copy={mock.ole}
                    filled={4}
                    className="rotate-2 transition-transform duration-700 ease-out-expo group-hover:rotate-0"
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
                items={capsules.filter((c) => c.key !== "panel")}
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
          action={actions}
        />
      </div>
    </PageTransition>
  );
}
