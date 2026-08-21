export interface Dynasty {
  id: string
  slug: string
  name: string
  nameTj: string
  yearStart: string
  yearEnd: string
  capital?: string
  shortDesc: string
  description: string
  status: "published" | "draft"
}

export const dynasties: Dynasty[] = [
  {
    id: "1",
    slug: "samanid-dynasty",
    name: "Samanid dynasty",
    nameTj: "Сулолаи Сомониён",
    yearStart: "819",
    yearEnd: "999",
    capital: "Bukhara",
    shortDesc: "Persianate dynasty of Transoxiana and Khorasan.",
    description:
      "The Samanids ruled from Transoxiana with Bukhara as capital. They are associated with the revival of Persian language and culture and figures such as Ismail Samani and Rudaki.",
    status: "published",
  },
  {
    id: "2",
    slug: "timurid-dynasty",
    name: "Timurid dynasty",
    nameTj: "Сулолаи Темуриён",
    yearStart: "1370",
    yearEnd: "1507",
    capital: "Samarkand",
    shortDesc: "Founded by Timur; empire and cultural legacy.",
    description:
      "The Timurids controlled a vast territory from a Samarkand base. Their patronage produced lasting architectural and artistic achievements across Central Asia and Iran.",
    status: "published",
  },
  {
    id: "3",
    slug: "manghit",
    name: "Manghit dynasty",
    nameTj: "Сулолаи Манғит",
    yearStart: "1785",
    yearEnd: "1920",
    capital: "Bukhara",
    shortDesc: "Ruling house of the Emirate of Bukhara.",
    description:
      "The Manghit dynasty ruled the Emirate of Bukhara until the early Soviet period. The emirate was a Russian protectorate in the late 19th century.",
    status: "published",
  },
]

export function getDynastyBySlug(slug: string) {
  return dynasties.find((d) => d.slug === slug)
}

export function getPublishedDynasties() {
  return dynasties.filter((d) => d.status === "published")
}
