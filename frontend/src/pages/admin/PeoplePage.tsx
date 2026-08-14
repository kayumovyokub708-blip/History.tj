import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { people as initialPeople, type Person } from "@/data/people"

export default function AdminPeoplePage() {
  const [list] = useState<Person[]>(initialPeople)
  const [search, setSearch] = useState("")

  const filtered = list.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.nameTj.includes(search) ||
      (p.dynasty || "").toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">👑 People</h2>
          <p className="text-muted">{list.length} historical figures</p>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 px-3 rounded-lg bg-surface border border-border text-sm w-48 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button disabled title="Full CRUD with API in next step">
            + Add Person
          </Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted text-left">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Period</th>
                <th className="px-4 py-3 font-medium">Dynasty</th>
                <th className="px-4 py-3 font-medium">Years</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-border last:border-0 hover:bg-surface/40">
                  <td className="px-4 py-3">
                    <div className="font-medium">{p.nameTj}</div>
                    <div className="text-xs text-muted">{p.name}</div>
                  </td>
                  <td className="px-4 py-3 text-muted">{p.period || "—"}</td>
                  <td className="px-4 py-3 text-muted">{p.dynasty || "—"}</td>
                  <td className="px-4 py-3 text-muted">
                    {p.birthYear}–{p.deathYear}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={p.status === "published" ? "success" : "secondary"}>
                      {p.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Link to={`/encyclopedia/people/${p.slug}`}>
                        <Button size="sm" variant="ghost">View</Button>
                      </Link>
                      <Button size="sm" variant="ghost" disabled>Edit</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="border-dashed">
        <CardContent className="py-6 text-sm text-muted text-center">
          Full Create / Edit / Delete will connect to FastAPI + PostgreSQL next.
          Data is currently seeded in <code className="text-primary">src/data/people.ts</code>.
        </CardContent>
      </Card>
    </div>
  )
}
