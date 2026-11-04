import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { COOKIE_POLICY_DRAFT } from "@/config/legalRoutes";
import { cookiePolicy } from "@/content/legal/otechi/cookies";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { LegalToc } from "@/components/legal/LegalToc";
import { TocJump } from "@/components/legal/TocJump";
import { LegalNotice } from "@/components/legal/LegalNotice";
import {
  ContractDocument,
  blockId,
} from "@/components/legal/ContractDocument";
import { PageTransition } from "@/components/motion/PageTransition";

/** The other company documents, linked after the policy. */
const RELATED: { key: RouteKey; label: keyof Dictionary["footer"] }[] = [
  { key: "privacy", label: "privacy" },
  { key: "terms", label: "terms" },
  { key: "kvkk", label: "kvkk" },
];

/**
 * Otechi Cookie Policy (TR + EN). Same shell as the product contract pages
 * (header, table of contents, structured document, phone "Contents" button)
 * but localized and in the site's default colours. The document text comes
 * from src/content/legal/otechi/cookies.ts; while COOKIE_POLICY_DRAFT is
 * true an "under review" notice sits above it.
 */
export function CookiePolicyView({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const doc = cookiePolicy[locale];
  const toc = doc.blocks.flatMap((b, i) =>
    b.type === "h2" ? [{ id: blockId(i), text: b.text }] : [],
  );

  return (
    <PageTransition>
      <LegalHeader
        eyebrow={<Kicker>{dict.footer.legalTitle}</Kicker>}
        title={doc.title}
        meta={`${dict.legal.lastUpdatedLabel}: ${doc.lastUpdated}`}
        intro={doc.intro}
      />

      <Container className="py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <LegalToc
            id="contents"
            title={dict.legal.toc}
            items={toc}
            className="lg:col-span-3"
          />
          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            {COOKIE_POLICY_DRAFT ? (
              <LegalNotice text={dict.legal.cookies.draftNote} />
            ) : null}
            <ContractDocument blocks={doc.blocks} />

            <nav
              aria-label={dict.legal.related}
              className="mt-20 max-w-[68ch] print:hidden"
            >
              <h2 className="text-sm font-semibold">{dict.legal.related}</h2>
              <ul className="mt-3 border-t border-fg/15">
                {RELATED.map((row) => (
                  <li key={row.key} className="border-b border-fg/15">
                    <Link
                      href={localizedPath(row.key, locale)}
                      className="group flex min-h-14 items-center justify-between gap-4 py-3 font-medium"
                    >
                      <span className="link-underline">
                        {dict.footer[row.label]}
                      </span>
                      <ArrowRight
                        className="size-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
      <TocJump targetId="contents" label={dict.legal.toc} />
    </PageTransition>
  );
}
