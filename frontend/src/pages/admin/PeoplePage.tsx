import ContentCrudPage from "./ContentCrudPage"
import { people } from "@/data/people"

export default function AdminPeoplePage() {
  return (
    <ContentCrudPage
      type="people"
      title="👑 People"
      seed={people}
      titleKey="nameTj"
      titleKey2="name"
      fields={[
        { key: "nameTj", label: "Name (TJ)" },
        { key: "name", label: "Name (EN)" },
        { key: "slug", label: "Slug" },
        { key: "title", label: "Title" },
        { key: "period", label: "Period" },
        { key: "dynasty", label: "Dynasty" },
        { key: "birthYear", label: "Birth year" },
        { key: "deathYear", label: "Death year" },
        { key: "shortBio", label: "Short bio", type: "textarea" },
        { key: "biography", label: "Biography", type: "textarea" },
      ]}
    />
  )
}
