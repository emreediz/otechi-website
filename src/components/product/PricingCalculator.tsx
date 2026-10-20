"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import {
  OLE_SCENARIO,
  computeOleScenario,
  formatNumber,
  type OleScenario,
} from "@/lib/oleScenario";

type Labels = Dictionary["ole"]["pricing"]["calculator"];

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? "");

/**
 * Ole's scenario calculator. The server render shows the default scenario
 * (1.000 members), so without JS the figures are still correct and the
 * slider is hidden (`.js-only`). Figures count up over 320 ms (instant under
 * reduced motion); a polite live region speaks the result 1 s after the
 * slider stops.
 */
export function PricingCalculator({
  labels,
  locale,
}: {
  labels: Labels;
  locale: Locale;
}) {
  const id = useId();
  const [members, setMembers] = useState<number>(OLE_SCENARIO.initial);
  const [shown, setShown] = useState<OleScenario>(() =>
    computeOleScenario(OLE_SCENARIO.initial),
  );
  const [announcement, setAnnouncement] = useState("");
  const fromRef = useRef(shown);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const fmt = (n: number) => formatNumber(n, locale);
  const tl = (n: number) => `${fmt(n)} ₺`;

  // Animate the displayed figures towards the new target.
  useEffect(() => {
    const to = computeOleScenario(members);
    const from = fromRef.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduce ? 0 : 320;
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const p = duration ? Math.min(1, (now - start) / duration) : 1;
      const e = 1 - Math.pow(1 - p, 3);
      const next = {
        yearly: Math.round(from.yearly + (to.yearly - from.yearly) * e),
        monthly: Math.round(from.monthly + (to.monthly - from.monthly) * e),
        returning: Math.round(
          from.returning + (to.returning - from.returning) * e,
        ),
      };
      fromRef.current = next;
      setShown(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [members]);

  useEffect(() => () => clearTimeout(timer.current), []);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setMembers(value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const r = computeOleScenario(value);
      setAnnouncement(
        fill(labels.live, {
          members: fmt(value),
          yearly: tl(r.yearly),
          monthly: tl(r.monthly),
        }),
      );
    }, 1000);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <label htmlFor={id} className="block text-lg font-semibold">
          {labels.question}
        </label>
        <p className="mt-2 text-sm text-fg-muted">{labels.help}</p>
        <p className="mt-6 flex items-baseline gap-2">
          <output htmlFor={id} className="text-4xl font-light tabular-nums">
            {fmt(members)}
          </output>
          <span className="text-sm text-fg-muted">{labels.unit}</span>
        </p>
        <div className="js-only mt-4">
          <input
            id={id}
            type="range"
            min={OLE_SCENARIO.min}
            max={OLE_SCENARIO.max}
            step={OLE_SCENARIO.step}
            value={members}
            onChange={onChange}
            aria-valuetext={`${fmt(members)} ${labels.unit}`}
            className="range-input w-full"
          />
          <div
            aria-hidden="true"
            className="mt-2 flex justify-between text-xs text-fg-muted tabular-nums"
          >
            <span>{fmt(OLE_SCENARIO.min)}</span>
            <span>{fmt(OLE_SCENARIO.max)}</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm text-fg-muted">{labels.yearly}</p>
        <p className="mt-1 min-w-[9ch] text-number text-accent">
          {tl(shown.yearly)}
        </p>
        <p className="mt-3 text-fg-muted">
          {labels.monthly}{" "}
          <span className="font-semibold tabular-nums text-fg">
            {tl(shown.monthly)}
          </span>
        </p>

        <dl className="mt-8 grid gap-x-8 border-t border-fg/15 sm:grid-cols-2">
          <div className="border-b border-fg/15 py-4">
            <dt className="text-sm text-fg-muted">{labels.returningLabel}</dt>
            <dd className="mt-1 text-xl font-semibold tabular-nums">
              {fmt(shown.returning)} {labels.returningUnit}
            </dd>
          </div>
          <div className="border-b border-fg/15 py-4">
            <dt className="text-sm text-fg-muted">{labels.audienceLabel}</dt>
            <dd className="mt-1 text-xl font-semibold tabular-nums">
              {fmt(members)} {labels.audienceUnit}
            </dd>
            <dd className="mt-1 text-xs text-fg-muted">
              {labels.audienceNote}
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-xs leading-relaxed text-fg-muted">
          {labels.disclaimer}
        </p>
        <p aria-live="polite" className="sr-only">
          {announcement}
        </p>
      </div>
    </div>
  );
}
