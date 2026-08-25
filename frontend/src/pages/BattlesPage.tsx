import { useTranslation } from "react-i18next"
import CategoryListPage from "./CategoryListPage"
import { getPublishedBattles } from "@/data/battles"

export default function BattlesPage() {
  const { t } = useTranslation()
  const items = getPublishedBattles().map((b) => ({
    slug: b.slug,
    title: b.nameTj,
    subtitle: b.name,
    badge: b.date,
    meta: b.shortDesc,
  }))
  return (
    <CategoryListPage
      title={`🗡️ ${t("encyclopedia.battles")}`}
      description={t("encyclopedia.battlesSubtitle")}
      basePath="/encyclopedia/battles"
      items={items}
    />
  )
}
