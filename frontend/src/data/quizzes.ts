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
    title: "Daily Quiz",
    description: "10 questions about Tajik and Central Asian history",
    timeLimitSec: 300,
    xpReward: 100,
    questions: [
      {
        id: "q1",
        text: "Исмоили Сомонӣ кадом сулоларо намояндагӣ мекард?",
        explanation: "Уй асосгузори давлати Сомониён буд.",
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
        options: [
          { id: "a", text: "Фирдавсӣ", correct: false },
          { id: "b", text: "Рӯдакӣ", correct: true },
          { id: "c", text: "Ҳафиз", correct: false },
          { id: "d", text: "Саадӣ", correct: false },
        ],
      },
      {
        id: "q4",
        text: "Ибни Сино асасан дар кадом соҳа маъруф аст?",
        options: [
          { id: "a", text: "Тибб ва фалсафа", correct: true },
          { id: "b", text: "Шеър", correct: false },
          { id: "c", text: "Низом", correct: false },
          { id: "d", text: "Мусиқӣ", correct: false },
        ],
      },
      {
        id: "q5",
        text: "Шоҳнома асари кӣст?",
        options: [
          { id: "a", text: "Рӯдакӣ", correct: false },
          { id: "b", text: "Фирдавсӣ", correct: true },
          { id: "c", text: "Низомӣ", correct: false },
          { id: "d", text: "Омар Хайём", correct: false },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "samanid",
    title: "Samanid Empire",
    description: "Test your knowledge of the Samanid period",
    timeLimitSec: 480,
    xpReward: 80,
    questions: [
      {
        id: "s1",
        text: "The Samanid dynasty ruled roughly in which centuries?",
        options: [
          { id: "a", text: "7th–8th", correct: false },
          { id: "b", text: "9th–10th", correct: true },
          { id: "c", text: "12th–13th", correct: false },
          { id: "d", text: "15th–16th", correct: false },
        ],
      },
      {
        id: "s2",
        text: "Which city was the main capital under Ismail Samani?",
        options: [
          { id: "a", text: "Samarkand", correct: false },
          { id: "b", text: "Bukhara", correct: true },
          { id: "c", text: "Herat", correct: false },
          { id: "d", text: "Nishapur", correct: false },
        ],
      },
      {
        id: "s3",
        text: "Rudaki is best known as:",
        options: [
          { id: "a", text: "A general", correct: false },
          { id: "b", text: "A poet", correct: true },
          { id: "c", text: "A merchant", correct: false },
          { id: "d", text: "A caliph", correct: false },
        ],
      },
    ],
  },
]

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug)
}
