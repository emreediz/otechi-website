import { BRAND } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  ContractDocument,
  type ContractBlock,
} from "@/components/legal/ContractDocument";

/**
 * Shared page shell for the Namaz Motivasyonu contract pages. Turkish-only,
 * full-width readable column, Namaz Motivasyonu color identity, no PDF viewer.
 */
export function ContractPageView({
  title,
  lastUpdated,
  blocks,
}: {
  title: string;
  lastUpdated: string;
  blocks: ContractBlock[];
}) {
  return (
    <div data-theme="namaz" className="bg-bg text-fg">
      <section className="border-b border-border bg-bg-subtle">
        <Container className="py-14 sm:py-20">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            {BRAND.products.namaz}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-fg-muted">
            Son güncelleme: {lastUpdated}
          </p>
        </Container>
      </section>

      <Section animate={false}>
        <div className="mx-auto max-w-3xl">
          <ContractDocument blocks={blocks} />
        </div>
      </Section>
    </div>
  );
}
