import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { getPublishedPlaces } from "@/data/places"
import { getLocalizedName } from "@/lib/getLocalized"
import { getCurrentLanguage } from "@/i18n"

declare global {
  interface Window {
    L?: any
  }
}

/** Approximate outline of Tajikistan (lat, lng), counter-clockwise. */
const TAJIKISTAN_OUTLINE: [number, number][] = [
  [41.05, 70.0],
  [41.0, 69.8],
  [40.7, 69.5],
  [40.3, 69.0],
  [39.9, 68.5],
  [39.5, 68.0],
  [39.0, 67.6],
  [38.5, 67.5],
  [38.0, 67.6],
  [37.5, 67.8],
  [37.2, 68.3],
  [37.0, 69.5],
  [36.7, 71.0],
  [36.7, 72.5],
  [37.0, 74.5],
  [37.4, 74.8],
  [37.9, 74.5],
  [38.4, 74.9],
  [38.9, 74.8],
  [39.4, 73.5],
  [39.8, 71.9],
  [40.2, 71.6],
  [40.6, 71.8],
  [40.9, 71.3],
  [41.0, 70.6],
  [41.05, 70.0],
]

/** Outer ring covering the world (clockwise) so hole punches Tajikistan. */
const WORLD_RING: [number, number][] = [
  [-90, -180],
  [-90, 180],
  [90, 180],
  [90, -180],
]

const TJ_BOUNDS: [[number, number], [number, number]] = [
  [36.55, 67.25],
  [41.25, 75.25],
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
  const places = getPublishedPlaces().filter((p) => {
    if (p.country === "Тоҷикистон" || p.country === "Tajikistan") return true
    const c = parseCoords(p.coordinates)
    return c ? isInTajikistan(c) : false
  })
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
          maxZoom: 12,
          maxBounds: [
            [36.2, 66.8],
            [41.6, 75.6],
          ],
          maxBoundsViscosity: 1.0,
        })

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
        }).addTo(map)

        // Mask outside Tajikistan: solid dark fill with country as hole
        L.polygon([WORLD_RING, TAJIKISTAN_OUTLINE], {
          stroke: false,
          fillColor: "#0b1220",
          fillOpacity: 1,
          interactive: false,
        }).addTo(map)

        // Gold border of the country
        L.polyline([...TAJIKISTAN_OUTLINE, TAJIKISTAN_OUTLINE[0]], {
          color: "#d4a017",
          weight: 3,
          opacity: 1,
          interactive: false,
        }).addTo(map)

        map.fitBounds(TJ_BOUNDS, { padding: [12, 12], maxZoom: 8 })

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

  return (
    <div className="w-full flex flex-col" style={{ minHeight: "calc(100vh - 8rem)" }}>
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-3 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold">🗺️ {t("map.title")}</h1>
        <p className="text-muted text-sm mt-1">{t("map.subtitle")}</p>
      </div>

      <div className="relative flex-1 w-full min-h-[70vh] bg-[#0b1220]">
        <div ref={mapRef} className="absolute inset-0 z-0" />
        {!ready && !error && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0b1220]/90 text-muted text-sm">
            {t("common.loading")}
          </div>
        )}
        {error && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-[#0b1220] text-muted text-sm p-4 text-center">
            <span className="text-3xl opacity-50">🗺️</span>
            <p>{t("map.loadError")}</p>
          </div>
        )}
      </div>
    </div>
  )
}
