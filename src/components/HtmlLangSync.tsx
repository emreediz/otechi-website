"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

/**
 * Keeps <html lang> in sync with the active locale on the client.
 *
 * The static root layout renders lang="tr" by default (App Router only lets the
 * root layout own the <html> element). On /en/* pages this corrects it after
 * hydration. hreflang alternates in each page's metadata cover SEO.
 */
export function HtmlLangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
