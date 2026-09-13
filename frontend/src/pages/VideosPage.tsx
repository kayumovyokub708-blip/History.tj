import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SPEECH_VIDEO_CDN = "https://d.uguu.se/bLkWrMnv.mp4"
const SPEECH_VIDEO_LOCAL = `${import.meta.env.BASE_URL}videos/emomali-rahmon-35th-independence.mp4`
const SPEECH_POSTER = `${import.meta.env.BASE_URL}videos/emomali-rahmon-35th-poster.jpg`

const WARRIORS_VIDEO_CDN = "https://d.uguu.se/VVjsSmpu.mp4"
const WARRIORS_VIDEO_LOCAL = `${import.meta.env.BASE_URL}videos/5-great-warriors.mp4`
const WARRIORS_POSTER = `${import.meta.env.BASE_URL}videos/5-great-warriors-poster.jpg`

export default function VideosPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const speechCaption =
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

  const warriorsTitle =
    lang === "ru"
      ? "5 великих полководцев в истории мира"
      : lang === "en"
        ? "5 Great Warriors in World History"
        : "5 Чанговарони бузург дар таърихи ҷаҳон"

  const warriorsDesc =
    lang === "ru"
      ? "Кир Великий, Александр Македонский, Чингисхан, Салах ад-Дин, Амир Темур"
      : lang === "en"
        ? "Cyrus the Great, Alexander the Great, Genghis Khan, Saladin, Amir Timur"
        : "Куруши Кабир, Искандари Мақдунӣ, Чингизхон, Салоҳиддин, Амир Темур"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          {t("video.badge")}
        </Badge>
        <h1 className="text-3xl font-bold mb-2">{t("video.title")}</h1>
        <p className="text-muted max-w-2xl">{t("video.subtitle")}</p>
      </div>

      {/* 1. Featured: Presidential speech */}
      <Card className="overflow-hidden mb-8 border-primary/30 shadow-lg">
        <div className="bg-black flex items-center justify-center min-h-[280px] sm:min-h-[380px]">
          <video
            className="w-full max-h-[70vh] object-contain"
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
            {speechCaption}
          </p>
        </CardContent>
      </Card>

      {/* 2. 5 Great Warriors */}
      <Card className="overflow-hidden mb-8 border-amber-500/30 shadow-lg">
        <div className="bg-black flex items-center justify-center min-h-[280px] sm:min-h-[380px]">
          <video
            className="w-full max-h-[70vh] object-contain"
            controls
            playsInline
            preload="metadata"
            poster={WARRIORS_POSTER}
          >
            <source src={WARRIORS_VIDEO_CDN} type="video/mp4" />
            <source src={WARRIORS_VIDEO_LOCAL} type="video/mp4" />
            Браузери шумо видеоро дастгирӣ намекунад.
          </video>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/40">
              ⚔️ 5
            </Badge>
            <span className="text-xs text-muted">~5 дақ / min</span>
          </div>
          <CardTitle className="text-lg">{warriorsTitle}</CardTitle>
          <p className="text-sm text-muted">{warriorsDesc}</p>
        </CardHeader>
        <CardContent>
          <p className="text-base md:text-lg font-semibold text-foreground border-l-4 border-amber-500 pl-4 py-2 bg-amber-500/5 rounded-r-lg">
            {warriorsTitle}
          </p>
        </CardContent>
      </Card>

      <div className="mt-10 p-5 rounded-xl border border-border bg-surface text-sm text-muted">
        {t("video.note")}
      </div>
    </div>
  )
}
