import type { ReactNode } from "react";

export type ContractBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "table";
      /** Visible caption (also the table's accessible name). */
      caption: string;
      /** Column headings; each row has one cell per heading. */
      head: string[];
      rows: string[][];
    };

// Matches http(s) URLs and email addresses so contact details in the source
// text become clickable — the visible text is not altered, only wrapped.
const LINK_RE = /(https?:\/\/[^\s]+)|([\w.+-]+@[\w-]+\.[a-zA-Z]{2,})/g;

function linkify(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    let matched = m[0];
    let end = m.index + matched.length;
    // Don't swallow trailing sentence punctuation into the link.
    while (matched.length > 0 && /[.,;:)\]]$/.test(matched)) {
      matched = matched.slice(0, -1);
      end -= 1;
    }
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const isEmail = matched.includes("@") && !matched.startsWith("http");
    nodes.push(
      <a
        key={`${keyPrefix}-${i++}`}
        href={isEmail ? `mailto:${matched}` : matched}
        className="break-words font-medium text-accent underline decoration-1 underline-offset-2 hover:decoration-2"
      >
        {matched}
      </a>,
    );
    last = end;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function TextWithBreaks({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {linkify(line, `l${i}`)}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

/**
 * A document table. Wide screens: a ruled table. Phones: each row becomes a
 * stacked card with the column heading above each value (aria-hidden),
 * so nothing scrolls sideways. Explicit ARIA roles keep the table semantics
 * when the display is switched to block on phones.
 */
function DocTable({
  block,
}: {
  block: Extract<ContractBlock, { type: "table" }>;
}) {
  return (
    <table role="table" className="block w-full text-sm sm:table">
      <caption className="mb-3 block text-left text-sm font-semibold text-fg sm:table-caption">
        {block.caption}
      </caption>
      <thead role="rowgroup" className="sr-only sm:not-sr-only sm:table-header-group">
        <tr role="row">
          {block.head.map((h, j) => (
            <th
              key={j}
              role="columnheader"
              scope="col"
              className="border-b border-fg/15 py-3 pr-4 text-left align-bottom text-xs font-semibold text-fg last:pr-0"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup" className="block space-y-3 sm:table-row-group sm:space-y-0">
        {block.rows.map((row, r) => (
          <tr
            key={r}
            role="row"
            className="block rounded-2xl border border-fg/10 px-4 py-1 sm:table-row sm:rounded-none sm:border-0 sm:border-b sm:border-fg/10 sm:p-0"
          >
            {row.map((cell, c) => (
              <td
                key={c}
                role="cell"
                className={
                  "block border-b border-fg/10 py-3 leading-relaxed last:border-b-0 " +
                  "sm:table-cell sm:border-b-0 sm:pr-4 sm:align-top sm:last:pr-0 " +
                  (c === 0 ? "font-medium text-fg" : "text-fg-muted")
                }
              >
                {/* Phones: the column heading above the value. Hidden from
                    assistive tech, which gets it from the <th> instead. */}
                <span
                  aria-hidden="true"
                  className="mb-1 block text-xs font-semibold text-fg sm:hidden"
                >
                  {block.head[c]}
                </span>
                <TextWithBreaks text={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Anchor id of the h2 at block index `i` (used by the table of contents). */
export const blockId = (i: number) => `b-${i}`;

/**
 * Renders a contract's structured blocks as plain, readable HTML — no PDF
 * viewer. The text and block order are never changed; the root carries
 * `data-legal-part` for the legal-integrity check.
 */
export function ContractDocument({ blocks }: { blocks: ContractBlock[] }) {
  return (
    <div data-legal-part className="max-w-[68ch] space-y-6">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2
              key={i}
              id={blockId(i)}
              className="mt-14 border-t border-fg/10 pt-8 text-xl font-semibold tracking-tight first:mt-0 first:border-t-0 first:pt-0 sm:text-2xl"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3 key={i} className="mt-8 text-base font-semibold">
              {b.text}
            </h3>
          );
        }
        if (b.type === "table") {
          return <DocTable key={i} block={b} />;
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-accent">
              {b.items.map((item, j) => (
                <li key={j} className="leading-[1.75] text-fg-muted">
                  <TextWithBreaks text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-[1.75] text-fg-muted">
            <TextWithBreaks text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
