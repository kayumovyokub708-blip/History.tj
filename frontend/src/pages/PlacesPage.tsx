import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedPlaces } from "@/data/places"
import { getLocalized, getLocalizedName } from "@/lib/getLocalized"
import { getCurrentLanguage } from "@/i18n"

export default function PlacesPage() {
  const { t } = useTranslation()
  const lang = getCurrentLanguage()
  const items = getPublishedPlaces().map((p) => ({
    slug: p.slug,
    title: getLocalizedName(p, lang),
    subtitle: p.name,
    badge: p.period,
    meta: getLocalized(
      {
        tg: p.shortDesc,
        ru: p.shortDescRu || p.shortDesc,
        en: p.shortDescEn || p.shortDesc,
      },
      lang
    ),
  }))
  return (
    <CategoryListPage
      title={`🏛️ ${t("encyclopedia.places")}`}
      subtitle={t("encyclopedia.placesSubtitle")}
      basePath="/encyclopedia/places"
      items={items}
    />
  )
}
