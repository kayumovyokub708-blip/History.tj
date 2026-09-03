/** API client — reads VITE_API_URL (build-time) or localStorage (runtime). */

export function getApiBase(): string {
  const fromEnv = (import.meta as any).env?.VITE_API_URL as string | undefined
  const fromLs =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("histori_api_url") || ""
      : ""
  const base = (fromEnv || fromLs || "").trim()
  return base.replace(/\/$/, "")
}

export function setApiBase(url: string) {
  const clean = url.trim().replace(/\/$/, "")
  if (clean) localStorage.setItem("histori_api_url", clean)
  else localStorage.removeItem("histori_api_url")
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const base = getApiBase()
  if (!base) {
    throw new Error("API URL not configured")
  }

  const token =
    localStorage.getItem("histori_token") ||
    localStorage.getItem("admin_token")
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  }
  if (token) headers["Authorization"] = `Bearer ${token}`

  const res = await fetch(`${base}${path}`, {
    ...options,
    headers,
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const detail = (data as any)?.detail
    const msg =
      typeof detail === "string"
        ? detail
        : Array.isArray(detail)
          ? detail.map((d: any) => d.msg).join(", ")
          : res.statusText || "Request failed"
    throw new Error(msg)
  }
  return data as T
}

export interface AuthResponse {
  access_token: string
  token_type: string
  user: {
    id: string
    email: string
    name: string
    xp?: number
    level?: number
    role?: string
  }
}

export async function apiRegister(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  return apiFetch("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  })
}

export async function apiLogin(
  email: string,
  password: string
): Promise<AuthResponse> {
  return apiFetch("/api/v1/auth/login/json", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
}

export async function apiAdminLogin(
  email: string,
  password: string
): Promise<AuthResponse> {
  return apiFetch("/api/v1/auth/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
}

export async function apiMe() {
  return apiFetch("/api/v1/auth/me")
}

export async function apiHealth(): Promise<boolean> {
  try {
    const base = getApiBase()
    if (!base) return false
    const res = await fetch(`${base}/api/v1/health`, { method: "GET" })
    return res.ok
  } catch {
    return false
  }
}
