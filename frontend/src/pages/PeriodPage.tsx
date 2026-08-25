import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPeriodBySlug } from "@/data/periods"

export default function PeriodPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const item = slug ? getPeriodBySlug(slug) : undefined
  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <Link to="/encyclopedia/periods" className="text-primary">\u2190 {t("encyclopedia.periods")}</Link>
      </div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/encyclopedia/periods" className="text-sm text-primary hover:underline">\u2190 {t("encyclopedia.periods")}</Link>
      <h1 className="text-3xl font-bold mt-4">{item.nameTj}</h1>
      <p className="text-muted">{item.name}</p>
      <Badge className="mt-3" variant="secondary">{item.yearStart}\u2013{item.yearEnd}</Badge>
      <Card className="mt-8">
        <CardHeader><CardTitle>{t("encyclopedia.overview")}</CardTitle></CardHeader>
        <CardContent><p className="text-muted-foreground leading-relaxed">{item.description}</p></CardContent>
      </Card>
    </div>
  )
}
