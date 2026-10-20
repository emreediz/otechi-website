"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type ProductTile = {
  theme: "ole" | "namaz";
  index: string;
  name: string;
  category: string;
  tagline: string;
  href: string;
  /** Centre-piece key art that tilts with the pointer. */
  art: { src: string; alt: string; w: number; h: number; cover?: boolean };
  /** Two decorative phone screens that rise out of the tile on hover. */
  screens: { src: string; w: number; h: number }[];
};

/**
 * Large interactive product tiles for the homepage.
 *
 * - Mouse: the key art tilts / parallaxes towards the pointer and a round
 *   "Explore" cursor follows it; the phone screens rise into view.
 * - Touch / no hover: everything is shown in its resting state (screens
 *   peeking from the bottom edge), no pointer effects.
 * - Reduced motion: the tilt is disabled in CSS.
 *
 * Pointer position is written straight to CSS variables on the tile (no React
 * state), so moving the mouse never re-renders.
 */
export function ProductTiles({
  tiles,
  exploreLabel,
}: {
  tiles: ProductTile[];
  exploreLabel: string;
}) {
  return (
    <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
      {tiles.map((tile) => (
        <Tile key={tile.theme} tile={tile} exploreLabel={exploreLabel} />
      ))}
    </div>
  );
}

function Tile({
  tile,
  exploreLabel,
}: {
  tile: ProductTile;
  exploreLabel: string;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const frame = useRef(0);

  function onPointerMove(e: PointerEvent<HTMLAnchorElement>) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = clientX - r.left;
      const y = clientY - r.top;
      el.style.setProperty("--px", ((x / r.width) * 2 - 1).toFixed(3));
      el.style.setProperty("--py", ((y / r.height) * 2 - 1).toFixed(3));
      el.style.setProperty("--cx", `${x}px`);
      el.style.setProperty("--cy", `${y}px`);
    });
  }

  function onPointerLeave() {
    cancelAnimationFrame(frame.current);
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  }

  const dark = tile.theme === "ole" ? "bg-tile-ole" : "bg-tile-namaz";

  return (
    <Link
      ref={ref}
      href={tile.href}
      data-theme={tile.theme}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn(
        "group relative isolate flex aspect-[3/4] flex-col overflow-hidden rounded-3xl text-white sm:aspect-square lg:aspect-[5/6] md:cursor-none",
        dark,
      )}
    >
      {/* Key art */}
      {tile.art.cover ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={tile.art.src}
            alt={tile.art.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="tilt-layer scale-110 object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-x-0 top-[52%] -z-10 flex justify-center sm:top-[48%] lg:top-[47%] xl:top-[40%]">
          <Image
            src={tile.art.src}
            alt={tile.art.alt}
            width={tile.art.w}
            height={tile.art.h}
            sizes="(min-width: 1024px) 22rem, 60vw"
            className="tilt-layer h-auto w-[44%] max-w-xs sm:w-[56%] drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
          />
        </div>
      )}

      {/* Keeps the copy legible over the art */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/85 via-black/40 via-45% to-transparent"
      />

      {/* Copy — soft shadow keeps it legible over bright key art */}
      <div className="p-6 [text-shadow:0_1px_14px_rgba(0,0,0,0.55)] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-medium text-white/75">
            <span className="mr-3 font-mono text-xs tracking-widest text-white/50">
              {tile.index}
            </span>
            {tile.category}
          </p>
          <span
            aria-hidden="true"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 group-focus-visible:rotate-45"
          >
            <ArrowUpRight className="size-5" />
          </span>
        </div>
        <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {tile.name}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
          {tile.tagline}
        </p>
      </div>

      {/* Phone screens: peek at rest, rise on hover / keyboard focus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-[68%] justify-center gap-3 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[38%] group-focus-visible:translate-y-[38%] sm:gap-4"
      >
        {tile.screens.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt=""
            width={s.w}
            height={s.h}
            sizes="(min-width: 1024px) 11rem, 32vw"
            className={cn(
              "h-auto w-[32%] max-w-[11rem] rounded-[1.25rem] border-4 border-black/80 shadow-2xl transition-[rotate,translate] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              i === 0
                ? "-rotate-3 group-hover:-rotate-6"
                : "translate-y-6 rotate-3 group-hover:translate-y-2 group-hover:rotate-6",
            )}
          />
        ))}
      </div>

      {/* Cursor bubble (mouse + hover only) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden size-24 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-black opacity-0 transition-[scale,opacity] duration-300 md:flex md:group-hover:scale-100 md:group-hover:opacity-100"
        style={{ left: "var(--cx, 50%)", top: "var(--cy, 50%)" }}
      >
        {exploreLabel}
      </span>
    </Link>
  );
}
