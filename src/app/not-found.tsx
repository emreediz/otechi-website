import type { Metadata } from "next";
import Link from "next/link";
import { tr } from "@/i18n/dictionaries/tr";
import { en } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "404 — Otechi",
  robots: { index: false },
};

// Route keys that also have a nav label.
const PAGES = [
  "home",
  "products",
  "about",
  "contact",
] as const satisfies readonly RouteKey[];
const LISTS: { locale: Locale; dict: typeof tr }[] = [
  { locale: "tr", dict: tr },
  { locale: "en", dict: en },
];

/**
 * Root 404 (exported as out/404.html, which Cloudflare Pages serves for
 * unknown paths). It sits outside the locale layouts, so it speaks both
 * languages and links to the main pages of each.
 */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-5 sm:px-8">
      <div className="flex h-16 items-center">
        <Link
          href={localizedPath("home", "tr")}
          aria-label="Otechi"
          className="py-2"
        >
          <Logo className="h-6 sm:h-7" eager />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-center py-16">
        <p aria-hidden="true" className="text-display-xl text-accent">
          404
        </p>
        <h1 className="mt-6 max-w-3xl text-heading text-balance">
          {tr.notFound.title}{" "}
          <span lang="en" className="text-fg-muted">
            {en.notFound.title}
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-fg-muted">{tr.notFound.body}</p>
        <p lang="en" className="mt-1 max-w-xl text-fg-muted">
          {en.notFound.body}
        </p>

        <div className="mt-14 grid max-w-3xl gap-10 sm:grid-cols-2">
          {LISTS.map(({ locale, dict }) => (
            <nav key={locale} lang={locale} aria-label={dict.notFound.pages}>
              <h2 className="text-sm font-medium text-fg-muted">
                {dict.notFound.pages}
              </h2>
              <ul className="mt-3 border-t border-fg/15">
                {PAGES.map((key) => (
                  <li key={key} className="border-b border-fg/15">
                    <Link
                      href={localizedPath(key, locale)}
                      className="flex min-h-12 items-center text-lg font-medium"
                    >
                      <span className="link-underline">{dict.nav[key]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </main>
  );
}
