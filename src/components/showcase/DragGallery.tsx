"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type GalleryItem = {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption: string;
  /** Phone screenshots get a device-like frame on a tinted backdrop. */
  screen?: "ole" | "namaz";
};

/**
 * Horizontal, draggable image strip.
 *
 * It is a plain native scroller (touch swipe, trackpad, Shift+wheel and
 * arrow keys once focused all work as usual, with scroll-snap). On top of
 * that, a mouse can grab-and-drag it; snapping is paused while dragging so
 * the strip follows the pointer 1:1. Prev / next buttons give a non-drag
 * alternative.
 */
export function DragGallery({
  items,
  label,
  prevLabel,
  nextLabel,
}: {
  items: GalleryItem[];
  label: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ x: 0, left: 0, moved: false });
  const settleTimer = useRef(0);
  // "drag": following the mouse; "settle": gliding to the next item after
  // release. Scroll-snap is off in both, otherwise it fights the motion.
  const [mode, setMode] = useState<"idle" | "drag" | "settle">("idle");

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = ref.current;
    if (!el) return;
    window.clearTimeout(settleTimer.current);
    drag.current = { x: e.clientX, left: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
    setMode("drag");
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (mode !== "drag") return;
    const el = ref.current;
    if (!el) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.left - dx;
  }

  // On release, glide to the next item in the drag direction. Plain
  // mandatory snapping would pull wide photos back to where they started.
  function endDrag(e: PointerEvent<HTMLDivElement>) {
    if (mode !== "drag") return;
    const el = ref.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    const start = drag.current.left;
    const delta = el.scrollLeft - start;
    if (Math.abs(delta) < 4) {
      setMode("idle");
      return;
    }
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
    const max = el.scrollWidth - el.clientWidth;
    const points = Array.from(el.children, (child) =>
      Math.min(max, Math.max(0, (child as HTMLElement).offsetLeft - pad)),
    );
    const target =
      delta > 0
        ? (points.find((pt) => pt > start + 1) ?? max)
        : ([...points].reverse().find((pt) => pt < start - 1) ?? 0);
    setMode("settle");
    el.scrollTo({ left: target, behavior: scrollBehavior() });
    settleTimer.current = window.setTimeout(() => setMode("idle"), 600);
  }

  // A drag shouldn't also count as a click on whatever is under the pointer.
  function onClickCapture(e: MouseEvent<HTMLDivElement>) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }

  function step(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: dir * el.clientWidth * 0.8,
      behavior: scrollBehavior(),
    });
  }

  return (
    <div>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className={cn(
          "no-scrollbar relative flex gap-4 overflow-x-auto overscroll-x-contain px-5 pb-2 scroll-pl-5 sm:gap-6 sm:px-8 sm:scroll-pl-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:scroll-pl-[max(2rem,calc((100vw-72rem)/2+2rem))]",
          mode === "idle" ? "cursor-grab snap-x snap-mandatory" : "select-none",
          mode === "drag" && "cursor-grabbing",
        )}
      >
        {items.map((item) => (
          <figure key={item.src} className="shrink-0 snap-start">
            <div
              className={cn(
                "relative h-72 overflow-hidden rounded-2xl sm:h-[26rem] lg:h-[30rem]",
                item.screen === "ole" && "bg-tile-ole",
                item.screen === "namaz" && "bg-tile-namaz",
              )}
              style={{
                aspectRatio: item.screen ? "4 / 5" : `${item.w} / ${item.h}`,
              }}
            >
              {item.screen ? (
                <div className="flex h-full justify-center pt-[8%]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    draggable={false}
                    sizes="(min-width: 1024px) 15rem, 40vw"
                    className="h-auto w-[56%] self-start rounded-[1.1rem] border-4 border-black/70 shadow-2xl"
                  />
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  draggable={false}
                  sizes="(min-width: 1024px) 40rem, 80vw"
                  className="object-cover"
                />
              )}
            </div>
            <figcaption className="mt-3 text-sm text-fg-muted">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-6xl justify-end gap-2 px-5 sm:px-8">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label={prevLabel}
          className="inline-flex size-12 items-center justify-center rounded-full border border-fg/15 transition-colors hover:border-fg hover:bg-fg hover:text-bg"
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label={nextLabel}
          className="inline-flex size-12 items-center justify-center rounded-full border border-fg/15 transition-colors hover:border-fg hover:bg-fg hover:text-bg"
        >
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}
