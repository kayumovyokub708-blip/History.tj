export type LocalizedText = {
  tg: string
  ru: string
  en: string
}

export interface Article {
  id: string
  slug: string
  title: LocalizedText
  category?: LocalizedText
  period?: string
  readTime?: LocalizedText
  shortDesc: LocalizedText
  content: LocalizedText
  sources?: string[]
  status: "published" | "draft"
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "why-samanids-matter",
    title: {
      tg: "Чаро Сомониён муҳим ҳастанд",
      ru: "Почему Саманиды важны",
      en: "Why the Samanids matter",
    },
    category: {
      tg: "Таърих",
      ru: "История",
      en: "History",
    },
    period: "819–999",
    readTime: {
      tg: "5 дақ",
      ru: "5 мин",
      en: "5 min",
    },
    shortDesc: {
      tg: "Фарҳанг, давлатдорӣ ва ҳофиза дар таърихи тоҷик.",
      ru: "Культура, государственность и память в истории таджиков.",
      en: "Culture, statehood and memory in Tajik history.",
    },
    content: {
      tg: "Давлати Сомониён барои бисёри тоҷикон ва форсизабонон ҳамчун асри тиллои фарҳанг ва идора дар Мовароуннаҳр ёд мешавад.\n\nБухоро дар замони Сомониён маркази илм буд. Шахсиятҳое ҳамчун Исмоили Сомонӣ ва Рӯдакӣ ин ҳофизаро мустаҳкам мекунанд.\n\nФаҳмидани Сомониён ба фаҳмидани забон, ҷуғрофия ва таърихи сиёсӣ дар Осиёи Миёна кумак мекунад.",
      ru: "Государство Саманидов для многих таджиков и персоязычных народов вспоминается как золотой век культуры и управления в Мавераннахре.\n\nБухара во времена Саманидов была центром науки. Такие личности, как Исмаил Самани и Рудаки, укрепляют эту память.\n\nПонимание Саманидов помогает понять язык, географию и политическую историю Средней Азии.",
      en: "The Samanid state is remembered by many Tajiks and Persian-speakers as a golden age of culture and governance in Transoxiana.\n\nBukhara was a centre of learning under the Samanids. Figures such as Ismail Samani and Rudaki reinforce that memory.\n\nUnderstanding the Samanids helps us understand language, geography and political history in Central Asia.",
    },
    sources: ["Frye, Bukhara: The Medieval Achievement"],
    status: "published",
  },
  {
    id: "2",
    slug: "silk-road-cities",
    title: {
      tg: "Шаҳрҳои Роҳи абришам дар Осиёи Миёна",
      ru: "Города Шёлкового пути в Средней Азии",
      en: "Silk Road cities of Central Asia",
    },
    category: {
      tg: "Ҷуғрофия",
      ru: "География",
      en: "Geography",
    },
    period: "Medieval",
    readTime: {
      tg: "6 дақ",
      ru: "6 мин",
      en: "6 min",
    },
    shortDesc: {
      tg: "Бухоро, Самарқанд ва шабакаҳои тиҷорат.",
      ru: "Бухара, Самарканд и торговые сети.",
      en: "Bukhara, Samarkand and trade networks.",
    },
    content: {
      tg: "Шаҳрҳое ҳамчун Бухоро ва Самарқанд дар роҳҳое қарор доштанд, ки Чин, Ҳиндустон, Эрон ва Баҳри Медитеранаро мепайвастанд.\n\nТиҷорат на танҳо мол, балки андеша ва фарҳанг ҳам меовард. Дарборҳо донишмандон ва ҳунармандонро ҳимоят мекарданд.\n\nМанзараи имрӯзаи ин шаҳрҳо ҳанӯз қабатҳои он таърихро нишон медиҳад.",
      ru: "Города вроде Бухары и Самарканда стояли на путях, связывавших Китай, Индию, Иран и Средиземноморье.\n\nТорговля приносила не только товары, но и идеи и культуру. Дворы поддерживали учёных и ремесленников.\n\nСегодняшний облик этих городов всё ещё показывает слои той истории.",
      en: "Cities such as Bukhara and Samarkand sat on routes linking China, India, Iran and the Mediterranean.\n\nTrade brought not only goods but ideas and culture. Courts supported scholars and artisans.\n\nThe modern face of these cities still shows layers of that history.",
    },
    status: "published",
  },
  {
    id: "3",
    slug: "independence-1991",
    title: {
      tg: "Истиқлолият дар соли 1991",
      ru: "Независимость в 1991 году",
      en: "Independence in 1991",
    },
    category: {
      tg: "Муосир",
      ru: "Современность",
      en: "Contemporary",
    },
    period: "1991—",
    readTime: {
      tg: "4 дақ",
      ru: "4 мин",
      en: "4 min",
    },
    shortDesc: {
      tg: "Аз ҷумҳурии шӯравӣ то давлати соҳиб.",
      ru: "От советской республики к суверенному государству.",
      en: "From a Soviet republic to a sovereign state.",
    },
    content: {
      tg: "Тоҷикистон 9 сентябри 1991, ҳангоми фурӯпошии Иттиҳоди Шӯравӣ, истиқлолият эълон кард.\n\nСохтани ниҳодҳо, идораи низоъҳои минтақавӣ ва муайян кардани рамзҳои миллӣ даҳсолаҳои аввали соҳибиятро шакл доданд.\n\nРӯзи Истиқлол то ҳанӯз аз асосӣтарин идҳои миллӣ мебошад.",
      ru: "Таджикистан провозгласил независимость 9 сентября 1991 года, во время распада Советского Союза.\n\nСоздание институтов, управление региональными конфликтами и определение национальных символов сформировали первые десятилетия суверенитета.\n\nДень Независимости по-прежнему один из главных национальных праздников.",
      en: "Tajikistan declared independence on 9 September 1991, during the collapse of the Soviet Union.\n\nBuilding institutions, managing regional conflicts and defining national symbols shaped the first decades of sovereignty.\n\nIndependence Day remains one of the main national holidays.",
    },
    status: "published",
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getPublishedArticles() {
  return articles.filter((a) => a.status === "published")
}
