import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@history.tj")
  const [password, setPassword] = useState("admin123")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Temporary simple auth (will connect to backend later)
    // Default credentials for demo:
    // email: admin@history.tj
    // password: admin123
    await new Promise((r) => setTimeout(r, 600))

    if (email === "admin@history.tj" && password === "admin123") {
      localStorage.setItem("admin_token", "demo-admin-token")
      navigate("/admin")
    } else {
      setError("Email ё password нодуруст")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-2xl font-bold mb-2">
            <span className="text-primary">History</span>.tj
          </div>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Sign in to manage the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-surface border border-border text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="admin@history.tj"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-surface border border-border text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>

          <p className="text-xs text-muted text-center mt-6">
            Demo: admin@history.tj / admin123
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
