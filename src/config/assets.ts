/**
 * Web-optimised product imagery. Generated with `sips` into each product's
 * `web/` folder; the originals in the parent folders are never modified.
 * These screenshots are clean full-screen captures (no marketing banners),
 * so they are only resized, not cropped.
 */
export const IMG = {
  home: {
    // Single unified hero mockup (Ole + Namaz Motivasyonu phones, transparent).
    // Original file used directly (unresized, uncropped) at the user's request.
    hero: "/images/home/hero/ole-namaz-motivasyon-hero-page-photo.png",
    heroW: 1080,
    heroH: 1080,
  },
  ole: {
    // 3D key art (transparent, navy-lit)
    art: "/images/products/ole/web/token.png",
    artW: 760,
    artH: 760,
    // "ole" wordmark (transparent)
    logo: "/images/products/ole/web/logo.png",
    logoW: 680,
    logoH: 380,
    // Mobile app screens — 900 x 1947 (9 : 19.5)
    screenHome: "/images/products/ole/web/screen-home.jpg",
    screenLoyalty: "/images/products/ole/web/screen-loyalty.jpg",
    screenNotification: "/images/products/ole/web/screen-notification.jpg",
    screenBusiness: "/images/products/ole/web/screen-business.jpg",
    // Web management panel — 1800 x 1047 (~16 : 9.3)
    panel: "/images/products/ole/web/panel.jpg",
  },
  namaz: {
    // 3D key art (neon mihrab on deep green)
    art: "/images/products/namaz-motivasyonu/web/art.jpg",
    artW: 900,
    artH: 900,
    // Mobile app screens — 900 x 1650
    screenToday: "/images/products/namaz-motivasyonu/web/screen-today.jpg",
    screenGroup: "/images/products/namaz-motivasyonu/web/screen-group.jpg",
  },
} as const;
