import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card>
      <CardContent className="pt-5 pb-4 text-center">
        <p className="text-2xl font-bold text-primary tabular-nums">{value}</p>
        <p className="text-xs text-muted mt-1">{label}</p>
      </CardContent>
    </Card>
  )
}

export default function AdminDashboardPage() {
  const { t } = useTranslation()

  const recentActivity = [
    { action: "Quiz completed", detail: "Daily Quiz · +100 XP", time: "2m" },
    { action: "New registration", detail: "user@example.com", time: "15m" },
    { action: "Article published", detail: "Why Samanids matter", time: "1h" },
    { action: "Person updated", detail: "Ismail Samani", time: "3h" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">{t("admin.dashboard")}</h2>
        <p className="text-muted">{t("admin.dashboardSubtitle")}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard value="9,704" label={t("admin.statUsers")} />
        <StatCard value="82" label={t("admin.statCourses")} />
        <StatCard value="341" label={t("admin.statQuizzes")} />
        <StatCard value="5,210" label={t("admin.statQuestions")} />
        <StatCard value="2" label={t("admin.statExpeditions")} />
        <StatCard value="540" label={t("admin.statPeople")} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("admin.recentActivity")}</CardTitle>
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
            <CardTitle>{t("admin.quickActions")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link
              to="/admin/courses"
              className="block p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition"
            >
              <div className="font-medium">{t("admin.createCourse")}</div>
              <div className="text-sm text-muted">{t("admin.createCourseDesc")}</div>
            </Link>
            <Link
              to="/admin/quizzes"
              className="block p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition"
            >
              <div className="font-medium">{t("admin.createQuiz")}</div>
              <div className="text-sm text-muted">{t("admin.createQuizDesc")}</div>
            </Link>
            <Link
              to="/admin/expeditions"
              className="block p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition"
            >
              <div className="font-medium">{t("admin.createExpedition")}</div>
              <div className="text-sm text-muted">{t("admin.createExpeditionDesc")}</div>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("admin.systemStatus")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">{t("admin.frontendOnline")}</Badge>
            <Badge variant="secondary">{t("admin.authDemo")}</Badge>
            <Badge variant="warning">{t("admin.backendPartial")}</Badge>
            <Badge variant="outline">{t("admin.expeditionsV2")}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
