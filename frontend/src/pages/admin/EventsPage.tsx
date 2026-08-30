import { useTranslation } from "react-i18next"
import ContentCrudPage from "./ContentCrudPage"
import { events } from "@/data/events"

export default function AdminEventsPage() {
  const { t } = useTranslation()
  return (
    <ContentCrudPage
      type="events"
      title={`⚔️ ${t("admin.pageEvents")}`}
      seed={events}
      titleKey="titleTj"
      titleKey2="title"
      fields={[
        { key: "titleTj", label: t("admin.fieldTitleTj") },
        { key: "title", label: t("admin.fieldTitleEn") },
        { key: "slug", label: t("admin.fieldSlug") },
        { key: "dateStart", label: t("admin.fieldDateStart") },
        { key: "dateEnd", label: t("admin.fieldDateEnd") },
        { key: "location", label: t("admin.fieldLocation") },
        { key: "period", label: t("admin.fieldPeriod") },
        { key: "shortDesc", label: t("admin.fieldShort"), type: "textarea" },
        { key: "description", label: t("admin.fieldDescription"), type: "textarea" },
      ]}
    />
  )
}
