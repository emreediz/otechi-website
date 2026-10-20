"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localeFromPath, switchLocalePath } from "@/i18n/routes";
import { cn } from "@/lib/cn";

/** "TR / EN" text switch; each code links to the same page in that locale. */
export function LanguageSwitcher({
  dict,
  className,
}: {
  dict: Pick<Dictionary["nav"], "language" | "turkish" | "english">;
  className?: string;
}) {
  const pathname = usePathname() || "/tr";
  const current = localeFromPath(pathname);
  const name: Record<Locale, string> = { tr: dict.turkish, en: dict.english };

  return (
    <div
      className={cn("inline-flex items-center text-sm font-medium", className)}
      role="group"
      aria-label={dict.language}
    >
      {locales.map((loc, i) => (
        <Fragment key={loc}>
          {i > 0 ? (
            <span aria-hidden="true" className="text-fg-muted/60">
              /
            </span>
          ) : null}
          <Link
            href={switchLocalePath(pathname, loc)}
            hrefLang={loc}
            aria-current={loc === current ? "true" : undefined}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full transition-colors",
              loc === current ? "text-fg" : "text-fg-muted hover:text-fg",
            )}
          >
            {loc.toUpperCase()}
            <span className="sr-only"> – {name[loc]}</span>
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
