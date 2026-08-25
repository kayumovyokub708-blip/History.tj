import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { getQuizBySlug } from "@/data/quizzes"
import { useAuth } from "@/context/AuthContext"
import { cn } from "@/lib/utils"

export default function QuizPlayPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const quiz = slug ? getQuizBySlug(slug) : undefined
  const { user } = useAuth()

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [timeLeft, setTimeLeft] = useState(quiz?.timeLimitSec ?? 300)

  useEffect(() => {
    if (!quiz || done) return
    if (timeLeft <= 0) {
      setDone(true)
      return
    }
    const timer = setTimeout(() => setTimeLeft((x) => x - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, quiz, done])

  if (!quiz) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="text-xl font-bold">{t("quiz.notFound")}</h1>
        <Link to="/quiz" className="text-primary hover:underline">
          \u2190 {t("quiz.title")}
        </Link>
      </div>
    )
  }

  const q = quiz.questions[index]
  const progress = ((index + (revealed ? 1 : 0)) / quiz.questions.length) * 100

  const handleSelect = (optId: string) => {
    if (revealed) return
    setSelected(optId)
    setRevealed(true)
    const opt = q.options.find((o) => o.id === optId)
    if (opt?.correct) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (index + 1 >= quiz.questions.length) {
      setDone(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  if (done) {
    const xp = Math.round((score / quiz.questions.length) * quiz.xpReward)
    return (
      <div className="max-w-lg mx-auto px-4 py-16">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t("quiz.result")}</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-4xl font-bold text-primary">
              {score} / {quiz.questions.length}
            </div>
            <p className="text-muted">{t("quiz.score")}</p>
            <Badge>+{xp} XP</Badge>
            {!user && (
              <p className="text-sm text-muted">
                <Link to="/login" className="text-primary hover:underline">{t("auth.signIn")}</Link>{" "}
                {t("quiz.saveXpHint")}
              </p>
            )}
            <div className="flex gap-3 justify-center pt-4">
              <Button onClick={() => window.location.reload()}>{t("quiz.tryAgain")}</Button>
              <Link to="/quiz">
                <Button variant="secondary">{t("quiz.allQuizzes")}</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-4 text-sm text-muted">
        <span>
          {t("quiz.question")} {index + 1} / {quiz.questions.length}
        </span>
        <span className="tabular-nums font-medium text-white">
          \u23f1 {mins}:{secs.toString().padStart(2, "0")}
        </span>
      </div>
      <Progress value={progress} className="mb-6" />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg leading-snug">{q.text}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {q.options.map((opt) => {
            let style = "border-border hover:border-primary/50"
            if (revealed) {
              if (opt.correct) style = "border-emerald-500 bg-emerald-500/10"
              else if (selected === opt.id) style = "border-red-500 bg-red-500/10"
            } else if (selected === opt.id) {
              style = "border-primary bg-primary/10"
            }
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                disabled={revealed}
                className={cn("w-full text-left px-4 py-3 rounded-lg border transition", style)}
              >
                {opt.text}
              </button>
            )
          })}

          {revealed && q.explanation && (
            <p className="text-sm text-muted pt-2">{q.explanation}</p>
          )}

          {revealed && (
            <Button className="w-full mt-2" onClick={handleNext}>
              {index + 1 >= quiz.questions.length ? t("quiz.finish") : t("common.next")}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
