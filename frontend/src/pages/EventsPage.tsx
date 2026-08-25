import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPublishedEvents } from "@/data/events"

export default function EventsPage() {
  const { t } = useTranslation()
  const list = getPublishedEvents()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/encyclopedia" className="text-sm text-primary hover:underline">
          \u2190 {t("encyclopedia.title")}
        </Link>
        <h1 className="text-3xl font-bold mt-2">\u2694\ufe0f {t("encyclopedia.events")}</h1>
        <p className="text-muted">{t("encyclopedia.eventsSubtitle")}</p>
      </div>

      <div className="space-y-4">
        {list.map((e) => (
          <Link key={e.id} to={`/encyclopedia/events/${e.slug}`}>
            <Card className="hover:border-primary/40 transition cursor-pointer mb-4">
              <CardContent className="p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="sm:w-28 shrink-0">
                  <Badge variant="secondary" className="text-sm">
                    {e.dateStart}{e.dateEnd ? `\u2013${e.dateEnd}` : ""}
                  </Badge>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-1">
                    {e.period && <Badge variant="outline">{e.period}</Badge>}
                    {e.location && <span className="text-xs text-muted">\ud83d\udccd {e.location}</span>}
                  </div>
                  <h2 className="font-semibold text-lg">{e.titleTj}</h2>
                  <p className="text-sm text-muted">{e.title}</p>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{e.shortDesc}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
