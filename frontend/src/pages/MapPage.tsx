import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPublishedPlaces } from "@/data/places"
import { getLocalizedName } from "@/lib/getLocalized"
import { getCurrentLanguage } from "@/i18n"

export default function MapPage() {
  const { t } = useTranslation()
  const lang = getCurrentLanguage()
  const places = getPublishedPlaces()

  const items = [
    { icon: "📍", key: "places", count: String(places.length) },
    { icon: "⚔️", key: "battles", count: "45+" },
    { icon: "🏙️", key: "cities", count: String(places.length) },
    { icon: "🏛️", key: "monuments", count: "80+" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">🗺️ {t("map.title")}</h1>
        <p className="text-muted">{t("map.subtitle")}</p>
      </div>

      <Card className="mb-8 overflow-hidden">
        <div className="h-48 sm:h-56 bg-gradient-to-br from-primary/10 via-surface to-surface flex flex-col items-center justify-center gap-2 text-muted border-b border-border">
          <span className="text-5xl opacity-50">🗺️</span>
          <p className="text-sm">{t("map.comingSoon")}</p>
          <Badge variant="secondary">Leaflet / Mapbox · V1.5</Badge>
        </div>
        <CardContent className="p-5">
          <h2 className="font-semibold mb-3">{t("map.places")}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {places.map((p) => (
              <Link
                key={p.slug}
                to={`/encyclopedia/places/${p.slug}`}
                className="flex items-start gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 hover:border-primary/40 transition"
              >
                <span className="text-xl">📍</span>
                <div className="min-w-0">
                  <p className="font-semibold truncate">{getLocalizedName(p, lang)}</p>
                  {p.coordinates && (
                    <p className="text-xs text-muted font-mono">{p.coordinates}</p>
                  )}
                  {p.period && (
                    <Badge variant="outline" className="mt-1 text-[10px]">
                      {p.period}
                    </Badge>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
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
            <CardContent>
              <Badge variant="secondary">{item.count}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
