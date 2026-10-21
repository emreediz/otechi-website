/**
 * Ole links — the single source for every Ole link on this site.
 *
 * All links use Ole's main domain. (The new Ole site was researched on a
 * temporary subdomain; that address is never linked or shown here.)
 */
export const OLE_BASE = "https://oletr.com";

/**
 * The new Ole site's pages (the demo request form) are live on oletr.com
 * (checked 2026-10-21: /demo-talep/ answers 200 with the form). Set to
 * `false` to send these links to the home page instead.
 */
const NEW_PAGES_LIVE = true;
const newPage = (path: string) => `${OLE_BASE}${NEW_PAGES_LIVE ? path : "/"}`;

export const OLE_LINKS = {
  demo: newPage("/demo-talep/"),
  panel: "https://panel.oletr.com",
  appStore:
    "https://apps.apple.com/tr/app/ole-harcad%C4%B1k%C3%A7a-kazan/id6753960586?l=tr",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.ole.ole_mobile_app",
  supportEmail: "destek@oletr.com",
} as const;
