import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Small pill label with the theme-accent dot (`.eyebrow` in globals.css).
 * Render it `as="h2"` when the label is the only heading of its section.
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
  return <Tag className={cn("eyebrow", className)}>{children}</Tag>;
}
