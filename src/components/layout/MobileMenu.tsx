"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { ContactRows } from "@/components/content/ContactRows";
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
}: {
  locale: Locale;
  dict: Dictionary["nav"];
  contact: Dictionary["contact"];
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
    {
      href: localizedPath("products", locale),
      label: dict.products,
      children: [
        {
          href: localizedPath("productOle", locale),
          label: BRAND.products.ole,
        },
        {
          href: localizedPath("productNamaz", locale),
          label: BRAND.products.namaz,
        },
      ],
    },
    { href: localizedPath("about", locale), label: dict.about, children: [] },
    {
      href: localizedPath("contact", locale),
      label: dict.contact,
      children: [],
    },
  ];

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        aria-label={dict.openMenu}
        onClick={() => ref.current?.showModal()}
        className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium md:hidden"
      >
        {dict.menu}
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <dialog
        ref={ref}
        id="mobile-menu"
        aria-label={dict.mainNav}
        className="menu-dialog m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-bg p-0 text-fg"
      >
        <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href={localizedPath("home", locale)}
            aria-label={`${BRAND.company} – ${dict.home}`}
            onClick={close}
            className="inline-flex items-center py-2"
          >
            <Logo className="h-6 sm:h-7" />
          </Link>
          <button
            type="button"
            aria-label={dict.closeMenu}
            onClick={close}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium"
          >
            {dict.close}
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="px-5 pb-10 pt-6 sm:px-8">
          <ol className="border-t border-fg/15">
            {items.map((item, i) => (
              <li
                key={item.href}
                className="menu-item border-b border-fg/15 py-4"
                style={{ "--i": i } as CSSProperties}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex min-h-12 items-baseline gap-4"
                >
                  <span className="text-xs tabular-nums text-fg-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-heading">{item.label}</span>
                </Link>
                {item.children.length ? (
                  <ul className="mt-1 flex flex-col pl-9">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          aria-current={
                            pathname === child.href ? "page" : undefined
                          }
                          className="inline-flex min-h-11 items-center text-lg text-fg-muted hover:text-fg"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>

          <ContactRows
            className="menu-item mt-10"
            items={[
              {
                label: contact.phoneLabel,
                value: contact.phone,
                href: contact.phoneHref,
              },
              {
                label: contact.emailLabel,
                value: contact.email,
                href: contact.emailHref,
              },
            ]}
          />

          <div className="menu-item mt-8 flex flex-wrap items-center justify-between gap-4">
            <LanguageSwitcher dict={dict} />
            <Button href={localizedPath("products", locale)} onClick={close}>
              {dict.cta}
            </Button>
          </div>
        </nav>
      </dialog>
    </>
  );
}
