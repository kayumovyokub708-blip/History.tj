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
