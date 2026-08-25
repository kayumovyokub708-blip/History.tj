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
  biographyRu?: string
  biographyEn?: string
  achievements?: string[]
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
    birthPlace: "Фарғона",
    deathPlace: "Бухоро",
    dynasty: "Сомониён",
    title: "Амири давлати Сомониён",
    period: "Давраи Сомониён",
    shortBio:
      "Асосгузори давлати мустақили Сомониён; Мовароуннаҳр ва қисмате Хуросонро иттиҳод кард.",
    biography:
      "Исмоили Сомонӣ баъди вафоти бародараш Насри I, аз соли 892 амири мутлақи Давлати Сомониён гардид. Ҳанӯз дар аҳди Насри I Сомонӣ, Исмоил ибни Аҳмад саъю кӯшиш намуд, ки дар Бухоро ҳокими мутлақ гардад. Дар натиҷа байни ӯ ва Насри I зиддият ба амал омада, он бо задухурди ҳарбӣ анҷом ёфт. Ҳарчанд Наср сарвари хонадони Сомонӣ буд, вале рӯз аз рӯз обрӯву эътибори Исмоил боло мерафт. Дар ин миён Исмоил кӯшишҳои мустақилона амал карданро шурӯъ кард. Суханчинҳо ин зиддиятҳоро бештар карда, миёни ду бародар тарҳи душманӣ меафканданд. Сабаби сарзадани моҷаро сарпечии Исмоил аз пардохтани хироҷи Бухоро ба Наср — сарвари Хонадони Сомониён буд. Оқибат миёни бародарон Наср ва Исмоил соли 888 задухӯрди мусаллаҳона сурат гирифта, бо пирӯзии Исмоил ба анҷом расид, вале Исмоил ба бародари асирафтодааш чун пешвои хонадон муроҷиат карда, миёни мардум низ маҳбубияти бештаре касб кард. Соли 892 Наср аз дунё рафт ва мувофиқи васияти ӯ Исмоил сарвари Хонадони Сомониён ва амири Давлати Сомониён (Мовароуннаҳр) гардид.",
    biographyRu:
      "Исмаил Самани после смерти брата Насра I с 892 года стал полновластным амиром Государства Саманидов. Ещё при Насре I Сомани Исмаил ибн Ахмад стремился стать полновластным правителем в Бухаре. В результате между ним и Насром I возник конфликт, закончившийся военным столкновением. Хотя Наср был главой рода Саманидов, день ото дня рос авторитет Исмаила. Между тем Исмаил начал действовать самостоятельно. Клеветники усиливали противоречия и сеяли вражду между братьями. Причиной ссоры был отказ Исмаила платить налог с Бухары Насру — главе рода Саманидов. В итоге в 888 году между братьями Насром и Исмаилом произошло вооружённое столкновение, завершившееся победой Исмаила, однако Исмаил обратился к пленённому брату как к главе рода и тем самым снискал ещё большую любовь народа. В 892 году Наср умер, и по его завещанию Исмаил стал главой рода Саманидов и амиром Государства Саманидов (Мавераннахр).",
    biographyEn:
      "After the death of his brother Nasr I, Ismail Samani became absolute amir of the Samanid state from 892. Even under Nasr I, Ismail ibn Ahmad sought full control of Bukhara. This led to conflict with Nasr I that ended in armed clash. Although Nasr headed the Samanid house, Ismail's standing rose day by day. Ismail began to act independently; intriguers widened the rift between the brothers. The dispute stemmed from Ismail's refusal to pay Bukhara's tribute to Nasr, head of the Samanid house. In 888 the brothers fought; Ismail won, yet he treated his captive brother as head of the house and gained greater popular favour. In 892 Nasr died, and by his will Ismail became head of the Samanid house and amir of the Samanid state (Transoxiana).",
    achievements: [
      "Мустаҳкам кардани ҳокимияти Сомониён дар Мовароуннаҳр",
      "Ҳимояти марзҳо ва густариши нуфуз дар Хуросон",
      "Пуштибонӣ аз забон ва фарҳанги форсӣ",
      "Табдили Бухоро ба пойтахти фарҳангӣ",
    ],
    sources: [
      "Наршахӣ, Таърихи Бухоро",
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
    alternativeNames: ["Abu Abdulloh Rudaki"],
    birthYear: "858",
    deathYear: "941",
    birthPlace: "Панҷрӯд",
    deathPlace: "Панҷрӯд",
    dynasty: "Дарбори Сомониён",
    title: "Шоир",
    period: "Давраи Сомониён",
    shortBio:
      "Нахустин шоири бузурги адабиёти форсии дарӣ; дар дарбори Сомониён шеър гуфт.",
    biography:
      "Рӯдакӣ бунёнгузори шеъри классикии форсӣ шинохта мешавад. Уй дар дарбори Сомониён дар Бухоро хизмат мекард ва ҳазорҳо байт суруд, ки ҳамааш то ба рӯзгор расидааст. Эҷоди ӯ ба таҳкими забони форсӣ ҳамчун забони адабӣ кумак кард.",
    achievements: [
      "Бунёдгузори шеъри классикии форсӣ",
      "Шоири дарбори Сомониён",
    ],
    status: "published",
  },
  {
    id: "3",
    slug: "ibn-sina",
    name: "Ibn Sina",
    nameTj: "Ибни Сино",
    nameRu: "Ибн Сина",
    alternativeNames: ["Avicenna", "Abu Ali ibn Sino"],
    birthYear: "980",
    deathYear: "1037",
    birthPlace: "Бухоро",
    deathPlace: "Ҳамадон",
    title: "Донишманд ва табиб",
    period: "Асри миёна",
    shortBio: "Файласуф, табиб ва олими бузурги Осиёи Миёна; муаллифи Қонуни тиб.",
    biography:
      "Ибни Сино яке аз бузургтарин олимони асри миёна аст. Уй дар Бухоро таҳсил кард ва китоби «ал-Қонун фи-т-тиб»-ро навишт, ки садсолаҳо дар Аврупо ва Шарқ ҳамчун дастури тиббӣ истифода мешуд.",
    achievements: ["Муаллифи Қонуни тиб", "Фалсафа ва мантиқ"],
    status: "published",
  },
  {
    id: "4",
    slug: "ferdowsi",
    name: "Ferdowsi",
    nameTj: "Фирдавсӣ",
    nameRu: "Фирдоуси",
    alternativeNames: ["Hakim Abul-Qasim Ferdowsi"],
    birthYear: "940",
    deathYear: "1020",
    birthPlace: "Тус",
    deathPlace: "Тус",
    title: "Шоир",
    period: "Асри миёна",
    shortBio: "Муаллифи ҳамосаи Шоҳнома — достони бузурги таърихи Эрон.",
    biography:
      "Фирдавсӣ Шоҳномаро тақрибан 30 сол навишт. Ин асар таърих, афсона ва ҳувияти фарҳангии ҷаҳони форсиро ҳифз мекунад.",
    achievements: ["Муаллифи Шоҳнома"],
    status: "published",
  },
  {
    id: "5",
    slug: "cyrus-the-great",
    name: "Cyrus the Great",
    nameTj: "Куруши Кабир",
    nameRu: "Кир Великий",
    birthYear: "c. 600 BC",
    deathYear: "530 BC",
    title: "Подшоҳи Ҳахоманишиён",
    period: "Давраи қадим",
    shortBio: "Бунёдгузори империяи Ҳахоманишӣ.",
    biography:
      "Куруши Кабир империяи васеъро аз Осиёи Миёна то Баҳри Миёназамин бунёд кард ва бо сиёсати таҳаммулпазирӣ маъруф аст.",
    status: "published",
  },
  {
    id: "6",
    slug: "timur",
    name: "Timur",
    nameTj: "Темур",
    nameRu: "Тимур",
    alternativeNames: ["Tamerlane", "Amir Timur"],
    birthYear: "1336",
    deathYear: "1405",
    birthPlace: "Кеш",
    deathPlace: "Отрор",
    title: "Фатҳкунанда",
    period: "Давраи Темуриён",
    shortBio: "Бунёдгузори империяи Темурӣ; Самарқандро пойтахт кард.",
    biography:
      "Темур империяи бузургеро дар Осиёи Миёна ва берун аз он бунёд кард. Самарқанд дар замони ӯ маркази сиёсӣ ва фарҳангӣ шуд.",
    status: "published",
  },
]

export function getPersonBySlug(slug: string) {
  return people.find((p) => p.slug === slug)
}

export function getPublishedPeople() {
  return people.filter((p) => p.status === "published")
}
