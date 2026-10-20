"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ElementType } from "react";

/**
 * Large statement whose words fill from grey to solid as it scrolls through
 * the viewport. JS only writes one CSS variable (`--p`, 0..1) per frame; the
 * per-word opacity is computed in CSS (`.fill-word` in globals.css), which
 * also keeps the text fully visible without JS or under reduced motion.
 */
export function ScrollFillText({
  text,
  as: Tag = "p",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top enters at 90% of the viewport, 1 once it reaches 35%.
      const p = (vh * 0.9 - rect.top) / (vh * 0.55);
      el.style.setProperty("--p", String(Math.min(1, Math.max(0, p))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ "--n": words.length } as CSSProperties}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="fill-word"
          style={{ "--i": i } as CSSProperties}
        >
          {word}
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
