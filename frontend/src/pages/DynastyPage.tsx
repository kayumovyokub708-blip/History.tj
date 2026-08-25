import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getDynastyBySlug } from "@/data/dynasties"

export default function DynastyPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const item = slug ? getDynastyBySlug(slug) : undefined
  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <Link to="/encyclopedia/dynasties" className="text-primary">\u2190 {t("encyclopedia.dynasties")}</Link>
      </div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/encyclopedia/dynasties" className="text-sm text-primary hover:underline">\u2190 {t("encyclopedia.dynasties")}</Link>
      <h1 className="text-3xl font-bold mt-4">{item.nameTj}</h1>
      <p className="text-muted">{item.name}</p>
      <div className="flex gap-2 mt-3">
        <Badge variant="secondary">{item.yearStart}\u2013{item.yearEnd}</Badge>
        {item.capital && <Badge variant="outline">{t("encyclopedia.capital")}: {item.capital}</Badge>}
      </div>
      <Card className="mt-8">
        <CardHeader><CardTitle>{t("encyclopedia.overview")}</CardTitle></CardHeader>
        <CardContent><p className="text-muted-foreground leading-relaxed">{item.description}</p></CardContent>
      </Card>
    </div>
  )
}
