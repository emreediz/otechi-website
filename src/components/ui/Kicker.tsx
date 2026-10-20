import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small sentence-case label with the Otechi orange dot. */
export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-sm font-medium text-fg-muted",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-2 shrink-0 rounded-full bg-accent"
      />
      {children}
    </p>
  );
}
