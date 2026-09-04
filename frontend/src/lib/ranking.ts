/** Global ranking / rating system (local until backend is live). */

export type RankEntry = {
  id: string
  name: string
  xp: number
  level: number
  quizzes: number
  lastActive: string // ISO
  weeklyXp: number
  monthlyXp: number
}

const STORAGE_KEY = "histori_global_ranking"
const WEEKLY_KEY = "histori_weekly_reset"
const MONTHLY_KEY = "histori_monthly_reset"

function weekId(d = new Date()) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
  return `${t.getUTCFullYear()}-W${week}`
}

function monthId(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
}

function loadRaw(): RankEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as RankEntry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveRaw(list: RankEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch {
    /* ignore quota */
  }
}

/** Reset weekly / monthly counters when period changes. */
function applyPeriodResets(list: RankEntry[]): RankEntry[] {
  const w = weekId()
  const m = monthId()
  const prevW = localStorage.getItem(WEEKLY_KEY)
  const prevM = localStorage.getItem(MONTHLY_KEY)
  let next = list
  if (prevW !== w) {
    next = next.map((e) => ({ ...e, weeklyXp: 0 }))
    localStorage.setItem(WEEKLY_KEY, w)
  }
  if (prevM !== m) {
    next = next.map((e) => ({ ...e, monthlyXp: 0 }))
    localStorage.setItem(MONTHLY_KEY, m)
  }
  if (next !== list) saveRaw(next)
  return next
}

export function levelFromXp(xp: number): number {
  return Math.max(1, Math.floor(xp / 100) + 1)
}

export function getRanking(period: "global" | "weekly" | "monthly" = "global"): RankEntry[] {
  let list = applyPeriodResets(loadRaw())
  list = [...list].sort((a, b) => {
    if (period === "weekly") return b.weeklyXp - a.weeklyXp || b.xp - a.xp
    if (period === "monthly") return b.monthlyXp - a.monthlyXp || b.xp - a.xp
    return b.xp - a.xp
  })
  return list
}

export function getUserRank(userId: string, period: "global" | "weekly" | "monthly" = "global"): number {
  const list = getRanking(period)
  const idx = list.findIndex((e) => e.id === userId)
  return idx >= 0 ? idx + 1 : 0
}

/** Award XP after quiz / expedition — updates global ranking. */
export function awardXp(params: {
  id: string
  name: string
  amount: number
}): RankEntry {
  const amount = Math.max(0, Math.round(params.amount))
  let list = applyPeriodResets(loadRaw())
  const now = new Date().toISOString()
  const idx = list.findIndex((e) => e.id === params.id)

  if (idx >= 0) {
    const cur = list[idx]
    const xp = cur.xp + amount
    list[idx] = {
      ...cur,
      name: params.name || cur.name,
      xp,
      level: levelFromXp(xp),
      quizzes: cur.quizzes + (amount > 0 ? 1 : 0),
      lastActive: now,
      weeklyXp: cur.weeklyXp + amount,
      monthlyXp: cur.monthlyXp + amount,
    }
  } else {
    list.push({
      id: params.id,
      name: params.name,
      xp: amount,
      level: levelFromXp(amount),
      quizzes: amount > 0 ? 1 : 0,
      lastActive: now,
      weeklyXp: amount,
      monthlyXp: amount,
    })
  }

  saveRaw(list)
  return list.find((e) => e.id === params.id)!
}

export function ensureUserOnBoard(id: string, name: string, xp = 0): void {
  const list = applyPeriodResets(loadRaw())
  if (list.some((e) => e.id === id)) return
  list.push({
    id,
    name,
    xp,
    level: levelFromXp(xp),
    quizzes: 0,
    lastActive: new Date().toISOString(),
    weeklyXp: 0,
    monthlyXp: 0,
  })
  saveRaw(list)
}

export function getEntry(id: string): RankEntry | undefined {
  return applyPeriodResets(loadRaw()).find((e) => e.id === id)
}
