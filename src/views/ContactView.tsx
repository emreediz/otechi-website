import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { showcaseItems } from "@/lib/showcase";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { FaqTabs } from "@/components/content/FaqTabs";
import { EDGE } from "@/components/case/Case";

/**
 * Contact: large title, e-mail and phone as very large links (load-time
 * entrance only — the details never wait for JS), the FAQ and the products.
 */
export function ContactView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.contact;
  const faq = dict.home.faq;
  const contactHref = localizedPath("contact", locale);
  const rows = [
    { label: t.emailLabel, value: t.email, href: t.emailHref },
    { label: t.phoneLabel, value: t.phone, href: t.phoneHref },
  ];

  return (
    <PageTransition>
      <header className={cn(EDGE, "pb-10 pt-[clamp(8rem,16vw,13rem)]")}>
        <h1 className="text-display-xl">
          <span className="hero-line">
            <span>{t.headline}</span>
          </span>
        </h1>
        <p className="hero-rise hero-rise-3 mt-8 max-w-[40ch] text-lead text-fg-soft">
          {t.body}
        </p>
      </header>

      <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)] pt-6")}>
        <ul className="hero-rise hero-rise-4 border-t border-border">
          {rows.map((row) => (
            <li key={row.href} className="border-b border-border">
              <a
                href={row.href}
                className="group flex items-center justify-between gap-6 py-6 sm:py-8"
              >
                <span className="min-w-0">
                  <span className="block text-sm text-fg-soft">{row.label}</span>
                  <span className="mt-1 block break-words text-display-m">
                    {row.value}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-8 shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-focus-visible:rotate-45"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(EDGE, "grid gap-8 pb-[clamp(5rem,11vw,10rem)] md:grid-cols-12")}>
        <Reveal className="md:col-span-3 lg:col-span-2 lg:col-start-3">
          <h2 className="text-sm text-fg-soft">{faq.kicker}</h2>
        </Reveal>
        <Reveal className="md:col-span-9 lg:col-span-7">
          <FaqTabs
            tabs={faq.tabs.map((tab) => ({
              label: tab.label,
              items: tab.items.map((item) => ({
                q: item.q,
                a: item.a,
                link:
                  "contactLink" in item && item.contactLink
                    ? { href: contactHref, label: item.contactLink }
                    : undefined,
              })),
            }))}
          />
        </Reveal>
      </section>

      <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)]")}>
        <Reveal>
          <h2 className="text-sm text-fg-soft">{t.secondary}</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {showcaseItems(locale).map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="pill pill-lg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </PageTransition>
  );
}
