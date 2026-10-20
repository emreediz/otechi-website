import type { Dictionary } from "@/i18n/getDictionary";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { PageTransition } from "@/components/motion/PageTransition";

type LegalKind = "privacy" | "terms" | "kvkk";

/**
 * Company legal pages (drafts). Text is rendered verbatim from the
 * dictionary; section numbers are CSS counters, so they never enter the text.
 */
export function LegalView({
  dict,
  kind,
}: {
  dict: Dictionary;
  kind: LegalKind;
}) {
  const t = dict.legal[kind];

  return (
    <PageTransition>
      <LegalHeader
        eyebrow={<Kicker>{dict.footer.legalTitle}</Kicker>}
        title={t.title}
        meta={`${dict.legal.lastUpdatedLabel}: ${dict.legal.lastUpdatedValue}`}
      />
      <Container className="py-12 sm:py-20">
        <div data-legal-part className="max-w-[68ch]">
          <p className="border-y border-fg/15 py-4 text-sm text-fg-muted">
            {dict.common.draftNotice}
          </p>

          <p className="mt-10 text-lead">{t.intro}</p>

          <ol className="mt-12 border-t border-fg/15 [counter-reset:section]">
            {t.sections.map((section) => (
              <li
                key={section.heading}
                className="grid grid-cols-[3rem_1fr] gap-x-3 border-b border-fg/15 py-6 [counter-increment:section] before:pt-0.5 before:text-sm before:tabular-nums before:text-fg-muted before:content-[counter(section,decimal-leading-zero)]"
              >
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="mt-2 leading-[1.75] text-fg-muted">
                    {section.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </PageTransition>
  );
}
