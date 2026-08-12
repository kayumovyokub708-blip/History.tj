import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="mb-8">
        <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-surface border border-border flex items-center justify-center text-3xl">
            👤
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold">Guest User</h1>
            <p className="text-muted">Sign in to track progress</p>
            <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
              <Badge variant="secondary">Level 1</Badge>
              <Badge variant="outline">0 XP</Badge>
            </div>
          </div>
          <Link to="/login">
            <Button>Sign in</Button>
          </Link>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-5 text-center">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted">Quizzes</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted">Articles read</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted">Achievements</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>XP Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={0} className="mb-2" />
          <p className="text-sm text-muted">0 / 100 XP to Level 2</p>
        </CardContent>
      </Card>
    </div>
  )
}
