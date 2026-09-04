import type { Metadata } from "next";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import {
  title,
  lastUpdated,
  blocks,
} from "@/content/legal/namaz-motivasyonu/terms";
import { ContractPageView } from "@/views/ContractPageView";

export const metadata: Metadata = {
  title,
  description: "Namaz Motivasyonu uygulamasının kullanıcı sözleşmesi.",
  alternates: { canonical: NAMAZ_LEGAL.terms },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ContractPageView title={title} lastUpdated={lastUpdated} blocks={blocks} />
  );
}
