import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CapsuleColor = "orange" | "navy" | "green";

/**
 * Glass capsule with a live label (`.capsule` in globals.css). Purely
 * decorative by default; wrap it in a link to make it interactive.
 */
export function Capsule({
  color,
  icon,
  children,
  className,
  style,
}: {
  color: CapsuleColor;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span data-color={color} className={cn("capsule", className)} style={style}>
      {icon}
      <span>{children}</span>
    </span>
  );
}
