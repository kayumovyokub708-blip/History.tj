import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StatCard } from "@/components/ui/stat-card"
import { cn } from "@/lib/utils"
import { getRanking } from "@/lib/ranking"

const featuredPeople = [
  { name: "Исмоили Сомонӣ", period: "849–907", role: "Асосгузори давлати Сомониён" },
  { name: "Рӯдакӣ", period: "858–941", role: "Шоири бузурги форсӣ" },
  { name: "Ибни Сино", period: "980–1037", role: "Донишманд ва табиб" },
  { name: "Фирдавсӣ", period: "940–1020", role: "Муаллифи Шоҳнома" },
]

export default function HomePage() {
  const { t } = useTranslation()
  const leaders = getRanking("global").slice(0, 5)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <section className="text-center space-y-6 mb-16">
        <Badge variant="secondary" className="mb-2">
          {t("home.badge")}
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          {t("home.line1")}
          <br />
          <span className="text-primary">{t("home.line2")}</span>
          <br />
          {t("home.line3")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("home.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link to="/encyclopedia" className={cn(buttonVariants({ size: "lg" }))}>
            {t("home.ctaEncyclopedia")}
          </Link>
          <Link to="/quiz" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
            {t("home.ctaQuiz")}
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
        <StatCard value="540+" label={t("home.statPeople")} />
        <StatCard value="830+" label={t("home.statEvents")} />
        <StatCard value="1,240+" label={t("home.statArticles")} />
        <StatCard value="5,200+" label={t("home.statQuestions")} />
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">👑 {t("home.featuredPeople")}</h2>
          <Link to="/encyclopedia" className="text-sm text-primary hover:underline">
            {t("home.viewAll")} →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPeople.map((person) => (
            <Card key={person.name} className="hover:border-primary/40 transition-colors cursor-pointer group">
              <div className="h-36 bg-surface rounded-t-xl flex items-center justify-center">
                <span className="text-4xl opacity-40">👤</span>
              </div>
              <CardHeader className="pb-2">
                <div className="text-xs text-primary font-medium">{person.period}</div>
                <CardTitle className="text-base">{person.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted">{person.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4 mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🧠</span>
              <CardTitle>{t("home.dailyQuiz")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{t("home.dailyQuizMeta")}</p>
            <div className="flex items-center justify-between">
              <Badge>+100 XP</Badge>
              <Link to="/quiz" className={cn(buttonVariants())}>
                {t("home.start")}
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🗺️</span>
              <CardTitle>{t("home.interactiveMap")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{t("home.mapDesc")}</p>
            <Link to="/map" className={cn(buttonVariants({ variant: "secondary" }))}>
              {t("home.openMap")}
            </Link>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">🏆 {t("home.leaderboard")}</h2>
          <Link to="/leaderboard" className="text-sm text-primary hover:underline">
            {t("home.fullRanking")} →
          </Link>
        </div>
        <Card>
          {leaders.length === 0 ? (
            <div className="p-8 text-center text-muted text-sm">
              {t("leaderboard.emptyHint", "Quiz гузаред — аввалин дар рейтинг шавед!")}
            </div>
          ) : (
            <div className="divide-y divide-border">
              {leaders.map((user, i) => {
                const rank = i + 1
                return (
                  <div
                    key={user.id}
                    className="flex items-center justify-between px-6 py-4 hover:bg-surface/40 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-8 text-center font-bold ${
                          rank <= 3 ? "text-primary" : "text-muted"
                        }`}
                      >
                        {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : rank}
                      </span>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <span className="font-semibold tabular-nums">{user.xp.toLocaleString()} XP</span>
                  </div>
                )
              })}
            </div>
          )}
        </Card>
      </section>
    </div>
  )
}
