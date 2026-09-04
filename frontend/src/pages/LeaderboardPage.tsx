import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { getRanking, type RankEntry } from "@/lib/ranking"
import { useAuth } from "@/context/AuthContext"

function xpValue(e: RankEntry, period: "global" | "weekly" | "monthly") {
  if (period === "weekly") return e.weeklyXp
  if (period === "monthly") return e.monthlyXp
  return e.xp
}

function RankTable({
  period,
  currentUserId,
}: {
  period: "global" | "weekly" | "monthly"
  currentUserId?: string
}) {
  const { t } = useTranslation()
  const list = useMemo(() => getRanking(period), [period])

  if (list.length === 0) {
    return (
      <Card className="p-10 text-center space-y-2">
        <div className="text-3xl">🏆</div>
        <p className="font-medium">{t("leaderboard.emptyTitle", "Ҳанӯз рейтинг нест")}</p>
        <p className="text-sm text-muted">
          {t("leaderboard.emptyHint", "Quiz гузаред — XP гиред ва дар ҷадвал пайдо шавед!")}
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <div className="divide-y divide-border">
        <div className="grid grid-cols-12 gap-2 px-6 py-3 text-xs text-muted font-medium">
          <div className="col-span-1">#</div>
          <div className="col-span-5">{t("leaderboard.user")}</div>
          <div className="col-span-2 text-center">{t("leaderboard.level")}</div>
          <div className="col-span-2 text-center hidden sm:block">{t("nav.quiz")}</div>
          <div className="col-span-4 sm:col-span-2 text-right">{t("leaderboard.xp")}</div>
        </div>
        {list.map((user, i) => {
          const rank = i + 1
          const isMe = currentUserId && user.id === currentUserId
          const pts = xpValue(user, period)
          return (
            <div
              key={user.id}
              className={`grid grid-cols-12 gap-2 px-6 py-4 items-center transition ${
                isMe ? "bg-primary/10 border-l-2 border-primary" : "hover:bg-surface/40"
              }`}
            >
              <div
                className={`col-span-1 font-bold ${
                  rank === 1
                    ? "text-primary"
                    : rank === 2
                      ? "text-slate-300"
                      : rank === 3
                        ? "text-amber-600"
                        : "text-muted"
                }`}
              >
                {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : rank}
              </div>
              <div className="col-span-5 font-medium flex items-center gap-2 min-w-0">
                <span className="truncate">{user.name}</span>
                {isMe && (
                  <Badge variant="secondary" className="text-[10px] shrink-0">
                    {t("leaderboard.you", "Шумо")}
                  </Badge>
                )}
              </div>
              <div className="col-span-2 text-center text-sm text-muted">{user.level}</div>
              <div className="col-span-2 text-center text-sm text-muted hidden sm:block">
                {user.quizzes}
              </div>
              <div className="col-span-4 sm:col-span-2 text-right font-semibold tabular-nums">
                {pts.toLocaleString()} XP
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default function LeaderboardPage() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [tab, setTab] = useState("global")

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">{t("leaderboard.title")}</h1>
      <p className="text-muted mb-8">{t("leaderboard.subtitle")}</p>

      {user && (
        <Card className="mb-6 p-4 flex flex-wrap items-center justify-between gap-3 border-primary/30 bg-primary/5">
          <div>
            <p className="text-sm text-muted">{t("leaderboard.yourStats", "Омори шумо")}</p>
            <p className="font-semibold text-lg">{user.name}</p>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="text-center">
              <div className="font-bold text-primary">{user.xp.toLocaleString()}</div>
              <div className="text-muted text-xs">XP</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{user.level}</div>
              <div className="text-muted text-xs">{t("leaderboard.level")}</div>
            </div>
          </div>
        </Card>
      )}

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="global">{t("leaderboard.allTime")}</TabsTrigger>
          <TabsTrigger value="weekly">{t("leaderboard.weekly")}</TabsTrigger>
          <TabsTrigger value="monthly">{t("leaderboard.monthly")}</TabsTrigger>
        </TabsList>

        <TabsContent value="global">
          <RankTable period="global" currentUserId={user?.id} />
        </TabsContent>
        <TabsContent value="weekly">
          <RankTable period="weekly" currentUserId={user?.id} />
        </TabsContent>
        <TabsContent value="monthly">
          <RankTable period="monthly" currentUserId={user?.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
