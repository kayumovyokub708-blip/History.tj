import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VideosPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          {t("video.badge")}
        </Badge>
        <h1 className="text-3xl font-bold mb-2">{t("video.title")}</h1>
        <p className="text-muted max-w-2xl">{t("video.subtitle")}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-video bg-card/80 flex items-center justify-center text-4xl text-muted-foreground">
              ▶
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{t("video.comingTitle", { n: i })}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">{t("video.comingDesc")}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-xl border border-border bg-surface text-sm text-muted">
        {t("video.note")}
      </div>
    </div>
  )
}
