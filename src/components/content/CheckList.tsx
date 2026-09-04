import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function CheckList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            className="mt-0.5 size-5 shrink-0 text-accent"
            aria-hidden="true"
            strokeWidth={2}
          />
          <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}
