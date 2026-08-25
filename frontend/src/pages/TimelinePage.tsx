import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const eras = [
  { year: "500 BC", titleKey: "ancient", descKey: "ancientDesc" },
  { year: "224\u2013651", titleKey: "sasanian", descKey: "sasanianDesc" },
  { year: "819\u2013999", titleKey: "samanid", descKey: "samanidDesc" },
  { year: "999\u20131220", titleKey: "ghaznavid", descKey: "ghaznavidDesc" },
  { year: "1220\u20131500", titleKey: "mongol", descKey: "mongolDesc" },
  { year: "1500\u20131868", titleKey: "later", descKey: "laterDesc" },
  { year: "1868\u20131991", titleKey: "soviet", descKey: "sovietDesc" },
  { year: "1991\u2014", titleKey: "independent", descKey: "independentDesc" },
]

export default function TimelinePage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">\ud83d\udd70\ufe0f {t("timeline.title")}</h1>
        <p className="text-muted">{t("timeline.subtitle")}</p>
      </div>
      <div className="relative border-l-2 border-border ml-3 space-y-8">
        {eras.map((era) => (
          <div key={era.year} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
            <Badge variant="secondary" className="mb-2">{era.year}</Badge>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{t(`timeline.eras.${era.titleKey}`)}</h3>
                <p className="text-sm text-muted mt-1">{t(`timeline.eras.${era.descKey}`)}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
