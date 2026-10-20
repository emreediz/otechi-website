import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type ContactRow = { label: string; value: string; href: string };

/**
 * Full-width contact rows (tel: / mailto:) separated by thin rules. The whole
 * row is the link; the arrow turns on hover/focus.
 */
export function ContactRows({
  items,
  size = "m",
  className,
}: {
  items: ContactRow[];
  size?: "m" | "l";
  className?: string;
}) {
  return (
    <ul className={cn("border-t border-fg/15", className)}>
      {items.map((item) => (
        <li key={item.href} className="border-b border-fg/15">
          <a
            href={item.href}
            className={cn(
              "group flex items-center justify-between gap-4",
              size === "l" ? "min-h-20 py-5" : "min-h-14 py-3",
            )}
          >
            <span className="min-w-0">
              <span className="block text-sm text-fg-muted">{item.label}</span>
              <span
                className={cn(
                  "mt-0.5 block break-words font-semibold decoration-accent decoration-2 underline-offset-[0.2em] group-hover:underline",
                  size === "l" ? "text-2xl sm:text-4xl" : "text-lg",
                )}
              >
                {item.value}
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className={cn(
                "shrink-0 transition-transform duration-300 ease-out-expo group-hover:rotate-45 group-focus-visible:rotate-45",
                size === "l" ? "size-7" : "size-5",
              )}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
