import { Clock } from "lucide-react";
import { cn } from "@/lib/cn";

/** Small pill used wherever a real link / value isn't available yet. */
export function ComingSoon({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-fg-muted",
        className,
      )}
    >
      <Clock className="size-3.5 shrink-0" aria-hidden="true" />
      {label}
    </span>
  );
}
