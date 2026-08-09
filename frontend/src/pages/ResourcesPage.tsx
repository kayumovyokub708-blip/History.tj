import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const resources = [
  { type: "Books", icon: "📚", count: "24+" },
  { type: "Articles", icon: "📄", count: "80+" },
  { type: "Documents", icon: "📁", count: "45+" },
  { type: "Maps", icon: "🗺️", count: "18+" },
  { type: "Videos", icon: "🎬", count: "30+" },
  { type: "Primary Sources", icon: "⚖️", count: "60+" },
]

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Resources</h1>
      <p className="text-muted mb-8">Books, documents, maps and historical sources</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resources.map((r) => (
          <Card key={r.type} className="hover:border-primary/40 transition cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <CardTitle>{r.type}</CardTitle>
                  <p className="text-sm text-muted mt-0.5">{r.count} items</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Browse soon</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
