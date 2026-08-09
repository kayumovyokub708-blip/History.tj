import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center space-y-6 mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Таърихро омӯз.
          <br />
          <span className="text-primary">Донишатро санҷ.</span>
          <br />
          Қаҳрамони олимпиада шав.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn → Practice → Compete → Win
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/courses"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Start Learning
          </Link>
          <Link
            to="/quizzes"
            className="px-8 py-3 bg-card border border-border rounded-lg font-semibold hover:bg-surface transition"
          >
            Take a Quiz
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { value: "10,000+", label: "Students" },
          { value: "250+", label: "Courses" },
          { value: "5,000+", label: "Questions" },
          { value: "120+", label: "Olympiad Participants" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Featured Courses */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "History of Tajikistan",
            "Ancient Civilizations",
            "Samanid Empire",
            "Modern Tajikistan",
          ].map((title) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition cursor-pointer"
            >
              <div className="h-32 bg-surface rounded-lg mb-4 flex items-center justify-center text-muted">
                Cover
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted mt-1">Coming soon</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Quiz CTA */}
      <section className="bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm text-primary font-medium mb-1">🔥 Daily Quiz</div>
          <h3 className="text-xl font-bold">10 Questions · 5 min · +100 XP</h3>
          <p className="text-muted mt-1">Test your knowledge every day</p>
        </div>
        <Link
          to="/quizzes"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold whitespace-nowrap hover:opacity-90 transition"
        >
          Start Quiz
        </Link>
      </section>
    </div>
  )
}
