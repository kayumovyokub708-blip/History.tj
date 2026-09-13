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

const opt = (
  id: string,
  tg: string,
  ru: string,
  en: string,
  correct: boolean
): QuizOption => ({ id, text: { tg, ru, en }, correct })

const q = (
  id: string,
  text: LocalizedText,
  options: QuizOption[],
  difficulty: QuizDifficulty = "medium",
  explanation?: LocalizedText
): QuizQuestion => ({ id, text, options, difficulty, explanation })

const historyQuestions: QuizQuestion[] = [
  q("h1", { tg: "Исмоили Сомонӣ дар кадом сол вафот кард?", ru: "В каком году умер Исмаил Самани?", en: "In which year did Ismail Samani die?" }, [opt("a", "907", "907", "907", true), opt("b", "875", "875", "875", false), opt("c", "999", "999", "999", false), opt("d", "819", "819", "819", false)], "hard"),
  q("h2", { tg: "Кадом шаҳр пойтахти давлати Сомониён буд?", ru: "Какой город был столицей государства Саманидов?", en: "Which city was the capital of the Samanid state?" }, [opt("a", "Самарқанд", "Самарканд", "Samarkand", false), opt("b", "Бухоро", "Бухара", "Bukhara", true), opt("c", "Хуҷанд", "Худжанд", "Khujand", false), opt("d", "Марв", "Мерв", "Merv", false)], "easy"),
  q("h3", { tg: "Рӯдакӣ бо кадом унвон машҳур аст?", ru: "Под каким титулом известен Рудаки?", en: "By what title is Rudaki best known?" }, [opt("a", "Подшоҳи шоирон", "Царь поэтов", "King of poets", false), opt("b", "Одам-ул-шуаро (падарӣ шоирон)", "Отец поэтов", "Father of poets", true), opt("c", "Шоҳи Мовароуннаҳр", "Шах Мавераннахра", "Shah of Transoxiana", false), opt("d", "Ҳаким", "Хакім", "Sage", false)], "medium"),
  q("h4", { tg: "Давлати Сомониён тақрибан то кадом сол вуҷуд дошт?", ru: "До какого примерно года существовало государство Саманидов?", en: "Until roughly which year did the Samanid state exist?" }, [opt("a", "875", "875", "875", false), opt("b", "999", "999", "999", true), opt("c", "1220", "1220", "1220", false), opt("d", "1500", "1500", "1500", false)], "medium"),
  q("h5", { tg: "Абуалӣ ибни Сино асосан бо кадом илм машҳур аст?", ru: "Чем в первую очередь известен Авиценна (Ибн Сина)?", en: "What is Avicenna (Ibn Sina) primarily known for?" }, [opt("a", "Тиб ва фалсафа", "Медицина и философия", "Medicine and philosophy", true), opt("b", "Меъморӣ", "Архитектура", "Architecture", false), opt("c", "Ҷанг", "Военное дело", "Warfare", false), opt("d", "Тиҷорат", "Торговля", "Trade", false)], "easy"),
  q("h6", { tg: "«Шоҳнома»-ро кӣ навиштааст?", ru: "Кто написал «Шахнаме»?", en: "Who wrote the Shahnameh?" }, [opt("a", "Рӯдакӣ", "Рудаки", "Rudaki", false), opt("b", "Фирдавсӣ", "Фирдоуси", "Ferdowsi", true), opt("c", "Ҳофиз", "Хафиз", "Hafez", false), opt("d", "Саъдӣ", "Саади", "Saadi", false)], "easy"),
  q("h7", { tg: "Тоҷикистон кай истиқлол эълон кард?", ru: "Когда Таджикистан провозгласил независимость?", en: "When did Tajikistan declare independence?" }, [opt("a", "9 сентябри 1991", "9 сентября 1991", "9 September 1991", true), opt("b", "9 майи 1945", "9 мая 1945", "9 May 1945", false), opt("c", "24 августи 1991", "24 августа 1991", "24 August 1991", false), opt("d", "1 январи 2000", "1 января 2000", "1 January 2000", false)], "easy"),
  q("h8", { tg: "Қалъаи Ҳисор бо кадом давра алоқаманд аст?", ru: "С каким периодом связан Гиссарский форт?", en: "Which period is the Hisor Fortress associated with?" }, [opt("a", "Асри биринҷӣ ва давраҳои баъдӣ", "Бронзовый век и поздние эпохи", "Bronze Age and later periods", true), opt("b", "Танҳо асри XX", "Только XX век", "Only the 20th century", false), opt("c", "Танҳо давраи шӯравӣ", "Только советский период", "Only the Soviet period", false), opt("d", "Танҳо асри II то милод", "Только II век до н.э.", "Only the 2nd century BCE", false)], "hard"),
  q("h9", { tg: "Амир Темур пойтахти худро кадом шаҳр қарор дод?", ru: "Какой город Амир Тимур сделал столицей?", en: "Which city did Amir Timur make his capital?" }, [opt("a", "Бухоро", "Бухара", "Bukhara", false), opt("b", "Самарқанд", "Самарканд", "Samarkand", true), opt("c", "Ҳирот", "Герат", "Herat", false), opt("d", "Қашғар", "Кашгар", "Kashgar", false)], "medium"),
  q("h10", { tg: "Забони давлатии Тоҷикистон кадом аст?", ru: "Государственный язык Таджикистана?", en: "State language of Tajikistan?" }, [opt("a", "Русӣ", "Русский", "Russian", false), opt("b", "Тоҷикӣ", "Таджикский", "Tajik", true), opt("c", "Ӯзбекӣ", "Узбекский", "Uzbek", false), opt("d", "Форсӣ", "Персидский", "Persian", false)], "easy"),
  q("h11", { tg: "Куруши Кабир асосгузори кадом империя буд?", ru: "Основателем какой империи был Кир Великий?", en: "Which empire did Cyrus the Great found?" }, [opt("a", "Империяи Ҳахоманишиён", "Империя Ахеменидов", "Achaemenid Empire", true), opt("b", "Империяи Рум", "Римская империя", "Roman Empire", false), opt("c", "Империяи Усмонӣ", "Османская империя", "Ottoman Empire", false), opt("d", "Империяи Муғул", "Монгольская империя", "Mongol Empire", false)], "medium"),
  q("h12", { tg: "Панҷакент бо кадом тамаддун машҳур аст?", ru: "Какой цивилизацией известен Пенджикент?", en: "Which civilization is Panjakent famous for?" }, [opt("a", "Суғдиён", "Согдийцы", "Sogdians", true), opt("b", "Юнониён", "Греки", "Greeks", false), opt("c", "Чин", "Китайцы", "Chinese", false), opt("d", "Арабҳо", "Арабы", "Arabs", false)], "medium"),
  q("h13", { tg: "Эмомалӣ Раҳмон аз кадом сол Президент аст?", ru: "С какого года Эмомали Рахмон — Президент?", en: "Since which year has Emomali Rahmon been President?" }, [opt("a", "1992", "1992", "1992", true), opt("b", "1991", "1991", "1991", false), opt("c", "1994", "1994", "1994", false), opt("d", "2000", "2000", "2000", false)], "medium"),
  q("h14", { tg: "Роҳи Абрешим аз кадом минтақа мегузашт?", ru: "Через какой регион проходил Шёлковый путь?", en: "Through which region did the Silk Road pass?" }, [opt("a", "Осиёи Марказӣ", "Центральная Азия", "Central Asia", true), opt("b", "Амрикои Ҷанубӣ", "Южная Америка", "South America", false), opt("c", "Африқои Шимолӣ", "Северная Африка", "North Africa", false), opt("d", "Австралия", "Австралия", "Australia", false)], "easy"),
  q("h15", { tg: "Калонтарин кӯли Тоҷикистон кадом аст?", ru: "Самое большое озеро Таджикистана?", en: "Largest lake in Tajikistan?" }, [opt("a", "Кӯли Қарокӯл", "Озеро Каракуль", "Lake Karakul", true), opt("b", "Кӯли Искандаркӯл", "Искандеркуль", "Iskanderkul", false), opt("c", "Кӯли Сарез", "Сарезское озеро", "Sarez Lake", false), opt("d", "Баҳри Арал", "Аральское море", "Aral Sea", false)], "hard"),
]

const samanidQuestions: QuizQuestion[] = [
  q("s1", { tg: "Сомониён аз кадом минтақа бархостанд?", ru: "Из какого региона происходили Саманиды?", en: "From which region did the Samanids originate?" }, [opt("a", "Мовароуннаҳр", "Мавераннахр", "Transoxiana", true), opt("b", "Миср", "Египет", "Egypt", false), opt("c", "Ҳиндустон", "Индия", "India", false), opt("d", "Чин", "Китай", "China", false)], "medium"),
  q("s2", { tg: "Насаби Сомониён (тибқи ривоят) ба кӣ мерасад?", ru: "К кому восходит род Саманидов по преданию?", en: "To whom does Samanid lineage traditionally trace?" }, [opt("a", "Баҳроми Чӯбин", "Бахрам Чубин", "Bahram Chobin", true), opt("b", "Искандари Мақдунӣ", "Александр Македонский", "Alexander the Great", false), opt("c", "Чингизхон", "Чингисхан", "Genghis Khan", false), opt("d", "Қуруши Кабир", "Кир Великий", "Cyrus the Great", false)], "hard"),
  q("s3", { tg: "Исмоили Сомонӣ туркҳоро дар куҷо шикаст дод?", ru: "Где Исмаил Самани разбил тюрков?", en: "Where did Ismail Samani defeat the Turks?" }, [opt("a", "Наздикии Бухоро", "Близ Бухары", "Near Bukhara", true), opt("b", "Дар Қоҳира", "В Каире", "In Cairo", false), opt("c", "Дар Бағдод", "В Багдаде", "In Baghdad", false), opt("d", "Дар Константинопол", "В Константинополе", "In Constantinople", false)], "hard"),
  q("s4", { tg: "Дар замони Сомониён забони форсӣ-дарӣ чӣ мақом дошт?", ru: "Какой статус имел персидский язык при Саманидах?", en: "Status of Persian under the Samanids?" }, [opt("a", "Забони расмӣ ва адабӣ шуд", "Стал официальным и литературным", "Became official and literary", true), opt("b", "Манъ карда шуд", "Был запрещён", "Was banned", false), opt("c", "Танҳо дар деҳот", "Только в деревнях", "Only in villages", false), opt("d", "Фақат барои тиҷорат", "Только для торговли", "Only for trade", false)], "medium"),
  q("s5", { tg: "Кадом шоҳи Сомонӣ нуфузи бузург дошт?", ru: "Какой саманидский правитель имел большое влияние?", en: "Which Samanid ruler had great influence?" }, [opt("a", "Исмоили Сомонӣ", "Исмаил Самани", "Ismail Samani", true), opt("b", "Насри I", "Наср I", "Nasr I", false), opt("c", "Нуҳ ибни Мансур", "Нух ибн Мансур", "Nuh ibn Mansur", false), opt("d", "Абдулмалик", "Абд аль-Малик", "Abd al-Malik", false)], "medium"),
  q("s6", { tg: "Китобхонаи машҳури Сомониён дар кадом шаҳр буд?", ru: "В каком городе была библиотека саманидской эпохи?", en: "Where was the famous Samanid-era library?" }, [opt("a", "Бухоро", "Бухара", "Bukhara", true), opt("b", "Маскав", "Москва", "Moscow", false), opt("c", "Лондон", "Лондон", "London", false), opt("d", "Деҳлӣ", "Дели", "Delhi", false)], "easy"),
  q("s7", { tg: "Пас аз суқути Сомониён кӣ қудрат гирифт?", ru: "Кто пришёл к власти после Саманидов?", en: "Who took power after the Samanids?" }, [opt("a", "Қарахониён / Ғазнавиён", "Караханиды / Газневиды", "Qarakhanids / Ghaznavids", true), opt("b", "Романовҳо", "Романовы", "Romanovs", false), opt("c", "Сафавиён", "Сефевиды", "Safavids", false), opt("d", "Усмониён", "Османы", "Ottomans", false)], "hard"),
  q("s8", { tg: "Рӯдакӣ дар кадом аср зиндагӣ мекард?", ru: "В каком веке жил Рудаки?", en: "In which century did Rudaki live?" }, [opt("a", "Асри IX–X", "IX–X века", "9th–10th centuries", true), opt("b", "Асри XV", "XV век", "15th century", false), opt("c", "Асри III", "III век", "3rd century", false), opt("d", "Асри XX", "XX век", "20th century", false)], "medium"),
  q("s9", { tg: "Сомониён нисбат ба хилофати Аббосӣ чӣ мавқеъ доштанд?", ru: "Положение Саманидов относительно Аббасидов?", en: "Samanids vs Abbasid Caliphate?" }, [opt("a", "Мустақил, бо эътирофи расмии халифа", "Независимое, с формальным признанием халифа", "Independent with formal recognition of the caliph", true), opt("b", "Танҳо вилояти оддӣ", "Обычная провинция", "Ordinary province only", false), opt("c", "Душмани кушод", "Открытый враг", "Open enemy", false), opt("d", "Қисми Византия", "Часть Византии", "Part of Byzantium", false)], "hard"),
  q("s10", { tg: "Кадом илмҳо дар замони Сомониён рушд карданд?", ru: "Какие науки развивались при Саманидах?", en: "Which fields flourished under the Samanids?" }, [opt("a", "Тиб, риёзӣ, адабиёт, фалсафа", "Медицина, математика, литература, философия", "Medicine, math, literature, philosophy", true), opt("b", "Танҳо ҷанг", "Только военное дело", "Only warfare", false), opt("c", "Танҳо кишоварзӣ", "Только сельское хозяйство", "Only agriculture", false), opt("d", "Ҳеҷ илме", "Никакие", "None", false)], "easy"),
  q("s11", { tg: "Ёдгории Сомонӣ дар Душанбе ба кӣ бахшида шудааст?", ru: "Кому посвящён памятник Самани в Душанбе?", en: "To whom is the Samanid monument in Dushanbe dedicated?" }, [opt("a", "Исмоили Сомонӣ", "Исмаилу Самани", "Ismail Samani", true), opt("b", "Чингизхон", "Чингисхану", "Genghis Khan", false), opt("c", "Искандар", "Александру", "Alexander", false), opt("d", "Ленин", "Ленину", "Lenin", false)], "easy"),
  q("s12", { tg: "Мовароуннаҳр чӣ маъно дорад?", ru: "Что означает «Мавераннахр»?", en: "What does Mawarannahr mean?" }, [opt("a", "Замини он сӯи дарё (Ому)", "Земля за рекой (Амударьёй)", "Land beyond the river (Amu Darya)", true), opt("b", "Кӯҳҳои баланд", "Высокие горы", "High mountains", false), opt("c", "Баҳри Каспий", "Каспийское море", "Caspian Sea", false), opt("d", "Биёбони Калон", "Большая пустыня", "Great desert", false)], "medium"),
  q("s13", { tg: "Сомониён дар кадом аср қуллаи қудрат доштанд?", ru: "В каком веке пик могущества Саманидов?", en: "Peak century of Samanid power?" }, [opt("a", "Асри X", "X век", "10th century", true), opt("b", "Асри XV", "XV век", "15th century", false), opt("c", "Асри V", "V век", "5th century", false), opt("d", "Асри XIX", "XIX век", "19th century", false)], "medium"),
  q("s14", { tg: "Кадом шаҳрҳо дар ҳудуди Сомониён буданд?", ru: "Какие города входили в державу Саманидов?", en: "Major cities in the Samanid realm?" }, [opt("a", "Бухоро, Самарқанд, Хуҷанд", "Бухара, Самарканд, Худжанд", "Bukhara, Samarkand, Khujand", true), opt("b", "Париж, Лондон", "Париж, Лондон", "Paris, London", false), opt("c", "Токио, Сеул", "Токио, Сеул", "Tokyo, Seoul", false), opt("d", "Ню-Йорк", "Нью-Йорк", "New York", false)], "easy"),
  q("s15", { tg: "Чаро давраи Сомониён «асри тиллоӣ» номида мешавад?", ru: "Почему эпоху Саманидов называют золотым веком?", en: "Why is the Samanid era a golden age?" }, [opt("a", "Рушди забон, адабиёт, илм ва давлатдории мустақил", "Расцвет языка, литературы, науки и государства", "Flourishing of language, literature, science and statehood", true), opt("b", "Фақат ҷангҳои зиёд", "Только из-за войн", "Only because of wars", false), opt("c", "Фақат тиҷорати намак", "Только торговля солью", "Only salt trade", false), opt("d", "Ҳеҷ рушде набуд", "Не было развития", "No development", false)], "hard"),
]

export const quizzes: Quiz[] = [
  {
    id: "1",
    slug: "daily",
    title: { tg: "Викторинаи таърих", ru: "Историческая викторина", en: "History Quiz" },
    description: {
      tg: "15 саволи душвор · 2 дақиқа · таърихи Тоҷикистон ва Осиёи Марказӣ",
      ru: "15 сложных вопросов · 2 минуты · история Таджикистана и Центральной Азии",
      en: "15 hard questions · 2 minutes · history of Tajikistan and Central Asia",
    },
    timeLimitSec: 120,
    xpReward: 150,
    questions: historyQuestions,
  },
  {
    id: "2",
    slug: "samanid",
    title: { tg: "Сомониён ва асрҳои миёна", ru: "Саманиды и средневековье", en: "Samanids and the Middle Ages" },
    description: {
      tg: "15 савол дар бораи Сомониён · 2 дақиқа",
      ru: "15 вопросов о Саманидах · 2 минуты",
      en: "15 questions on the Samanids · 2 minutes",
    },
    timeLimitSec: 120,
    xpReward: 150,
    questions: samanidQuestions,
  },
]

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug)
}
