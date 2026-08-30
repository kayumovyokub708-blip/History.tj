import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockExpeditions = [
  {
    id: 1,
    titleKey: "expeditions.items.manuscript.title",
    status: "draft",
    missions: 5,
    xp: 500,
    periodKey: "expeditions.periods.samanid",
  },
  {
    id: 2,
    titleKey: "expeditions.items.capital.title",
    status: "draft",
    missions: 4,
    xp: 300,
    periodKey: "expeditions.periods.samanidYears",
  },
]

export default function AdminExpeditionsPage() {
  const { t } = useTranslation()
  const statusLabel = (s: string) =>
    s === "draft" ? t("admin.draft") : t("admin.published")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold">{t("admin.pageExpeditions")}</h2>
          <p className="text-muted">{t("admin.manageExpeditions")}</p>
        </div>
        <Button>{t("admin.createExpedition")}</Button>
      </div>

      <div className="grid gap-4">
        {mockExpeditions.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-semibold">{t(item.titleKey)}</h3>
                  <Badge variant="secondary">{statusLabel(item.status)}</Badge>
                </div>
                <p className="text-sm text-muted">
                  {item.missions} {t("admin.missions")} · {item.xp} {t("admin.xpLabel")} ·{" "}
                  {t(item.periodKey)}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="secondary">{t("common.edit")}</Button>
                <Button size="sm" variant="ghost">{t("admin.preview")}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
