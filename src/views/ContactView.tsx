import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { productCapsules } from "@/lib/productCapsules";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { PageTransition } from "@/components/motion/PageTransition";
import { Capsule } from "@/components/visual/Capsule";

/**
 * Contact: centred headline, phone and e-mail as two large cards (load-time
 * entrance only — the details never wait for JS), then the products as
 * capsule links.
 */
export function ContactView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.contact;
  const rows = [
    { label: t.phoneLabel, value: t.phone, href: t.phoneHref, Icon: Phone },
    { label: t.emailLabel, value: t.email, href: t.emailHref, Icon: Mail },
  ];

  return (
    <PageTransition>
      <section className="pb-[clamp(5rem,11vw,9.5rem)] pt-16 sm:pt-24">
        <Container className="text-center">
          <Kicker className="hero-rise hero-rise-1">{t.title}</Kicker>
          <h1 className="mt-6 text-display-xl">
            <span className="hero-line">
              <span>{t.headline}</span>
            </span>
          </h1>
          <p className="hero-rise hero-rise-3 mx-auto mt-6 max-w-[40ch] text-lead text-fg-muted">
            {t.body}
          </p>
        </Container>

        <Container className="mt-14 sm:mt-20">
          <ul className="hero-rise hero-rise-4 mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:gap-5">
            {rows.map(({ label, value, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="card group flex h-full flex-col gap-10 sm:!p-10"
                >
                  <span className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-accent-ink">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="size-6 transition-transform duration-300 ease-out-expo group-hover:rotate-45 group-focus-visible:rotate-45"
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block text-sm text-fg-soft">{label}</span>
                    <span className="mt-1 block break-words text-title-l">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>

        <Container className="mt-16 text-center sm:mt-24">
          <p className="text-fg-soft">{t.secondary}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {productCapsules(locale).map((p) => (
              <li key={p.key}>
                <Link href={p.href} className="capsule-link">
                  <Capsule color={p.color} icon={p.icon} className="[--h:3.25rem]">
                    {p.label}
                  </Capsule>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageTransition>
  );
}
