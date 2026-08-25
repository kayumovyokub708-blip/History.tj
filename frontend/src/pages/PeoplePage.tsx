import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPublishedPeople } from "@/data/people"

export default function PeoplePage() {
  const { t } = useTranslation()
  const list = getPublishedPeople()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/encyclopedia" className="text-sm text-primary hover:underline">
          \u2190 {t("encyclopedia.title")}
        </Link>
        <h1 className="text-3xl font-bold mt-2">\ud83d\udc51 {t("encyclopedia.people")}</h1>
        <p className="text-muted">{t("encyclopedia.peopleSubtitle")}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p) => (
          <Link key={p.id} to={`/encyclopedia/people/${p.slug}`}>
            <Card className="h-full hover:border-primary/40 transition cursor-pointer">
              <div className="h-32 bg-surface flex items-center justify-center rounded-t-xl">
                <span className="text-4xl opacity-40">\ud83d\udc64</span>
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-1">
                  {p.period && <Badge variant="secondary">{p.period}</Badge>}
                  {p.dynasty && <Badge variant="outline">{p.dynasty}</Badge>}
                </div>
                <CardTitle className="text-lg">{p.nameTj}</CardTitle>
                <p className="text-sm text-muted">{p.name}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted line-clamp-2">{p.shortBio}</p>
                {(p.birthYear || p.deathYear) && (
                  <p className="text-xs text-muted mt-2">{p.birthYear}\u2013{p.deathYear}</p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
