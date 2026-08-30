import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPlaceBySlug } from "@/data/places"
import { getLocalized, getLocalizedName } from "@/lib/getLocalized"
import { getCurrentLanguage } from "@/i18n"

export default function PlacePage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const place = slug ? getPlaceBySlug(slug) : undefined
  const lang = getCurrentLanguage()

  if (!place) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">{t("common.notFound")}</h1>
        <Link to="/encyclopedia/places" className="text-primary">
          ← {t("encyclopedia.places")}
        </Link>
      </div>
    )
  }

  const displayName = getLocalizedName(place, lang)
  const description = getLocalized(
    {
      tg: place.description,
      ru: place.descriptionRu || place.description,
      en: place.descriptionEn || place.description,
    },
    lang
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/encyclopedia/places" className="text-sm text-primary hover:underline">
        ← {t("encyclopedia.places")}
      </Link>
      <h1 className="text-3xl font-bold mt-4">{displayName}</h1>
      <div className="flex flex-wrap gap-2 mt-3">
        {place.period && <Badge variant="secondary">{place.period}</Badge>}
        {place.location && <Badge variant="outline">{place.location}</Badge>}
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>{t("encyclopedia.description")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
      {place.coordinates && (
        <p className="text-sm text-muted mt-4">
          {t("encyclopedia.coordinates")}: {place.coordinates}
        </p>
      )}
    </div>
  )
}
