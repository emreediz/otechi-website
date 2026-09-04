import { Plus } from "lucide-react";

export type QA = {
  q: string;
  a: string;
};

/**
 * Accessible, JS-free FAQ using native <details>/<summary>.
 * Works fine under prefers-reduced-motion (no animated disclosure).
 */
export function Faq({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-2">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-medium marker:hidden [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <Plus
              className="size-5 shrink-0 text-fg-muted transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-4 text-sm leading-relaxed text-fg-muted">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
