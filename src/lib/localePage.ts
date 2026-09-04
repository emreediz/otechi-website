import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";

/** Validate the [lang] route param and narrow it to Locale. */
export async function resolveLocale(
  params: Promise<{ lang: string }>,
): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

// generateStaticParams helpers for locale-specific route folders.
export const trParam = () => [{ lang: "tr" }];
export const enParam = () => [{ lang: "en" }];
export const bothParams = () => [{ lang: "tr" }, { lang: "en" }];
