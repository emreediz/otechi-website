import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import type { ProductTile } from "@/components/showcase/ProductTiles";
import type { IndexRow } from "@/components/showcase/IndexList";

/** The two interactive product tiles (Home, Products, cross-links). */
export function productTiles(
  dict: Dictionary,
  locale: Locale,
): Record<"ole" | "namaz", ProductTile> {
  const t = dict.home.products;
  return {
    ole: {
      theme: "ole",
      index: "01",
      name: BRAND.products.ole,
      category: t.oleCategory,
      tagline: t.ole.tagline,
      href: localizedPath("productOle", locale),
      art: {
        src: IMG.ole.art,
        alt: dict.showcase.ole.artAlt,
        w: IMG.ole.artW,
        h: IMG.ole.artH,
      },
      screens: [
        { src: IMG.ole.screenHome, w: IMG.ole.screenW, h: IMG.ole.screenH },
        { src: IMG.ole.screenLoyalty, w: IMG.ole.screenW, h: IMG.ole.screenH },
      ],
    },
    namaz: {
      theme: "namaz",
      index: "02",
      name: BRAND.products.namaz,
      category: t.namazCategory,
      tagline: t.namaz.tagline,
      href: localizedPath("productNamaz", locale),
      art: {
        src: IMG.namaz.art,
        alt: dict.showcase.home.namazLogoAlt,
        w: IMG.namaz.artW,
        h: IMG.namaz.artH,
        cover: true,
      },
      screens: [
        {
          src: IMG.namaz.screenToday,
          w: IMG.namaz.screenW,
          h: IMG.namaz.screenH,
        },
        {
          src: IMG.namaz.screenGroup,
          w: IMG.namaz.screenW,
          h: IMG.namaz.screenH,
        },
      ],
    },
  };
}

/** Editorial work index rows (Home, About). */
export function workRows(dict: Dictionary, locale: Locale): IndexRow[] {
  const r = dict.home.work.rows;
  const ole = localizedPath("productOle", locale);
  return [
    {
      id: "ole",
      name: BRAND.products.ole,
      kind: r.ole.kind,
      desc: r.ole.desc,
      href: ole,
      image: IMG.photos.ole1,
    },
    {
      id: "ole-panel",
      name: BRAND.products.ole,
      suffix: r.olePanel.suffix,
      kind: r.olePanel.kind,
      desc: r.olePanel.desc,
      href: ole,
      image: { src: IMG.ole.panel, w: IMG.ole.panelW, h: IMG.ole.panelH },
    },
    {
      id: "namaz",
      name: BRAND.products.namaz,
      kind: r.namaz.kind,
      desc: r.namaz.desc,
      href: localizedPath("productNamaz", locale),
      image: IMG.photos.namaz1,
    },
    {
      id: "next",
      name: r.next.name,
      kind: r.next.kind,
      desc: r.next.desc,
      href: localizedPath("contact", locale),
      image: IMG.photos.ole2,
    },
  ];
}
