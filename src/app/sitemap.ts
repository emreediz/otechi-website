import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";
import { allRouteKeys, localizedPath } from "@/i18n/routes";
import {
  COOKIE_POLICY_DRAFT,
  IZ_LEGAL,
  IZ_LEGAL_DRAFT,
  NAMAZ_LEGAL,
} from "@/config/legalRoutes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // The Cookie Policy stays out of the sitemap while under review.
  const routeKeys = allRouteKeys.filter(
    (key) => !(key === "cookies" && COOKIE_POLICY_DRAFT),
  );

  const localizedEntries = routeKeys.flatMap((key) =>
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
  // İz documents are listed unless they are in draft (IZ_LEGAL_DRAFT).
  const contractPaths = [
    ...Object.values(NAMAZ_LEGAL),
    ...(IZ_LEGAL_DRAFT ? [] : Object.values(IZ_LEGAL)),
  ];
  const contractEntries = contractPaths.map((path) => ({
    url: site.url + path,
    lastModified: now,
  }));

  return [...localizedEntries, ...contractEntries];
}
