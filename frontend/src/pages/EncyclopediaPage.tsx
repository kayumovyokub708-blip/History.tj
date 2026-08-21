import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  { path: "/encyclopedia/people", icon: "👑", title: "Шахсиятҳо", titleEn: "People", count: "6", ready: true },
  { path: "/encyclopedia/events", icon: "⚔️", title: "Воқеаҳо", titleEn: "Events", count: "6", ready: true },
  { path: "/encyclopedia/places", icon: "🏛️", title: "Ҷойҳо", titleEn: "Places", count: "4", ready: true },
  { path: "/encyclopedia/periods", icon: "📅", title: "Давраҳо", titleEn: "Periods", count: "4", ready: true },
  { path: "/encyclopedia/dynasties", icon: "👨‍👩‍👧", title: "Сулолаҳо", titleEn: "Dynasties", count: "3", ready: true },
  { path: "/encyclopedia/battles", icon: "🗡️", title: "Ҷангҳо", titleEn: "Battles", count: "2", ready: true },
  { path: "/articles", icon: "📝", title: "Мақолаҳо", titleEn: "Articles", count: "3", ready: true },
  { path: "/search", icon: "🔍", title: "Ҷустуҷӯ", titleEn: "Search", count: "all", ready: true },
]

export default function EncyclopediaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Encyclopedia</h1>
        <p className="text-muted max-w-2xl">
          Донишномаи таърихӣ — шахсиятҳо, воқеаҳо, ҷойҳо, давраҳо, сулолаҳо, ҷангҳо
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <Link key={cat.path} to={cat.path}>
            <Card className="h-full hover:border-primary/40 transition cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <CardTitle className="text-base">{cat.title}</CardTitle>
                    <p className="text-sm text-muted">{cat.titleEn}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="success">{cat.count}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
