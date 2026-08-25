import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedPlaces } from "@/data/places"

export default function PlacesPage() {
  const { t } = useTranslation()
  const items = getPublishedPlaces().map((p) => ({
    slug: p.slug,
    title: p.nameTj,
    subtitle: p.name,
    badge: p.period,
    meta: p.shortDesc,
  }))
  return (
    <CategoryListPage
      title={`\ud83c\udfdb\ufe0f ${t("encyclopedia.places")}`}
      description={t("encyclopedia.placesSubtitle")}
      basePath="/encyclopedia/places"
      items={items}
    />
  )
}
