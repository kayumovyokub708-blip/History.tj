export interface HistoricalEvent {
  id: string
  slug: string
  title: string
  titleTj: string
  titleRu?: string
  dateStart: string
  dateEnd?: string
  location?: string
  period?: string
  shortDesc: string
  shortDescRu?: string
  shortDescEn?: string
  description: string
  descriptionRu?: string
  descriptionEn?: string
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
    titleRu: "Возвышение государства Саманидов",
    dateStart: "819",
    dateEnd: "892",
    location: "Мовароуннаҳр",
    period: "Давраи Сомониён",
    shortDesc:
      "Хонадони Сомонӣ ҳокимронӣ гирифта, тадриҷан давлати мустақил бино ниҳоданд.",
    shortDescRu:
      "Род Саманидов получил власть и постепенно создал независимое государство.",
    shortDescEn:
      "The Samanid house gained power and gradually built an independent state.",
    description:
      "Аз соли 819 хонадони Сомонӣ дар Мовароуннаҳр аз ҷониби хилофати Аббосӣ ҳокимронӣ дарёфтанд. Дар тӯли садаи IX ҳокимияти худро мустаҳкам карданд. Дар замони Исмоил ибни Аҳмад (Исмоили Сомонӣ) давлат амалан мустақил шуд; Бухоро пойтахт гардид. Ин давра ҳамчун асри тиллои фарҳанги форсӣ дар Осиёи Миёна эҳтиром мешавад.",
    descriptionRu:
      "С 819 года род Саманидов получил власть в Мавераннахре от Аббасидского халифата. В течение IX века они укрепили своё правление. При Исмаиле ибн Ахмаде (Исмаиле Самани) государство стало фактически независимым; столицей стала Бухара. Этот период почитается как золотой век персидской культуры в Средней Азии.",
    descriptionEn:
      "From 819 the Samanid house received authority in Transoxiana from the Abbasid caliphate. Through the 9th century they consolidated power. Under Ismail ibn Ahmad (Ismail Samani) the state became effectively independent; Bukhara became the capital. The period is honoured as a golden age of Persian culture in Central Asia.",
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
    titleRu: "Битва при Таласе",
    dateStart: "751",
    location: "Дарёи Талос (наздики Қирғизистон/Қазоқистони имрӯз)",
    period: "Асри аввали миёна",
    shortDesc:
      "Муҳорибаи байни Аббосиён ва Танг, ки сиёсати Осиёи Миёна ва интиқоли фанновариро тағйир дод.",
    shortDescRu:
      "Сражение между Аббасидами и Тан, изменившее политику Средней Азии и передачу технологий.",
    shortDescEn:
      "Battle between the Abbasids and Tang that reshaped Central Asian politics and technology transfer.",
    description:
      "Муҳорибаи Талос (751) байни хилофати Аббосӣ ва сулолаи Танг рух дод. Ғалабаи Аббосиён густариши ҳарбии Чинро ба Осиёи Миёна маҳдуд кард. Ба ривоят, ҳунармандони асири чинӣ ба густариши санъати қоғоз ба ғарб кумак карданд — ҳодисае, ки аҳамияти фарҳангӣ дошт.",
    descriptionRu:
      "Битва при Таласе (751) произошла между Аббасидским халифатом и династией Тан. Победа Аббасидов ограничила военное продвижение Китая в Среднюю Азию. По преданию, пленные китайские мастера способствовали распространению бумажного ремесла на запад — событие с культурным значением.",
    descriptionEn:
      "The Battle of Talas (751) was fought between the Abbasid caliphate and the Tang dynasty. Abbasid victory limited Chinese military expansion into Central Asia. Tradition holds that captive Chinese craftsmen helped spread paper-making westward — an event of cultural importance.",
    participants: ["Хилофати Аббосӣ", "Чини Танг", "Қарлуқҳо"],
    sources: ["Beckwith, Christopher. Empires of the Silk Road"],
    status: "published",
  },
  {
    id: "3",
    slug: "alexander-in-sogdiana",
    title: "Alexander in Sogdiana",
    titleTj: "Искандар дар Суғд",
    titleRu: "Александр в Согде",
    dateStart: "329 п.м.",
    dateEnd: "327 п.м.",
    location: "Суғд / Бохтар",
    period: "Эллинистӣ",
    shortDesc:
      "Искандари Мақдунӣ дар Суғд ба муқовимати дарозмуддат, аз ҷумла Спитамен, рӯ ба рӯ шуд.",
    shortDescRu:
      "Александр Македонский столкнулся в Согде с длительным сопротивлением, в том числе Спитамена.",
    shortDescEn:
      "Alexander of Macedon faced prolonged resistance in Sogdiana, including from Spitamenes.",
    description:
      "Пас аз фатҳ кардани империяи Ахоманиён, Искандар солҳои 329–327 п.м. дар Бохтар ва Суғд ҷанг бурд. Муқовимати маҳаллӣ, махсусан зери Спитамен, ӯро ба амалиётҳои душвор маҷбур сохт. Баъдтар дар ин минтақа таъсири эллинӣ бо фарҳангҳои маҳаллӣ омехта шуд.",
    descriptionRu:
      "После завоевания империи Ахеменидов Александр в 329–327 гг. до н. э. воевал в Бактрии и Согде. Местное сопротивление, особенно под руководством Спитамена, вынудило его к тяжёлым кампаниям. Позже в регионе эллинистическое влияние смешалось с местными культурами.",
    descriptionEn:
      "After conquering the Achaemenid empire, Alexander fought in Bactria and Sogdiana in 329–327 BCE. Local resistance, especially under Spitamenes, forced hard campaigns. Later Hellenistic influence mixed with local cultures in the region.",
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
    titleRu: "Возвышение Тимура",
    dateStart: "1370",
    location: "Мовароуннаҳр (Самарқанд)",
    period: "Давраи Темуриён",
    shortDesc:
      "Темур ҳокимиятро дар Мовароуннаҳр ба даст овард ва Самарқандро маркази империя кард.",
    shortDescRu:
      "Тимур захватил власть в Мавераннахре и сделал Самарканд центром империи.",
    shortDescEn:
      "Timur seized power in Transoxiana and made Samarkand the centre of his empire.",
    description:
      "Соли 1370 Темур (Тамерлан) контроли Мовароуннаҳрро ба даст овард. Аз Самарқанд ӯ ба Эрон, Шарқи Миёна, Ҳиндустон ва Анатолӣ лашкаркашӣ кард. Давраи Темуриён мероси бузурги меъморӣ ва фарҳанг дар Осиёи Миёна боқӣ гузошт.",
    descriptionRu:
      "В 1370 году Тимур (Тамерлан) установил контроль над Мавераннахром. Из Самарканда он ходил походами в Иран, на Ближний Восток, в Индию и Анатолию. Эпоха Тимуридов оставила большое архитектурное и культурное наследие в Средней Азии.",
    descriptionEn:
      "In 1370 Timur (Tamerlane) took control of Transoxiana. From Samarkand he campaigned into Iran, the Middle East, India and Anatolia. The Timurid age left a major architectural and cultural legacy in Central Asia.",
    participants: ["Темур", "Нерӯҳои Темурӣ"],
    relatedPeople: ["timur"],
    sources: ["Manz, Beatrice. The Rise and Rule of Tamerlane"],
    status: "published",
  },
  {
    id: "5",
    slug: "bukhara-emirate",
    title: "Emirate of Bukhara",
    titleTj: "Амирати Бухоро",
    titleRu: "Бухарский эмират",
    dateStart: "1785",
    dateEnd: "1920",
    location: "Бухоро",
    period: "Асри нав",
    shortDesc:
      "Давлати ҷонишин бо маркази Бухоро то аввали садаи XX.",
    shortDescRu:
      "Государство-преемник с центром в Бухаре до начала XX века.",
    shortDescEn:
      "Successor state centred on Bukhara until the early 20th century.",
    description:
      "Амирати Бухоро дар охири садаи XVIII пайдо шуд ва қисмате Ӯзбекистон ва Тоҷикистони имрӯзро идора мекард. Дар садаи XIX зери ҳимояти Русия қарор гирифт. Соли 1920 ба таъсиси ҷумҳурии Шӯравии Бухоро анҷом ёфт.",
    descriptionRu:
      "Бухарский эмират возник в конце XVIII века и управлял частями сегодняшнего Узбекистана и Таджикистана. В XIX веке оказался под протекторатом России. В 1920 году завершился созданием Бухарской советской республики.",
    descriptionEn:
      "The Emirate of Bukhara emerged in the late 18th century and ruled parts of today’s Uzbekistan and Tajikistan. In the 19th century it came under Russian protection. In 1920 it ended with the creation of the Bukharan Soviet Republic.",
    participants: ["Сулолаи Манғит", "Империяи Русия"],
    sources: ["Becker, Seymour. Russia's Protectorates in Central Asia"],
    status: "published",
  },
  {
    id: "6",
    slug: "independence-tajikistan",
    title: "Independence of Tajikistan",
    titleTj: "Истиқлолияти Тоҷикистон",
    titleRu: "Независимость Таджикистана",
    dateStart: "1991-09-09",
    location: "Тоҷикистон",
    period: "Муосир",
    shortDesc:
      "Пас аз фурӯпошии Иттиҳоди Шӯравӣ Тоҷикистон истиқлол эълон кард.",
    shortDescRu:
      "После распада Советского Союза Таджикистан провозгласил независимость.",
    shortDescEn:
      "After the collapse of the Soviet Union, Tajikistan declared independence.",
    description:
      "Рӯзи 9 сентябри соли 1991 Тоҷикистон истиқлолияти худро эълон кард. Солҳои аввали давлатдорӣ ба ҷанги шаҳрвандӣ (1992–1997) ва баъд аз он бо бозсозӣ ҳамроҳ буданд. Рӯзи Истиқлол то ҳанӯз яке аз муҳимтарин идҳои миллӣ боқӣ мондааст.",
    descriptionRu:
      "9 сентября 1991 года Таджикистан провозгласил независимость. Первые годы государственности сопровождались гражданской войной (1992–1997), а затем восстановлением. День независимости до сих пор один из важнейших национальных праздников.",
    descriptionEn:
      "On 9 September 1991 Tajikistan declared independence. The early years of statehood were marked by civil war (1992–1997) and then reconstruction. Independence Day remains one of the most important national holidays.",
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
