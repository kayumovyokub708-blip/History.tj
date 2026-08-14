import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getApiBase, setApiBase, apiHealth } from "@/services/api"

export default function AdminSettingsPage() {
  const [apiUrl, setApiUrl] = useState(getApiBase())
  const [status, setStatus] = useState<"unknown" | "online" | "offline">("unknown")
  const [msg, setMsg] = useState("")

  useEffect(() => {
    ;(async () => {
      if (!getApiBase()) {
        setStatus("offline")
        return
      }
      const ok = await apiHealth()
      setStatus(ok ? "online" : "offline")
    })()
  }, [])

  const saveApi = async () => {
    setApiBase(apiUrl.trim())
    const ok = await apiHealth()
    setStatus(ok ? "online" : "offline")
    setMsg(ok ? "API connected ✓" : "Could not reach API — check URL")
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted">Platform configuration</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Backend API
            {status === "online" && <Badge variant="success">Online</Badge>}
            {status === "offline" && <Badge variant="destructive">Offline</Badge>}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted">
            After deploying backend on Render/Railway, paste the public URL here
            (e.g. https://histori-tj-api.onrender.com)
          </p>
          <input
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="https://your-api.onrender.com"
            className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button onClick={saveApi}>Save & Test</Button>
          {msg && <p className="text-sm text-muted">{msg}</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Site Name</label>
            <input
              defaultValue="Histori.tj"
              className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Default Language</label>
            <select className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>Tajik</option>
              <option>Russian</option>
              <option>English</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
