import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StatCard } from "@/components/ui/stat-card"

const featuredCourses = [
  { title: "History of Tajikistan", category: "National", lessons: 18 },
  { title: "Ancient Civilizations", category: "World", lessons: 12 },
  { title: "Samanid Empire", category: "Medieval", lessons: 9 },
  { title: "Modern Tajikistan", category: "Contemporary", lessons: 14 },
]

const leaders = [
  { rank: 1, name: "Абдулло Р.", xp: 2488 },
  { rank: 2, name: "Муҳаммад С.", xp: 2410 },
  { rank: 3, name: "Фаридун Н.", xp: 2356 },
  { rank: 4, name: "Нигина А.", xp: 2280 },
  { rank: 5, name: "Саид М.", xp: 2195 },
]

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Hero */}
      <section className="text-center space-y-6 mb-16">
        <Badge variant="secondary" className="mb-2">
          Educational Platform
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Таърихро омӯз.
          <br />
          <span className="text-primary">Донишатро санҷ.</span>
          <br />
          Қаҳрамони олимпиада шав.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn → Practice → Compete → Win
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button size="lg" asChild>
            <Link to="/courses">Start Learning</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/quizzes">Take a Quiz</Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
        <StatCard value="10,000+" label="Students" />
        <StatCard value="250+" label="Courses" />
        <StatCard value="5,000+" label="Questions" />
        <StatCard value="120+" label="Olympiad Participants" />
      </section>

      {/* Featured Courses */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Courses</h2>
          <Link to="/courses" className="text-sm text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCourses.map((course) => (
            <Card key={course.title} className="hover:border-primary/40 transition-colors cursor-pointer group">
              <div className="h-36 bg-surface rounded-t-xl flex items-center justify-center text-muted group-hover:bg-surface/80 transition">
                <span className="text-4xl opacity-40">📚</span>
              </div>
              <CardHeader className="pb-2">
                <div className="text-xs text-primary font-medium">{course.category}</div>
                <CardTitle className="text-base">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted">{course.lessons} lessons</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Two column: Daily Quiz + Upcoming Olympiad */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Daily Quiz */}
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔥</span>
              <CardTitle>Daily Quiz</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">10 Questions · 5 min</p>
            <div className="flex items-center justify-between">
              <Badge>+100 XP</Badge>
              <Button asChild>
                <Link to="/quizzes">Start</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Olympiad */}
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <CardTitle>National History Olympiad</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Starts: <strong className="text-white">12 August</strong></span>
              <span>Participants: <strong className="text-white">1,248</strong></span>
            </div>
            <Button variant="secondary" asChild>
              <Link to="/olympiads">View Olympiad</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Leaderboard Preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Leaderboard</h2>
          <Link to="/leaderboard" className="text-sm text-primary hover:underline">
            Full ranking →
          </Link>
        </div>
        <Card>
          <div className="divide-y divide-border">
            {leaders.map((user) => (
              <div
                key={user.rank}
                className="flex items-center justify-between px-6 py-4 hover:bg-surface/40 transition"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-8 text-center font-bold ${
                      user.rank <= 3 ? "text-primary" : "text-muted"
                    }`}
                  >
                    {user.rank}
                  </span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <span className="font-semibold tabular-nums">{user.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
