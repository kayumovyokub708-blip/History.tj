import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockCourses = [
  { id: 1, titleKey: "courses.items.tajikistan", status: "published", lessons: 18, students: 1240 },
  { id: 2, titleKey: "courses.items.samanid", status: "published", lessons: 9, students: 856 },
  { id: 3, titleKey: "courses.items.ancient", status: "draft", lessons: 12, students: 0 },
  { id: 4, titleKey: "courses.items.modern", status: "published", lessons: 14, students: 692 },
  { id: 5, titleKey: "courses.items.silkRoad", status: "archived", lessons: 11, students: 310 },
]

export default function AdminCoursesPage() {
  const { t } = useTranslation()
  const statusLabel = (s: string) =>
    s === "draft" ? t("admin.draft") : s === "archived" ? t("admin.archived") : t("admin.published")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold">{t("admin.pageCourses")}</h2>
          <p className="text-muted">{t("admin.manageCourses")}</p>
        </div>
        <Button>{t("admin.createCourse")}</Button>
      </div>

      <div className="grid gap-4">
        {mockCourses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-semibold">{t(course.titleKey)}</h3>
                  <Badge
                    variant={
                      course.status === "published"
                        ? "success"
                        : course.status === "draft"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {statusLabel(course.status)}
                  </Badge>
                </div>
                <p className="text-sm text-muted">
                  {course.lessons} {t("admin.lessons")} · {course.students} {t("admin.students")}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="secondary">{t("common.edit")}</Button>
                <Button size="sm" variant="ghost">{t("admin.modules")}</Button>
                <Button size="sm" variant="ghost">{t("admin.preview")}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
