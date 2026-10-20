import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type StoreItem = { label: string; href: string };

/** App store links as pills (new tab, announced to screen readers). */
export function StoreLinks({
  items,
  newTabLabel,
  className,
}: {
  items: StoreItem[];
  newTabLabel?: string;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-fg/20 px-5 text-sm font-medium transition-colors hover:border-fg hover:bg-fg hover:text-bg"
          >
            {item.label}
            <ArrowUpRight
              className="size-4 transition-transform group-hover:rotate-45"
              aria-hidden="true"
            />
            {newTabLabel ? (
              <span className="sr-only"> {newTabLabel}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
