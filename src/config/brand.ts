/**
 * Brand and product names.
 *
 * These strings are the SAME in every language and must never be translated or
 * re-cased. Import from here instead of typing the names into copy or
 * dictionaries.
 *
 *  - Company / brand : "Otechi"      (never "OTECHI" / "otechi")
 *  - Product         : "Ole"         (never "OLE" / "ole")
 *  - Product         : "Ole Panel"   (Ole's web panel for businesses)
 *  - Product         : "Namaz Motivasyonu" (kept identical in TR and EN for now)
 */
export const BRAND = {
  company: "Otechi",
  products: {
    ole: "Ole",
    olePanel: "Ole Panel",
    namaz: "Namaz Motivasyonu",
  },
} as const;
