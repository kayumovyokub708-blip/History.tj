export type LocalizedText = {
  tg: string
  ru: string
  en: string
}

export type ExpeditionDifficulty = "easy" | "medium" | "hard"

export interface MissionOption {
  id: string
  text: LocalizedText
  correct: boolean
}

export interface Mission {
  id: string
  title: LocalizedText
  story: LocalizedText
  question: LocalizedText
  options: MissionOption[]
  hint?: LocalizedText
}

export interface Expedition {
  id: string
  slug: string
  titleKey: string
  periodKey: string
  difficulty: ExpeditionDifficulty
  xp: number
  time: string
  status: "available" | "locked"
  missions: Mission[]
}

export const expeditions: Expedition[] = [
  {
    id: "1",
    slug: "manuscript",
    titleKey: "manuscript",
    periodKey: "samanid",
    difficulty: "medium",
    xp: 500,
    time: "45 min",
    status: "available",
    missions: [
      {
        id: "m1",
        title: {
          tg: "Китобхонаи Бухоро",
          ru: "Библиотека Бухары",
          en: "Library of Bukhara",
        },
        story: {
          tg: "Шумо дар Бухоро ҳастед. Дар китобхонаи қадим дастхатҳои гумшуда пинҳон шудаанд.",
          ru: "Вы в Бухаре. В древней библиотеке спрятаны утраченные рукописи.",
          en: "You are in Bukhara. Lost manuscripts are hidden in the ancient library.",
        },
        question: {
          tg: "Пойтахти давлати Сомониён кадом шаҳр буд?",
          ru: "Какой город был столицей государства Саманидов?",
          en: "Which city was the capital of the Samanid state?",
        },
        options: [
          { id: "a", text: { tg: "Самарқанд", ru: "Самарканд", en: "Samarkand" }, correct: false },
          { id: "b", text: { tg: "Бухоро", ru: "Бухара", en: "Bukhara" }, correct: true },
          { id: "c", text: { tg: "Балх", ru: "Балх", en: "Balkh" }, correct: false },
          { id: "d", text: { tg: "Марв", ru: "Мерв", en: "Merv" }, correct: false },
        ],
      },
      {
        id: "m2",
        title: {
          tg: "Шоири дарбор",
          ru: "Придворный поэт",
          en: "Court poet",
        },
        story: {
          tg: "Дар дарбори Сомониён шоире зиндагӣ мекард, ки ӯро падари шеъри форсӣ меноманд.",
          ru: "При дворе Саманидов жил поэт, которого называют отцом персидской поэзии.",
          en: "At the Samanid court lived a poet called the father of Persian poetry.",
        },
        question: {
          tg: "Ки «падари шеъри форсӣ» ҳисоб мешавад?",
          ru: "Кого считают «отцом персидской поэзии»?",
          en: "Who is considered the father of Persian poetry?",
        },
        options: [
          { id: "a", text: { tg: "Фирдавсӣ", ru: "Фирдоуси", en: "Ferdowsi" }, correct: false },
          { id: "b", text: { tg: "Рӯдакӣ", ru: "Рудаки", en: "Rudaki" }, correct: true },
          { id: "c", text: { tg: "Ҳофиз", ru: "Хафиз", en: "Hafez" }, correct: false },
          { id: "d", text: { tg: "Саъдӣ", ru: "Саади", en: "Saadi" }, correct: false },
        ],
      },
      {
        id: "m3",
        title: {
          tg: "Асосгузори давлат",
          ru: "Основатель государства",
          en: "Founder of the state",
        },
        story: {
          tg: "Яке аз ҳокимони Сомонӣ давлати мустақилро мустаҳкам кард.",
          ru: "Один из правителей Саманидов укрепил независимое государство.",
          en: "One Samanid ruler strengthened the independent state.",
        },
        question: {
          tg: "Исмоили Сомонӣ кадом сулоларо намояндагӣ мекард?",
          ru: "Какую династию представлял Исмаил Самани?",
          en: "Which dynasty did Ismail Samani represent?",
        },
        options: [
          { id: "a", text: { tg: "Сомониён", ru: "Саманиды", en: "Samanids" }, correct: true },
          { id: "b", text: { tg: "Темуриён", ru: "Тимуриды", en: "Timurids" }, correct: false },
          { id: "c", text: { tg: "Ғазнавиён", ru: "Газневиды", en: "Ghaznavids" }, correct: false },
          { id: "d", text: { tg: "Сафавиён", ru: "Сефевиды", en: "Safavids" }, correct: false },
        ],
      },
      {
        id: "m4",
        title: {
          tg: "Дастхати тиллоӣ",
          ru: "Золотая рукопись",
          en: "Golden manuscript",
        },
        story: {
          tg: "Шумо дастхатеро ёфтед. Барои кушодани он дониш лозим аст.",
          ru: "Вы нашли рукопись. Чтобы открыть её, нужны знания.",
          en: "You found a manuscript. Knowledge is needed to open it.",
        },
        question: {
          tg: "Сулолаи Сомониён тақрибан дар кадом асрҳо ҳукмронӣ мекард?",
          ru: "В каких примерно веках правила династия Саманидов?",
          en: "In roughly which centuries did the Samanids rule?",
        },
        options: [
          { id: "a", text: { tg: "VII–VIII", ru: "VII–VIII", en: "7th–8th" }, correct: false },
          { id: "b", text: { tg: "IX–X", ru: "IX–X", en: "9th–10th" }, correct: true },
          { id: "c", text: { tg: "XII–XIII", ru: "XII–XIII", en: "12th–13th" }, correct: false },
          { id: "d", text: { tg: "XV–XVI", ru: "XV–XVI", en: "15th–16th" }, correct: false },
        ],
      },
      {
        id: "m5",
        title: {
          tg: "Бозгашт бо ганҷ",
          ru: "Возвращение с сокровищем",
          en: "Return with the treasure",
        },
        story: {
          tg: "Охирин имтиҳон: дониши шумо дар бораи илми асри Сомониён.",
          ru: "Последнее испытание: ваши знания о науке эпохи Саманидов.",
          en: "Final test: your knowledge of Samanid-era learning.",
        },
        question: {
          tg: "Ибни Сино асасан дар кадом соҳа маъруф аст?",
          ru: "В какой области в основном известен Ибн Сина?",
          en: "In which field is Ibn Sina mainly known?",
        },
        options: [
          {
            id: "a",
            text: { tg: "Тибб ва фалсафа", ru: "Медицина и философия", en: "Medicine and philosophy" },
            correct: true,
          },
          { id: "b", text: { tg: "Шеър", ru: "Поэзия", en: "Poetry" }, correct: false },
          { id: "c", text: { tg: "Низом", ru: "Военное дело", en: "Military" }, correct: false },
          { id: "d", text: { tg: "Мусиқӣ", ru: "Музыка", en: "Music" }, correct: false },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "capital",
    titleKey: "capital",
    periodKey: "samanidYears",
    difficulty: "easy",
    xp: 300,
    time: "30 min",
    status: "available",
    missions: [
      {
        id: "c1",
        title: {
          tg: "Дарвозаи шаҳр",
          ru: "Городские ворота",
          en: "City gates",
        },
        story: {
          tg: "Шумо ба пойтахти Сомониён наздик мешавед.",
          ru: "Вы приближаетесь к столице Саманидов.",
          en: "You approach the Samanid capital.",
        },
        question: {
          tg: "Пойтахти асосии Сомониён кадом буд?",
          ru: "Какая была главная столица Саманидов?",
          en: "What was the main Samanid capital?",
        },
        options: [
          { id: "a", text: { tg: "Бухоро", ru: "Бухара", en: "Bukhara" }, correct: true },
          { id: "b", text: { tg: "Самарқанд", ru: "Самарканд", en: "Samarkand" }, correct: false },
          { id: "c", text: { tg: "Хуҷанд", ru: "Худжанд", en: "Khujand" }, correct: false },
          { id: "d", text: { tg: "Панҷакент", ru: "Пенджикент", en: "Panjakent" }, correct: false },
        ],
      },
      {
        id: "c2",
        title: {
          tg: "Мадрасаи қадим",
          ru: "Древнее медресе",
          en: "Ancient madrasa",
        },
        story: {
          tg: "Дар шаҳр маркази илм буд.",
          ru: "В городе был центр науки.",
          en: "The city was a centre of learning.",
        },
        question: {
          tg: "Исмоили Сомонӣ кадом сулоларо намояндагӣ мекард?",
          ru: "Какую династию представлял Исмаил Самани?",
          en: "Which dynasty did Ismail Samani represent?",
        },
        options: [
          { id: "a", text: { tg: "Сомониён", ru: "Саманиды", en: "Samanids" }, correct: true },
          { id: "b", text: { tg: "Темуриён", ru: "Тимуриды", en: "Timurids" }, correct: false },
          { id: "c", text: { tg: "Муғулҳо", ru: "Монголы", en: "Mongols" }, correct: false },
          { id: "d", text: { tg: "Арабҳо", ru: "Арабы", en: "Arabs" }, correct: false },
        ],
      },
      {
        id: "c3",
        title: {
          tg: "Бозори абрешим",
          ru: "Шёлковый базар",
          en: "Silk bazaar",
        },
        story: {
          tg: "Тиҷорат шаҳрро бой кард.",
          ru: "Торговля сделала город богатым.",
          en: "Trade made the city rich.",
        },
        question: {
          tg: "Рӯдакӣ бештар ҳамчун кӣ маъруф аст?",
          ru: "Чем более всего известен Рудаки?",
          en: "What is Rudaki best known as?",
        },
        options: [
          { id: "a", text: { tg: "Сарлашкар", ru: "Полководец", en: "General" }, correct: false },
          { id: "b", text: { tg: "Шоир", ru: "Поэт", en: "Poet" }, correct: true },
          { id: "c", text: { tg: "Тоҷир", ru: "Купец", en: "Merchant" }, correct: false },
          { id: "d", text: { tg: "Халифа", ru: "Халиф", en: "Caliph" }, correct: false },
        ],
      },
      {
        id: "c4",
        title: {
          tg: "Қасри ҳоким",
          ru: "Дворец правителя",
          en: "Ruler’s palace",
        },
        story: {
          tg: "Шумо ба қаср расидед. Охирин савол.",
          ru: "Вы дошли до дворца. Последний вопрос.",
          en: "You reached the palace. Final question.",
        },
        question: {
          tg: "«Шоҳнома» асари кӣст?",
          ru: "Кто автор «Шахнаме»?",
          en: "Who wrote the Shahnameh?",
        },
        options: [
          { id: "a", text: { tg: "Рӯдакӣ", ru: "Рудаки", en: "Rudaki" }, correct: false },
          { id: "b", text: { tg: "Фирдавсӣ", ru: "Фирдоуси", en: "Ferdowsi" }, correct: true },
          { id: "c", text: { tg: "Низомӣ", ru: "Низами", en: "Nizami" }, correct: false },
          { id: "d", text: { tg: "Умари Хайём", ru: "Омар Хайям", en: "Omar Khayyam" }, correct: false },
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "silk-road",
    titleKey: "silkRoad",
    periodKey: "medieval",
    difficulty: "hard",
    xp: 750,
    time: "60 min",
    status: "locked",
    missions: [],
  },
]

export function getExpeditionBySlug(slug: string): Expedition | undefined {
  return expeditions.find((e) => e.slug === slug)
}

export function getAvailableExpeditions(): Expedition[] {
  return expeditions.filter((e) => e.status === "available")
}
