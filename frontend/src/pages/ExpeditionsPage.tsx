import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const expeditions = [
  {
    id: 1,
    title: "The Lost Manuscript",
    titleTj: "Дастхати ғоибшуда",
    period: "Samanid era",
    difficulty: "Medium",
    missions: 5,
    xp: 500,
    time: "45 min",
    status: "available",
    desc: "Follow clues across Bukhara to recover a lost historical manuscript.",
  },
  {
    id: 2,
    title: "Samanid Capital",
    titleTj: "Пойтахти Сомониён",
    period: "819–999",
    difficulty: "Easy",
    missions: 4,
    xp: 300,
    time: "30 min",
    status: "available",
    desc: "Explore the rise of the Samanid state through places, people and events.",
  },
  {
    id: 3,
    title: "Silk Road Secrets",
    titleTj: "Асрори Роҳи абришам",
    period: "Medieval",
    difficulty: "Hard",
    missions: 6,
    xp: 750,
    time: "60 min",
    status: "locked",
    desc: "Unlock after completing 2 expeditions. Trade routes, cities and cultures.",
  },
]

export default function ExpeditionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🧭</span>
          <h1 className="text-3xl font-bold">Expeditions</h1>
        </div>
        <p className="text-muted max-w-2xl">
          Миссияҳои таърихӣ — ҷойҳо ро ёбед, шахсиятҳо ро шинос, timeline ва map-ро
          ҳал кунед ва XP гиред. Signature feature of Histori.tj.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expeditions.map((exp) => (
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
                <Badge variant="secondary">{exp.period}</Badge>
                <Badge
                  variant={
                    exp.difficulty === "Easy"
                      ? "success"
                      : exp.difficulty === "Hard"
                      ? "destructive"
                      : "warning"
                  }
                >
                  {exp.difficulty}
                </Badge>
                {exp.status === "locked" && <Badge variant="outline">Locked</Badge>}
              </div>
              <CardTitle className="text-lg">{exp.title}</CardTitle>
              <p className="text-sm text-primary">{exp.titleTj}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted">{exp.desc}</p>
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{exp.missions} missions</span>
                <span>{exp.time}</span>
                <span className="text-primary font-semibold">+{exp.xp} XP</span>
              </div>
              {exp.status === "available" ? (
                <Button className="w-full" disabled>
                  Start Expedition (soon)
                </Button>
              ) : (
                <Button className="w-full" variant="secondary" disabled>
                  Locked
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-10 border-dashed">
        <CardContent className="py-8 text-center text-muted">
          <p className="mb-2">🧭 Expeditions engine coming in <strong className="text-white">V2.0</strong></p>
          <p className="text-sm">
            Missions · Map challenges · Timeline puzzles · Document analysis · Rewards
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
