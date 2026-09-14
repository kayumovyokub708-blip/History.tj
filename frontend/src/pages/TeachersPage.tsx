import { useMemo, useState, useEffect, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { FAQ_LIST, searchFAQ, type FAQ } from "@/data/faqTeachers"

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
    pdfUrl: "https://kitobkhon.net/storage/books/kitobkhon-net-5.-tarikhi-khalki-tojik-2015.pdf",
    pages: ["https://d.uguu.se/fOGGUBvJ.jpg", "https://n.uguu.se/KMmWlOUy.jpg", "https://n.uguu.se/TPUzzdfy.jpg"],
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
    pdfUrl: "https://kitobkhon.net/storage/books/kitobkhon-net-tarikhi-khalki-tojik-6.pdf",
    pages: ["https://h.uguu.se/KNGGDNvC.jpg", "https://d.uguu.se/RpQcKfne.jpg", "https://h.uguu.se/DQbhVVXY.jpg"],
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
    pdfUrl: "https://kitobkhon.net/storage/books/kitobkhon-net-7.-tarikhi-khalki-tojik-2017.pdf",
    pages: ["https://n.uguu.se/ooMGfwUv.jpg", "https://h.uguu.se/wxjdJKMv.jpg", "https://n.uguu.se/poHhlgQA.jpg"],
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
    pdfUrl: "https://kitobkhon.net/storage/books/kitobkhon-net-tarikhi-khalki-tojik-8.pdf",
    pages: ["https://h.uguu.se/wPWigHvQ.jpg", "https://n.uguu.se/EtxSYeRt.jpg", "https://n.uguu.se/NXJLonJh.jpg"],
  },
  { id: "tj-11", title: "Таърихи Тоҷикистон", grade: "Синфи 11", author: "Вазорати маориф", subject: "Таърих" },
  { id: "world-9", title: "Таърихи ҷаҳон", grade: "Синфи 9", author: "Вазорати маориф", subject: "Таърих" },
  { id: "world-10", title: "Таърихи ҷаҳон", grade: "Синфи 10", author: "Вазорати маориф", subject: "Таърих" },
]

const bookById = (id: string) => BOOKS.find((b) => b.id === id)

type Lesson = { period: number; time: string; className: string; subject: string; bookId: string; room?: string }
type DaySchedule = { key: string; lessons: Lesson[] }

const WEEK: DaySchedule[] = [
  { key: "mon", lessons: [
    { period: 1, time: "08:00–08:45", className: "5-А", subject: "Таърих", bookId: "tj-people-5", room: "312" },
    { period: 3, time: "10:00–10:45", className: "9-Б", subject: "Таърих", bookId: "world-9", room: "312" },
    { period: 5, time: "12:00–12:45", className: "11-А", subject: "Таърих", bookId: "tj-11", room: "305" },
  ]},
  { key: "tue", lessons: [
    { period: 2, time: "08:55–09:40", className: "8-А", subject: "Таърих", bookId: "tj-people-8", room: "312" },
    { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", bookId: "world-10", room: "312" },
    { period: 6, time: "12:55–13:40", className: "6-А", subject: "Таърих", bookId: "tj-people-6", room: "308" },
  ]},
  { key: "wed", lessons: [
    { period: 1, time: "08:00–08:45", className: "9-А", subject: "Таърих", bookId: "world-9", room: "312" },
    { period: 3, time: "10:00–10:45", className: "11-Б", subject: "Таърих", bookId: "tj-11", room: "305" },
    { period: 5, time: "12:00–12:45", className: "8-Б", subject: "Таърих", bookId: "tj-people-8", room: "312" },
  ]},
  { key: "thu", lessons: [
    { period: 2, time: "08:55–09:40", className: "10-А", subject: "Таърих", bookId: "world-10", room: "312" },
    { period: 4, time: "10:55–11:40", className: "5-А", subject: "Таърих", bookId: "tj-people-5", room: "312" },
    { period: 6, time: "12:55–13:40", className: "9-Б", subject: "Таърих", bookId: "world-9", room: "308" },
  ]},
  { key: "fri", lessons: [
    { period: 1, time: "08:00–08:45", className: "11-А", subject: "Таърих", bookId: "tj-11", room: "305" },
    { period: 3, time: "10:00–10:45", className: "8-А", subject: "Таърих", bookId: "tj-people-8", room: "312" },
    { period: 4, time: "10:55–11:40", className: "10-Б", subject: "Таърих", bookId: "world-10", room: "312" },
  ]},
  { key: "sat", lessons: [
    { period: 2, time: "08:55–09:40", className: "6-Б", subject: "Таърих", bookId: "tj-people-6", room: "312" },
    { period: 3, time: "10:00–10:45", className: "9-А", subject: "Таърих", bookId: "world-9", room: "308" },
  ]},
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

function BookReader({ book, onClose }: { book: Book; onClose: () => void }) {
  const pages = book.pages?.length ? book.pages : book.coverUrl ? [book.coverUrl] : []
  const [page, setPage] = useState(0)
  const [mode, setMode] = useState<"full" | "preview">(book.pdfUrl ? "full" : "preview")
  const total = pages.length
  const go = useCallback((dir: -1 | 1) => setPage((p) => Math.min(total - 1, Math.max(0, p + dir))), [total])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (mode === "preview") {
        if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1) }
        if (e.key === "ArrowLeft") go(-1)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go, onClose, mode])
  const gview = book.pdfUrl ? `https://docs.google.com/viewer?url=${encodeURIComponent(book.pdfUrl)}&embedded=true` : ""
  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0c0c0e]">
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 border-b border-white/10 bg-black/50 backdrop-blur-md shrink-0">
        <button type="button" onClick={onClose} className="text-[14px] text-white/70 hover:text-white px-2 py-1 rounded-lg hover:bg-white/10">← Пӯшидан</button>
        <div className="text-center min-w-0 flex-1 px-1">
          <div className="text-[13px] sm:text-[14px] font-semibold text-white truncate">{book.title}</div>
          <div className="text-[11px] text-white/40 truncate">{book.grade}{book.author ? ` · ${book.author}` : ""}{book.pageCount ? ` · ${book.pageCount} саҳифа` : ""}</div>
        </div>
        {book.pdfUrl && <a href={book.pdfUrl} target="_blank" rel="noreferrer" className="text-[12px] font-semibold text-white bg-[#0a84ff] hover:bg-[#0066d6] px-3 py-1.5 rounded-lg">PDF</a>}
      </div>
      {book.pdfUrl && (
        <div className="shrink-0 px-3 sm:px-4 py-3 bg-gradient-to-r from-[#0a84ff]/20 to-[#30d158]/15 border-b border-white/10">
          <div className="flex flex-wrap gap-2 justify-center">
            <a href={book.pdfUrl} target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-white bg-[#0a84ff] hover:bg-[#0066d6] px-5 py-2 rounded-full">Кушодани ҳамаи саҳифаҳо</a>
            <button type="button" onClick={() => setMode("full")} className={`text-[13px] px-3 py-2 rounded-full ${mode === "full" ? "bg-white/20 text-white" : "bg-white/10 text-white/70"}`}>Дар дохил</button>
            <button type="button" onClick={() => setMode("preview")} className={`text-[13px] px-3 py-2 rounded-full ${mode === "preview" ? "bg-white/20 text-white" : "bg-white/10 text-white/70"}`}>Намуна</button>
          </div>
        </div>
      )}
      {mode === "full" && gview ? (
        <div className="flex-1 min-h-0 relative bg-[#525659]"><iframe title={book.title} src={gview} className="absolute inset-0 w-full h-full border-0" allow="fullscreen" /></div>
      ) : (
        <>
          <div className="flex-1 relative flex items-center justify-center overflow-hidden min-h-0">
            <button type="button" onClick={() => go(-1)} disabled={page === 0} className="absolute left-2 z-10 w-10 h-10 rounded-full bg-white/10 text-white text-xl disabled:opacity-20">‹</button>
            <div className="h-full w-full max-w-3xl mx-auto px-12 py-4 flex items-center justify-center">
              {total > 0 ? <img key={pages[page]} src={pages[page]} alt={book.title} className="max-h-full max-w-full object-contain rounded-md bg-white" /> : <p className="text-white/40">Саҳифа нест</p>}
            </div>
            <button type="button" onClick={() => go(1)} disabled={page >= total - 1} className="absolute right-2 z-10 w-10 h-10 rounded-full bg-white/10 text-white text-xl disabled:opacity-20">›</button>
          </div>
          <div className="shrink-0 px-4 py-3 border-t border-white/10 text-center text-[13px] text-white/50">{page + 1} / {total}</div>
        </>
      )}
    </div>
  )
}

export default function TeachersPage() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || "tg").slice(0, 2) as "tg" | "ru" | "en"
  const todayKey = useMemo(() => dayKeyFromDate(new Date()), [])
  const [openBook, setOpenBook] = useState<Book | null>(null)
  const [askQuery, setAskQuery] = useState("")
  const [askResults, setAskResults] = useState<FAQ[]>([])
  const [asked, setAsked] = useState(false)
  const featuredBooks = BOOKS.filter((b) => b.coverUrl)
  const otherBooks = BOOKS.filter((b) => !b.coverUrl)
  const L = {
    title: { tg: "Омӯзгорон", ru: "Преподаватели", en: "Teachers" }[lang],
    subtitle: { tg: "Ҷадвали ҳафта · синф, соат ва китоб", ru: "Расписание на неделю", en: "Weekly schedule" }[lang],
    today: { tg: "Имрӯз", ru: "Сегодня", en: "Today" }[lang],
    books: { tg: "Китобҳо", ru: "Учебники", en: "Textbooks" }[lang],
    booksHint: { tg: "Китобро пахш кунед — саҳифаҳо кушода мешаванд", ru: "Нажмите на книгу", en: "Tap the book" }[lang],
    room: { tg: "Кабинет", ru: "Кабинет", en: "Room" }[lang],
    free: { tg: "Дарси нест", ru: "Нет уроков", en: "No lessons" }[lang],
    week: { tg: "Ҳафта", ru: "Неделя", en: "Week" }[lang],
    otherBooks: { tg: "Дигар китобҳо", ru: "Другие учебники", en: "Other textbooks" }[lang],
    askTitle: { tg: "Савол пурсед", ru: "Задайте вопрос", en: "Ask a question" }[lang],
    askHint: { tg: "Дар бораи ҷадвал, китобҳо ё таърих нависед — ҷавоб мегиред", ru: "Спросите про расписание или историю", en: "Ask about schedule or history" }[lang],
    askPlaceholder: { tg: "Масалан: Китоби синфи 5 куҷост?", ru: "Например: Где учебник 5 класса?", en: "e.g. Where is grade 5 textbook?" }[lang],
    askBtn: { tg: "Ҷустуҷӯ", ru: "Найти", en: "Search" }[lang],
    askEmpty: { tg: "Ҷавоб ёфт нашуд. Саволро дигар нависед.", ru: "Ответ не найден.", en: "No answer found." }[lang],
    askSuggestions: { tg: "Саволҳои маъмул", ru: "Частые вопросы", en: "Common questions" }[lang],
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#0a0a0c]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="mb-10">
          <p className="text-[13px] font-medium tracking-wide text-white/40 uppercase mb-2">Histori.tj</p>
          <h1 className="text-[34px] sm:text-[40px] font-semibold tracking-tight text-white">{L.title}</h1>
          <p className="mt-2 text-[17px] text-white/55">{L.subtitle}</p>
        </header>

        <section className="mb-10">
          <div className="flex items-end justify-between gap-3 mb-5 px-1">
            <div>
              <h2 className="text-[22px] font-semibold text-white">📖 {L.books}</h2>
              <p className="mt-1 text-[13px] text-white/40">{L.booksHint}</p>
            </div>
            <span className="text-[13px] text-white/30">{BOOKS.length}</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredBooks.map((book) => (
              <button key={book.id} type="button" onClick={() => setOpenBook(book)}
                className="text-left rounded-2xl bg-gradient-to-b from-[#1c1c1e] to-[#121214] border border-white/[0.08] overflow-hidden hover:border-white/15 transition">
                <div className="p-4 flex gap-4 items-start">
                  {book.coverUrl && (
                    <div className="w-[88px] shrink-0 rounded-lg overflow-hidden shadow ring-1 ring-white/10">
                      <img src={book.coverUrl} alt={book.title} className="w-full h-auto block" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold text-white">{book.title}</div>
                    <div className="text-[13px] text-white/50 mt-0.5">{book.grade}</div>
                    {book.author && <div className="text-[12px] text-white/35 mt-1">{book.author}</div>}
                    {book.pageCount && <div className="text-[12px] text-[#64b5ff] mt-1">{book.pageCount} саҳифа</div>}
                  </div>
                </div>
              </button>
            ))}
          </div>
          {otherBooks.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-[13px] text-white/40 px-1">{L.otherBooks}</p>
              {otherBooks.map((b) => (
                <button key={b.id} type="button" onClick={() => setOpenBook(b)}
                  className="w-full text-left rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 hover:bg-white/[0.06]">
                  <span className="text-white font-medium">{b.title}</span>
                  <span className="text-white/40 text-sm ml-2">{b.grade}</span>
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="mb-4">
          <h2 className="text-[22px] font-semibold text-white mb-4 px-1">📅 {L.week}</h2>
          <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-[#121214]">
            {WEEK.map((day) => {
              const isToday = day.key === todayKey
              const dayLabel = DAY_LABELS[day.key]?.[lang] ?? day.key
              return (
                <div key={day.key} className={`border-b border-white/[0.06] last:border-0 ${isToday ? "bg-[#0a84ff]/10" : ""}`}>
                  <div className="px-4 py-2.5 flex items-center gap-2">
                    <span className={`text-[14px] font-semibold ${isToday ? "text-[#64b5ff]" : "text-white/80"}`}>{dayLabel}</span>
                    {isToday && <span className="text-[11px] font-medium text-[#0a84ff] bg-[#0a84ff]/15 rounded-full px-2 py-0.5">{L.today}</span>}
                  </div>
                  {day.lessons.length === 0 ? (
                    <p className="px-4 pb-3 text-[13px] text-white/30">{L.free}</p>
                  ) : (
                    <div className="px-3 pb-3 space-y-1.5">
                      {day.lessons.map((les) => (
                        <button key={`${day.key}-${les.period}`} type="button"
                          onClick={() => { const b = bookById(les.bookId); if (b) setOpenBook(b) }}
                          className="w-full text-left rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.04] px-3 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-[12px] text-white/40 tabular-nums w-16">{les.time}</span>
                          <span className="text-[13px] font-semibold text-white">{les.className}</span>
                          <span className="text-[13px] text-white/55">{les.subject}</span>
                          <span className="text-[12px] text-[#64b5ff] ml-auto">{bookLabel(les.bookId)}</span>
                          {les.room && <span className="text-[11px] text-white/30">{L.room} {les.room}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-12 mb-4">
          <div className="mb-5 px-1">
            <h2 className="text-[22px] font-semibold text-white">💬 {L.askTitle}</h2>
            <p className="mt-1 text-[13px] text-white/40">{L.askHint}</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setAsked(true); setAskResults(searchFAQ(askQuery.trim())) }}
            className="rounded-2xl bg-gradient-to-b from-[#1c1c1e] to-[#121214] border border-white/[0.08] p-4 sm:p-5"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="search" value={askQuery}
                onChange={(e) => { setAskQuery(e.target.value); if (!e.target.value.trim()) { setAsked(false); setAskResults([]) } }}
                placeholder={L.askPlaceholder}
                className="flex-1 min-w-0 rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none focus:border-[#0a84ff]/60"
              />
              <button type="submit" className="shrink-0 rounded-xl bg-[#0a84ff] hover:bg-[#0066d6] text-white font-semibold text-[14px] px-5 py-3">{L.askBtn}</button>
            </div>
            {!asked && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[12px] text-white/30 w-full sm:w-auto mb-1">{L.askSuggestions}:</span>
                {FAQ_LIST.slice(0, 4).map((f) => (
                  <button key={f.q} type="button" onClick={() => { setAskQuery(f.q); setAsked(true); setAskResults([f]) }}
                    className="text-[12px] text-left rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] px-3 py-1.5 text-white/70">{f.q}</button>
                ))}
              </div>
            )}
            {asked && (
              <div className="mt-5 space-y-3">
                {askResults.length === 0 ? (
                  <p className="text-[14px] text-white/45">{L.askEmpty}</p>
                ) : askResults.map((r) => (
                  <div key={r.q} className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
                    <div className="text-[13px] font-semibold text-[#64b5ff] mb-1.5">{r.q}</div>
                    <p className="text-[14px] text-white/80 leading-relaxed">{r.a}</p>
                  </div>
                ))}
              </div>
            )}
          </form>
        </section>
      </div>
      {openBook && <BookReader book={openBook} onClose={() => setOpenBook(null)} />}
    </div>
  )
}
