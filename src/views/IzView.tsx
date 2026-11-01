import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { IZ_LEGAL, IZ_LEGAL_DRAFT } from "@/config/legalRoutes";
import { cn } from "@/lib/cn";
import { showcaseItems } from "@/lib/showcase";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import {
  Bento,
  BentoCard,
  CaseCover,
  CaseStart,
  CaseText,
  EDGE,
  Marquee,
  ProductRows,
} from "@/components/case/Case";
import { StepStory } from "@/components/case/StepStory";
import { izScenes } from "@/components/case/Scenes";
import {
  IzDevices,
  IzDrawing,
  IzLock,
  IzLogo,
  IzNote,
  IzPhoto,
  IzSignIn,
  IzVoice,
  IzWidgets,
} from "@/components/mock/IzMocks";
import { IzArt } from "@/components/visual/ProductArt";

/** Apple logo for the "coming soon" badge (decorative). */
function AppleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 20" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.2 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.3-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4 1-1.4 1.4-2.7 1.4-2.8 0 0-2.6-1-2.6-4.2zM11.7 3c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z" />
    </svg>
  );
}

/**
 * İz as a case study, in the same layout as the other product pages
 * (`data-theme="iz"`, calmer motion): artwork cover, introduction, "how it
 * works", feature words, highlights, use cases, the closing panel (no store
 * link yet — "coming soon"), privacy and the Turkish-only documents, then
 * the other products.
 */
export function IzView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.iz;
  const b = t.bento;
  const c = dict.case;
  const s = dict.showcase.iz;
  const mock = dict.mock;
  const z = mock.iz;
  const facts = dict.products.facts.iz;
  const labels = dict.products.factLabels;
  const others = showcaseItems(locale).filter((item) => item.key !== "iz");

  const docs = [
    { href: IZ_LEGAL.privacy, label: s.docs.privacy },
    { href: IZ_LEGAL.kvkk, label: s.docs.kvkk },
  ];

  return (
    <PageTransition>
      <article data-theme="iz" data-calm="true">
        <CaseCover
          title={BRAND.products.iz}
          meta={[
            { label: labels.audience, value: facts.audience },
            { label: labels.platform, value: facts.platform },
            { label: labels.status, value: facts.status },
          ]}
          portrait={<IzArt copy={mock} layout="portrait" cover priority />}
          landscape={<IzArt copy={mock} layout="landscape" cover priority />}
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
          scenes={izScenes(mock)}
          tone="iz"
        />

        <Marquee words={t.marquee} />

        <Bento label={c.featuresLabel}>
          <BentoCard
            tone="iz"
            bleed
            className="md:col-span-2 lg:col-span-4 lg:min-h-[30rem]"
            title={b.devices.title}
            body={b.devices.body}
            visual={
              <div className="absolute inset-x-0 bottom-12 flex justify-center px-6 sm:bottom-14">
                <IzDevices copy={z} />
              </div>
            }
          />
          <BentoCard
            tone="iz"
            className="lg:col-span-2"
            title={b.signIn.title}
            body={b.signIn.body}
            visual={<IzSignIn copy={z} />}
          />
          <BentoCard
            tone="iz"
            className="lg:col-span-3"
            title={b.media.title}
            body={b.media.body}
            visual={
              <div className="relative h-[15rem] w-[19rem] max-w-full">
                <IzPhoto copy={z} className="absolute left-0 top-0 -rotate-3" />
                <IzDrawing copy={z} className="absolute bottom-0 right-0 rotate-3" />
              </div>
            }
          />
          <BentoCard
            tone="iz"
            className="lg:col-span-3"
            title={b.voice.title}
            body={b.voice.body}
            visual={<IzVoice copy={z} />}
          />
          <BentoCard
            tone="iz"
            className="lg:col-span-3"
            title={b.widgets.title}
            body={b.widgets.body}
            visual={<IzWidgets copy={z} className="max-w-full" />}
          />
          <BentoCard
            tone="iz"
            className="lg:col-span-3"
            title={b.lock.title}
            body={b.lock.body}
            visual={<IzLock copy={z} />}
          />
        </Bento>

        {/* Use cases */}
        <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)]")}>
          <Reveal className="grid gap-8 md:grid-cols-12">
            <h2 className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
              {t.useCases.label}
            </h2>
            <div className="md:col-span-9 lg:col-span-7">
              <ol className="grid border-t border-border sm:grid-cols-2 sm:gap-x-8">
                {t.useCases.items.map((item, i) => (
                  <li key={item.title} className="border-b border-border py-6">
                    <p className="text-sm tabular-nums text-accent-ink">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-title">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-fg-soft">{item.body}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-[52ch] text-fg-soft">
                <span className="font-medium text-fg">{t.languages.label}: </span>
                {t.languages.body}
              </p>
            </div>
          </Reveal>
        </section>

        <CaseStart
          tone="iz"
          label={c.startLabel}
          statement={`${BRAND.products.iz} ${t.closing.title}`}
          actions={
            // No store listing yet: a status badge, not a link.
            <p className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-5 py-3 backdrop-blur-md">
              <AppleMark className="h-6 w-auto shrink-0" />
              <span className="grid leading-tight">
                <span className="text-xs text-white/70">{t.closing.soonNote}</span>
                <span className="font-semibold">{t.closing.soon}</span>
              </span>
            </p>
          }
          art={
            <>
              <div className="art-float-slow absolute left-[8%] top-8 w-[min(19rem,80%)] -rotate-3 lg:top-[18%]">
                <IzNote copy={z} className="shadow-2xl" />
              </div>
              <div className="art-float absolute right-[6%] top-4 w-24 rotate-6 max-sm:hidden sm:top-10 sm:w-28 lg:top-[8%]">
                <IzLogo />
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
              {IZ_LEGAL_DRAFT ? (
                <p className="mt-1 text-xs text-fg-soft">{s.draftNote}</p>
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

        {/* The other products */}
        <section className={cn(EDGE, "border-t border-border pb-20 pt-10")}>
          <Reveal>
            <h2 className="mb-6 text-sm text-fg-soft">{dict.showcase.otherProduct}</h2>
          </Reveal>
          <Reveal variant="trigger">
            {/* No other products' pictures on the İz page. */}
            <ProductRows items={others} tags={dict.home.stage.tags} previews={false} />
          </Reveal>
        </section>
      </article>
    </PageTransition>
  );
}
