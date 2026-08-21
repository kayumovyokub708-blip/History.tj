import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { searchAll } from "@/lib/search"

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const initial = params.get("q") || ""
  const [q, setQ] = useState(initial)

  const hits = useMemo(() => searchAll(q), [q])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setParams(q ? { q } : {})
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">🔍 Search</h1>
      <form onSubmit={onSubmit} className="flex gap-2 mb-8">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="People, events, places, articles..."
          className="flex-1 h-11 px-4 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button
          type="submit"
          className="px-5 rounded-lg bg-primary text-black font-medium hover:opacity-90"
        >
          Search
        </button>
      </form>

      {!q && <p className="text-muted">Type a query, e.g. «Сомонӣ» or «Bukhara»</p>}
      {q && hits.length === 0 && (
        <p className="text-muted">No results for «{q}»</p>
      )}

      <div className="space-y-3">
        {hits.map((h, i) => (
          <Link key={`${h.path}-${i}`} to={h.path}>
            <Card className="hover:border-primary/40 transition mb-3">
              <CardContent className="p-4 flex items-start gap-3">
                <Badge variant="outline">{h.type}</Badge>
                <div>
                  <div className="font-medium">{h.title}</div>
                  {h.subtitle && <div className="text-sm text-muted">{h.subtitle}</div>}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
