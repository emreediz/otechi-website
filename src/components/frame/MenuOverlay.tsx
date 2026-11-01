"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import type { CSSProperties, MouseEvent, RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/cn";
import { GLASS, type ShowcaseItem, type ShowcaseKey } from "@/lib/showcase";
import {
  ArtThumb,
  IzArt,
  NamazArt,
  OleArt,
  PanelArt,
} from "@/components/visual/ProductArt";
import { closeMenu, setFrameVars } from "@/lib/menuTransition";
import { Logo } from "@/components/Logo";
import { CityClock } from "./CityClock";
import { ModeToggle } from "./ModeToggle";
import { LanguageMenu } from "./LanguageMenu";

const NAV_TYPES = ["menu-nav"];
// Product pills: on large screens the centre frame grows into the page.
const EXPAND_TYPES = ["menu-nav", "menu-expand"];
/** Product pills: compact on phones (room for the frame), large from lg. */
const MENU_PILL =
  "pill h-10 px-4 text-[0.9375rem] lg:h-11 lg:px-5 lg:text-[1.0625rem]";

/**
 * Full-screen menu on a native modal <dialog> (focus trap, Esc and focus
 * return come from the platform). Always on the light palette: page links
 * and product pills on the left, a tall preview in the centre that follows
 * the hovered/focused product, short announcements on the right.
 */
export function MenuOverlay({
  dialogRef,
  locale,
  dict,
  items,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
  locale: Locale;
  dict: Dictionary;
  items: ShowcaseItem[];
}) {
  const nav = dict.nav;
  const pathname = usePathname();
  const [preview, setPreview] = useState<ShowcaseKey | null>(null);
  const [dismissed, setDismissed] = useState<ShowcaseKey[]>([]);
  // The close button and Esc animate the page back out of the centre frame.
  const closeAnimated = () => closeMenu(dialogRef.current);

  // Menu links navigate with the "menu-nav" transition type: the menu stays
  // on screen and the new page wipes up over it (globals.css). A link to
  // the current page just closes the menu.
  const leave = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    if (e.currentTarget.getAttribute("href") === pathname) {
      e.preventDefault();
      closeAnimated();
    }
  };

  // Close as part of the navigation commit (inside React's transition
  // update), so the new page's snapshot no longer contains the menu.
  useLayoutEffect(() => {
    dialogRef.current?.close();
  }, [pathname, dialogRef]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      closeMenu(dialog);
    };
    // A product picked by touch keeps its art in the frame until the menu
    // has closed; start fresh next time.
    const onClose = () => setPreview(null);
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("close", onClose);
    };
  }, [dialogRef]);

  const links = [
    { href: localizedPath("products", locale), label: nav.products },
    { href: localizedPath("about", locale), label: nav.about },
    { href: localizedPath("contact", locale), label: nav.contact },
    { href: localizedPath("home", locale), label: nav.home },
  ];

  const news = (["namaz", "panel", "ole"] as const)
    .filter((key) => !dismissed.includes(key))
    .map((key) => ({ key, item: items.find((i) => i.key === key)! }));

  return (
    <dialog
      ref={dialogRef}
      id="site-menu"
      aria-label={nav.mainNav}
      data-surface="light"
      className="menu-dialog pointer-events-auto m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overflow-x-hidden border-0 bg-bg p-0 text-fg"
    >
      <div className="flex min-h-full flex-col overflow-x-clip">
        {/* Bar (mirrors the site bar); stays on top while the menu scrolls
            on short screens, so "Close" is always in reach. */}
        <div className="sticky top-0 z-10 grid h-[3.75rem] shrink-0 grid-cols-[1fr_auto_1fr] items-center bg-bg px-[clamp(1rem,2vw,1.75rem)]">
          <div>
            <button
              type="button"
              data-menu-close=""
              onClick={closeAnimated}
              className="pill border border-fg !bg-transparent"
            >
              {nav.close}
              <X className="size-3.5" aria-hidden="true" />
            </button>
          </div>
          <Link
            href={localizedPath("home", locale)}
            aria-label={`${BRAND.company} – ${nav.home}`}
            onClick={leave}
                    transitionTypes={NAV_TYPES}
            className="inline-flex"
          >
            <Logo className="h-6 sm:h-7" />
          </Link>
          <div className="flex items-center justify-end gap-2">
            <CityClock
              city={nav.city}
              locale={locale}
              className="mr-1 hidden text-sm sm:inline"
            />
            <LanguageMenu label={nav.language} />
            <ModeToggle label={nav.themeLight} />
            <a
              href={dict.contact.emailHref}
              aria-label={nav.mail}
              className="icon-pill max-[359px]:hidden"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Phones and tablets: links and products on the left, the frame
            beside them, announcements below. Large screens: three columns. */}
        <div className="grid flex-1 grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-12 px-[clamp(1rem,2vw,1.75rem)] pb-10 pt-10 lg:grid-cols-[1fr_minmax(0,36rem)_1fr] lg:gap-10 lg:pt-6">
          {/* Left: pages + products */}
          <nav aria-label={nav.mainNav} className="flex flex-col lg:justify-center">
            <ul className="grid gap-1">
              {links.map((l, i) => (
                <li
                  key={l.href}
                  className="menu-item menu-from-left"
                  style={{ "--i": i } as CSSProperties}
                >
                  <Link
                    href={l.href}
                    onClick={leave}
                    transitionTypes={NAV_TYPES}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className="inline-flex min-h-11 items-center text-menu"
                  >
                    <span className="link-underline">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p
              className="menu-item menu-from-left mt-12 text-sm text-fg-soft"
              style={{ "--i": 4 } as CSSProperties}
            >
              {nav.productsTitle}
            </p>
            <ul className="mt-3 grid justify-items-start gap-2">
              {items.map((item, i) => (
                <li
                  key={item.key}
                  className="menu-item menu-from-left"
                  style={{ "--i": 5 + i } as CSSProperties}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (dialogRef.current) setFrameVars(dialogRef.current);
                      leave(e);
                    }}
                    transitionTypes={EXPAND_TYPES}
                    onPointerEnter={() => setPreview(item.key)}
                    // Touch: show the product in the frame as soon as the
                    // finger lands (iOS doesn't focus links on tap), and keep
                    // it there while the page grows out of the frame.
                    onPointerDown={() => setPreview(item.key)}
                    onPointerLeave={(e) => {
                      if (e.pointerType === "mouse") setPreview(null);
                    }}
                    onFocus={() => setPreview(item.key)}
                    onBlur={() => setPreview(null)}
                    data-active={preview === item.key ? "" : undefined}
                    className={MENU_PILL}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li
                className="menu-item menu-from-left"
                style={{ "--i": 5 + items.length } as CSSProperties}
              >
                <Link
                  href={localizedPath("products", locale)}
                  onClick={leave}
                    transitionTypes={NAV_TYPES}
                  className={MENU_PILL}
                >
                  {nav.allProducts}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Centre: preview */}
          <div
            aria-hidden="true"
            data-menu-frame=""
            className="relative min-h-[16rem] overflow-hidden rounded-md bg-black lg:max-h-[calc(100dvh-7.5rem)]"
          >
            <div
              className={cn(
                "absolute inset-0 grid place-items-center transition-opacity duration-500",
                preview ? "opacity-0" : "opacity-100",
              )}
            >
              <Image
                src={GLASS.src}
                alt=""
                width={GLASS.w}
                height={GLASS.h}
                sizes="36rem"
                className="glass-spin w-[160%] max-w-none"
              />
            </div>
            {items.map((item) => {
              const Art = {
                ole: OleArt,
                panel: PanelArt,
                namaz: NamazArt,
                iz: IzArt,
              }[
                item.key
              ];
              return (
                <div
                  key={item.key}
                  className={cn(
                    "absolute inset-0 transition-[opacity,scale] duration-700 ease-out-expo",
                    preview === item.key
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0",
                  )}
                >
                  <Art copy={dict.mock} layout="portrait" />
                </div>
              );
            })}
          </div>

          {/* Right: announcements */}
          <aside
            aria-label={nav.newsTitle}
            className="col-span-2 flex flex-col gap-2 lg:col-span-1 lg:justify-center"
          >
            {news.map(({ key, item }, i) => (
              <article
                key={key}
                className="menu-item menu-from-right rounded-lg bg-surface p-4"
                style={{ "--i": 4 + i } as CSSProperties}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium">
                    {key === "namaz" ? `${nav.newLabel} · ` : ""}
                    {item.label}
                  </p>
                  <button
                    type="button"
                    aria-label={`${nav.dismiss}: ${item.label}`}
                    onClick={(e) => {
                      const aside = e.currentTarget.closest("aside");
                      setDismissed((d) => [...d, key]);
                      // Keep focus in the menu: the next announcement's
                      // dismiss button, or "Close".
                      requestAnimationFrame(() => {
                        const next =
                          aside?.querySelector<HTMLButtonElement>("button") ??
                          dialogRef.current?.querySelector<HTMLButtonElement>(
                            "[data-menu-close]",
                          );
                        next?.focus();
                      });
                    }}
                    className="-m-2.5 grid size-10 shrink-0 place-items-center rounded-full text-fg-soft hover:bg-surface-2 hover:text-fg"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </div>
                <Link
                  href={item.href}
                  onClick={leave}
                    transitionTypes={NAV_TYPES}
                  className="mt-3 flex items-center gap-4"
                >
                  <ArtThumb kind={key} />
                  <span className="text-sm leading-snug text-fg-muted">
                    {nav.news[key]}
                  </span>
                </Link>
              </article>
            ))}
          </aside>
        </div>
      </div>
      {/* The dialog renders above the page's cursor dot; this one follows
          the pointer while the menu is open (CursorDot.tsx). */}
      <div aria-hidden="true" data-hidden="" className="cursor-dot" />
    </dialog>
  );
}
