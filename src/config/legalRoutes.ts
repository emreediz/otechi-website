/**
 * Namaz Motivasyonu contract pages. Fixed, non-localized URLs (no /tr or /en
 * prefix) — the source documents are Turkish-only. Single source of truth so
 * the pages, the sitemap, and the product-page buttons never drift apart.
 */
export const NAMAZ_LEGAL = {
  privacy: "/urunler/namaz-motivasyonu/gizlilik-politikasi",
  kvkk: "/urunler/namaz-motivasyonu/kvkk-aydinlatma-metni",
  terms: "/urunler/namaz-motivasyonu/kullanici-sozlesmesi",
  accountDeletion: "/urunler/namaz-motivasyonu/hesap-silme",
} as const;

/**
 * İz contract pages — same structure as Namaz Motivasyonu (fixed,
 * Turkish-only URLs).
 *
 * The texts were approved by legal counsel; the pages are indexed, in the
 * sitemap and show no "under review" notice. Setting IZ_LEGAL_DRAFT back to
 * `true` restores the draft state (noindex, out of the sitemap, notice).
 */
export const IZ_LEGAL = {
  privacy: "/urunler/iz/gizlilik-politikasi",
  kvkk: "/urunler/iz/kvkk-aydinlatma-metni",
  terms: "/urunler/iz/kullanici-sozlesmesi",
  accountDeletion: "/urunler/iz/hesap-silme",
} as const;

/** `true` = draft: noindex, out of the sitemap, "under review" notice. */
export const IZ_LEGAL_DRAFT = false;

/**
 * Otechi Cookie Policy (/tr/cerez-politikasi, /en/cookie-policy).
 * Approved by legal counsel: indexed, in the sitemap, no "under review"
 * notice. Setting this back to `true` restores the draft state (noindex,
 * out of the sitemap, notice). Pre-approval review record:
 * content/contracts/otechi/inceleme-notu.md (archive).
 */
export const COOKIE_POLICY_DRAFT = false;

/** Products with their own contract pages. */
export type LegalProduct = "namaz" | "iz";
export type LegalDocKey = keyof typeof NAMAZ_LEGAL;

/** Each product's documents (a product may not have all of them yet). */
export const LEGAL_DOCS: Record<
  LegalProduct,
  Partial<Record<LegalDocKey, string>>
> = {
  namaz: NAMAZ_LEGAL,
  iz: IZ_LEGAL,
};
