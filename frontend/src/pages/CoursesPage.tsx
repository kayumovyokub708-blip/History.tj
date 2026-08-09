import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const courses = [
  { title: "History of Tajikistan", category: "National", level: "Beginner", lessons: 18 },
  { title: "Ancient Civilizations", category: "World", level: "Intermediate", lessons: 12 },
  { title: "Samanid Empire", category: "Medieval", level: "Intermediate", lessons: 9 },
  { title: "Modern Tajikistan", category: "Contemporary", level: "Beginner", lessons: 14 },
  { title: "Silk Road", category: "World", level: "Advanced", lessons: 11 },
  { title: "Soviet Period", category: "National", level: "Intermediate", lessons: 16 },
]

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Courses</h1>
      <p className="text-muted mb-8">Structured learning paths for history</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.title} className="hover:border-primary/40 transition cursor-pointer overflow-hidden">
            <div className="h-40 bg-surface flex items-center justify-center">
              <span className="text-5xl opacity-30">📚</span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">{course.lessons} lessons</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
