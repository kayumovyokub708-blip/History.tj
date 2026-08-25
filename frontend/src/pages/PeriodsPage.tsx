import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedPeriods } from "@/data/periods"

export default function PeriodsPage() {
  const { t } = useTranslation()
  const items = getPublishedPeriods().map((p) => ({
    slug: p.slug,
    title: p.nameTj,
    subtitle: p.name,
    badge: `${p.yearStart}–${p.yearEnd}`,
    meta: p.shortDesc,
  }))
  return (
    <CategoryListPage
      title={`📅 ${t("encyclopedia.periods")}`}
      description={t("encyclopedia.periodsSubtitle")}
      basePath="/encyclopedia/periods"
      items={items}
    />
  )
}
