import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { events as initialEvents, type HistoricalEvent } from "@/data/events"

export default function AdminEventsPage() {
  const [list] = useState<HistoricalEvent[]>(initialEvents)
  const [search, setSearch] = useState("")

  const filtered = list.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.titleTj.includes(search) ||
      (e.period || "").toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">⚔️ Events</h2>
          <p className="text-muted">{list.length} historical events</p>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 px-3 rounded-lg bg-surface border border-border text-sm w-48 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button disabled>+ Add Event</Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted text-left">
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Period</th>
                <th className="px-4 py-3 font-medium">Location</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-b border-border last:border-0 hover:bg-surface/40">
                  <td className="px-4 py-3">
                    <div className="font-medium">{e.titleTj}</div>
                    <div className="text-xs text-muted">{e.title}</div>
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {e.dateStart}
                    {e.dateEnd ? `–${e.dateEnd}` : ""}
                  </td>
                  <td className="px-4 py-3 text-muted">{e.period || "—"}</td>
                  <td className="px-4 py-3 text-muted">{e.location || "—"}</td>
                  <td className="px-4 py-3">
                    <Badge variant={e.status === "published" ? "success" : "secondary"}>
                      {e.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Link to={`/encyclopedia/events/${e.slug}`}>
                      <Button size="sm" variant="ghost">View</Button>
                    </Link>
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
