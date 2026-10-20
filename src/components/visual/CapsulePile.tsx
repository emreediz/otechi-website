import type { CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ProductCapsule } from "@/lib/productCapsules";
import { Capsule, type CapsuleColor } from "./Capsule";

type Piece = { l: string; b: string; r: string; z?: number };

/** Product capsules first, then two blank capsules that only fill the pile. */
const PIECES: Piece[] = [
  { l: "6%", b: "4%", r: "-10deg", z: 2 },
  { l: "37%", b: "30%", r: "7deg", z: 3 },
  { l: "56%", b: "2%", r: "-4deg", z: 2 },
  { l: "28%", b: "-6%", r: "14deg", z: 1 },
  { l: "84%", b: "22%", r: "-16deg", z: 1 },
];
const FILLERS: CapsuleColor[] = ["navy", "orange"];

/**
 * A pile of glass capsules resting on the bottom edge of the closing
 * section. The product capsules link to their pages and lift on hover.
 */
export function CapsulePile({
  items,
  label,
  className,
}: {
  items: ProductCapsule[];
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "capsule-pile relative mx-auto mt-12 h-[clamp(10.5rem,22vw,17.5rem)] max-w-[80rem] sm:mt-20",
        className,
      )}
    >
      <nav aria-label={label}>
        <ul>
          {items.map((item, i) => (
            <li
              key={item.key}
              className="capsule-piece"
              style={pieceStyle(PIECES[i])}
            >
              <Link href={item.href} className="capsule-link">
                <Capsule color={item.color} icon={item.icon}>
                  {item.label}
                </Capsule>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {FILLERS.map((color, i) => (
        <span
          key={color}
          aria-hidden="true"
          className="capsule-piece"
          style={pieceStyle(PIECES[items.length + i])}
        >
          <Capsule color={color} className="w-[calc(var(--h)*3.2)]">
            {""}
          </Capsule>
        </span>
      ))}
    </div>
  );
}

function pieceStyle(p: Piece): CSSProperties {
  return {
    left: p.l,
    bottom: p.b,
    zIndex: p.z,
    "--r": p.r,
  } as CSSProperties;
}
