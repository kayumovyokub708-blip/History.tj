import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getArticleBySlug } from "@/data/articles"

export default function ArticlePage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const article = slug ? getArticleBySlug(slug) : undefined
  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <Link to="/articles" className="text-primary">\u2190 {t("articles.title")}</Link>
      </div>
    )
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/articles" className="text-sm text-primary hover:underline">\u2190 {t("articles.title")}</Link>
      <div className="flex gap-2 mt-4 mb-2">
        {article.category && <Badge variant="secondary">{article.category}</Badge>}
        {article.readTime && <Badge variant="outline">{article.readTime}</Badge>}
      </div>
      <h1 className="text-3xl font-bold">{article.titleTj}</h1>
      <p className="text-lg text-muted mt-1">{article.title}</p>
      <Card className="mt-8">
        <CardContent className="p-6">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{article.content}</p>
        </CardContent>
      </Card>
      {article.sources && article.sources.length > 0 && (
        <Card className="mt-4">
          <CardHeader><CardTitle className="text-base">{t("encyclopedia.sources")}</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted space-y-1">
            {article.sources.map((s, i) => <p key={i}>{i + 1}. {s}</p>)}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
