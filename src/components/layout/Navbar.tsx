"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_ITEMS: { key: RouteKey; label: keyof Dictionary["nav"] }[] = [
  { key: "products", label: "products" },
  { key: "about", label: "about" },
  { key: "contact", label: "contact" },
];

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  function isActive(path: string) {
    return pathname === path || pathname.startsWith(path + "/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <nav
        aria-label={dict.home}
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          href={localizedPath("home", locale)}
          aria-label={dict.home}
          className="inline-flex items-center py-2"
          onClick={close}
        >
          <Logo className="h-6 sm:h-7" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const path = localizedPath(item.key, locale);
            return (
              <Link
                key={item.key}
                href={path}
                aria-current={isActive(path) ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors",
                  isActive(path) ? "text-fg" : "text-fg-muted hover:text-fg",
                )}
              >
                {dict[item.label]}
              </Link>
            );
          })}
          <LanguageSwitcher className="ml-1" />
          <Button
            href={localizedPath("products", locale)}
            size="md"
            className="ml-2"
          >
            {dict.cta}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? dict.closeMenu : dict.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-bg md:hidden"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-8">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const path = localizedPath(item.key, locale);
              return (
                <li key={item.key}>
                  <Link
                    href={path}
                    aria-current={isActive(path) ? "page" : undefined}
                    onClick={close}
                    className={cn(
                      "flex min-h-11 items-center py-3 text-base font-medium",
                      isActive(path) ? "text-fg" : "text-fg-muted",
                    )}
                  >
                    {dict[item.label]}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
            <LanguageSwitcher />
            <Button
              href={localizedPath("products", locale)}
              onClick={close}
            >
              {dict.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
