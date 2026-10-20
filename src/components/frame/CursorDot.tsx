"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='tab'], summary, label, input, select, textarea";

/**
 * A small dot that replaces the system cursor on fine pointers (mouse /
 * trackpad). It grows over interactive elements and hides when the pointer
 * leaves the window. Touch devices keep their normal behaviour.
 */
export function CursorDot() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = ref.current;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!dot || !fine.matches) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("has-dot");

    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let raf = 0;
    const loop = () => {
      cx += (x - cx) * (calm ? 1 : 0.35);
      cy += (y - cy) * (calm ? 1 : 0.35);
      dot.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.removeAttribute("data-hidden");
      const hit = (e.target as Element | null)?.closest?.(INTERACTIVE);
      dot.toggleAttribute("data-hover", Boolean(hit));
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => dot.setAttribute("data-hidden", "");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-dot");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" data-hidden="" className="cursor-dot" />;
}
