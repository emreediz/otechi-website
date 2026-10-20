import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { pageMetadata } from "@/lib/pageMetadata";
import { resolveLocale, enParam } from "@/lib/localePage";
import { OlePanelView } from "@/views/OlePanelView";

export const generateStaticParams = enParam;
export const dynamicParams = false;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    routeKey: "productPanel",
    title: dict.olePanel.meta.title,
    description: dict.olePanel.meta.description,
  });
}

export default async function Page({ params }: Props) {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return <OlePanelView locale={locale} dict={dict} />;
}
