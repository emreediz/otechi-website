import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import type { LegalProduct } from "@/config/legalRoutes";

const PRODUCT: Record<LegalProduct, { route: RouteKey; name: string }> = {
  namaz: { route: "productNamaz", name: BRAND.products.namaz },
  iz: { route: "productIz", name: BRAND.products.iz },
};

/** "← Product name" back to the (Turkish) product page of a document. */
export function LegalBackLink({ product }: { product: LegalProduct }) {
  const p = PRODUCT[product];
  return (
    <Link
      href={localizedPath(p.route, "tr")}
      className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg print:hidden"
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      {p.name}
    </Link>
  );
}

/** "← Namaz Motivasyonu" back to the (Turkish) product page. */
export function NamazBackLink() {
  return <LegalBackLink product="namaz" />;
}

export const legalProductPage = (product: LegalProduct) => ({
  href: localizedPath(PRODUCT[product].route, "tr"),
  label: PRODUCT[product].name,
});
