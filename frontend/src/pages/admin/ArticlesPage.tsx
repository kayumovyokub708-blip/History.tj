import ContentCrudPage from "./ContentCrudPage"
import { articles } from "@/data/articles"

export default function AdminArticlesPage() {
  return (
    <ContentCrudPage
      type="articles"
      title="📝 Articles"
      seed={articles}
      titleKey="titleTj"
      titleKey2="title"
      fields={[
        { key: "titleTj", label: "Title (TJ)" },
        { key: "title", label: "Title (EN)" },
        { key: "slug", label: "Slug" },
        { key: "category", label: "Category" },
        { key: "period", label: "Period" },
        { key: "readTime", label: "Read time" },
        { key: "shortDesc", label: "Short", type: "textarea" },
        { key: "content", label: "Content", type: "textarea" },
      ]}
    />
  )
}
