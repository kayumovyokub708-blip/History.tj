import { createContext, useContext, useState, useEffect, ReactNode } from "react"

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
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const STORAGE_KEY = "histori_user"
const USERS_KEY = "histori_users"

function loadUsers(): Record<string, { name: string; email: string; password: string; xp: number; level: number }> {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "{}")
  } catch {
    return {}
  }
}

function saveUsers(users: ReturnType<typeof loadUsers>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {
      /* ignore */
    }
    setIsLoading(false)
  }, [])

  const persist = (u: User | null) => {
    setUser(u)
    if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
    else localStorage.removeItem(STORAGE_KEY)
  }

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 400))
    const users = loadUsers()
    const found = users[email.toLowerCase()]
    if (!found || found.password !== password) {
      return { ok: false, error: "Email ё password нодуруст" }
    }
    const u: User = {
      id: email,
      name: found.name,
      email: found.email,
      xp: found.xp,
      level: found.level,
    }
    persist(u)
    return { ok: true }
  }

  const register = async (name: string, email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 400))
    const key = email.toLowerCase()
    const users = loadUsers()
    if (users[key]) {
      return { ok: false, error: "Ин email аллакай сабт шудааст" }
    }
    if (password.length < 6) {
      return { ok: false, error: "Password бояд ҳадакал 6 аломат бошад" }
    }
    users[key] = { name, email: key, password, xp: 0, level: 1 }
    saveUsers(users)
    const u: User = { id: key, name, email: key, xp: 0, level: 1 }
    persist(u)
    return { ok: true }
  }

  const logout = () => persist(null)

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
