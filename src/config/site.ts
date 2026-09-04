/**
 * Site-wide constants.
 *
 * NOTE: `url` is only used to build absolute URLs for metadata / sitemap.
 * The production domain is not confirmed yet — update this in one place when it is.
 */
export const site = {
  name: "Otechi",
  // TODO: replace with the real production domain once confirmed.
  url: "https://otechi.com",
  launch: {
    // Ole went live in February 2026.
    oleLiveSince: "2026-02",
  },
} as const;
