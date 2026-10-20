import { cn } from "@/lib/cn";

/** Small label/value facts (platform, audience, status…) on thin rules. */
export function MetaList({
  items,
  className,
}: {
  items: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={cn("grid gap-x-8 sm:grid-cols-3", className)}>
      {items.map((item) => (
        <div key={item.label} className="border-t border-fg/15 py-4">
          <dt className="text-xs text-fg-muted">{item.label}</dt>
          <dd className="mt-1 font-medium">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
