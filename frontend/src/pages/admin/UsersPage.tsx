import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockUsers = [
  { id: 1, name: "Абдулло Р.", email: "abdu@example.com", xp: 2488, level: 18, status: "active" },
  { id: 2, name: "Муҳаммад С.", email: "muhammad@example.com", xp: 2410, level: 17, status: "active" },
  { id: 3, name: "Нигина А.", email: "nigina@example.com", xp: 2280, level: 16, status: "active" },
  { id: 4, name: "Саид М.", email: "said@example.com", xp: 2195, level: 16, status: "banned" },
  { id: 5, name: "Дилшод К.", email: "dilshod@example.com", xp: 2102, level: 15, status: "active" },
]

export default function AdminUsersPage() {
  const { t } = useTranslation()
  const [search, setSearch] = useState("")

  const filtered = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{t("admin.usersTitle")}</h2>
          <p className="text-muted">
            {mockUsers.length} {t("admin.usersTotal")}
          </p>
        </div>
        <input
          type="search"
          placeholder={t("admin.searchUsers")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 px-3 rounded-lg bg-surface border border-border text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted text-left">
                <th className="px-4 py-3 font-medium">{t("admin.colId")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colName")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colEmail")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colXp")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colLevel")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colStatus")}</th>
                <th className="px-4 py-3 font-medium">{t("admin.colActions")}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">{u.id}</td>
                  <td className="px-4 py-3 font-medium">{u.name}</td>
                  <td className="px-4 py-3 text-muted">{u.email}</td>
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
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
