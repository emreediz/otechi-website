"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type StageSlide = {
  key: string;
  /** Pill label in the left list. */
  label: string;
  href: string;
  /** Full-bleed background layer. */
  background: ReactNode;
  /** Foreground (title, tags, preview, text) — positioned by the slide. */
  content: ReactNode;
};

/**
 * Home stage: a sticky full-screen stage over a tall scroll track. Each
 * 100svh of scroll moves to the next slide (intro, the products, all
 * products); the pills on the left show where you are, preview a slide on
 * hover/focus and link to its page. Native scrolling only (with soft snap
 * points) — nothing hijacks the wheel.
 */
export function HomeStage({
  intro,
  introBackground,
  slides,
  label,
  className,
}: {
  intro: ReactNode;
  introBackground: ReactNode;
  slides: StageSlide[];
  /** Accessible name of the pill list. */
  label: string;
  className?: string;
}) {
  const count = slides.length + 1;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [peek, setPeek] = useState<number | null>(null);
  const shown = peek ?? active;

  // Which 100svh band crosses the middle of the viewport.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const marks = [...track.querySelectorAll<HTMLElement>("[data-mark]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-mark")));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    marks.forEach((m) => io.observe(m));
    return () => io.disconnect();
  }, []);

  // Pointer parallax for the background layers (fine pointers only).
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = stage.getBoundingClientRect();
        stage.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        stage.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      });
    };
    stage.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      data-home-stage=""
      data-surface="dark"
      className={cn("relative bg-bg text-fg", className)}
      style={{ height: `calc(${count} * 100svh)` }}
    >
      <div ref={trackRef} aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            data-mark={i}
            className="absolute inset-x-0 h-svh snap-start"
            style={{ top: `calc(${i} * 100svh)` }}
          />
        ))}
      </div>

      <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden">
        {/* Intro */}
        <div
          className="stage-slide absolute inset-0"
          data-active={shown === 0 ? "" : undefined}
          aria-hidden={shown !== 0}
        >
          {introBackground}
          {intro}
        </div>

        {slides.map((slide, i) => (
          <div
            key={slide.key}
            className="stage-slide absolute inset-0"
            data-active={shown === i + 1 ? "" : undefined}
            aria-hidden={shown !== i + 1}
          >
            {slide.background}
            {slide.content}
          </div>
        ))}

        {/* Pills */}
        <nav
          aria-label={label}
          className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-[clamp(1rem,2vw,1.75rem)] z-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
        >
          <ul className="grid justify-items-start gap-1.5 md:gap-2">
            {slides.map((slide, i) => (
              <li key={slide.key}>
                <Link
                  href={slide.href}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setPeek(i + 1);
                  }}
                  onPointerLeave={() => setPeek(null)}
                  onFocus={() => setPeek(i + 1)}
                  onBlur={() => setPeek(null)}
                  data-active={shown === i + 1 ? "" : undefined}
                  className="pill md:h-11 md:px-5 md:text-[1.0625rem]"
                  style={{ "--i": i } as CSSProperties}
                >
                  {slide.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

/** "Explore →" link used inside product slides. */
export function StageLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium"
    >
      <span className="link-underline">{children}</span>
      <ArrowRight
        className="size-4 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
