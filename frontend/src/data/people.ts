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

export const people: Person[] = [
  {
    id: "10",
    slug: "sadriddin-aini",
    name: "Sadriddin Aini",
    nameTj: "Садриддин Айнӣ",
    nameRu: "Садриддин Айни",
    birthYear: "1878",
    deathYear: "1954",
    birthPlace: "Соктаре (Ғиждувон)",
    deathPlace: "Душанбе",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Асосгузори адабиёти муосири тоҷик; Қаҳрамони Тоҷикистон (1997).",
    biography: "Садриддин Айнӣ асосгузори адабиёти муосири тоҷик аст.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/AyniSadriddin.jpg",
    status: "published"
  },
  {
    id: "11",
    slug: "bobojon-ghafurov",
    name: "Bobojon Ghafurov",
    nameTj: "Бобоҷон Ғафуров",
    nameRu: "Бободжан Гафуров",
    birthYear: "1908",
    deathYear: "1977",
    birthPlace: "Исфисор (Хуҷанд)",
    deathPlace: "Душанбе",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Таърихшинос; муаллифи китоби «Тоҷикон».",
    biography: "Бобоҷон Ғафуров муаллифи асари «Тоҷикон» аст.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/TajikistanP18-50Somoni-1999-donatedsrb_f_%28cropped%29.jpg",
    status: "published"
  },
  {
    id: "7",
    slug: "emomali-rahmon",
    name: "Emomali Rahmon",
    nameTj: "Эмомалӣ Раҳмон",
    nameRu: "Эмомали Рахмон",
    birthYear: "1952",
    birthPlace: "Данғара",
    title: "Президенти Ҷумҳурии Тоҷикистон",
    period: "Муосир",
    shortBio: "Президенти Ҷумҳурии Тоҷикистон; Қаҳрамони Тоҷикистон.",
    biography: "Эмомалӣ Раҳмон Президенти Ҷумҳурии Тоҷикистон аст.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Emomali_Rahmon_on_April_3%2C_2025_%28cropped%29.jpg/960px-Emomali_Rahmon_on_April_3%2C_2025_%28cropped%29.jpg",
    status: "published"
  },
  {
    id: "12",
    slug: "mirzo-tursunzoda",
    name: "Mirzo Tursunzoda",
    nameTj: "Мирзо Турсунзода",
    nameRu: "Мирзо Турсун-заде",
    birthYear: "1911",
    deathYear: "1977",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Шоири халқии Тоҷикистон.",
    biography: "Мирзо Турсунзода шоири халқии Тоҷикистон аст.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mirzo_Tursunzoda_portrait.jpg",
    status: "published"
  },
  {
    id: "8",
    slug: "nusratullo-makhsum",
    name: "Nusratullo Makhsum",
    nameTj: "Нусратулло Махсум",
    birthYear: "1881",
    deathYear: "1937",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Асосгузори давлатдории шӯравии тоҷик.",
    biography: "Нусратулло Махсум яке аз асосгузорони ҶШС Тоҷикистон аст.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/TJS_200_2010_obverse_%28cropped%29.jpg",
    status: "published"
  },
  {
    id: "9",
    slug: "shirinsho-shotemur",
    name: "Shirinsho Shotemur",
    nameTj: "Шириншо Шотемур",
    birthYear: "1899",
    deathYear: "1937",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Арбоби давлатӣ; Қаҳрамони Тоҷикистон.",
    biography: "Шириншо Шотемур арбоби давлатӣ буд.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Shirinsho_Shotemur_portrait_from_Javohiri_garonbaho.jpg",
    status: "published"
  },
  {
    id: "1",
    slug: "ismoili-somoni",
    name: "Ismoil Somoni",
    nameTj: "Исмоили Сомонӣ",
    nameRu: "Исмаил Самани",
    birthYear: "849",
    deathYear: "907",
    dynasty: "Сомониён",
    title: "Амири давлати Сомониён",
    period: "Давраи Сомониён",
    shortBio: "Асосгузори давлати мустақили Сомониён.",
    biography: "Исмоили Сомонӣ асосгузори давлати Сомониён аст.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Ismoili_Somoni_monument_Dushanbe_2026.jpg",
    status: "published"
  },
  {
    id: "2",
    slug: "rudaki",
    name: "Rudaki",
    nameTj: "Рӯдакӣ",
    nameRu: "Рудаки",
    birthYear: "858",
    deathYear: "941",
    period: "Давраи Сомониён",
    title: "Шоир",
    shortBio: "Нахустин шоири бузурги адабиёти форсии дарӣ.",
    biography: "Рӯдакӣ бунёнгузори шеъри классикии форсӣ аст.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Miniature_of_Rudaki_by_Hossein_Behzad.jpg",
    status: "published"
  },
  {
    id: "3",
    slug: "ibn-sina",
    name: "Ibn Sina",
    nameTj: "Ибни Сино",
    nameRu: "Ибн Сина",
    birthYear: "980",
    deathYear: "1037",
    title: "Донишманд ва табиб",
    period: "Асри миёна",
    shortBio: "Файласуф, табиб ва олими бузурги Осиёи Миёна.",
    biography: "Ибни Сино яке аз бузургтарин олимони асри миёна аст.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Avicenna_Drawing.jpg/960px-Avicenna_Drawing.jpg",
    status: "published"
  },
  {
    id: "4",
    slug: "ferdowsi",
    name: "Ferdowsi",
    nameTj: "Фирдавсӣ",
    nameRu: "Фирдоуси",
    birthYear: "940",
    deathYear: "1020",
    birthPlace: "Тус",
    deathPlace: "Тус",
    title: "Шоир",
    period: "Асри миёна",
    shortBio: "Муаллифи ҳамосаи Шоҳнома.",
    biography: "Фирдавсӣ Шоҳномаро тақрибан 30 сол навишт.",
    biographyRu: "Фирдоуси писал «Шахнаме» около 30 лет.",
    biographyEn: "Ferdowsi spent about 30 years writing the Shahnameh.",
    achievements: ["Муаллифи Шоҳнома"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Ferdowsi_statue.jpg",
    status: "published"
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
    biography: "Куруши Кабир империяи васеъро аз Осиёи Миёна то Баҳри Миёназамин бунёд кард.",
    biographyRu: "Кир Великий создал обширную империю от Средней Азии до Средиземного моря.",
    biographyEn: "Cyrus the Great built a vast empire from Central Asia to the Mediterranean.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Cyrus_the_Great_by_Jerome_David%2C_after_Alessandro_Varotari.jpg",
    status: "published"
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
    biography: "Темур империяи бузургеро дар Осиёи Миёна ва берун аз он бунёд кард.",
    biographyRu: "Тимур создал большую империю в Средней Азии и за её пределами.",
    biographyEn: "Timur built a large empire in Central Asia and beyond.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Portrait_of_Timur.jpg",
    status: "published"
  }
]

export function getPersonBySlug(slug: string) {
  return people.find((p) => p.slug === slug)
}

export function getPublishedPeople() {
  return people.filter((p) => p.status === "published")
}
