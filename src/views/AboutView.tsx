import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { workRows } from "@/lib/showcaseData";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { PageIntro } from "@/components/content/PageIntro";
import { NumberedList } from "@/components/content/NumberedList";
import { ClosingCta } from "@/components/content/ClosingCta";
import { IndexList } from "@/components/showcase/IndexList";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollFillText } from "@/components/showcase/ScrollFillText";

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
      <PageIntro kicker={t.title} title={t.lead} />

      {/* Narrative: first paragraph fills in on scroll, the rest beside it */}
      <section className="border-t border-fg/10 py-24 sm:py-32">
        <Container>
          <Reveal>
            <Kicker>{dict.home.hero.kicker}</Kicker>
          </Reveal>
          <ScrollFillText
            text={first}
            className="mt-8 max-w-5xl text-statement"
          />
          <Reveal className="mt-16 grid gap-8 sm:mt-24 md:grid-cols-2 lg:grid-cols-12">
            {rest.map((p, i) => (
              <p
                key={p}
                className={
                  i === 0
                    ? "leading-relaxed text-fg-muted lg:col-span-5"
                    : "leading-relaxed text-fg-muted lg:col-span-5 lg:col-start-7"
                }
              >
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Approach (dark) */}
      <section data-surface="dark" className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <Kicker>{dict.home.approach.kicker}</Kicker>
            <h2 className="mt-8 max-w-4xl text-display-m">{t.approachTitle}</h2>
          </Reveal>
          <Reveal variant="trigger" className="mt-16 sm:mt-20">
            <NumberedList items={t.approach} big />
          </Reveal>
        </Container>
      </section>

      {/* What we build */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHead kicker={t.work.kicker} title={t.work.title} />
          </Reveal>
          <Reveal className="mt-10 sm:mt-14">
            <IndexList rows={workRows(dict, locale)} />
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-fg/10 py-24 sm:py-32">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="text-heading">{t.valuesTitle}</h2>
          </Reveal>
          <Reveal variant="trigger" className="lg:col-span-8">
            <NumberedList
              items={t.values.map((title) => ({ title }))}
              columns={1}
              big
            />
          </Reveal>
        </Container>
      </section>

      <ClosingCta
        kicker={dict.common.cta.kicker}
        title={dict.common.cta.title}
        href={localizedPath("contact", locale)}
      />
    </PageTransition>
  );
}
