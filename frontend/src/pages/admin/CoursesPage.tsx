import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockCourses = [
  { id: 1, title: "History of Tajikistan", status: "published", lessons: 18, students: 1240 },
  { id: 2, title: "Samanid Empire", status: "published", lessons: 9, students: 856 },
  { id: 3, title: "Ancient Civilizations", status: "draft", lessons: 12, students: 0 },
  { id: 4, title: "Modern Tajikistan", status: "published", lessons: 14, students: 692 },
  { id: 5, title: "Silk Road", status: "archived", lessons: 11, students: 310 },
]

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Courses</h2>
          <p className="text-muted">Manage learning content</p>
        </div>
        <Button>+ Create Course</Button>
      </div>

      <div className="grid gap-4">
        {mockCourses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{course.title}</h3>
                  <Badge
                    variant={
                      course.status === "published"
                        ? "success"
                        : course.status === "draft"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {course.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted">
                  {course.lessons} lessons · {course.students} students
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">Edit</Button>
                <Button size="sm" variant="ghost">Modules</Button>
                <Button size="sm" variant="ghost">Preview</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
