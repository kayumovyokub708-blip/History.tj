import CategoryListPage from "./CategoryListPage"
import { getPublishedBattles } from "@/data/battles"

export default function BattlesPage() {
  const items = getPublishedBattles().map((b) => ({
    slug: b.slug,
    title: b.nameTj,
    subtitle: b.name,
    badge: b.date,
    meta: b.shortDesc,
  }))
  return (
    <CategoryListPage
      title="🗡️ Ҷангҳо"
      description="Major battles"
      basePath="/encyclopedia/battles"
      items={items}
    />
  )
}
