import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { pageMetadata } from "@/lib/pageMetadata";
import { resolveLocale, enParam } from "@/lib/localePage";
import { IzView } from "@/views/IzView";

export const generateStaticParams = enParam;
export const dynamicParams = false;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    routeKey: "productIz",
    title: dict.iz.meta.title,
    description: dict.iz.meta.description,
  });
}

export default async function Page({ params }: Props) {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return <IzView locale={locale} dict={dict} />;
}
