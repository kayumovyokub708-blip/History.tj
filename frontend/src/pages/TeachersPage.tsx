import { useMemo, useState, useEffect, useCallback } from "react"
import { useTranslation } from "react-i18next"

type Book = {
  id: string
  title: string
  grade: string
  author?: string
  subject: string
  year?: number
  publisher?: string
  coverUrl?: string
  pages?: string[]
  /** URL-и пурраи PDF (ҳамаи саҳифаҳо + мундариҷа) */
  pdfUrl?: string
  pageCount?: number
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
    coverUrl: "https://d.uguu.se/fOGGUBvJ.jpg",
    pageCount: 249,
    pdfUrl:
      "https://kitobkhon.net/storage/books/kitobkhon-net-5.-tarikhi-khalki-tojik-2015.pdf",
    pages: [
      "https://d.uguu.se/fOGGUBvJ.jpg",
      "https://n.uguu.se/KMmWlOUy.jpg",
      "https://n.uguu.se/TPUzzdfy.jpg",
    ],
    description:
      "Китоби дарсӣ барои синфи 5 · 249 саҳифа · Замони ориёиҳо. Вазорати маориф ва илми Ҷумҳурии Тоҷикистон ба чоп тавсия кардааст. Ҳамаи саҳифаҳо ва мундариҷа дар дохили китоб.",
  },
  {
    id: "tj-people-6",
    title: "Таърихи халқи тоҷик",
    grade: "Синфи 6",
    author: "Юсуфшоҳи Яъқубшоҳ",
    subject: "Таърих",
    year: 2023,
    publisher: "Маориф",
    coverUrl: "https://h.uguu.se/KNGGDNvC.jpg",
    pageCount: 232,
    pdfUrl:
      "https://kitobkhon.net/storage/books/kitobkhon-net-tarikhi-khalki-tojik-6.pdf",
    pages: [
      "https://h.uguu.se/KNGGDNvC.jpg",
      "https://d.uguu.se/RpQcKfne.jpg",
      "https://h.uguu.se/DQbhVVXY.jpg",
    ],
    description:
      "Китоби дарсӣ барои синфи 6 · 232 саҳифа · Ибтидои асрҳои миёна. Вазорати маориф ва илми Ҷумҳурии Тоҷикистон тасдиқ кардааст. Нашри IV, 2023.",
  },
  {
    id: "tj-people-7",
    title: "Таърихи халқи тоҷик",
    grade: "Синфи 7",
    author: "С. Хоҷаев, С. Муллоҷонов",
    subject: "Таърих",
    year: 2017,
    publisher: "Маориф",
    coverUrl: "https://n.uguu.se/ooMGfwUv.jpg",
    pageCount: 240,
    pdfUrl:
      "https://kitobkhon.net/storage/books/kitobkhon-net-7.-tarikhi-khalki-tojik-2017.pdf",
    pages: [
      "https://n.uguu.se/ooMGfwUv.jpg",
      "https://h.uguu.se/wxjdJKMv.jpg",
      "https://n.uguu.se/poHhlgQA.jpg",
    ],
    description:
      "Китоби дарсӣ барои синфи 7 · 240 саҳифа. Вазорати маориф ва илми Ҷумҳурии Тоҷикистон тасдиқ кардааст. Душанбе, Маориф, 2017.",
  },
  {
    id: "tj-people-8",
    title: "Таърихи халқи тоҷик",
    grade: "Синфи 8",
    author: "А. Мухторов, Ҳ. Камол, А. Саидов",
    subject: "Таърих",
    year: 2022,
    publisher: "Маориф",
    coverUrl: "https://h.uguu.se/wPWigHvQ.jpg",
    pageCount: 312,
    pdfUrl:
      "https://kitobkhon.net/storage/books/kitobkhon-net-tarikhi-khalki-tojik-8.pdf",
    pages: [
      "https://h.uguu.se/wPWigHvQ.jpg",
      "https://n.uguu.se/EtxSYeRt.jpg",
      "https://n.uguu.se/NXJLonJh.jpg",
    ],
    description:
      "Китоби дарсӣ барои синфи 8 · 312 саҳифа. Вазорати маориф ва илми Ҷумҳурии Тоҷикистон тасдиқ кардааст. Душанбе, Маориф, 2022.",
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

type DaySchedule = { key: string; lessons: Lesson[] }

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
      { period: 2, time: "08:55–09:40", className: "8-А", subject: "Таърих", bookId: "tj-people-8", room: "312" },
      { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", bookId: "world-10", room: "312" },
      { period: 6, time: "12:55–13:40", className: "6-А", subject: "Таърих", bookId: "tj-people-6", room: "308" },
    ],
  },
  {
    key: "wed",
    lessons: [
      { period: 1, time: "08:00–08:45", className: "9-А", subject: "Таърих", bookId: "world-9", room: "312" },
      { period: 3, time: "10:00–10:45", className: "11-Б", subject: "Таърих", bookId: "tj-11", room: "305" },
      { period: 5, time: "12:00–12:45", className: "8-Б", subject: "Таърих", bookId: "tj-people-8", room: "312" },
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
      { period: 3, time: "10:00–10:45", className: "8-А", subject: "Таърих", bookId: "tj-people-8", room: "312" },
      { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", bookId: "world-10", room: "312" },
    ],
  },
  {
    key: "sat",
    lessons: [
      { period: 2, time: "08:55–09:40", className: "6-Б", subject: "Таърих", bookId: "tj-people-6", room: "312" },
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
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][d.getDay()]
}

function bookLabel(bookId: string): string {
  const b = bookById(bookId)
  return b ? `${b.title} · ${b.grade}` : bookId
}

/** Китоби дарсӣ — ҳамаи саҳифаҳо (Google Viewer + PDF) */
function BookReader({
  book,
  onClose,
}: {
  book: Book
  onClose: () => void
}) {
  const pages = book.pages?.length ? book.pages : book.coverUrl ? [book.coverUrl] : []
  const [page, setPage] = useState(0)
  const [mode, setMode] = useState<"full" | "preview">(book.pdfUrl ? "full" : "preview")
  const total = pages.length

  const go = useCallback(
    (dir: -1 | 1) => {
      setPage((p) => Math.min(total - 1, Math.max(0, p + dir)))
    },
    [total]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (mode === "preview") {
        if (e.key === "ArrowRight" || e.key === " ") {
          e.preventDefault()
          go(1)
        }
        if (e.key === "ArrowLeft") go(-1)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go, onClose, mode])

  const gview =
    book.pdfUrl
      ? `https://docs.google.com/viewer?url=${encodeURIComponent(book.pdfUrl)}&embedded=true`
      : ""

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0c0c0e]">
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 border-b border-white/10 bg-black/50 backdrop-blur-md shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="text-[14px] text-white/70 hover:text-white px-2 py-1 rounded-lg hover:bg-white/10 shrink-0"
        >
          ← Пӯшидан
        </button>
        <div className="text-center min-w-0 flex-1 px-1">
          <div className="text-[13px] sm:text-[14px] font-semibold text-white truncate">{book.title}</div>
          <div className="text-[11px] text-white/40 truncate">
            {book.grade}
            {book.author ? ` · ${book.author}` : ""}
            {book.pageCount ? ` · ${book.pageCount} саҳифа` : ""}
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {book.pdfUrl && (
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-semibold text-white bg-[#0a84ff] hover:bg-[#0066d6] px-3 py-1.5 rounded-lg"
            >
              PDF
            </a>
          )}
        </div>
      </div>

      {book.pdfUrl && (
        <div className="shrink-0 px-3 sm:px-4 py-3 bg-gradient-to-r from-[#0a84ff]/20 to-[#30d158]/15 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <p className="text-[13px] text-white/85 text-center">
              📖 Ҳамаи <span className="font-semibold text-white">{book.pageCount ?? "?"} саҳифа</span>
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-semibold text-white bg-[#0a84ff] hover:bg-[#0066d6] px-5 py-2 rounded-full shadow-lg shadow-[#0a84ff]/30"
              >
                Кушодани ҳамаи саҳифаҳо
              </a>
              <button
                type="button"
                onClick={() => setMode("full")}
                className={[
                  "text-[13px] px-3 py-2 rounded-full",
                  mode === "full" ? "bg-white/20 text-white" : "bg-white/10 text-white/70 hover:bg-white/15",
                ].join(" ")}
              >
                Дар дохил
              </button>
              <button
                type="button"
                onClick={() => setMode("preview")}
                className={[
                  "text-[13px] px-3 py-2 rounded-full",
                  mode === "preview" ? "bg-white/20 text-white" : "bg-white/10 text-white/70 hover:bg-white/15",
                ].join(" ")}
              >
                Намуна
              </button>
            </div>
          </div>
        </div>
      )}

      {mode === "full" && gview ? (
        <div className="flex-1 min-h-0 relative bg-[#525659]">
          <iframe
            title={book.title}
            src={gview}
            className="absolute inset-0 w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
      ) : (
        <>
          <div className="flex-1 relative flex items-center justify-center overflow-hidden min-h-0">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={page === 0}
              className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 text-white text-xl flex items-center justify-center backdrop-blur"
              aria-label="Саҳифаи қаблӣ"
            >
              ‹
            </button>
            <div className="h-full w-full max-w-3xl mx-auto px-12 sm:px-16 py-4 flex items-center justify-center">
              {total > 0 ? (
                <img
                  key={pages[page]}
                  src={pages[page]}
                  alt={`${book.title} — саҳифаи ${page + 1}`}
                  className="max-h-full max-w-full object-contain rounded-md shadow-[0_8px_40px_rgba(0,0,0,0.55)] bg-white"
                />
              ) : (
                <p className="text-white/40">Саҳифа нест</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={page >= total - 1}
              className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 text-white text-xl flex items-center justify-center backdrop-blur"
              aria-label="Саҳифаи навбатӣ"
            >
              ›
            </button>
          </div>
          <div className="shrink-0 px-4 py-3 border-t border-white/10 bg-black/40 flex flex-col items-center gap-2">
            <div className="text-[13px] text-white/50 tabular-nums">
              {page + 1} / {total}
            </div>
            <div className="flex gap-1.5 flex-wrap justify-center max-w-md">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  className={[
                    "h-1.5 rounded-full transition-all",
                    i === page ? "w-6 bg-[#0a84ff]" : "w-1.5 bg-white/25 hover:bg-white/40",
                  ].join(" ")}
                  aria-label={`Саҳифаи ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-[11px] text-white/35">
              Ин танҳо намуна аст · «Кушодани ҳамаи саҳифаҳо»-ро пахш кунед
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default function TeachersPage() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || "tg").slice(0, 2) as "tg" | "ru" | "en"
  const todayKey = useMemo(() => dayKeyFromDate(new Date()), [])
  const today = WEEK.find((d) => d.key === todayKey) ?? WEEK[0]
  const [openBook, setOpenBook] = useState<Book | null>(null)

  const featuredBooks = BOOKS.filter((b) => b.coverUrl)
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
      tg: "Китобро пахш кунед — саҳифаҳо кушода мешаванд",
      ru: "Нажмите на книгу — откроются страницы",
      en: "Tap the book to open its pages",
    }[lang],
    room: { tg: "Кабинет", ru: "Кабинет", en: "Room" }[lang],
    free: { tg: "Дарси нест", ru: "Нет уроков", en: "No lessons" }[lang],
    week: { tg: "Ҳафта", ru: "Неделя", en: "Week" }[lang],
    lessonsToday: { tg: "дарс имрӯз", ru: "уроков сегодня", en: "lessons today" }[lang],
    author: { tg: "Муаллиф", ru: "Автор", en: "Author" }[lang],
    publisher: { tg: "Нашриёт", ru: "Издательство", en: "Publisher" }[lang],
    year: { tg: "Сол", ru: "Год", en: "Year" }[lang],
    openBook: { tg: "Китобро кушоед", ru: "Открыть книгу", en: "Open book" }[lang],
    pagesCount: { tg: "саҳифа", ru: "стр.", en: "pages" }[lang],
    recommended: { tg: "Тавсияшуда", ru: "Рекомендовано", en: "Recommended" }[lang],
    otherBooks: { tg: "Дигар китобҳо", ru: "Другие учебники", en: "Other textbooks" }[lang],
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#0a0a0c]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="mb-10">
          <p className="text-[13px] font-medium tracking-wide text-white/40 uppercase mb-2">Histori.tj</p>
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

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredBooks.map((book) => (
              <button
                key={book.id}
                type="button"
                onClick={() => setOpenBook(book)}
                className="text-left rounded-2xl bg-gradient-to-b from-[#1c1c1e] to-[#121214] border border-white/[0.08] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-white/15 transition group"
              >
                <div className="p-4 flex gap-4 items-start">
                  {book.coverUrl && (
                    <div className="w-[88px] shrink-0 rounded-lg overflow-hidden shadow ring-1 ring-white/10">
                      <img src={book.coverUrl} alt={book.title} className="w-full h-auto block object-cover" loading="lazy" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex items-center rounded-full bg-[#30d158]/15 text-[#30d158] text-[10px] font-semibold px-2 py-0.5 mb-1.5 tracking-wide uppercase">
                      {book.grade}
                    </span>
                    <h3 className="text-[15px] font-semibold text-white leading-snug line-clamp-2">{book.title}</h3>
                    {book.author && <p className="mt-1 text-[12px] text-white/45 line-clamp-1">{book.author}</p>}
                    <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-white/35">
                      {book.year && <span className="rounded bg-white/[0.05] px-1.5 py-0.5">{book.year}</span>}
                      {book.pageCount && <span className="rounded bg-white/[0.05] px-1.5 py-0.5">{book.pageCount} {labels.pagesCount}</span>}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {otherBooks.length > 0 && (
            <div className="mt-6">
              <h3 className="text-[15px] font-medium text-white/50 mb-3 px-1">{labels.otherBooks}</h3>
              <div className="flex flex-wrap gap-2">
                {otherBooks.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setOpenBook(b)}
                    className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-[13px] text-white/70 hover:bg-white/[0.08] hover:text-white transition"
                  >
                    {b.title} · {b.grade}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="mb-8">
          <div className="flex items-end justify-between gap-3 mb-4 px-1">
            <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-white">
              {labels.week}
            </h2>
            <span className="text-[13px] text-white/40">
              {today.lessons.length} {labels.lessonsToday}
            </span>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden">
            {WEEK.map((day) => {
              const isToday = day.key === todayKey
              const dayLabel = DAY_LABELS[day.key]?.[lang] ?? day.key
              return (
                <div
                  key={day.key}
                  className={[
                    "border-b border-white/[0.06] last:border-0",
                    isToday ? "bg-[#0a84ff]/10" : "",
                  ].join(" ")}
                >
                  <div className="px-4 py-2.5 flex items-center gap-2">
                    <span className={["text-[14px] font-semibold", isToday ? "text-[#64b5ff]" : "text-white/80"].join(" ")}>
                      {dayLabel}
                    </span>
                    {isToday && (
                      <span className="text-[11px] font-medium text-[#0a84ff] bg-[#0a84ff]/15 rounded-full px-2 py-0.5">
                        {labels.today}
                      </span>
                    )}
                  </div>
                  {day.lessons.length === 0 ? (
                    <p className="px-4 pb-3 text-[13px] text-white/30">{labels.free}</p>
                  ) : (
                    <div className="px-3 pb-3 space-y-1.5">
                      {day.lessons.map((les) => (
                        <button
                          key={`${day.key}-${les.period}`}
                          type="button"
                          onClick={() => {
                            const b = bookById(les.bookId)
                            if (b) setOpenBook(b)
                          }}
                          className="w-full text-left rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.04] px-3 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 transition"
                        >
                          <span className="text-[12px] font-medium text-white/40 tabular-nums w-16 shrink-0">{les.time}</span>
                          <span className="text-[13px] font-semibold text-white">{les.className}</span>
                          <span className="text-[13px] text-white/55">{les.subject}</span>
                          <span className="text-[12px] text-[#64b5ff] ml-auto">{bookLabel(les.bookId)}</span>
                          {les.room && <span className="text-[11px] text-white/30">{labels.room} {les.room}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </div>

      {openBook && <BookReader book={openBook} onClose={() => setOpenBook(null)} />}
    </div>
  )
}
