import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// CDN (primary) + local public asset (fallback when deployed with file in repo)
const SPEECH_VIDEO_CDN = "https://d.uguu.se/bLkWrMnv.mp4"
const SPEECH_VIDEO_LOCAL = `${import.meta.env.BASE_URL}videos/emomali-rahmon-35th-independence.mp4`
const SPEECH_POSTER = `${import.meta.env.BASE_URL}videos/emomali-rahmon-35th-poster.jpg`

export default function VideosPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const caption =
    lang === "ru"
      ? "Слова Его Превосходительства — Эмомали Рахмон"
      : lang === "en"
        ? "Words of His Excellency — Emomali Rahmon"
        : "Суханҳои Ҷаноби Олӣ — Эмомалӣ Раҳмон"

  const speechTitle =
    lang === "ru"
      ? "Выступление Президента — 35 лет Независимости"
      : lang === "en"
        ? "Presidential address — 35 years of Independence"
        : "Суханронии Президент — 35-солагии Истиқлолият"

  const speechDesc =
    lang === "ru"
      ? "О патриотизме, школах и верности Родине"
      : lang === "en"
        ? "On patriotism, schools, and loyalty to the homeland"
        : "Дар бораи ватандӯстӣ, мактабҳо ва садоқат ба Ватан"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          {t("video.badge")}
        </Badge>
        <h1 className="text-3xl font-bold mb-2">{t("video.title")}</h1>
        <p className="text-muted max-w-2xl">{t("video.subtitle")}</p>
      </div>

      <Card className="overflow-hidden mb-8 border-primary/30 shadow-lg">
        <div className="bg-black flex items-center justify-center min-h-[320px] sm:min-h-[420px]">
          <video
            className="w-full max-h-[75vh] object-contain"
            controls
            playsInline
            preload="metadata"
            poster={SPEECH_POSTER}
          >
            <source src={SPEECH_VIDEO_CDN} type="video/mp4" />
            <source src={SPEECH_VIDEO_LOCAL} type="video/mp4" />
            Браузери шумо видеоро дастгирӣ намекунад.
          </video>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{speechTitle}</CardTitle>
          <p className="text-sm text-muted">{speechDesc}</p>
        </CardHeader>
        <CardContent>
          <p className="text-base md:text-lg font-semibold text-foreground border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
            {caption}
          </p>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-video bg-card/80 flex items-center justify-center text-4xl text-muted-foreground">
              ▶
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{t("video.comingTitle", { n: i + 1 })}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">{t("video.comingDesc")}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-xl border border-border bg-surface text-sm text-muted">
        {t("video.note")}
      </div>
    </div>
  )
}
