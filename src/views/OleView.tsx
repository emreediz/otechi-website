import Image from "next/image";
import { Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { BRAND } from "@/config/brand";
import { OLE_LINKS } from "@/config/ole";
import { showcaseItems } from "@/lib/showcase";
import { storeBadges } from "@/lib/stores";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { StoreBadges } from "@/components/content/StoreBadges";
import {
  CaseCover,
  CaseFeatures,
  CaseMedia,
  CaseText,
  CaseTiles,
  EDGE,
  MockStage,
  NextProduct,
} from "@/components/case/Case";
import { OleCampaignCard, OleRewardCard } from "@/components/mock/OleMocks";
import { OleArt } from "@/components/visual/ProductArt";
import { QrPattern } from "@/components/mock/PanelMocks";
import { cn } from "@/lib/cn";

/**
 * Ole as a case study: a full-screen cover (glass token and the Ole Coffee
 * business card) with the name and facts, the introduction, media tiles (coded mock-ups and photos),
 * highlights, how to start, and the next product. External links come from
 * `config/ole.ts` (main domain only).
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
  const mock = dict.mock;
  const facts = dict.products.facts.ole;
  const labels = dict.products.factLabels;
  const newTab = dict.common.newTab;
  const items = showcaseItems(locale);
  const f = t.features;

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

        <CaseTiles
          tiles={[
            <MockStage key="reward" tone="ole">
              <OleRewardCard copy={mock.ole} filled={3} />
            </MockStage>,
            <Image
              key="photo"
              src={IMG.photos.ole3.src}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />,
          ]}
        />
        <CaseTiles
          className="mt-3"
          tiles={[
            <Image
              key="photo"
              src={IMG.photos.ole4.src}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />,
            <MockStage key="scan" tone="ole" className="gap-6">
              <div className="flex items-center gap-8">
                <QrPattern className="size-32 rounded-2xl bg-white p-3" />
                <Image
                  src={IMG.ole.nfc}
                  alt={t.alt.nfc}
                  width={IMG.ole.nfcW}
                  height={IMG.ole.nfcH}
                  sizes="8rem"
                  className="h-52 w-auto -rotate-6 drop-shadow-[0_20px_30px_rgb(0_0_0/0.5)]"
                />
              </div>
            </MockStage>,
          ]}
        />

        <CaseFeatures
          label={c.featuresLabel}
          items={[f.reward, f.scan, f.notify, f.campaign]}
        />

        <CaseMedia className="h-[min(80svh,46vw)]">
          <MockStage tone="ole">
            <OleCampaignCard copy={mock.ole} className="scale-[1.15]" />
          </MockStage>
        </CaseMedia>

        <section className={cn(EDGE, "py-[clamp(5rem,11vw,10rem)]")}>
          <Reveal className="grid gap-8 md:grid-cols-12">
            <h2 className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
              {c.startLabel}
            </h2>
            <div className="md:col-span-9 lg:col-span-7">
              <p className="text-statement text-balance">
                {t.closing.lines.join(" ")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
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
              <StoreBadges
                items={storeBadges(dict, "ole")}
                newTabLabel={newTab}
                className="mt-6"
              />
            </div>
          </Reveal>
        </section>

        <NextProduct label={c.nextLabel} item={items[1]} />
      </article>
    </PageTransition>
  );
}
