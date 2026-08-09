import { Outlet, Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"

const navItems = [
  { path: "/", label: "Home" },
  { path: "/courses", label: "Courses" },
  { path: "/countries", label: "Countries" },
  { path: "/resources", label: "Resources" },
  { path: "/quizzes", label: "Quizzes" },
  { path: "/olympiads", label: "Olympiads" },
  { path: "/leaderboard", label: "Leaderboard" },
]

export default function RootLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-surface/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                <span className="text-primary">History</span>
                <span className="text-white">.tj</span>
              </span>
            </Link>

            {/* Desktop Nav */}
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

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Notifications */}
              <button
                className="relative p-2 rounded-md text-muted-foreground hover:text-white hover:bg-card/60 transition"
                title="Notifications"
              >
                <span className="text-lg">🔔</span>
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
              </button>

              {/* Theme (placeholder) */}
              <button
                className="p-2 rounded-md text-muted-foreground hover:text-white hover:bg-card/60 transition hidden sm:flex"
                title="Toggle theme"
              >
                <span className="text-lg">🌙</span>
              </button>

              {/* Language */}
              <button
                className="hidden sm:flex items-center gap-1 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-white hover:bg-card/60 transition"
                title="Language"
              >
                <span>🌐</span>
                <span className="text-xs font-medium">TJ</span>
              </button>

              {/* Auth / Avatar */}
              <Button size="sm" className="hidden sm:inline-flex">
                Sign in
              </Button>

              {/* Mobile menu button (simple) */}
              <button className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-white">
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
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

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div>
            © 2026 <span className="text-primary font-medium">History.tj</span> — Educational Platform
          </div>
          <div className="flex gap-4">
            <Link to="/courses" className="hover:text-white transition">Courses</Link>
            <Link to="/quizzes" className="hover:text-white transition">Quizzes</Link>
            <Link to="/olympiads" className="hover:text-white transition">Olympiads</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
