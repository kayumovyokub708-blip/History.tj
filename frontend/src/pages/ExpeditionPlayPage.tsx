import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getExpeditionBySlug } from "@/data/expeditions"
import { getLocalized } from "@/lib/getLocalized"
import { saveExpeditionResult } from "@/lib/expeditionProgress"
import type { Language } from "@/i18n/types"
import { cn } from "@/lib/utils"

export default function ExpeditionPlayPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language as Language) || "tg"
  const { slug } = useParams()
  const expedition = slug ? getExpeditionBySlug(slug) : undefined

  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [saved, setSaved] = useState(false)

  const missions = expedition?.missions ?? []
  const mission = missions[step]
  const total = missions.length

  const xpEarned = useMemo(() => {
    if (!expedition) return 0
    if (total === 0) return 0
    return Math.round((correctCount / total) * expedition.xp)
  }, [correctCount, total, expedition])

  useEffect(() => {
    if (!finished || !expedition || saved) return
    saveExpeditionResult({
      slug: expedition.slug,
      titleKey: expedition.titleKey,
      correct: correctCount,
      total,
      xp: xpEarned,
      at: new Date().toISOString(),
    })
    setSaved(true)
  }, [finished, expedition, correctCount, total, xpEarned, saved])

  if (!expedition || expedition.status === "locked" || total === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-muted mb-4">{t("expeditions.locked")}</p>
        <Link to="/expeditions" className="text-primary hover:underline">
          ← {t("expeditions.title")}
        </Link>
      </div>
    )
  }

  const onSelect = (id: string) => {
    if (answered) return
    setSelected(id)
  }

  const onConfirm = () => {
    if (!selected || !mission || answered) return
    const opt = mission.options.find((o) => o.id === selected)
    const ok = !!opt?.correct
    setAnswered(true)
    if (ok) setCorrectCount((c) => c + 1)
  }

  const onNext = () => {
    if (step + 1 >= total) {
      setFinished(true)
      return
    }
    setStep((s) => s + 1)
    setSelected(null)
    setAnswered(false)
  }

  if (finished) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">🧭 {t("expeditions.complete")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted">
              {t(`expeditions.items.${expedition.titleKey}.title`)}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary">
                {correctCount}/{total} {t("expeditions.correct")}
              </Badge>
              <Badge variant="success">+{xpEarned} XP</Badge>
            </div>
            <p className="text-xs text-muted">{t("expeditions.savedHint")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                to="/expeditions"
                className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 shadow-sm"
              >
                {t("expeditions.backList")}
              </Link>
              <Button
                variant="secondary"
                onClick={() => {
                  setStep(0)
                  setSelected(null)
                  setAnswered(false)
                  setCorrectCount(0)
                  setFinished(false)
                  setSaved(false)
                }}
              >
                {t("expeditions.playAgain")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const correctId = mission.options.find((o) => o.correct)?.id

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link to="/expeditions" className="text-sm text-primary hover:underline">
        ← {t("expeditions.title")}
      </Link>

      <div className="mt-4 mb-6 flex items-center justify-between gap-2 flex-wrap">
        <h1 className="text-xl font-bold">
          {t(`expeditions.items.${expedition.titleKey}.title`)}
        </h1>
        <Badge variant="outline">
          {step + 1}/{total}
        </Badge>
      </div>

      <div className="h-2 rounded-full bg-surface mb-6 overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${((step + (answered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{getLocalized(mission.title, lang)}</CardTitle>
          <p className="text-sm text-muted mt-2">{getLocalized(mission.story, lang)}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-medium">{getLocalized(mission.question, lang)}</p>
          <div className="space-y-2">
            {mission.options.map((opt) => {
              const isSel = selected === opt.id
              const showResult = answered
              const isCorrect = opt.id === correctId
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onSelect(opt.id)}
                  disabled={answered}
                  className={cn(
                    "w-full text-left rounded-xl border px-4 py-3 transition text-sm",
                    !showResult && isSel && "border-primary bg-primary/10",
                    !showResult && !isSel && "border-border hover:border-primary/40",
                    showResult && isCorrect && "border-green-500 bg-green-500/10",
                    showResult && isSel && !isCorrect && "border-red-500 bg-red-500/10",
                    showResult && !isSel && !isCorrect && "opacity-60"
                  )}
                >
                  {getLocalized(opt.text, lang)}
                </button>
              )
            })}
          </div>

          <div className="flex gap-3 pt-2">
            {!answered ? (
              <Button className="w-full" disabled={!selected} onClick={onConfirm}>
                {t("expeditions.confirm")}
              </Button>
            ) : (
              <Button className="w-full" onClick={onNext}>
                {step + 1 >= total ? t("expeditions.finish") : t("expeditions.nextMission")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
