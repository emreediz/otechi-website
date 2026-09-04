import { FileText } from "lucide-react";

/**
 * Quiet scaffold for per-product legal / contractual documents. No real text
 * yet — just a tidy, low-emphasis area where document links will be added
 * later, kept separate from the global footer legal links.
 */
export function ProductDocs({
  title,
  note,
  docs,
}: {
  title: string;
  note: string;
  docs: string[];
}) {
  return (
    <section className="border-t border-border bg-bg">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <h2 className="text-sm font-semibold text-fg-muted">{title}</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {docs.map((d) => (
            <li
              key={d}
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted/80"
            >
              <FileText className="size-3.5" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-fg-muted/70">{note}</p>
      </div>
    </section>
  );
}
