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
  image?: string
  status: "published" | "draft"
}
