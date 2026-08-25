import ContentCrudPage from "./ContentCrudPage"
import { articles } from "@/data/articles"

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

export default function AdminArticlesPage() {
  return (
    <ContentCrudPage
      type="articles"
      title="📝 Articles"
      seed={seed}
      titleKey="titleTj"
      titleKey2="title"
      fields={[
        { key: "titleTj", label: "Title (TJ)" },
        { key: "titleRu", label: "Title (RU)" },
        { key: "title", label: "Title (EN)" },
        { key: "slug", label: "Slug" },
        { key: "category", label: "Category" },
        { key: "period", label: "Period" },
        { key: "readTime", label: "Read time" },
        { key: "shortDesc", label: "Short (TJ)", type: "textarea" },
        { key: "content", label: "Content (TJ)", type: "textarea" },
      ]}
    />
  )
}
