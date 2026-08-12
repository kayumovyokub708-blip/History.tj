import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MapPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">🗺️ Interactive Map</h1>
        <p className="text-muted">
          Historical places, battles, ancient cities and monuments
        </p>
      </div>

      <Card className="mb-8 overflow-hidden">
        <div className="h-80 sm:h-96 bg-surface flex flex-col items-center justify-center gap-3 text-muted">
          <span className="text-6xl opacity-40">🗺️</span>
          <p className="text-sm">Interactive map coming in Version 1.5</p>
          <Badge variant="secondary">Leaflet / Mapbox planned</Badge>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: "📍", label: "Historical Places", count: "120+" },
          { icon: "⚔️", label: "Battles", count: "45+" },
          { icon: "🏙️", label: "Ancient Cities", count: "30+" },
          { icon: "🏛️", label: "Monuments", count: "80+" },
        ].map((item) => (
          <Card key={item.label}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <CardTitle className="text-base">{item.label}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{item.count}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
