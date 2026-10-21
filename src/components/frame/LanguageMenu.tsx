"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales } from "@/i18n/config";
import { localeFromPath, switchLocalePath } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { Flag } from "./Flag";

/** Round 34px flag control with an invisible 40px hit area for touch. */
const FLAG_BUTTON =
  "relative grid size-[2.125rem] place-items-center rounded-full ring-1 ring-fg/15 transition-transform active:scale-95 after:absolute after:-inset-[3px] after:rounded-full after:content-['']";

/**
 * Language picker: a round flag button for the current language; it opens
 * the other languages' flags downwards, each linking to the same page in
 * that language. Closes on outside click, Esc (without closing the menu
 * dialog around it), focus leaving it, or a choice.
 */
export function LanguageMenu({
  label,
  className,
}: {
  /** Accessible name of the control, e.g. "Language". */
  label: string;
  className?: string;
}) {
  const pathname = usePathname() || "/tr";
  const current = localeFromPath(pathname);
  const others = locales.filter((loc) => loc !== current);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Keep the menu dialog (if any) open: Esc only closes the list.
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      onBlur={(e) => {
        // Focus moved to another control (Tab): close. A click outside is
        // handled by the pointerdown listener above.
        const next = e.relatedTarget as Node | null;
        if (next && !rootRef.current?.contains(next)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`${label}: ${localeNames[current]}`}
        title={localeNames[current]}
        onClick={() => setOpen((o) => !o)}
        className={FLAG_BUTTON}
      >
        <span className="size-full overflow-hidden rounded-full">
          <Flag locale={current} className="size-full" />
        </span>
      </button>
      {open ? (
        <ul
          id={listId}
          className="absolute left-1/2 top-full z-30 mt-2 grid -translate-x-1/2 gap-2"
        >
          {others.map((loc, i) => (
            <li
              key={loc}
              className="lang-drop"
              style={{ "--i": i } as CSSProperties}
            >
              <Link
                href={switchLocalePath(pathname, loc)}
                hrefLang={loc}
                lang={loc}
                title={localeNames[loc]}
                onClick={() => setOpen(false)}
                className={cn(FLAG_BUTTON, "shadow-md hover:scale-110")}
              >
                <span className="size-full overflow-hidden rounded-full">
                  <Flag locale={loc} className="size-full" />
                </span>
                <span className="sr-only">{localeNames[loc]}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
