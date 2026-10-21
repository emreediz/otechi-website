import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ShowcaseItem } from "@/lib/showcase";
import { Reveal } from "@/components/motion/Reveal";

/** Page gutter shared with the top bar (edge-aligned layout). */
export const EDGE = "px-[clamp(1rem,2vw,1.75rem)]";

/**
 * Case-study header: the product name very large, then a row of facts
 * (label above value) along the bottom of the first screen.
 */
export function CaseHero({
  title,
  meta,
}: {
  title: string;
  meta: { label: string; value: string }[];
}) {
  return (
    <header className={cn(EDGE, "pb-12 pt-[clamp(8rem,16vw,13rem)] sm:pb-16")}>
      <h1 className="text-display-xl">
        <span className="hero-line">
          <span>{title}</span>
        </span>
      </h1>
      <dl className="hero-rise hero-rise-3 mt-[clamp(3.5rem,9vw,8rem)] grid gap-6 sm:grid-cols-3 md:grid-cols-[1fr_auto_auto] md:gap-x-[8vw]">
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="font-medium">{m.label}</dt>
            <dd className="mt-1 text-fg-soft">{m.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

/** Full-bleed media band that settles from a slight zoom when it shows. */
export function CaseMedia({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      variant="trigger"
      className={cn(
        "relative h-[min(100svh,58vw)] min-h-[26rem] overflow-hidden",
        className,
      )}
    >
      <div className="media-settle absolute inset-0">{children}</div>
    </Reveal>
  );
}

/** Small label on the left, large statement beside it. */
export function CaseText({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        EDGE,
        "grid gap-6 py-[clamp(5rem,11vw,10rem)] md:grid-cols-12",
        className,
      )}
    >
      <Reveal className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
        <h2>{label}</h2>
      </Reveal>
      <Reveal className="md:col-span-9 lg:col-span-7">{children}</Reveal>
    </section>
  );
}

/** Two media tiles side by side (stacked on phones). */
export function CaseTiles({
  tiles,
  className,
}: {
  tiles: ReactNode[];
  className?: string;
}) {
  return (
    <Reveal
      variant="trigger"
      className={cn(EDGE, "grid gap-3 md:grid-cols-2", className)}
    >
      {tiles.map((tile, i) => (
        <div
          key={i}
          className="stagger-item relative aspect-[4/5] overflow-hidden rounded-md bg-surface md:aspect-square"
        >
          {tile}
        </div>
      ))}
    </Reveal>
  );
}

/** A tinted stage that centres a coded mock-up inside a tile or band. */
export function MockStage({
  tone,
  children,
  className,
}: {
  tone: "ole" | "panel" | "namaz";
  children: ReactNode;
  className?: string;
}) {
  const bg = {
    ole: "bg-[radial-gradient(90%_80%_at_30%_100%,#7a2d00,#120600_70%)]",
    panel: "bg-[radial-gradient(90%_80%_at_70%_0%,#1d2b55,#05070d_70%)]",
    namaz: "bg-[radial-gradient(90%_80%_at_30%_0%,#0d5a43,#03140e_70%)]",
  }[tone];
  return (
    <div
      className={cn(
        "absolute inset-0 grid place-items-center p-[7%]",
        bg,
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Feature rows: title on the left, one line on the right, hairlines. */
export function CaseFeatures({
  label,
  items,
}: {
  label: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className={cn(EDGE, "grid gap-6 py-[clamp(5rem,11vw,10rem)] md:grid-cols-12")}>
      <Reveal className="text-sm text-fg-soft md:col-span-3 lg:col-span-2 lg:col-start-3">
        <h2>{label}</h2>
      </Reveal>
      <Reveal variant="trigger" className="md:col-span-9 lg:col-span-7">
        <ul className="border-t border-border">
          {items.map((item) => (
            <li
              key={item.title}
              className="stagger-item grid gap-2 border-b border-border py-6 sm:grid-cols-2 sm:gap-8"
            >
              <h3 className="text-title">{item.title}</h3>
              <p className="text-fg-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/** Closing link to the next product, with its picture on hover. */
export function NextProduct({
  label,
  item,
}: {
  label: string;
  item: ShowcaseItem;
}) {
  return (
    <section className={cn(EDGE, "border-t border-border pb-20 pt-10")}>
      <Link href={item.href} className="group relative block">
        <span className="text-sm text-fg-soft">{label}</span>
        <span className="mt-4 flex items-center justify-between gap-6">
          <span className="text-display-l">{item.label}</span>
          <ArrowRight
            className="size-10 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-2 sm:size-16"
            strokeWidth={1}
            aria-hidden="true"
          />
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[12%] top-1/2 hidden aspect-[4/3] w-[18rem] -translate-y-1/2 rotate-2 overflow-hidden rounded-md opacity-0 transition-[opacity,rotate] duration-500 ease-out-expo group-hover:rotate-0 group-hover:opacity-100 pointer-fine:block"
        >
          <Image
            src={item.image.src}
            alt=""
            fill
            sizes="18rem"
            className="object-cover"
          />
        </span>
      </Link>
    </section>
  );
}

/** Products as large rows (name, tags, arrow), picture on hover. */
export function ProductRows({
  items,
  tags,
}: {
  items: ShowcaseItem[];
  tags: Record<ShowcaseItem["key"], string>;
}) {
  return (
    <ul className="border-t border-border">
      {items.map((item) => (
        <li key={item.key} className="stagger-item border-b border-border">
          <Link
            href={item.href}
            className="group relative flex items-center justify-between gap-6 py-6 sm:py-8"
          >
            <span>
              <span className="block text-display-m">{item.label}</span>
              <span className="mt-2 block text-sm text-fg-soft">
                {tags[item.key]}
              </span>
            </span>
            <ArrowRight
              className="size-8 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-2"
              strokeWidth={1.25}
              aria-hidden="true"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[14%] top-1/2 z-10 hidden aspect-[4/3] w-[16rem] -translate-y-1/2 -rotate-2 overflow-hidden rounded-md opacity-0 transition-[opacity,rotate] duration-500 ease-out-expo group-hover:rotate-0 group-hover:opacity-100 pointer-fine:block"
            >
              <Image
                src={item.image.src}
                alt=""
                fill
                sizes="16rem"
                className="object-cover"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Product cover: the product artwork full screen (portrait art on phones
 * and portrait tablets, landscape on landscape screens from md), the name
 * very large on it (below it on phones), then the facts row. A product pill in the menu grows its preview frame into
 * this cover (`menu-expand` in globals.css).
 */
export function CaseCover({
  title,
  meta,
  portrait,
  landscape,
}: {
  title: string;
  meta: { label: string; value: string }[];
  portrait: ReactNode;
  landscape: ReactNode;
}) {
  return (
    <header>
      <div className="relative">
        <div className="relative h-[82svh] overflow-hidden bg-black md:h-svh">
          {/* Portrait art on phones and portrait tablets, landscape art
              on landscape screens from md. */}
          <div className="absolute inset-0 md:landscape:hidden">{portrait}</div>
          <div className="absolute inset-0 max-md:hidden md:portrait:hidden">
            {landscape}
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.6),transparent_40%)] max-md:bg-[linear-gradient(to_top,rgb(0_0_0/0.5),transparent_25%)]"
          />
        </div>
        <h1
          className={cn(
            EDGE,
            "pt-8 text-display-xl md:absolute md:inset-x-0 md:bottom-[clamp(1.5rem,4vw,3.5rem)] md:pt-0 md:text-white",
          )}
        >
          <span className="hero-line">
            <span>{title}</span>
          </span>
        </h1>
      </div>
      <dl
        className={cn(
          EDGE,
          "hero-rise hero-rise-3 grid gap-6 pb-4 pt-10 sm:grid-cols-3 md:grid-cols-[1fr_auto_auto] md:gap-x-[8vw] md:pt-12",
        )}
      >
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="font-medium">{m.label}</dt>
            <dd className="mt-1 text-fg-soft">{m.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
