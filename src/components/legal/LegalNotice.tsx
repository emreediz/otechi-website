import { Info } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Callout above a document (e.g. "this is a draft"). UI text, not part of
 * the document, so it sits outside `data-legal-part`.
 */
export function LegalNotice({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      role="note"
      className={cn(
        "mb-12 flex max-w-[68ch] gap-3 rounded-2xl border border-accent/40 bg-accent-soft px-5 py-4 text-sm leading-relaxed text-fg",
        className,
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-accent-ink" aria-hidden="true" />
      {text}
    </p>
  );
}
