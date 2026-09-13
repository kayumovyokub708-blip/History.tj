import { useMemo } from "react"
import { useTranslation } from "react-i18next"

type Lesson = {
  period: number
  time: string
  className: string
  subject: string
  book: string
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
      { period: 1, time: "08:00–08:45", className: "7-А", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 7", room: "312" },
      { period: 3, time: "10:00–10:45", className: "9-Б", subject: "Таърих", book: "Таърихи ҷаҳон · синфи 9", room: "312" },
      { period: 5, time: "12:00–12:45", className: "11-А", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 11", room: "305" },
    ],
  },
  {
    key: "tue",
    lessons: [
      { period: 2, time: "08:55–09:40", className: "8-А", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 8", room: "312" },
      { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", book: "Таърихи ҷаҳон · синфи 10", room: "312" },
      { period: 6, time: "12:55–13:40", className: "7-Б", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 7", room: "308" },
    ],
  },
  {
    key: "wed",
    lessons: [
      { period: 1, time: "08:00–08:45", className: "9-А", subject: "Таърих", book: "Таърихи ҷаҳон · синфи 9", room: "312" },
      { period: 3, time: "10:00–10:45", className: "11-Б", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 11", room: "305" },
      { period: 5, time: "12:00–12:45", className: "8-Б", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 8", room: "312" },
    ],
  },
  {
    key: "thu",
    lessons: [
      { period: 2, time: "08:55–09:40", className: "10-А", subject: "Таърих", book: "Таърихи ҷаҳон · синфи 10", room: "312" },
      { period: 4, time: "10:55–11:40", className: "7-А", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 7", room: "312" },
      { period: 6, time: "12:55–13:40", className: "9-Б", subject: "Таърих", book: "Таърихи ҷаҳон · синфи 9", room: "308" },
    ],
  },
  {
    key: "fri",
    lessons: [
      { period: 1, time: "08:00–08:45", className: "11-А", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 11", room: "305" },
      { period: 3, time: "10:00–10:45", className: "8-А", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 8", room: "312" },
      { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", book: "Таърихи ҷаҳон · синфи 10", room: "312" },
    ],
  },
  {
    key: "sat",
    lessons: [
      { period: 2, time: "08:55–09:40", className: "7-Б", subject: "Таърих", book: "Таърихи Тоҷикистон · синфи 7", room: "312" },
      { period: 3, time: "10:00–10:45", className: "9-А", subject: "Таърих", book: "Таърихи ҷаҳон · синфи 9", room: "308" },
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

export default function TeachersPage() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || "tg").slice(0, 2) as "tg" | "ru" | "en"
  const todayKey = useMemo(() => dayKeyFromDate(new Date()), [])
  const today = WEEK.find((d) => d.key === todayKey) ?? WEEK[0]

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
    room: { tg: "Кабинет", ru: "Кабинет", en: "Room" }[lang],
    free: { tg: "Дарси нест", ru: "Нет уроков", en: "No lessons" }[lang],
    week: { tg: "Ҳафта", ru: "Неделя", en: "Week" }[lang],
    lessonsToday: { tg: "дарс имрӯз", ru: "уроков сегодня", en: "lessons today" }[lang],
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
          <p className="mt-2 text-[17px] text-white/55 font-normal">
            {labels.subtitle}
          </p>
        </header>

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
                <div className="text-[28px] font-semibold text-white tabular-nums">
                  {today.lessons.length}
                </div>
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
                      <div className="text-[11px] text-white/35 mt-1 leading-tight">
                        {lesson.time}
                      </div>
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
                      <div className="mt-1.5 text-[16px] font-medium text-white">
                        {lesson.subject}
                      </div>
                      <div className="mt-1 flex items-start gap-1.5 text-[13px] text-white/50">
                        <span className="text-[14px] leading-none mt-0.5" aria-hidden>
                          📖
                        </span>
                        <span>
                          <span className="text-white/35">{labels.book}: </span>
                          {lesson.book}
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
                    isToday
                      ? "bg-[#161618] border-[#30d158]/25"
                      : "bg-[#121214] border-white/[0.05]",
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
                              📖 {lesson.book}
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
    </div>
  )
}
