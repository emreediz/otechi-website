import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { PageHero } from "@/components/content/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
          <p className="text-lg leading-relaxed text-fg">{t.body}</p>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm font-medium text-fg-muted">
                {t.phoneLabel}
              </dt>
              <dd className="mt-1">
                <a
                  href={t.phoneHref}
                  className="text-lg font-semibold text-accent underline decoration-1 underline-offset-2 hover:opacity-80"
                >
                  {t.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-fg-muted">
                {t.emailLabel}
              </dt>
              <dd className="mt-1">
                <a
                  href={t.emailHref}
                  className="break-words text-lg font-semibold text-accent underline decoration-1 underline-offset-2 hover:opacity-80"
                >
                  {t.email}
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-fg-muted">
            {t.secondary}
          </p>
          <Button
            href={localizedPath("products", locale)}
            variant="secondary"
            className="mt-4"
          >
            {t.cta}
          </Button>
        </div>
      </Section>
    </>
  );
}
