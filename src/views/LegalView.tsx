import type { Dictionary } from "@/i18n/getDictionary";
import { PageHero } from "@/components/content/PageHero";
import { Section } from "@/components/ui/Section";

type LegalKind = "privacy" | "terms" | "kvkk";

export function LegalView({
  dict,
  kind,
}: {
  dict: Dictionary;
  kind: LegalKind;
}) {
  const t = dict.legal[kind];

  return (
    <>
      <PageHero title={t.title} backdrop="none" />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm text-fg-muted">
            {dict.legal.lastUpdatedLabel}: {dict.legal.lastUpdatedValue}
          </p>

          <div className="mt-6 rounded-lg border border-border bg-bg-subtle p-4 text-sm text-fg-muted">
            {dict.common.draftNotice}
          </div>

          <p className="mt-8 text-base leading-relaxed text-fg-muted">
            {t.intro}
          </p>

          <div className="mt-10 space-y-8">
            {t.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
