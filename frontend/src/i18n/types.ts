export type Language = 'tg' | 'ru' | 'en'

export const SUPPORTED_LANGUAGES: Language[] = ['tg', 'ru', 'en']

export const DEFAULT_LANGUAGE: Language = 'tg'

export const LANGUAGE_STORAGE_KEY = 'histori_lang'

export const LANGUAGE_LABELS: Record<Language, string> = {
  tg: 'Тоҷикӣ',
  ru: 'Русский',
  en: 'English',
}

export const LANGUAGE_FLAGS: Record<Language, string> = {
  tg: '🇹🇬',
  ru: '🇷🇺',
  en: '🇬🇧',
}
