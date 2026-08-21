import CategoryListPage from "./CategoryListPage"
import { getPublishedPeriods } from "@/data/periods"

export default function PeriodsPage() {
  const items = getPublishedPeriods().map((p) => ({
    slug: p.slug,
    title: p.nameTj,
    subtitle: p.name,
    badge: `${p.yearStart}–${p.yearEnd}`,
    meta: p.shortDesc,
  }))
  return (
    <CategoryListPage
      title="📅 Давраҳо"
      description="Historical periods"
      basePath="/encyclopedia/periods"
      items={items}
    />
  )
}
