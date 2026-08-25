import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MapPage() {
  const { t } = useTranslation()
  const items = [
    { icon: "\ud83d\udccd", key: "places", count: "120+" },
    { icon: "\u2694\ufe0f", key: "battles", count: "45+" },
    { icon: "\ud83c\udfd9\ufe0f", key: "cities", count: "30+" },
    { icon: "\ud83c\udfdb\ufe0f", key: "monuments", count: "80+" },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">\ud83d\uddfa\ufe0f {t("map.title")}</h1>
        <p className="text-muted">{t("map.subtitle")}</p>
      </div>
      <Card className="mb-8 overflow-hidden">
        <div className="h-80 sm:h-96 bg-surface flex flex-col items-center justify-center gap-3 text-muted">
          <span className="text-6xl opacity-40">\ud83d\uddfa\ufe0f</span>
          <p className="text-sm">{t("map.comingSoon")}</p>
          <Badge variant="secondary">Leaflet / Mapbox</Badge>
        </div>
      </Card>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card key={item.key}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <CardTitle className="text-base">{t(`map.${item.key}`)}</CardTitle>
              </div>
            </CardHeader>
            <CardContent><Badge variant="secondary">{item.count}</Badge></CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
