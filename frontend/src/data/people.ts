export interface Person {
  id: string
  slug: string
  name: string
  nameTj: string
  nameRu?: string
  alternativeNames?: string[]
  birthYear?: string
  deathYear?: string
  birthPlace?: string
  deathPlace?: string
  dynasty?: string
  title?: string
  period?: string
  shortBio: string
  biography: string
  achievements?: string[]
  relatedPeople?: string[]
  sources?: string[]
  status: "published" | "draft"
}

export const people: Person[] = [
  {
    id: "1",
    slug: "ismoili-somoni",
    name: "Ismail Samani",
    nameTj: "Исмоили Сомонӣ",
    nameRu: "Исмаил Самани",
    alternativeNames: ["Ismā‘īl ibn Aḥmad", "Amir Ismail"],
    birthYear: "849",
    deathYear: "907",
    birthPlace: "Ferghana",
    deathPlace: "Bukhara",
    dynasty: "Samanid",
    title: "Amir of the Samanid Empire",
    period: "Samanid era",
    shortBio: "Founder of the Samanid state; unified much of Transoxiana and Khorasan.",
    biography:
      "Ismail ibn Ahmad (Ismoili Somoni) was the Samanid amir who established effective independence from the Abbasid Caliphate and consolidated rule over Transoxiana and parts of Khorasan. He is remembered as a just ruler who strengthened administration, supported Persian culture and literature, and defended the region against external threats. His capital Bukhara became a major center of learning. In modern Tajikistan he is honored as a national symbol; the highest peak was renamed after him.",
    achievements: [
      "Consolidated Samanid power in Transoxiana",
      "Defended the frontier and expanded influence in Khorasan",
      "Patron of Persian language and culture",
      "Established Bukhara as a cultural capital",
    ],
    sources: [
      "Narshakhi, History of Bukhara",
      "Frye, R.N. The History of Bukhara",
      "Barthold, W. Turkestan Down to the Mongol Invasion",
    ],
    status: "published",
  },
  {
    id: "2",
    slug: "rudaki",
    name: "Rudaki",
    nameTj: "Рӯдакӣ",
    nameRu: "Рудаки",
    alternativeNames: ["Abu Abdullah Jafar ibn Muhammad Rudaki"],
    birthYear: "858",
    deathYear: "941",
    birthPlace: "Panjrud (near Samarkand)",
    dynasty: "Samanid court",
    title: "Father of Persian poetry",
    period: "Samanid era",
    shortBio: "First major poet of New Persian literature at the Samanid court.",
    biography:
      "Rudaki is regarded as the founder of Persian classical poetry. He served at the Samanid court in Bukhara and composed thousands of verses, of which only a fraction survive. His work helped establish New Persian as a literary language after centuries of Arabic dominance in high culture.",
    achievements: [
      "Pioneer of New Persian poetry",
      "Court poet of the Samanids",
      "Influenced later Persian literary tradition",
    ],
    sources: ["Safa, Zabihollah. History of Iranian Literature"],
    status: "published",
  },
  {
    id: "3",
    slug: "ibni-sino",
    name: "Ibn Sina (Avicenna)",
    nameTj: "Ибни Сино",
    nameRu: "Ибн Сина",
    alternativeNames: ["Abu Ali al-Husayn ibn Sina", "Avicenna"],
    birthYear: "980",
    deathYear: "1037",
    birthPlace: "Afshona near Bukhara",
    deathPlace: "Hamadan",
    title: "Philosopher and physician",
    period: "Islamic Golden Age",
    shortBio: "Polymath whose Canon of Medicine shaped medical education for centuries.",
    biography:
      "Ibn Sina (Avicenna) was born near Bukhara and became one of the most influential thinkers of the medieval world. His works in medicine, philosophy, and science were studied in both the Islamic world and Europe. The Canon of Medicine remained a standard textbook for centuries.",
    achievements: [
      "Author of The Canon of Medicine",
      "Major contributions to philosophy and logic",
      "Symbol of Central Asian scientific heritage",
    ],
    sources: ["Gutas, Dimitri. Avicenna and the Aristotelian Tradition"],
    status: "published",
  },
  {
    id: "4",
    slug: "firdavsi",
    name: "Ferdowsi",
    nameTj: "Фирдавсӣ",
    nameRu: "Фирдоуси",
    alternativeNames: ["Abul-Qasem Ferdowsi Tusi"],
    birthYear: "940",
    deathYear: "1020",
    birthPlace: "Tus, Khorasan",
    title: "Author of the Shahnameh",
    period: "Ghaznavid era",
    shortBio: "Poet of the Shahnameh, the national epic of the Persian-speaking world.",
    biography:
      "Ferdowsi spent decades composing the Shahnameh (Book of Kings), which preserved pre-Islamic Iranian myths and history in New Persian. The epic became a cornerstone of Persian identity and is celebrated across Iran, Tajikistan, Afghanistan, and beyond.",
    achievements: [
      "Authored the Shahnameh",
      "Preserved Iranian legendary history in Persian",
      "Enduring cultural influence across the region",
    ],
    sources: ["Yarshater, Ehsan (ed.). Encyclopaedia Iranica"],
    status: "published",
  },
  {
    id: "5",
    slug: "spitamen",
    name: "Spitamenes",
    nameTj: "Спитамен",
    birthYear: "c. 370 BC",
    deathYear: "328 BC",
    title: "Sogdian leader",
    period: "Achaemenid / Alexander",
    shortBio: "Led resistance against Alexander the Great in Sogdiana and Bactria.",
    biography:
      "Spitamenes was a Sogdian leader who organized fierce resistance to Alexander's campaign in Central Asia. His guerrilla warfare forced Alexander into prolonged fighting in the region. He remains a figure of local resistance in the historical memory of Central Asia.",
    achievements: ["Organized anti-Macedonian resistance in Sogdiana"],
    sources: ["Arrian, Anabasis of Alexander"],
    status: "published",
  },
  {
    id: "6",
    slug: "temur",
    name: "Timur (Tamerlane)",
    nameTj: "Темур",
    nameRu: "Тамерлан",
    birthYear: "1336",
    deathYear: "1405",
    birthPlace: "Near Kesh (Shahrisabz)",
    deathPlace: "Otrar",
    dynasty: "Timurid",
    title: "Founder of the Timurid Empire",
    period: "Timurid era",
    shortBio: "Conqueror who built an empire from Samarkand across much of Asia.",
    biography:
      "Timur founded a vast empire with its capital at Samarkand. His campaigns reshaped the political map of the Middle East and Central Asia. The Timurid period also saw a flowering of arts, architecture, and scholarship centered on Samarkand and Herat.",
    achievements: [
      "Founded the Timurid Empire",
      "Made Samarkand a world capital of culture",
      "Patron of architecture and learning",
    ],
    sources: ["Manz, Beatrice. The Rise and Rule of Tamerlane"],
    status: "published",
  },
]

export function getPersonBySlug(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug)
}

export function getPublishedPeople(): Person[] {
  return people.filter((p) => p.status === "published")
}
