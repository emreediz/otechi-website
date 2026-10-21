import Image from "next/image";
import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { BRAND } from "@/config/brand";
import { OLE_LINKS } from "@/config/ole";
import { showcaseItems } from "@/lib/showcase";
import { storeBadges } from "@/lib/stores";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/motion/PageTransition";
import { StoreBadges } from "@/components/content/StoreBadges";
import {
  Bento,
  BentoCard,
  CaseCover,
  CaseStart,
  CaseText,
  Marquee,
  Moments,
  NextProduct,
} from "@/components/case/Case";
import { StepStory } from "@/components/case/StepStory";
import { oleScenes } from "@/components/case/Scenes";
import {
  OleCampaignCard,
  OleNotification,
  OleRewardCard,
} from "@/components/mock/OleMocks";
import { PanelDashboard } from "@/components/mock/PanelMocks";
import { OleArt } from "@/components/visual/ProductArt";

/** Small label above a group of actions in the closing panel. */
function ActionGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-sm text-white/70">{label}</p>
      {children}
    </div>
  );
}

/**
 * Ole (customer app) as a case study: artwork cover, introduction, "how it
 * works" with live scenes, feature words, highlights, real moments, how to
 * start and the next product. External links come from `config/ole.ts`
 * (main domain only).
 */
export function OleView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.ole;
  const c = dict.case;
  const f = t.features;
  const mock = dict.mock;
  const o = mock.ole;
  const facts = dict.products.facts.ole;
  const labels = dict.products.factLabels;
  const newTab = dict.common.newTab;
  const items = showcaseItems(locale);

  return (
    <PageTransition>
      <article data-theme="ole">
        <CaseCover
          title={BRAND.products.ole}
          meta={[
            { label: labels.audience, value: facts.audience },
            { label: labels.platform, value: facts.platform },
            { label: labels.status, value: facts.status },
          ]}
          portrait={<OleArt copy={mock} layout="portrait" cover />}
          landscape={<OleArt copy={mock} layout="landscape" cover priority />}
        />

        <CaseText label={c.introLabel}>
          <p className="text-statement text-balance">{t.intro}</p>
          <p className="mt-6 max-w-[46ch] text-lead text-fg-soft">
            {t.hero.lead}
          </p>
        </CaseText>

        <StepStory
          label={c.howLabel}
          stepLabel={c.stepLabel}
          steps={t.steps}
          scenes={oleScenes(mock)}
          tone="ole"
        />

        <Marquee words={t.marquee} />

        <Bento label={c.featuresLabel}>
          <BentoCard
            tone="ole"
            bleed
            className="min-h-[30rem] md:col-span-2 lg:col-span-3 lg:min-h-[33rem]"
            title={f.campaign.title}
            body={f.campaign.body}
            visual={
              // A deck: older campaigns peek out above the newest.
              <div className="absolute inset-x-0 top-8 grid justify-items-center [--deck-y:5rem] group-hover:[--deck-y:5.5rem] sm:top-10">
                {[o.otherCampaigns[1], o.otherCampaigns[0], undefined].map(
                  (campaign, i) => (
                    <div
                      key={i}
                      className="w-[min(22rem,calc(100%-3rem))] transition-[translate] duration-700 ease-out-expo [grid-area:1/1]"
                      style={{
                        translate: `${[-5, 4, 0][i]}% calc(${i} * var(--deck-y))`,
                        rotate: `${[-3, 2, 0][i]}deg`,
                      }}
                    >
                      <OleCampaignCard
                        copy={o}
                        campaign={campaign}
                        className={i === 2 ? "shadow-2xl" : undefined}
                      />
                    </div>
                  ),
                )}
              </div>
            }
          />
          <BentoCard
            tone="ole"
            className="lg:col-span-3"
            title={f.notify.title}
            body={f.notify.body}
            visual={
              <div className="grid w-full max-w-[21rem] gap-3 lg:scale-[1.2]">
                <OleNotification
                  copy={o}
                  title={o.newCampaignTitle}
                  body={o.newCampaignBody}
                />
                {/* Older notifications stacked under the newest. */}
                <div className="relative pb-5">
                  <OleNotification
                    copy={o}
                    time={o.earlier}
                    className="absolute inset-x-0 top-0 translate-y-5 scale-[0.88] opacity-40"
                  />
                  <OleNotification
                    copy={o}
                    time={o.earlier}
                    className="absolute inset-x-0 top-0 translate-y-2.5 scale-[0.94] opacity-70"
                  />
                  <OleNotification
                    copy={o}
                    title={o.rewardReady}
                    body={o.rewardNotifBody}
                    time={o.earlier}
                    className="relative"
                  />
                </div>
              </div>
            }
          />
          <BentoCard
            tone="ole"
            className="lg:col-span-2"
            stat={t.free.value}
            title={t.free.title}
            body={t.free.body}
          />
          <BentoCard
            tone="ole"
            bleed
            className="md:col-span-2 lg:col-span-4"
            title={t.panelLink.title}
            body={t.panelLink.body}
            link={{ href: items[1].href, label: t.panelLink.cta }}
            visual={
              // Phones: anchored right, so the crop falls on the sidebar
              // and the highlighted bar stays in view.
              <div className="absolute right-4 top-8 w-[44rem] origin-top-right scale-[0.8] sm:left-8 sm:right-auto sm:top-10 sm:origin-top-left sm:scale-100 lg:left-[12%] lg:-rotate-2">
                <PanelDashboard copy={mock.panel} campaignLive />
              </div>
            }
          />
        </Bento>

        <Moments
          label={c.momentsLabel}
          photos={[IMG.photos.ole3, IMG.photos.ole4]}
          chip={
            <span className="flex w-max items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#c24a00] shadow-lg">
              <Image src={IMG.ole.token} alt="" width={96} height={96} className="size-5" />
              {o.earned}
            </span>
          }
        />

        <CaseStart
          tone="ole"
          label={c.startLabel}
          statement={t.closing.lines.join(" ")}
          actions={
            <div className="grid gap-8">
              <ActionGroup label={c.forBusiness}>
                <div className="flex flex-wrap items-center gap-3">
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
                    <span className="sr-only">{c.supportLabel}: </span>
                    {OLE_LINKS.supportEmail}
                  </Button>
                </div>
              </ActionGroup>
              <ActionGroup label={c.forCustomers}>
                <StoreBadges
                  items={storeBadges(dict, "ole")}
                  newTabLabel={newTab}
                  size="fluid"
                  variant="glass"
                />
              </ActionGroup>
            </div>
          }
          art={
            <>
              <div className="art-float-slow absolute left-[8%] top-8 w-[min(19rem,80%)] -rotate-6 lg:top-[14%]">
                <OleRewardCard copy={o} filled={5} className="shadow-2xl" />
              </div>
              <div className="art-float absolute left-[24%] top-40 w-[22rem] rotate-3 max-sm:hidden sm:top-48 lg:left-[30%] lg:top-[52%]">
                <OleCampaignCard copy={o} campaign={o.otherCampaigns[0]} className="shadow-2xl" />
              </div>
            </>
          }
        />

        <NextProduct label={c.nextLabel} item={items[1]} />
      </article>
    </PageTransition>
  );
}
