import type { ReactNode } from "react";
import { Capsule, type CapsuleColor } from "@/components/visual/Capsule";
import {
  CapsuleField,
  type CapsuleSpot,
  type FieldCapsule,
} from "@/components/visual/CapsuleField";

/**
 * Product page hero: the product capsule, a two-line display headline (the
 * product name is prepended for assistive tech), lead, actions and floating
 * feature capsules around it.
 */
export function ProductHero({
  name,
  color,
  icon,
  kicker,
  titleLines,
  lead,
  actions,
  capsules,
  spots,
  children,
}: {
  name: string;
  color: CapsuleColor;
  icon?: ReactNode;
  kicker: string;
  titleLines: string[];
  lead: string;
  actions: ReactNode;
  capsules: FieldCapsule[];
  spots: CapsuleSpot[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate -mt-24 grid min-h-[clamp(40rem,100svh,58rem)] place-items-center overflow-clip px-(--gutter) pb-40 pt-56 min-[720px]:pb-36 min-[720px]:pt-48 min-[1100px]:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(42%_30%_at_50%_72%,color-mix(in_oklab,var(--accent)_8%,transparent),transparent)]"
      />
      <CapsuleField items={capsules} spots={spots} />
      <div className="pointer-events-none relative z-[2] flex max-w-[68.75rem] flex-col items-center text-center">
        <div className="hero-rise hero-rise-1" aria-hidden="true">
          <Capsule color={color} icon={icon} className="[--h:3rem]">
            {name}
          </Capsule>
        </div>
        <p className="hero-rise hero-rise-1 mt-3 text-sm text-fg-soft">
          {kicker}
        </p>
        <h1 className="mt-6 text-display-xl">
          <span className="sr-only">{name} — </span>
          {titleLines.map((line) => (
            <span key={line} className="hero-line">
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-rise hero-rise-3 mx-auto mt-[clamp(1.25rem,2.6vw,2rem)] max-w-[36ch] text-lead text-fg-muted">
          {lead}
        </p>
        <div className="hero-rise hero-rise-4 pointer-events-auto mt-[clamp(1.75rem,3vw,2.5rem)] flex flex-wrap justify-center gap-3">
          {actions}
        </div>
        {children ? (
          <div className="hero-rise hero-rise-4 pointer-events-auto mt-6">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Six spots: two per side on desktop, top/bottom pairs on smaller screens. */
export const SPOTS_SIX: CapsuleSpot[] = [
  { x: "14%", y: "24%", tx: "18%", ty: "14%", mx: "26%", my: "15%", r: "-12deg", d: "0.1s", fo: "-1s", depth: 16 },
  { x: "86%", y: "20%", tx: "82%", ty: "17%", mx: "74%", my: "21%", r: "9deg", d: "0.2s", fo: "-4s", depth: 24 },
  { x: "8%", y: "55%", tx: "0", ty: "0", mx: "0", my: "0", r: "-5deg", s: 0.95, d: "0.3s", fo: "-6s", depth: 30, tablet: false },
  { x: "92%", y: "53%", tx: "0", ty: "0", mx: "0", my: "0", r: "-8deg", s: 0.95, d: "0.4s", fo: "-2s", depth: 20, tablet: false },
  { x: "17%", y: "84%", tx: "26%", ty: "88%", mx: "30%", my: "92%", r: "7deg", d: "0.5s", fo: "-8s", depth: 26 },
  { x: "82%", y: "86%", tx: "74%", ty: "86%", mx: "0", my: "0", r: "-6deg", d: "0.6s", fo: "-3s", depth: 18, phone: false },
];

/** Four spots: one per corner. */
export const SPOTS_FOUR: CapsuleSpot[] = [
  { x: "13%", y: "28%", tx: "18%", ty: "14%", mx: "26%", my: "15%", r: "-12deg", d: "0.1s", fo: "-1s", depth: 16 },
  { x: "87%", y: "26%", tx: "82%", ty: "17%", mx: "74%", my: "21%", r: "9deg", d: "0.25s", fo: "-4s", depth: 24 },
  { x: "15%", y: "80%", tx: "26%", ty: "88%", mx: "30%", my: "92%", r: "6deg", d: "0.4s", fo: "-7s", depth: 26 },
  { x: "85%", y: "82%", tx: "74%", ty: "86%", mx: "0", my: "0", r: "-7deg", d: "0.55s", fo: "-3s", depth: 18, phone: false },
];
