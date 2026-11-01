import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";

/** Product pages, in menu order (mobile menu, footer). */
export function productLinks(locale: Locale) {
  return [
    { href: localizedPath("productOle", locale), label: BRAND.products.ole },
    {
      href: localizedPath("productPanel", locale),
      label: BRAND.products.olePanel,
    },
    {
      href: localizedPath("productNamaz", locale),
      label: BRAND.products.namaz,
    },
    { href: localizedPath("productIz", locale), label: BRAND.products.iz },
  ];
}
