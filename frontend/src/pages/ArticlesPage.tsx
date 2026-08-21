import CategoryListPage from "./CategoryListPage"
import { getPublishedArticles } from "@/data/articles"

export default function ArticlesPage() {
  const items = getPublishedArticles().map((a) => ({
    slug: a.slug,
    title: a.titleTj,
    subtitle: a.title,
    badge: a.readTime,
    meta: a.shortDesc,
  }))
  return (
    <CategoryListPage
      backTo="/"
      backLabel="Home"
      title="📝 Articles"
      description="Essays and explainers"
      basePath="/articles"
      items={items}
    />
  )
}
