import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AdminLoginPage() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("admin@histori.tj")
  const [password, setPassword] = useState("admin123")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    await new Promise((r) => setTimeout(r, 500))

    if (
      (email === "admin@histori.tj" || email === "admin@history.tj") &&
      password === "admin123"
    ) {
      localStorage.setItem("admin_token", "demo-admin-token")
      navigate("/admin")
    } else {
      setError(t("admin.loginError"))
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-2xl font-bold mb-2">
            <span className="text-primary">Histori</span>.tj
          </div>
          <CardTitle>{t("admin.loginTitle")}</CardTitle>
          <CardDescription>{t("admin.loginSubtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("auth.email")}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("auth.password")}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            {error && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t("admin.signingIn") : t("admin.loginBtn")}
            </Button>
            <p className="text-xs text-center text-muted">{t("admin.demoHint")}</p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
