import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Kicker } from "./Kicker";

/**
 * Section heading: optional pill kicker, a large title (one or two lines —
 * a second line is set in the faint ink, like "… / … ") and an optional
 * lead. Centred by default.
 */
export function SectionHead({
  kicker,
  title,
  titleMuted,
  lead,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  /** Optional second line in the faint ink colour. */
  titleMuted?: ReactNode;
  lead?: ReactNode;
  align?: "center" | "start";
  as?: "h1" | "h2";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div
      className={cn(
        center ? "mx-auto max-w-4xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {kicker ? <Kicker className="mb-5">{kicker}</Kicker> : null}
      <Tag className="text-display-m text-balance">
        <span className="block">{title}</span>
        {titleMuted ? (
          <span className="block text-fg-faint">{titleMuted}</span>
        ) : null}
      </Tag>
      {lead ? (
        <p
          className={cn(
            "mt-5 max-w-[46ch] text-lead text-fg-soft",
            center && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
