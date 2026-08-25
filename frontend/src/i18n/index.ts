import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import tg from './locales/tg.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  type Language,
  SUPPORTED_LANGUAGES,
} from './types'

const resources = {
  tg: { translation: tg },
  ru: { translation: ru },
  en: { translation: en },
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
    return stored as Language
  }
  return DEFAULT_LANGUAGE
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

export function changeLanguage(lang: Language): void {
  if (!SUPPORTED_LANGUAGES.includes(lang)) return
  i18n.changeLanguage(lang)
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
}

export function getCurrentLanguage(): Language {
  return (i18n.language as Language) || DEFAULT_LANGUAGE
}

export default i18n
