export interface Place {
  id: string
  slug: string
  name: string
  nameTj: string
  nameRu?: string
  location?: string
  country?: string
  period?: string
  coordinates?: string
  shortDesc: string
  shortDescRu?: string
  shortDescEn?: string
  description: string
  descriptionRu?: string
  descriptionEn?: string
  sources?: string[]
  status: "published" | "draft"
}

export const places: Place[] = [
  {
    id: "1",
    slug: "bukhara",
    name: "Bukhara",
    nameTj: "Бухоро",
    nameRu: "Бухара",
    location: "Ӯзбекистон",
    country: "Ӯзбекистон",
    period: "Пойтахти Сомониён",
    coordinates: "39.7747, 64.4286",
    shortDesc: "Шаҳри таърихӣ ва пойтахти давлати Сомониён.",
    shortDescRu: "Исторический город и столица государства Саманидов.",
    shortDescEn: "Historic city and capital of the Samanid state.",
    description:
      "Бухоро пойтахти империяи Сомониён ва яке аз марказҳои бузурги илм ва фарҳанг дар ҷаҳони исломии асри миёна буд. То ҳанӯз яке аз муҳимтарин маконҳои мероси Осиёи Миёна боқӣ мондааст.",
    descriptionRu:
      "Бухара была столицей империи Саманидов и одним из крупнейших центров науки и культуры средневекового исламского мира. До сих пор остаётся одним из важнейших мест наследия Средней Азии.",
    descriptionEn:
      "Bukhara was the capital of the Samanid empire and one of the great centres of learning and culture in the medieval Islamic world. It remains one of the most important heritage sites of Central Asia.",
    sources: ["Наршахӣ, Таърихи Бухоро"],
    status: "published",
  },
  {
    id: "2",
    slug: "samarkand",
    name: "Samarkand",
    nameTj: "Самарқанд",
    nameRu: "Самарканд",
    location: "Ӯзбекистон",
    country: "Ӯзбекистон",
    period: "Пойтахти Темуриён",
    coordinates: "39.6270, 66.9750",
    shortDesc: "Шаҳри қадимӣ дар Роҳи абришам; пойтахт дар замони Темур.",
    shortDescRu: "Древний город на Шёлковом пути; столица при Тимуре.",
    shortDescEn: "Ancient city on the Silk Road; capital under Timur.",
    description:
      "Самарқанд шаҳри муҳими Роҳи абришам ва баъдтар пойтахти империяи Темур буд. Ёдгорҳои он, аз ҷумла Регистон, рамзи шукуфоии фарҳанги Темуриён ҳисоб мешаванд.",
    descriptionRu:
      "Самарканд был важным городом Шёлкового пути, а позже столицей империи Тимура. Его памятники, в том числе Регистан, символизируют расцвет культуры Тимуридов.",
    descriptionEn:
      "Samarkand was a major Silk Road city and later the capital of Timur’s empire. Its monuments, including the Registan, symbolise the flowering of Timurid culture.",
    sources: ["Manz, The Rise and Rule of Tamerlane"],
    status: "published",
  },
  {
    id: "3",
    slug: "khujand",
    name: "Khujand",
    nameTj: "Хуҷанд",
    nameRu: "Худжанд",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Аз қадим то имрӯз",
    coordinates: "40.2822, 69.6220",
    shortDesc: "Яке аз қадимтарин шаҳрҳои Осиёи Миёна, дар канори Сирдарё.",
    shortDescRu: "Один из древнейших городов Средней Азии, на берегу Сырдарьи.",
    shortDescEn: "One of the oldest cities of Central Asia, on the Syr Darya.",
    description:
      "Хуҷанд (дар қадим Александрияи Аҳдарӣн ва шаклҳои баъдӣ) аз ҷумлаи қадимтарин шаҳрҳои муттасили Осиёи Миёна аст ва маркази муҳими шимоли Тоҷикистон мебошад.",
    descriptionRu:
      "Худжанд (в древности Александрия Эсхата и поздние названия) — один из древнейших непрерывно существующих городов Средней Азии и важный центр северного Таджикистана.",
    descriptionEn:
      "Khujand (ancient Alexandria Eschate and later names) is among the oldest continuously inhabited cities of Central Asia and a major centre of northern Tajikistan.",
    status: "published",
  },
  {
    id: "4",
    slug: "panjakent",
    name: "Panjakent",
    nameTj: "Панҷакент",
    nameRu: "Пенджикент",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Суғдӣ",
    shortDesc: "Макони шаҳри қадими суғдӣ бо нақшҳои маъруф.",
    shortDescRu: "Место древнего согдийского города со знаменитыми росписями.",
    shortDescEn: "Site of an ancient Sogdian city with famous wall paintings.",
    description:
      "Панҷакенти қадим шаҳри суғдӣ буд, ки ба нақшҳои деворӣ ва фарҳанги шаҳрӣ маъруф аст. Пеш аз фатҳҳои араб ин ҷо маркази ҳаёт буд. Боқияҳои бостоншиносӣ сарчашмаи муҳими таърихи суғдӣ ҳисоб мераванд.",
    descriptionRu:
      "Древний Пенджикент был согдийским городом, известным стенными росписями и городской культурой. До арабских завоеваний это был оживлённый центр. Археологические остатки — важный источник по истории Согда.",
    descriptionEn:
      "Ancient Panjakent was a Sogdian city known for wall paintings and urban culture. Before the Arab conquests it was a lively centre. The archaeological remains are a major source for Sogdian history.",
    status: "published",
  },
]

export function getPlaceBySlug(slug: string) {
  return places.find((p) => p.slug === slug)
}

export function getPublishedPlaces() {
  return places.filter((p) => p.status === "published")
}
