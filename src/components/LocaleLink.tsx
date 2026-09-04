import Link from "next/link";
import type { ComponentProps } from "react";
import type { Locale } from "@/i18n/config";
import { localizedPath, type RouteKey } from "@/i18n/routes";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  to: RouteKey;
  locale: Locale;
};

/** Internal link that resolves a RouteKey to the correct localized path. */
export function LocaleLink({ to, locale, ...rest }: Props) {
  return <Link href={localizedPath(to, locale)} {...rest} />;
}
