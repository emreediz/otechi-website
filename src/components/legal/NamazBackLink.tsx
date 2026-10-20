import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";

/** "← Namaz Motivasyonu" back to the (Turkish) product page. */
export function NamazBackLink() {
  return (
    <Link
      href={localizedPath("productNamaz", "tr")}
      className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg print:hidden"
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      {BRAND.products.namaz}
    </Link>
  );
}
