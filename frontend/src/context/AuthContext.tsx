import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { apiLogin, apiRegister, apiMe, getApiBase } from "@/services/api"
import { awardXp, ensureUserOnBoard, levelFromXp, getEntry } from "@/lib/ranking"

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  xp: number
  level: number
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  apiOnline: boolean
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  logout: () => void
  /** Add XP locally + ranking board (and sync user state). */
  addXp: (amount: number) => number
}

const AuthContext = createContext<AuthContextType | null>(null)

const STORAGE_KEY = "histori_user"
const TOKEN_KEY = "histori_token"
const USERS_KEY = "histori_users"

function loadLocalUsers(): Record<
  string,
  { name: string; email: string; password: string; xp: number; level: number }
> {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "{}")
  } catch {
    return {}
  }
}

function saveLocalUsers(users: ReturnType<typeof loadLocalUsers>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [apiOnline, setApiOnline] = useState(false)

  useEffect(() => {
    ;(async () => {
      const base = getApiBase()
      if (base) {
        try {
          const res = await fetch(`${base}/api/v1/health`)
          setApiOnline(res.ok)
        } catch {
          setApiOnline(false)
        }
      }

      const token = localStorage.getItem(TOKEN_KEY)
      if (token && base) {
        try {
          const me = (await apiMe()) as any
          const u: User = {
            id: String(me.id),
            name: me.name,
            email: me.email,
            xp: me.xp ?? 0,
            level: me.level ?? 1,
            avatar: me.avatar,
          }
          // Merge ranking board XP if higher (local progress)
          const board = getEntry(u.id)
          if (board && board.xp > u.xp) {
            u.xp = board.xp
            u.level = board.level
          } else {
            ensureUserOnBoard(u.id, u.name, u.xp)
          }
          setUser(u)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
          setIsLoading(false)
          return
        } catch {
          localStorage.removeItem(TOKEN_KEY)
        }
      }

      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          const u = JSON.parse(raw) as User
          const board = getEntry(u.id)
          if (board) {
            u.xp = board.xp
            u.level = board.level
          } else {
            ensureUserOnBoard(u.id, u.name, u.xp ?? 0)
          }
          setUser(u)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
        }
      } catch {
        /* ignore */
      }
      setIsLoading(false)
    })()
  }, [])

  const persist = (u: User | null, token?: string | null) => {
    setUser(u)
    if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
    else localStorage.removeItem(STORAGE_KEY)
    if (token) localStorage.setItem(TOKEN_KEY, token)
    if (token === null) localStorage.removeItem(TOKEN_KEY)
  }

  const login = async (email: string, password: string) => {
    if (getApiBase()) {
      try {
        const res = await apiLogin(email.trim(), password)
        let u: User = {
          id: String(res.user.id),
          name: res.user.name,
          email: res.user.email,
          xp: res.user.xp ?? 0,
          level: res.user.level ?? 1,
        }
        const board = getEntry(u.id)
        if (board && board.xp > u.xp) {
          u = { ...u, xp: board.xp, level: board.level }
        } else {
          ensureUserOnBoard(u.id, u.name, u.xp)
        }
        persist(u, res.access_token)
        setApiOnline(true)
        return { ok: true }
      } catch (e: any) {
        return { ok: false, error: e?.message || "Login failed" }
      }
    }

    await new Promise((r) => setTimeout(r, 300))
    const users = loadLocalUsers()
    const found = users[email.toLowerCase()]
    if (!found || found.password !== password) {
      return { ok: false, error: "Email ё password нодуруст" }
    }
    const id = email.toLowerCase()
    const board = getEntry(id)
    const xp = board?.xp ?? found.xp
    const level = board?.level ?? found.level
    ensureUserOnBoard(id, found.name, xp)
    persist({
      id,
      name: found.name,
      email: found.email,
      xp,
      level,
    })
    return { ok: true }
  }

  const register = async (name: string, email: string, password: string) => {
    if (getApiBase()) {
      try {
        const res = await apiRegister(name.trim(), email.trim(), password)
        const u: User = {
          id: String(res.user.id),
          name: res.user.name,
          email: res.user.email,
          xp: res.user.xp ?? 0,
          level: res.user.level ?? 1,
        }
        ensureUserOnBoard(u.id, u.name, u.xp)
        persist(u, res.access_token)
        setApiOnline(true)
        return { ok: true }
      } catch (e: any) {
        return { ok: false, error: e?.message || "Register failed" }
      }
    }

    await new Promise((r) => setTimeout(r, 300))
    const key = email.toLowerCase()
    const users = loadLocalUsers()
    if (users[key]) return { ok: false, error: "Ин email аллакай сабт шудааст" }
    if (password.length < 6) return { ok: false, error: "Password бояд ҳадакал 6 аломат бошад" }
    users[key] = { name, email: key, password, xp: 0, level: 1 }
    saveLocalUsers(users)
    ensureUserOnBoard(key, name, 0)
    persist({ id: key, name, email: key, xp: 0, level: 1 })
    return { ok: true }
  }

  const logout = () => persist(null, null)

  const addXp = (amount: number) => {
    if (!user || amount <= 0) return user?.xp ?? 0
    const entry = awardXp({ id: user.id, name: user.name, amount })
    const next: User = {
      ...user,
      xp: entry.xp,
      level: entry.level || levelFromXp(entry.xp),
    }
    persist(next)
    // Keep local users table in sync
    const users = loadLocalUsers()
    if (users[user.email.toLowerCase()]) {
      users[user.email.toLowerCase()].xp = next.xp
      users[user.email.toLowerCase()].level = next.level
      saveLocalUsers(users)
    }
    return next.xp
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, apiOnline, login, register, logout, addXp }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
