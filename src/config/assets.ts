/**
 * Web-optimised product imagery. Generated with `sips` into each product's
 * `web/` folder; the originals in the parent folders are never modified.
 * These screenshots are full-screen captures (no marketing banners); see
 * the Ole notes below for the few regions that were cleaned.
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
    // Mobile app screens — 900 x 1947 (9 : 19.5). Cleaned in the web copies
    // (canvas edit, originals untouched): the mascot is removed from the
    // business/notification "Menü" card and the user's name from the home
    // greeting. The panel copy has the account name removed and the QR code
    // and customer code blurred.
    screenW: 900,
    screenH: 1947,
    screenHome: "/images/products/ole/web/screen-home.jpg",
    screenLoyalty: "/images/products/ole/web/screen-loyalty.jpg",
    screenNotification: "/images/products/ole/web/screen-notification.jpg",
    screenBusiness: "/images/products/ole/web/screen-business.jpg",
    // Web management panel — 1800 x 1047 (~16 : 9.3)
    panel: "/images/products/ole/web/panel.jpg",
    panelW: 1800,
    panelH: 1047,
  },
  namaz: {
    // 3D key art (neon mihrab on deep green)
    art: "/images/products/namaz-motivasyonu/web/art.jpg",
    artW: 900,
    artH: 900,
    // Mobile app screens — 900 x 1650
    screenW: 900,
    screenH: 1650,
    screenToday: "/images/products/namaz-motivasyonu/web/screen-today.jpg",
    screenGroup: "/images/products/namaz-motivasyonu/web/screen-group.jpg",
  },
  // Lifestyle photography — web copies (max 1400px, JPEG) generated with
  // `sips` into `photo assets/web/`; the PNG originals are never modified.
  photos: {
    ole1: { src: "/images/photo assets/web/ole-1.jpg", w: 1400, h: 788 },
    ole2: { src: "/images/photo assets/web/ole-2.jpg", w: 1400, h: 933 },
    ole3: { src: "/images/photo assets/web/ole-3.jpg", w: 1400, h: 1400 },
    ole4: { src: "/images/photo assets/web/ole-4.jpg", w: 1120, h: 1400 },
    namaz1: { src: "/images/photo assets/web/namaz-1.jpg", w: 1400, h: 788 },
    namaz2: { src: "/images/photo assets/web/namaz-2.jpg", w: 1400, h: 933 },
    namaz3: { src: "/images/photo assets/web/namaz-3.jpg", w: 1400, h: 1400 },
    namaz4: { src: "/images/photo assets/web/namaz-4.jpg", w: 1120, h: 1400 },
  },
} as const;

export type PhotoKey = keyof typeof IMG.photos;
