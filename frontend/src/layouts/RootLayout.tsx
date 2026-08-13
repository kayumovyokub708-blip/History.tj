import { Outlet, Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { useAuth } from "@/context/AuthContext"

const navItems = [
  { path: "/", label: "Home" },
  { path: "/encyclopedia", label: "Encyclopedia" },
  { path: "/timeline", label: "Timeline" },
  { path: "/map", label: "Map" },
  { path: "/courses", label: "Courses" },
  { path: "/quiz", label: "Quiz" },
  { path: "/expeditions", label: "Expeditions" },
  { path: "/leaderboard", label: "Leaderboard" },
]

export default function RootLayout() {
  const location = useLocation()
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-surface/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                <span className="text-primary">Histori</span>
                <span className="text-white">.tj</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-card text-primary"
                      : "text-muted-foreground hover:text-white hover:bg-card/60"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="relative p-2 rounded-md text-muted-foreground hover:text-white hover:bg-card/60 transition"
                title="Notifications"
              >
                <span className="text-lg">🔔</span>
              </button>

              <button
                className="hidden sm:flex items-center gap-1 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-white hover:bg-card/60 transition"
                title="Language"
              >
                <span>🌐</span>
                <span className="text-xs font-medium">TJ</span>
              </button>

              {user ? (
                <div className="flex items-center gap-2">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-card/60 transition"
                  >
                    <Avatar fallback={user.name} size="sm" />
                    <span className="hidden sm:inline text-sm font-medium max-w-[100px] truncate">
                      {user.name}
                    </span>
                  </Link>
                  <Button size="sm" variant="ghost" onClick={logout} className="hidden sm:inline-flex">
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="hidden sm:block">
                    <Button size="sm" variant="ghost">
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button size="sm">Register</Button>
                  </Link>
                </>
              )}

              <button className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-white">
                ☰
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden border-t border-border overflow-x-auto">
          <div className="flex gap-1 px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors",
                  location.pathname === item.path
                    ? "bg-card text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div>
            © 2026 <span className="text-primary font-medium">Histori.tj</span> —
            Таърихи Тоҷикистон ва Осиёи Марказӣ
          </div>
          <div className="flex gap-4">
            <Link to="/encyclopedia" className="hover:text-white transition">Encyclopedia</Link>
            <Link to="/expeditions" className="hover:text-white transition">Expeditions</Link>
            <Link to="/quiz" className="hover:text-white transition">Quiz</Link>
            <Link to="/admin/login" className="hover:text-white transition">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
