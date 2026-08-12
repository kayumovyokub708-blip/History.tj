import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const eras = [
  { year: "500 BC", title: "Ancient Period", desc: "Early civilizations in Central Asia" },
  { year: "224–651", title: "Sasanian Influence", desc: "Persian empire and regional states" },
  { year: "819–999", title: "Samanid Empire", desc: "Golden age of Tajik-Persian culture" },
  { year: "999–1220", title: "Ghaznavid & Karakhanid", desc: "Transition and cultural continuity" },
  { year: "1220–1500", title: "Mongol & Timurid", desc: "Conquest and renaissance" },
  { year: "1500–1868", title: "Later Empires", desc: "Bukhara, Kokand, regional khanates" },
  { year: "1868–1991", title: "Russian & Soviet", desc: "Modern transformation" },
  { year: "1991—", title: "Independent Tajikistan", desc: "Contemporary history" },
]

export default function TimelinePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">🕰️ Timeline</h1>
        <p className="text-muted">Таърихи Тоҷикистон аз қадим то имрӯз</p>
      </div>

      <div className="relative border-l-2 border-border ml-4 space-y-8">
        {eras.map((era, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" />
            <Badge variant="secondary" className="mb-2">{era.year}</Badge>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{era.title}</h3>
                <p className="text-sm text-muted mt-1">{era.desc}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
