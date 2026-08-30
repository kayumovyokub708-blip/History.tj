import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockQuizzes = [
  { id: 1, titleKey: "quiz.modeDaily", questions: 10, attempts: 3421, status: "published" },
  { id: 2, titleKey: "courses.items.samanid", questions: 15, attempts: 890, status: "published" },
  { id: 3, titleKey: "courses.items.ancient", questions: 20, attempts: 1205, status: "published" },
  { id: 4, titleKey: "quiz.modeHistory", questions: 12, attempts: 0, status: "draft" },
]

export default function AdminQuizzesPage() {
  const { t } = useTranslation()
  const statusLabel = (s: string) =>
    s === "draft" ? t("admin.draft") : t("admin.published")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold">{t("admin.pageQuizzes")}</h2>
          <p className="text-muted">{t("admin.manageQuizzes")}</p>
        </div>
        <Button>{t("admin.createQuiz")}</Button>
      </div>

      <div className="grid gap-4">
        {mockQuizzes.map((quiz) => (
          <Card key={quiz.id}>
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-semibold">{t(quiz.titleKey)}</h3>
                  <Badge variant={quiz.status === "published" ? "success" : "secondary"}>
                    {statusLabel(quiz.status)}
                  </Badge>
                </div>
                <p className="text-sm text-muted">
                  {quiz.questions} {t("admin.questions")} · {quiz.attempts.toLocaleString()}{" "}
                  {t("admin.attempts")}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="secondary">{t("common.edit")}</Button>
                <Button size="sm" variant="ghost">{t("admin.questionsBtn")}</Button>
                <Button size="sm" variant="ghost">{t("admin.stats")}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
