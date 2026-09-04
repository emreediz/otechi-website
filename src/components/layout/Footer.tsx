import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { Logo } from "@/components/Logo";

export function Footer({
  locale,
  footer,
  nav,
}: {
  locale: Locale;
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
}) {
  const link = (key: RouteKey) => localizedPath(key, locale);

  const columns: { title: string; links: { label: string; href: string }[] }[] =
    [
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
    ];

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href={link("home")}
              aria-label={BRAND.company}
              className="inline-flex py-1"
            >
              <Logo className="h-6" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-fg-muted">
              {footer.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold text-fg">{col.title}</h2>
              <ul className="mt-3 flex flex-col gap-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-11 items-center text-sm text-fg-muted hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-sm text-fg-muted">
          {footer.rights}
        </p>
      </div>
    </footer>
  );
}
