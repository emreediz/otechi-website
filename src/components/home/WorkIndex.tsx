"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Floating preview size (matches `w-80`) and its distance from the pointer. */
const PREVIEW_W = 320;
const PREVIEW_GAP = 28;

export type WorkRow = {
  id: string;
  name: string;
  suffix?: string;
  kind: string;
  desc: string;
  href: string;
  image: { src: string; w: number; h: number };
};

/**
 * Editorial, numbered list of work.
 *
 * Desktop (mouse): hovering a row dims the others and shows a floating
 * preview image that follows the pointer. Touch / small screens: each row
 * shows a small inline thumbnail instead. The preview is decorative
 * (`aria-hidden`); the row link text carries the meaning.
 */
export function WorkIndex({ rows }: { rows: WorkRow[] }) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef(0);
  const [active, setActive] = useState<string | null>(null);

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
        {rows.map((row, i) => (
          <li key={row.id} className="border-b border-fg/15">
            <Link
              href={row.href}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setActive(row.id);
              }}
              onFocus={() => setActive(null)}
              className={cn(
                "group/row grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 py-6 transition-opacity duration-300 sm:gap-x-8 md:grid-cols-[3rem_1.4fr_1fr_auto] md:py-8",
                active && active !== row.id && "md:opacity-25",
              )}
            >
              <span className="self-start pt-2 font-mono text-xs tracking-widest text-fg-muted md:self-center md:pt-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="block font-display text-3xl font-semibold leading-none tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-5xl md:group-hover/row:translate-x-3 lg:text-6xl">
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
              <span className="relative block h-16 w-20 overflow-hidden rounded-lg bg-bg-subtle md:hidden">
                <Image
                  src={row.image.src}
                  alt=""
                  fill
                  sizes="5rem"
                  className="object-cover"
                />
              </span>
              <span
                aria-hidden="true"
                className="hidden size-12 items-center justify-center rounded-full border border-fg/15 transition-colors duration-300 group-hover/row:border-accent group-hover/row:bg-accent group-hover/row:text-accent-fg md:inline-flex"
              >
                <ArrowRight className="size-5 transition-transform duration-300 group-hover/row:-rotate-45" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Floating preview (desktop + mouse only) */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
      >
        <div
          className={cn(
            "relative -mt-28 h-56 w-80 overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] transition-[opacity,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            active ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          {rows.map((row) => (
            <Image
              key={row.id}
              src={row.image.src}
              alt=""
              fill
              sizes="20rem"
              className={cn(
                "object-cover transition-opacity duration-300",
                active === row.id ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
