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
    location: "Talas River",
    period: "Early medieval",
    shortDesc: "Abbasid vs Tang; shaped Central Asian power balance.",
    description:
      "The Battle of Talas (751) between Abbasid and Tang forces limited Chinese military expansion into Central Asia and is linked in tradition to the westward spread of paper-making.",
    participants: ["Abbasid Caliphate", "Tang China", "Karluks"],
    status: "published",
  },
  {
    id: "2",
    slug: "qatwan",
    name: "Battle of Qatwan",
    nameTj: "Муҳорибаи Қатвон",
    date: "1141",
    location: "Near Samarkand",
    period: "Medieval",
    shortDesc: "Qara Khitai defeated the Seljuk sultan Sanjar.",
    description:
      "At Qatwan (1141) the Qara Khitai defeated Sultan Sanjar, a major shift in the politics of Transoxiana and Khorasan.",
    participants: ["Qara Khitai", "Seljuks"],
    status: "published",
  },
]

export function getBattleBySlug(slug: string) {
  return battles.find((b) => b.slug === slug)
}

export function getPublishedBattles() {
  return battles.filter((b) => b.status === "published")
}
