import { useState, useEffect, useCallback, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  getQuizBySlug,
  type QuizDifficulty,
  type QuizOption,
  type QuizQuestion,
} from "@/data/quizzes"
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
  if (d === "easy")
    return "bg-emerald-500/15 text-emerald-400 border-emerald-500/40"
  if (d === "hard") return "bg-red-500/15 text-red-400 border-red-500/40"
  return "bg-amber-500/15 text-amber-400 border-amber-500/40"
}

type PreparedQuestion = QuizQuestion & {
  options: QuizOption[]
  difficulty: QuizDifficulty
}

function CircularTimer({
  seconds,
  max,
  critical,
}: {
  seconds: number
  max: number
  critical: boolean
}) {
  const r = 28
  const c = 2 * Math.PI * r
  const pct = Math.max(0, seconds / max)
  const offset = c * (1 - pct)

  return (
    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 72 72">
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-border"
        />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className={cn(
            "transition-[stroke-dashoffset] duration-1000 linear",
            critical ? "text-red-500" : "text-primary"
          )}
        />
      </svg>
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center font-mono text-lg sm:text-xl font-bold tabular-nums",
          critical && "text-red-400 animate-pulse"
        )}
      >
        {seconds}
      </div>
    </div>
  )
}

function Podium({
  entries,
  accuracyLabel,
}: {
  entries: LeaderboardEntry[]
  accuracyLabel: string
}) {
  const medals = ["🥇", "🥈", "🥉"]
  const podiumClass = ["quiz-podium-1", "quiz-podium-2", "quiz-podium-3"]
  const ring = [
    "border-primary/50 bg-primary/10 shadow-[0_0_24px_rgba(212,175,55,0.15)]",
    "border-slate-400/40 bg-slate-500/10",
    "border-amber-700/40 bg-amber-900/20",
  ]

  if (entries.length === 0) return null

  return (
    <div className="space-y-2">
      {entries.map((e, i) => (
        <div
          key={`${e.name}-${e.date}-${i}`}
          className={cn(
            "flex items-center justify-between rounded-xl border px-4 py-3.5 transition",
            ring[i] || "border-border bg-surface",
            podiumClass[i]
          )}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl w-9 text-center shrink-0">{medals[i]}</span>
            <div className="min-w-0">
              <p className="font-semibold truncate">{e.name}</p>
              <p className="text-xs text-muted">
                {e.accuracy}% {accuracyLabel}
              </p>
            </div>
          </div>
          <span className="font-bold text-primary tabular-nums text-lg shrink-0">
            {e.score}
          </span>
        </div>
      ))}
    </div>
  )
}

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
  const [prevLives, setPrevLives] = useState(3)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [showStreakBanner, setShowStreakBanner] = useState(false)
  const [questionTime, setQuestionTime] = useState(QUESTION_TIME)
  const [done, setDone] = useState(false)
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null)
  const [lastGain, setLastGain] = useState(0)
  const [floatXp, setFloatXp] = useState<number | null>(null)
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

  useEffect(() => {
    if (streak >= 3) {
      setShowStreakBanner(true)
      const id = setTimeout(() => setShowStreakBanner(false), 1800)
      return () => clearTimeout(id)
    }
  }, [streak])

  useEffect(() => {
    if (floatXp == null) return
    const id = setTimeout(() => setFloatXp(null), 1200)
    return () => clearTimeout(id)
  }, [floatXp])

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
    setPrevLives(3)
    setCorrectCount(0)
    setWrongCount(0)
    setScore(0)
    setStreak(0)
    setBestStreak(0)
    setShowStreakBanner(false)
    setQuestionTime(QUESTION_TIME)
    setDone(false)
    setFeedback(null)
    setLastGain(0)
    setFloatXp(null)
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
        setPrevLives(l)
        const next = l - 1
        if (next <= 0) setTimeout(() => finishQuiz(), 700)
        return Math.max(0, next)
      })
      return
    }
    const timer = setTimeout(() => setQuestionTime((x) => x - 1), 1000)
    return () => clearTimeout(timer)
  }, [questionTime, started, done, revealed, questions.length, finishQuiz])

  useEffect(() => {
    if (!started || done) return
    const timer = setInterval(() => {
      setElapsedSec(Math.floor((Date.now() - startTs.current) / 1000))
    }, 1000)
    return () => clearInterval(timer)
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
      setFloatXp(gain)
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
        setPrevLives(l)
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
    setFloatXp(null)
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
      <div className="max-w-lg mx-auto px-4 py-10 sm:py-14">
        <Card className="border-primary/25 overflow-hidden quiz-card-glow">
          <div className="bg-gradient-to-br from-primary/15 via-transparent to-transparent px-6 pt-8 pb-4 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <CardTitle className="text-2xl sm:text-3xl mb-2">{quiz.title}</CardTitle>
            <p className="text-muted text-sm max-w-sm mx-auto">{quiz.description}</p>
          </div>
          <CardContent className="space-y-6 pt-2 pb-8">
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { icon: "❤️", label: `3 ${t("quiz.lives")}` },
                { icon: "⏱️", label: `${QUESTION_TIME}${t("quiz.perQuestion")}` },
                { icon: "🔥", label: t("quiz.streakBonuses") },
                { icon: "🎯", label: `${quiz.questions.length} ${t("quiz.questions")}` },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-surface/80 border border-border p-3.5 text-center hover:border-primary/30 transition"
                >
                  <div className="text-2xl mb-1.5">{item.icon}</div>
                  <div className="font-semibold text-sm leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="text-xs text-muted space-y-1 text-center px-2">
              <p>
                🟢 {t("quiz.ptsEasy")} · 🟡 {t("quiz.ptsMedium")} · 🔴 {t("quiz.ptsHard")}
              </p>
              <p>{t("quiz.speedStreakHint")}</p>
            </div>
            {lb.length > 0 && (
              <div>
                <p className="text-sm font-semibold mb-3 text-center">
                  🏆 {t("quiz.topScores")}
                </p>
                <Podium entries={lb} accuracyLabel={t("quiz.accuracy")} />
              </div>
            )}
            <Button
              className="w-full text-base h-12 font-semibold shadow-lg shadow-primary/20"
              size="lg"
              onClick={startQuiz}
            >
              {t("quiz.startQuiz")}
            </Button>
            <Link
              to="/quiz"
              className="block text-center text-sm text-primary hover:underline"
            >
              ← {t("quiz.backToQuizzes")}
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (done) {
    const totalAnswered = correctCount + wrongCount
    const accuracy =
      totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0
    const mins = Math.floor(elapsedSec / 60)
    const secs = elapsedSec % 60
    const top3 = leaderboard.slice(0, 3)

    return (
      <div className="max-w-lg mx-auto px-4 py-10 sm:py-14">
        <Card className="overflow-hidden border-primary/20 quiz-result-enter">
          <div className="relative bg-gradient-to-br from-primary/25 via-primary/5 to-transparent p-8 text-center border-b border-border">
            <div className="text-5xl mb-3">🎉</div>
            <p className="text-sm text-muted mb-1">{t("quiz.quizComplete")}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary tabular-nums tracking-tight">
              {score}{" "}
              <span className="text-lg font-semibold text-primary/80">
                {t("quiz.pts")}
              </span>
            </h2>
            <p className="text-sm text-muted mt-2">
              {t("quiz.rank")} #{playerRank || "—"} · {accuracy}% {t("quiz.accuracy")}
            </p>
          </div>
          <CardContent className="pt-6 space-y-6 pb-8">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Stat label={t("quiz.correct")} value={String(correctCount)} tone="good" />
              <Stat label={t("quiz.wrong")} value={String(wrongCount)} tone="bad" />
              <Stat label={t("quiz.accuracy")} value={`${accuracy}%`} />
              <Stat label={t("quiz.bestStreak")} value={`🔥 ${bestStreak}`} />
              <Stat
                label={t("quiz.time")}
                value={`${mins}:${secs.toString().padStart(2, "0")}`}
              />
              <Stat
                label={t("quiz.xpReward")}
                value={`+${Math.round(
                  (correctCount / Math.max(1, questions.length)) * quiz.xpReward
                )}`}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                🏆 {t("quiz.leaderboard")}
              </h3>
              {top3.length === 0 ? (
                <p className="text-sm text-muted text-center">{t("quiz.noScoresYet")}</p>
              ) : (
                <Podium entries={top3} accuracyLabel={t("quiz.accuracy")} />
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 h-11 font-semibold" onClick={startQuiz}>
                {t("quiz.playAgain")}
              </Button>
              <Link to="/quiz" className="flex-1">
                <Button variant="secondary" className="w-full h-11">
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
  const diffText = t(
    `quiz.difficulty${q.difficulty[0].toUpperCase()}${q.difficulty.slice(1)}`
  )
  const diffClass = difficultyStyle(q.difficulty)
  const timerCritical = questionTime <= 5

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10 relative">
      {floatXp != null && (
        <div className="quiz-score-float fixed left-1/2 top-[28%] -translate-x-1/2 z-50 pointer-events-none">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-4 py-2 text-lg font-bold shadow-xl shadow-primary/30">
            💎 +{floatXp} {t("quiz.pts")}
          </span>
        </div>
      )}

      {showStreakBanner && streak >= 3 && (
        <div className="quiz-streak-banner mb-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 text-amber-300 px-4 py-2 text-sm font-semibold shadow-lg">
            🔥 {streak} {t("quiz.correct")}!
          </span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => {
            const alive = i < lives
            return (
              <span
                key={i}
                className={cn(
                  "text-2xl sm:text-3xl select-none transition-all duration-300",
                  alive
                    ? "opacity-100 quiz-heart-pop"
                    : "quiz-heart-lost opacity-25 grayscale scale-75"
                )}
                aria-hidden
              >
                ❤️
              </span>
            )
          })}
        </div>

        <div className="flex items-center gap-3 text-sm">
          {streak >= 3 && (
            <span className="hidden sm:inline font-semibold text-amber-400 animate-pulse">
              🔥 {streak}
            </span>
          )}
          <span className="font-bold text-primary tabular-nums text-base sm:text-lg rounded-lg bg-primary/10 border border-primary/25 px-3 py-1">
            {score} {t("quiz.pts")}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2 text-sm text-muted">
        <span className="font-medium">
          {t("quiz.question")} {index + 1}{" "}
          <span className="text-muted/70">/ {questions.length}</span>
        </span>
        <Badge variant="outline" className={cn("border font-medium", diffClass)}>
          {q.difficulty === "easy" && "🟢 "}
          {q.difficulty === "medium" && "🟡 "}
          {q.difficulty === "hard" && "🔴 "}
          {diffText}
        </Badge>
      </div>
      <div className="mb-5">
        <Progress value={progress} className="h-2.5 rounded-full" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
        <div className="flex justify-center sm:justify-start">
          <CircularTimer
            seconds={questionTime}
            max={QUESTION_TIME}
            critical={timerCritical}
          />
        </div>
        <p className="text-xs text-muted text-center sm:text-left sm:pt-2 flex-1">
          {t("quiz.timeLeft")}:{" "}
          <span
            className={cn(
              "font-mono font-bold",
              timerCritical ? "text-red-400" : "text-white"
            )}
          >
            {questionTime}s
          </span>
        </p>
      </div>

      <Card
        className={cn(
          "border-border/80 shadow-xl transition-all duration-300 relative overflow-hidden",
          feedback === "correct" && "ring-2 ring-emerald-500/60 border-emerald-500/40",
          feedback === "wrong" &&
            "ring-2 ring-red-500/60 border-red-500/40 quiz-wrong-shake"
        )}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <CardHeader className="pb-3 pt-6">
          <CardTitle className="text-lg sm:text-xl leading-snug font-semibold">
            {q.text}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pb-6">
          {q.options.map((opt, optIdx) => {
            let style =
              "border-border hover:border-primary/50 hover:bg-surface/80 active:scale-[0.99]"
            if (revealed) {
              if (opt.correct)
                style =
                  "border-emerald-500 bg-emerald-500/15 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.12)]"
              else if (selected === opt.id)
                style = "border-red-500 bg-red-500/15 text-red-100"
              else style = "border-border opacity-45"
            } else if (selected === opt.id) {
              style = "border-primary bg-primary/15"
            }
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                disabled={revealed}
                className={cn(
                  "w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 font-medium",
                  style
                )}
              >
                <span className="inline-flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-xs font-bold text-muted">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span>{opt.text}</span>
                </span>
              </button>
            )
          })}

          {revealed && feedback === "correct" && (
            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-300 flex items-center justify-between">
              <span className="font-semibold">✓ {t("quiz.correctFeedback")}</span>
              <span className="font-bold tabular-nums">
                +{lastGain} {t("quiz.pts")}
              </span>
            </div>
          )}
          {revealed && feedback === "wrong" && (
            <div className="rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-300">
              ✕ {t("quiz.wrongFeedback")}
              {lives <= 0
                ? ` — ${t("quiz.noLivesLeft")}`
                : ` — ${lives} ${lives === 1 ? t("quiz.lifeLeft") : t("quiz.livesLeft")}`}
            </div>
          )}

          {revealed && q.explanation && (
            <p className="text-sm text-muted leading-relaxed border-t border-border/50 pt-3">
              {q.explanation}
            </p>
          )}

          {revealed && lives > 0 && (
            <Button className="w-full mt-1 h-11 font-semibold" onClick={handleNext}>
              {index + 1 >= questions.length
                ? t("quiz.seeResults")
                : t("quiz.nextQuestion")}
            </Button>
          )}
          {revealed && lives <= 0 && (
            <Button className="w-full mt-1 h-11 font-semibold" onClick={finishQuiz}>
              {t("quiz.seeResults")}
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="mt-5 flex justify-between items-center text-xs text-muted">
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
    <div className="rounded-xl border border-border bg-surface/80 px-3 py-3.5 text-center hover:border-primary/20 transition">
      <p className="text-xs text-muted mb-1.5">{label}</p>
      <p
        className={cn(
          "font-bold tabular-nums text-base",
          tone === "good" && "text-emerald-400",
          tone === "bad" && "text-red-400"
        )}
      >
        {value}
      </p>
    </div>
  )
}
