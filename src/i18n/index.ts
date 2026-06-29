import en from './en.json';
import fr from './fr.json';

const translations = { en, fr } as const;

export type Locale = keyof typeof translations;
export type LocaleTranslations = (typeof translations)[Locale];

export const locales: Locale[] = ['en', 'fr'];
export const defaultLocale: Locale = 'en';

export function getLocale(lang: Locale): LocaleTranslations {
  return translations[lang];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
