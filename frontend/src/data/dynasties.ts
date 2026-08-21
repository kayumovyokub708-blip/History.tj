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
    capital: "Бухоро",
    shortDesc: "Сулолаи форсӣзабони Мовароуннаҳр у Хуросон.",
    description:
      "Сомониён аз Мовароуннаҳр бо пойтахти Бухоро ҳукмронӣ ранданд. Онҳо ба эҳёи забон у фарҳанги форсӣ ва шахсиятҳое ҳамчун Исмоили Сомонӣ у Рӯдакӣ рабт дода мешаванд.",
    status: "published",
  },
  {
    id: "2",
    slug: "timurid-dynasty",
    name: "Timurid dynasty",
    nameTj: "Сулолаи Темуриён",
    yearStart: "1370",
    yearEnd: "1507",
    capital: "Самарқанд",
    shortDesc: "Бунёдгузориш Темур; империя у мероси фарҳангӣ.",
    description:
      "Темуриён аз маркази Самарқанд ҳудуди васеъеро идора мекарданд. Пуштибонии онҳо ба меъморӣ у санъат дар Осиёи Миёна у Эрон асари пойдор гузошт.",
    status: "published",
  },
  {
    id: "3",
    slug: "manghit",
    name: "Manghit dynasty",
    nameTj: "Сулолаи Манғит",
    yearStart: "1785",
    yearEnd: "1920",
    capital: "Бухоро",
    shortDesc: "Хонадони ҳокимрони Амирати Бухоро.",
    description:
      "Сулолаи Манғит Амирати Бухороро то аввали давраи Шӯравӣ идора мекард. Дар охири садаи XIX амират зери ҳимояти Русия қарор гирифт.",
    status: "published",
  },
]

export function getDynastyBySlug(slug: string) {
  return dynasties.find((d) => d.slug === slug)
}

export function getPublishedDynasties() {
  return dynasties.filter((d) => d.status === "published")
}
