export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** OpenGraph locale codes. */
export const ogLocale: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
};

/** Each language's name in its own language (language picker labels). */
export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};
