import type { ReactNode } from "react";

export type ContractBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] };

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
        className="break-words text-accent underline decoration-1 underline-offset-2 hover:opacity-80"
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

/** Renders a contract's structured blocks as plain, readable HTML — no PDF viewer. */
export function ContractDocument({ blocks }: { blocks: ContractBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-12 font-display text-xl font-bold tracking-tight first:mt-0 sm:text-2xl"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3 key={i} className="mt-8 font-display text-base font-semibold">
              {b.text}
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-accent">
              {b.items.map((item, j) => (
                <li key={j} className="leading-relaxed text-fg-muted">
                  <TextWithBreaks text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-fg-muted">
            <TextWithBreaks text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
