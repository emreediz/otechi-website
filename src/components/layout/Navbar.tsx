"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import type { ShowcaseItem } from "@/lib/showcase";
import { Logo } from "@/components/Logo";
import { CityClock } from "@/components/frame/CityClock";
import { ModeToggle } from "@/components/frame/ModeToggle";
import { MenuOverlay } from "@/components/frame/MenuOverlay";

/**
 * Fixed top bar: "Menu" on the left, the wordmark in the centre, the local
 * time, theme switch and e-mail on the right. Once a small sentinel scrolls
 * away the bar condenses into one centred pill (`.site-header[data-scrolled]`).
 * On the home page it always uses the dark palette (it sits on the stage).
 */
export function Navbar({
  locale,
  dict,
  items,
}: {
  locale: Locale;
  dict: Dictionary;
  items: ShowcaseItem[];
}) {
  const nav = dict.nav;
  const pathname = usePathname() || "/";
  const headerRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDialogElement | null>(null);
  const isHome = pathname === localizedPath("home", locale);

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

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-10 w-px"
      />
      <header
        ref={headerRef}
        data-surface={isHome ? "dark" : undefined}
        // Stays put during page transitions (globals.css).
        style={{ viewTransitionName: "site-header" }}
        className="site-header pointer-events-none fixed inset-x-0 top-0 z-50 !bg-transparent print:hidden"
      >
        <nav
          aria-label={nav.mainNav}
          className="site-bar pointer-events-auto mx-auto grid grid-cols-[1fr_auto_1fr] items-center"
        >
          <div>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-controls="site-menu"
              onClick={() => menuRef.current?.showModal()}
              className="pill"
            >
              {nav.menu}
            </button>
          </div>
          <Link
            href={localizedPath("home", locale)}
            aria-label={`${BRAND.company} – ${nav.home}`}
            className="inline-flex items-center"
          >
            <Logo className="h-6 sm:h-7" eager />
          </Link>
          <div className="flex items-center justify-end gap-2">
            <CityClock
              city={nav.city}
              locale={locale}
              className="mr-1 hidden text-sm sm:inline"
            />
            <ModeToggle label={nav.themeLight} />
            <a href={dict.contact.emailHref} aria-label={nav.mail} className="icon-pill">
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>
      <MenuOverlay
        dialogRef={menuRef}
        locale={locale}
        dict={dict}
        items={items}
      />
    </>
  );
}
