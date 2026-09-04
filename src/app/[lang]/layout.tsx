import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <HtmlLangSync locale={locale} />
      <a
        href="#main"
        className="sr-only rounded-md bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        {dict.nav.skipToContent}
      </a>
      <Navbar locale={locale} dict={dict.nav} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} footer={dict.footer} nav={dict.nav} />
    </div>
  );
}
