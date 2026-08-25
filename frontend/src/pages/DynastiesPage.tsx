import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedDynasties } from "@/data/dynasties"

export default function DynastiesPage() {
  const { t } = useTranslation()
  const items = getPublishedDynasties().map((d) => ({
    slug: d.slug,
    title: d.nameTj,
    subtitle: d.name,
    badge: `${d.yearStart}–${d.yearEnd}`,
    meta: d.shortDesc,
  }))
  return (
    <CategoryListPage
      title={`👨‍👩‍👧 ${t("encyclopedia.dynasties")}`}
      description={t("encyclopedia.dynastiesSubtitle")}
      basePath="/encyclopedia/dynasties"
      items={items}
    />
  )
}
