import { tr } from "@/i18n/dictionaries/tr";
import type { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { Container } from "@/components/ui/Container";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { LegalToc } from "@/components/legal/LegalToc";
import { RelatedDocs } from "@/components/legal/RelatedDocs";
import { NamazBackLink } from "@/components/legal/NamazBackLink";
import { TocJump } from "@/components/legal/TocJump";
import {
  ContractDocument,
  blockId,
  type ContractBlock,
} from "@/components/legal/ContractDocument";
import { PageTransition } from "@/components/motion/PageTransition";

/**
 * Shared page shell for the Namaz Motivasyonu contract pages. Turkish-only,
 * Namaz Motivasyonu colours, plain readable HTML (no PDF viewer): header,
 * table of contents, the verbatim document, then links to the other
 * documents.
 */
export function ContractPageView({
  doc,
  title,
  lastUpdated,
  blocks,
}: {
  doc: Exclude<keyof typeof NAMAZ_LEGAL, "accountDeletion">;
  title: string;
  lastUpdated: string;
  blocks: ContractBlock[];
}) {
  const toc = blocks.flatMap((b, i) =>
    b.type === "h2" ? [{ id: blockId(i), text: b.text }] : [],
  );

  return (
    <PageTransition>
      <div data-theme="namaz" className="bg-bg text-fg">
        <LegalHeader
          eyebrow={<NamazBackLink />}
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
              <ContractDocument blocks={blocks} />
              <RelatedDocs current={doc} className="mt-20" />
            </div>
          </div>
        </Container>
        <TocJump targetId="icindekiler" label={tr.legal.toc} />
      </div>
    </PageTransition>
  );
}
