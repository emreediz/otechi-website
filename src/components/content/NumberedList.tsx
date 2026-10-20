import { cn } from "@/lib/cn";

export type NumberedItem = { title?: string; body?: string };

const COLUMNS = {
  1: "",
  2: "sm:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/**
 * Numbered blocks separated by thin rules — the site's default way to list
 * features, steps, principles and values. Items carry `stagger-item`, so
 * wrapping the list in `<Reveal variant="trigger">` staggers them in.
 */
export function NumberedList({
  items,
  columns = 3,
  big = false,
  className,
}: {
  items: NumberedItem[];
  columns?: keyof typeof COLUMNS;
  /** Large accent numbers (principles, steps) instead of small indexes. */
  big?: boolean;
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-x-8 gap-y-10", COLUMNS[columns], className)}>
      {items.map((item, i) => (
        <li
          key={item.title ?? item.body}
          className="stagger-item border-t border-fg/15 pt-6"
        >
          <span
            aria-hidden="true"
            className={
              big
                ? "block text-5xl font-light tabular-nums tracking-tight text-accent"
                : "block text-xs tabular-nums tracking-widest text-fg-muted"
            }
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          {item.title ? (
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
          ) : null}
          {item.body ? (
            <p
              className={cn(
                "leading-relaxed",
                item.title ? "mt-2 text-sm text-fg-muted" : "mt-4 text-fg/80",
              )}
            >
              {item.body}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
