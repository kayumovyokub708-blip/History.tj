import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const leaders = [
  { rank: 1, name: "Абдулло Р.", xp: 2488, level: 18 },
  { rank: 2, name: "Муҳаммад С.", xp: 2410, level: 17 },
  { rank: 3, name: "Фаридун Н.", xp: 2356, level: 17 },
  { rank: 4, name: "Нигина А.", xp: 2280, level: 16 },
  { rank: 5, name: "Саид М.", xp: 2195, level: 16 },
  { rank: 6, name: "Дилшод К.", xp: 2102, level: 15 },
  { rank: 7, name: "Зарина Ш.", xp: 2045, level: 15 },
  { rank: 8, name: "Рустам Б.", xp: 1988, level: 14 },
]

export default function LeaderboardPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
      <p className="text-muted mb-8">Top learners by XP</p>

      <Tabs defaultValue="global">
        <TabsList className="mb-6">
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="duel">Duel</TabsTrigger>
        </TabsList>

        <TabsContent value="global">
          <Card>
            <div className="divide-y divide-border">
              <div className="grid grid-cols-12 gap-2 px-6 py-3 text-xs text-muted font-medium">
                <div className="col-span-1">#</div>
                <div className="col-span-6">User</div>
                <div className="col-span-2 text-center">Level</div>
                <div className="col-span-3 text-right">XP</div>
              </div>
              {leaders.map((user) => (
                <div
                  key={user.rank}
                  className="grid grid-cols-12 gap-2 px-6 py-4 items-center hover:bg-surface/40 transition"
                >
                  <div className={`col-span-1 font-bold ${user.rank <= 3 ? "text-primary" : "text-muted"}`}>
                    {user.rank}
                  </div>
                  <div className="col-span-6 font-medium truncate">{user.name}</div>
                  <div className="col-span-2 text-center">
                    <Badge variant="secondary">Lv {user.level}</Badge>
                  </div>
                  <div className="col-span-3 text-right font-semibold tabular-nums">
                    {user.xp.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="weekly">
          <p className="text-center text-muted py-12">Weekly ranking coming soon</p>
        </TabsContent>
        <TabsContent value="monthly">
          <p className="text-center text-muted py-12">Monthly ranking coming soon</p>
        </TabsContent>
        <TabsContent value="duel">
          <p className="text-center text-muted py-12">Duel ranking coming soon</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
