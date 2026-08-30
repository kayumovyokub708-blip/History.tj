import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminResourcesPage() {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{t("admin.pageResources")}</h2>
        <p className="text-muted">{t("admin.manageResources")}</p>
      </div>
      <Card>
        <CardContent className="p-8 text-center text-muted">
          <p className="text-4xl mb-3">🗂️</p>
          <p>{t("map.comingSoon")}</p>
          <Button className="mt-4" variant="secondary">
            {t("admin.addItem")}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
