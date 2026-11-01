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
 * The texts are under review: open points that block publication are kept in
 * content/contracts/iz/inceleme-notu.md (never on the page). Until they are
 * resolved the pages are `noindex`, out of the sitemap and show a short
 * "under review" notice (see IZ_LEGAL_DRAFT).
 */
export const IZ_LEGAL = {
  privacy: "/urunler/iz/gizlilik-politikasi",
  kvkk: "/urunler/iz/kvkk-aydinlatma-metni",
  terms: "/urunler/iz/kullanici-sozlesmesi",
  accountDeletion: "/urunler/iz/hesap-silme",
} as const;

/** Flip to `false` once the İz documents are final (indexing + sitemap). */
export const IZ_LEGAL_DRAFT = true;

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
