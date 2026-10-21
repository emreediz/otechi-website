"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EDGE } from "./Case";

export type SceneTone = "ole" | "panel" | "namaz";

/** Soft glow behind the scene, in the product colour. */
const GLOW: Record<SceneTone, string> = {
  ole: "bg-[radial-gradient(42%_38%_at_50%_50%,rgb(255_140_60/0.28),transparent_70%)]",
  panel: "bg-[radial-gradient(42%_38%_at_50%_50%,rgb(91_124_250/0.3),transparent_70%)]",
  namaz: "bg-[radial-gradient(42%_38%_at_50%_50%,rgb(43_199_143/0.26),transparent_70%)]",
};

const TONE: Record<SceneTone, string> = {
  ole: "bg-[radial-gradient(90%_75%_at_30%_100%,#8a3300_0%,#2a0d00_55%,#0b0401_100%)]",
  panel:
    "bg-[radial-gradient(90%_75%_at_70%_0%,#22408f_0%,#0b1838_50%,#03060e_100%)]",
  namaz:
    "bg-[radial-gradient(90%_75%_at_50%_0%,#1f8f68_0%,#0b4a36_40%,#020d0a_100%)]",
};

/** Dark, product-coloured stage that centres a coded scene. */
function SceneStage({
  tone,
  className,
  children,
}: {
  tone: SceneTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      data-surface="dark"
      className={cn("relative overflow-hidden", TONE[tone], className)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]"
      />
      <div aria-hidden="true" className={cn("absolute inset-0", GLOW[tone])} />
      {children}
    </div>
  );
}

/**
 * "How it works": numbered steps on the left; on large screens a sticky
 * stage on the right cross-fades to the scene of the step in the middle of
 * the viewport, with a progress bar. On smaller screens each step shows its
 * own scene above the text, which plays once it has scrolled into view.
 */
export function StepStory({
  label,
  stepLabel,
  steps,
  scenes,
  tone,
}: {
  label: string;
  stepLabel: string;
  steps: { title: string; body: string }[];
  scenes: ReactNode[];
  tone: SceneTone;
}) {
  const listRef = useRef<HTMLOListElement | null>(null);
  // No step is active until one reaches the middle of the viewport, so the
  // first scene plays when it is actually seen.
  const [active, setActive] = useState(-1);
  // Inline (small-screen) scenes that have been seen; they stay played.
  const [seen, setSeen] = useState<boolean[]>([]);
  const total = String(steps.length).padStart(2, "0");

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = [...list.querySelectorAll<HTMLElement>("[data-step]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-step")));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.forEach((el) => io.observe(el));

    const inline = [...list.querySelectorAll<HTMLElement>("[data-inline]")];
    const seenIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number(e.target.getAttribute("data-inline"));
          setSeen((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
          seenIo.unobserve(e.target);
        }
      },
      { threshold: 0.35 },
    );
    inline.forEach((el) => seenIo.observe(el));
    return () => {
      io.disconnect();
      seenIo.disconnect();
    };
  }, []);

  return (
    <section
      className={cn(
        EDGE,
        "pb-[clamp(5rem,11vw,10rem)] pt-[clamp(1rem,4vw,4rem)]",
      )}
    >
      <h2 className="text-sm text-fg-soft">{label}</h2>
      <div className="mt-10 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-[6vw]">
        {/* Large screens: steps are shorter than the sticky stage, so the
            list has room above the first and below the last step to keep
            the stage centred on them. */}
        <ol ref={listRef} className="grid gap-16 lg:block lg:py-[18svh]">
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-step={i}
              data-active={active === i ? "" : undefined}
              className="story-step lg:flex lg:min-h-[38svh] lg:flex-col lg:justify-center"
            >
              <div aria-hidden="true" className="lg:hidden">
                <SceneStage
                  tone={tone}
                  className="mb-8 aspect-[4/5] rounded-md sm:aspect-[4/3]"
                >
                  <div
                    data-inline={i}
                    data-active={seen[i] ? "" : undefined}
                    className="story-scene story-inline absolute inset-0 grid place-content-center place-items-center"
                  >
                  {/* Narrow phones: scenes are drawn at about 20rem. */}
                    <div className="max-[399px]:scale-90">{scenes[i]}</div>
                  </div>
                </SceneStage>
              </div>
              <p className="text-sm tabular-nums text-fg-soft">
                {stepLabel} {String(i + 1).padStart(2, "0")} / {total}
              </p>
              <h3 className="mt-3 text-display-m">{step.title}</h3>
              <p className="mt-4 max-w-[34ch] text-lead text-fg-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="hidden lg:block" aria-hidden="true">
          <SceneStage
            tone={tone}
            className="sticky top-[13svh] h-[74svh] rounded-md"
          >
            {scenes.map((scene, i) => (
              <div
                key={i}
                className="story-scene absolute inset-0 grid place-items-center"
                data-active={active === i ? "" : undefined}
              >
                {/* Scenes are drawn at phone size; enlarge them on the
                    big stage, less on short screens. */}
                <div className="scale-[1.12] xl:scale-[1.3] [@media(max-height:820px)]:scale-110">
                  {scene}
                </div>
              </div>
            ))}
            <div className="absolute inset-x-6 bottom-6 flex gap-2">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/15"
                >
                  <span
                    className="block h-full origin-left bg-white transition-transform duration-700 ease-out-expo"
                    style={{ transform: `scaleX(${i <= active ? 1 : 0})` } as CSSProperties}
                  />
                </span>
              ))}
            </div>
          </SceneStage>
        </div>
      </div>
    </section>
  );
}
