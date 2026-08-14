export interface HistoricalEvent {
  id: string
  slug: string
  title: string
  titleTj: string
  dateStart: string
  dateEnd?: string
  location?: string
  period?: string
  shortDesc: string
  description: string
  participants?: string[]
  relatedPeople?: string[]
  sources?: string[]
  status: "published" | "draft"
}

export const events: HistoricalEvent[] = [
  {
    id: "1",
    slug: "founding-samanid-state",
    title: "Rise of the Samanid State",
    titleTj: "Пайдоиши давлати Сомониён",
    dateStart: "819",
    dateEnd: "892",
    location: "Transoxiana",
    period: "Samanid era",
    shortDesc: "The Samanid family gained governorships and gradually built an independent state.",
    description:
      "From 819 the Samanid family received governorships in Transoxiana under the Abbasid Caliphate. Over the ninth century they consolidated power. Under Ismail ibn Ahmad (Ismoili Somoni) the state became effectively independent, with Bukhara as capital, marking a golden age of Persian culture in Central Asia.",
    participants: ["Samanid dynasty", "Abbasid Caliphate"],
    relatedPeople: ["ismoili-somoni", "rudaki"],
    sources: ["Narshakhi, History of Bukhara", "Barthold, Turkestan Down to the Mongol Invasion"],
    status: "published",
  },
  {
    id: "2",
    slug: "battle-of-talas",
    title: "Battle of Talas",
    titleTj: "Муҳорибаи Талос",
    dateStart: "751",
    location: "Talas River (near modern Kyrgyzstan/Kazakhstan)",
    period: "Early medieval",
    shortDesc: "Clash between Abbasid and Tang forces that shaped Central Asian politics and technology transfer.",
    description:
      "The Battle of Talas (751) was fought between the Abbasid Caliphate and the Tang dynasty. The Abbasid victory limited Chinese expansion into Central Asia. Tradition holds that captured Chinese artisans helped spread paper-making westward, a development of lasting cultural importance.",
    participants: ["Abbasid Caliphate", "Tang China", "Karluks"],
    sources: ["Beckwith, Christopher. Empires of the Silk Road"],
    status: "published",
  },
  {
    id: "3",
    slug: "alexander-in-sogdiana",
    title: "Alexander in Sogdiana",
    titleTj: "Искандар дар Суғд",
    dateStart: "329 BC",
    dateEnd: "327 BC",
    location: "Sogdiana / Bactria",
    period: "Hellenistic",
    shortDesc: "Alexander the Great faced prolonged resistance in Sogdiana, including from Spitamenes.",
    description:
      "After conquering the Achaemenid Empire, Alexander campaigned in Bactria and Sogdiana (329–327 BC). Local resistance, notably under Spitamenes, forced long and difficult operations. The region later saw Hellenistic influence mixed with local cultures.",
    participants: ["Alexander the Great", "Spitamenes", "Sogdians"],
    relatedPeople: ["spitamen"],
    sources: ["Arrian, Anabasis of Alexander"],
    status: "published",
  },
  {
    id: "4",
    slug: "timur-rises",
    title: "Rise of Timur",
    titleTj: "Баромадани Темур",
    dateStart: "1370",
    location: "Transoxiana (Samarkand)",
    period: "Timurid era",
    shortDesc: "Timur seized power in Transoxiana and made Samarkand the center of a vast empire.",
    description:
      "In 1370 Timur (Tamerlane) established control over Transoxiana. From Samarkand he launched campaigns across Persia, the Middle East, and into India and Anatolia. The Timurid era left a major architectural and cultural legacy in Central Asia.",
    participants: ["Timur", "Timurid forces"],
    relatedPeople: ["temur"],
    sources: ["Manz, Beatrice. The Rise and Rule of Tamerlane"],
    status: "published",
  },
  {
    id: "5",
    slug: "bukhara-emirate",
    title: "Emirate of Bukhara",
    titleTj: "Амирати Бухоро",
    dateStart: "1785",
    dateEnd: "1920",
    location: "Bukhara",
    period: "Modern",
    shortDesc: "Successor state in the region centered on Bukhara until the early 20th century.",
    description:
      "The Emirate of Bukhara emerged in the late 18th century and ruled much of what is now Uzbekistan and parts of Tajikistan. It survived under Russian protectorate status in the 19th century and ended in 1920 with the establishment of the Bukharan People's Soviet Republic.",
    participants: ["Manghit dynasty", "Russian Empire"],
    sources: ["Becker, Seymour. Russia's Protectorates in Central Asia"],
    status: "published",
  },
  {
    id: "6",
    slug: "independence-tajikistan",
    title: "Independence of Tajikistan",
    titleTj: "Истиқлолияти Тоҷикистон",
    dateStart: "1991-09-09",
    location: "Tajikistan",
    period: "Contemporary",
    shortDesc: "Tajikistan declared independence following the dissolution of the Soviet Union.",
    description:
      "On 9 September 1991 Tajikistan declared independence. The early years of statehood were marked by civil conflict (1992–1997) and subsequent reconstruction. Independence Day remains a major national holiday.",
    participants: ["Republic of Tajikistan"],
    sources: ["Official chronology of the Republic of Tajikistan"],
    status: "published",
  },
]

export function getEventBySlug(slug: string): HistoricalEvent | undefined {
  return events.find((e) => e.slug === slug)
}

export function getPublishedEvents(): HistoricalEvent[] {
  return events.filter((e) => e.status === "published")
}
