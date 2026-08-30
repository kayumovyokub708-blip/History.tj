import { useTranslation } from "react-i18next"
import ContentCrudPage from "./ContentCrudPage"
import { articles } from "@/data/articles"

export default function AdminArticlesPage() {
  const { t } = useTranslation()
  const seed = articles.map((a) => ({
    id: a.id,
    slug: a.slug,
    titleTj: a.title.tg,
    titleRu: a.title.ru,
    title: a.title.en,
    category: a.category?.tg || "",
    period: a.period || "",
    readTime: a.readTime?.tg || "",
    shortDesc: a.shortDesc.tg,
    content: a.content.tg,
    status: a.status,
  }))
  return (
    <ContentCrudPage
      type="articles"
      title={`📝 ${t("admin.pageArticles")}`}
      seed={seed}
      titleKey="titleTj"
      titleKey2="title"
      fields={[
        { key: "titleTj", label: t("admin.fieldTitleTj") },
        { key: "titleRu", label: t("admin.fieldTitleRu") },
        { key: "title", label: t("admin.fieldTitleEn") },
        { key: "slug", label: t("admin.fieldSlug") },
        { key: "category", label: t("admin.fieldCategory") },
        { key: "period", label: t("admin.fieldPeriod") },
        { key: "readTime", label: t("admin.fieldReadTime") },
        { key: "shortDesc", label: t("admin.fieldShort"), type: "textarea" },
        { key: "content", label: t("admin.fieldContent"), type: "textarea" },
      ]}
    />
  )
}
