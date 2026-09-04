import { useState, useEffect, useCallback, useRef } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
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
import { getLocalized } from "@/lib/getLocalized"
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
        <circle cx="36" cy="36" r={r} fill="none" stroke="currentColor" strokeWidth="5" className="text-border" />
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
          <span className="font-bold text-primary tabular-nums text-lg shrink-0">{e.score}</span>
        </div>
      ))}
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
    <div className="rounded-xl border border-border bg-surface/60 p-3 text-center">
      <div
        className={cn(
          "text-lg font-bold tabular-nums",
          tone === "good" && "text-emerald-400",
          tone === "bad" && "text-red-400"
        )}
      >
        {value}
      </div>
      <div className="text-xs text-muted mt-0.5">{label}</div>
    </div>
  )
}

export default function QuizPlayPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get("mode")
  const quiz = slug ? getQuizBySlug(slug) : undefined
  const { user, addXp } = useAuth()

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
    // Global ranking XP (profile + leaderboard)
    if (user) {
      const denom = Math.max(1, correct + wrong || quiz.questions.length)
      const xpGain = Math.max(5, Math.round((correct / denom) * quiz.xpReward))
      addXp(xpGain)
    }
  }, [quiz, user, addXp])

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
            <div className="text-4xl mb-3">
              {mode === "prize" ? "💰" : mode === "challenge" ? "🎯" : mode === "daily" ? "⚡" : "🎯"}
            </div>
            {mode === "prize" && (
              <Badge className="mb-2 bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {t("quiz.modeBadgePrize")}
              </Badge>
            )}
            {mode === "challenge" && (
              <Badge className="mb-2 bg-rose-500/20 text-rose-300 border border-rose-500/40">
                {t("quiz.modeBadgeChallenge")}
              </Badge>
            )}
            {mode === "daily" && (
              <Badge className="mb-2 bg-violet-500/20 text-violet-300 border border-violet-500/40">
                {t("quiz.modeBadgeDaily")}
              </Badge>
            )}
            <CardTitle className="text-2xl sm:text-3xl mb-2">{getLocalized(quiz.title)}</CardTitle>
            <p className="text-muted text-sm max-w-sm mx-auto">{getLocalized(quiz.description)}</p>
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
                <p className="text-sm font-semibold mb-3 text-center">🏆 {t("quiz.topScores")}</p>
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
    const accuracy =
      totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0
    const mins = Math.floor(elapsedSec / 60)
    const secs = elapsedSec % 60
    const top3 = leaderboard.slice(0, 3)
    const xpGain = Math.max(
      5,
      Math.round((correctCount / Math.max(1, questions.length)) * quiz.xpReward)
    )

    return (
      <div className="max-w-lg mx-auto px-4 py-10 sm:py-14">
        <Card className="overflow-hidden border-primary/20 quiz-result-enter">
          <div className="relative bg-gradient-to-br from-primary/25 via-primary/5 to-transparent p-8 text-center border-b border-border">
            <div className="text-5xl mb-3">🎉</div>
            <p className="text-sm text-muted mb-1">{t("quiz.quizComplete")}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary tabular-nums tracking-tight">
              {score}{" "}
              <span className="text-lg font-semibold text-primary/80">{t("quiz.pts")}</span>
            </h2>
            <p className="text-sm text-muted mt-2">
              {t("quiz.rank")} #{playerRank || "—"} · {accuracy}% {t("quiz.accuracy")}
            </p>
            {user && (
              <p className="text-sm text-primary font-semibold mt-2">+{xpGain} XP → 🏆 {t("nav.leaderboard")}</p>
            )}
            {!user && (
              <p className="text-xs text-muted mt-2">
                {t("profile.loginHint")} — XP ба рейтинг илова мешавад
              </p>
            )}
          </div>
          <CardContent className="pt-6 space-y-6 pb-8">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Stat label={t("quiz.correct")} value={String(correctCount)} tone="good" />
              <Stat label={t("quiz.wrong")} value={String(wrongCount)} tone="bad" />
              <Stat label={t("quiz.accuracy")} value={`${accuracy}%`} />
              <Stat label={t("quiz.bestStreak")} value={`🔥 ${bestStreak}`} />
              <Stat label={t("quiz.time")} value={`${mins}:${secs.toString().padStart(2, "0")}`} />
              <Stat label={t("quiz.xpReward")} value={`+${xpGain}`} />
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
              <Link to="/leaderboard" className="flex-1">
                <Button variant="secondary" className="w-full h-11">
                  🏆 {t("nav.leaderboard")}
                </Button>
              </Link>
            </div>
            <Link to="/quiz" className="block text-center text-sm text-primary hover:underline">
              ← {t("quiz.allQuizzes")}
            </Link>
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
                  "text-2xl sm:text-3xl select-none transition",
                  alive ? "opacity-100" : "opacity-25 grayscale"
                )}
              >
                ❤️
              </span>
            )
          })}
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="tabular-nums font-semibold">
            {score} {t("quiz.pts")}
          </Badge>
          {streak > 0 && (
            <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/40">
              🔥 {streak}
            </Badge>
          )}
        </div>
      </div>

      <Progress value={progress} className="mb-4 h-2" />

      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted">
            {index + 1} / {questions.length}
          </span>
          <span className={cn("text-xs px-2 py-0.5 rounded-full border", diffClass)}>{diffText}</span>
        </div>
        <CircularTimer seconds={questionTime} max={QUESTION_TIME} critical={timerCritical} />
      </div>

      <Card
        className={cn(
          "mb-5 transition border",
          feedback === "correct" && "border-emerald-500/50",
          feedback === "wrong" && "border-red-500/50"
        )}
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-lg sm:text-xl leading-snug">{getLocalized(q.text)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5">
          {q.options.map((opt) => {
            const isSelected = selected === opt.id
            const showCorrect = revealed && opt.correct
            const showWrong = revealed && isSelected && !opt.correct
            return (
              <button
                key={opt.id}
                type="button"
                disabled={revealed}
                onClick={() => handleSelect(opt.id)}
                className={cn(
                  "w-full text-left rounded-xl border px-4 py-3.5 text-sm sm:text-base transition",
                  "hover:border-primary/40 hover:bg-surface/80",
                  isSelected && !revealed && "border-primary bg-primary/10",
                  showCorrect && "border-emerald-500 bg-emerald-500/15",
                  showWrong && "border-red-500 bg-red-500/15",
                  revealed && !opt.correct && !isSelected && "opacity-50"
                )}
              >
                {getLocalized(opt.text)}
              </button>
            )
          })}
        </CardContent>
      </Card>

      {revealed && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {feedback === "correct" && lastGain > 0 && (
            <p className="text-sm text-emerald-400 font-medium flex-1">+{lastGain} {t("quiz.pts")}</p>
          )}
          {feedback === "wrong" && (
            <p className="text-sm text-red-400 font-medium flex-1">{t("quiz.wrong")}</p>
          )}
          <Button className="sm:ml-auto" onClick={handleNext}>
            {index + 1 >= questions.length || lives <= 0 ? t("quiz.finish", "Натиҷа") : t("quiz.next", "Баъдӣ")}
          </Button>
        </div>
      )}

      <p className="text-center text-xs text-muted mt-6 tabular-nums">
        ⏱️ {Math.floor(elapsedSec / 60)}:{(elapsedSec % 60).toString().padStart(2, "0")}
      </p>
    </div>
  )
}
