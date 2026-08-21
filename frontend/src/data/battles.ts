export interface Battle {
  id: string
  slug: string
  name: string
  nameTj: string
  date: string
  location?: string
  period?: string
  shortDesc: string
  description: string
  participants?: string[]
  status: "published" | "draft"
}

export const battles: Battle[] = [
  {
    id: "1",
    slug: "talas",
    name: "Battle of Talas",
    nameTj: "Муҳорибаи Талос",
    date: "751",
    location: "Дарёи Талос",
    period: "Асри аввали миёна",
    shortDesc:
      "Аббосиён бар зидди Танг; тавозуни қувват дар Осиёи Миёна тагйир ёфт.",
    description:
      "Муҳорибаи Талос (751) байни ҳайатҳои Аббосӣ у Танг рух дод. Ғалабаи Аббосиён густариши ҳарбии Чинро ба Осиёи Миёна маҳдуд кард ва ба густариши санъати қоғоз ба ғарб низ рабт дода мешавад.",
    participants: ["Хилофати Аббосӣ", "Чини Танг", "Қарлуқҳо"],
    status: "published",
  },
  {
    id: "2",
    slug: "qatwan",
    name: "Battle of Qatwan",
    nameTj: "Муҳорибаи Қатвон",
    date: "1141",
    location: "Наздики Самарқанд",
    period: "Асри миёна",
    shortDesc: "Карахитоиҳо султон Санҷари салҷуқӣро шикаст доданд.",
    description:
      "Дар Қатвон (1141) қарахитоиҳо султон Санҷарро шикаст доданд. Ин галаба тавозуни қуввати Мовароуннаҳр у Хуросонро тагйир дод.",
    participants: ["Қарахитоиҳо", "Салҷуқиён"],
    status: "published",
  },
]

export function getBattleBySlug(slug: string) {
  return battles.find((b) => b.slug === slug)
}

export function getPublishedBattles() {
  return battles.filter((b) => b.status === "published")
}
