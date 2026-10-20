import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tr } from "@/i18n/dictionaries/tr";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { cn } from "@/lib/cn";

type DocKey = keyof typeof NAMAZ_LEGAL;
const ORDER: DocKey[] = ["privacy", "kvkk", "terms", "accountDeletion"];

/**
 * After a Namaz Motivasyonu document: links to the other documents, account
 * deletion and the product page. These pages are Turkish-only, so the labels
 * come straight from the Turkish dictionary. Hidden when printing.
 */
export function RelatedDocs({
  current,
  className,
}: {
  current: DocKey;
  className?: string;
}) {
  const rows = [
    ...ORDER.filter((k) => k !== current).map((k) => ({
      href: NAMAZ_LEGAL[k],
      label: tr.showcase.namaz.docs[k],
    })),
    { href: localizedPath("productNamaz", "tr"), label: BRAND.products.namaz },
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
