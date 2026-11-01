import type { Metadata } from "next";
import { tr } from "@/i18n/dictionaries/tr";
import { IZ_LEGAL, IZ_LEGAL_DRAFT } from "@/config/legalRoutes";
import { title, lastUpdated, blocks } from "@/content/legal/iz/kvkk";
import { ContractPageView } from "@/views/ContractPageView";

export const metadata: Metadata = {
  title,
  description:
    "İz kişisel not ve günlük uygulaması için 6698 sayılı KVKK kapsamındaki aydınlatma metni.",
  alternates: { canonical: IZ_LEGAL.kvkk },
  // Under review: out of search results until the open points are resolved.
  robots: { index: !IZ_LEGAL_DRAFT, follow: true },
};

export default function Page() {
  return (
    <ContractPageView
      product="iz"
      doc="kvkk"
      title={title}
      lastUpdated={lastUpdated}
      blocks={blocks}
      notice={IZ_LEGAL_DRAFT ? tr.showcase.iz.draftNote : undefined}
    />
  );
}
