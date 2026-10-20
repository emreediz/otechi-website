import Image from "next/image";
import { cn } from "@/lib/cn";

// Original wordmark (black ink) and a derived copy for dark backgrounds
// (ink turned white, orange mark unchanged). Aspect ratio ≈ 810 : 273.
const ON_LIGHT = "/images/brand/otechi-logo-primary-trimmed.svg";
const ON_DARK = "/images/brand/web/otechi-logo-light.png";
const RATIO_W = 810;
const RATIO_H = 273;

/**
 * Otechi wordmark. Height comes from `className` (e.g. "h-7"). Both
 * variants are rendered; CSS (`.logo-on-dark` / `.logo-on-light` in
 * globals.css) shows the one that matches the current surface or mode.
 */
export function Logo({
  className,
  eager = false,
}: {
  className?: string;
  /** Above-the-fold logo: load immediately instead of lazily. */
  eager?: boolean;
}) {
  const common = {
    width: RATIO_W,
    height: RATIO_H,
    loading: eager ? ("eager" as const) : undefined,
  };
  return (
    <>
      <Image
        {...common}
        alt="Otechi"
        src={ON_DARK}
        className={cn("logo-on-dark w-auto object-contain", className)}
      />
      <Image
        {...common}
        alt="Otechi"
        src={ON_LIGHT}
        className={cn("logo-on-light w-auto object-contain", className)}
      />
    </>
  );
}
