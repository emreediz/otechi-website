import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type TocItem = { id: string; text: string };

/**
 * Static table of contents (no scroll-spy). Desktop: sticky side column.
 * Mobile: a collapsed <details> above the document. Hidden when printing.
 */
export function LegalToc({
  title,
  items,
  id,
  className,
}: {
  title: string;
  items: TocItem[];
  /** Anchor for the phone "Contents" button (TocJump). */
  id?: string;
  className?: string;
}) {
  const list = (
    <ol className="mt-3 border-t border-fg/10">
      {items.map((item) => (
        <li key={item.id} className="border-b border-fg/10">
          <a
            href={`#${item.id}`}
            className="flex min-h-11 items-center py-2 text-sm leading-snug text-fg-muted transition-colors hover:text-fg focus-visible:outline-offset-[-2px]"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <nav id={id} aria-label={title} className={cn("print:hidden", className)}>
      <details className="group rounded-2xl border border-fg/10 px-4 lg:hidden">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
          {title}
          <ChevronDown
            className="size-4 transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="pb-4">{list}</div>
      </details>
      <div className="sticky top-24 hidden max-h-[calc(100dvh-8rem)] overflow-y-auto pr-2 lg:block">
        <p className="text-sm font-semibold">{title}</p>
        {list}
      </div>
    </nav>
  );
}
