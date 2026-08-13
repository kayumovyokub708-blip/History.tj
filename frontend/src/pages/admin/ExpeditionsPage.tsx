import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockExpeditions = [
  {
    id: 1,
    title: "The Lost Manuscript",
    status: "draft",
    missions: 5,
    xp: 500,
    period: "Samanid era",
  },
  {
    id: 2,
    title: "Samanid Capital",
    status: "draft",
    missions: 4,
    xp: 300,
    period: "819–999",
  },
]

export default function AdminExpeditionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">🧭 Expeditions</h2>
          <p className="text-muted">Signature feature — mission-based historical adventures</p>
        </div>
        <Button>+ Create Expedition</Button>
      </div>

      <div className="grid gap-4">
        {mockExpeditions.map((exp) => (
          <Card key={exp.id}>
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <Badge variant="secondary">{exp.status}</Badge>
                </div>
                <p className="text-sm text-muted">
                  {exp.period} · {exp.missions} missions · +{exp.xp} XP
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">Edit</Button>
                <Button size="sm" variant="ghost">Missions</Button>
                <Button size="sm" variant="ghost">Publish</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-base">Expedition Builder (V2.0)</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted space-y-1">
          <p>Expedition → Missions → Tasks → Questions → Rewards</p>
          <p>Mission types: Read, Investigate, Map, Timeline, Puzzle, Document analysis</p>
        </CardContent>
      </Card>
    </div>
  )
}
