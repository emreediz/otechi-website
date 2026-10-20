"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Full-screen mobile menu on a native modal <dialog>: focus trap, Esc,
 * inert background and focus return come from the platform. No React state —
 * the dialog is opened/closed through its DOM API. It also closes on route
 * change and when the viewport grows to the desktop nav (md).
 */
export function MobileMenu({
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
  const ref = useRef<HTMLDialogElement | null>(null);
  const pathname = usePathname();
  const close = () => ref.current?.close();

  useEffect(() => {
    ref.current?.close();
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) ref.current?.close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const items = [
    { href: localizedPath("products", locale), label: dict.products },
    ...products,
    { href: localizedPath("about", locale), label: dict.about },
    { href: localizedPath("contact", locale), label: dict.contact },
  ];

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        aria-label={dict.openMenu}
        onClick={() => ref.current?.showModal()}
        className="inline-grid size-11 place-items-center rounded-full md:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 8h16M4 16h16" />
        </svg>
      </button>

      <dialog
        ref={ref}
        id="mobile-menu"
        aria-label={dict.mainNav}
        className="menu-dialog pointer-events-auto m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-bg p-0 text-fg"
      >
        <div className="flex min-h-full flex-col px-(--gutter) pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-3">
          <div className="flex h-14 items-center justify-between px-1.5">
            <Link
              href={localizedPath("home", locale)}
              aria-label={`${BRAND.company} – ${dict.home}`}
              onClick={close}
              className="inline-flex items-center py-2"
            >
              <Logo className="h-6" />
            </Link>
            <button
              type="button"
              aria-label={dict.closeMenu}
              onClick={close}
              className="inline-grid size-11 place-items-center rounded-full"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6">
            <ul>
              {items.map((item, i) => (
                <li
                  key={item.href}
                  className="menu-item border-b border-border"
                  style={{ "--i": i } as CSSProperties}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="flex min-h-16 items-center justify-between gap-4 px-1 py-3 text-[1.75rem] font-semibold tracking-[-0.02em]"
                  >
                    {item.label}
                    <ArrowRight
                      className="size-5 text-fg-faint"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu-item mt-auto grid gap-3 pt-8">
            <LanguageSwitcher dict={dict} className="justify-self-start" />
            <Button
              href={localizedPath("contact", locale)}
              onClick={close}
              size="lg"
              className="w-full"
            >
              {dict.cta}
            </Button>
            <Button href={contact.emailHref} variant="secondary" size="lg" className="w-full">
              {contact.email}
            </Button>
          </div>
        </div>
      </dialog>
    </>
  );
}
