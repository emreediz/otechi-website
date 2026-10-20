import Image from "next/image";
import { Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { productCapsules } from "@/lib/productCapsules";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { Closing } from "@/components/content/Closing";
import { OtherProducts } from "@/components/showcase/OtherProducts";

/**
 * About: centred intro, a statement with the Otechi mark, the approach as
 * cards on the grey section, the three products, values and the closing.
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
  const capsules = productCapsules(locale);
  const contactHref = localizedPath("contact", locale);

  return (
    <PageTransition>
      <section className="pb-16 pt-16 text-center sm:pt-24">
        <Container>
          <Kicker className="hero-rise hero-rise-1">{t.title}</Kicker>
          <h1 className="mt-6 text-display-l">
            {t.titleLines.map((line) => (
              <span key={line} className="hero-line">
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero-rise hero-rise-3 mx-auto mt-6 max-w-[40ch] text-lead text-fg-muted">
            {t.lead}
          </p>
        </Container>
      </section>

      {/* Statement + the rest of the story */}
      <section className="pb-[clamp(5rem,11vw,9.5rem)] pt-8">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <Image
              src="/images/brand/otechi-mark.svg"
              alt=""
              width={56}
              height={56}
              className="mx-auto size-12 sm:size-14"
            />
            <p className="mt-6 text-statement text-balance">{first}</p>
          </Reveal>
          <Reveal className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-10">
            {rest.map((p) => (
              <p key={p} className="leading-relaxed text-fg-soft">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section className="section-surface py-[clamp(5rem,11vw,9.5rem)]">
        <Container>
          <Reveal>
            <SectionHead
              kicker={dict.home.approach.kicker}
              title={t.approachTitle}
            />
          </Reveal>
          <Reveal
            variant="trigger"
            className="mt-[clamp(3rem,6vw,5rem)] grid gap-4 md:grid-cols-3 lg:gap-5"
          >
            {t.approach.map((item, i) => (
              <article key={item.title} className="card stagger-item">
                <span className="text-sm font-semibold tabular-nums text-accent-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-title">{item.title}</h3>
                <p className="mt-2.5 text-fg-soft">{item.body}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* What we build */}
      <section className="py-[clamp(5rem,11vw,9.5rem)]">
        <Container>
          <Reveal>
            <SectionHead
              kicker={t.work.kicker}
              title={t.work.title}
              align="start"
            />
            <OtherProducts
              items={capsules}
              dict={dict}
              className="mt-10 lg:grid-cols-3"
            />
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-[clamp(5rem,11vw,9.5rem)]">
        <Container className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-heading">{t.valuesTitle}</h2>
          </Reveal>
          <Reveal variant="trigger" className="grid gap-3">
            {t.values.map((value) => (
              <p
                key={value}
                className="card stagger-item flex items-center gap-4 !py-5 text-lg font-semibold"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-ink">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {value}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <Closing
        lines={[dict.common.cta.kicker, dict.common.cta.title]}
        capsules={capsules}
        capsulesLabel={dict.home.hero.capsulesLabel}
        action={
          <Button href={contactHref} size="lg">
            {dict.nav.cta}
          </Button>
        }
      />
    </PageTransition>
  );
}
