import { useTranslation } from "react-i18next"
import ContentCrudPage from "./ContentCrudPage"
import { people } from "@/data/people"

export default function AdminPeoplePage() {
  const { t } = useTranslation()
  return (
    <ContentCrudPage
      type="people"
      title={`👑 ${t("admin.pagePeople")}`}
      seed={people}
      titleKey="nameTj"
      titleKey2="name"
      fields={[
        { key: "nameTj", label: t("admin.fieldNameTj") },
        { key: "name", label: t("admin.fieldNameEn") },
        { key: "slug", label: t("admin.fieldSlug") },
        { key: "title", label: t("admin.fieldTitle") },
        { key: "period", label: t("admin.fieldPeriod") },
        { key: "dynasty", label: t("admin.fieldDynasty") },
        { key: "birthYear", label: t("admin.fieldBirth") },
        { key: "deathYear", label: t("admin.fieldDeath") },
        { key: "shortBio", label: t("admin.fieldShortBio"), type: "textarea" },
        { key: "biography", label: t("admin.fieldBiography"), type: "textarea" },
      ]}
    />
  )
}
