import type { Dictionary } from "@/i18n/getDictionary";
import { PageHero } from "@/components/content/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureGrid } from "@/components/content/FeatureGrid";
import { CheckList } from "@/components/content/CheckList";
import { GeometricBackdrop } from "@/components/visual/GeometricBackdrop";

export function AboutView({ dict }: { dict: Dictionary }) {
  const t = dict.about;

  return (
    <>
      <PageHero
        backdrop="otechi"
        kicker={dict.home.hero.kicker}
        title={t.title}
        subtitle={t.lead}
      />

      <Section>
        <div className="max-w-2xl space-y-5">
          {t.paragraphs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-fg-muted">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden border-y border-border bg-bg-subtle">
        <GeometricBackdrop variant="otechi" />
        <Container className="relative py-16 sm:py-24">
          <Reveal>
            <SectionHeading title={t.approachTitle} />
          </Reveal>
          <FeatureGrid className="mt-10" items={t.approach} />
        </Container>
      </section>

      <Section>
        <div className="max-w-xl">
          <h2 className="font-display text-xl font-bold tracking-tight">
            {t.valuesTitle}
          </h2>
          <CheckList className="mt-5" items={t.values} />
        </div>
      </Section>
    </>
  );
}
