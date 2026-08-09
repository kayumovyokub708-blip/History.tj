import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AdminOlympiadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Olympiads</h2>
          <p className="text-muted">Manage competitions</p>
        </div>
        <Button>+ Create Olympiad</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge>Upcoming</Badge>
            <CardTitle>National History Olympiad</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted">Start</span>
              <p className="font-medium">12 August 2026</p>
            </div>
            <div>
              <span className="text-muted">Participants</span>
              <p className="font-medium">1,248 registered</p>
            </div>
            <div>
              <span className="text-muted">Duration</span>
              <p className="font-medium">90 minutes</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">Edit</Button>
            <Button size="sm" variant="ghost">Questions</Button>
            <Button size="sm" variant="ghost">Participants</Button>
            <Button size="sm" variant="ghost">Live Monitor</Button>
          </div>
        </CardContent>
      </Card>

      <p className="text-center text-muted py-8">No other olympiads yet.</p>
    </div>
  )
}
