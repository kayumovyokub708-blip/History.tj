export type LeaderboardEntry = {
  name: string
  score: number
  accuracy: number
  date: string
}

const KEY = (slug: string) => `histori_quiz_lb_${slug}`

export function getLeaderboard(slug: string): LeaderboardEntry[] {
  try {
    const raw = localStorage.getItem(KEY(slug))
    if (!raw) return []
    const parsed = JSON.parse(raw) as LeaderboardEntry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveScore(
  slug: string,
  entry: LeaderboardEntry,
  limit = 20
): LeaderboardEntry[] {
  const list = getLeaderboard(slug)
  list.push(entry)
  list.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy)
  const top = list.slice(0, limit)
  try {
    localStorage.setItem(KEY(slug), JSON.stringify(top))
  } catch {
    /* ignore */
  }
  return top
}

export function rankOf(list: LeaderboardEntry[], score: number): number {
  const idx = list.findIndex((e) => e.score === score)
  return idx >= 0 ? idx + 1 : list.length
}
