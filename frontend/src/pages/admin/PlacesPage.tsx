import ContentCrudPage from "./ContentCrudPage"
import { places } from "@/data/places"

export default function AdminPlacesPage() {
  return (
    <ContentCrudPage
      type="places"
      title="🏛️ Places"
      seed={places}
      titleKey="nameTj"
      titleKey2="name"
      fields={[
        { key: "nameTj", label: "Name (TJ)" },
        { key: "name", label: "Name (EN)" },
        { key: "slug", label: "Slug" },
        { key: "location", label: "Location" },
        { key: "period", label: "Period" },
        { key: "shortDesc", label: "Short", type: "textarea" },
        { key: "description", label: "Description", type: "textarea" },
      ]}
    />
  )
}
