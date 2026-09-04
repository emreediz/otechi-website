import type { Metadata } from "next";
import { site } from "@/config/site";
import { ogLocale, type Locale } from "@/i18n/config";
import { localizedPath, type RouteKey } from "@/i18n/routes";

export function pageMetadata({
  locale,
  routeKey,
  title,
  description,
}: {
  locale: Locale;
  routeKey: RouteKey;
  title: string;
  description: string;
}): Metadata {
  const path = localizedPath(routeKey, locale);
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        tr: localizedPath(routeKey, "tr"),
        en: localizedPath(routeKey, "en"),
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale[locale],
      url: site.url + path,
      title,
      description,
    },
  };
}
