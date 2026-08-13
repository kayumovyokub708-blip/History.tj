import { StatCard } from "@/components/ui/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentActivity = [
  { action: "User registered", detail: "abdu...@gmail.com", time: "2 min ago" },
  { action: "Quiz created", detail: "Samanid Empire Quiz", time: "15 min ago" },
  { action: "Course published", detail: "History of Tajikistan", time: "1 hour ago" },
  { action: "Expedition drafted", detail: "The Lost Manuscript", time: "3 hours ago" },
  { action: "Question edited", detail: "Q #124 in Daily Quiz", time: "5 hours ago" },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted">Overview of Histori.tj</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard value="9,704" label="Users" />
        <StatCard value="82" label="Courses" />
        <StatCard value="341" label="Quizzes" />
        <StatCard value="5,210" label="Questions" />
        <StatCard value="2" label="Expeditions" />
        <StatCard value="540" label="People" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-sm">{item.action}</p>
                    <p className="text-xs text-muted">{item.detail}</p>
                  </div>
                  <span className="text-xs text-muted whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href="/#/admin/courses"
              className="block p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition"
            >
              <div className="font-medium">+ Create Course</div>
              <div className="text-sm text-muted">Add a new learning path</div>
            </a>
            <a
              href="/#/admin/quizzes"
              className="block p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition"
            >
              <div className="font-medium">+ Create Quiz</div>
              <div className="text-sm text-muted">Add questions and options</div>
            </a>
            <a
              href="/#/admin/expeditions"
              className="block p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition"
            >
              <div className="font-medium">+ Create Expedition</div>
              <div className="text-sm text-muted">Missions, map & timeline challenges</div>
            </a>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Frontend Online</Badge>
            <Badge variant="secondary">Auth: Demo Mode</Badge>
            <Badge variant="warning">Backend not fully connected</Badge>
            <Badge variant="outline">Expeditions: V2.0</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
