import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ShowcaseItem } from "@/lib/showcase";
import { Reveal } from "@/components/motion/Reveal";

/** Page gutter shared with the top bar (edge-aligned layout). */
export const EDGE = "px-[clamp(1rem,2vw,1.75rem)]";

/** Product colour of a tinted stage, card or panel. */
export type CaseTone = "ole" | "panel" | "namaz" | "iz";

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
  tone: CaseTone;
  children: ReactNode;
  className?: string;
}) {
  const bg = {
    ole: "bg-[radial-gradient(90%_80%_at_30%_100%,#7a2d00,#120600_70%)]",
    panel: "bg-[radial-gradient(90%_80%_at_70%_0%,#1d2b55,#05070d_70%)]",
    namaz: "bg-[radial-gradient(90%_80%_at_30%_0%,#0d5a43,#03140e_70%)]",
    iz: "bg-[radial-gradient(90%_80%_at_30%_0%,#3b2d86,#0d0b16_70%)]",
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

/**
 * Products as large rows (name, tags, arrow), picture on hover
 * (`previews={false}` turns the hover pictures off).
 */
export function ProductRows({
  items,
  tags,
  previews = true,
}: {
  items: ShowcaseItem[];
  tags: Record<ShowcaseItem["key"], string>;
  previews?: boolean;
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
            {previews ? (
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
            ) : null}
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

/** Large feature words sliding by (pauses for reduced motion). */
export function Marquee({ words }: { words: string[] }) {
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-[4vw] pr-[4vw]"
    >
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-[4vw]">
          <span
            className={cn(
              "whitespace-nowrap text-display-l",
              i % 2 === 1 && "text-transparent [-webkit-text-stroke:1.5px_var(--fg)]",
            )}
          >
            {w}
          </span>
          <span aria-hidden="true" className="size-3 rounded-full bg-accent" />
        </span>
      ))}
    </div>
  );
  return (
    <section className="marquee overflow-hidden border-y border-border py-[clamp(2rem,4vw,3.5rem)]">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}

/** Highlights grid: dark product-tinted cards with a visual and a line. */
export function Bento({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className={cn(EDGE, "py-[clamp(5rem,11vw,10rem)]")}>
      <Reveal>
        <h2 className="text-sm text-fg-soft">{label}</h2>
      </Reveal>
      <Reveal
        variant="trigger"
        className="mt-10 grid auto-rows-[minmax(17rem,auto)] gap-3 md:auto-rows-[minmax(22rem,auto)] md:grid-cols-2 lg:grid-cols-6"
      >
        {children}
      </Reveal>
    </section>
  );
}

export function BentoCard({
  title,
  body,
  visual,
  stat,
  tone,
  bleed = false,
  side = false,
  link,
  className,
}: {
  title: string;
  body: string;
  visual?: ReactNode;
  /** Big figure instead of a visual (e.g. "₺0"). */
  stat?: string;
  tone: CaseTone;
  /** Text first; the visual places itself and runs off the card's edges. */
  bleed?: boolean;
  /** Wide cards: text beside the visual on large screens. */
  side?: boolean;
  link?: { href: string; label: string };
  className?: string;
}) {
  const bg = {
    ole: "bg-[radial-gradient(100%_80%_at_70%_0%,#5a2200_0%,#1a0800_60%,#090302_100%)]",
    panel: "bg-[radial-gradient(100%_80%_at_70%_0%,#1d3577_0%,#0a1430_60%,#03060e_100%)]",
    namaz: "bg-[radial-gradient(100%_80%_at_30%_0%,#13684c_0%,#062a20_60%,#020d0a_100%)]",
    iz: "bg-[radial-gradient(100%_80%_at_30%_0%,#4a3aa8_0%,#1c1640_60%,#0d0b16_100%)]",
  }[tone];
  const lift =
    "transition-transform duration-700 ease-out-expo group-hover:-translate-y-1";
  return (
    <article
      data-surface="dark"
      className={cn(
        "stagger-item group relative flex flex-col overflow-hidden rounded-md text-white",
        side && "lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]",
        bg,
        className,
      )}
    >
      <div
        className={cn(
          "relative min-w-0 flex-1",
          bleed
            ? "order-2 min-h-[17rem] sm:min-h-[20rem]"
            : "grid place-items-center p-6 sm:p-8",
          side && "lg:order-2",
        )}
      >
        {stat ? (
          <p className="text-[clamp(7rem,28vw,10rem)] font-light leading-none tracking-[-0.05em] transition-transform duration-700 ease-out-expo group-hover:scale-105 md:text-[clamp(5rem,12vw,10rem)]">
            {stat}
          </p>
        ) : bleed ? (
          <div aria-hidden="true" className={cn("absolute inset-0", lift)}>
            {visual}
          </div>
        ) : (
          <div
            aria-hidden="true"
            className={cn(
              "grid w-full min-w-0 grid-cols-[minmax(0,1fr)] place-items-center",
              lift,
            )}
          >
            {visual}
          </div>
        )}
      </div>
      <div
        className={cn(
          "relative p-6 sm:p-8",
          bleed ? "order-1 pb-0 sm:pb-0" : "pt-0 sm:pt-0",
          side && "lg:order-1 lg:flex lg:flex-col lg:justify-end lg:pb-8 lg:pt-8",
        )}
      >
        <h3 className="text-title">{title}</h3>
        <p className="mt-2 max-w-[40ch] text-white/70">{body}</p>
        {link ? (
          <Link
            href={link.href}
            className="mt-5 inline-flex items-center gap-2 font-medium"
          >
            <span className="link-underline">{link.label}</span>
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Cards fanned out from the centre, the middle one in front. The side
 * cards move out by `--fan-x` (share of a card's width) and down by
 * `--fan-y`, and spread a little further on hover of the bento card.
 */
export function Fan({
  items,
  className,
  itemClassName,
}: {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  const mid = (items.length - 1) / 2;
  return (
    <div className={cn("relative", className)}>
      {items.map((item, i) => {
        const k = i - mid;
        return (
          <div
            key={i}
            className={cn(
              "absolute left-1/2 top-0 transition-[translate,rotate] duration-700 ease-out-expo",
              itemClassName,
            )}
            style={{
              translate: `calc(-50% + ${k} * var(--fan-x, 50%)) calc(${Math.abs(k)} * var(--fan-y, 1.5rem))`,
              rotate: `${k * 6}deg`,
              zIndex: 10 - Math.abs(k),
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Closing call to action on a product-coloured panel: a statement and
 * actions on the left; on the right an artwork piece that places itself
 * (absolutely) and may run off the panel's edges.
 */
export function CaseStart({
  label,
  statement,
  actions,
  art,
  tone,
}: {
  label: string;
  statement: string;
  actions: ReactNode;
  art: ReactNode;
  tone: CaseTone;
}) {
  const bg = {
    ole: "bg-[radial-gradient(90%_90%_at_85%_50%,#ff7a1a_0%,#a33a00_30%,#2a0d00_70%,#0b0401_100%)]",
    panel: "bg-[radial-gradient(90%_90%_at_85%_50%,#2f55b8_0%,#122760_35%,#050b1c_75%)]",
    namaz: "bg-[radial-gradient(90%_90%_at_85%_40%,#25a77a_0%,#0b4a36_40%,#020d0a_80%)]",
    iz: "bg-[radial-gradient(90%_90%_at_85%_40%,#7662c7_0%,#3b2d86_40%,#0d0b16_80%)]",
  }[tone];
  return (
    <section className={cn(EDGE, "pb-[clamp(5rem,11vw,10rem)]")}>
      <Reveal>
        <div
          data-surface="dark"
          className={cn(
            "relative grid overflow-hidden rounded-md text-white lg:grid-cols-[1.2fr_1fr]",
            bg,
          )}
        >
          <div className="relative z-10 p-6 sm:p-12 lg:p-16">
            <h2 className="text-sm text-white/70">{label}</h2>
            <p className="mt-6 max-w-[16ch] text-display-m text-balance">
              {statement}
            </p>
            <div className="mt-10">{actions}</div>
          </div>
          <div
            aria-hidden="true"
            className="relative h-48 overflow-hidden sm:h-80 lg:h-auto"
          >
            {art}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/**
 * Two photographs under a small label ("Real moments"), the first wider
 * on tablets and up, with an optional floating product chip over it.
 */
export function Moments({
  label,
  photos,
  chip,
}: {
  label: string;
  photos: { src: string }[];
  chip?: ReactNode;
}) {
  return (
    <section className="pb-[clamp(5rem,11vw,10rem)]">
      <Reveal className={EDGE}>
        <h2 className="mb-8 text-sm text-fg-soft">{label}</h2>
      </Reveal>
      <Reveal
        variant="trigger"
        className={cn(EDGE, "grid gap-3 md:grid-cols-[1.4fr_1fr]")}
      >
        {photos.map((p, i) => (
          <div
            key={p.src}
            className="stagger-item relative aspect-[4/5] overflow-hidden rounded-md bg-surface md:aspect-auto md:h-[min(44vw,42rem)]"
          >
            <Image
              src={p.src}
              alt=""
              fill
              sizes={i === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
              className="media-settle object-cover"
            />
            {i === 0 && chip ? (
              <div
                aria-hidden="true"
                className="art-float-slow absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto"
              >
                {chip}
              </div>
            ) : null}
          </div>
        ))}
      </Reveal>
    </section>
  );
}
