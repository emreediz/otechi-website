import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { GLASS, showcaseItems } from "@/lib/showcase";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import {
  CaseFeatures,
  CaseMedia,
  CaseText,
  EDGE,
  ProductRows,
} from "@/components/case/Case";

/**
 * About: large two-line title, the glass logo as a full-bleed moment, the
 * story, how we work, values, the products and a call to talk.
 */
export function AboutView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.about;
  const [first, ...rest] = t.paragraphs;

  return (
    <PageTransition>
      <header className={cn(EDGE, "pb-14 pt-[clamp(8rem,16vw,13rem)]")}>
        <h1 className="text-display-xl">
          {t.titleLines.map((line) => (
            <span key={line} className="hero-line">
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-rise hero-rise-3 mt-8 max-w-[40ch] text-lead text-fg-soft">
          {t.lead}
        </p>
      </header>

      <CaseMedia className="bg-black" >
        <div
          data-surface="dark"
          className="absolute inset-0 grid place-items-center overflow-hidden bg-black"
        >
          <Image
            src={GLASS.src}
            alt=""
            width={GLASS.w}
            height={GLASS.h}
            sizes="80vw"
            className="glass-spin w-[min(120svh,90vw)] max-w-none brightness-90"
          />
        </div>
      </CaseMedia>

      <CaseText label={t.title}>
        <p className="text-statement text-balance">{first}</p>
        {rest.map((p) => (
          <p key={p} className="mt-6 max-w-[56ch] leading-relaxed text-fg-soft">
            {p}
          </p>
        ))}
      </CaseText>

      <CaseFeatures label={t.approachTitle} items={t.approach} />

      <section className={cn(EDGE, "grid gap-6 pb-[clamp(5rem,11vw,10rem)] md:grid-cols-12")}>
        <Reveal className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
          <h2>{t.valuesTitle}</h2>
        </Reveal>
        <Reveal variant="trigger" className="md:col-span-9 lg:col-span-7">
          <ul className="border-t border-border">
            {t.values.map((value) => (
              <li
                key={value}
                className="stagger-item border-b border-border py-5 text-heading"
              >
                {value}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)]")}>
        <Reveal>
          <h2 className="mb-8 text-sm text-fg-soft">{t.work.title}</h2>
        </Reveal>
        <Reveal variant="trigger">
          <ProductRows
            items={showcaseItems(locale)}
            tags={dict.home.stage.tags}
          />
        </Reveal>
      </section>

      <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)]")}>
        <Reveal>
          <p className="text-display-l">
            <span className="block">{dict.common.cta.kicker}</span>
            <span className="block text-fg-soft">{dict.common.cta.title}</span>
          </p>
          <Button
            href={localizedPath("contact", locale)}
            size="lg"
            className="mt-10"
          >
            {dict.nav.cta}
          </Button>
        </Reveal>
      </section>
    </PageTransition>
  );
}
