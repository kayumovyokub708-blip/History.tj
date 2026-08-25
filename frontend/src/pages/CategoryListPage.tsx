import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface CategoryItem {
  slug: string
  title: string
  subtitle?: string
  meta?: string
  badge?: string
}

interface Props {
  backTo?: string
  backLabel?: string
  title: string
  description?: string
  basePath: string
  items: CategoryItem[]
}

export default function CategoryListPage({
  backTo = "/encyclopedia",
  backLabel,
  title,
  description,
  basePath,
  items,
}: Props) {
  const { t } = useTranslation()
  const label = backLabel ?? t("encyclopedia.title")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to={backTo} className="text-sm text-primary hover:underline">
          \u2190 {label}
        </Link>
        <h1 className="text-3xl font-bold mt-2">{title}</h1>
        {description && <p className="text-muted">{description}</p>}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <Link key={item.slug} to={`${basePath}/${item.slug}`}>
            <Card className="h-full hover:border-primary/40 transition cursor-pointer">
              <CardHeader className="pb-2">
                {item.badge && (
                  <Badge variant="secondary" className="mb-2 w-fit">{item.badge}</Badge>
                )}
                <CardTitle className="text-lg">{item.title}</CardTitle>
                {item.subtitle && <p className="text-sm text-muted">{item.subtitle}</p>}
              </CardHeader>
              {item.meta && (
                <CardContent>
                  <p className="text-sm text-muted line-clamp-2">{item.meta}</p>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
