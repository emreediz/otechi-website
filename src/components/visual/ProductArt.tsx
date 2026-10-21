import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import {
  Car,
  Flame,
  Heart,
  Laptop,
  Leaf,
  Megaphone,
  QrCode,
  Sun,
  Users,
  Wifi,
} from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { cn } from "@/lib/cn";

type Mock = Dictionary["mock"];
export type ArtLayout = "portrait" | "landscape";

/*
 * Product artworks for the menu frame, the home stage and the product page
 * covers. The background fills the whole box; the composition sits on a
 * fixed-ratio board (3:4 portrait, 16:10 landscape) centred in it, so the
 * layout never depends on the box's own proportions. Inside the board,
 * placement and widths use `cqw`, type/padding/icons use `cqmin` (with
 * pixel minimums for legibility). Floating motion sits on inner wrappers so
 * it never fights the centring `translate`. Decorative: aria-hidden.
 */

const TOKEN = {
  src: "/images/products/ole/web/token-1080.webp",
  w: 1080,
  h: 1080,
};

/** Background, full-bleed decor, the label, and the centred board. */
function Stage({
  bg,
  layout,
  cover,
  label,
  decor,
  className,
  children,
}: {
  bg: string;
  layout: ArtLayout;
  cover?: boolean;
  label: string;
  decor?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const portrait = layout === "portrait";
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden", bg, className)}
    >
      {decor}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 top-0 grid place-items-center [container-type:size]",
          // Covers: start below the site bar; from md the title sits on the
          // art, so keep the composition out of the title band.
          cover &&
            "top-[4.25rem] md:bottom-[min(13vw,13rem)] md:portrait:bottom-[min(30vw,19rem)]",
        )}
      >
        <span className="absolute left-[4cqmin] top-[4cqmin] z-20 rounded-full bg-white/15 px-[2.4cqmin] py-[1cqmin] text-[max(2.2cqmin,10px)] font-medium tracking-wide text-white backdrop-blur-md">
          {label}
        </span>
        <div
          className={cn(
            "relative [container-type:size]",
            portrait
              ? "aspect-[3/4] w-[min(100cqw,75cqh)]"
              : "aspect-[16/10] w-[min(100cqw,160cqh)]",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/** Positioned wrapper (may centre with translate) + floating inner layer. */
function Float({
  className,
  slow = false,
  delay,
  children,
}: {
  className?: string;
  slow?: boolean;
  delay?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("absolute", className)}>
      <div
        className={slow ? "art-float-slow" : "art-float"}
        style={delay ? ({ "--float-delay": delay } as CSSProperties) : undefined}
      >
        {children}
      </div>
    </div>
  );
}

function Token({
  className,
  delay,
  priority = false,
  small = false,
}: {
  className?: string;
  delay?: string;
  priority?: boolean;
  /** Small background tokens use the lighter 640px copy. */
  small?: boolean;
}) {
  return (
    <Float className={className} delay={delay}>
      <Image
        src={small ? IMG.ole.art : TOKEN.src}
        alt=""
        width={small ? IMG.ole.artW : TOKEN.w}
        height={small ? IMG.ole.artH : TOKEN.h}
        sizes={small ? "10vw" : "50vw"}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        className="w-full drop-shadow-[0_3cqmin_6cqmin_rgb(253_94_0/0.45)]"
      />
    </Float>
  );
}

const pct = (copy: Mock, n: number) => copy.percent.replace("{n}", String(n));

/* ------------------------------------------------------------------ */
/* Ole — the customer app: glass token + the Ole Coffee business card. */
/* ------------------------------------------------------------------ */

/** The app's business card, redrawn crisp; sized relative to its width. */
function BusinessCard({ copy }: { copy: Mock["ole"] }) {
  const icons = [
    { Icon: Wifi, on: true },
    { Icon: Laptop, on: true },
    { Icon: Users, on: false },
    { Icon: Car, on: false },
    { Icon: Leaf, on: true },
    { Icon: Sun, on: true },
  ];
  return (
    <div className="@container flex overflow-hidden rounded-[4cqw] bg-white text-left text-[#0b0b0b] shadow-[0_4cqw_10cqw_-2cqw_rgb(0_0_0/0.55)] ring-1 ring-black/5">
      <div className="relative w-[36%] shrink-0">
        <Image
          src={IMG.ole.cafePhoto}
          alt=""
          fill
          sizes="25vw"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1 px-[4cqw] py-[3.6cqw]">
        <div className="flex items-start gap-[2.4cqw]">
          <span className="grid size-[9cqw] shrink-0 place-items-center rounded-full bg-[#fd5e00]">
            <span className="size-[45%] rounded-full border-[1.4cqw] border-white" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[max(4.4cqw,12px)] font-semibold leading-tight">
              Ole Coffee
            </span>
            <span className="block truncate text-[max(3cqw,9.5px)] text-[#8a8f9c]">
              {copy.category}
            </span>
          </span>
          <Heart
            className="size-[4.6cqw] shrink-0 text-[#e5484d]"
            strokeWidth={2}
          />
        </div>
        <p className="mt-[2.6cqw] flex items-center gap-[1.2cqw] text-[max(3.4cqw,10px)] font-medium text-[#fd5e00]">
          <Image
            src={IMG.ole.logo}
            alt=""
            width={IMG.ole.logoW}
            height={IMG.ole.logoH}
            className="h-[3.2cqw] w-auto"
          />
          {copy.jeton}
        </p>
        <p className="mt-[1.4cqw] text-[max(3cqw,9.5px)] text-[#8a8f9c]">
          {copy.moreCampaigns}
        </p>
        <div className="mt-[3cqw] flex items-center gap-[2.6cqw]">
          {icons.map(({ Icon, on }, i) => (
            <Icon
              key={i}
              className={cn(
                "size-[3.4cqw]",
                on ? "text-[#fd5e00]" : "text-[#8a8f9c]",
              )}
              strokeWidth={2.2}
            />
          ))}
          <span className="ml-auto flex items-center gap-[1cqw] text-[max(3cqw,9.5px)] font-medium text-[#3fb950]">
            <span className="size-[2.2cqw] rounded-full bg-[#3fb950]" />
            {copy.open}
          </span>
        </div>
        <div className="mt-[2.4cqw] flex items-center justify-between border-t-[0.5cqw] border-[#eef0f3] pt-[2.4cqw] text-[max(2.8cqw,9px)]">
          <span className="truncate">{copy.address}</span>
          <span className="shrink-0 pl-[2cqw]">{copy.distance}</span>
        </div>
      </div>
    </div>
  );
}

type ArtProps = {
  copy: Mock;
  layout: ArtLayout;
  /** On a page cover: keep clear of the site bar and the title. */
  cover?: boolean;
  priority?: boolean;
  className?: string;
};

export function OleArt({ copy, layout, cover, priority, className }: ArtProps) {
  const portrait = layout === "portrait";
  return (
    <Stage
      layout={layout}
      cover={cover}
      label={copy.ole.appLabel}
      className={className}
      bg="bg-[radial-gradient(120%_85%_at_50%_0%,#ff8a2a_0%,#a33a00_26%,#2a0d00_58%,#080301_100%)]"
      decor={
        <div className="absolute inset-0 bg-[radial-gradient(45%_32%_at_50%_30%,rgb(255_180_90/0.32),transparent_70%)]" />
      }
    >
      {/* Depth: two small tokens, slightly out of focus */}
      <Token
        small
        delay="-2s"
        className={
          portrait
            ? "left-[6%] top-[38%] w-[11cqw] blur-[0.4cqmin]"
            : "right-[5%] top-[7%] w-[5cqw] blur-[0.3cqmin]"
        }
      />
      <Token
        small
        delay="-5s"
        className={
          portrait
            ? "right-[7%] top-[12%] w-[8cqw] opacity-80 blur-[0.6cqmin]"
            : "bottom-[7%] left-[44%] w-[4.5cqw] opacity-80 blur-[0.5cqmin]"
        }
      />

      <Token
        priority={priority}
        className={
          portrait
            ? "left-1/2 top-[6%] w-[54cqw] -translate-x-1/2"
            : "left-[6%] top-1/2 w-[34cqw] -translate-y-1/2"
        }
      />

      {/* "+1 token" bubble near the big token */}
      <span
        className={cn(
          "art-pop absolute z-10 flex items-center gap-[1.2cqmin] rounded-full bg-white px-[2.4cqmin] py-[1.2cqmin] text-[max(2.6cqmin,10px)] font-semibold text-[#fd5e00] shadow-lg",
          portrait ? "right-[9%] top-[35%]" : "left-[33%] top-[15%]",
        )}
      >
        <Image
          src={IMG.ole.token}
          alt=""
          width={96}
          height={96}
          className="size-[max(3.6cqmin,12px)]"
        />
        {copy.ole.earned}
      </span>

      <Float
        slow
        delay="-3s"
        className={
          portrait
            ? "bottom-[5%] left-1/2 w-[88cqw] -translate-x-1/2"
            : "right-[4%] top-1/2 w-[50cqw] -translate-y-1/2"
        }
      >
        <div className="-rotate-3">
          <BusinessCard copy={copy.ole} />
        </div>
      </Float>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Ole Panel — the glass token surrounded by dashboard graphics.       */
/* ------------------------------------------------------------------ */

const BARS = [0.42, 0.55, 0.48, 0.7, 0.62, 0.9, 0.78];

function GlassCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: string;
  children: ReactNode;
}) {
  return (
    <Float slow delay={delay} className={cn("z-10", className)}>
      <div className="rounded-[2.6cqmin] border border-white/15 bg-white/[0.08] p-[2.8cqmin] text-white shadow-[0_3cqmin_8cqmin_-2cqmin_rgb(0_0_0/0.6)] backdrop-blur-md">
        {children}
      </div>
    </Float>
  );
}

const small = "text-[max(2.4cqmin,10.5px)] text-white/70";

export function PanelArt({ copy, layout, cover, priority, className }: ArtProps) {
  const p = copy.panel;
  const portrait = layout === "portrait";
  const ring = 62;
  return (
    <Stage
      layout={layout}
      cover={cover}
      label={p.appLabel}
      className={className}
      bg="bg-[radial-gradient(95%_70%_at_50%_40%,#22408f_0%,#0b1838_42%,#03060e_100%)]"
      decor={
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(70%_60%_at_50%_45%,#000,transparent)]" />
      }
    >
      <Token
        priority={priority}
        className={
          portrait
            ? "left-1/2 top-[30%] w-[40cqw] -translate-x-1/2"
            : "left-1/2 top-1/2 w-[23cqw] -translate-x-1/2 -translate-y-1/2"
        }
      />

      {/* KPI */}
      <GlassCard
        delay="-1s"
        className={
          portrait
            ? "left-[6%] top-[8%] w-[42cqw]"
            : "left-[5%] top-[10%] w-[26cqw]"
        }
      >
        <p className={cn("flex items-center gap-[1.2cqmin] whitespace-nowrap", small)}>
          <QrCode className="size-[max(2.8cqmin,12px)] shrink-0" />
          {p.kpis[0].label}
        </p>
        <p className="mt-[1cqmin] text-[7cqmin] font-light leading-none tabular-nums">
          {p.kpis[0].value}
        </p>
        <svg
          viewBox="0 0 100 24"
          className="mt-[1.6cqmin] w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 20 L14 16 L28 18 L42 11 L56 13 L70 6 L84 8 L100 2"
            pathLength={100}
            strokeDasharray="100 100"
            fill="none"
            stroke="#fd5e00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="art-draw"
          />
        </svg>
      </GlassCard>

      {/* Reward ring */}
      <GlassCard
        delay="-4s"
        className={
          portrait
            ? "right-[6%] top-[14%] w-[30cqw]"
            : "right-[6%] top-[8%] w-[19cqw]"
        }
      >
        <svg viewBox="0 0 40 40" className="mx-auto w-[66%] -rotate-90">
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="rgb(255 255 255 / 0.15)"
            strokeWidth="4"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="#fd5e00"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={`${ring} 100`}
            className="art-draw"
          />
        </svg>
        <p className="mt-[1cqmin] text-center text-[4.4cqmin] font-light leading-none tabular-nums">
          {pct(copy, ring)}
        </p>
        <p className={cn("mt-[0.8cqmin] whitespace-nowrap text-center", small)}>
          {p.rewardRate}
        </p>
      </GlassCard>

      {/* Campaign: title + status on top, the name on its own line */}
      <GlassCard
        delay="-2.5s"
        className={
          portrait
            ? "left-[5%] top-[63%] w-[60cqw]"
            : "left-[5%] top-[56%] w-[29cqw]"
        }
      >
        <p className={cn("flex items-center justify-between gap-[2cqmin]", small)}>
          <span className="flex items-center gap-[1.4cqmin]">
            <Megaphone className="size-[max(2.8cqmin,12px)] text-[#fd5e00]" />
            {p.campaignsTitle}
          </span>
          <span className="flex shrink-0 items-center gap-[0.8cqmin] rounded-full bg-[#12a150]/25 px-[1.6cqmin] py-[0.5cqmin] text-[max(2.2cqmin,10px)] text-[#6ee7a0]">
            <span className="size-[1.4cqmin] rounded-full bg-[#3fdc85]" />
            {p.live}
          </span>
        </p>
        <p className="mt-[1.4cqmin] text-[max(2.8cqmin,11px)] leading-snug">
          {p.campaigns[0]}
        </p>
      </GlassCard>

      {/* Token activity bars */}
      <GlassCard
        delay="-6s"
        className={
          portrait
            ? "bottom-[4%] left-1/2 w-[86cqw] -translate-x-1/2"
            : "bottom-[8%] right-[6%] w-[30cqw]"
        }
      >
        <p className={small}>{p.chartTitle}</p>
        <div
          className={cn(
            "mt-[1.8cqmin] flex items-end gap-[1.4cqmin]",
            portrait ? "h-[10cqmin]" : "h-[12cqmin]",
          )}
        >
          {BARS.map((v, i) => (
            <span
              key={i}
              className={cn(
                "art-bar flex-1 origin-bottom rounded-t-[0.8cqmin]",
                i === 5 ? "bg-[#fd5e00]" : "bg-white/25",
              )}
              style={{ height: `${v * 100}%`, "--i": i } as CSSProperties}
            />
          ))}
        </div>
      </GlassCard>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Namaz Motivasyonu — a calm night sky, today's intention and the ring */
/* of the five prayers.                                                 */
/* ------------------------------------------------------------------ */

type Box = [number, number, number, number];

/** Deterministic star field (no randomness between renders). */
const STARS = Array.from({ length: 46 }, (_, i) => ({
  x: (i * 37 + 11) % 100,
  y: (i * 53 + 7) % 100,
  s: 0.3 + ((i * 29) % 5) / 10,
  d: (i % 6) * 0.7,
}));

/** Stars as percentages of their box; none inside the `avoid` boxes. */
function StarField({
  unit,
  avoid = [],
}: {
  unit: "cqmin" | "px";
  avoid?: Box[];
}) {
  const stars = STARS.filter(
    (st) =>
      !avoid.some(
        ([x1, y1, x2, y2]) => st.x >= x1 && st.x <= x2 && st.y >= y1 && st.y <= y2,
      ),
  );
  return (
    <>
      {stars.map((st, i) => {
        const size = unit === "px" ? `${st.s * 4}px` : `max(${st.s}cqmin, 1.5px)`;
        return (
          <span
            key={i}
            className="art-twinkle absolute rounded-full bg-white"
            style={
              {
                left: `${st.x}%`,
                top: `${st.y}%`,
                width: size,
                height: size,
                "--twinkle-delay": `${st.d}s`,
              } as CSSProperties
            }
          />
        );
      })}
    </>
  );
}

const MINT = "#5fd9ab";

export function NamazArt({ copy, layout, cover, className }: ArtProps) {
  const n = copy.namaz;
  const portrait = layout === "portrait";
  const done = 3;
  const R = 44;
  // Five markers in the middle of each fifth, so 3/5 reads as three dots.
  const markers = Array.from({ length: 5 }, (_, i) => {
    const a = (-90 + 36 + i * 72) * (Math.PI / 180);
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a), on: i < done };
  });

  const streak = (
    <p className="inline-flex items-center gap-[1.4cqmin] whitespace-nowrap rounded-full bg-white/10 px-[3cqmin] py-[1.4cqmin] text-[max(2.8cqmin,10.5px)] text-white backdrop-blur">
      <Flame className="size-[max(3.2cqmin,12px)] text-[#8fe3c4]" />
      <span className="font-semibold tabular-nums">{n.streakCount}</span>
      <span className="text-white/75">{n.streak}</span>
    </p>
  );

  return (
    <Stage
      layout={layout}
      cover={cover}
      label={n.appLabel}
      className={className}
      bg="bg-[radial-gradient(110%_75%_at_50%_0%,#1f8f68_0%,#0b4a36_32%,#04211a_68%,#020d0a_100%)]"
    >
      <StarField
        unit="cqmin"
        avoid={
          portrait
            ? [
                [4, 1, 96, 22],
                [14, 22, 86, 72],
                [14, 80, 86, 99],
              ]
            : [
                [4, 22, 52, 78],
                [56, 12, 94, 88],
              ]
        }
      />

      {/* Faint arch, the app's motif, as line art (runs off the bottom) */}
      <svg
        viewBox="0 0 100 120"
        className={cn(
          "absolute overflow-visible text-white/[0.07]",
          portrait
            ? "left-1/2 top-[17%] w-[92cqw] -translate-x-1/2"
            : "right-[4%] top-[3%] w-[44cqw]",
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M10 400 V58 C10 34 34 22 50 6 C66 22 90 34 90 58 V400" />
        <path d="M24 400 V62 C24 46 40 36 50 26 C60 36 76 46 76 62 V400" />
      </svg>

      {/* Today's intention */}
      <div
        className={cn(
          "absolute z-10 text-white",
          portrait
            ? "inset-x-[8%] top-[4%] text-center"
            : "left-[6%] top-1/2 w-[44cqw] -translate-y-1/2",
        )}
      >
        <p className="text-[max(2.2cqmin,10px)] font-medium uppercase tracking-[0.25em] text-[#8fe3c4]">
          {n.intentLabel}
        </p>
        <p
          className={cn(
            "mt-[2cqmin] text-balance font-light leading-[1.1] tracking-[-0.03em]",
            portrait ? "text-[6.4cqmin]" : "text-[7cqmin]",
          )}
        >
          {n.intent}
        </p>
        {!portrait ? <div className="mt-[3.5cqmin]">{streak}</div> : null}
      </div>

      {/* Ring of the five prayers */}
      <div
        className={cn(
          "absolute",
          portrait
            ? "left-1/2 top-[24%] w-[60cqw] -translate-x-1/2"
            : "right-[9%] top-1/2 w-[32cqw] -translate-y-1/2",
        )}
      >
        <div className="absolute inset-[12%] rounded-full bg-[#2bc78f]/20 blur-[6cqmin]" />
        <svg viewBox="0 0 100 100" className="relative w-full overflow-visible">
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="rgb(255 255 255 / 0.12)"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke={MINT}
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={`${(done / 5) * 100} 100`}
            transform="rotate(-90 50 50)"
            className="art-draw"
          />
          {markers.map((m, i) => (
            <circle
              key={i}
              cx={m.x}
              cy={m.y}
              r={m.on ? 3.2 : 2.6}
              fill={m.on ? "#bdf5df" : "#04211a"}
              stroke={m.on ? "none" : "rgb(255 255 255 / 0.35)"}
              strokeWidth="0.8"
            />
          ))}
        </svg>
        <div className="absolute inset-0 grid place-content-center text-center text-white">
          <p className="text-[11cqmin] font-light leading-none tracking-[-0.04em] tabular-nums">
            {pct(copy, (done / 5) * 100)}
          </p>
          <p className="mt-[1.4cqmin] text-[max(2.6cqmin,10px)] text-white/75">
            {n.done.replace("{n}", String(done))}
          </p>
        </div>
      </div>

      {portrait ? (
        <div className="absolute inset-x-0 bottom-[5%] flex flex-col items-center gap-[3cqmin]">
          {streak}
          <div className="flex gap-[2.2cqmin]">
            {n.days.map((d, i) => (
              <span key={i} className="flex flex-col items-center gap-[1cqmin]">
                <span
                  className={cn(
                    "size-[4.4cqmin] rounded-full",
                    i < 5
                      ? "bg-[#8fe3c4] shadow-[0_0_1.6cqmin_#2bc78f]"
                      : "border border-white/30",
                  )}
                />
                <span className="text-[max(2.2cqmin,9px)] text-white/60">{d}</span>
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </Stage>
  );
}

/** Tiny square thumbnail for the menu news cards. */
export function ArtThumb({ kind }: { kind: "ole" | "panel" | "namaz" }) {
  const bg = {
    ole: "bg-[radial-gradient(90%_90%_at_50%_20%,#ff8a2a,#2a0d00)]",
    panel: "bg-[radial-gradient(90%_90%_at_50%_40%,#22408f,#03060e)]",
    namaz: "bg-[radial-gradient(90%_90%_at_50%_10%,#1f8f68,#020d0a)]",
  }[kind];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid size-16 shrink-0 place-items-center overflow-hidden rounded",
        bg,
      )}
    >
      {kind === "ole" ? (
        <Image
          src={IMG.ole.token}
          alt=""
          width={96}
          height={96}
          className="size-10 drop-shadow-[0_4px_8px_rgb(0_0_0/0.5)]"
        />
      ) : null}
      {kind === "panel" ? (
        <span className="flex h-7 items-end gap-1">
          {BARS.slice(1, 6).map((v, i) => (
            <span
              key={i}
              className={cn(
                "w-1.5 rounded-t-sm",
                i === 4 ? "bg-[#fd5e00]" : "bg-white/40",
              )}
              style={{ height: `${v * 100}%` }}
            />
          ))}
        </span>
      ) : null}
      {kind === "namaz" ? (
        <svg viewBox="0 0 40 40" className="w-10 -rotate-90">
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke="rgb(255 255 255 / 0.18)"
            strokeWidth="3"
          />
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke="#8fe3c4"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="60 100"
          />
        </svg>
      ) : null}
    </span>
  );
}

/** Full-screen, quiet backdrop for the home stage (no cards, no text). */
export function ArtBackdrop({ kind }: { kind: "ole" | "namaz" }) {
  if (kind === "ole") {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden bg-[radial-gradient(80%_70%_at_25%_85%,#7a2a00_0%,#260c00_45%,#050201_100%)]"
      >
        <div className="stage-media absolute -right-[8%] top-1/2 w-[min(70vw,70svh)] -translate-y-1/2 opacity-40 blur-[3px]">
          <Image
            src={IMG.ole.art}
            alt=""
            width={IMG.ole.artW}
            height={IMG.ole.artH}
            sizes="70vw"
            className="w-full"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.75),transparent_55%)]" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-[radial-gradient(90%_70%_at_70%_0%,#1f8f68_0%,#0b4a36_30%,#04211a_65%,#020d0a_100%)]"
    >
      {/* Stars only in the upper sky, away from the slide's text. */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_25%,transparent_50%)]">
        <StarField unit="px" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.7),transparent_55%)]" />
    </div>
  );
}
