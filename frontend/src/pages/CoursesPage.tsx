import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Lesson = {
  title: string
  titleRu: string
  titleEn: string
  minutes: number
  body: string
  bodyRu: string
  bodyEn: string
  points: string[]
  pointsRu: string[]
  pointsEn: string[]
}
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

function L(
  title: string, titleRu: string, titleEn: string, minutes: number,
  body: string, bodyRu: string, bodyEn: string,
  points: string[], pointsRu: string[], pointsEn: string[]
): Lesson {
  return { title, titleRu, titleEn, minutes, body, bodyRu, bodyEn, points, pointsRu, pointsEn }
}

function stub(title: string, titleRu: string, titleEn: string, minutes = 10): Lesson {
  return L(
    title, titleRu, titleEn, minutes,
    title + ". Ин дарс мавзӯи асосӣро шарҳ медиҳад. Барои тафсилот Энсиклопедия ва Мақолаҳоро хонед.",
    titleRu + ". Краткий обзор темы. Подробнее — в Энциклопедии и Статьях.",
    titleEn + ". A short overview. See Encyclopedia and Articles for more.",
    ["Мавзӯи асосӣ", "Заминаи таърихӣ", "Аҳамият"],
    ["Основная тема", "Исторический фон", "Значение"],
    ["Main topic", "Historical background", "Significance"]
  )
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
      L("Пайдоиши халқи тоҷик", "Происхождение таджикского народа", "Origins of the Tajik people", 12,
        "Халқи тоҷик аз қавмҳои ориёӣ, суғдӣ, бохтарӣ ва дигар гурӯҳҳои эронинажод ташаккул ёфтааст. Дар асрҳои қадим дар Мовароуннаҳр ва Хуросон забон ва фарҳанги форсӣ-тоҷикӣ рушд кард. Ислом ва забони форсӣ барои якҷояшавии қавмҳо нақши муҳим бозиданд.",
        "Таджикский народ сложился из арийских, согдийских, бактрийских и других ираноязычных групп. В древности в Мавераннахре и Хорасане развивались персидско-таджикский язык и культура.",
        "The Tajik people formed from Aryan, Sogdian, Bactrian and other Iranian groups. Persian-Tajik language and culture developed in Transoxiana and Khorasan.",
        ["Ориёиҳо ва қавмҳои эронӣ", "Суғд ва Бохтар", "Забони форсӣ-тоҷикӣ", "Нақши ислом"],
        ["Арии и иранские народы", "Согд и Бактрия", "Персидско-таджикский язык", "Роль ислама"],
        ["Aryans and Iranian peoples", "Sogdiana and Bactria", "Persian-Tajik language", "Role of Islam"]),
      L("Давлати Сомониён", "Государство Саманидов", "The Samanid state", 15,
        "Давлати Сомониён (819–999) аввалин давлати мустақили тоҷикон дар Мовароуннаҳр буд. Исмоили Сомонӣ пойтахтро дар Бухоро мустаҳкам кард. Ин давра «асри тиллоӣ»-и фарҳанг, илм ва адабиёт ҳисобида мешавад.",
        "Государство Саманидов (819–999) — первое независимое государство таджиков. Исмаил Самани укрепил столицу в Бухаре. Это «золотой век» культуры и науки.",
        "The Samanid state (819–999) was the first independent Tajik state. Ismail Samani strengthened Bukhara as capital. This is the golden age of culture and science.",
        ["819–999 · Мовароуннаҳр", "Исмоили Сомонӣ", "Пойтахт — Бухоро", "Асри тиллоӣ"],
        ["819–999 · Мавераннахр", "Исмаил Самани", "Столица — Бухара", "Золотой век"],
        ["819–999 · Transoxiana", "Ismail Samani", "Capital — Bukhara", "Golden age"]),
      L("Асрҳои миёна ва Темуриён", "Средневековье и Тимуриды", "Middle Ages and Timurids", 14,
        "Пас аз Сомониён давлатҳои Ғазнавӣ ва Қорахонӣ омаданд. Дар асрҳои XIV–XV Темур ва Темуриён империяи бузург сохтанд. Самарқанд маркази илм шуд; Улуғбек расадхона сохт.",
        "После Саманидов пришли Газневиды и Караханиды. В XIV–XV вв. Тимур создал империю. Самарканд стал центром науки; Улугбек построил обсерваторию.",
        "After the Samanids came the Ghaznavids and Qarakhanids. In the 14th–15th centuries Timur built an empire. Samarkand became a science centre; Ulugh Beg built an observatory.",
        ["Ғазнавиён ва Қорахониён", "Темур", "Самарқанд", "Улуғбек"],
        ["Газневиды и Караханиды", "Тимур", "Самарканд", "Улугбек"],
        ["Ghaznavids and Qarakhanids", "Timur", "Samarkand", "Ulugh Beg"]),
      L("Бухоро ва Хуҷанд", "Бухара и Худжанд", "Bukhara and Khujand", 10,
        "Бухоро пойтахти Сомониён ва маркази илму дин буд. Хуҷанд шаҳри қадимии Сирдарё ва нуқтаи Роҳи абришам аст. Ҳарду дар таърихи минтақа нақши калон бозидаанд.",
        "Бухара — столица Саманидов и центр науки. Худжанд — древний город на Сырдарье и пункт Шёлкового пути.",
        "Bukhara was the Samanid capital and a centre of learning. Khujand is an ancient Syr Darya city and Silk Road point.",
        ["Бухоро — пойтахт", "Хуҷанд · Роҳи абришам", "Меъморӣ", "Мерос"],
        ["Бухара — столица", "Худжанд · Шёлковый путь", "Архитектура", "Наследие"],
        ["Bukhara — capital", "Khujand · Silk Road", "Architecture", "Heritage"]),
      L("Давраи шӯравӣ", "Советский период", "Soviet period", 12,
        "Соли 1924 Ҷумҳурии Мухтори Тоҷикистон таъсис ёфт; соли 1929 ҶШС Тоҷикистон. Душанбе пойтахт шуд. Саноат ва маориф рушд карданд. Соли 1991 роҳ ба истиқлолият кушода шуд.",
        "В 1924 создана Таджикская АССР; в 1929 — Таджикская ССР. Душанбе стал столицей. В 1991 открылся путь к независимости.",
        "In 1924 the Tajik ASSR was created; in 1929 the Tajik SSR. Dushanbe became capital. In 1991 the path to independence opened.",
        ["ҶШС Тоҷикистон (1929)", "Душанбе", "Ҷанги Бузурги Ватанӣ", "Роҳ ба истиқлол"],
        ["Таджикская ССР (1929)", "Душанбе", "Великая Отечественная", "Путь к независимости"],
        ["Tajik SSR (1929)", "Dushanbe", "Great Patriotic War", "Path to independence"]),
      L("Истиқлолият (1991)", "Независимость (1991)", "Independence (1991)", 10,
        "9 сентябри соли 1991 Ҷумҳурии Тоҷикистон истиқлолияти худро эълон кард. Ин рӯз ҳамчун Рӯзи Истиқлолият ҷашн гирифта мешавад. Давлати мустақил бо рамзҳои миллӣ ва конститутсия ташаккул ёфт.",
        "9 сентября 1991 Республика Таджикистан провозгласила независимость. Этот день отмечается как День независимости.",
        "On 9 September 1991 Tajikistan declared independence. This day is celebrated as Independence Day.",
        ["9 сентябри 1991", "Рӯзи Истиқлолият", "Конститутсия", "Давлати мустақил"],
        ["9 сентября 1991", "День независимости", "Конституция", "Независимое государство"],
        ["9 September 1991", "Independence Day", "Constitution", "Independent state"]),
      L("Ҷанги шаҳрвандӣ ва сулҳ", "Гражданская война и мир", "Civil war and peace", 14,
        "Солҳои 1992–1997 ҷанги шаҳрвандӣ кишварро вайрон кард. Созишномаи сулҳи соли 1997 ба муноқиша хотима гузошт. Сулҳ ва ваҳдати миллӣ асосҳои барқароршавӣ шуданд.",
        "В 1992–1997 гражданская война разрушила страну. Мирное соглашение 1997 года положило конец конфликту.",
        "In 1992–1997 civil war devastated the country. The 1997 peace agreement ended the conflict.",
        ["1992–1997", "Созишномаи сулҳ (1997)", "Ваҳдати миллӣ", "Барқароршавӣ"],
        ["1992–1997", "Мирное соглашение (1997)", "Национальное единство", "Восстановление"],
        ["1992–1997", "Peace agreement (1997)", "National unity", "Recovery"]),
      L("Тоҷикистони муосир", "Современный Таджикистан", "Modern Tajikistan", 11,
        "Имрӯз Тоҷикистон давлати мустақил бо рушди иқтисод, маориф ва фарҳанг аст. Пешвои миллат роҳбарии кишварро ба ӯҳда дорад. Ҳадафҳо: субот, рушд ва ҳифзи мероси таърихӣ.",
        "Сегодня Таджикистан — независимое государство. Лидер нации возглавляет страну. Цели: стабильность, развитие и сохранение наследия.",
        "Today Tajikistan is an independent state. The Leader of the Nation heads the country. Goals: stability, development and preserving heritage.",
        ["Давлати мустақил", "Пешвои миллат", "Рушд", "Ҳифзи мерос"],
        ["Независимое государство", "Лидер нации", "Развитие", "Сохранение наследия"],
        ["Independent state", "Leader of the Nation", "Development", "Preserving heritage"]),
    ],
  },
  {
    id: "samanid", titleKey: "samanid", categoryKey: "medieval", levelKey: "intermediate", lessons: 6, emoji: "👑",
    color: "from-amber-900/80 to-amber-700/40",
    desc: "Исмоили Сомонӣ, Бухоро, илм ва фарҳанги асри тиллоӣ.",
    descRu: "Исмаил Самани, Бухара, наука и культура золотого века.",
    descEn: "Ismail Samani, Bukhara, science and culture of the golden age.",
    topics: [
      stub("Асосгузории давлат", "Основание государства", "Founding of the state", 12),
      stub("Исмоили Сомонӣ", "Исмаил Самани", "Ismail Samani", 15),
      stub("Пойтахт — Бухоро", "Столица — Бухара", "Capital — Bukhara", 10),
      stub("Рӯдакӣ ва адабиёт", "Рудаки и литература", "Rudaki and literature", 12),
      stub("Илм ва тиб (Ибни Сино)", "Наука и медицина (Ибн Сина)", "Science and medicine (Ibn Sina)", 14),
      stub("Мерос ва аҳамият", "Наследие и значение", "Legacy and significance", 10),
    ],
  },
  {
    id: "ancient", titleKey: "ancient", categoryKey: "world", levelKey: "intermediate", lessons: 7, emoji: "🏺",
    color: "from-sky-900/80 to-sky-700/40",
    desc: "Ориёиҳо, Ҳахоманишиён, Куруши Кабир ва Мовароуннаҳр.",
    descRu: "Арии, Ахемениды, Кир Великий и Мавераннахр.",
    descEn: "Aryans, Achaemenids, Cyrus the Great and Transoxiana.",
    topics: [
      stub("Тамаддунҳои қадими Осиёи Миёна", "Древние цивилизации Средней Азии", "Ancient civilizations of Central Asia", 12),
      stub("Куруши Кабир", "Кир Великий", "Cyrus the Great", 14),
      stub("Империяи Ҳахоманишӣ", "Империя Ахеменидов", "Achaemenid Empire", 12),
      stub("Искандари Мақдунӣ", "Александр Македонский", "Alexander the Great", 11),
      stub("Юнону Бохтар", "Греко-Бактрия", "Greco-Bactria", 10),
      stub("Кушониён", "Кушаны", "The Kushans", 12),
      stub("Мероси қадим", "Древнее наследие", "Ancient heritage", 9),
    ],
  },
  {
    id: "silkRoad", titleKey: "silkRoad", categoryKey: "world", levelKey: "advanced", lessons: 6, emoji: "🐪",
    color: "from-orange-900/80 to-orange-700/40",
    desc: "Тиҷорат, фарҳанг ва шаҳрҳои Роҳи абришам.",
    descRu: "Торговля, культура и города Шёлкового пути.",
    descEn: "Trade, culture and cities of the Silk Road.",
    topics: [
      stub("Роҳи абришам чист?", "Что такое Шёлковый путь?", "What is the Silk Road?", 10),
      stub("Самарқанд ва Бухоро", "Самарканд и Бухара", "Samarkand and Bukhara", 14),
      stub("Тиҷорат ва молҳо", "Торговля и товары", "Trade and goods", 11),
      stub("Дину фарҳанг", "Религия и культура", "Religion and culture", 12),
      stub("Сайёҳон ва сайёҳномаҳо", "Путешественники и записки", "Travelers and accounts", 10),
      stub("Мерос дар Тоҷикистон", "Наследие в Таджикистане", "Heritage in Tajikistan", 11),
    ],
  },
  {
    id: "soviet", titleKey: "soviet", categoryKey: "national", levelKey: "intermediate", lessons: 6, emoji: "⭐",
    color: "from-red-900/80 to-red-700/40",
    desc: "Ташаккули ҶШС Тоҷикистон, ҷанг ва сохтмони миллӣ.",
    descRu: "Становление Таджикской ССР, война и национальное строительство.",
    descEn: "Formation of the Tajik SSR, war and nation-building.",
    topics: [
      stub("Инқилоб ва тағйирот", "Революция и перемены", "Revolution and change", 11),
      stub("Нусратулло Махсум ва Шотемур", "Нусратулло Махсум и Шотемур", "Nusratullo Makhsum and Shotemur", 13),
      stub("ҶШС Тоҷикистон (1929)", "Таджикская ССР (1929)", "Tajik SSR (1929)", 12),
      stub("Ҷанги Бузурги Ватанӣ", "Великая Отечественная война", "Great Patriotic War", 14),
      stub("Айнӣ, Ғафуров, Турсунзода", "Айни, Гафуров, Турсунзаде", "Aini, Ghafurov, Tursunzoda", 12),
      stub("Роҳ ба сӯи истиқлолият", "Путь к независимости", "Path to independence", 10),
    ],
  },
  {
    id: "modern", titleKey: "modern", categoryKey: "contemporary", levelKey: "beginner", lessons: 5, emoji: "🏛️",
    color: "from-indigo-900/80 to-indigo-700/40",
    desc: "Истиқлолият, сулҳ ва рушди Тоҷикистони муосир.",
    descRu: "Независимость, мир и развитие современного Таджикистана.",
    descEn: "Independence, peace and development of modern Tajikistan.",
    topics: [
      stub("Эълони истиқлолият", "Провозглашение независимости", "Declaration of independence", 10),
      stub("Ҷанги шаҳрвандӣ", "Гражданская война", "Civil war", 14),
      stub("Созишномаи сулҳ (1997)", "Мирное соглашение (1997)", "Peace agreement (1997)", 12),
      stub("Пешвои миллат", "Лидер нации", "Leader of the Nation", 11),
      stub("Тоҷикистон имрӯз", "Таджикистан сегодня", "Tajikistan today", 10),
    ],
  },
]

export default function CoursesPage() {
  const { t, i18n } = useTranslation()
  const [openId, setOpenId] = useState<string | null>(null)
  const [lessonIdx, setLessonIdx] = useState<number | null>(null)
  const lang = i18n.language?.startsWith("ru") ? "ru" : i18n.language?.startsWith("en") ? "en" : "tg"

  const open = courses.find((c) => c.id === openId)
  const lesson = open && lessonIdx !== null ? open.topics[lessonIdx] : null

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
  function bodyOf(l: Lesson) {
    if (lang === "ru") return l.bodyRu
    if (lang === "en") return l.bodyEn
    return l.body
  }
  function pointsOf(l: Lesson) {
    if (lang === "ru") return l.pointsRu
    if (lang === "en") return l.pointsEn
    return l.points
  }
  const minLabel = lang === "ru" ? "мин" : lang === "en" ? "min" : "дақ"
  const lessonsLabel = lang === "ru" ? "Уроки" : lang === "en" ? "Lessons" : "Дарсҳо"
  const keyPoints = lang === "ru" ? "Нуқтаҳои асосӣ" : lang === "en" ? "Key points" : "Нуқтаҳои асосӣ"
  const nextLabel = lang === "ru" ? "Дарси навбатӣ" : lang === "en" ? "Next lesson" : "Дарси навбатӣ"
  const doneLabel = lang === "ru" ? "Бозгашт ба рӯйхат" : lang === "en" ? "Back to list" : "Бозгашт ба рӯйхат"

  if (open && lesson && lessonIdx !== null) {
    const hasNext = lessonIdx < open.topics.length - 1
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button type="button" onClick={() => setLessonIdx(null)}
          className="text-sm text-muted-foreground hover:text-white mb-6 inline-flex items-center gap-1">
          ← {t("common.back")}
        </button>
        <div className={`rounded-2xl bg-gradient-to-br ${open.color} border border-border p-6 sm:p-8 mb-6`}>
          <div className="text-sm text-white/60 mb-2">
            {t(`courses.items.${open.titleKey}`)} · {lessonIdx + 1}/{open.topics.length}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{topicTitle(lesson)}</h1>
          <p className="text-sm text-muted">{lesson.minutes} {minLabel}</p>
        </div>
        <div className="prose prose-invert max-w-none mb-6">
          <p className="text-[16px] leading-relaxed text-white/85 whitespace-pre-line">{bodyOf(lesson)}</p>
        </div>
        <div className="rounded-xl border border-border bg-card/40 p-4 mb-8">
          <h3 className="text-sm font-semibold text-primary mb-3">{keyPoints}</h3>
          <ul className="space-y-2">
            {pointsOf(lesson).map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-white/80">
                <span className="text-primary shrink-0">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {hasNext ? (
            <Button onClick={() => setLessonIdx(lessonIdx + 1)} className="flex-1">
              {nextLabel} →
            </Button>
          ) : null}
          <Button variant="secondary" onClick={() => setLessonIdx(null)} className="flex-1">
            {doneLabel}
          </Button>
        </div>
      </div>
    )
  }

  if (open) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button type="button" onClick={() => setOpenId(null)}
          className="text-sm text-muted-foreground hover:text-white mb-6 inline-flex items-center gap-1">
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
            {open.topics.length} {t("courses.lessons")} · {open.topics.reduce((s, x) => s + x.minutes, 0)} {minLabel}
          </p>
        </div>
        <h2 className="text-lg font-semibold mb-4">{lessonsLabel}</h2>
        <div className="space-y-2">
          {open.topics.map((les, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLessonIdx(i)}
              className="w-full flex items-center gap-4 rounded-xl border border-border bg-card/40 px-4 py-3 hover:border-primary/40 transition text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-bold">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{topicTitle(les)}</div>
                <div className="text-xs text-muted">{les.minutes} {minLabel}</div>
              </div>
              <span className="text-primary text-sm">▶</span>
            </button>
          ))}
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
            onClick={() => { setOpenId(course.id); setLessonIdx(null) }}
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
                <p className="text-sm text-muted">{course.topics.length} {t("courses.lessons")}</p>
                <Button size="sm" variant="secondary" onClick={(e) => { e.stopPropagation(); setOpenId(course.id); setLessonIdx(null) }}>
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
