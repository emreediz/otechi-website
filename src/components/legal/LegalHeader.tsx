import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Header for legal / document pages. Elements marked `data-legal-part` carry
 * verbatim document text (title, "last updated" line, intro) and are what the
 * legal-integrity check compares — never put UI text inside them.
 */
export function LegalHeader({
  eyebrow,
  title,
  meta,
  intro,
}: {
  eyebrow: ReactNode;
  title: string;
  meta?: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-fg/10 bg-bg-subtle">
      <Container className="pb-12 pt-10 sm:pb-16 sm:pt-16">
        {eyebrow}
        <h1
          data-legal-part
          className="mt-6 max-w-4xl text-heading text-balance break-words"
        >
          {title}
        </h1>
        {meta ? (
          <p data-legal-part className="mt-6 text-sm text-fg-muted">
            {meta}
          </p>
        ) : null}
        {intro ? (
          <p
            data-legal-part
            className="mt-6 max-w-[68ch] text-lead text-fg-muted"
          >
            {intro}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
