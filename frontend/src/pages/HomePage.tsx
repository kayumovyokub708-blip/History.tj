import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StatCard } from "@/components/ui/stat-card"
import { cn } from "@/lib/utils"

const featuredPeople = [
  { name: "Исмоили Сомонӣ", period: "849–907", role: "Асосгузори давлати Сомониён" },
  { name: "Рӯдакӣ", period: "858–941", role: "Шоири бузурги форсӣ" },
  { name: "Ибни Сино", period: "980–1037", role: "Донишманд ва табиб" },
  { name: "Фирдавсӣ", period: "940–1020", role: "Муаллифи Шоҳнома" },
]

const leaders = [
  { rank: 1, name: "Абдулло Р.", xp: 2488 },
  { rank: 2, name: "Муҳаммад С.", xp: 2410 },
  { rank: 3, name: "Фаридун Н.", xp: 2356 },
  { rank: 4, name: "Нигина А.", xp: 2280 },
  { rank: 5, name: "Саид М.", xp: 2195 },
]

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Hero */}
      <section className="text-center space-y-6 mb-16">
        <Badge variant="secondary" className="mb-2">
          Платформаи таърихӣ
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Таърихро омӯз.
          <br />
          <span className="text-primary">Гузаштаро кашф кун.</span>
          <br />
          Меросаро нигоҳ дор.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Платформаи рақамӣ барои омӯзиш, кашф ва нигоҳдории
          таърихи Тоҷикистон ва Осиёи Марказӣ
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link to="/encyclopedia" className={cn(buttonVariants({ size: "lg" }))}>
            Encyclopedia
          </Link>
          <Link to="/quiz" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
            Take a Quiz
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
        <StatCard value="540+" label="Historical Figures" />
        <StatCard value="830+" label="Events" />
        <StatCard value="1,240+" label="Articles" />
        <StatCard value="5,200+" label="Quiz Questions" />
      </section>

      {/* Featured People */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">👑 Historical Figures</h2>
          <Link to="/encyclopedia" className="text-sm text-primary hover:underline">
            View all →
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

      {/* Two column */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔥</span>
              <CardTitle>Daily Quiz</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">10 Questions · 5 min</p>
            <div className="flex items-center justify-between">
              <Badge>+100 XP</Badge>
              <Link to="/quiz" className={cn(buttonVariants())}>
                Start
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🗺️</span>
              <CardTitle>Interactive Map</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Explore historical places, battles and ancient cities
            </p>
            <Link to="/map" className={cn(buttonVariants({ variant: "secondary" }))}>
              Open Map
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Leaderboard Preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">🏆 Leaderboard</h2>
          <Link to="/leaderboard" className="text-sm text-primary hover:underline">
            Full ranking →
          </Link>
        </div>
        <Card>
          <div className="divide-y divide-border">
            {leaders.map((user) => (
              <div
                key={user.rank}
                className="flex items-center justify-between px-6 py-4 hover:bg-surface/40 transition"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-8 text-center font-bold ${
                      user.rank <= 3 ? "text-primary" : "text-muted"
                    }`}
                  >
                    {user.rank}
                  </span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <span className="font-semibold tabular-nums">{user.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
