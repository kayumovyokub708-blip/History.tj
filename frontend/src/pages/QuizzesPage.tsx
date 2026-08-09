export default function QuizzesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
      <p className="text-muted mb-8">Practice and test your knowledge</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Daily Quiz", meta: "10 questions · 5 min", xp: "+100 XP", hot: true },
          { title: "Samanid Empire", meta: "15 questions · 8 min", xp: "+80 XP" },
          { title: "Ancient History", meta: "20 questions · 12 min", xp: "+120 XP" },
          { title: "Modern Tajikistan", meta: "12 questions · 7 min", xp: "+70 XP" },
        ].map((quiz) => (
          <div
            key={quiz.title}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition cursor-pointer"
          >
            {quiz.hot && (
              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                🔥 Hot
              </span>
            )}
            <h3 className="font-semibold text-lg mt-2">{quiz.title}</h3>
            <p className="text-sm text-muted mt-1">{quiz.meta}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-primary font-medium">{quiz.xp}</span>
              <button className="text-sm px-4 py-1.5 bg-surface rounded-md hover:bg-border transition">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
