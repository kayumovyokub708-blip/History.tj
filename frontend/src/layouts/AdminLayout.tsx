import { Outlet, Link, useLocation, Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const adminNav = [
  { path: "/admin", key: "dashboard", icon: "\ud83d\udcca" },
  { path: "/admin/users", key: "users", icon: "\ud83d\udc65" },
  { path: "/admin/people", key: "people", icon: "\ud83d\udc51" },
  { path: "/admin/events", key: "events", icon: "\u2694\ufe0f" },
  { path: "/admin/places", key: "places", icon: "\ud83c\udfdb\ufe0f" },
  { path: "/admin/articles", key: "articles", icon: "\ud83d\udcdd" },
  { path: "/admin/courses", key: "courses", icon: "\ud83d\udcda" },
  { path: "/admin/quizzes", key: "quizzes", icon: "\u2753" },
  { path: "/admin/expeditions", key: "expeditions", icon: "\ud83e\udded" },
  { path: "/admin/resources", key: "resources", icon: "\ud83d\uddc2\ufe0f" },
  { path: "/admin/settings", key: "settings", icon: "\u2699\ufe0f" },
]

export default function AdminLayout() {
  const { t } = useTranslation()
  const location = useLocation()
  const isLoggedIn = localStorage.getItem("admin_token")

  if (!isLoggedIn && location.pathname !== "/admin/login") {
    return <Navigate to="/admin/login" replace />
  }

  if (location.pathname === "/admin/login") {
    return <Outlet />
  }

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-64 border-r border-border bg-surface flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link to="/admin" className="font-bold text-lg">
            <span className="text-primary">Histori</span>.tj
            <span className="text-xs text-muted ml-2">{t("admin.badge")}</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {adminNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-card text-primary"
                  : "text-muted-foreground hover:text-white hover:bg-card/60"
              )}
            >
              <span>{item.icon}</span>
              {t(`admin.nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground"
            onClick={() => {
              localStorage.removeItem("admin_token")
              window.location.href = "/#/admin/login"
            }}
          >
            \ud83d\udeaa {t("auth.logout")}
          </Button>
          <Link to="/" className="block mt-2 text-xs text-center text-muted hover:text-primary">
            \u2190 {t("admin.backToSite")}
          </Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-surface/50 flex items-center justify-between px-6">
          <h1 className="font-semibold text-lg">{t("admin.title")}</h1>
          <div className="text-sm text-muted">admin@histori.tj</div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
