import { useTranslation } from "react-i18next"
import ContentCrudPage from "./ContentCrudPage"
import { places } from "@/data/places"

export default function AdminPlacesPage() {
  const { t } = useTranslation()
  return (
    <ContentCrudPage
      type="places"
      title={`🏛️ ${t("admin.pagePlaces")}`}
      seed={places}
      titleKey="nameTj"
      titleKey2="name"
      fields={[
        { key: "nameTj", label: t("admin.fieldNameTj") },
        { key: "name", label: t("admin.fieldNameEn") },
        { key: "slug", label: t("admin.fieldSlug") },
        { key: "location", label: t("admin.fieldLocation") },
        { key: "period", label: t("admin.fieldPeriod") },
        { key: "shortDesc", label: t("admin.fieldShort"), type: "textarea" },
        { key: "description", label: t("admin.fieldDescription"), type: "textarea" },
      ]}
    />
  )
}
