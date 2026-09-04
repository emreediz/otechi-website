import Image from "next/image";
import { cn } from "@/lib/cn";

// Trimmed derivative of otechi-logo-primary.svg (transparent canvas removed only).
// True aspect ratio ≈ 810 : 272.62.
const SRC = "/images/brand/otechi-logo-primary-trimmed.svg";
const RATIO_W = 810;
const RATIO_H = 273;

/**
 * Otechi wordmark. Height is controlled via `className` (e.g. "h-7");
 * width stays auto and the image is shown with object-contain so the
 * original proportions are never distorted.
 */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={SRC}
      alt="Otechi"
      width={RATIO_W}
      height={RATIO_H}
      priority={priority}
      className={cn("w-auto object-contain", className)}
    />
  );
}
