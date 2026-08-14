import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  { path: "/encyclopedia/people", icon: "👑", title: "Шахсиятҳо", titleEn: "People", count: "6", ready: true },
  { path: "/encyclopedia/events", icon: "⚔️", title: "Воқеаҳо", titleEn: "Events", count: "6", ready: true },
  { path: "/encyclopedia/places", icon: "🏛️", title: "Ҷойҳо", titleEn: "Places", count: "soon", ready: false },
  { path: "/encyclopedia/periods", icon: "📅", title: "Давраҳо", titleEn: "Periods", count: "soon", ready: false },
  { path: "/encyclopedia/dynasties", icon: "👨‍👩‍👧", title: "Сулолаҳо", titleEn: "Dynasties", count: "soon", ready: false },
  { path: "/encyclopedia/battles", icon: "🗡️", title: "Ҷангҳо", titleEn: "Battles", count: "soon", ready: false },
]

export default function EncyclopediaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Encyclopedia</h1>
        <p className="text-muted max-w-2xl">
          Донишномаи таърихӣ — шахсиятҳо, воқеаҳо, ҷойҳо, давраҳо ва сулолаҳо
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link key={cat.path} to={cat.ready ? cat.path : "#"}>
            <Card
              className={`h-full transition ${
                cat.ready ? "hover:border-primary/40 cursor-pointer" : "opacity-60"
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <CardTitle>{cat.title}</CardTitle>
                    <p className="text-sm text-muted mt-0.5">{cat.titleEn}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant={cat.ready ? "success" : "secondary"}>{cat.count}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
