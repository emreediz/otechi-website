import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";

export type ShowcaseKey = "ole" | "panel" | "namaz";

export type ShowcaseImage = { src: string; w: number; h: number };

/** Plain, serialisable product data (safe to pass to client components). */
export type ShowcaseItem = {
  key: ShowcaseKey;
  label: string;
  href: string;
  /** Preview picture (menu panel, product lists). */
  image: ShowcaseImage;
};

/** The Otechi glass logo (default preview, home stage). */
export const GLASS: ShowcaseImage = {
  src: "/images/brand/web/otechi-cam-logo.webp",
  w: 1254,
  h: 1254,
};

/** Ole, Ole Panel and Namaz Motivasyonu, in menu order. */
export function showcaseItems(locale: Locale): ShowcaseItem[] {
  return [
    {
      key: "ole",
      label: BRAND.products.ole,
      href: localizedPath("productOle", locale),
      image: IMG.photos.ole1,
    },
    {
      key: "panel",
      label: BRAND.products.olePanel,
      href: localizedPath("productPanel", locale),
      image: IMG.photos.ole3,
    },
    {
      key: "namaz",
      label: BRAND.products.namaz,
      href: localizedPath("productNamaz", locale),
      image: { src: IMG.namaz.art, w: IMG.namaz.artW, h: IMG.namaz.artH },
    },
  ];
}
