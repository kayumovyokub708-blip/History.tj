import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBattleBySlug } from "@/data/battles"

export default function BattlePage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const item = slug ? getBattleBySlug(slug) : undefined
  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <Link to="/encyclopedia/battles" className="text-primary">\u2190 {t("encyclopedia.battles")}</Link>
      </div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/encyclopedia/battles" className="text-sm text-primary hover:underline">\u2190 {t("encyclopedia.battles")}</Link>
      <h1 className="text-3xl font-bold mt-4">{item.nameTj}</h1>
      <p className="text-muted">{item.name}</p>
      <div className="flex gap-2 mt-3">
        <Badge variant="secondary">{item.date}</Badge>
        {item.location && <Badge variant="outline">{item.location}</Badge>}
      </div>
      <Card className="mt-8">
        <CardHeader><CardTitle>{t("encyclopedia.description")}</CardTitle></CardHeader>
        <CardContent><p className="text-muted-foreground leading-relaxed">{item.description}</p></CardContent>
      </Card>
      {item.participants && (
        <Card className="mt-4">
          <CardHeader><CardTitle className="text-base">{t("encyclopedia.participants")}</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-1">
            {item.participants.map((p) => <p key={p}>\u2022 {p}</p>)}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
