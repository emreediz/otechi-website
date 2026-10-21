import { useId } from "react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

/**
 * Round national flag for the language picker (decorative; the control
 * carries the language name). Square crops of the official proportions.
 */
export function Flag({ locale, className }: { locale: Locale; className?: string }) {
  const clip = useId();
  if (locale === "tr") {
    return (
      <svg
        viewBox="100 0 800 800"
        aria-hidden="true"
        className={cn("block", className)}
      >
        <rect x="0" y="0" width="1200" height="800" fill="#E30A17" />
        <circle cx="425" cy="400" r="200" fill="#fff" />
        <circle cx="475" cy="400" r="160" fill="#E30A17" />
        <polygon
          fill="#fff"
          points="483.3,400 552.4,377.5 552.4,304.9 595.1,363.7 664.2,341.2 621.5,400 664.2,458.8 595.1,436.3 552.4,495.1 552.4,422.5"
        />
      </svg>
    );
  }
  // Union Jack
  return (
    <svg viewBox="15 0 30 30" aria-hidden="true" className={cn("block", className)}>
      <clipPath id={clip}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${clip})`}
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
