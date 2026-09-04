import { getDictionary } from "@/i18n/getDictionary";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only rounded-md bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        {dict.nav.skipToContent}
      </a>
      <Navbar locale="tr" dict={dict.nav} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale="tr" footer={dict.footer} nav={dict.nav} />
    </div>
  );
}
