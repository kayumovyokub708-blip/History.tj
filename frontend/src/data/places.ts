export interface Place {
  id: string
  slug: string
  name: string
  nameTj: string
  location?: string
  country?: string
  period?: string
  coordinates?: string
  shortDesc: string
  description: string
  sources?: string[]
  status: "published" | "draft"
}

export const places: Place[] = [
  {
    id: "1",
    slug: "bukhara",
    name: "Bukhara",
    nameTj: "Бухоро",
    location: "Ҳӯзикистон",
    country: "Ҳӯзикистон",
    period: "Пойтахти Сомониён",
    coordinates: "39.7747, 64.4286",
    shortDesc: "Шаҳри таърихӣ ва пойтахти давлати Сомониён.",
    description:
      "Бухоро пойтахти империяи Сомониён ва яке аз марказҳои бузурги илм у фарҳанг дар ҷаҳони исломии асри миёна буд. То ҳанӯз яке аз муҳимтарин маконҳои мероси Осиёи Миёна боқӣ мондааст.",
    sources: ["Наршахӣ, Таърихи Бухоро"],
    status: "published",
  },
  {
    id: "2",
    slug: "samarkand",
    name: "Samarkand",
    nameTj: "Самарқанд",
    location: "Ҳӯзикистон",
    country: "Ҳӯзикистон",
    period: "Пойтахти Темуриён",
    coordinates: "39.6270, 66.9750",
    shortDesc: "Шаҳри қадимӣ дар Роҳи абришам; пойтахт дар замони Темур.",
    description:
      "Самарқанд шаҳри муҳими Роҳи абришам ва баъдтар пойтахти империяи Темур буд. Ёдгорҳои он, аз ҷумла Регистон, рамзи шукуфоии фарҳанги Темуриён ҳисоб мешаванд.",
    sources: ["Manz, The Rise and Rule of Tamerlane"],
    status: "published",
  },
  {
    id: "3",
    slug: "khujand",
    name: "Khujand",
    nameTj: "Хуҷанд",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Аз қадим то имрӯз",
    coordinates: "40.2822, 69.6220",
    shortDesc: "Яке аз қадимтарин шаҳрҳои Осиёи Миёна, дар канори Сирдарё.",
    description:
      "Хуҷанд (дар қадим Александрияи Аҳдарӣн ва шаклҳои баъдӣ) аз ҷӯмлаи қадимтарин шаҳрҳои муттасили Осиёи Миёна аст ва маркази муҳими шимоли Тоҷикистон мебошад.",
    status: "published",
  },
  {
    id: "4",
    slug: "panjakent",
    name: "Panjakent",
    nameTj: "Панҷакент",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Суғдӣ",
    shortDesc: "Макони шаҳри қадими суғдӣ бо нақшҳои маъруф.",
    description:
      "Панҷакенти қадим шаҳри суғдӣ буд, ки ба нақшҳои деворӣ ва фарҳанги шаҳрӣ маъруф аст. Пеш аз фатҳҳои араб ин ҷо маркази ҳаёт буд. Боқияҳои бостоншиносӣ сарчашмаи муҳими таърихи суғдӣ ҳисоб мераванд.",
    status: "published",
  },
]

export function getPlaceBySlug(slug: string) {
  return places.find((p) => p.slug === slug)
}

export function getPublishedPlaces() {
  return places.filter((p) => p.status === "published")
}
