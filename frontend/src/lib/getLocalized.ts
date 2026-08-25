import { getCurrentLanguage } from '@/i18n'
import type { Language } from '@/i18n/types'

/**
 * For objects with name / nameTj / nameRu fields (existing data shape).
 */
export function getLocalizedName(item: {
  name?: string
  nameTj?: string
  nameRu?: string
}, lang?: Language): string {
  const current = lang ?? getCurrentLanguage()
  if (current === 'tg' && item.nameTj) return item.nameTj
  if (current === 'ru' && item.nameRu) return item.nameRu
  if (current === 'en' && item.name) return item.name
  // fallbacks
  return item.nameTj || item.name || item.nameRu || ''
}

/**
 * Generic: LocalizedString { tg, ru, en } or plain string.
 */
export function getLocalized(
  value: { tg?: string; ru?: string; en?: string } | string | null | undefined,
  lang?: Language
): string {
  if (value == null) return ''
  if (typeof value === 'string') return value
  const current = lang ?? getCurrentLanguage()
  if (value[current]) return value[current]!
  return value.tg || value.en || value.ru || ''
}
