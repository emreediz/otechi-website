"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath, type RouteKey } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS: { key: RouteKey; label: "products" | "about" | "contact" }[] =
  [
    { key: "products", label: "products" },
    { key: "about", label: "about" },
    { key: "contact", label: "contact" },
  ];

/**
 * Sticky header. Once the page scrolls past a small sentinel the bar turns
 * into a floating pill (`.site-header[data-scrolled]` in globals.css). The
 * header keeps its 64px height, so nothing below it shifts.
 */
export function Navbar({
  locale,
  dict,
  contact,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
  contact: Dictionary["contact"];
}) {
  const pathname = usePathname() || "/";
  const headerRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    const sentinel = sentinelRef.current;
    if (!header || !sentinel) return;
    const io = new IntersectionObserver(([entry]) => {
      header.toggleAttribute("data-scrolled", !entry.isIntersecting);
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
        className="pointer-events-none absolute left-0 top-0 h-20 w-px"
      />
      <header
        ref={headerRef}
        // Stays put during page transitions (globals.css).
        style={{ viewTransitionName: "site-header" }}
        className="site-header sticky top-0 z-50 h-16 print:hidden"
      >
        <nav
          aria-label={dict.mainNav}
          className="site-header__bar mx-auto flex w-full items-center justify-between gap-4"
        >
          <Link
            href={localizedPath("home", locale)}
            aria-label={dict.home}
            className="inline-flex shrink-0 items-center py-2"
          >
            <Logo className="h-6 sm:h-7" eager />
          </Link>

          {/* Desktop nav */}
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
                    "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors",
                    active ? "text-fg" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-accent"
                    />
                  ) : null}
                  <span className="link-underline">{dict[item.label]}</span>
                </Link>
              );
            })}
            <LanguageSwitcher dict={dict} className="ml-1" />
            <Button
              href={localizedPath("products", locale)}
              size="md"
              className="ml-2"
            >
              {dict.cta}
            </Button>
          </div>

          <MobileMenu locale={locale} dict={dict} contact={contact} />
        </nav>
      </header>
    </>
  );
}
