import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const quizzes = [
  { title: "Daily Quiz", meta: "10 questions · 5 min", xp: "+100 XP", hot: true },
  { title: "Samanid Empire", meta: "15 questions · 8 min", xp: "+80 XP" },
  { title: "Ancient History", meta: "20 questions · 12 min", xp: "+120 XP" },
  { title: "Modern Tajikistan", meta: "12 questions · 7 min", xp: "+70 XP" },
  { title: "Silk Road Traders", meta: "10 questions · 6 min", xp: "+60 XP" },
  { title: "Heroes of Tajikistan", meta: "15 questions · 9 min", xp: "+90 XP" },
]

export default function QuizzesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
      <p className="text-muted mb-8">Practice and test your knowledge</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {quizzes.map((quiz) => (
          <Card key={quiz.title} className="hover:border-primary/40 transition">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{quiz.title}</CardTitle>
                {quiz.hot && <Badge>🔥 Hot</Badge>}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted">{quiz.meta}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">{quiz.xp}</span>
                <Button size="sm">Start</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
