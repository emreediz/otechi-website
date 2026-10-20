"use client";

import { useId, useState } from "react";
import type { KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type FaqItem = {
  q: string;
  a: string;
  /** Optional internal link shown under the answer. */
  link?: { href: string; label: string };
};

export type FaqTab = { label: string; items: FaqItem[] };

/**
 * Tabbed FAQ: pill tabs (arrow keys move between them), then an accordion
 * per tab. The answer height animates via grid rows; closed answers are
 * `visibility: hidden` (globals.css), so they leave the a11y tree and tab
 * order but stay in the HTML.
 */
export function FaqTabs({ tabs }: { tabs: FaqTab[] }) {
  const id = useId();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<string | null>(null);

  function onKey(e: KeyboardEvent, index: number) {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (index + delta + tabs.length) % tabs.length;
    setActive(next);
    document.getElementById(`${id}-t${next}`)?.focus();
  }

  return (
    <div className="min-w-0">
      {tabs.length > 1 ? (
        <div role="tablist" className="mb-3 flex flex-wrap gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              id={`${id}-t${i}`}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls={`${id}-p${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === i
                  ? "border-accent bg-accent-soft font-semibold text-fg"
                  : "border-border bg-white text-fg-muted hover:border-border-strong hover:text-fg",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      ) : null}

      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          id={`${id}-p${i}`}
          role={tabs.length > 1 ? "tabpanel" : undefined}
          aria-labelledby={tabs.length > 1 ? `${id}-t${i}` : undefined}
          hidden={active !== i}
        >
          <ul>
            {tab.items.map((item, j) => {
              const key = `${i}-${j}`;
              const isOpen = open === key;
              return (
                <li
                  key={item.q}
                  data-open={isOpen || undefined}
                  className="faq-item border-b border-border"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-a${key}`}
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="flex w-full items-center justify-between gap-5 px-1 py-[1.375rem] text-left text-[clamp(1rem,1.3vw,1.125rem)] font-semibold leading-snug transition-colors hover:text-accent-ink"
                    >
                      {item.q}
                      <span aria-hidden="true" className="faq-sign" />
                    </button>
                  </h3>
                  <div id={`${id}-a${key}`} className="faq-answer">
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[68ch] px-1 pb-5 pr-12 leading-[1.7] text-fg-soft">
                        {item.a}
                      </p>
                      {item.link ? (
                        <Link
                          href={item.link.href}
                          className="mb-5 ml-1 inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:gap-2.5"
                        >
                          {item.link.label}
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
