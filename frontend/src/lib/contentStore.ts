/** Local CRUD store for admin — persists to localStorage until backend API is live */

export type ContentType =
  | "people"
  | "events"
  | "places"
  | "periods"
  | "dynasties"
  | "battles"
  | "articles"

function key(type: ContentType) {
  return `histori_content_${type}`
}

export function loadContent<T>(type: ContentType, seed: T[]): T[] {
  try {
    const raw = localStorage.getItem(key(type))
    if (raw) return JSON.parse(raw) as T[]
  } catch {
    /* ignore */
  }
  localStorage.setItem(key(type), JSON.stringify(seed))
  return seed
}

export function saveContent<T>(type: ContentType, items: T[]) {
  localStorage.setItem(key(type), JSON.stringify(items))
}

export function upsertItem<T extends { id: string }>(
  type: ContentType,
  seed: T[],
  item: T
): T[] {
  const list = loadContent(type, seed)
  const idx = list.findIndex((x) => x.id === item.id)
  if (idx >= 0) list[idx] = item
  else list.push(item)
  saveContent(type, list)
  return list
}

export function deleteItem<T extends { id: string }>(
  type: ContentType,
  seed: T[],
  id: string
): T[] {
  const list = loadContent(type, seed).filter((x) => x.id !== id)
  saveContent(type, list)
  return list
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9Ѐ-ӿ]+/gi, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || `item-${Date.now()}`
}
