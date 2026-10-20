"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type StoryBeat = {
  title: string;
  body: string;
  image: { src: string; alt: string; w: number; h: number };
};

/**
 * Short scroll-driven product story. Desktop: the beats scroll past on the
 * left while a sticky phone on the right crossfades to the matching screen
 * (one IntersectionObserver; the beat in the middle of the viewport wins).
 * Mobile: each beat simply shows its own screen. Without JS the first
 * screen is shown and no copy is dimmed (dimming is gated on `html.js`).
 */
export function ScrollStory({ beats }: { beats: StoryBeat[] }) {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const total = String(beats.length).padStart(2, "0");
  const frame = beats[0].image;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [beats.length]);

  return (
    <div className="grid gap-x-8 lg:grid-cols-12">
      <ol className="scroll-story lg:col-span-6">
        {beats.map((beat, i) => (
          <li
            key={beat.title}
            ref={(el) => {
              items.current[i] = el;
            }}
            data-index={i}
            data-active={active === i ? "" : undefined}
            className="border-t border-fg/15 py-12 first:border-t-0 lg:flex lg:min-h-[75vh] lg:flex-col lg:justify-center lg:border-t-0 lg:py-0"
          >
            <div className="scroll-story__copy">
              <span className="text-xs tabular-nums tracking-widest text-fg-muted">
                {String(i + 1).padStart(2, "0")} / {total}
              </span>
              <h3 className="mt-4 text-display-m">{beat.title}</h3>
              <p className="mt-4 max-w-sm text-lead text-fg-muted">
                {beat.body}
              </p>
            </div>
            {/* Mobile: the screen sits under its own beat */}
            <Image
              src={beat.image.src}
              alt={beat.image.alt}
              width={beat.image.w}
              height={beat.image.h}
              sizes="15rem"
              className="mx-auto mt-10 h-auto w-56 rounded-[1.75rem] border-[5px] border-black/80 shadow-2xl lg:hidden"
            />
          </li>
        ))}
      </ol>

      {/* Desktop: one sticky phone, screens crossfade */}
      <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
        <div className="sticky top-24 flex h-[calc(100dvh-8rem)] items-center justify-center gap-8">
          <div
            className="relative h-full max-h-[40rem] overflow-hidden rounded-[2.25rem] border-[6px] border-black/80 bg-black shadow-2xl"
            style={{ aspectRatio: `${frame.w} / ${frame.h}` }}
          >
            {beats.map((beat, i) => (
              <Image
                key={beat.title}
                src={beat.image.src}
                alt={beat.image.alt}
                fill
                sizes="20rem"
                className={cn(
                  "object-cover object-top transition-[opacity,scale,translate] duration-700 ease-out-expo",
                  active === i
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-4 scale-[0.97] opacity-0",
                )}
              />
            ))}
          </div>
          {/* Progress */}
          <ol aria-hidden="true" className="flex flex-col gap-2">
            {beats.map((beat, i) => (
              <li
                key={beat.title}
                className={cn(
                  "w-1 rounded-full transition-all duration-500 ease-out-expo",
                  active === i ? "h-8 bg-accent" : "h-2 bg-fg/25",
                )}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
