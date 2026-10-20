import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centred content column: 1240px plus the fluid gutter on each side. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[calc(77.5rem+2*var(--gutter))] px-(--gutter)",
        className,
      )}
    >
      {children}
    </div>
  );
}
