"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Scroll-in animation wrapper. Uses a single IntersectionObserver per instance
 * and disconnects after firing. The visual effect lives in globals.css
 * (`[data-reveal]`), gated behind `html.js` and disabled under
 * prefers-reduced-motion, so content is always visible without JS.
 *
 * variant "fade"    -> the wrapper itself rises in
 * variant "trigger" -> the wrapper doesn't move; it only flips `data-shown`
 *                      so descendant `.stagger-item` elements animate in.
 */
export function Reveal({
  variant = "fade",
  delay = 0,
  className,
  children,
}: {
  variant?: "fade" | "trigger";
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      data-reveal=""
      data-trigger={variant === "trigger" ? "" : undefined}
      data-shown={shown ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
