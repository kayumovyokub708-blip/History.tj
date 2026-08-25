import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getArticleBySlug } from "@/data/articles"
import { getLocalized } from "@/lib/getLocalized"
import type { Language } from "@/i18n/types"

export default function ArticlePage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language as Language) || "tg"
  const { slug } = useParams()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <Link to="/articles" className="text-primary">
          ← {t("articles.title")}
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/articles" className="text-sm text-primary hover:underline">
        ← {t("articles.title")}
      </Link>
      <div className="flex gap-2 mt-4 mb-2">
        {article.category && (
          <Badge variant="secondary">{getLocalized(article.category, lang)}</Badge>
        )}
        {article.readTime && (
          <Badge variant="outline">{getLocalized(article.readTime, lang)}</Badge>
        )}
      </div>
      <h1 className="text-3xl font-bold">{getLocalized(article.title, lang)}</h1>
      <Card className="mt-8">
        <CardContent className="p-6">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {getLocalized(article.content, lang)}
          </p>
        </CardContent>
      </Card>
      {article.sources && article.sources.length > 0 && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-base">{t("encyclopedia.sources")}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted space-y-1">
            {article.sources.map((s, i) => (
              <p key={i}>
                {i + 1}. {s}
              </p>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
