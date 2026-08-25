import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedArticles } from "@/data/articles"

export default function ArticlesPage() {
  const { t } = useTranslation()
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
      backLabel={t("nav.home")}
      title={`\ud83d\udcdd ${t("articles.title")}`}
      description={t("articles.subtitle")}
      basePath="/articles"
      items={items}
    />
  )
}
