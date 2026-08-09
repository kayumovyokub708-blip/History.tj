import { useState } from "react"
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
          <h2 className="text-2xl font-bold">Users</h2>
          <p className="text-muted">{mockUsers.length} total users</p>
        </div>
        <input
          type="search"
          placeholder="Search users..."
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
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">XP</th>
                <th className="px-4 py-3 font-medium">Level</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-0 hover:bg-surface/40">
                  <td className="px-4 py-3 text-muted">{user.id}</td>
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-muted">{user.email}</td>
                  <td className="px-4 py-3">{user.xp.toLocaleString()}</td>
                  <td className="px-4 py-3">{user.level}</td>
                  <td className="px-4 py-3">
                    <Badge variant={user.status === "active" ? "success" : "destructive"}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">View</Button>
                      <Button size="sm" variant="ghost">
                        {user.status === "active" ? "Ban" : "Unban"}
                      </Button>
                    </div>
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
