import CategoryListPage from "./CategoryListPage"
import { getPublishedPlaces } from "@/data/places"

export default function PlacesPage() {
  const items = getPublishedPlaces().map((p) => ({
    slug: p.slug,
    title: p.nameTj,
    subtitle: p.name,
    badge: p.period,
    meta: p.shortDesc,
  }))
  return (
    <CategoryListPage
      title="🏛️ Ҷойҳо"
      description="Historical places of Central Asia"
      basePath="/encyclopedia/places"
      items={items}
    />
  )
}
