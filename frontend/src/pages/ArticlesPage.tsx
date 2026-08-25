import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedArticles } from "@/data/articles"
import { getLocalized } from "@/lib/getLocalized"
import type { Language } from "@/i18n/types"

export default function ArticlesPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language as Language) || "tg"

  const items = getPublishedArticles().map((a) => ({
    slug: a.slug,
    title: getLocalized(a.title, lang),
    subtitle: undefined as string | undefined,
    badge: a.readTime ? getLocalized(a.readTime, lang) : undefined,
    meta: getLocalized(a.shortDesc, lang),
  }))

  return (
    <CategoryListPage
      backTo="/"
      backLabel={t("nav.home")}
      title={`📝 ${t("articles.title")}`}
      description={t("articles.subtitle")}
      basePath="/articles"
      items={items}
    />
  )
}
