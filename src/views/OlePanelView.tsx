import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { OLE_LINKS } from "@/config/ole";
import { cn } from "@/lib/cn";
import { showcaseItems } from "@/lib/showcase";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import {
  CaseFeatures,
  CaseHero,
  CaseMedia,
  CaseText,
  CaseTiles,
  EDGE,
  MockStage,
  NextProduct,
} from "@/components/case/Case";
import {
  PanelBranches,
  PanelCampaignsCard,
  PanelDashboard,
  PanelNotifyCard,
  PanelQrCard,
  PanelVerifyCard,
} from "@/components/mock/PanelMocks";

/**
 * Ole Panel as a case study: name and facts, the coded dashboard full
 * width, the introduction, media tiles, highlights, how to start, and the
 * next product.
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
        <CaseHero
          title={BRAND.products.olePanel}
          meta={[
            { label: labels.audience, value: facts.audience },
            { label: labels.platform, value: facts.platform },
            { label: labels.status, value: facts.status },
          ]}
        />

        <CaseMedia>
          <MockStage tone="panel" className="p-[5%] sm:p-[6%]">
            <PanelDashboard
              copy={mock.panel}
              campaignLive
              className="w-full max-w-5xl"
            />
          </MockStage>
        </CaseMedia>

        <CaseText label={c.introLabel}>
          <p className="text-statement text-balance">{t.intro}</p>
          <p className="mt-6 max-w-[46ch] text-lead text-fg-soft">
            {t.hero.lead}
          </p>
        </CaseText>

        <CaseTiles
          tiles={[
            <MockStage key="qr" tone="panel">
              <PanelQrCard copy={mock.panel} />
            </MockStage>,
            <MockStage key="verify" tone="panel">
              <PanelVerifyCard copy={mock.panel} />
            </MockStage>,
          ]}
        />
        <CaseTiles
          className="mt-3"
          tiles={[
            <MockStage key="campaigns" tone="panel">
              <PanelCampaignsCard copy={mock.panel} />
            </MockStage>,
            <MockStage key="notify" tone="panel" className="gap-4">
              <div className="grid w-full max-w-[19rem] gap-4">
                <PanelNotifyCard copy={mock.panel} />
                <PanelBranches copy={mock.panel} />
              </div>
            </MockStage>,
          ]}
        />

        <CaseFeatures
          label={c.featuresLabel}
          items={[f.qr, f.verify, f.campaigns, f.notify, f.branches, f.reports]}
        />

        <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)]")}>
          <Reveal className="grid gap-8 md:grid-cols-12">
            <h2 className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
              {c.startLabel}
            </h2>
            <div className="md:col-span-9 lg:col-span-7">
              <p className="text-statement text-balance">
                {t.closing.lines.join(" ")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
            </div>
          </Reveal>
        </section>

        <NextProduct label={c.nextLabel} item={items[2]} />
      </article>
    </PageTransition>
  );
}
