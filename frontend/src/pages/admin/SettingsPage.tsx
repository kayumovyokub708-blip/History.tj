import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getApiBase, setApiBase, apiHealth } from "@/services/api"

export default function AdminSettingsPage() {
  const { t } = useTranslation()
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
    setMsg(ok ? t("admin.apiConnected") : t("admin.apiFailed"))
  }

  const statusLabel =
    status === "online"
      ? t("admin.statusOnline")
      : status === "offline"
        ? t("admin.statusOffline")
        : t("admin.statusUnknown")

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold">{t("admin.settingsTitle")}</h2>
        <p className="text-muted">{t("admin.settingsSubtitle")}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {t("admin.backendApi")}
            {status === "online" && <Badge variant="success">{statusLabel}</Badge>}
            {status === "offline" && <Badge variant="destructive">{statusLabel}</Badge>}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted">
            Render / Railway — e.g. https://histori-tj-api.onrender.com
          </p>
          <label className="block text-sm font-medium">{t("admin.apiUrl")}</label>
          <input
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="https://your-api.onrender.com"
            className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button onClick={saveApi}>{t("admin.saveApi")}</Button>
          {msg && <p className="text-sm text-muted">{msg}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
