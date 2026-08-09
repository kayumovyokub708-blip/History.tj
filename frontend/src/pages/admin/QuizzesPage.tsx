import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockQuizzes = [
  { id: 1, title: "Daily Quiz", questions: 10, attempts: 3421, status: "published" },
  { id: 2, title: "Samanid Empire", questions: 15, attempts: 890, status: "published" },
  { id: 3, title: "Ancient History", questions: 20, attempts: 1205, status: "published" },
  { id: 4, title: "Heroes of Tajikistan", questions: 12, attempts: 0, status: "draft" },
]

export default function AdminQuizzesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Quizzes</h2>
          <p className="text-muted">Manage quizzes and questions</p>
        </div>
        <Button>+ Create Quiz</Button>
      </div>

      <div className="grid gap-4">
        {mockQuizzes.map((quiz) => (
          <Card key={quiz.id}>
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{quiz.title}</h3>
                  <Badge variant={quiz.status === "published" ? "success" : "secondary"}>
                    {quiz.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted">
                  {quiz.questions} questions · {quiz.attempts.toLocaleString()} attempts
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">Edit</Button>
                <Button size="sm" variant="ghost">Questions</Button>
                <Button size="sm" variant="ghost">Stats</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
