import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { quizzes } from "@/data/quizzes"

export default function QuizzesPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">{t("quiz.title")}</h1>
      <p className="text-muted mb-8">{t("quiz.subtitle")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:border-primary/40 transition">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{quiz.title}</CardTitle>
                {quiz.slug === "daily" && <Badge>🔥 Hot</Badge>}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted">{quiz.description}</p>
              <p className="text-sm text-muted">
                {quiz.questions.length} {t("quiz.questions")} \u00b7 {Math.round(quiz.timeLimitSec / 60)} {t("quiz.minutes")}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">+{quiz.xpReward} XP</span>
                <Link to={`/quiz/${quiz.slug}`}><Button size="sm">{t("quiz.start")}</Button></Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
