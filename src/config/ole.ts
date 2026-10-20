/**
 * Ole links and prices — the single source for every Ole link on this site.
 *
 * All links use Ole's main domain. (The new Ole site was researched on a
 * temporary subdomain; that address is never linked or shown here.)
 */
export const OLE_BASE = "https://oletr.com";

/**
 * The new Ole site's demo, pricing and integration pages are not live on
 * oletr.com yet (checked 2026-10-20: 404), so those links open the home page
 * for now. Re-check them before publishing and set this to `true` once the
 * domain has switched.
 */
const NEW_PAGES_LIVE = false;
const newPage = (path: string) => `${OLE_BASE}${NEW_PAGES_LIVE ? path : "/"}`;

export const OLE_LINKS = {
  site: `${OLE_BASE}/`,
  demo: newPage("/demo-talep/"),
  integration: newPage("/demo-talep/?konu=entegrasyon"),
  pricing: newPage("/fiyatlandirma/"),
  support: `${OLE_BASE}/destek/`,
  cookies: `${OLE_BASE}/cerez-politikasi/`,
  kvkk: `${OLE_BASE}/gizlilik-politikasi-kvkk/`,
  membership: `${OLE_BASE}/uyelik/`,
  panel: "https://panel.oletr.com",
  appStore:
    "https://apps.apple.com/tr/app/ole-harcad%C4%B1k%C3%A7a-kazan/id6753960586?l=tr",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.ole.ole_mobile_app",
  supportEmail: "destek@oletr.com",
} as const;

/** Prices as published by Ole (checked 2026-10-20), VAT excluded, in ₺. */
export const OLE_PRICING = {
  /** Sınırsız Paket — per branch, per year. */
  planYearly: 9000,
  /** Ole NFC hardware — one-off, optional. */
  nfcOneTime: 1000,
} as const;
