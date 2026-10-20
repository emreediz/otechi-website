import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Small sentence-case label with the Otechi orange dot. Render it `as="h2"`
 * when the label is the only heading of its section.
 */
export function Kicker({
  as: Tag = "p",
  children,
  className,
}: {
  as?: "p" | "h2";
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
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
    </Tag>
  );
}
