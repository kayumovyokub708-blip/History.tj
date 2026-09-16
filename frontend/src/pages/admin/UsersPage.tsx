import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { loadRegistry, type RegisteredUser } from "@/pages/RegisterPage"

const mockUsers = [
  { id: "1", name: "Абдулло Р.", email: "abdu@example.com", xp: 2488, level: 18, status: "active" as const, firstName: "Абдулло", lastName: "Р.", createdAt: "", code: "—" },
  { id: "2", name: "Муҳаммад С.", email: "muhammad@example.com", xp: 2410, level: 17, status: "active" as const, firstName: "Муҳаммад", lastName: "С.", createdAt: "", code: "—" },
  { id: "3", name: "Нигина А.", email: "nigina@example.com", xp: 2280, level: 16, status: "active" as const, firstName: "Нигина", lastName: "А.", createdAt: "", code: "—" },
]

export default function AdminUsersPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || "tg").slice(0, 2)
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState<Array<RegisteredUser & { email?: string }>>([])

  const refresh = () => {
    const reg = loadRegistry()
    const mapped = reg.map((u) => ({
      ...u,
      email: `${u.firstName}.${u.lastName}@histori.local`.toLowerCase().replace(/\s+/g, ""),
    }))
    setUsers(
      mapped.length
        ? mapped
        : mockUsers.map((m) => ({
            id: m.id,
            firstName: m.firstName,
            lastName: m.lastName,
            name: m.name,
            code: m.code,
            createdAt: m.createdAt,
            xp: m.xp,
            level: m.level,
            status: m.status,
            email: m.email,
          }))
    )
  }

  useEffect(() => {
    refresh()
    const onFocus = () => refresh()
    window.addEventListener("focus", onFocus)
    return () => window.removeEventListener("focus", onFocus)
  }, [])

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      (u.email || "").toLowerCase().includes(search.toLowerCase()) ||
      u.firstName.toLowerCase().includes(search.toLowerCase()) ||
      u.lastName.toLowerCase().includes(search.toLowerCase())
  )

  const colCode = lang === "ru" ? "Код" : lang === "en" ? "Code" : "Код"
  const colDate = lang === "ru" ? "Дата" : lang === "en" ? "Date" : "Сана"

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{t("admin.usersTitle")}</h2>
          <p className="text-muted">
            {users.length} {t("admin.usersTotal")}
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder={t("admin.searchUsers")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 px-3 rounded-lg bg-surface border border-border text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button size="sm" variant="secondary" onClick={refresh}>
            ↻
          </Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted text-left">
                <th className="px-4 py-3 font-medium">{t("admin.colId")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colName")}</th>
                <th className="px-4 py-3 font-medium">{colCode}</th>
                <th className="px-4 py-3 font-medium">{colDate}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colXp")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colLevel")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colStatus")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colActions")}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 tabular-nums text-muted">{String(u.id).slice(0, 8)}</td>
                  <td className="px-4 py-3 font-medium">
                    {u.name}
                    <div className="text-xs text-muted font-normal">
                      {u.firstName} · {u.lastName}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-primary">{u.code}</td>
                  <td className="px-4 py-3 text-muted text-xs">
                    {u.createdAt ? new Date(u.createdAt).toLocaleString() : "—"}
                  </td>
                  <td className="px-4 py-3 tabular-nums">{u.xp}</td>
                  <td className="px-4 py-3">{u.level}</td>
                  <td className="px-4 py-3">
                    <Badge variant={u.status === "active" ? "success" : "destructive"}>
                      {u.status === "active" ? t("admin.statusActive") : t("admin.statusBanned")}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Button size="sm" variant="ghost">
                      {t("common.edit")}
                    </Button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted">
                    {lang === "ru" ? "Пользователей нет" : lang === "en" ? "No users" : "Корбар нест"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
