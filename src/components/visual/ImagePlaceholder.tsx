import { ImageIcon, MonitorSmartphone, Smartphone } from "lucide-react";
import { cn } from "@/lib/cn";

type Kind = "phone" | "panel" | "square";

const aspect: Record<Kind, string> = {
  phone: "aspect-[9/17]",
  panel: "aspect-[16/9]",
  square: "aspect-square",
};

const Icon: Record<Kind, typeof ImageIcon> = {
  phone: Smartphone,
  panel: MonitorSmartphone,
  square: ImageIcon,
};

/**
 * Designed placeholder shown until a real screenshot is available.
 * Intentionally polished — reads as part of the layout, not a broken image.
 * Never exposes file paths.
 */
export function ImagePlaceholder({
  kind = "phone",
  label,
  hint,
  className,
}: {
  kind?: Kind;
  label: string;
  hint?: string;
  className?: string;
}) {
  const Glyph = Icon[kind];
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-accent/35 bg-accent/[0.04] p-6 text-center",
        aspect[kind],
        className,
      )}
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Glyph className="size-5" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <span className="text-sm font-medium text-fg">{label}</span>
      {hint ? (
        <span className="max-w-[22ch] text-xs text-fg-muted">{hint}</span>
      ) : null}
    </div>
  );
}
