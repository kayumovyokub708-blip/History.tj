import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function OlympiadsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Olympiads</h1>
      <p className="text-muted mb-8">Compete at the highest level</p>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge>Upcoming</Badge>
            <span className="text-2xl">🏆</span>
          </div>
          <CardTitle className="text-2xl mt-2">National History Olympiad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="text-muted">Starts</span>
              <p className="font-semibold">12 August 2026</p>
            </div>
            <div>
              <span className="text-muted">Participants</span>
              <p className="font-semibold">1,248</p>
            </div>
            <div>
              <span className="text-muted">Duration</span>
              <p className="font-semibold">90 minutes</p>
            </div>
          </div>
          <Button asChild>
            <Link to="#">Register Interest</Link>
          </Button>
        </CardContent>
      </Card>

      <p className="text-center text-muted py-8">More olympiads will appear here soon.</p>
    </div>
  )
}
