import { getPublishedPeople } from "@/data/people"
import { getPublishedEvents } from "@/data/events"
import { getPublishedPlaces } from "@/data/places"
import { getPublishedPeriods } from "@/data/periods"
import { getPublishedDynasties } from "@/data/dynasties"
import { getPublishedBattles } from "@/data/battles"
import { getPublishedArticles } from "@/data/articles"
import { quizzes } from "@/data/quizzes"

export interface SearchHit {
  type: string
  title: string
  subtitle?: string
  path: string
}

export function searchAll(query: string): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const hits: SearchHit[] = []

  for (const p of getPublishedPeople()) {
    const blob = `${p.name} ${p.nameTj} ${p.shortBio} ${p.dynasty || ""}`.toLowerCase()
    if (blob.includes(q)) {
      hits.push({
        type: "Person",
        title: p.nameTj,
        subtitle: p.name,
        path: `/encyclopedia/people/${p.slug}`,
      })
    }
  }

  for (const e of getPublishedEvents()) {
    const blob = `${e.title} ${e.titleTj} ${e.shortDesc}`.toLowerCase()
    if (blob.includes(q)) {
      hits.push({
        type: "Event",
        title: e.titleTj,
        subtitle: e.dateStart,
        path: `/encyclopedia/events/${e.slug}`,
      })
    }
  }

  for (const p of getPublishedPlaces()) {
    const blob = `${p.name} ${p.nameTj} ${p.shortDesc}`.toLowerCase()
    if (blob.includes(q)) {
      hits.push({
        type: "Place",
        title: p.nameTj,
        subtitle: p.location,
        path: `/encyclopedia/places/${p.slug}`,
      })
    }
  }

  for (const p of getPublishedPeriods()) {
    const blob = `${p.name} ${p.nameTj} ${p.shortDesc}`.toLowerCase()
    if (blob.includes(q)) {
      hits.push({
        type: "Period",
        title: p.nameTj,
        subtitle: `${p.yearStart}–${p.yearEnd}`,
        path: `/encyclopedia/periods/${p.slug}`,
      })
    }
  }

  for (const d of getPublishedDynasties()) {
    const blob = `${d.name} ${d.nameTj} ${d.shortDesc}`.toLowerCase()
    if (blob.includes(q)) {
      hits.push({
        type: "Dynasty",
        title: d.nameTj,
        subtitle: d.name,
        path: `/encyclopedia/dynasties/${d.slug}`,
      })
    }
  }

  for (const b of getPublishedBattles()) {
    const blob = `${b.name} ${b.nameTj} ${b.shortDesc}`.toLowerCase()
    if (blob.includes(q)) {
      hits.push({
        type: "Battle",
        title: b.nameTj,
        subtitle: b.date,
        path: `/encyclopedia/battles/${b.slug}`,
      })
    }
  }

  for (const a of getPublishedArticles()) {
    const blob = `${a.title} ${a.titleTj} ${a.shortDesc} ${a.content}`.toLowerCase()
    if (blob.includes(q)) {
      hits.push({
        type: "Article",
        title: a.titleTj,
        subtitle: a.category,
        path: `/articles/${a.slug}`,
      })
    }
  }

  for (const quiz of quizzes) {
    if (quiz.title.toLowerCase().includes(q) || quiz.description.toLowerCase().includes(q)) {
      hits.push({
        type: "Quiz",
        title: quiz.title,
        subtitle: `${quiz.questions.length} questions`,
        path: `/quiz/${quiz.slug}`,
      })
    }
  }

  return hits
}
