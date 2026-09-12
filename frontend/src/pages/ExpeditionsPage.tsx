import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { expeditions } from "@/data/expeditions"
import { loadExpeditionProgress, type ExpeditionResult } from "@/lib/expeditionProgress"

export default function ExpeditionsPage() {
  const { t } = useTranslation()
  const [history, setHistory] = useState<ExpeditionResult[]>([])

  useEffect(() => {
    setHistory(loadExpeditionProgress())
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🧭</span>
          <h1 className="text-3xl font-bold">{t("expeditions.title")}</h1>
        </div>
        <p className="text-muted max-w-2xl">{t("expeditions.subtitle")}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expeditions.map((exp) => {
          const best = history.find((h) => h.slug === exp.slug)
          return (
            <Card
              key={exp.id}
              className={cn(
                "overflow-hidden transition",
                exp.status === "locked" ? "opacity-60" : "hover:border-primary/40"
              )}
            >
              <div className="h-36 bg-surface flex items-center justify-center">
                <span className="text-5xl opacity-40">🧭</span>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <Badge variant="secondary">{t(`expeditions.periods.${exp.periodKey}`)}</Badge>
                  <Badge
                    variant={
                      exp.difficulty === "easy"
                        ? "success"
                        : exp.difficulty === "hard"
                          ? "destructive"
                          : "warning"
                    }
                  >
                    {t(`expeditions.${exp.difficulty}`)}
                  </Badge>
                  {best && (
                    <Badge variant="success">
                      {best.correct}/{best.total} · +{best.xp} XP
                    </Badge>
                  )}
                  {exp.status === "locked" && (
                    <Badge variant="outline">{t("expeditions.locked")}</Badge>
                  )}
                </div>
                <CardTitle className="text-lg">
                  {t(`expeditions.items.${exp.titleKey}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted">
                  {t(`expeditions.items.${exp.titleKey}.desc`)}
                </p>
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>
                    {exp.missions.length || "—"} {t("expeditions.missions")}
                  </span>
                  <span>{exp.time}</span>
                  <span className="text-primary font-semibold">+{exp.xp} XP</span>
                </div>
                {exp.status === "available" ? (
                  <Link
                    to={`/expeditions/${exp.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 h-10 px-4 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 shadow-sm"
                  >
                    {best ? t("expeditions.playAgain") : t("expeditions.start")}
                  </Link>
                ) : (
                  <Button className="w-full" variant="secondary" disabled>
                    {t("expeditions.locked")}
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">{t("expeditions.historyTitle")}</h2>
        {history.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="py-8 text-center text-muted text-sm">
              {t("expeditions.historyEmpty")}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {history.map((item, i) => (
              <Card key={`${item.slug}-${item.at}-${i}`}>
                <CardContent className="py-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-medium">
                      {t(`expeditions.items.${item.titleKey}.title`)}
                    </p>
                    <p className="text-xs text-muted">
                      {new Date(item.at).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">
                      {item.correct}/{item.total} {t("expeditions.correct")}
                    </Badge>
                    <Badge variant="success">+{item.xp} XP</Badge>
                    <Link
                      to={`/expeditions/${item.slug}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {t("expeditions.playAgain")}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
