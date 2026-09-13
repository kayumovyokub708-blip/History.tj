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
      "https://tmpfiles.org/dl/1789318377.53280738087c4fc8/wQwbPXIxrJ8Q/tarikh-khalqi-tojik-sinfi-5.pdf",
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
      "https://tmpfiles.org/dl/1789318380.59f70a66c0d71c6a/wlwePsIyrhpa/tarikh-khalqi-tojik-sinfi-6.pdf",
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
      "https://tmpfiles.org/dl/1789318384.cbc04a5a9b8b3efb/wcwDPJIW2YeA/tarikh-khalqi-tojik-sinfi-7.pdf",
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
      "https://tmpfiles.org/dl/1789318387.fc95c53dbcbd5a6c/wKwMPMI52OgG/tarikh-khalqi-tojik-sinfi-8.pdf",
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

/** Китоби дарсӣ — намуна + PDF пурра (равзанаи нав) */
function BookReader({
  book,
  onClose,
}: {
  book: Book
  onClose: () => void
}) {
  const pages = book.pages?.length ? book.pages : book.coverUrl ? [book.coverUrl] : []
  const [page, setPage] = useState(0)
  const [mode, setMode] = useState<"full" | "preview">("preview")
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
              PDF пурра
            </a>
          )}
        </div>
      </div>

      {book.pdfUrl && (
        <div className="shrink-0 px-4 py-2.5 bg-[#0a84ff]/15 border-b border-[#0a84ff]/25 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p className="text-[13px] text-white/80 text-center">
            Китоби пурра ({book.pageCount ?? "?"} саҳифа) — тугмаи «PDF пурра»-ро пахш кунед
          </p>
          <div className="flex gap-2">
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-semibold text-white bg-[#0a84ff] hover:bg-[#0066d6] px-4 py-1.5 rounded-full"
            >
              Кушодан / зеркашӣ
            </a>
            <button
              type="button"
              onClick={() => setMode(mode === "full" ? "preview" : "full")}
              className="text-[13px] text-white/80 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full"
            >
              {mode === "full" ? "Намуна" : "Дар дохил бинед"}
            </button>
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

          {featuredBooks.map((book) => (
            <button
              key={book.id}
              type="button"
              onClick={() => setOpenBook(book)}
              className="w-full text-left mb-4 rounded-3xl bg-gradient-to-b from-[#1c1c1e] to-[#121214] border border-white/[0.08] overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:border-white/15 transition group"
            >
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-stretch">
                <div className="shrink-0 relative">
                  <div className="w-[140px] sm:w-[160px] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-transform group-hover:scale-[1.03]">
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-auto block object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className="inline-flex self-start items-center rounded-full bg-[#30d158]/15 text-[#30d158] text-[11px] font-semibold px-2.5 py-0.5 mb-2 tracking-wide uppercase">
                    {labels.recommended}
                  </span>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-tight leading-snug">
                    {book.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-white/55">
                    {book.grade}
                    {book.author ? ` · ${book.author}` : ""}
                  </p>
                  {book.description && (
                    <p className="mt-3 text-[13px] text-white/40 leading-relaxed line-clamp-2">
                      {book.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-white/35">
                    {book.publisher && (
                      <span className="rounded-lg bg-white/[0.05] px-2.5 py-1">
                        {labels.publisher}: {book.publisher}
                      </span>
                    )}
                    {book.year && (
                      <span className="rounded-lg bg-white/[0.05] px-2.5 py-1">
                        {labels.year}: {book.year}
                      </span>
                    )}
                    {(book.pageCount || book.pages) && (
                      <span className="rounded-lg bg-white/[0.05] px-2.5 py-1">
                        {book.pageCount ?? book.pages!.length} {labels.pagesCount}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 inline-flex self-start items-center gap-2 text-[14px] font-medium text-[#64b5ff] group-hover:text-[#8cc8ff]">
                    <span>{labels.openBook}</span>
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </button>
          ))}

          {otherBooks.length > 0 && (
            <>
              <p className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-3 px-1">
                {labels.otherBooks}
              </p>
              <div className="rounded-3xl bg-[#161618] border border-white/[0.06] overflow-hidden">
                <ul className="divide-y divide-white/[0.05]">
                  {otherBooks.map((b) => (
                    <li key={b.id} className="px-4 sm:px-5 py-4 flex items-start gap-4">
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
                    className="mx-1 rounded-2xl bg-white/[0.045] px-4 py-3.5 flex gap-4 items-start"
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
                      <div className="mt-1 text-[13px] text-white/50">
                        📖 {labels.book}: {bookLabel(lesson.bookId)}
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
              return (
                <div
                  key={day.key}
                  className={[
                    "rounded-2xl border overflow-hidden",
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
                        {DAY_LABELS[day.key][lang]}
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
                            <div className="text-[10px] text-white/30 mt-0.5">{lesson.time.split("–")[0]}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-x-2">
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

        <p className="mt-10 text-center text-[12px] text-white/25">Histori.tj · {labels.title}</p>
      </div>

      {openBook && <BookReader book={openBook} onClose={() => setOpenBook(null)} />}
    </div>
  )
}
