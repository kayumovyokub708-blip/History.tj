export interface Period {
  id: string
  slug: string
  name: string
  nameTj: string
  yearStart: string
  yearEnd: string
  shortDesc: string
  description: string
  status: "published" | "draft"
}

export const periods: Period[] = [
  {
    id: "1",
    slug: "samanid",
    name: "Samanid era",
    nameTj: "Давраи Сомониён",
    yearStart: "819",
    yearEnd: "999",
    shortDesc: "Golden age of Persian culture in Transoxiana.",
    description:
      "The Samanid period saw effective independence in Transoxiana and Khorasan, with Bukhara as capital. Persian literature and administration flourished under rulers such as Ismail Samani.",
    status: "published",
  },
  {
    id: "2",
    slug: "timurid",
    name: "Timurid era",
    nameTj: "Давраи Темуриён",
    yearStart: "1370",
    yearEnd: "1507",
    shortDesc: "Empire centered on Samarkand; arts and architecture.",
    description:
      "Founded by Timur, the Timurid state reshaped the region. Samarkand and later Herat became centers of architecture, manuscript culture, and science.",
    status: "published",
  },
  {
    id: "3",
    slug: "soviet",
    name: "Soviet period",
    nameTj: "Давраи Шӯравӣ",
    yearStart: "1924",
    yearEnd: "1991",
    shortDesc: "Tajik SSR within the Soviet Union.",
    description:
      "The Tajik Soviet Socialist Republic was formed in the 1920s. The period brought industrialization, education expansion, and major social change, ending with independence in 1991.",
    status: "published",
  },
  {
    id: "4",
    slug: "independence",
    name: "Independence",
    nameTj: "Истиқлол",
    yearStart: "1991",
    yearEnd: "present",
    shortDesc: "Republic of Tajikistan as a sovereign state.",
    description:
      "Since 9 September 1991 Tajikistan has been an independent republic. Early years included civil conflict; later decades focused on reconstruction and state-building.",
    status: "published",
  },
]

export function getPeriodBySlug(slug: string) {
  return periods.find((p) => p.slug === slug)
}

export function getPublishedPeriods() {
  return periods.filter((p) => p.status === "published")
}
