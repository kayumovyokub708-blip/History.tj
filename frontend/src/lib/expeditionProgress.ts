const STORAGE_KEY = "histori_expedition_progress"

export interface ExpeditionResult {
  slug: string
  titleKey: string
  correct: number
  total: number
  xp: number
  at: string // ISO date
}

export function loadExpeditionProgress(): ExpeditionResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveExpeditionResult(result: ExpeditionResult): void {
  const list = loadExpeditionProgress()
  list.unshift(result)
  // keep last 30
  const trimmed = list.slice(0, 30)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
}

export function clearExpeditionProgress(): void {
  localStorage.removeItem(STORAGE_KEY)
}
