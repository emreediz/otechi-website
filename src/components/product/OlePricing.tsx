import { Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { OLE_LINKS, OLE_PRICING } from "@/config/ole";
import { formatNumber } from "@/lib/oleScenario";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { PricingCalculator } from "./PricingCalculator";

/**
 * Ole pricing: the single yearly plan, the optional NFC hardware and the
 * scenario calculator — prices and copy as published by Ole (VAT excluded).
 * Rendered inside the Ole page's navy band.
 */
export function OlePricing({
  t,
  newTab,
  locale,
}: {
  t: Dictionary["ole"]["pricing"];
  newTab: string;
  locale: Locale;
}) {
  const price = (n: number) => `${formatNumber(n, locale)} ₺`;

  return (
    <>
      <Reveal>
        <Kicker as="h2">{t.kicker}</Kicker>
        <p className="mt-8 max-w-4xl text-display-m text-balance">{t.title}</p>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Plan */}
        <Reveal className="rounded-3xl border border-fg/15 p-7 sm:p-10 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl font-semibold tracking-tight">
              {t.plan.name}
            </h3>
            <span className="rounded-full border border-fg/25 px-3 py-1 text-xs font-medium">
              {t.plan.period}
            </span>
          </div>
          <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-number">{price(OLE_PRICING.planYearly)}</span>
            <span className="text-fg-muted">{t.plan.unit}</span>
          </p>
          <ul className="mt-8 grid gap-x-6 border-t border-fg/15 sm:grid-cols-2">
            {t.plan.included.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-fg/15 py-3 text-sm leading-relaxed"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <Button
            href={OLE_LINKS.demo}
            external
            newTabLabel={newTab}
            size="lg"
            className="mt-8"
          >
            {t.cta}
          </Button>
        </Reveal>

        {/* NFC add-on */}
        <Reveal className="rounded-3xl bg-bg-subtle p-7 sm:p-10 lg:col-span-5">
          <p className="text-sm text-fg-muted">{t.nfc.label}</p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl font-semibold tracking-tight">
              {t.nfc.name}
            </h3>
            <span className="rounded-full border border-fg/25 px-3 py-1 text-xs font-medium">
              {t.nfc.period}
            </span>
          </div>
          <p className="mt-8 flex flex-wrap items-baseline gap-x-3">
            <span className="text-5xl font-light tabular-nums tracking-tight">
              {price(OLE_PRICING.nfcOneTime)}
            </span>
            <span className="text-fg-muted">{t.nfc.unit}</span>
          </p>
          <p className="mt-6 leading-relaxed">{t.nfc.lead}</p>
          <ul className="mt-6 border-t border-fg/15">
            {t.nfc.benefits.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-fg/15 py-3 text-sm"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-fg-muted">
            {t.nfc.note}
          </p>
        </Reveal>
      </div>

      {/* Scenario calculator */}
      <Reveal className="mt-5 rounded-3xl border border-fg/15 p-7 sm:p-10 lg:mt-6">
        <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {t.calculator.title.replace("{price}", price(OLE_PRICING.planYearly))}
        </h3>
        <div className="mt-10">
          <PricingCalculator labels={t.calculator} locale={locale} />
        </div>
      </Reveal>

      <p className="mt-8 text-sm text-fg-muted">
        {t.source}{" "}
        <a
          href={OLE_LINKS.pricing}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-fg underline decoration-accent decoration-2 underline-offset-4"
        >
          {t.sourceLink}
          <span className="sr-only"> {newTab}</span>
        </a>
      </p>
    </>
  );
}
