import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { OLE_LINKS } from "@/config/ole";
import { showcaseItems } from "@/lib/showcase";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/motion/PageTransition";
import {
  Bento,
  BentoCard,
  CaseCover,
  CaseStart,
  CaseText,
  Marquee,
  NextProduct,
} from "@/components/case/Case";
import { StepStory } from "@/components/case/StepStory";
import { panelScenes } from "@/components/case/Scenes";
import {
  PanelBranchCompare,
  PanelDashboard,
  PanelNotifyCard,
} from "@/components/mock/PanelMocks";
import { PanelArt } from "@/components/visual/ProductArt";
import { cn } from "@/lib/cn";

/** Where the KPI tiles sit in the closing panel's art (one per KPI). */
const KPI_TILES = [
  "left-[4%] top-6 -rotate-3 art-float-slow sm:left-[6%] lg:top-[10%]",
  "left-[50%] top-14 rotate-2 art-float sm:left-[40%] sm:top-32 lg:left-[42%] lg:top-[30%]",
  "left-[20%] top-40 -rotate-1 art-float-slow max-sm:hidden sm:left-[14%] sm:top-60 lg:left-[10%] lg:top-[56%]",
];

/**
 * Ole Panel (the business dashboard) as a case study: artwork cover,
 * introduction, "how it works" with live scenes, feature words,
 * highlights, how to start and the next product. Navy accent.
 */
export function OlePanelView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.olePanel;
  const c = dict.case;
  const f = t.features;
  const mock = dict.mock;
  const facts = dict.products.facts.panel;
  const labels = dict.products.factLabels;
  const newTab = dict.common.newTab;
  const items = showcaseItems(locale);

  return (
    <PageTransition>
      <article data-theme="panel">
        <CaseCover
          title={BRAND.products.olePanel}
          meta={[
            { label: labels.audience, value: facts.audience },
            { label: labels.platform, value: facts.platform },
            { label: labels.status, value: facts.status },
          ]}
          portrait={<PanelArt copy={mock} layout="portrait" cover />}
          landscape={<PanelArt copy={mock} layout="landscape" cover priority />}
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
          scenes={panelScenes(mock)}
          tone="panel"
        />

        <Marquee words={t.marquee} />

        <Bento label={c.featuresLabel}>
          <BentoCard
            tone="panel"
            bleed
            side
            className="md:col-span-2 lg:col-span-6 lg:min-h-[34rem]"
            title={f.reports.title}
            body={f.reports.body}
            visual={
              // Phones: anchored right (crop on the sidebar); large screens:
              // clearly running off the right edge.
              <div className="absolute right-4 top-8 w-[44rem] origin-top-right scale-[0.8] sm:left-8 sm:right-auto sm:top-10 sm:origin-top-left sm:scale-100 lg:left-[6%] lg:top-14 lg:scale-[1.12] xl:scale-[1.2]">
                <PanelDashboard copy={mock.panel} campaignLive />
              </div>
            }
          />
          <BentoCard
            tone="panel"
            className="lg:col-span-2"
            stat={t.noCommission.value}
            title={t.noCommission.title}
            body={t.noCommission.body}
          />
          <BentoCard
            tone="panel"
            className="lg:col-span-2"
            title={f.branches.title}
            body={f.branches.body}
            visual={<PanelBranchCompare copy={mock.panel} />}
          />
          <BentoCard
            tone="panel"
            className="md:col-span-2 lg:col-span-2"
            title={f.notify.title}
            body={f.notify.body}
            visual={<PanelNotifyCard copy={mock.panel} />}
          />
        </Bento>

        <CaseStart
          tone="panel"
          label={c.startLabel}
          statement={t.closing.lines.join(" ")}
          actions={
            <div className="flex flex-wrap gap-3">
              <Button
                href={OLE_LINKS.panel}
                external
                newTabLabel={newTab}
                size="lg"
              >
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
            </div>
          }
          art={mock.panel.kpis.map((k, i) => (
            <div
              key={k.label}
              className={cn(
                "absolute w-[46%] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:w-[min(14rem,60%)] sm:p-5",
                KPI_TILES[i],
              )}
            >
              <p className="text-4xl font-light tabular-nums tracking-[-0.04em] sm:text-5xl">
                {k.value}
              </p>
              <p className="mt-2 text-sm text-white/75">{k.label}</p>
              <span className="mt-4 block h-1 overflow-hidden rounded-full bg-white/15">
                <span
                  className="block h-full rounded-full bg-brand"
                  style={{ width: `${[72, 46, 60][i]}%` }}
                />
              </span>
            </div>
          ))}
        />

        <NextProduct label={c.nextLabel} item={items[2]} />
      </article>
    </PageTransition>
  );
}
