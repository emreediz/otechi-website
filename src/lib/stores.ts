import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { OLE_LINKS } from "@/config/ole";
import { NAMAZ_LINKS } from "@/config/namaz";
import type { StoreBadgeItem } from "@/components/content/StoreBadges";

const LINKS = { ole: OLE_LINKS, namaz: NAMAZ_LINKS } as const;

/** App Store + Google Play badges for one of the mobile apps. */
export function storeBadges(
  dict: Dictionary,
  app: keyof typeof LINKS,
): StoreBadgeItem[] {
  const s = dict.common.stores;
  const name = BRAND.products[app];
  return [
    {
      store: "appStore",
      href: LINKS[app].appStore,
      lines: [s.appStore.lines[0], s.appStore.lines[1]],
      label: s.appStore.label.replace("{app}", name),
    },
    {
      store: "googlePlay",
      href: LINKS[app].googlePlay,
      lines: [s.googlePlay.lines[0], s.googlePlay.lines[1]],
      label: s.googlePlay.label.replace("{app}", name),
    },
  ];
}
