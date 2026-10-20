import type { ReactNode } from "react";
import { LayoutDashboard, MoonStar, Sparkle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import type { CapsuleColor } from "@/components/visual/Capsule";

export type ProductKey = "ole" | "panel" | "namaz";

export type ProductCapsule = {
  key: ProductKey;
  color: CapsuleColor;
  label: string;
  href: string;
  icon: ReactNode;
};

/**
 * One glass capsule per product: Ole (orange), Ole Panel (navy),
 * Namaz Motivasyonu (green).
 */
export function productCapsules(locale: Locale): ProductCapsule[] {
  return [
    {
      key: "ole",
      color: "orange",
      label: BRAND.products.ole,
      href: localizedPath("productOle", locale),
      icon: <Sparkle aria-hidden="true" />,
    },
    {
      key: "panel",
      color: "navy",
      label: BRAND.products.olePanel,
      href: localizedPath("productPanel", locale),
      icon: <LayoutDashboard aria-hidden="true" />,
    },
    {
      key: "namaz",
      color: "green",
      label: BRAND.products.namaz,
      href: localizedPath("productNamaz", locale),
      icon: <MoonStar aria-hidden="true" />,
    },
  ];
}
