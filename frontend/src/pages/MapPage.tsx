import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPublishedPlaces } from "@/data/places"
import { getLocalizedName } from "@/lib/getLocalized"
import { getCurrentLanguage } from "@/i18n"

declare global {
  interface Window {
    L?: any
  }
}

function parseCoords(raw?: string): [number, number] | null {
  if (!raw) return null
  const parts = raw.split(",").map((s) => parseFloat(s.trim()))
  if (parts.length >= 2 && !Number.isNaN(parts[0]) && !Number.isNaN(parts[1])) {
    return [parts[0], parts[1]]
  }
  return null
}

export default function MapPage() {
  const { t } = useTranslation()
  const lang = getCurrentLanguage()
  const places = getPublishedPlaces()
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    const loadLeaflet = () =>
      new Promise<void>((resolve, reject) => {
        if (window.L) {
          resolve()
          return
        }
        const cssId = "leaflet-css"
        if (!document.getElementById(cssId)) {
          const link = document.createElement("link")
          link.id = cssId
          link.rel = "stylesheet"
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          document.head.appendChild(link)
        }
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error("Leaflet load failed"))
        document.body.appendChild(script)
      })

    loadLeaflet()
      .then(() => {
        if (cancelled || !mapRef.current || !window.L) return
        if (mapInstance.current) {
          mapInstance.current.remove()
          mapInstance.current = null
        }

        const L = window.L
        // Center on Tajikistan
        const map = L.map(mapRef.current, {
          center: [38.86, 71.28],
          zoom: 6,
          scrollWheelZoom: true,
        })

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
        }).addTo(map)

        const bounds: [number, number][] = []

        places.forEach((p) => {
          const coords = parseCoords(p.coordinates)
          if (!coords) return
          bounds.push(coords)
          const name = getLocalizedName(p, lang)
          const marker = L.marker(coords).addTo(map)
          marker.bindPopup(
            `<strong>${name}</strong><br/>${p.period || ""}<br/><a href="#/encyclopedia/places/${p.slug}">${t("common.view")}</a>`
          )
        })

        if (bounds.length > 0) {
          map.fitBounds(bounds, { padding: [40, 40], maxZoom: 8 })
        }

        mapInstance.current = map
        setReady(true)
        // Leaflet needs a resize tick after container is visible
        setTimeout(() => map.invalidateSize(), 100)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [lang, places, t])

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
        <div className="relative w-full h-[360px] sm:h-[440px] bg-surface border-b border-border">
          <div ref={mapRef} className="absolute inset-0 z-0" />
          {!ready && !error && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-surface/80 text-muted text-sm">
              {t("common.loading")}
            </div>
          )}
          {error && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-surface text-muted text-sm p-4 text-center">
              <span className="text-3xl opacity-50">🗺️</span>
              <p>{t("map.loadError")}</p>
            </div>
          )}
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
