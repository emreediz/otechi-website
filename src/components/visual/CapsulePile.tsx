import type { CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Capsule, type CapsuleColor } from "./Capsule";
import type { FieldCapsule } from "./CapsuleField";

type Piece = { l: string; b: string; r: string; z?: number };

/** Labelled capsules first, then blank capsules that only fill the pile. */
const PIECES: Piece[] = [
  { l: "6%", b: "4%", r: "-10deg", z: 2 },
  { l: "37%", b: "30%", r: "7deg", z: 3 },
  { l: "56%", b: "2%", r: "-4deg", z: 2 },
  { l: "28%", b: "-6%", r: "14deg", z: 1 },
  { l: "84%", b: "22%", r: "-16deg", z: 1 },
  { l: "76%", b: "-8%", r: "5deg", z: 1 },
];

/**
 * A pile of glass capsules resting on the bottom edge of the closing
 * section. Capsules with `href` link to their pages and lift on hover;
 * without links the pile is decorative.
 */
export function CapsulePile({
  items,
  fillers = ["navy", "orange"],
  label,
  className,
}: {
  items: FieldCapsule[];
  /** Colours of the blank filler capsules. */
  fillers?: CapsuleColor[];
  label?: string;
  className?: string;
}) {
  const links = items.some((item) => item.href);
  return (
    <div
      className={cn(
        "capsule-pile relative mx-auto mt-12 h-[clamp(10.5rem,22vw,17.5rem)] max-w-[80rem] sm:mt-20",
        className,
      )}
    >
      {links ? (
        <nav aria-label={label}>
          <ul>
            {items.map((item, i) => (
              <li
                key={item.key}
                className="capsule-piece"
                style={pieceStyle(PIECES[i])}
              >
                {item.href ? (
                  <Link href={item.href} className="capsule-link">
                    <Capsule color={item.color} icon={item.icon}>
                      {item.label}
                    </Capsule>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        items.map((item, i) => (
          <span
            key={item.key}
            aria-hidden="true"
            className="capsule-piece"
            style={pieceStyle(PIECES[i])}
          >
            <Capsule color={item.color} icon={item.icon}>
              {item.label}
            </Capsule>
          </span>
        ))
      )}
      {fillers.slice(0, PIECES.length - items.length).map((color, i) => (
        <span
          key={`${color}-${i}`}
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
