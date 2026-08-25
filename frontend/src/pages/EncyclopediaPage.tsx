import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  { path: "/encyclopedia/people", icon: "\ud83d\udc51", key: "people", count: "6" },
  { path: "/encyclopedia/events", icon: "\u2694\ufe0f", key: "events", count: "6" },
  { path: "/encyclopedia/places", icon: "\ud83c\udfdb\ufe0f", key: "places", count: "4" },
  { path: "/encyclopedia/periods", icon: "\ud83d\udcc5", key: "periods", count: "4" },
  { path: "/encyclopedia/dynasties", icon: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67", key: "dynasties", count: "3" },
  { path: "/encyclopedia/battles", icon: "\ud83d\udde1\ufe0f", key: "battles", count: "2" },
  { path: "/articles", icon: "\ud83d\udcdd", key: "articles", count: "3", nav: true },
  { path: "/search", icon: "\ud83d\udd0d", key: "search", count: "all", nav: true },
]

export default function EncyclopediaPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">{t("encyclopedia.title")}</h1>
        <p className="text-muted max-w-2xl">{t("encyclopedia.subtitle")}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <Link key={cat.path} to={cat.path}>
            <Card className="h-full hover:border-primary/40 transition cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <CardTitle className="text-base">
                      {cat.nav ? t(`nav.${cat.key}`) : t(`encyclopedia.${cat.key}`)}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="success">{cat.count}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
