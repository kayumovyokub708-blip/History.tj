export interface QuizOption {
  id: string
  text: string
  correct: boolean
}

export interface QuizQuestion {
  id: string
  text: string
  explanation?: string
  options: QuizOption[]
}

export interface Quiz {
  id: string
  slug: string
  title: string
  description: string
  timeLimitSec: number
  xpReward: number
  questions: QuizQuestion[]
}

export const quizzes: Quiz[] = [
  {
    id: "1",
    slug: "daily",
    title: "Саволи рӯзона",
    description: "10 савол дарбораи таърихи Тоҷикистон у Осиёи Миёна",
    timeLimitSec: 300,
    xpReward: 100,
    questions: [
      {
        id: "q1",
        text: "Исмоили Сомонӣ кадом сулоларо намояндагӣ мекард?",
        explanation: "Уй асосгузори давлати мустақили Сомониён буд.",
        options: [
          { id: "a", text: "Сомониён", correct: true },
          { id: "b", text: "Темуриён", correct: false },
          { id: "c", text: "Ғазнавиён", correct: false },
          { id: "d", text: "Сафавиён", correct: false },
        ],
      },
      {
        id: "q2",
        text: "Пойтахти асосии давлати Сомониён кадом шаҳр буд?",
        explanation: "Дар замони Исмоили Сомонӣ Бухоро пойтахт буд.",
        options: [
          { id: "a", text: "Самарқанд", correct: false },
          { id: "b", text: "Бухоро", correct: true },
          { id: "c", text: "Балх", correct: false },
          { id: "d", text: "Марв", correct: false },
        ],
      },
      {
        id: "q3",
        text: "Ки «падари шеъри форсӣ» ҳисоб мешавад?",
        explanation: "Рӯдакӣ бунёнгузори шеъри классикии форсӣ ҳисоб меравад.",
        options: [
          { id: "a", text: "Фирдавсӣ", correct: false },
          { id: "b", text: "Рӯдакӣ", correct: true },
          { id: "c", text: "Ҳафиз", correct: false },
          { id: "d", text: "Саъдӣ", correct: false },
        ],
      },
      {
        id: "q4",
        text: "Ибни Сино асасан дар кадом соҳа маъруф аст?",
        explanation: "Уй ҳам табиб ва ҳам файласуф буд; «Ал-Қонун» асари маъруфи ӯст.",
        options: [
          { id: "a", text: "Тибб ва фалсафа", correct: true },
          { id: "b", text: "Шеър", correct: false },
          { id: "c", text: "Низом", correct: false },
          { id: "d", text: "Мусиқӣ", correct: false },
        ],
      },
      {
        id: "q5",
        text: "«Шоҳнома» асари кӣст?",
        explanation: "Фирдавсӣ ҳамосаи миллии «Шоҳнома»ро суруд.",
        options: [
          { id: "a", text: "Рӯдакӣ", correct: false },
          { id: "b", text: "Фирдавсӣ", correct: true },
          { id: "c", text: "Низомӣ", correct: false },
          { id: "d", text: "Умари Хайём", correct: false },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "samanid",
    title: "Давлати Сомониён",
    description: "Дониши худро дарбораи давраи Сомониён бисеҷед",
    timeLimitSec: 480,
    xpReward: 80,
    questions: [
      {
        id: "s1",
        text: "Сулолаи Сомониён тақрибан дар кадом асрҳо ҳукмронӣ ранд?",
        options: [
          { id: "a", text: "Садаҳои VII–VIII", correct: false },
          { id: "b", text: "Садаҳои IX–X", correct: true },
          { id: "c", text: "Садаҳои XII–XIII", correct: false },
          { id: "d", text: "Садаҳои XV–XVI", correct: false },
        ],
      },
      {
        id: "s2",
        text: "Дар замони Исмоили Сомонӣ кадом шаҳр пойтахти асосӣ буд?",
        options: [
          { id: "a", text: "Самарқанд", correct: false },
          { id: "b", text: "Бухоро", correct: true },
          { id: "c", text: "Ҳирот", correct: false },
          { id: "d", text: "Нейшобур", correct: false },
        ],
      },
      {
        id: "s3",
        text: "Рӯдакӣ бештар ҳамчун кӣ маъруф аст?",
        options: [
          { id: "a", text: "Сарлашкар", correct: false },
          { id: "b", text: "Шоир", correct: true },
          { id: "c", text: "Тоҷир", correct: false },
          { id: "d", text: "Халифа", correct: false },
        ],
      },
    ],
  },
]

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug)
}
