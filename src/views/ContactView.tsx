import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { MaskedTitle } from "@/components/ui/MaskedTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ContactRows } from "@/components/content/ContactRows";

export function ContactView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.contact;

  return (
    // data-page lets the footer drop its (duplicate) contact block here.
    <section data-page="contact">
      <Container className="pb-24 pt-14 sm:pb-32 sm:pt-24 lg:pt-32">
        <Kicker className="hero-rise hero-rise-1">{t.title}</Kicker>
        <h1 className="mt-8 text-display-l sm:mt-10">
          <MaskedTitle text={t.headline} />
        </h1>

        <div className="mt-12 grid gap-12 border-t border-fg/15 pt-8 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <p className="hero-rise hero-rise-3 max-w-md text-lead text-fg-muted lg:col-span-5">
            {t.body}
          </p>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <ContactRows
                size="l"
                items={[
                  { label: t.phoneLabel, value: t.phone, href: t.phoneHref },
                  { label: t.emailLabel, value: t.email, href: t.emailHref },
                ]}
              />
            </Reveal>
            <Reveal className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
              <p className="text-sm text-fg-muted">{t.secondary}</p>
              <Button
                href={localizedPath("products", locale)}
                variant="secondary"
              >
                {t.cta}
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
