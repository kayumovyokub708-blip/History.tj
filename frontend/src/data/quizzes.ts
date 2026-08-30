export type LocalizedText = {
  tg: string
  ru: string
  en: string
}

export interface QuizOption {
  id: string
  text: LocalizedText
  correct: boolean
}

export type QuizDifficulty = "easy" | "medium" | "hard"

export interface QuizQuestion {
  id: string
  text: LocalizedText
  explanation?: LocalizedText
  difficulty?: QuizDifficulty
  options: QuizOption[]
}

export interface Quiz {
  id: string
  slug: string
  title: LocalizedText
  description: LocalizedText
  timeLimitSec: number
  xpReward: number
  questions: QuizQuestion[]
}

export const quizzes: Quiz[] = [
  {
    id: "1",
    slug: "daily",
    title: {
      tg: "Саволи рӯзона",
      ru: "Вопрос дня",
      en: "Daily Quiz",
    },
    description: {
      tg: "10 савол дар бораи таърихи Тоҷикистон ва Осиёи Миёна",
      ru: "10 вопросов по истории Таджикистана и Средней Азии",
      en: "10 questions on the history of Tajikistan and Central Asia",
    },
    timeLimitSec: 300,
    xpReward: 100,
    questions: [
      {
        id: "q1",
        text: {
          tg: "Исмоили Сомонӣ кадом сулоларо намояндагӣ мекард?",
          ru: "Какую династию представлял Исмаил Самани?",
          en: "Which dynasty did Ismail Samani represent?",
        },
        explanation: {
          tg: "Ӯ асосгузори давлати мустақили Сомониён буд.",
          ru: "Он был основателем независимого государства Саманидов.",
          en: "He was the founder of the independent Samanid state.",
        },
        difficulty: "easy",
        options: [
          {
            id: "a",
            text: { tg: "Сомониён", ru: "Саманиды", en: "Samanids" },
            correct: true,
          },
          {
            id: "b",
            text: { tg: "Темуриён", ru: "Тимуриды", en: "Timurids" },
            correct: false,
          },
          {
            id: "c",
            text: { tg: "Ғазнавиён", ru: "Газневиды", en: "Ghaznavids" },
            correct: false,
          },
          {
            id: "d",
            text: { tg: "Сафавиён", ru: "Сефевиды", en: "Safavids" },
            correct: false,
          },
        ],
      },
      {
        id: "q2",
        text: {
          tg: "Пойтахти асосии давлати Сомониён кадом шаҳр буд?",
          ru: "Какой город был главной столицей государства Саманидов?",
          en: "Which city was the main capital of the Samanid state?",
        },
        explanation: {
          tg: "Дар замони Исмоили Сомонӣ Бухоро пойтахт буд.",
          ru: "При Исмаиле Самани столицей была Бухара.",
          en: "Under Ismail Samani, Bukhara was the capital.",
        },
        difficulty: "easy",
        options: [
          {
            id: "a",
            text: { tg: "Самарқанд", ru: "Самарканд", en: "Samarkand" },
            correct: false,
          },
          {
            id: "b",
            text: { tg: "Бухоро", ru: "Бухара", en: "Bukhara" },
            correct: true,
          },
          {
            id: "c",
            text: { tg: "Балх", ru: "Балх", en: "Balkh" },
            correct: false,
          },
          {
            id: "d",
            text: { tg: "Марв", ru: "Мерв", en: "Merv" },
            correct: false,
          },
        ],
      },
      {
        id: "q3",
        text: {
          tg: "Ки «падари шеъри форсӣ» ҳисоб мешавад?",
          ru: "Кого считают «отцом персидской поэзии»?",
          en: "Who is considered the “father of Persian poetry”?",
        },
        explanation: {
          tg: "Рӯдакӣ бунёнгузори шеъри классикии форсӣ ҳисоб меравад.",
          ru: "Рудаки считается основоположником классической персидской поэзии.",
          en: "Rudaki is regarded as the founder of classical Persian poetry.",
        },
        difficulty: "medium",
        options: [
          {
            id: "a",
            text: { tg: "Фирдавсӣ", ru: "Фирдоуси", en: "Ferdowsi" },
            correct: false,
          },
          {
            id: "b",
            text: { tg: "Рӯдакӣ", ru: "Рудаки", en: "Rudaki" },
            correct: true,
          },
          {
            id: "c",
            text: { tg: "Ҳофиз", ru: "Хафиз", en: "Hafez" },
            correct: false,
          },
          {
            id: "d",
            text: { tg: "Саъдӣ", ru: "Саади", en: "Saadi" },
            correct: false,
          },
        ],
      },
      {
        id: "q4",
        text: {
          tg: "Ибни Сино асасан дар кадом соҳа маъруф аст?",
          ru: "В какой области в основном известен Ибн Сина?",
          en: "In which field is Ibn Sina mainly known?",
        },
        explanation: {
          tg: "Ӯ ҳам табиб ва ҳам файласуф буд; «Ал-Қонун» асари маъруфи ӯст.",
          ru: "Он был и врачом, и философом; «Канон врачебной науки» — его знаменитый труд.",
          en: "He was both a physician and a philosopher; The Canon of Medicine is his famous work.",
        },
        difficulty: "easy",
        options: [
          {
            id: "a",
            text: {
              tg: "Тибб ва фалсафа",
              ru: "Медицина и философия",
              en: "Medicine and philosophy",
            },
            correct: true,
          },
          {
            id: "b",
            text: { tg: "Шеър", ru: "Поэзия", en: "Poetry" },
            correct: false,
          },
          {
            id: "c",
            text: { tg: "Низом", ru: "Военное дело", en: "Military affairs" },
            correct: false,
          },
          {
            id: "d",
            text: { tg: "Мусиқӣ", ru: "Музыка", en: "Music" },
            correct: false,
          },
        ],
      },
      {
        id: "q5",
        text: {
          tg: "«Шоҳнома» асари кӣст?",
          ru: "Кто автор «Шахнаме»?",
          en: "Who wrote the Shahnameh?",
        },
        explanation: {
          tg: "Фирдавсӣ ҳамосаи миллии «Шоҳнома»ро суруд.",
          ru: "Фирдоуси создал национальный эпос «Шахнаме».",
          en: "Ferdowsi composed the national epic Shahnameh.",
        },
        difficulty: "medium",
        options: [
          {
            id: "a",
            text: { tg: "Рӯдакӣ", ru: "Рудаки", en: "Rudaki" },
            correct: false,
          },
          {
            id: "b",
            text: { tg: "Фирдавсӣ", ru: "Фирдоуси", en: "Ferdowsi" },
            correct: true,
          },
          {
            id: "c",
            text: { tg: "Низомӣ", ru: "Низами", en: "Nizami" },
            correct: false,
          },
          {
            id: "d",
            text: { tg: "Умари Хайём", ru: "Омар Хайям", en: "Omar Khayyam" },
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "samanid",
    title: {
      tg: "Давлати Сомониён",
      ru: "Государство Саманидов",
      en: "The Samanid State",
    },
    description: {
      tg: "Дониши худро дар бораи давраи Сомониён бисанҷед",
      ru: "Проверьте знания о периоде Саманидов",
      en: "Test your knowledge of the Samanid period",
    },
    timeLimitSec: 480,
    xpReward: 80,
    questions: [
      {
        id: "s1",
        text: {
          tg: "Сулолаи Сомониён тақрибан дар кадом асрҳо ҳукмронӣ ранд?",
          ru: "В каких примерно веках правила династия Саманидов?",
          en: "In roughly which centuries did the Samanid dynasty rule?",
        },
        difficulty: "medium",
        options: [
          {
            id: "a",
            text: {
              tg: "Садаҳои VII–VIII",
              ru: "VII–VIII века",
              en: "7th–8th centuries",
            },
            correct: false,
          },
          {
            id: "b",
            text: {
              tg: "Садаҳои IX–X",
              ru: "IX–X века",
              en: "9th–10th centuries",
            },
            correct: true,
          },
          {
            id: "c",
            text: {
              tg: "Садаҳои XII–XIII",
              ru: "XII–XIII века",
              en: "12th–13th centuries",
            },
            correct: false,
          },
          {
            id: "d",
            text: {
              tg: "Садаҳои XV–XVI",
              ru: "XV–XVI века",
              en: "15th–16th centuries",
            },
            correct: false,
          },
        ],
      },
      {
        id: "s2",
        text: {
          tg: "Дар замони Исмоили Сомонӣ кадом шаҳр пойтахти асосӣ буд?",
          ru: "Какой город был главной столицей при Исмаиле Самани?",
          en: "Which city was the main capital under Ismail Samani?",
        },
        difficulty: "easy",
        options: [
          {
            id: "a",
            text: { tg: "Самарқанд", ru: "Самарканд", en: "Samarkand" },
            correct: false,
          },
          {
            id: "b",
            text: { tg: "Бухоро", ru: "Бухара", en: "Bukhara" },
            correct: true,
          },
          {
            id: "c",
            text: { tg: "Ҳирот", ru: "Герат", en: "Herat" },
            correct: false,
          },
          {
            id: "d",
            text: { tg: "Нейшобур", ru: "Нишапур", en: "Nishapur" },
            correct: false,
          },
        ],
      },
      {
        id: "s3",
        text: {
          tg: "Рӯдакӣ бештар ҳамчун кӣ маъруф аст?",
          ru: "Чем более всего известен Рудаки?",
          en: "What is Rudaki best known as?",
        },
        difficulty: "easy",
        options: [
          {
            id: "a",
            text: { tg: "Сарлашкар", ru: "Полководец", en: "General" },
            correct: false,
          },
          {
            id: "b",
            text: { tg: "Шоир", ru: "Поэт", en: "Poet" },
            correct: true,
          },
          {
            id: "c",
            text: { tg: "Тоҷир", ru: "Купец", en: "Merchant" },
            correct: false,
          },
          {
            id: "d",
            text: { tg: "Халифа", ru: "Халиф", en: "Caliph" },
            correct: false,
          },
        ],
      },
    ],
  },
]

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug)
}
