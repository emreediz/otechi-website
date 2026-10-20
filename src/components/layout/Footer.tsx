import Link from "next/link";
import { ArrowUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { Logo } from "@/components/Logo";
import { Kicker } from "@/components/ui/Kicker";
import { ContactRows } from "@/components/content/ContactRows";

export function Footer({
  locale,
  footer,
  nav,
  contact,
  namazDocs,
}: {
  locale: Locale;
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
  contact: Dictionary["contact"];
  namazDocs: Pick<Dictionary["showcase"]["namaz"], "docs" | "docsNote">;
}) {
  const link = (key: RouteKey) => localizedPath(key, locale);

  const columns: {
    title: string;
    note?: string;
    links: { label: string; href: string }[];
  }[] = [
    {
      title: footer.productsTitle,
      links: [
        { label: BRAND.products.ole, href: link("productOle") },
        { label: BRAND.products.namaz, href: link("productNamaz") },
      ],
    },
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

  return (
    <footer className="border-t border-fg/10 bg-bg print:hidden">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="footer-contact grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Kicker>{footer.contactTitle}</Kicker>
            <p className="mt-5 max-w-md text-statement text-balance">
              {footer.tagline}
            </p>
          </div>
          <ContactRows
            className="lg:col-span-6 lg:col-start-7"
            size="l"
            items={[
              {
                label: contact.phoneLabel,
                value: contact.phone,
                href: contact.phoneHref,
              },
              {
                label: contact.emailLabel,
                value: contact.email,
                href: contact.emailHref,
              },
            ]}
          />
        </div>

        <div className="grid gap-10 border-t border-fg/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold text-fg">{col.title}</h2>
              {col.note ? (
                <p className="mt-1 text-xs text-fg-muted">{col.note}</p>
              ) : null}
              <ul className="mt-3 flex flex-col">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-11 items-center text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      <span className="link-underline">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-fg/10 py-6">
          <div className="flex items-center gap-4">
            <Link
              href={link("home")}
              aria-label={BRAND.company}
              className="inline-flex py-1"
            >
              <Logo className="h-5" />
            </Link>
            <p className="text-sm text-fg-muted">{footer.rights}</p>
          </div>
          {/* "#top" scrolls to the document top (no element uses that id). */}
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            {footer.backToTop}
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
