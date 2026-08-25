import { useTranslation } from 'react-i18next'
import { changeLanguage, getCurrentLanguage } from '@/i18n'
import {
  LANGUAGE_FLAGS,
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  type Language,
} from '@/i18n/types'
import { cn } from '@/lib/utils'

/**
 * Language switcher for header — placed before Sign in / Register.
 * Instant switch, no page reload. Persists in localStorage (histori_lang).
 */
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const current = (i18n.language as Language) || getCurrentLanguage()

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-lg border border-border bg-card/60 p-0.5"
      role="group"
      aria-label={t('language.switch')}
    >
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = lang === current || (lang === 'tg' && !current)
        return (
          <button
            key={lang}
            type="button"
            onClick={() => {
              if (lang !== current) changeLanguage(lang)
            }}
            className={cn(
              'flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-2.5',
              isActive
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-card hover:text-white'
            )}
            aria-pressed={isActive}
            title={LANGUAGE_LABELS[lang]}
          >
            <span className="text-sm leading-none" aria-hidden>
              {LANGUAGE_FLAGS[lang]}
            </span>
            <span className="hidden md:inline">{LANGUAGE_LABELS[lang]}</span>
          </button>
        )
      })}
    </div>
  )
}
