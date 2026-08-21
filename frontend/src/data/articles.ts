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
    category: "History",
    period: "Samanid era",
    readTime: "5 min",
    shortDesc: "Culture, statehood, and memory in Tajik history.",
    content:
      "The Samanid state is central to how many Tajiks and Persian-speakers remember a classical age of culture and governance in Transoxiana. Bukhara under the Samanids was a hub of learning. Figures such as Ismail Samani and Rudaki anchor this memory. Understanding the Samanids helps connect language, geography, and political history across Central Asia.",
    sources: ["Frye, Bukhara: The Medieval Achievement"],
    status: "published",
  },
  {
    id: "2",
    slug: "silk-road-cities",
    title: "Silk Road cities of Central Asia",
    titleTj: "Шаҳрҳои Роҳи абришам",
    category: "Geography",
    period: "Medieval",
    readTime: "6 min",
    shortDesc: "Bukhara, Samarkand, and trade networks.",
    content:
      "Cities such as Bukhara and Samarkand stood on routes that linked China, India, Iran, and the Mediterranean. Trade carried goods and ideas; local courts patronized scholars and craftsmen. The urban landscape of these cities still reflects layers of that history.",
    status: "published",
  },
  {
    id: "3",
    slug: "independence-1991",
    title: "Independence in 1991",
    titleTj: "Истиқлолият дар соли 1991",
    category: "Modern",
    period: "Contemporary",
    readTime: "4 min",
    shortDesc: "From Soviet republic to sovereign state.",
    content:
      "Tajikistan declared independence on 9 September 1991 as the Soviet Union dissolved. Building institutions, managing regional conflict, and defining national symbols shaped the first decades of sovereignty. Independence Day remains a central national holiday.",
    status: "published",
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getPublishedArticles() {
  return articles.filter((a) => a.status === "published")
}
