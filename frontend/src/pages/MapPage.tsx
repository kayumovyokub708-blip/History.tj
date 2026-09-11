import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPublishedPlaces } from "@/data/places"
import { getPublishedBattles } from "@/data/battles"
import { getLocalizedName } from "@/lib/getLocalized"
import { getCurrentLanguage } from "@/i18n"

declare global {
  interface Window {
    L?: any
  }
}

/** Approximate outline of Tajikistan (simplified polygon, lat/lng). */
const TAJIKISTAN_OUTLINE: [number, number][] = [
  [41.05, 70.0],
  [41.0, 70.6],
  [40.9, 71.3],
  [40.6, 71.8],
  [40.2, 71.6],
  [39.8, 71.9],
  [39.4, 73.5],
  [38.9, 74.8],
  [38.4, 74.9],
  [37.9, 74.5],
  [37.4, 74.8],
  [37.0, 74.5],
  [36.7, 72.5],
  [36.7, 71.0],
  [37.0, 69.5],
  [37.2, 68.3],
  [37.5, 67.8],
  [38.0, 67.6],
  [38.5, 67.5],
  [39.0, 67.6],
  [39.5, 68.0],
  [39.9, 68.5],
  [40.3, 69.0],
  [40.7, 69.5],
  [41.0, 69.8],
  [41.05, 70.0],
]

// Tight bounds for Tajikistan [south, west] → [north, east]
const TJ_BOUNDS: [[number, number], [number, number]] = [
  [36.65, 67.35],
  [41.15, 75.15],
]

function parseCoords(raw?: string): [number, number] | null {
  if (!raw) return null
  const parts = raw.split(",").map((s) => parseFloat(s.trim()))
  if (parts.length >= 2 && !Number.isNaN(parts[0]) && !Number.isNaN(parts[1])) {
    return [parts[0], parts[1]]
  }
  return null
}

function isInTajikistan(coords: [number, number]): boolean {
  const [lat, lng] = coords
  return (
    lat >= TJ_BOUNDS[0][0] &&
    lat <= TJ_BOUNDS[1][0] &&
    lng >= TJ_BOUNDS[0][1] &&
    lng <= TJ_BOUNDS[1][1]
  )
}

export default function MapPage() {
  const { t } = useTranslation()
  const lang = getCurrentLanguage()
  const allPlaces = getPublishedPlaces()
  // Map focuses on Tajikistan places; regional cities stay in encyclopedia list
  const places = allPlaces.filter((p) => {
    if (p.country === "Тоҷикистон" || p.country === "Tajikistan") return true
    const c = parseCoords(p.coordinates)
    return c ? isInTajikistan(c) : false
  })
  const battles = getPublishedBattles()
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
        const map = L.map(mapRef.current, {
          center: [38.86, 71.0],
          zoom: 7,
          scrollWheelZoom: true,
          minZoom: 6,
          maxZoom: 14,
          maxBounds: [
            [35.5, 65.5],
            [42.0, 76.5],
          ],
          maxBoundsViscosity: 0.7,
        })

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
        }).addTo(map)

        // Country outline
        L.polygon(TAJIKISTAN_OUTLINE, {
          color: "#d4a017",
          weight: 2.5,
          opacity: 0.95,
          fillColor: "#d4a017",
          fillOpacity: 0.08,
        }).addTo(map)

        // Fit to Tajikistan
        map.fitBounds(TJ_BOUNDS, { padding: [24, 24], maxZoom: 8 })

        places.forEach((p) => {
          const coords = parseCoords(p.coordinates)
          if (!coords) return
          const name = getLocalizedName(p, lang)
          const marker = L.marker(coords).addTo(map)
          marker.bindPopup(
            `<strong>${name}</strong><br/>${p.period || ""}<br/><a href="#/encyclopedia/places/${p.slug}">${t("common.view")}</a>`
          )
        })

        mapInstance.current = map
        setReady(true)
        setTimeout(() => map.invalidateSize(), 120)
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
    {
      icon: "📍",
      key: "places",
      count: String(places.length),
      to: "/encyclopedia/places",
    },
    {
      icon: "⚔️",
      key: "battles",
      count: String(Math.max(battles.length, 2)),
      to: "/encyclopedia/battles",
    },
    {
      icon: "🏙️",
      key: "cities",
      count: String(places.length),
      to: "/encyclopedia/places",
    },
    {
      icon: "🏛️",
      key: "monuments",
      count: String(places.length),
      to: "/encyclopedia/places",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">🗺️ {t("map.title")}</h1>
        <p className="text-muted">{t("map.subtitle")}</p>
      </div>

      <Card className="mb-8 overflow-hidden">
        <div className="relative w-full h-[400px] sm:h-[520px] bg-surface border-b border-border">
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
          <h2 className="font-semibold mb-3">{t("map.places")} — Тоҷикистон</h2>
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
          <Link key={item.key} to={item.to} className="block group">
            <Card className="h-full transition hover:border-primary/50 group-hover:bg-card/80">
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
          </Link>
        ))}
      </div>
    </div>
  )
}
