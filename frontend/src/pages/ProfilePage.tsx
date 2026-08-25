import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { useAuth } from "@/context/AuthContext"

export default function ProfilePage() {
  const { t } = useTranslation()
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="p-8 text-center space-y-4">
            <div className="text-4xl">\ud83d\udc64</div>
            <h1 className="text-xl font-bold">{t("profile.notLoggedIn")}</h1>
            <p className="text-muted">{t("profile.loginHint")}</p>
            <div className="flex gap-3 justify-center pt-2">
              <Link to="/login"><Button>{t("auth.signIn")}</Button></Link>
              <Link to="/register"><Button variant="secondary">{t("auth.register")}</Button></Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const xpToNext = 100
  const progress = Math.min(100, ((user.xp % xpToNext) / xpToNext) * 100)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="mb-8">
        <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-6">
          <Avatar fallback={user.name} size="lg" />
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-muted">{user.email}</p>
            <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
              <Badge variant="secondary">{t("profile.level")} {user.level}</Badge>
              <Badge variant="outline">{user.xp} XP</Badge>
              <Badge>{t("courses.beginner")}</Badge>
            </div>
          </div>
          <Button variant="ghost" onClick={logout}>{t("auth.logout")}</Button>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Card><CardContent className="p-5 text-center">
          <div className="text-2xl font-bold text-primary">0</div>
          <div className="text-sm text-muted">{t("nav.quiz")}</div>
        </CardContent></Card>
        <Card><CardContent className="p-5 text-center">
          <div className="text-2xl font-bold text-primary">0</div>
          <div className="text-sm text-muted">{t("nav.articles")}</div>
        </CardContent></Card>
        <Card><CardContent className="p-5 text-center">
          <div className="text-2xl font-bold text-primary">0</div>
          <div className="text-sm text-muted">{t("nav.expeditions")}</div>
        </CardContent></Card>
      </div>

      <Card className="mb-8">
        <CardHeader><CardTitle>{t("profile.xpProgress")}</CardTitle></CardHeader>
        <CardContent>
          <Progress value={progress} className="mb-2" />
          <p className="text-sm text-muted">
            {user.xp % xpToNext} / {xpToNext} XP \u2192 {t("profile.level")} {user.level + 1}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>{t("profile.quickLinks")}</CardTitle></CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Link to="/quiz"><Button variant="secondary" size="sm">{t("quiz.start")}</Button></Link>
          <Link to="/expeditions"><Button variant="secondary" size="sm">{t("nav.expeditions")}</Button></Link>
          <Link to="/encyclopedia"><Button variant="secondary" size="sm">{t("nav.encyclopedia")}</Button></Link>
        </CardContent>
      </Card>
    </div>
  )
}
