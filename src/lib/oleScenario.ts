import type { Locale } from "@/i18n/config";

/**
 * Ole's pricing-page scenario ("9.000 ₺ işletmende nasıl karşılık
 * bulabilir?"), same inputs and formula as published by Ole.
 *
 * Of the N loyalty members a year, `share` come back at least `minVisits`
 * times. Each tier band contributes (minVisits − 1) repeat visits per person,
 * i.e. 2.025 × N repeat visits in total; revenue = visits × average ticket.
 * Yearly ≈ 405 × N ₺, monthly ≈ 33.75 × N ₺ (VAT excluded).
 */
export const OLE_SCENARIO = {
  min: 100,
  max: 10_000,
  step: 100,
  initial: 1_000,
  avgTicket: 200,
  tiers: [
    { minVisits: 2, share: 0.5 },
    { minVisits: 5, share: 0.3 },
    { minVisits: 10, share: 0.1 },
    { minVisits: 15, share: 0.025 },
  ],
} as const;

export type OleScenario = ReturnType<typeof computeOleScenario>;

export function computeOleScenario(members: number) {
  const { tiers, avgTicket } = OLE_SCENARIO;
  const repeatVisits = tiers.reduce((sum, tier, i) => {
    const nextShare = i + 1 < tiers.length ? tiers[i + 1].share : 0;
    return sum + members * (tier.share - nextShare) * (tier.minVisits - 1);
  }, 0);
  const yearly = Math.round(repeatVisits * avgTicket);
  return {
    yearly,
    monthly: Math.round(yearly / 12),
    /** Members expected to come more than once. */
    returning: Math.round(members * tiers[0].share),
  };
}

/** Whole numbers in the page's locale: "405.000" (tr) / "405,000" (en). */
export function formatNumber(n: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    maximumFractionDigits: 0,
  }).format(n);
}
