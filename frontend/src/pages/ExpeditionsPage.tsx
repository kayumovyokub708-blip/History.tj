import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const expeditions = [
  { id: 1, titleKey: "manuscript", periodKey: "samanid", difficultyKey: "medium", missions: 5, xp: 500, time: "45 min", status: "available" as const },
  { id: 2, titleKey: "capital", periodKey: "samanidYears", difficultyKey: "easy", missions: 4, xp: 300, time: "30 min", status: "available" as const },
  { id: 3, titleKey: "silkRoad", periodKey: "medieval", difficultyKey: "hard", missions: 6, xp: 750, time: "60 min", status: "locked" as const },
]

export default function ExpeditionsPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">\ud83e\udded</span>
          <h1 className="text-3xl font-bold">{t("expeditions.title")}</h1>
        </div>
        <p className="text-muted max-w-2xl">{t("expeditions.subtitle")}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expeditions.map((exp) => (
          <Card key={exp.id} className={cn("overflow-hidden transition", exp.status === "locked" ? "opacity-60" : "hover:border-primary/40")}>
            <div className="h-36 bg-surface flex items-center justify-center">
              <span className="text-5xl opacity-40">\ud83e\udded</span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <Badge variant="secondary">{t(`expeditions.periods.${exp.periodKey}`)}</Badge>
                <Badge variant={exp.difficultyKey === "easy" ? "success" : exp.difficultyKey === "hard" ? "destructive" : "warning"}>
                  {t(`expeditions.${exp.difficultyKey}`)}
                </Badge>
                {exp.status === "locked" && <Badge variant="outline">{t("expeditions.locked")}</Badge>}
              </div>
              <CardTitle className="text-lg">{t(`expeditions.items.${exp.titleKey}.title`)}</CardTitle>
              <p className="text-sm text-primary">{t(`expeditions.items.${exp.titleKey}.titleTj`)}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted">{t(`expeditions.items.${exp.titleKey}.desc`)}</p>
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{exp.missions} {t("expeditions.missions")}</span>
                <span>{exp.time}</span>
                <span className="text-primary font-semibold">+{exp.xp} XP</span>
              </div>
              {exp.status === "available" ? (
                <Button className="w-full" disabled>{t("expeditions.startSoon")}</Button>
              ) : (
                <Button className="w-full" variant="secondary" disabled>{t("expeditions.locked")}</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-10 border-dashed">
        <CardContent className="py-8 text-center text-muted">
          <p className="mb-2">\ud83e\udded {t("expeditions.comingV2")}</p>
          <p className="text-sm">{t("expeditions.comingFeatures")}</p>
        </CardContent>
      </Card>
    </div>
  )
}
