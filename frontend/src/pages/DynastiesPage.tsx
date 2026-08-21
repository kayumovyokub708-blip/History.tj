import CategoryListPage from "./CategoryListPage"
import { getPublishedDynasties } from "@/data/dynasties"

export default function DynastiesPage() {
  const items = getPublishedDynasties().map((d) => ({
    slug: d.slug,
    title: d.nameTj,
    subtitle: d.name,
    badge: `${d.yearStart}–${d.yearEnd}`,
    meta: d.shortDesc,
  }))
  return (
    <CategoryListPage
      title="👨‍👩‍👧 Сулолаҳо"
      description="Ruling dynasties"
      basePath="/encyclopedia/dynasties"
      items={items}
    />
  )
}
