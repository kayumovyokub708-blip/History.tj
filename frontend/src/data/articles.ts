export interface Article {
  id: string
  slug: string
  title: string
  titleTj: string
  category?: string
  period?: string
  readTime?: string
  shortDesc: string
  content: string
  sources?: string[]
  status: "published" | "draft"
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "why-samanids-matter",
    title: "Why the Samanids matter",
    titleTj: "Чаро Сомониён муҳим ҳастанд",
    category: "Таърих",
    period: "Давраи Сомониён",
    readTime: "5 дақ",
    shortDesc: "Фарҳанг, давлатдорӣ у ҳофиза дар таърихи тоҷик.",
    content:
      "Давлати Сомониён барои бисёри тоҷикон у форсизабонон ҳамчун асри тиллои фарҳанг у идора дар Мовароуннаҳр ёд мешавад.\n\nБухоро дар замони Сомониён маркази илм буд. Шахсиятҳое ҳамчун Исмоили Сомонӣ у Рӯдакӣ ин ҳофизаро мустаҳкам мекунанд.\n\nФаҳмидани Сомониён ба фаҳмидани забон, ҷуғрофия у таърихи сиёсӣ дар Осиёи Миёна кумак мекунад.",
    sources: ["Frye, Bukhara: The Medieval Achievement"],
    status: "published",
  },
  {
    id: "2",
    slug: "silk-road-cities",
    title: "Silk Road cities of Central Asia",
    titleTj: "Шаҳрҳои Роҳи абришам дар Осиёи Миёна",
    category: "Ҷуғрофия",
    period: "Асри миёна",
    readTime: "6 дақ",
    shortDesc: "Бухоро, Самарқанд у шабакаҳои тиҷорат.",
    content:
      "Шаҳрҳое ҳамчун Бухоро у Самарқанд дар роҳҳое қарор доштанд, ки Чин, Ҳиндустон, Эрон у Баҳри Медитеранаро мепайвастанд.\n\nТиҷорат на танҳо мол, балки андеша у фарҳанг ҳам меовард. Дарборҳо донишмандон у ҳунармандонро ҳимоят мекарданд.\n\nМанзараи имрӯзаи ин шаҳрҳо ҳанӯз қабақҳои он таърихро нишон медиҳад.",
    status: "published",
  },
  {
    id: "3",
    slug: "independence-1991",
    title: "Independence in 1991",
    titleTj: "Истиқлолият дар соли 1991",
    category: "Муосир",
    period: "Муосир",
    readTime: "4 дақ",
    shortDesc: "Аз ҷумҳурии шӯравӣ то давлати соҳиб.",
    content:
      "Тоҷикистон 9 сентябри 1991, ҳангоми фурупошии Иттиҳоди Шӯравӣ, истиқлолият эълон кард.\n\nСохтани ниҳодҳо, идораи низоъҳои минтақавӣ у муайян кардани рамзҳои миллӣ даҳоҳои аввали соҳибиятро шакл доданд.\n\nРӯзи Истиқлол то ҳанӯз аз асосӣтарин идҳои миллӣ мебошад.",
    status: "published",
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getPublishedArticles() {
  return articles.filter((a) => a.status === "published")
}
