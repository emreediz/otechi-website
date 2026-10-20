"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Floating preview size (matches `w-80`) and its distance from the pointer. */
const PREVIEW_W = 320;
const PREVIEW_GAP = 28;

export type IndexRow = {
  id: string;
  name: string;
  suffix?: string;
  kind: string;
  desc: string;
  /** Without `href` the row is plain text (still previews on hover). */
  href?: string;
  /** `contain` for screens and objects shown whole on a tinted card. */
  image?: { src: string; w: number; h: number; fit?: "cover" | "contain" };
};

/**
 * Editorial, numbered index (work, products, features).
 *
 * Desktop (mouse): hovering a row dims the others and shows a floating
 * preview image that follows the pointer. Touch / small screens: each row
 * shows a small inline thumbnail instead. The preview is decorative
 * (`aria-hidden`); the row text carries the meaning.
 */
export function IndexList({ rows }: { rows: IndexRow[] }) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef(0);
  const [active, setActive] = useState<string | null>(null);
  const activeHasImage = rows.some((r) => r.id === active && r.image);

  function onPointerMove(e: PointerEvent<HTMLUListElement>) {
    if (e.pointerType !== "mouse") return;
    const list = listRef.current;
    const preview = previewRef.current;
    if (!list || !preview) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = list.getBoundingClientRect();
      const x = clientX - r.left;
      // Sit beside the pointer (not on top of the row name it hovers), and
      // flip to the left side near the right edge so it never overflows.
      const right = x + PREVIEW_GAP;
      const left =
        right + PREVIEW_W > r.width ? x - PREVIEW_GAP - PREVIEW_W : right;
      preview.style.translate = `${Math.max(0, left)}px ${clientY - r.top}px`;
    });
  }

  return (
    <div className="relative">
      <ul
        ref={listRef}
        onPointerMove={onPointerMove}
        onPointerLeave={() => setActive(null)}
        className="group/list border-t border-fg/15"
      >
        {rows.map((row, i) => {
          const rowClass = cn(
            "group/row grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 py-6 transition-opacity duration-300 sm:gap-x-8 md:grid-cols-[3rem_1.4fr_1fr_auto] md:py-8",
            active && active !== row.id && "md:opacity-50",
          );
          const content: ReactNode = (
            <>
              <span className="self-start pt-2 text-xs tabular-nums tracking-widest text-fg-muted md:self-center md:pt-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="block text-row text-balance transition-transform duration-500 ease-out-expo md:group-hover/row:translate-x-3">
                  {row.name}
                  {row.suffix ? (
                    <span className="text-fg-muted"> {row.suffix}</span>
                  ) : null}
                </span>
                {/* Mobile: meta under the name */}
                <span className="mt-2 block text-sm text-fg-muted md:hidden">
                  {row.kind} — {row.desc}
                </span>
              </span>

              <span className="hidden text-sm leading-relaxed text-fg-muted md:block">
                <span className="block font-medium text-fg">{row.kind}</span>
                {row.desc}
              </span>

              {/* Mobile thumbnail / desktop arrow */}
              {row.image ? (
                <span className="relative block h-16 w-20 overflow-hidden rounded-lg bg-bg-subtle md:hidden">
                  <Image
                    src={row.image.src}
                    alt=""
                    fill
                    sizes="5rem"
                    className={
                      row.image.fit === "contain"
                        ? "object-contain p-1.5"
                        : "object-cover"
                    }
                  />
                </span>
              ) : (
                <span className="md:hidden" />
              )}
              {row.href ? (
                <span
                  aria-hidden="true"
                  className="hidden size-12 items-center justify-center rounded-full border border-fg/15 transition-colors duration-300 group-hover/row:border-accent group-hover/row:bg-accent group-hover/row:text-accent-fg md:inline-flex"
                >
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover/row:-rotate-45" />
                </span>
              ) : (
                <span className="hidden md:block" />
              )}
            </>
          );
          const onPointerEnter = (e: PointerEvent<HTMLElement>) => {
            if (e.pointerType === "mouse") setActive(row.id);
          };
          return (
            <li key={row.id} className="border-b border-fg/15">
              {row.href ? (
                <Link
                  href={row.href}
                  onPointerEnter={onPointerEnter}
                  onFocus={() => setActive(null)}
                  className={rowClass}
                >
                  {content}
                </Link>
              ) : (
                <div onPointerEnter={onPointerEnter} className={rowClass}>
                  {content}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Floating preview (desktop + mouse only) */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
      >
        <div
          className={cn(
            "relative -mt-28 h-56 w-80 overflow-hidden rounded-2xl bg-bg-subtle shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] transition-[opacity,scale] duration-300 ease-out-expo",
            activeHasImage ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          {rows.map((row) =>
            row.image ? (
              <Image
                key={row.id}
                src={row.image.src}
                alt=""
                fill
                sizes="20rem"
                className={cn(
                  "transition-opacity duration-300",
                  row.image.fit === "contain"
                    ? "object-contain p-4"
                    : "object-cover",
                  active === row.id ? "opacity-100" : "opacity-0",
                )}
              />
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
