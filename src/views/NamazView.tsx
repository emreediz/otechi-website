import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  CaseCover,
  CaseFeatures,
  CaseText,
  CaseTiles,
  EDGE,
  MockStage,
  NextProduct,
} from "@/components/case/Case";
import {
  NamazGroup,
  NamazToday,
  NamazWeek,
} from "@/components/mock/NamazMocks";
import { NamazArt } from "@/components/visual/ProductArt";

/**
 * Namaz Motivasyonu as a case study, calmer motion (`data-calm`): a
 * full-screen cover (night sky, today's intention, the ring of the five
 * prayers) with the name and facts, introduction, app mock-ups and photos,
 * highlights, store badges, privacy and the Turkish-only documents, then
 * the next product.
 */
export function NamazView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.namaz;
  const c = dict.case;
  const s = dict.showcase.namaz;
  const mock = dict.mock;
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

        <CaseTiles
          tiles={[
            <MockStage key="today" tone="namaz">
              <NamazToday
                copy={mock.namaz}
                done={[true, true, true, false, false]}
              />
            </MockStage>,
            <Image
              key="photo"
              src={IMG.photos.namaz3.src}
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
            <MockStage key="week" tone="namaz">
              <NamazWeek copy={mock.namaz} />
            </MockStage>,
            <MockStage key="group" tone="namaz">
              <NamazGroup copy={mock.namaz} />
            </MockStage>,
          ]}
        />

        <CaseFeatures label={c.featuresLabel} items={t.features.beats} />

        <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)]")}>
          <Reveal className="grid gap-8 md:grid-cols-12">
            <h2 className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
              {c.startLabel}
            </h2>
            <div className="md:col-span-9 lg:col-span-7">
              <p className="text-statement text-balance">
                {BRAND.products.namaz} {t.closing.title}
              </p>
              <StoreBadges
                items={storeBadges(dict, "namaz")}
                newTabLabel={newTab}
                className="mt-8"
              />
            </div>
          </Reveal>
        </section>

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
