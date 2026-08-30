import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getEventBySlug } from "@/data/events"
import { getLocalized } from "@/lib/getLocalized"
import { getCurrentLanguage } from "@/i18n"

export default function EventPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const event = slug ? getEventBySlug(slug) : undefined
  const lang = getCurrentLanguage()

  if (!event) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">{t("common.notFound")}</h1>
        <Link to="/encyclopedia/events" className="text-primary hover:underline">
          ← {t("encyclopedia.events")}
        </Link>
      </div>
    )
  }

  const title = getLocalized(
    { tg: event.titleTj, ru: event.titleRu || event.titleTj, en: event.title },
    lang
  )
  const description = getLocalized(
    {
      tg: event.description,
      ru: event.descriptionRu || event.description,
      en: event.descriptionEn || event.description,
    },
    lang
  )

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/encyclopedia/events" className="text-sm text-primary hover:underline">
        ← {t("encyclopedia.events")}
      </Link>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">
            {event.dateStart}
            {event.dateEnd ? `–${event.dateEnd}` : ""}
          </Badge>
          {event.period && <Badge variant="outline">{event.period}</Badge>}
        </div>
        <h1 className="text-3xl font-bold">{title}</h1>
        {event.location && (
          <p className="text-sm text-muted mt-2">📍 {event.location}</p>
        )}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>{t("encyclopedia.description")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {event.participants && event.participants.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("encyclopedia.participants")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              {event.participants.map((p, i) => (
                <p key={i}>• {p}</p>
              ))}
            </CardContent>
          </Card>
        )}
        {event.relatedPeople && event.relatedPeople.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("encyclopedia.related")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              {event.relatedPeople.map((s) => (
                <Link
                  key={s}
                  to={`/encyclopedia/people/${s}`}
                  className="block text-primary hover:underline"
                >
                  {s}
                </Link>
              ))}
            </CardContent>
          </Card>
        )}
        {event.sources && event.sources.length > 0 && (
          <Card className="sm:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">{t("encyclopedia.sources")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1 text-muted">
              {event.sources.map((s, i) => (
                <p key={i}>
                  {i + 1}. {s}
                </p>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
