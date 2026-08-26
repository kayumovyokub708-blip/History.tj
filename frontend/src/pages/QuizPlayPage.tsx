import { useState, useEffect, useCallback, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { getQuizBySlug, type QuizDifficulty, type QuizOption, type QuizQuestion } from "@/data/quizzes"
import { useAuth } from "@/context/AuthContext"
import { cn } from "@/lib/utils"
import { getLeaderboard, saveScore, type LeaderboardEntry } from "@/lib/quizLeaderboard"

const QUESTION_TIME = 20

const POINTS: Record<QuizDifficulty, number> = {
  easy: 10,
  medium: 20,
  hard: 30,
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function streakBonus(streak: number): number {
  if (streak >= 10) return 20
  if (streak >= 5) return 10
  if (streak >= 3) return 5
  return 0
}

function difficultyStyle(d: QuizDifficulty) {
  if (d === "easy") return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
  if (d === "hard") return "bg-red-500/15 text-red-400 border-red-500/30"
  return "bg-amber-500/15 text-amber-400 border-amber-500/30"
}

type PreparedQuestion = QuizQuestion & { options: QuizOption[]; difficulty: QuizDifficulty }

export default function QuizPlayPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const quiz = slug ? getQuizBySlug(slug) : undefined
  const { user } = useAuth()

  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<PreparedQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [lives, setLives] = useState(3)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [questionTime, setQuestionTime] = useState(QUESTION_TIME)
  const [done, setDone] = useState(false)
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null)
  const [lastGain, setLastGain] = useState(0)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [playerRank, setPlayerRank] = useState(0)
  const [soundOn, setSoundOn] = useState(true)
  const startTs = useRef<number>(Date.now())
  const [elapsedSec, setElapsedSec] = useState(0)
  const scoreRef = useRef(0)
  const correctRef = useRef(0)
  const wrongRef = useRef(0)
  const bestStreakRef = useRef(0)

  useEffect(() => {
    scoreRef.current = score
  }, [score])
  useEffect(() => {
    correctRef.current = correctCount
  }, [correctCount])
  useEffect(() => {
    wrongRef.current = wrongCount
  }, [wrongCount])
  useEffect(() => {
    bestStreakRef.current = bestStreak
  }, [bestStreak])

  const finishQuiz = useCallback(() => {
    setDone(true)
    setElapsedSec(Math.floor((Date.now() - startTs.current) / 1000))
    if (!quiz) return
    const correct = correctRef.current
    const wrong = wrongRef.current
    const finalScore = scoreRef.current
    const total = correct + wrong
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
    const name = user?.name || user?.email?.split("@")[0] || "Guest"
    const entry: LeaderboardEntry = {
      name,
      score: finalScore,
      accuracy,
      date: new Date().toISOString(),
    }
    const list = saveScore(quiz.slug, entry)
    setLeaderboard(list)
    const rank = list.findIndex((e) => e.score === finalScore && e.name === name) + 1
    setPlayerRank(rank || list.length)
  }, [quiz, user])

  const startQuiz = useCallback(() => {
    if (!quiz) return
    const prepared: PreparedQuestion[] = shuffle(quiz.questions).map((q) => ({
      ...q,
      difficulty: q.difficulty ?? "medium",
      options: shuffle(q.options),
    }))
    setQuestions(prepared)
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setLives(3)
    setCorrectCount(0)
    setWrongCount(0)
    setScore(0)
    setStreak(0)
    setBestStreak(0)
    setQuestionTime(QUESTION_TIME)
    setDone(false)
    setFeedback(null)
    setLastGain(0)
    setStarted(true)
    startTs.current = Date.now()
    setElapsedSec(0)
    scoreRef.current = 0
    correctRef.current = 0
    wrongRef.current = 0
    bestStreakRef.current = 0
  }, [quiz])

  useEffect(() => {
    if (!started || done || revealed || !questions.length) return
    if (questionTime <= 0) {
      setRevealed(true)
      setFeedback("wrong")
      setStreak(0)
      setWrongCount((w) => {
        const next = w + 1
        wrongRef.current = next
        return next
      })
      setLives((l) => {
        const next = l - 1
        if (next <= 0) setTimeout(() => finishQuiz(), 600)
        return Math.max(0, next)
      })
      return
    }
    const t = setTimeout(() => setQuestionTime((x) => x - 1), 1000)
    return () => clearTimeout(t)
  }, [questionTime, started, done, revealed, questions.length, finishQuiz])

  useEffect(() => {
    if (!started || done) return
    const t = setInterval(() => {
      setElapsedSec(Math.floor((Date.now() - startTs.current) / 1000))
    }, 1000)
    return () => clearInterval(t)
  }, [started, done])

  const handleSelect = (optId: string) => {
    if (revealed || done) return
    const q = questions[index]
    if (!q) return
    setSelected(optId)
    setRevealed(true)
    const opt = q.options.find((o) => o.id === optId)
    const isCorrect = !!opt?.correct
    const base = POINTS[q.difficulty]
    const speedBonus = isCorrect ? Math.round((questionTime / QUESTION_TIME) * 10) : 0

    if (isCorrect) {
      const nextStreak = streak + 1
      const sBonus = streakBonus(nextStreak)
      const gain = base + speedBonus + sBonus
      setFeedback("correct")
      setLastGain(gain)
      setScore((s) => {
        const next = s + gain
        scoreRef.current = next
        return next
      })
      setCorrectCount((c) => {
        const next = c + 1
        correctRef.current = next
        return next
      })
      setStreak(nextStreak)
      setBestStreak((b) => {
        const next = Math.max(b, nextStreak)
        bestStreakRef.current = next
        return next
      })
    } else {
      setFeedback("wrong")
      setLastGain(0)
      setStreak(0)
      setWrongCount((w) => {
        const next = w + 1
        wrongRef.current = next
        return next
      })
      setLives((l) => {
        const next = l - 1
        if (next <= 0) setTimeout(() => finishQuiz(), 700)
        return Math.max(0, next)
      })
    }
  }

  const handleNext = () => {
    if (lives <= 0) {
      finishQuiz()
      return
    }
    if (index + 1 >= questions.length) {
      finishQuiz()
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
    setRevealed(false)
    setFeedback(null)
    setLastGain(0)
    setQuestionTime(QUESTION_TIME)
  }

  if (!quiz) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="text-xl font-bold">{t("quiz.notFound")}</h1>
        <Link to="/quiz" className="text-primary hover:underline">
          ← {t("quiz.allQuizzes")}
        </Link>
      </div>
    )
  }

  if (!started) {
    const lb = getLeaderboard(quiz.slug).slice(0, 3)
    return (
      <div className="max-w-lg mx-auto px-4 py-12">
        <Card className="border-primary/20">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl">{quiz.title}</CardTitle>
            <p className="text-muted text-sm">{quiz.description}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-surface border border-border p-3 text-center">
                <div className="text-2xl mb-1">❤️</div>
                <div className="font-semibold">3 {t("quiz.lives")}</div>
              </div>
              <div className="rounded-lg bg-surface border border-border p-3 text-center">
                <div className="text-2xl mb-1">⏱️</div>
                <div className="font-semibold">
                  {QUESTION_TIME}
                  {t("quiz.perQuestion")}
                </div>
              </div>
              <div className="rounded-lg bg-surface border border-border p-3 text-center">
                <div className="text-2xl mb-1">🔥</div>
                <div className="font-semibold">{t("quiz.streakBonuses")}</div>
              </div>
              <div className="rounded-lg bg-surface border border-border p-3 text-center">
                <div className="text-2xl mb-1">🎯</div>
                <div className="font-semibold">
                  {quiz.questions.length} {t("quiz.questions")}
                </div>
              </div>
            </div>
            <div className="text-xs text-muted space-y-1">
              <p>
                🟢 {t("quiz.ptsEasy")} · 🟡 {t("quiz.ptsMedium")} · 🔴 {t("quiz.ptsHard")}
              </p>
              <p>{t("quiz.speedStreakHint")}</p>
            </div>
            {lb.length > 0 && (
              <div>
                <p className="text-sm font-semibold mb-2">🏆 {t("quiz.topScores")}</p>
                <div className="space-y-1">
                  {lb.map((e, i) => (
                    <div
                      key={`${e.name}-${e.date}`}
                      className="flex justify-between text-sm rounded-md bg-surface px-3 py-2 border border-border"
                    >
                      <span>
                        {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"} {e.name}
                      </span>
                      <span className="font-semibold text-primary">{e.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <Button className="w-full" size="lg" onClick={startQuiz}>
              {t("quiz.startQuiz")}
            </Button>
            <Link to="/quiz" className="block text-center text-sm text-primary hover:underline">
              ← {t("quiz.backToQuizzes")}
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (done) {
    const totalAnswered = correctCount + wrongCount
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0
    const mins = Math.floor(elapsedSec / 60)
    const secs = elapsedSec % 60
    const top3 = leaderboard.slice(0, 3)
    const medals = ["🥇", "🥈", "🥉"]

    return (
      <div className="max-w-lg mx-auto px-4 py-12">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-br from-primary/20 to-transparent p-6 text-center border-b border-border">
            <p className="text-sm text-muted mb-1">{t("quiz.quizComplete")}</p>
            <h2 className="text-3xl font-bold text-primary tabular-nums">
              {score} {t("quiz.pts")}
            </h2>
            <p className="text-sm text-muted mt-1">
              {t("quiz.rank")} #{playerRank || "—"} · {accuracy}% {t("quiz.accuracy")}
            </p>
          </div>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Stat label={t("quiz.correct")} value={String(correctCount)} tone="good" />
              <Stat label={t("quiz.wrong")} value={String(wrongCount)} tone="bad" />
              <Stat label={t("quiz.accuracy")} value={`${accuracy}%`} />
              <Stat label={t("quiz.bestStreak")} value={`🔥 ${bestStreak}`} />
              <Stat label={t("quiz.time")} value={`${mins}:${secs.toString().padStart(2, "0")}`} />
              <Stat
                label={t("quiz.xpReward")}
                value={`+${Math.round((correctCount / Math.max(1, questions.length)) * quiz.xpReward)}`}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">🏆 {t("quiz.leaderboard")}</h3>
              <div className="space-y-2">
                {top3.length === 0 && (
                  <p className="text-sm text-muted">{t("quiz.noScoresYet")}</p>
                )}
                {top3.map((e, i) => (
                  <div
                    key={`${e.name}-${e.date}-${i}`}
                    className={cn(
                      "flex items-center justify-between rounded-lg border px-4 py-3",
                      i === 0 && "border-primary/40 bg-primary/5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl w-8 text-center">{medals[i]}</span>
                      <div>
                        <p className="font-medium">{e.name}</p>
                        <p className="text-xs text-muted">
                          {e.accuracy}% {t("quiz.accuracy")}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-primary tabular-nums">{e.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" onClick={startQuiz}>
                {t("quiz.playAgain")}
              </Button>
              <Link to="/quiz" className="flex-1">
                <Button variant="secondary" className="w-full">
                  {t("quiz.allQuizzes")}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const q = questions[index]
  if (!q) return null
  const progress = ((index + (revealed ? 1 : 0)) / questions.length) * 100
  const diffText = t(`quiz.difficulty${q.difficulty[0].toUpperCase()}${q.difficulty.slice(1)}`)
  const diffClass = difficultyStyle(q.difficulty)
  const timerCritical = questionTime <= 5

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-10">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "text-xl transition-all duration-300",
                i < lives ? "opacity-100 scale-100" : "opacity-25 scale-75 grayscale"
              )}
            >
              ❤️
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm">
          {streak >= 3 && (
            <span className="font-semibold text-amber-400 animate-pulse">🔥 {streak}</span>
          )}
          <span className="font-bold text-primary tabular-nums">
            {score} {t("quiz.pts")}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2 text-sm text-muted">
        <span>
          {t("quiz.question")} {index + 1} / {questions.length}
        </span>
        <Badge variant="outline" className={cn("border", diffClass)}>
          {diffText}
        </Badge>
      </div>

      <Progress value={progress} className="mb-3 h-2" />

      <div className="mb-6">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-muted">{t("quiz.timeLeft")}</span>
          <span
            className={cn(
              "font-mono font-bold tabular-nums",
              timerCritical ? "text-red-400 animate-pulse" : "text-white"
            )}
          >
            {questionTime}s
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-surface overflow-hidden border border-border">
          <div
            className={cn(
              "h-full transition-all duration-1000 linear rounded-full",
              timerCritical ? "bg-red-500" : "bg-primary"
            )}
            style={{ width: `${(questionTime / QUESTION_TIME) * 100}%` }}
          />
        </div>
      </div>

      <Card
        className={cn(
          "transition-all duration-300",
          feedback === "correct" && "ring-2 ring-emerald-500/50",
          feedback === "wrong" && "ring-2 ring-red-500/50"
        )}
      >
        <CardHeader>
          <CardTitle className="text-lg leading-snug">{q.text}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {q.options.map((opt) => {
            let style = "border-border hover:border-primary/50 hover:bg-surface/60"
            if (revealed) {
              if (opt.correct) style = "border-emerald-500 bg-emerald-500/10 text-emerald-100"
              else if (selected === opt.id) style = "border-red-500 bg-red-500/10 text-red-100"
              else style = "border-border opacity-50"
            } else if (selected === opt.id) {
              style = "border-primary bg-primary/10"
            }
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                disabled={revealed}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg border transition-all duration-200",
                  style
                )}
              >
                {opt.text}
              </button>
            )
          })}

          {revealed && feedback === "correct" && (
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-300 flex items-center justify-between">
              <span>✓ {t("quiz.correctFeedback")}</span>
              <span className="font-bold">
                +{lastGain} {t("quiz.pts")}
              </span>
            </div>
          )}
          {revealed && feedback === "wrong" && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-300">
              ✕ {t("quiz.wrongFeedback")}
              {lives <= 0
                ? ` — ${t("quiz.noLivesLeft")}`
                : ` — ${lives} ${lives === 1 ? t("quiz.lifeLeft") : t("quiz.livesLeft")}`}
            </div>
          )}

          {revealed && q.explanation && (
            <p className="text-sm text-muted pt-1">{q.explanation}</p>
          )}

          {revealed && lives > 0 && (
            <Button className="w-full mt-2" onClick={handleNext}>
              {index + 1 >= questions.length ? t("quiz.seeResults") : t("quiz.nextQuestion")}
            </Button>
          )}
          {revealed && lives <= 0 && (
            <Button className="w-full mt-2" onClick={finishQuiz}>
              {t("quiz.seeResults")}
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="mt-4 flex justify-between items-center text-xs text-muted">
        <button
          type="button"
          onClick={() => setSoundOn((s) => !s)}
          className="hover:text-white transition"
        >
          {soundOn ? `🔊 ${t("quiz.feedbackOn")}` : `🔇 ${t("quiz.feedbackOff")}`}
        </button>
        <span>
          {POINTS.easy}/{POINTS.medium}/{POINTS.hard} {t("quiz.pointsByDifficulty")}
        </span>
      </div>
    </div>
  )
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone?: "good" | "bad"
}) {
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-3 text-center">
      <p className="text-xs text-muted mb-1">{label}</p>
      <p
        className={cn(
          "font-bold tabular-nums",
          tone === "good" && "text-emerald-400",
          tone === "bad" && "text-red-400"
        )}
      >
        {value}
      </p>
    </div>
  )
}
