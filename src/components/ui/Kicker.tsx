import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Small, quiet section label (soft ink). Render it `as="h2"` when the
 * label is the only heading of its section.
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
    <Tag className={cn("text-sm text-fg-soft", className)}>{children}</Tag>
  );
}
