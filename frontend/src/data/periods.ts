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
    shortDesc: "Асри тиллои фарҳанги форсӣ дар Мовароуннаҳр.",
    description:
      "Дар давраи Сомониён Мовароуннаҳр ва қисмате Хуросон амалан мустақил шуданд. Бухоро пойтахт буд. Адабиёт ва идора ба забони форсӣ рушд кард; Рӯдакӣ ва Исмоили Сомонӣ аз рамзҳои ин аср анд.",
    status: "published",
  },
  {
    id: "2",
    slug: "timurid",
    name: "Timurid era",
    nameTj: "Давраи Темуриён",
    yearStart: "1370",
    yearEnd: "1507",
    shortDesc: "Империя бо маркази Самарқанд; шукуфоии санъат у меъморӣ.",
    description:
      "Темур давлати васеъе бино ниҳод. Самарқанд ва баъдтар Ҳирот марказҳои меъморӣ, китобат у илм гардиданд. Ин давра ба мероси фарҳангӣ ва сиёсӣ маъруф аст.",
    status: "published",
  },
  {
    id: "3",
    slug: "soviet",
    name: "Soviet period",
    nameTj: "Давраи Шӯравӣ",
    yearStart: "1924",
    yearEnd: "1991",
    shortDesc: "ҶСС Тоҷикистон дар ҳайати Иттиҳоди Шӯравӣ.",
    description:
      "Ҷумҳурии Шӯравии Сотсиалистии Тоҷикистон дар даҳаи 1920 ташкил ёфт. Ин давра саноаткорӣ, маориф у тагйироти иҷтимоӣро овард ва соли 1991 бо истиқлол анҷом ёфт.",
    status: "published",
  },
  {
    id: "4",
    slug: "independence",
    name: "Independence",
    nameTj: "Давраи истиқлол",
    yearStart: "1991",
    yearEnd: "ҳозир",
    shortDesc: "Ҷумҳурии Тоҷикистон ҳамчун давлати соҳиб.",
    description:
      "Аз 9 сентябри 1991 Тоҷикистон ҷумҳурии мустақил аст. Солҳои аввал бо ҷанги шаҳрвандӣ ҳамроҳ буданд; даҳоҳои баъдӣ ба бозсозӣ у бунёдгузории давлат нигаронида шудаанд.",
    status: "published",
  },
]

export function getPeriodBySlug(slug: string) {
  return periods.find((p) => p.slug === slug)
}

export function getPublishedPeriods() {
  return periods.filter((p) => p.status === "published")
}
