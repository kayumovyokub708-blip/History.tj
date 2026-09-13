import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

/** Китобҳо — алоҳида. Барои илова кардан танҳо ин рӯйхатро васеъ кунед. */
type Book = {
  id: string
  title: string
  grade: string
  author?: string
  subject: string
  year?: number
  publisher?: string
  coverUrl?: string
  previews?: string[]
  description?: string
}

const BOOKS: Book[] = [
  {
    id: "tj-people-5",
    title: "Таърихи халқи тоҷик",
    grade: "Синфи 5",
    author: "Юсуфшоҳ Яъқубов",
    subject: "Таърих",
    year: 2015,
    publisher: "Маориф",
    coverUrl: "https://n.uguu.se/bOmMcpaD.jpg",
    previews: [
      "https://h.uguu.se/EpWorxTM.jpg",
      "https://d.uguu.se/gicEaxAY.jpg",
    ],
    description:
      "Китоби дарсӣ барои синфи 5. Замони ориёиҳо. Вазорати маориф ва илми Ҷумҳурии Тоҷикистон ба чоп тавсия кардааст.",
  },
  {
    id: "tj-7",
    title: "Таърихи Тоҷикистон",
    grade: "Синфи 7",
    author: "Вазорати маориф",
    subject: "Таърих",
  },
  {
    id: "tj-8",
    title: "Таърихи Тоҷикистон",
    grade: "Синфи 8",
    author: "Вазорати маориф",
    subject: "Таърих",
  },
  {
    id: "tj-11",
    title: "Таърихи Тоҷикистон",
    grade: "Синфи 11",
    author: "Вазорати маориф",
    subject: "Таърих",
  },
  {
    id: "world-9",
    title: "Таърихи ҷаҳон",
    grade: "Синфи 9",
    author: "Вазорати маориф",
    subject: "Таърих",
  },
  {
    id: "world-10",
    title: "Таърихи ҷаҳон",
    grade: "Синфи 10",
    author: "Вазорати маориф",
    subject: "Таърих",
  },
]

const bookById = (id: string) => BOOKS.find((b) => b.id === id)

type Lesson = {
  period: number
  time: string
  className: string
  subject: string
  bookId: string
  room?: string
}

type DaySchedule = {
  key: string
  lessons: Lesson[]
}

const WEEK: DaySchedule[] = [
  {
    key: "mon",
    lessons: [
      { period: 1, time: "08:00–08:45", className: "5-А", subject: "Таърих", bookId: "tj-people-5", room: "312" },
      { period: 3, time: "10:00–10:45", className: "9-Б", subject: "Таърих", bookId: "world-9", room: "312" },
      { period: 5, time: "12:00–12:45", className: "11-А", subject: "Таърих", bookId: "tj-11", room: "305" },
    ],
  },
  {
    key: "tue",
    lessons: [
      { period: 2, time: "08:55–09:40", className: "8-А", subject: "Таърих", bookId: "tj-8", room: "312" },
      { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", bookId: "world-10", room: "312" },
      { period: 6, time: "12:55–13:40", className: "5-Б", subject: "Таърих", bookId: "tj-people-5", room: "308" },
    ],
  },
  {
    key: "wed",
    lessons: [
      { period: 1, time: "08:00–08:45", className: "9-А", subject: "Таърих", bookId: "world-9", room: "312" },
      { period: 3, time: "10:00–10:45", className: "11-Б", subject: "Таърих", bookId: "tj-11", room: "305" },
      { period: 5, time: "12:00–12:45", className: "8-Б", subject: "Таърих", bookId: "tj-8", room: "312" },
    ],
  },
  {
    key: "thu",
    lessons: [
      { period: 2, time: "08:55–09:40", className: "10-А", subject: "Таърих", bookId: "world-10", room: "312" },
      { period: 4, time: "10:55–11:40", className: "5-А", subject: "Таърих", bookId: "tj-people-5", room: "312" },
      { period: 6, time: "12:55–13:40", className: "9-Б", subject: "Таърих", bookId: "world-9", room: "308" },
    ],
  },
  {
    key: "fri",
    lessons: [
      { period: 1, time: "08:00–08:45", className: "11-А", subject: "Таърих", bookId: "tj-11", room: "305" },
      { period: 3, time: "10:00–10:45", className: "8-А", subject: "Таърих", bookId: "tj-8", room: "312" },
      { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", bookId: "world-10", room: "312" },
    ],
  },
  {
    key: "sat",
    lessons: [
      { period: 2, time: "08:55–09:40", className: "5-Б", subject: "Таърих", bookId: "tj-people-5", room: "312" },
      { period: 3, time: "10:00–10:45", className: "9-А", subject: "Таърих", bookId: "world-9", room: "308" },
    ],
  },
  { key: "sun", lessons: [] },
]

const DAY_LABELS: Record<string, { tg: string; ru: string; en: string }> = {
  mon: { tg: "Душанбе", ru: "Понедельник", en: "Monday" },
  tue: { tg: "Сешанбе", ru: "Вторник", en: "Tuesday" },
  wed: { tg: "Чоршанбе", ru: "Среда", en: "Wednesday" },
  thu: { tg: "Панҷшанбе", ru: "Четверг", en: "Thursday" },
  fri: { tg: "Ҷумъа", ru: "Пятница", en: "Friday" },
  sat: { tg: "Шанбе", ru: "Суббота", en: "Saturday" },
  sun: { tg: "Якшанбе", ru: "Воскресенье", en: "Sunday" },
}

function dayKeyFromDate(d: Date): string {
  const map = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
  return map[d.getDay()]
}

function bookLabel(bookId: string): string {
  const b = bookById(bookId)
  if (!b) return bookId
  return `${b.title} · ${b.grade}`
}

export default function TeachersPage() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || "tg").slice(0, 2) as "tg" | "ru" | "en"
  const todayKey = useMemo(() => dayKeyFromDate(new Date()), [])
  const today = WEEK.find((d) => d.key === todayKey) ?? WEEK[0]
  const [lightbox, setLightbox] = useState<string | null>(null)

  const featured = BOOKS.find((b) => b.coverUrl)
  const otherBooks = BOOKS.filter((b) => !b.coverUrl)

  const labels = {
    title: { tg: "Омӯзгорон", ru: "Преподаватели", en: "Teachers" }[lang],
    subtitle: {
      tg: "Ҷадвали ҳафта · синф, соат ва китоб",
      ru: "Расписание на неделю · класс, время и учебник",
      en: "Weekly schedule · class, period and textbook",
    }[lang],
    today: { tg: "Имрӯз", ru: "Сегодня", en: "Today" }[lang],
    period: { tg: "Соат", ru: "Урок", en: "Period" }[lang],
    classLabel: { tg: "Синф", ru: "Класс", en: "Class" }[lang],
    book: { tg: "Китоб", ru: "Учебник", en: "Textbook" }[lang],
    books: { tg: "Китобҳо", ru: "Учебники", en: "Textbooks" }[lang],
    booksHint: {
      tg: "Рӯйхати китобҳо. Китоби нав илова кардан мумкин аст.",
      ru: "Список учебников. Можно добавить новую книгу.",
      en: "Textbook list. New books can be added.",
    }[lang],
    room: { tg: "Кабинет", ru: "Кабинет", en: "Room" }[lang],
    free: { tg: "Дарси нест", ru: "Нет уроков", en: "No lessons" }[lang],
    week: { tg: "Ҳафта", ru: "Неделя", en: "Week" }[lang],
    lessonsToday: { tg: "дарс имрӯз", ru: "уроков сегодня", en: "lessons today" }[lang],
    author: { tg: "Муаллиф", ru: "Автор", en: "Author" }[lang],
    publisher: { tg: "Нашриёт", ru: "Издательство", en: "Publisher" }[lang],
    year: { tg: "Сол", ru: "Год", en: "Year" }[lang],
    inside: { tg: "Саҳифаҳои дохилӣ", ru: "Страницы внутри", en: "Inside pages" }[lang],
    recommended: { tg: "Тавсияшуда", ru: "Рекомендовано", en: "Recommended" }[lang],
    otherBooks: { tg: "Дигар китобҳо", ru: "Другие учебники", en: "Other textbooks" }[lang],
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#0a0a0c]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="mb-10">
          <p className="text-[13px] font-medium tracking-wide text-white/40 uppercase mb-2">
            Histori.tj
          </p>
          <h1 className="text-[34px] sm:text-[40px] font-semibold tracking-tight text-white leading-tight">
            {labels.title}
          </h1>
          <p className="mt-2 text-[17px] text-white/55 font-normal">{labels.subtitle}</p>
        </header>

        <section className="mb-10">
          <div className="flex items-end justify-between gap-3 mb-5 px-1">
            <div>
              <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-white">
                📖 {labels.books}
              </h2>
              <p className="mt-1 text-[13px] text-white/40">{labels.booksHint}</p>
            </div>
            <span className="text-[13px] text-white/30 tabular-nums shrink-0">{BOOKS.length}</span>
          </div>

          {featured && (
            <div className="mb-6 rounded-3xl bg-gradient-to-b from-[#1c1c1e] to-[#121214] border border-white/[0.08] overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.4)]">
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:gap-6">
                <button
                  type="button"
                  onClick={() => featured.coverUrl && setLightbox(featured.coverUrl)}
                  className="shrink-0 mx-auto sm:mx-0 group relative"
                >
                  <div className="w-[140px] sm:w-[160px] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-transform group-hover:scale-[1.02]">
                    <img
                      src={featured.coverUrl}
                      alt={featured.title}
                      className="w-full h-auto block object-cover"
                      loading="eager"
                    />
                  </div>
                </button>

                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className="inline-flex self-start items-center rounded-full bg-[#30d158]/15 text-[#30d158] text-[11px] font-semibold px-2.5 py-0.5 mb-2 tracking-wide uppercase">
                    {labels.recommended}
                  </span>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-tight leading-snug">
                    {featured.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-white/55">
                    {featured.grade}
                    {featured.author ? ` · ${featured.author}` : ""}
                  </p>
                  {featured.description && (
                    <p className="mt-3 text-[13px] text-white/40 leading-relaxed line-clamp-3">
                      {featured.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-white/35">
                    {featured.publisher && (
                      <span className="rounded-lg bg-white/[0.05] px-2.5 py-1">
                        {labels.publisher}: {featured.publisher}
                      </span>
                    )}
                    {featured.year && (
                      <span className="rounded-lg bg-white/[0.05] px-2.5 py-1">
                        {labels.year}: {featured.year}
                      </span>
                    )}
                    <span className="rounded-lg bg-white/[0.05] px-2.5 py-1">{featured.subject}</span>
                  </div>
                </div>
              </div>

              {featured.previews && featured.previews.length > 0 && (
                <div className="px-5 sm:px-6 pb-5">
                  <p className="text-[12px] font-semibold text-white/40 uppercase tracking-wide mb-3">
                    {labels.inside}
                  </p>
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {featured.previews.map((url, i) => (
                      <button
                        key={url}
                        type="button"
                        onClick={() => setLightbox(url)}
                        className="shrink-0 w-[120px] sm:w-[140px] rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-[#0a84ff]/50 transition shadow-lg"
                      >
                        <img
                          src={url}
                          alt={`${featured.title} — ${i + 1}`}
                          className="w-full h-auto block object-cover bg-[#0a0a0c]"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {otherBooks.length > 0 && (
            <>
              <p className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-3 px-1">
                {labels.otherBooks}
              </p>
              <div className="rounded-3xl bg-[#161618] border border-white/[0.06] overflow-hidden">
                <ul className="divide-y divide-white/[0.05]">
                  {otherBooks.map((b) => (
                    <li
                      key={b.id}
                      className="px-4 sm:px-5 py-4 flex items-start gap-4 hover:bg-white/[0.03] transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0a84ff]/12 flex items-center justify-center text-[20px] shrink-0">
                        📘
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[16px] font-semibold text-white leading-snug">{b.title}</div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[13px] text-white/45">
                          <span className="inline-flex items-center rounded-full bg-white/[0.06] text-white/70 px-2 py-0.5 text-[12px] font-medium">
                            {b.grade}
                          </span>
                          <span>{b.subject}</span>
                          {b.author && (
                            <>
                              <span className="text-white/20">·</span>
                              <span>
                                {labels.author}: {b.author}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </section>

        <section className="mb-8">
          <div className="rounded-3xl bg-[#161618] border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="px-6 pt-6 pb-3 flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#30d158] tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
                  {labels.today}
                </span>
                <h2 className="mt-1 text-[28px] font-semibold text-white tracking-tight">
                  {DAY_LABELS[todayKey][lang]}
                </h2>
              </div>
              <div className="text-right">
                <div className="text-[28px] font-semibold text-white tabular-nums">{today.lessons.length}</div>
                <div className="text-[13px] text-white/45">{labels.lessonsToday}</div>
              </div>
            </div>

            <div className="px-3 pb-4 space-y-2">
              {today.lessons.length === 0 ? (
                <div className="mx-3 mb-2 rounded-2xl bg-white/[0.04] px-5 py-8 text-center text-white/40 text-[15px]">
                  {labels.free}
                </div>
              ) : (
                today.lessons.map((lesson) => (
                  <div
                    key={`${lesson.period}-${lesson.className}`}
                    className="mx-1 rounded-2xl bg-white/[0.045] hover:bg-white/[0.07] transition-colors px-4 py-3.5 flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-14 text-center">
                      <div className="text-[11px] text-white/40 font-medium uppercase tracking-wide">
                        {labels.period}
                      </div>
                      <div className="text-[22px] font-semibold text-white tabular-nums leading-none mt-0.5">
                        {lesson.period}
                      </div>
                      <div className="text-[11px] text-white/35 mt-1 leading-tight">{lesson.time}</div>
                    </div>
                    <div className="w-px self-stretch bg-white/[0.08]" />
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#0a84ff]/15 text-[#64b5ff] text-[13px] font-semibold px-2.5 py-0.5">
                          {labels.classLabel} {lesson.className}
                        </span>
                        {lesson.room && (
                          <span className="text-[12px] text-white/35">
                            {labels.room} {lesson.room}
                          </span>
                        )}
                      </div>
                      <div className="mt-1.5 text-[16px] font-medium text-white">{lesson.subject}</div>
                      <div className="mt-1 flex items-start gap-1.5 text-[13px] text-white/50">
                        <span className="text-[14px] leading-none mt-0.5" aria-hidden>
                          📖
                        </span>
                        <span>
                          <span className="text-white/35">{labels.book}: </span>
                          {bookLabel(lesson.bookId)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-4 px-1">
            {labels.week}
          </h3>
          <div className="space-y-3">
            {WEEK.map((day) => {
              const isToday = day.key === todayKey
              const name = DAY_LABELS[day.key][lang]
              return (
                <div
                  key={day.key}
                  className={[
                    "rounded-2xl border overflow-hidden transition-colors",
                    isToday ? "bg-[#161618] border-[#30d158]/25" : "bg-[#121214] border-white/[0.05]",
                  ].join(" ")}
                >
                  <div className="px-4 sm:px-5 py-3 flex items-center justify-between border-b border-white/[0.05]">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={[
                          "text-[17px] font-semibold tracking-tight",
                          isToday ? "text-[#30d158]" : "text-white",
                        ].join(" ")}
                      >
                        {name}
                      </span>
                      {isToday && (
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#30d158]/90 bg-[#30d158]/12 px-2 py-0.5 rounded-full">
                          {labels.today}
                        </span>
                      )}
                    </div>
                    <span className="text-[13px] text-white/35 tabular-nums">
                      {day.lessons.length > 0
                        ? `${day.lessons.length} · ${day.lessons.map((l) => l.className).join(", ")}`
                        : labels.free}
                    </span>
                  </div>

                  {day.lessons.length > 0 && (
                    <ul className="divide-y divide-white/[0.04]">
                      {day.lessons.map((lesson) => (
                        <li
                          key={`${day.key}-${lesson.period}-${lesson.className}`}
                          className="px-4 sm:px-5 py-3 flex gap-3 sm:gap-4 items-center"
                        >
                          <div className="w-11 shrink-0 text-center">
                            <div className="text-[18px] font-semibold text-white tabular-nums leading-none">
                              {lesson.period}
                            </div>
                            <div className="text-[10px] text-white/30 mt-0.5 leading-tight">
                              {lesson.time.split("–")[0]}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                              <span className="text-[15px] font-medium text-white">
                                {labels.classLabel} {lesson.className}
                              </span>
                              <span className="text-white/25">·</span>
                              <span className="text-[14px] text-white/55">{lesson.subject}</span>
                            </div>
                            <div className="text-[12px] text-white/40 mt-0.5 truncate">
                              📖 {bookLabel(lesson.bookId)}
                              {lesson.room ? ` · ${labels.room} ${lesson.room}` : ""}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <p className="mt-10 text-center text-[12px] text-white/25">
          Histori.tj · {labels.title}
        </p>
      </div>

      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
          aria-label="Close"
        >
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </button>
      )}
    </div>
  )
}
