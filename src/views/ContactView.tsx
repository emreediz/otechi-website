import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { PageHero } from "@/components/content/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ComingSoon } from "@/components/ui/ComingSoon";

export function ContactView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.contact;

  return (
    <>
      <PageHero title={t.title} />
      <Section>
        <div className="max-w-xl rounded-2xl border border-border bg-bg p-8">
          <ComingSoon label={dict.common.comingSoon} />
          <p className="mt-4 text-lg leading-relaxed text-fg">{t.body}</p>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
            {t.secondary}
          </p>
          <Button
            href={localizedPath("products", locale)}
            variant="secondary"
            className="mt-6"
          >
            {t.cta}
          </Button>
        </div>
      </Section>
    </>
  );
}
