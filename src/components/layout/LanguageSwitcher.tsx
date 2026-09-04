"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { localeFromPath, switchLocalePath } from "@/i18n/routes";
import { cn } from "@/lib/cn";

const flag: Record<Locale, string> = { tr: "🇹🇷", en: "🇬🇧" };
const ariaLabel: Record<Locale, string> = {
  tr: "Türkçe'ye geç",
  en: "Switch to English",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() || "/tr";
  const current = localeFromPath(pathname);

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      role="group"
      aria-label="Türkçe / English"
    >
      {locales.map((loc) => (
        <Link
          key={loc}
          href={switchLocalePath(pathname, loc)}
          hrefLang={loc}
          aria-label={ariaLabel[loc]}
          aria-current={loc === current ? "true" : undefined}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-md text-lg leading-none transition-opacity",
            loc === current ? "opacity-100" : "opacity-45 hover:opacity-100",
          )}
        >
          <span aria-hidden="true">{flag[loc]}</span>
        </Link>
      ))}
    </div>
  );
}
