import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { pageMetadata } from "@/lib/pageMetadata";
import { resolveLocale, bothParams } from "@/lib/localePage";
import { LegalView } from "@/views/LegalView";

// KVKK keeps the same path segment in both languages: /tr/kvkk and /en/kvkk.
export const generateStaticParams = bothParams;
export const dynamicParams = false;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    routeKey: "kvkk",
    title: dict.legal.kvkk.meta.title,
    description: dict.legal.kvkk.meta.description,
  });
}

export default async function Page({ params }: Props) {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return <LegalView dict={dict} kind="kvkk" />;
}
