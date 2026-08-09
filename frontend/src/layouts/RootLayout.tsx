import { Outlet, Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const navItems = [
  { path: "/", label: "Home" },
  { path: "/courses", label: "Courses" },
  { path: "/quizzes", label: "Quizzes" },
  { path: "/olympiads", label: "Olympiads" },
  { path: "/leaderboard", label: "Leaderboard" },
]

export default function RootLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="text-primary">History</span>
                <span className="text-white">.tj</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-card text-primary"
                      : "text-muted-foreground hover:text-white hover:bg-card/50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button className="text-sm text-muted-foreground hover:text-white">
                🌐 TJ
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted">
          © 2026 History.tj — Educational Platform for Tajikistan
        </div>
      </footer>
    </div>
  )
}
