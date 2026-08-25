import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedDynasties } from "@/data/dynasties"

export default function DynastiesPage() {
  const { t } = useTranslation()
  const items = getPublishedDynasties().map((d) => ({
    slug: d.slug,
    title: d.nameTj,
    subtitle: d.name,
    badge: `${d.yearStart}\u2013${d.yearEnd}`,
    meta: d.shortDesc,
  }))
  return (
    <CategoryListPage
      title={`\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 ${t("encyclopedia.dynasties")}`}
      description={t("encyclopedia.dynastiesSubtitle")}
      basePath="/encyclopedia/dynasties"
      items={items}
    />
  )
}
