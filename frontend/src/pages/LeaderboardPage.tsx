import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const leaders = [
  { rank: 1, name: "\u0410\u0431\u0434\u0443\u043b\u043b\u043e \u0420.", xp: 2488, level: 18 },
  { rank: 2, name: "\u041c\u0443\u04b3\u0430\u043c\u043c\u0430\u0434 \u0421.", xp: 2410, level: 17 },
  { rank: 3, name: "\u0424\u0430\u0440\u0438\u0434\u0443\u043d \u041d.", xp: 2356, level: 17 },
  { rank: 4, name: "\u041d\u0438\u0433\u0438\u043d\u0430 \u0410.", xp: 2280, level: 16 },
  { rank: 5, name: "\u0421\u0430\u0438\u0434 \u041c.", xp: 2195, level: 16 },
  { rank: 6, name: "\u0414\u0438\u043b\u0448\u043e\u0434 \u041a.", xp: 2102, level: 15 },
  { rank: 7, name: "\u0417\u0430\u0440\u0438\u043d\u0430 \u0428.", xp: 2045, level: 15 },
  { rank: 8, name: "\u0420\u0443\u0441\u0442\u0430\u043c \u0411.", xp: 1988, level: 14 },
]

export default function LeaderboardPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">{t("leaderboard.title")}</h1>
      <p className="text-muted mb-8">{t("leaderboard.subtitle")}</p>

      <Tabs defaultValue="global">
        <TabsList className="mb-6">
          <TabsTrigger value="global">{t("leaderboard.allTime")}</TabsTrigger>
          <TabsTrigger value="weekly">{t("leaderboard.weekly")}</TabsTrigger>
          <TabsTrigger value="monthly">{t("leaderboard.monthly")}</TabsTrigger>
        </TabsList>

        <TabsContent value="global">
          <Card>
            <div className="divide-y divide-border">
              <div className="grid grid-cols-12 gap-2 px-6 py-3 text-xs text-muted font-medium">
                <div className="col-span-1">#</div>
                <div className="col-span-6">{t("leaderboard.user")}</div>
                <div className="col-span-2 text-center">{t("leaderboard.level")}</div>
                <div className="col-span-3 text-right">{t("leaderboard.xp")}</div>
              </div>
              {leaders.map((user) => (
                <div
                  key={user.rank}
                  className="grid grid-cols-12 gap-2 px-6 py-4 items-center hover:bg-surface/40 transition"
                >
                  <div className={`col-span-1 font-bold ${user.rank <= 3 ? "text-primary" : "text-muted"}`}>
                    {user.rank}
                  </div>
                  <div className="col-span-6 font-medium">{user.name}</div>
                  <div className="col-span-2 text-center text-sm text-muted">{user.level}</div>
                  <div className="col-span-3 text-right font-semibold tabular-nums">
                    {user.xp.toLocaleString()} XP
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="weekly">
          <Card className="p-8 text-center text-muted">{t("common.loading")}</Card>
        </TabsContent>
        <TabsContent value="monthly">
          <Card className="p-8 text-center text-muted">{t("common.loading")}</Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
