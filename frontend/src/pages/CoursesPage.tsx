import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Lesson = { title: string; titleRu: string; titleEn: string; minutes: number }
type Course = {
  id: string
  titleKey: string
  categoryKey: string
  levelKey: string
  lessons: number
  emoji: string
  color: string
  desc: string
  descRu: string
  descEn: string
  topics: Lesson[]
}

const courses: Course[] = [
  {
    id: "tajikistan",
    titleKey: "tajikistan",
    categoryKey: "national",
    levelKey: "beginner",
    lessons: 8,
    emoji: "🏔️",
    color: "from-emerald-900/80 to-emerald-700/40",
    desc: "Аз давлати Сомониён то истиқлолият — таърихи халқи тоҷик.",
    descRu: "От государства Саманидов до независимости — история таджикского народа.",
    descEn: "From the Samanid state to independence — the history of the Tajik people.",
    topics: [
      { title: "Пайдоиши халқи тоҷик", titleRu: "Происхождение таджикского народа", titleEn: "Origins of the Tajik people", minutes: 12 },
      { title: "Давлати Сомониён", titleRu: "Государство Саманидов", titleEn: "The Samanid state", minutes: 15 },
      { title: "Асрҳои миёна ва Темуриён", titleRu: "Средневековье и Тимуриды", titleEn: "Middle Ages and Timurids", minutes: 14 },
      { title: "Бухоро ва Хуҷанд", titleRu: "Бухара и Худжанд", titleEn: "Bukhara and Khujand", minutes: 10 },
      { title: "Давраи шӯравӣ", titleRu: "Советский период", titleEn: "Soviet period", minutes: 12 },
      { title: "Истиқлолият (1991)", titleRu: "Независимость (1991)", titleEn: "Independence (1991)", minutes: 10 },
      { title: "Ҷанги шаҳрвандӣ ва сулҳ", titleRu: "Гражданская война и мир", titleEn: "Civil war and peace", minutes: 14 },
      { title: "Тоҷикистони муосир", titleRu: "Современный Таджикистан", titleEn: "Modern Tajikistan", minutes: 11 },
    ],
  },
  {
    id: "samanid",
    titleKey: "samanid",
    categoryKey: "medieval",
    levelKey: "intermediate",
    lessons: 6,
    emoji: "👑",
    color: "from-amber-900/80 to-amber-700/40",
    desc: "Исмоили Сомонӣ, Бухоро, илм ва фарҳанги асри тиллоӣ.",
    descRu: "Исмаил Самани, Бухара, наука и культура золотого века.",
    descEn: "Ismail Samani, Bukhara, science and culture of the golden age.",
    topics: [
      { title: "Асосгузории давлат", titleRu: "Основание государства", titleEn: "Founding of the state", minutes: 12 },
      { title: "Исмоили Сомонӣ", titleRu: "Исмаил Самани", titleEn: "Ismail Samani", minutes: 15 },
      { title: "Пойтахт — Бухоро", titleRu: "Столица — Бухара", titleEn: "Capital — Bukhara", minutes: 10 },
      { title: "Рӯдакӣ ва адабиёт", titleRu: "Рудаки и литература", titleEn: "Rudaki and literature", minutes: 12 },
      { title: "Илм ва тиб (Ибни Сино)", titleRu: "Наука и медицина (Ибн Сина)", titleEn: "Science and medicine (Ibn Sina)", minutes: 14 },
      { title: "Мерос ва аҳамият", titleRu: "Наследие и значение", titleEn: "Legacy and significance", minutes: 10 },
    ],
  },
  {
    id: "ancient",
    titleKey: "ancient",
    categoryKey: "world",
    levelKey: "intermediate",
    lessons: 7,
    emoji: "🏺",
    color: "from-sky-900/80 to-sky-700/40",
    desc: "Ориёиҳо, Ҳахоманишиён, Куруши Кабир ва Мовароуннаҳр.",
    descRu: "Арии, Ахемениды, Кир Великий и Мавераннахр.",
    descEn: "Aryans, Achaemenids, Cyrus the Great and Transoxiana.",
    topics: [
      { title: "Тамаддунҳои қадими Осиёи Миёна", titleRu: "Древние цивилизации Средней Азии", titleEn: "Ancient civilizations of Central Asia", minutes: 12 },
      { title: "Куруши Кабир", titleRu: "Кир Великий", titleEn: "Cyrus the Great", minutes: 14 },
      { title: "Империяи Ҳахоманишӣ", titleRu: "Империя Ахеменидов", titleEn: "Achaemenid Empire", minutes: 12 },
      { title: "Искандари Мақдунӣ", titleRu: "Александр Македонский", titleEn: "Alexander the Great", minutes: 11 },
      { title: "Юнону Бохтар", titleRu: "Греко-Бактрия", titleEn: "Greco-Bactria", minutes: 10 },
      { title: "Кушониён", titleRu: "Кушаны", titleEn: "The Kushans", minutes: 12 },
      { title: "Мероси қадим", titleRu: "Древнее наследие", titleEn: "Ancient heritage", minutes: 9 },
    ],
  },
  {
    id: "silkRoad",
    titleKey: "silkRoad",
    categoryKey: "world",
    levelKey: "advanced",
    lessons: 6,
    emoji: "🐪",
    color: "from-orange-900/80 to-orange-700/40",
    desc: "Тиҷорат, фарҳанг ва шаҳрҳои Роҳи абришам.",
    descRu: "Торговля, культура и города Шёлкового пути.",
    descEn: "Trade, culture and cities of the Silk Road.",
    topics: [
      { title: "Роҳи абришам чист?", titleRu: "Что такое Шёлковый путь?", titleEn: "What is the Silk Road?", minutes: 10 },
      { title: "Самарқанд ва Бухоро", titleRu: "Самарканд и Бухара", titleEn: "Samarkand and Bukhara", minutes: 14 },
      { title: "Тиҷорат ва молҳо", titleRu: "Торговля и товары", titleEn: "Trade and goods", minutes: 11 },
      { title: "Дину фарҳанг", titleRu: "Религия и культура", titleEn: "Religion and culture", minutes: 12 },
      { title: "Сайёҳон ва сайёҳномаҳо", titleRu: "Путешественники и записки", titleEn: "Travelers and accounts", minutes: 10 },
      { title: "Мерос дар Тоҷикистон", titleRu: "Наследие в Таджикистане", titleEn: "Heritage in Tajikistan", minutes: 11 },
    ],
  },
  {
    id: "soviet",
    titleKey: "soviet",
    categoryKey: "national",
    levelKey: "intermediate",
    lessons: 6,
    emoji: "⭐",
    color: "from-red-900/80 to-red-700/40",
    desc: "Ташаккули ҶШС Тоҷикистон, ҷанг ва сохтмони миллӣ.",
    descRu: "Становление Таджикской ССР, война и национальное строительство.",
    descEn: "Formation of the Tajik SSR, war and nation-building.",
    topics: [
      { title: "Инқилоб ва тағйирот", titleRu: "Революция и перемены", titleEn: "Revolution and change", minutes: 11 },
      { title: "Нусратулло Махсум ва Шотемур", titleRu: "Нусратулло Махсум и Шотемур", titleEn: "Nusratullo Makhsum and Shotemur", minutes: 13 },
      { title: "ҶШС Тоҷикистон (1929)", titleRu: "Таджикская ССР (1929)", titleEn: "Tajik SSR (1929)", minutes: 12 },
      { title: "Ҷанги Бузурги Ватанӣ", titleRu: "Великая Отечественная война", titleEn: "Great Patriotic War", minutes: 14 },
      { title: "Айнӣ, Ғафуров, Турсунзода", titleRu: "Айни, Гафуров, Турсунзаде", titleEn: "Aini, Ghafurov, Tursunzoda", minutes: 12 },
      { title: "Роҳ ба сӯи истиқлолият", titleRu: "Путь к независимости", titleEn: "Path to independence", minutes: 10 },
    ],
  },
  {
    id: "modern",
    titleKey: "modern",
    categoryKey: "contemporary",
    levelKey: "beginner",
    lessons: 5,
    emoji: "🏛️",
    color: "from-indigo-900/80 to-indigo-700/40",
    desc: "Истиқлолият, сулҳ ва рушди Тоҷикистони муосир.",
    descRu: "Независимость, мир и развитие современного Таджикистана.",
    descEn: "Independence, peace and development of modern Tajikistan.",
    topics: [
      { title: "Эълони истиқлолият", titleRu: "Провозглашение независимости", titleEn: "Declaration of independence", minutes: 10 },
      { title: "Ҷанги шаҳрвандӣ", titleRu: "Гражданская война", titleEn: "Civil war", minutes: 14 },
      { title: "Созишномаи сулҳ (1997)", titleRu: "Мирное соглашение (1997)", titleEn: "Peace agreement (1997)", minutes: 12 },
      { title: "Пешвои миллат", titleRu: "Лидер нации", titleEn: "Leader of the Nation", minutes: 11 },
      { title: "Тоҷикистон имрӯз", titleRu: "Таджикистан сегодня", titleEn: "Tajikistan today", minutes: 10 },
    ],
  },
]

export default function CoursesPage() {
  const { t, i18n } = useTranslation()
  const [openId, setOpenId] = useState<string | null>(null)
  const lang = i18n.language?.startsWith("ru") ? "ru" : i18n.language?.startsWith("en") ? "en" : "tg"

  const open = courses.find((c) => c.id === openId)

  function descOf(c: Course) {
    if (lang === "ru") return c.descRu
    if (lang === "en") return c.descEn
    return c.desc
  }

  function topicTitle(l: Lesson) {
    if (lang === "ru") return l.titleRu
    if (lang === "en") return l.titleEn
    return l.title
  }

  if (open) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          type="button"
          onClick={() => setOpenId(null)}
          className="text-sm text-muted-foreground hover:text-white mb-6 inline-flex items-center gap-1"
        >
          ← {t("common.back")}
        </button>

        <div className={`rounded-2xl bg-gradient-to-br ${open.color} border border-border p-6 sm:p-8 mb-8`}>
          <div className="text-5xl mb-3">{open.emoji}</div>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">{t(`courses.categories.${open.categoryKey}`)}</Badge>
            <Badge variant="outline">{t(`courses.${open.levelKey}`)}</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{t(`courses.items.${open.titleKey}`)}</h1>
          <p className="text-muted-foreground">{descOf(open)}</p>
          <p className="text-sm text-muted mt-3">
            {open.topics.length} {t("courses.lessons")} ·{" "}
            {open.topics.reduce((s, x) => s + x.minutes, 0)}{" "}
            {lang === "ru" ? "мин" : lang === "en" ? "min" : "дақ"}
          </p>
        </div>

        <h2 className="text-lg font-semibold mb-4">
          {lang === "ru" ? "Уроки" : lang === "en" ? "Lessons" : "Дарсҳо"}
        </h2>
        <div className="space-y-2">
          {open.topics.map((lesson, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/40 px-4 py-3 hover:border-primary/40 transition"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-bold">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{topicTitle(lesson)}</div>
                <div className="text-xs text-muted">
                  {lesson.minutes} {lang === "ru" ? "мин" : lang === "en" ? "min" : "дақ"}
                </div>
              </div>
              <span className="text-muted-foreground text-sm">▶</span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-surface/50 p-4 text-sm text-muted-foreground">
          {lang === "ru"
            ? "Содержание уроков постепенно дополняется. Пока доступен список тем курса."
            : lang === "en"
              ? "Lesson content is being added gradually. Topic list is available now."
              : "Мундариҷаи дарсҳо тадриҷан пурра мешавад. Ҳоло рӯйхати мавзӯъҳо дастрас аст."}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">{t("courses.title")}</h1>
      <p className="text-muted mb-8">{t("courses.subtitle")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="hover:border-primary/40 transition cursor-pointer overflow-hidden group"
            onClick={() => setOpenId(course.id)}
          >
            <div className={`h-36 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
              <span className="text-5xl group-hover:scale-110 transition-transform">{course.emoji}</span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <Badge variant="secondary">{t(`courses.categories.${course.categoryKey}`)}</Badge>
                <Badge variant="outline">{t(`courses.${course.levelKey}`)}</Badge>
              </div>
              <CardTitle className="text-lg">{t(`courses.items.${course.titleKey}`)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted mb-3 line-clamp-2">{descOf(course)}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">
                  {course.topics.length} {t("courses.lessons")}
                </p>
                <Button size="sm" variant="secondary" onClick={(e) => { e.stopPropagation(); setOpenId(course.id) }}>
                  {lang === "ru" ? "Открыть" : lang === "en" ? "Open" : "Кушодан"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
