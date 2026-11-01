import { tr } from "@/i18n/dictionaries/tr";
import type { LegalDocKey, LegalProduct } from "@/config/legalRoutes";
import { Container } from "@/components/ui/Container";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { LegalToc } from "@/components/legal/LegalToc";
import { RelatedDocs } from "@/components/legal/RelatedDocs";
import { LegalBackLink } from "@/components/legal/NamazBackLink";
import { TocJump } from "@/components/legal/TocJump";
import { LegalNotice } from "@/components/legal/LegalNotice";
import {
  ContractDocument,
  blockId,
  type ContractBlock,
} from "@/components/legal/ContractDocument";
import { PageTransition } from "@/components/motion/PageTransition";

/**
 * Shared page shell for the product contract pages (Namaz Motivasyonu, İz).
 * Turkish-only, product colours, plain readable HTML (no PDF viewer):
 * header, table of contents, the document, then links to the other
 * documents. `notice` shows a callout above the document (İz drafts).
 */
export function ContractPageView({
  doc,
  title,
  lastUpdated,
  blocks,
  product = "namaz",
  notice,
}: {
  doc: Exclude<LegalDocKey, "accountDeletion">;
  title: string;
  lastUpdated: string;
  blocks: ContractBlock[];
  product?: LegalProduct;
  notice?: string;
}) {
  const toc = blocks.flatMap((b, i) =>
    b.type === "h2" ? [{ id: blockId(i), text: b.text }] : [],
  );

  return (
    <PageTransition>
      <div data-theme={product} className="bg-bg text-fg">
        <LegalHeader
          eyebrow={<LegalBackLink product={product} />}
          title={title}
          meta={`${tr.legal.lastUpdatedLabel}: ${lastUpdated}`}
        />

        <Container className="py-12 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <LegalToc
              id="icindekiler"
              title={tr.legal.toc}
              items={toc}
              className="lg:col-span-3"
            />
            <div className="min-w-0 lg:col-span-8 lg:col-start-5">
              {notice ? <LegalNotice text={notice} /> : null}
              <ContractDocument blocks={blocks} />
              <RelatedDocs current={doc} product={product} className="mt-20" />
            </div>
          </div>
        </Container>
        <TocJump targetId="icindekiler" label={tr.legal.toc} />
      </div>
    </PageTransition>
  );
}
