"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, RefObject } from "react";
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
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { CityClock } from "./CityClock";
import { ModeToggle } from "./ModeToggle";

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
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname, dialogRef]);

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
      className="menu-dialog pointer-events-auto m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-bg p-0 text-fg"
    >
      <div className="flex min-h-full flex-col">
        {/* Bar (mirrors the site bar) */}
        <div className="grid h-[3.75rem] shrink-0 grid-cols-[1fr_auto_1fr] items-center px-[clamp(1rem,2vw,1.75rem)]">
          <div>
            <button
              type="button"
              onClick={close}
              className="pill border border-fg !bg-transparent"
            >
              {nav.close}
              <X className="size-3.5" aria-hidden="true" />
            </button>
          </div>
          <Link
            href={localizedPath("home", locale)}
            aria-label={`${BRAND.company} – ${nav.home}`}
            onClick={close}
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
            <ModeToggle label={nav.themeLight} />
            <a
              href={dict.contact.emailHref}
              aria-label={nav.mail}
              className="icon-pill"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid flex-1 gap-12 px-[clamp(1rem,2vw,1.75rem)] pb-10 pt-10 lg:grid-cols-[1fr_minmax(0,36rem)_1fr] lg:gap-10 lg:pt-6">
          {/* Left: pages + products */}
          <nav aria-label={nav.mainNav} className="flex flex-col lg:justify-center">
            <ul className="grid gap-1">
              {links.map((l, i) => (
                <li
                  key={l.href}
                  className="menu-item"
                  style={{ "--i": i } as CSSProperties}
                >
                  <Link
                    href={l.href}
                    onClick={close}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className="inline-flex min-h-11 items-center text-menu"
                  >
                    <span className="link-underline">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p
              className="menu-item mt-12 text-sm text-fg-soft"
              style={{ "--i": 4 } as CSSProperties}
            >
              {nav.productsTitle}
            </p>
            <ul className="mt-3 grid justify-items-start gap-2">
              {items.map((item, i) => (
                <li
                  key={item.key}
                  className="menu-item"
                  style={{ "--i": 5 + i } as CSSProperties}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    onPointerEnter={() => setPreview(item.key)}
                    onPointerLeave={() => setPreview(null)}
                    onFocus={() => setPreview(item.key)}
                    onBlur={() => setPreview(null)}
                    data-active={preview === item.key ? "" : undefined}
                    className="pill pill-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="menu-item" style={{ "--i": 8 } as CSSProperties}>
                <Link
                  href={localizedPath("products", locale)}
                  onClick={close}
                  className="pill pill-lg"
                >
                  {nav.allProducts}
                </Link>
              </li>
            </ul>

            <LanguageSwitcher
              dict={nav}
              className="menu-item mt-10 -ml-3"
            />
          </nav>

          {/* Centre: preview */}
          <div
            aria-hidden="true"
            className="relative hidden overflow-hidden rounded-md bg-black lg:block lg:max-h-[calc(100dvh-7.5rem)]"
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
            {items.map((item) => (
              <Image
                key={item.key}
                src={item.image.src}
                alt=""
                width={item.image.w}
                height={item.image.h}
                sizes="36rem"
                className={cn(
                  "absolute inset-0 size-full object-cover transition-[opacity,scale] duration-700 ease-out-expo",
                  preview === item.key
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0",
                )}
              />
            ))}
          </div>

          {/* Right: announcements */}
          <aside aria-label={nav.newsTitle} className="flex flex-col gap-2 lg:justify-center">
            {news.map(({ key, item }, i) => (
              <article
                key={key}
                className="menu-item rounded-lg bg-surface p-4"
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
                    onClick={() => setDismissed((d) => [...d, key])}
                    className="-m-1.5 grid size-8 shrink-0 place-items-center rounded-full text-fg-soft hover:bg-surface-2 hover:text-fg"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </div>
                <Link
                  href={item.href}
                  onClick={close}
                  className="mt-3 flex items-center gap-4"
                >
                  <Image
                    src={item.image.src}
                    alt=""
                    width={item.image.w}
                    height={item.image.h}
                    sizes="5rem"
                    className="size-16 shrink-0 rounded object-cover"
                  />
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
