import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";
import { allRouteKeys, localizedPath } from "@/i18n/routes";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedEntries = allRouteKeys.flatMap((key) =>
    locales.map((locale) => ({
      url: site.url + localizedPath(key, locale),
      lastModified: now,
      alternates: {
        languages: {
          tr: site.url + localizedPath(key, "tr"),
          en: site.url + localizedPath(key, "en"),
        },
      },
    })),
  );

  // Namaz Motivasyonu contract pages: fixed, Turkish-only URLs (no /tr or /en,
  // no language alternates).
  const contractEntries = Object.values(NAMAZ_LEGAL).map((path) => ({
    url: site.url + path,
    lastModified: now,
  }));

  return [...localizedEntries, ...contractEntries];
}
