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
    location: "Мовароуннаҳр",
    period: "Давраи Сомониён",
    shortDesc:
      "Хонадони Сомонӣ ҳокимронӣ гирифта, тадриҷан давлати мустақил бино ниҳоданд.",
    description:
      "Аз соли 819 хонадони Сомонӣ дар Мовароуннаҳр аз ҷониби хилофати Аббосӣ ҳокимронӣ дарёфтанд. Дар тӯли садаи IX ҳокимияти худро мустаҳкам карданд. Дар замони Исмоил ибни Аҳмад (Исмоили Сомонӣ) давлат амалан мустақил шуд; Бухоро пойтахт гардид. Ин давра ҳамчун асри тиллои фарҳанги форсӣ дар Осиёи Миёна эҳтиром мешавад.",
    participants: ["Сулолаи Сомониён", "Хилофати Аббосӣ"],
    relatedPeople: ["ismoili-somoni", "rudaki"],
    sources: ["Наршахӣ, Таърихи Бухоро", "Barthold, Turkestan Down to the Mongol Invasion"],
    status: "published",
  },
  {
    id: "2",
    slug: "battle-of-talas",
    title: "Battle of Talas",
    titleTj: "Муҳорибаи Талос",
    dateStart: "751",
    location: "Дарёи Талос (наздики Қирғизистон/Қазоқистони имрӯз)",
    period: "Асри аввали миёна",
    shortDesc:
      "Муҳорибаи байни Аббосиён ва Танг, ки сиёсати Осиёи Миёна ва интиқоли фанноварӣро тагйир дод.",
    description:
      "Муҳорибаи Талос (751) байни хилофати Аббосӣ ва сулолаи Танг рух дод. Ғалабаи Аббосиён густариши ҳарбии Чинро ба Осиёи Миёна маҳдуд кард. Ба ривоят, ҳунармандони асири чинӣ ба густариши санъати қоғоз ба ғарб кумак карданд — ҳодисае, ки барои фарҳангӣ дошт.",
    participants: ["Хилофати Аббосӣ", "Чини Танг", "Қарлуқҳо"],
    sources: ["Beckwith, Christopher. Empires of the Silk Road"],
    status: "published",
  },
  {
    id: "3",
    slug: "alexander-in-sogdiana",
    title: "Alexander in Sogdiana",
    titleTj: "Искандар дар Суғд",
    dateStart: "329 п.м.",
    dateEnd: "327 п.м.",
    location: "Суғд / Бохтар",
    period: "Эллинистӣ",
    shortDesc:
      "Искандари Мақдунӣ дар Суғд ба муқовимати дарозмуддат, аз ҷумла Спитамен, рӯ ба рӯ шуд.",
    description:
      "Пас аз фатҳ кардани империяи Ахоманиён, Искандар солҳои 329–327 п.м. дар Бохтар ва Суғд ҷанг бурд. Муқовимати маҳаллӣ, махсусан зери Спитамен, ӯро ба амалиётҳои душвор маҷбур сохт. Баъдар дар ин минтақа таъсири эллинӣ бо фарҳангҳои маҳаллӣ омехт шуд.",
    participants: ["Искандари Мақдунӣ", "Спитамен", "Суғдиён"],
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
    location: "Мовароуннаҳр (Самарқанд)",
    period: "Давраи Темуриён",
    shortDesc:
      "Темур ҳокимиятро дар Мовароуннаҳр ба даст овард ва Самарқандро маркази империя кард.",
    description:
      "Соли 1370 Темур (Тамерлан) контроли Мовароуннаҳрро ба даст овард. Аз Самарқанд ӯ ба Эрон, Шарқи Миёна, Ҳиндустон ва Анатолӣ лашкаркашӣ кард. Давраи Темуриён мероси бузурги меъморӣ ва фарҳанг дар Осиёи Миёна боқӣ гузошт.",
    participants: ["Темур", "Нерӯхои Темурӣ"],
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
    location: "Бухоро",
    period: "Асри нав",
    shortDesc:
      "Давлати ҷонишин бо маркази Бухоро то аввали садаи XX.",
    description:
      "Амирати Бухоро дар охири садаи XVIII пайдо шуд ва қисмате Ҳӯзикистон ва Тоҷикистони имрӯзро идора мекард. Дар садаи XIX зери ҳимояти Русия қарор гирифт. Соли 1920 ба таъсиси ҷумҳурии Шӯравӣ и Бухоро анҷом ёфт.",
    participants: ["Сулолаи Манғит", "Империяи Русия"],
    sources: ["Becker, Seymour. Russia's Protectorates in Central Asia"],
    status: "published",
  },
  {
    id: "6",
    slug: "independence-tajikistan",
    title: "Independence of Tajikistan",
    titleTj: "Истиқлолияти Тоҷикистон",
    dateStart: "1991-09-09",
    location: "Тоҷикистон",
    period: "Муосир",
    shortDesc:
      "Пас аз фурупошии Иттиҳоди Шӯравӣ Тоҷикистон истиқлол эълон кард.",
    description:
      "Рӯзи 9 сентябри соли 1991 Тоҷикистон истиқлолияти худро эълон кард. Солҳои аввали давлатдорӣ ба ҷанги шаҳрвандӣ (1992–1997) ва баъд аз он бо бозсозӣ ҳамроҳ буданд. Рӯзи Истиқлол то ҳанӯз яке аз муҳимтарин идҳои миллӣ боқӣ мондааст.",
    participants: ["Ҷумҳурии Тоҷикистон"],
    sources: ["Хронологияи расмии Ҷумҳурии Тоҷикистон"],
    status: "published",
  },
]

export function getEventBySlug(slug: string): HistoricalEvent | undefined {
  return events.find((e) => e.slug === slug)
}

export function getPublishedEvents(): HistoricalEvent[] {
  return events.filter((e) => e.status === "published")
}
