import type { Metadata } from "next";
import { tr } from "@/i18n/dictionaries/tr";
import { IZ_LEGAL, IZ_LEGAL_DRAFT } from "@/config/legalRoutes";
import { title, lastUpdated, blocks } from "@/content/legal/iz/privacy";
import { ContractPageView } from "@/views/ContractPageView";

export const metadata: Metadata = {
  title,
  description:
    "İz kişisel not ve günlük uygulamasında kişisel verilerin nasıl işlendiğini açıklayan gizlilik politikası.",
  alternates: { canonical: IZ_LEGAL.privacy },
  // Indexed unless the İz documents are put back in draft (IZ_LEGAL_DRAFT).
  robots: { index: !IZ_LEGAL_DRAFT, follow: true },
};

export default function Page() {
  return (
    <ContractPageView
      product="iz"
      doc="privacy"
      title={title}
      lastUpdated={lastUpdated}
      blocks={blocks}
      notice={IZ_LEGAL_DRAFT ? tr.showcase.iz.draftNote : undefined}
    />
  );
}
