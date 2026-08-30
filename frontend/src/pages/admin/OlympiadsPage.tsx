import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AdminOlympiadsPage() {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{t("admin.pageOlympiads")}</h2>
        <p className="text-muted">{t("admin.manageOlympiads")}</p>
      </div>
      <Card>
        <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">Histori Cup 2025</h3>
              <Badge variant="secondary">{t("admin.draft")}</Badge>
            </div>
            <p className="text-sm text-muted">90 {t("quiz.minutes")}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button size="sm" variant="secondary">{t("common.edit")}</Button>
            <Button size="sm" variant="ghost">{t("admin.questionsBtn")}</Button>
            <Button size="sm" variant="ghost">{t("admin.participants")}</Button>
            <Button size="sm" variant="ghost">{t("admin.liveMonitor")}</Button>
          </div>
        </CardContent>
      </Card>
      <p className="text-center text-muted py-8">{t("admin.noOlympiads")}</p>
    </div>
  )
}
