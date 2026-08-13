import { Outlet, Link, useLocation, Navigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const adminNav = [
  { path: "/admin", label: "Dashboard", icon: "📊" },
  { path: "/admin/users", label: "Users", icon: "👥" },
  { path: "/admin/people", label: "People", icon: "👑" },
  { path: "/admin/events", label: "Events", icon: "⚔️" },
  { path: "/admin/articles", label: "Articles", icon: "📝" },
  { path: "/admin/courses", label: "Courses", icon: "📚" },
  { path: "/admin/quizzes", label: "Quizzes", icon: "❓" },
  { path: "/admin/expeditions", label: "Expeditions", icon: "🧭" },
  { path: "/admin/resources", label: "Resources", icon: "🗂️" },
  { path: "/admin/settings", label: "Settings", icon: "⚙️" },
]

export default function AdminLayout() {
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
            <span className="text-xs text-muted ml-2">Admin</span>
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
              {item.label}
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
            🚪 Logout
          </Button>
          <Link
            to="/"
            className="block mt-2 text-xs text-center text-muted hover:text-primary"
          >
            ← Back to site
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-surface/50 flex items-center justify-between px-6">
          <h1 className="font-semibold text-lg">Admin Panel</h1>
          <div className="text-sm text-muted">admin@histori.tj</div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
