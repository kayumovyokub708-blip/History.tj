import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { getLeaderboard } from "@/lib/quizLeaderboard"

export default function QuizzesPage() {
  const { t } = useTranslation()
  const [showCategories, setShowCategories] = useState(false)
  const top = getLeaderboard("daily").slice(0, 3)

  const modes = [
    {
      id: "main",
      icon: "🏆",
      title: t("quiz.modeHistory"),
      description: t("quiz.modeHistoryDesc"),
      cta: t("quiz.ctaStart"),
      to: "/quiz/daily",
      accent: "from-primary/20 via-primary/5 to-transparent",
      border: "border-primary/30 hover:border-primary/60",
      glow: true,
    },
    {
      id: "categories",
      icon: "👥",
      title: t("quiz.modeCategories"),
      description: t("quiz.modeCategoriesDesc"),
      cta: t("quiz.ctaExplore"),
      to: null as string | null,
      accent: "from-sky-500/15 via-transparent to-transparent",
      border: "border-sky-500/25 hover:border-sky-400/50",
      glow: false,
    },
    {
      id: "prize",
      icon: "💰",
      title: t("quiz.modePrize"),
      description: t("quiz.modePrizeDesc"),
      cta: t("quiz.ctaPrize"),
      to: "/quiz/daily?mode=prize",
      accent: "from-amber-500/20 via-amber-500/5 to-transparent",
      border: "border-amber-500/35 hover:border-amber-400/60",
      glow: true,
    },
    {
      id: "daily",
      icon: "⚡",
      title: t("quiz.modeDaily"),
      description: t("quiz.modeDailyDesc"),
      cta: t("quiz.ctaDaily"),
      to: "/quiz/daily?mode=daily",
      accent: "from-violet-500/15 via-transparent to-transparent",
      border: "border-violet-500/30 hover:border-violet-400/50",
      glow: false,
    },
    {
      id: "challenge",
      icon: "🎯",
      title: t("quiz.modeChallenge"),
      description: t("quiz.modeChallengeDesc"),
      cta: t("quiz.ctaChallenge"),
      to: "/quiz/daily?mode=challenge",
      accent: "from-rose-500/15 via-transparent to-transparent",
      border: "border-rose-500/30 hover:border-rose-400/50",
      glow: false,
    },
  ]

  const categories = [
    {
      id: "history",
      icon: "🏛️",
      title: t("quiz.catHistory"),
      description: t("quiz.catHistoryDesc"),
      to: "/quiz/samanid",
    },
    {
      id: "geography",
      icon: "🌍",
      title: t("quiz.catGeography"),
      description: t("quiz.catGeographyDesc"),
      to: "/quiz/daily",
    },
    {
      id: "culture",
      icon: "🎭",
      title: t("quiz.catCulture"),
      description: t("quiz.catCultureDesc"),
      to: "/quiz/daily",
    },
    {
      id: "people",
      icon: "👤",
      title: t("quiz.catPeople"),
      description: t("quiz.catPeopleDesc"),
      to: "/quiz/samanid",
    },
    {
      id: "tajikistan",
      icon: "🇹🇯",
      title: t("quiz.catTajikistan"),
      description: t("quiz.catTajikistanDesc"),
      to: "/quiz/daily",
    },
    {
      id: "world",
      icon: "🌎",
      title: t("quiz.catWorld"),
      description: t("quiz.catWorldDesc"),
      to: "/quiz/samanid",
    },
  ]

  const features = [
    { icon: "❤️", label: t("quiz.featLives") },
    { icon: "⏱️", label: t("quiz.featTimer") },
    { icon: "🔥", label: t("quiz.featStreaks") },
    { icon: "💎", label: t("quiz.featBonus") },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="text-center mb-10 sm:mb-12">
        <Badge className="mb-3 bg-primary/15 text-primary border border-primary/30 hover:bg-primary/20">
          {t("quiz.arenaBadge")}
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
          {t("quiz.arenaTitle")}
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
          {t("quiz.arenaSubtitle")}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
        {modes.map((mode) => {
          const inner = (
            <Card
              className={cn(
                "h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 cursor-pointer group",
                mode.border,
                mode.glow && "shadow-[0_0_30px_rgba(212,175,55,0.08)]"
              )}
            >
              <div className={cn("bg-gradient-to-br px-5 pt-6 pb-2", mode.accent)}>
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {mode.icon}
                </div>
                <h2 className="text-xl font-bold mb-1.5">{mode.title}</h2>
                <p className="text-sm text-muted leading-relaxed min-h-[2.5rem]">
                  {mode.description}
                </p>
              </div>
              <CardContent className="pt-4 pb-5">
                {mode.id === "prize" && (
                  <div className="mb-4 space-y-1.5 text-xs">
                    <div className="flex justify-between rounded-lg bg-surface/80 border border-border px-3 py-2">
                      <span>🥇 {t("quiz.prize1")}</span>
                      <span className="text-primary font-semibold">{t("quiz.prizeGold")}</span>
                    </div>
                    <div className="flex justify-between rounded-lg bg-surface/80 border border-border px-3 py-2">
                      <span>🥈 {t("quiz.prize2")}</span>
                      <span className="text-muted font-semibold">{t("quiz.prizeSilver")}</span>
                    </div>
                    <div className="flex justify-between rounded-lg bg-surface/80 border border-border px-3 py-2">
                      <span>🥉 {t("quiz.prize3")}</span>
                      <span className="text-amber-700 font-semibold">{t("quiz.prizeBronze")}</span>
                    </div>
                    <p className="text-[10px] text-muted/80 pt-1">{t("quiz.prizeNote")}</p>
                  </div>
                )}
                <Button
                  className={cn(
                    "w-full h-11 font-semibold",
                    mode.id === "prize" && "bg-amber-500 hover:bg-amber-400 text-black"
                  )}
                  onClick={
                    mode.id === "categories"
                      ? () => setShowCategories((v) => !v)
                      : undefined
                  }
                >
                  {mode.cta}
                </Button>
              </CardContent>
            </Card>
          )

          if (mode.id === "categories") {
            return (
              <div key={mode.id} onClick={() => setShowCategories((v) => !v)}>
                {inner}
              </div>
            )
          }

          return (
            <Link key={mode.id} to={mode.to!} className="block">
              {inner}
            </Link>
          )
        })}
      </div>

      {showCategories && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold">👥 {t("quiz.catTitle")}</h2>
              <p className="text-sm text-muted">{t("quiz.catSubtitle")}</p>
            </div>
            <Button variant="secondary" size="sm" onClick={() => setShowCategories(false)}>
              {t("quiz.catClose")}
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} to={cat.to} className="block group">
                <Card className="h-full border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5">
                  <CardContent className="p-4 sm:p-5">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform origin-left">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold mb-1">{cat.title}</h3>
                    <p className="text-xs text-muted mb-3 leading-snug">{cat.description}</p>
                    <span className="text-primary text-sm font-semibold group-hover:underline">
                      {t("quiz.catStart")}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-border bg-surface/50 p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              🏆 {t("quiz.lbTitle")}
            </h2>
            <p className="text-sm text-muted">{t("quiz.lbSubtitle")}</p>
          </div>
          <Link to="/quiz/daily">
            <Button size="sm" variant="secondary">
              {t("quiz.ctaPlayClimb")}
            </Button>
          </Link>
        </div>
        {top.length === 0 ? (
          <p className="text-sm text-muted text-center py-6">{t("quiz.lbEmpty")}</p>
        ) : (
          <div className="space-y-2">
            {top.map((e, i) => (
              <div
                key={`${e.name}-${e.date}`}
                className={cn(
                  "flex items-center justify-between rounded-xl border px-4 py-3",
                  i === 0
                    ? "border-primary/40 bg-primary/10"
                    : "border-border bg-background/40"
                )}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl w-8 text-center">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{e.name}</p>
                    <p className="text-xs text-muted">
                      {e.accuracy}% {t("quiz.accuracy")}
                    </p>
                  </div>
                </div>
                <span className="font-bold text-primary tabular-nums">{e.score}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs sm:text-sm text-muted">
        {features.map((f) => (
          <div
            key={f.label}
            className="rounded-xl border border-border bg-surface/40 py-3 px-2"
          >
            <div className="text-xl mb-1">{f.icon}</div>
            <div className="font-medium text-white/90">{f.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
