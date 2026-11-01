import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tr } from "@/i18n/dictionaries/tr";
import {
  LEGAL_DOCS,
  type LegalDocKey,
  type LegalProduct,
} from "@/config/legalRoutes";
import { legalProductPage } from "@/components/legal/NamazBackLink";
import { cn } from "@/lib/cn";

const ORDER: LegalDocKey[] = ["privacy", "kvkk", "terms", "accountDeletion"];

/**
 * After a product's document (Namaz Motivasyonu, İz): links to the other
 * documents, account deletion and the product page. These pages are
 * Turkish-only, so the labels come straight from the Turkish dictionary.
 * Hidden when printing.
 */
export function RelatedDocs({
  current,
  product = "namaz",
  className,
}: {
  current: LegalDocKey;
  product?: LegalProduct;
  className?: string;
}) {
  const docs = LEGAL_DOCS[product];
  const labels: Partial<Record<LegalDocKey, string>> = tr.showcase[product].docs;
  // Only documents that exist (no links to pages that aren't written yet).
  const rows = [
    ...ORDER.flatMap((k) => {
      const href = docs[k];
      const label = labels[k];
      return k !== current && href && label ? [{ href, label }] : [];
    }),
    legalProductPage(product),
  ];

  return (
    <nav
      aria-label={tr.legal.related}
      className={cn("print:hidden", className)}
    >
      <h2 className="text-sm font-semibold">{tr.legal.related}</h2>
      <ul className="mt-3 border-t border-fg/15">
        {rows.map((row) => (
          <li key={row.href} className="border-b border-fg/15">
            <Link
              href={row.href}
              className="group flex min-h-14 items-center justify-between gap-4 py-3 font-medium"
            >
              <span className="link-underline">{row.label}</span>
              <ArrowRight
                className="size-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
