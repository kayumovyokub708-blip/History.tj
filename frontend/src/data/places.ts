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
    location: "Uzbekistan",
    country: "Uzbekistan",
    period: "Samanid capital",
    coordinates: "39.7747, 64.4286",
    shortDesc: "Historic city and capital of the Samanid state.",
    description:
      "Bukhara was the capital of the Samanid Empire and one of the great centers of learning and culture in the medieval Islamic world. It remains a major heritage site of Central Asia.",
    sources: ["Narshakhi, History of Bukhara"],
    status: "published",
  },
  {
    id: "2",
    slug: "samarkand",
    name: "Samarkand",
    nameTj: "Самарқанд",
    location: "Uzbekistan",
    country: "Uzbekistan",
    period: "Timurid capital",
    coordinates: "39.6270, 66.9750",
    shortDesc: "Ancient city on the Silk Road; capital under Timur.",
    description:
      "Samarkand was a key Silk Road city and later the capital of Timur's empire. Its monuments, including the Registan, symbolize the Timurid cultural flowering.",
    sources: ["Manz, The Rise and Rule of Tamerlane"],
    status: "published",
  },
  {
    id: "3",
    slug: "khujand",
    name: "Khujand",
    nameTj: "Хуҷанд",
    location: "Tajikistan",
    country: "Tajikistan",
    period: "Ancient – modern",
    coordinates: "40.2822, 69.6220",
    shortDesc: "One of the oldest cities of Central Asia, on the Syr Darya.",
    description:
      "Khujand (ancient Alexandria Eschate / later forms) is among the oldest continuously inhabited cities in Central Asia and an important center in northern Tajikistan.",
    status: "published",
  },
  {
    id: "4",
    slug: "panjakent",
    name: "Panjakent",
    nameTj: "Панҷакент",
    location: "Tajikistan",
    country: "Tajikistan",
    period: "Sogdian",
    shortDesc: "Site of ancient Sogdian city with famous murals.",
    description:
      "Ancient Panjakent was a Sogdian city known for its wall paintings and urban culture before the Arab conquests. Archaeological remains are a major source for Sogdian history.",
    status: "published",
  },
]

export function getPlaceBySlug(slug: string) {
  return places.find((p) => p.slug === slug)
}

export function getPublishedPlaces() {
  return places.filter((p) => p.status === "published")
}
