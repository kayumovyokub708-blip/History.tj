import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const courses = [
  { titleKey: "tajikistan", categoryKey: "national", levelKey: "beginner", lessons: 18 },
  { titleKey: "ancient", categoryKey: "world", levelKey: "intermediate", lessons: 12 },
  { titleKey: "samanid", categoryKey: "medieval", levelKey: "intermediate", lessons: 9 },
  { titleKey: "modern", categoryKey: "contemporary", levelKey: "beginner", lessons: 14 },
  { titleKey: "silkRoad", categoryKey: "world", levelKey: "advanced", lessons: 11 },
  { titleKey: "soviet", categoryKey: "national", levelKey: "intermediate", lessons: 16 },
]

export default function CoursesPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">{t("courses.title")}</h1>
      <p className="text-muted mb-8">{t("courses.subtitle")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.titleKey} className="hover:border-primary/40 transition cursor-pointer overflow-hidden">
            <div className="h-40 bg-surface flex items-center justify-center">
              <span className="text-5xl opacity-30">\ud83d\udcda</span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary">{t(`courses.categories.${course.categoryKey}`)}</Badge>
                <Badge variant="outline">{t(`courses.${course.levelKey}`)}</Badge>
              </div>
              <CardTitle className="text-lg">{t(`courses.items.${course.titleKey}`)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">{course.lessons} {t("courses.lessons")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
