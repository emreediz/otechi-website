"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { BRAND } from "@/config/brand";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS: { key: RouteKey; label: "products" | "about" }[] = [
  { key: "products", label: "products" },
  { key: "about", label: "about" },
];

/**
 * Fixed header with two islands (logo + nav, language + call to action).
 * Transparent at the top of the page; once a small sentinel scrolls away the
 * islands turn into frosted pills (`.site-header[data-scrolled]`).
 */
export function Navbar({
  locale,
  dict,
  contact,
  products,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
  contact: Dictionary["contact"];
  products: { href: string; label: string }[];
}) {
  const pathname = usePathname() || "/";
  const headerRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    const sentinel = sentinelRef.current;
    if (!header || !sentinel) return;
    const io = new IntersectionObserver((entries) => {
      // Entries can queue up; the newest one is the current state.
      const latest = entries[entries.length - 1];
      header.toggleAttribute("data-scrolled", !latest.isIntersecting);
    });
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  // Section highlight (e.g. "Products" on a product page or on the
  // Turkish-only Namaz Motivasyonu documents); aria-current only on exact match.
  function inSection(path: string) {
    if (pathname === path || pathname.startsWith(path + "/")) return true;
    return (
      path === localizedPath("products", "tr") &&
      pathname.startsWith("/urunler/")
    );
  }

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-6 w-px"
      />
      <header
        ref={headerRef}
        // Stays put during page transitions (globals.css).
        style={{ viewTransitionName: "site-header" }}
        className="site-header pointer-events-none fixed inset-x-0 top-0 z-50 print:hidden"
      >
        <nav
          aria-label={dict.mainNav}
          className="site-header__bar mx-auto flex w-full max-w-[calc(85rem+2*var(--gutter))] items-center justify-between gap-4 px-(--gutter)"
        >
          <div className="site-header__island pointer-events-auto flex items-center gap-6 rounded-full pl-2.5 pr-1.5 lg:gap-11">
            <Link
              href={localizedPath("home", locale)}
              aria-label={`${BRAND.company} – ${dict.home}`}
              className="inline-flex shrink-0 items-center rounded-[10px] px-1 py-1.5"
            >
              <Logo className="site-header__logo" eager />
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => {
                const path = localizedPath(item.key, locale);
                const active = inSection(path);
                return (
                  <Link
                    key={item.key}
                    href={path}
                    aria-current={pathname === path ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 text-[0.95rem] font-medium transition-colors hover:bg-fg/[0.04] hover:text-fg",
                      active ? "text-fg" : "text-fg-muted",
                    )}
                  >
                    {active ? (
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-brand"
                      />
                    ) : null}
                    {dict[item.label]}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="site-header__island pointer-events-auto flex items-center gap-1 rounded-full px-1.5">
            <LanguageSwitcher dict={dict} />
            <Button
              href={localizedPath("contact", locale)}
              size="sm"
              className="ml-1 hidden md:inline-flex"
            >
              {dict.cta}
            </Button>
            <MobileMenu
              locale={locale}
              dict={dict}
              contact={contact}
              products={products}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
