import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { pageMetadata } from "@/lib/pageMetadata";
import { resolveLocale, trParam } from "@/lib/localePage";
import { COOKIE_POLICY_DRAFT } from "@/config/legalRoutes";
import { CookiePolicyView } from "@/views/CookiePolicyView";

export const generateStaticParams = trParam;
export const dynamicParams = false;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return {
    ...pageMetadata({
      locale,
      routeKey: "cookies",
      title: dict.legal.cookies.meta.title,
      description: dict.legal.cookies.meta.description,
    }),
    // Indexed once approved; COOKIE_POLICY_DRAFT = true restores noindex.
    robots: { index: !COOKIE_POLICY_DRAFT, follow: true },
  };
}

export default async function Page({ params }: Props) {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  return <CookiePolicyView dict={dict} locale={locale} />;
}
