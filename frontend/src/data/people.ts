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
    birthPlace: "Фарғона",
    deathPlace: "Бухоро",
    dynasty: "Сомониён",
    title: "Амири давлати Сомониён",
    period: "Давраи Сомониён",
    shortBio:
      "Асосгузори давлати мустақили Сомониён; Мовароуннаҳр ва қисмате Хуросонро иттиҳод кард.",
    biography:
      "Исмоил ибни Аҳмад (Исмоили Сомонӣ) амире буд, ки ҳокимияти воқеии Сомониёнро мустаҳкам кард ва аз хилофати Аббосӣ мустақилияти амалӣ ба даст овард. Уй ба адолат, идораи некӯ ва ҳимояти фарҳанг маъруф аст. Бухоро дар замони ӯ маркази бузурги илм ва фарҳанг шуд. Дар Тоҷикистони имрӯз ӯ ҳамчун рамзи давлатдорӣ эҳтиром мешавад; қуллаи баландтарин кишвар ба номи ӯ номгузорӣ шудааст.",
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
    alternativeNames: ["Абӯ Абдуллоҳ Ҷаъфар ибни Муҳаммад Рӯдакӣ"],
    birthYear: "858",
    deathYear: "941",
    birthPlace: "Панҷрӯд (наздики Самарқанд)",
    dynasty: "Дарбори Сомониён",
    title: "Падари шеъри форсӣ",
    period: "Давраи Сомониён",
    shortBio:
      "Нахустин шоири бузурги адабиёти форсии дарӣ; дар дарбори Сомониён шеър гуфт.",
    biography:
      "Рӯдакӣ бунёнгузори шеъри классикии форсӣ шинохта мешавад. Уй дар дарбори Сомониён дар Бухоро хизмат мекард ва ҳазорҳо байт суруд, ки ҳамааш то ба рӯзгор расидааст. Эҷоди ӯ ба таҳкими забони форсӣ ҳамчун забони адабӣ кумак кард.",
    achievements: [
      "Пешгоми шеъри нави форсӣ",
      "Шоири дарбори Сомониён",
      "Таъсири ба суннати баъдии адабиёти форсӣ",
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
    alternativeNames: ["Абӯ Алӣ ибни Сино", "Avicenna"],
    birthYear: "980",
    deathYear: "1037",
    birthPlace: "Афшона (наздики Бухоро)",
    deathPlace: "Ҳамадон",
    title: "Файласуф ва табиб",
    period: "Асри тиллои исломӣ",
    shortBio:
      "Донишманди бузург; «Ал-Қонун фи-т-тиб»-и ӯ қарнҳо ба таълими тибб таъсир гузошт.",
    biography:
      "Ибни Сино дар наздикии Бухоро таваллуд шуда, яке аз таъсиргузортарин андешмандони асри миёна гардид. Асари ӯ дар тибб, фалсафа ва илм ҳам дар ҷаҳони исломӣ ва ҳам дар Аврупо омӯзта мешуданд. «Ал-Қонун» қарнҳо ҳамчун китоби дарсӣ монд.",
    achievements: [
      "Муаллифи «Ал-Қонун фи-т-тиб»",
      "Саҳмгузории бузург ба фалсафа ва мантиқ",
      "Рамзи мероси илмии Осиёи Миёна",
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
    alternativeNames: ["Абулқосими Фирдавсӣ Тӯсӣ"],
    birthYear: "940",
    deathYear: "1020",
    birthPlace: "Тӯс, Хуросон",
    title: "Муаллифи «Шоҳнома»",
    period: "Давраи Ғазнавиён",
    shortBio:
      "Шоири «Шоҳнома» — ҳамосаи миллии ҷаҳони форсизабон.",
    biography:
      "Фирдавсӣ даҳоҳо сол «Шоҳнома» (Китоби подшоҳон)-ро суруд. Ин асар афсона ва таърихи пеш аз исломии Эронро ба забони форсӣ ҳифз кард. «Шоҳнома» ҳолаи Ҳовияти форсӣ шуд ва дар Эрон, Тоҷикистон, Афғонистон ва берун аз он эҳтиром мешавад.",
    achievements: [
      "Таълифи «Шоҳнома»",
      "Ҳифзи таърихи асотирӣи эронӣ ба форсӣ",
      "Таъсири фарҳангӣ дар ш2амоми минтақа",
    ],
    sources: ["Yarshater, Ehsan (ed.). Encyclopaedia Iranica"],
    status: "published",
  },
  {
    id: "5",
    slug: "spitamen",
    name: "Spitamenes",
    nameTj: "Спитамен",
    birthYear: "тақ. 370 п.м.",
    deathYear: "328 п.м.",
    title: "Сарвари суғдӣ",
    period: "Ахоманиён / Искандар",
    shortBio:
      "Муқовимат ба зидди Искандари Мақдунӣ дар Суғд ва Бохтар ро сарварӣ кард.",
    biography:
      "Спитамен сарвари суғдӣ буд, ки муқовимати сахт ба зидди Искандар дар Осиёи Миёна ташкил дод. Ҷанги ӯ Искандарро ба ҷанги дарозмуддат маҷбур сохт. Уй дар ҳофизаи таърихии минтақа ҳамчун рамзи муқовимати маҳаллӣ боқӣ мондааст.",
    achievements: ["Ташкили муқовимати зидди мақдунӣ дар Суғд"],
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
    birthPlace: "Наздики Кеш (Шаҳрисабз)",
    deathPlace: "Утрор",
    dynasty: "Темуриён",
    title: "Бунёдгузори империяи Темуриён",
    period: "Давраи Темуриён",
    shortBio:
      "Фатҳкунҷое, ки аз Самарқанд империяи бузург бино ниҳод.",
    biography:
      "Темур империяи васеъе бо пойтахти Самарқанд бунёд ниҳод. Зиддҳои ӯ харитаи сиёсӣ Осиёи Миёна ва Шарқи Миёнаро тагйир доданд. Давраи Темуриён ҳамчун асри шукуфоии меъморӣ, меъморӣ ва илм дар Самарқанд ва Ҳирот шинохта мешавад.",
    achievements: [
      "Бунёдгузории империяи Темуриён",
      "Табдили Самарқанд ба пойтахти ҷаҳонӣ",
      "Пуштибонӣ аз меъморӣ ва илм",
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
