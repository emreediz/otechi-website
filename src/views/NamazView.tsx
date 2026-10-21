import Link from "next/link";
import { ArrowRight, Flame, Moon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { cn } from "@/lib/cn";
import { showcaseItems } from "@/lib/showcase";
import { storeBadges } from "@/lib/stores";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { StoreBadges } from "@/components/content/StoreBadges";
import {
  Bento,
  BentoCard,
  CaseCover,
  CaseStart,
  CaseText,
  EDGE,
  Fan,
  Marquee,
  Moments,
  NextProduct,
} from "@/components/case/Case";
import { StepStory } from "@/components/case/StepStory";
import { namazScenes } from "@/components/case/Scenes";
import {
  NamazDelete,
  NamazFive,
  NamazGroup,
  NamazMonth,
  NamazToday,
  NamazWeek,
  NamazYear,
} from "@/components/mock/NamazMocks";
import { NamazArt } from "@/components/visual/ProductArt";

/**
 * Namaz Motivasyonu as a case study, calmer motion (`data-calm`): artwork
 * cover, introduction, "how it works" with live scenes, feature words,
 * highlights, real moments, how to start, privacy and the Turkish-only
 * documents, then the next product.
 */
export function NamazView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.namaz;
  const b = t.bento;
  const c = dict.case;
  const s = dict.showcase.namaz;
  const mock = dict.mock;
  const n = mock.namaz;
  const facts = dict.products.facts.namaz;
  const labels = dict.products.factLabels;
  const newTab = dict.common.newTab;
  const items = showcaseItems(locale);

  const docs = [
    { href: NAMAZ_LEGAL.privacy, label: s.docs.privacy },
    { href: NAMAZ_LEGAL.kvkk, label: s.docs.kvkk },
    { href: NAMAZ_LEGAL.terms, label: s.docs.terms },
    { href: NAMAZ_LEGAL.accountDeletion, label: s.docs.accountDeletion },
  ];

  return (
    <PageTransition>
      <article data-theme="namaz" data-calm="true">
        <CaseCover
          title={BRAND.products.namaz}
          meta={[
            { label: labels.audience, value: facts.audience },
            { label: labels.platform, value: facts.platform },
            { label: labels.status, value: facts.status },
          ]}
          portrait={<NamazArt copy={mock} layout="portrait" cover />}
          landscape={<NamazArt copy={mock} layout="landscape" cover />}
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
          scenes={namazScenes(mock)}
          tone="namaz"
        />

        <Marquee words={t.marquee} />

        <Bento label={c.featuresLabel}>
          <BentoCard
            tone="namaz"
            bleed
            className="md:col-span-2 lg:col-span-4 lg:min-h-[34rem]"
            title={b.stats.title}
            body={b.stats.body}
            visual={
              <Fan
                className="absolute inset-x-0 top-8 [--fan-x:42%] [--fan-y:1.25rem] group-hover:[--fan-x:50%] sm:top-10 sm:[--fan-x:62%] sm:group-hover:[--fan-x:70%]"
                itemClassName="w-[15rem] sm:w-[17rem]"
                items={[
                  <NamazWeek key="week" copy={n} />,
                  <NamazMonth key="month" copy={n} className="shadow-2xl" />,
                  <NamazYear key="year" copy={n} />,
                ]}
              />
            }
          />
          <BentoCard
            tone="namaz"
            className="lg:col-span-2"
            title={b.groups.title}
            body={b.groups.body}
            visual={<NamazGroup copy={n} />}
          />
          <BentoCard
            tone="namaz"
            className="lg:col-span-3"
            title={b.five.title}
            body={b.five.body}
            visual={<NamazFive copy={n} />}
          />
          <BentoCard
            tone="namaz"
            side
            className="md:col-span-2 lg:col-span-3"
            title={b.privacy.title}
            body={b.privacy.body}
            visual={<NamazDelete copy={n} className="w-[19rem]" />}
          />
        </Bento>

        <Moments
          label={c.momentsLabel}
          photos={[IMG.photos.namaz1, IMG.photos.namaz3]}
          chip={
            <span className="flex w-max items-center gap-2 rounded-full border border-white/20 bg-[#06281e]/70 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md">
              <Moon className="size-4 text-[#8fe3c4]" aria-hidden="true" />
              {n.prayers[4]}
              <span className="tabular-nums text-white/70">{n.times[4]}</span>
            </span>
          }
        />

        <CaseStart
          tone="namaz"
          label={c.startLabel}
          statement={`${BRAND.products.namaz} ${t.closing.title}`}
          actions={
            <StoreBadges
              items={storeBadges(dict, "namaz")}
              newTabLabel={newTab}
              size="fluid"
              variant="glass"
            />
          }
          art={
            <>
              <div className="art-float-slow absolute left-[8%] top-8 w-[min(19rem,80%)] -rotate-3 lg:top-[20%]">
                <NamazToday copy={n} done={[true, true, true, true, true]} className="shadow-2xl" />
              </div>
              {/* Solid tint: it may sit over the white card. Phones: hidden
                  (no room beside the card). */}
              <div className="art-float absolute right-[4%] top-4 flex max-w-[15rem] rotate-3 items-center gap-3 rounded-2xl border border-white/15 bg-[#06281e]/90 px-5 py-4 shadow-2xl max-sm:hidden sm:top-12 lg:top-[6%]">
                <Flame className="size-8 shrink-0 text-[#8fe3c4] drop-shadow-[0_0_12px_#2bc78f]" />
                <span className="text-4xl font-light tabular-nums tracking-[-0.04em]">
                  {n.streakCount}
                </span>
                <span className="text-xs leading-snug text-white/75">{n.streak}</span>
              </div>
            </>
          }
        />

        {/* Privacy & documents */}
        <section className={cn(EDGE, "border-t border-border py-[clamp(4rem,9vw,8rem)]")}>
          <Reveal className="grid gap-8 md:grid-cols-12">
            <h2 className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
              {t.privacy.title}
            </h2>
            <div className="md:col-span-9 lg:col-span-7">
              <p className="max-w-[60ch] leading-relaxed text-fg-muted">
                {t.privacy.body}
              </p>
              <h3 className="mt-10 text-sm font-medium">{s.docsTitle}</h3>
              {locale === "en" ? (
                <p className="mt-1 text-xs text-fg-soft">{s.docsNote}</p>
              ) : null}
              <ul className="mt-3 border-t border-border">
                {docs.map((doc) => (
                  <li key={doc.href} className="border-b border-border">
                    <Link
                      href={doc.href}
                      className="group flex min-h-14 items-center justify-between gap-4 py-3"
                    >
                      <span className="link-underline">{doc.label}</span>
                      <ArrowRight
                        className="size-4 shrink-0 text-fg-soft transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <NextProduct label={c.nextLabel} item={items[0]} />
      </article>
    </PageTransition>
  );
}
