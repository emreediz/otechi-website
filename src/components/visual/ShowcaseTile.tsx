import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Contained dark "premium" panel that holds a product's 3D key art.
 *  - ole   -> navy tile, orange glow
 *  - namaz -> deep-green tile, green glow
 * Used sparingly; the surrounding pages stay light.
 */
export function ShowcaseTile({
  tone,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  priority = false,
  children,
  className,
}: {
  tone: "ole" | "namaz";
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  const bg = tone === "ole" ? "bg-tile-ole" : "bg-tile-namaz";
  const glow =
    tone === "ole"
      ? "bg-[radial-gradient(circle_at_50%_40%,rgba(253,94,0,0.35),transparent_62%)]"
      : "bg-[radial-gradient(circle_at_50%_45%,rgba(0,107,77,0.45),transparent_62%)]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 ring-1 ring-white/10 sm:p-8",
        bg,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0", glow)}
      />
      <div className="relative flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            width={imageWidth ?? 760}
            height={imageHeight ?? 760}
            priority={priority}
            className="anim-float-slow h-auto w-full max-w-[18rem] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
