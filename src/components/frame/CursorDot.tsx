"use client";

import { useEffect } from "react";

const INTERACTIVE = "a, button, [role='tab'], summary, label, input, select, textarea";

/**
 * A small dot that replaces the system cursor on fine pointers (mouse /
 * trackpad). It grows into a ring over interactive elements and hides when
 * the pointer leaves the window. Touch devices keep their normal behaviour.
 *
 * Every `.cursor-dot` on the page follows the pointer: a modal <dialog>
 * (the menu) renders in the browser's top layer, above this dot, so it
 * carries a dot of its own.
 */
export function CursorDot() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    // Contrast themes strip the dot's colours: keep the system cursor there.
    const forced = window.matchMedia("(forced-colors: active)");
    if (!fine.matches || forced.matches) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    // Live collection: also picks up the menu dialog's own dot.
    const list = document.getElementsByClassName("cursor-dot");
    const dots = () => Array.from(list) as HTMLElement[];

    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let raf = 0;
    const loop = () => {
      cx += (x - cx) * (calm ? 1 : 0.35);
      cy += (y - cy) * (calm ? 1 : 0.35);
      const t = `translate3d(${cx}px, ${cy}px, 0)`;
      dots().forEach((d) => (d.style.transform = t));
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e: PointerEvent) => {
      // Hide the system cursor only once the dot can be shown under it.
      if (!root.classList.contains("has-dot")) root.classList.add("has-dot");
      x = e.clientX;
      y = e.clientY;
      const hit = Boolean((e.target as Element | null)?.closest?.(INTERACTIVE));
      dots().forEach((d) => {
        d.removeAttribute("data-hidden");
        d.toggleAttribute("data-hover", hit);
      });
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () =>
      dots().forEach((d) => d.setAttribute("data-hidden", ""));
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-dot");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div aria-hidden="true" data-hidden="" className="cursor-dot" />;
}
