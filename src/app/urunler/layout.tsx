import { getDictionary } from "@/i18n/getDictionary";
import { productLinks } from "@/lib/siteNav";
import { showcaseItems } from "@/lib/showcase";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieNotice } from "@/components/layout/CookieNotice";

/**
 * Layout for fixed, non-localized routes under /urunler/* (currently the
 * Namaz Motivasyonu contract pages). These live outside the [lang] tree —
 * no /tr or /en prefix — and are Turkish-only, so the locale is pinned.
 * Uses the exact same Navbar / Footer as the rest of the site.
 */
export default async function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("tr");
  const products = productLinks("tr");

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Client navigations from /en/* would otherwise keep lang="en". */}
      <HtmlLangSync locale="tr" />
      <a
        href="#main"
        className="sr-only rounded-md bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        {dict.nav.skipToContent}
      </a>
      <Navbar locale={"tr"} dict={dict} items={showcaseItems("tr")} />
      {/* The bar is fixed and transparent; each page sets its own top space. */}
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer locale="tr" dict={dict} products={products} />
      <CookieNotice locale="tr" dict={dict} />
    </div>
  );
}
