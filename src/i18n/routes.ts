import type { Locale } from "./config";
import { IZ_LEGAL, NAMAZ_LEGAL } from "@/config/legalRoutes";

/**
 * Every page in the site, keyed by a stable id. The URL path segments are
 * localized (TR uses "urunler", EN uses "products", etc.), so all internal
 * links must go through `localizedPath()` rather than being hard-coded.
 */
export type RouteKey =
  | "home"
  | "products"
  | "productOle"
  | "productPanel"
  | "productNamaz"
  | "productIz"
  | "about"
  | "contact"
  | "privacy"
  | "terms"
  | "kvkk";

const paths: Record<RouteKey, Record<Locale, string>> = {
  home: { tr: "/tr", en: "/en" },
  products: { tr: "/tr/urunler", en: "/en/products" },
  productOle: { tr: "/tr/urunler/ole", en: "/en/products/ole" },
  productPanel: {
    tr: "/tr/urunler/ole-panel",
    en: "/en/products/ole-panel",
  },
  productNamaz: {
    tr: "/tr/urunler/namaz-motivasyonu",
    en: "/en/products/namaz-motivasyonu",
  },
  productIz: { tr: "/tr/urunler/iz", en: "/en/products/iz" },
  about: { tr: "/tr/hakkimizda", en: "/en/about" },
  contact: { tr: "/tr/iletisim", en: "/en/contact" },
  privacy: { tr: "/tr/gizlilik", en: "/en/privacy" },
  terms: { tr: "/tr/kullanim-sartlari", en: "/en/terms" },
  kvkk: { tr: "/tr/kvkk", en: "/en/kvkk" },
};

export const allRouteKeys = Object.keys(paths) as RouteKey[];

export function localizedPath(key: RouteKey, locale: Locale): string {
  return paths[key][locale];
}

/** Strip a single trailing slash (but keep "/"). */
function normalize(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/"))
    return pathname.slice(0, -1);
  return pathname;
}

/** Reverse lookup: which page does this pathname belong to? */
export function routeKeyFromPath(pathname: string): RouteKey | null {
  const p = normalize(pathname);
  for (const key of allRouteKeys) {
    if (paths[key].tr === p || paths[key].en === p) return key;
  }
  return null;
}

export function localeFromPath(pathname: string): Locale {
  return normalize(pathname).startsWith("/en") ? "en" : "tr";
}

/**
 * Given the current pathname, return the equivalent page in `target` locale.
 * The Turkish-only Namaz Motivasyonu and İz documents stay put for TR and go
 * to their product page for EN. Anything else unknown falls back to the home page.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const p = normalize(pathname);
  const key = routeKeyFromPath(p);
  if (key) return paths[key][target];
  if ((Object.values(NAMAZ_LEGAL) as string[]).includes(p)) {
    return target === "tr" ? p : paths.productNamaz.en;
  }
  if ((Object.values(IZ_LEGAL) as string[]).includes(p)) {
    return target === "tr" ? p : paths.productIz.en;
  }
  return paths.home[target];
}
