"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Capsule, type CapsuleColor } from "./Capsule";

/** A capsule in the field; with `href` it is a link, otherwise decoration. */
export type FieldCapsule = {
  key: string;
  color: CapsuleColor;
  label: string;
  icon?: ReactNode;
  href?: string;
};

/**
 * Where a capsule sits: desktop `x/y`, tablet `tx/ty`, phone `mx/my`
 * (percentages of the field), rotation `r`, scale `s`, entrance delay `d`,
 * float offset `fo` and parallax `depth` (px at the field edge).
 */
export type CapsuleSpot = {
  x: string;
  y: string;
  tx: string;
  ty: string;
  mx: string;
  my: string;
  r: string;
  s?: number;
  d: string;
  fo: string;
  depth: number;
  /** false: hidden on phones (not enough room above/below the headline). */
  phone?: boolean;
  /** false: hidden below the desktop layout (side spots beside the text). */
  tablet?: boolean;
};

/**
 * Floating capsules around a hero headline. Each capsule pops in, floats
 * and drifts with the pointer (fine pointers, motion allowed). Product
 * capsules link to their pages (a labelled nav); feature capsules are
 * decorative and hidden from assistive technology.
 */
export function CapsuleField({
  items,
  spots,
  label,
  className,
}: {
  items: FieldCapsule[];
  spots: CapsuleSpot[];
  /** Accessible name of the nav when the capsules are links. */
  label?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const links = items.some((item) => item.href);

  useEffect(() => {
    const field = ref.current;
    const host = field?.parentElement;
    if (!field || !host) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    let raf = 0;
    const set = (px: number, py: number) => {
      field.style.setProperty("--px", px.toFixed(3));
      field.style.setProperty("--py", py.toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        set(
          ((e.clientX - r.left) / r.width) * 2 - 1,
          ((e.clientY - r.top) / r.height) * 2 - 1,
        );
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      set(0, 0);
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const list = (
    <ul>
      {items.map((item, i) => {
        const s = spots[i];
        return (
          <li
            key={item.key}
            className={cn(
              "capsule-slot",
              s.phone === false && "max-[719px]:hidden",
            )}
            style={
              {
                "--x": s.x,
                "--y": s.y,
                "--tx": s.tx,
                "--ty": s.ty,
                "--mx": s.mx,
                "--my": s.my,
                "--r": s.r,
                "--s": s.s ?? 1,
                "--depth": s.depth,
              } as CSSProperties
            }
          >
            <div
              className="capsule-enter"
              style={{ "--d": s.d } as CSSProperties}
            >
              <span
                className="capsule-float"
                style={{ "--fo": s.fo } as CSSProperties}
              >
                <span className="capsule-parallax">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="capsule-link pointer-events-auto"
                    >
                      <Capsule color={item.color} icon={item.icon}>
                        {item.label}
                      </Capsule>
                    </Link>
                  ) : (
                    <Capsule color={item.color} icon={item.icon}>
                      {item.label}
                    </Capsule>
                  )}
                </span>
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      ref={ref}
      aria-hidden={links ? undefined : true}
      className={cn("pointer-events-none absolute inset-0 z-[1]", className)}
    >
      {links ? <nav aria-label={label}>{list}</nav> : list}
    </div>
  );
}
