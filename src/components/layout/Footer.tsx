import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { storeBadges } from "@/lib/stores";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { StoreBadges } from "@/components/content/StoreBadges";

/**
 * Site footer: brand column (tagline, e-mail, app store links) and four
 * link columns, then a hairline and the copyright row.
 */
export function Footer({
  locale,
  dict,
  products,
}: {
  locale: Locale;
  dict: Dictionary;
  products: { href: string; label: string }[];
}) {
  const { footer, nav, contact } = dict;
  const namazDocs = dict.showcase.namaz;
  const link = (key: RouteKey) => localizedPath(key, locale);

  const columns: {
    title: string;
    note?: string;
    links: { label: string; href: string }[];
  }[] = [
    { title: footer.productsTitle, links: products },
    {
      title: footer.companyTitle,
      links: [
        { label: nav.about, href: link("about") },
        { label: nav.contact, href: link("contact") },
      ],
    },
    {
      title: footer.legalTitle,
      links: [
        { label: footer.privacy, href: link("privacy") },
        { label: footer.terms, href: link("terms") },
        { label: footer.kvkk, href: link("kvkk") },
      ],
    },
    {
      // The Namaz Motivasyonu documents are Turkish-only pages.
      title: `${BRAND.products.namaz} ${footer.docsLabel}`,
      note: locale === "en" ? namazDocs.docsNote : undefined,
      links: [
        { label: namazDocs.docs.privacy, href: NAMAZ_LEGAL.privacy },
        { label: namazDocs.docs.kvkk, href: NAMAZ_LEGAL.kvkk },
        { label: namazDocs.docs.terms, href: NAMAZ_LEGAL.terms },
        {
          label: namazDocs.docs.accountDeletion,
          href: NAMAZ_LEGAL.accountDeletion,
        },
      ],
    },
  ];

  const apps = [
    { name: BRAND.products.ole, items: storeBadges(dict, "ole") },
    { name: BRAND.products.namaz, items: storeBadges(dict, "namaz") },
  ];

  return (
    <footer className="site-footer pb-10 pt-14 sm:pt-[5.5rem] print:hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-10">
          <div className="max-w-sm">
            <Link
              href={link("home")}
              aria-label={`${BRAND.company} – ${nav.home}`}
              className="inline-flex"
            >
              <Logo className="h-7" />
            </Link>
            <p className="mt-4 max-w-[28ch] text-sm text-fg-soft">
              {footer.tagline}
            </p>
            <a
              href={contact.emailHref}
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-brand"
            >
              <Mail className="size-4 text-brand" aria-hidden="true" />
              {contact.email}
            </a>

            <h2 className="mt-6 text-sm font-semibold">{footer.appsTitle}</h2>
            <div className="mt-3 grid gap-3">
              {apps.map((app) => (
                <div key={app.name}>
                  <p className="mb-1.5 text-xs font-medium text-fg-soft">
                    {app.name}
                  </p>
                  <StoreBadges
                    size="sm"
                    items={app.items}
                    newTabLabel={dict.common.newTab}
                    className="gap-2"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-4 lg:grid-cols-subgrid">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-sm font-semibold">{col.title}</h2>
                {col.note ? (
                  <p className="mt-1 text-xs text-fg-soft">{col.note}</p>
                ) : null}
                <ul className="mt-3 grid">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="inline-flex min-h-10 items-center text-sm text-fg-soft transition-colors hover:text-fg"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-fg-soft">
          <p>{footer.rights}</p>
          {/* Moves scroll and keyboard focus back to the start of the page. */}
          <a
            href="#main"
            className="inline-flex min-h-11 items-center gap-1.5 font-medium text-fg-soft transition-colors hover:text-fg"
          >
            {footer.backToTop}
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
