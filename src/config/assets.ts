/**
 * Web-optimised product imagery, generated (sips / canvas) into each
 * product's `web/` folder; the originals in the parent folders are never
 * modified. See the Ole notes below for the few regions that were cleaned.
 */
export const IMG = {
  ole: {
    // 3D glass token (transparent WebP, 640px — the PNG was 732 KB)
    art: "/images/products/ole/web/token.webp",
    artW: 640,
    artH: 640,
    // Same token at 96px for small UI use (coded app mock-ups)
    token: "/images/products/ole/web/token-96.webp",
    // "ole" wordmark (680 x 380)
    logo: "/images/products/ole/web/logo.png",
    logoW: 680,
    logoH: 380,
    // Ole NFC hardware (transparent WebP, from Ole's own site assets)
    nfc: "/images/products/ole/web/nfc.webp",
    nfcW: 382,
    nfcH: 760,
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
    // Crops (canvas, from the originals). Panel cards contain no QR code or
    // customer data; the phone crops contain no mascot.
    panelQrForm: {
      src: "/images/products/ole/web/panel-qr-form.jpg",
      w: 860,
      h: 1020,
    },
    panelVerify: {
      src: "/images/products/ole/web/panel-verify.jpg",
      w: 860,
      h: 714,
    },
    screenCampaign: {
      src: "/images/products/ole/web/screen-campaign.jpg",
      w: 900,
      h: 445,
    },
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
    // Statistics screen (app capture, cropped to the same 900 x 1650 frame)
    screenStats: "/images/products/namaz-motivasyonu/web/screen-stats.jpg",
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
