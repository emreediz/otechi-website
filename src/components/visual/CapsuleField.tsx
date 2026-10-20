"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ProductCapsule } from "@/lib/productCapsules";
import { Capsule } from "./Capsule";

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
};

/**
 * Floating product capsules around the hero headline. Each capsule pops in,
 * floats, drifts with the pointer (fine pointers, motion allowed) and links
 * to its product page.
 */
export function CapsuleField({
  items,
  spots,
  label,
  className,
}: {
  items: ProductCapsule[];
  spots: CapsuleSpot[];
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

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

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={cn("pointer-events-none absolute inset-0 z-[1]", className)}
    >
      <ul>
        {items.map((item, i) => {
          const s = spots[i];
          return (
            <li
              key={item.key}
              className="capsule-slot"
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
                    <Link
                      href={item.href}
                      className="capsule-link pointer-events-auto"
                    >
                      <Capsule color={item.color} icon={item.icon}>
                        {item.label}
                      </Capsule>
                    </Link>
                  </span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
