import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Lesson = {
  title: string
  titleRu: string
  titleEn: string
  minutes: number
  body: string
  bodyRu: string
  bodyEn: string
  points: string[]
  pointsRu: string[]
  pointsEn: string[]
}
type Course = {
  id: string
  titleKey: string
  categoryKey: string
  levelKey: string
  lessons: number
  emoji: string
  color: string
  desc: string
  descRu: string
  descEn: string
  topics: Lesson[]
}

function L(
  title: string, titleRu: string, titleEn: string, minutes: number,
  body: string, bodyRu: string, bodyEn: string,
  points: string[], pointsRu: string[], pointsEn: string[]
): Lesson {
  return { title, titleRu, titleEn, minutes, body, bodyRu, bodyEn, points, pointsRu, pointsEn }
}

function stub(title: string, titleRu: string, titleEn: string, minutes = 10): Lesson {
  return L(
    title, titleRu, titleEn, minutes,
    title + ". Ин дарс мавзӯи асосӣро шарҳ медиҳад. Барои тафсилот Энсиклопедия ва Мақолаҳоро хонед.",
    titleRu + ". Краткий обзор темы. Подробнее — в Энциклопедии и Статьях.",
    titleEn + ". A short overview. See Encyclopedia and Articles for more.",
    ["Мавзӯи асосӣ", "Заминаи таърихӣ", "Аҳамият"],
    ["Основная тема", "Исторический фон", "Значение"],
    ["Main topic", "Historical background", "Significance"]
  )
}

const courses: Course[] = [
  {
    id: "tajikistan",
    titleKey: "tajikistan",
    categoryKey: "national",
    levelKey: "beginner",
    lessons: 8,
    emoji: "🏔️",
    color: "from-emerald-900/80 to-emerald-700/40",
    desc: "Аз давлати Сомониён то истиқлолият — таърихи халқи тоҷик.",
    descRu: "От государства Саманидов до независимости — история таджикского народа.",
    descEn: "From the Samanid state to independence — the history of the Tajik people.",
    topics: [
      L("Пайдоиши халқи тоҷик", "Происхождение таджикского народа", "Origins of the Tajik people", 12,
        "Халқи тоҷик аз қавмҳои ориёӣ, суғдӣ, бохтарӣ ва дигар гурӯҳҳои эронинажод ташаккул ёфтааст. Дар ҳазорсолаҳои пеш аз милод дар Осиёи Марказӣ тамаддунҳои Бохтар, Суғд ва Хоразм вуҷуд доштанд.\n\nЗабони форсӣ-тоҷикӣ ва фарҳанги муштарак қавмҳоро наздик карданд. Пас аз қабули ислом (асрҳои VII–VIII) якҷояшавӣ тезтар шуд. Дар Мовароуннаҳр шаҳрҳо, тиҷорат ва илм рушд карданд.\n\nПайдоиши халқи тоҷик натиҷаи садсолаҳои омехташавии қавмҳои эронӣ ва таъсири забон, дин ва давлатдорӣ аст.",
        "Таджикский народ сложился из арийских, согдийских, бактрийских и других ираноязычных групп. В древности существовали цивилизации Бактрии, Согда и Хорезма.\n\nПерсидско-таджикский язык и общая культура сближали племена. После принятия ислама (VII–VIII вв.) объединение ускорилось. В Мавераннахре росли города, торговля и наука.\n\nЭтногенез таджиков — результат веков смешения и влияния языка, религии и государственности.",
        "The Tajik people formed from Aryan, Sogdian, Bactrian and other Iranian groups. Ancient civilizations of Bactria, Sogdiana and Khwarazm existed in Central Asia.\n\nPersian-Tajik language and shared culture brought communities together. After Islam (7th–8th centuries), integration accelerated. Cities, trade and learning grew in Transoxiana.\n\nTajik ethnogenesis is the result of centuries of mixing and the influence of language, religion and statehood.",
        ["Ориёиҳо, суғдиҳо, бохтариҳо", "Бохтар, Суғд, Хоразм", "Забони форсӣ-тоҷикӣ", "Нақши ислом (VII–VIII)", "Мовароуннаҳр ва Хуросон", "Асос барои давлатҳои миллӣ"],
        ["Арии, согдийцы, бактрийцы", "Бактрия, Согд, Хорезм", "Персидско-таджикский язык", "Роль ислама (VII–VIII)", "Мавераннахр и Хорасан", "Основа будущих государств"],
        ["Aryans, Sogdians, Bactrians", "Bactria, Sogdiana, Khwarazm", "Persian-Tajik language", "Role of Islam (7th–8th c.)", "Transoxiana and Khorasan", "Basis for later states"]),
      L("Давлати Сомониён", "Государство Саманидов", "The Samanid state", 15,
        "Давлати Сомониён (819–999) аввалин давлати мустақили тоҷикон дар Мовароуннаҳр аст. Хонадони Сомонӣ аввал зери Аббосиён, сипас мустақил ҳукумат кард.\n\nИсмоили Сомонӣ (849–907) давлатро мустаҳкам кард, сарҳадҳоро ҳимоя намуд ва Бухороро пойтахти қавӣ сохт. Рӯдакӣ, Фирдавсӣ ва мадрасаҳо ин давраро «асри тиллоӣ» карданд.\n\nМероси Сомониён — забон, фарҳанг ва идеяи давлати миллӣ — то имрӯз зинда аст.",
        "Государство Саманидов (819–999) — первое независимое государство таджиков в Мавераннахре. Династия сначала правила под Аббасидами, затем обрела независимость.\n\nИсмаил Самани (849–907) укрепил государство и сделал Бухару столицей. Рудаки, Фирдоуси и медресе сделали эпоху «золотым веком».\n\nНаследие Саманидов — язык, культура и идея национального государства — живо до сих пор.",
        "The Samanid state (819–999) was the first independent Tajik state in Transoxiana. The dynasty first ruled under the Abbasids, then gained independence.\n\nIsmail Samani (849–907) strengthened the state and made Bukhara the capital. Rudaki, Ferdowsi and madrasas made this a golden age.\n\nThe Samanid legacy — language, culture and national statehood — lives on today.",
        ["819–999 · Мовароуннаҳр", "Исмоили Сомонӣ (849–907)", "Пойтахт — Бухоро", "Рӯдакӣ ва Фирдавсӣ", "Мадрасаҳо", "Асри тиллоӣ"],
        ["819–999 · Мавераннахр", "Исмаил Самани (849–907)", "Столица — Бухара", "Рудаки и Фирдоуси", "Медресе", "Золотой век"],
        ["819–999 · Transoxiana", "Ismail Samani (849–907)", "Capital — Bukhara", "Rudaki and Ferdowsi", "Madrasas", "Golden age"]),
      L("Асрҳои миёна ва Темуриён", "Средневековье и Тимуриды", "Middle Ages and Timurids", 14,
        "Пас аз суқути Сомониён Ғазнавиён, Қорахониён ва дигарон ҳукмронӣ карданд. Дар асри XIII муғулҳо ба минтақа ҳамла карданд.\n\nДар асрҳои XIV–XV Темур ва Темуриён империяи бузург сохтанд. Самарқанд ва Ҳирот маркази илм ва санъат шуданд; Улуғбек расадхона сохт.\n\nМеъморӣ, риёзӣ ва Роҳи абришам ин давраро машҳур карданд. Мероси Темуриён то имрӯз дар шаҳрҳо дида мешавад.",
        "После падения Саманидов правили Газневиды и Караханиды. В XIII веке монголы вторглись в регион.\n\nВ XIV–XV вв. Тимур создал империю. Самарканд и Герат стали центрами науки; Улугбек построил обсерваторию.\n\nАрхитектура, математика и Шёлковый путь прославили эпоху. Наследие Тимуридов видно до сих пор.",
        "After the Samanids, Ghaznavids and Qarakhanids ruled. In the 13th century the Mongols invaded.\n\nIn the 14th–15th centuries Timur built an empire. Samarkand and Herat became centres of science; Ulugh Beg built an observatory.\n\nArchitecture, mathematics and the Silk Road defined the era. Timurid heritage is still visible today.",
        ["Ғазнавиён ва Қорахониён", "Ҳамлаи муғулҳо", "Темур ва Темуриён", "Самарқанд ва Ҳирот", "Улуғбек", "Меъморӣ ва илм"],
        ["Газневиды и Караханиды", "Монгольское нашествие", "Тимур и Тимуриды", "Самарканд и Герат", "Улугбек", "Архитектура и наука"],
        ["Ghaznavids and Qarakhanids", "Mongol invasion", "Timur and Timurids", "Samarkand and Herat", "Ulugh Beg", "Architecture and science"]),
      L("Бухоро ва Хуҷанд", "Бухара и Худжанд", "Bukhara and Khujand", 10,
        "Бухоро пойтахти Сомониён ва яке аз марказҳои муҳимтарини илм, дин ва тиҷорат буд. Мадрасаҳо, масҷидҳо ва бозорҳо сайёҳонро ҷалб мекарданд.\n\nХуҷанд шаҳри қадимии соҳили Сирдарё ва нуқтаи стратегии Роҳи абришам аст. Нақши тиҷоратӣ ва фарҳангии худро дар асрҳои гуногун нигоҳ дошт.\n\nҲарду шаҳр дар таърихи халқи тоҷик ҷойи махсус доранд; меъморӣ ва анъанаҳои онҳо то имрӯз зиндаанд.",
        "Бухара — столица Саманидов и один из главных центров науки, религии и торговли. Медресе и базары привлекали купцов и учёных.\n\nХуджанд — древний город на Сырдарье и стратегический пункт Шёлкового пути.\n\nОба города занимают особое место в истории таджикского народа.",
        "Bukhara was the Samanid capital and a major centre of learning, religion and trade. Madrasas and markets attracted scholars and merchants.\n\nKhujand is an ancient city on the Syr Darya and a strategic Silk Road point.\n\nBoth cities hold a special place in Tajik history; their architecture and traditions live on.",
        ["Бухоро — пойтахт ва маркази илм", "Мадрасаҳо ва бозорҳо", "Хуҷанд дар Сирдарё", "Роҳи абришам", "Меъморӣ", "Мероси шаҳрҳо"],
        ["Бухара — столица и центр науки", "Медресе и базары", "Худжанд на Сырдарье", "Шёлковый путь", "Архитектура", "Наследие городов"],
        ["Bukhara — capital and learning hub", "Madrasas and markets", "Khujand on the Syr Darya", "Silk Road", "Architecture", "Urban heritage"]),
      L("Давраи шӯравӣ", "Советский период", "Soviet period", 12,
        "Соли 1924 Ҷумҳурии Мухтори Тоҷикистон таъсис ёфт; соли 1929 ҶШС Тоҷикистон. Душанбе пойтахт шуд.\n\nСаноат, мактабҳо ва донишгоҳҳо рушд карданд. Забони тоҷикӣ мақоми расмӣ гирифт; Айнӣ, Ғафуров ва Турсунзода дар фарҳанг нақши калон бозиданд.\n\nҶанги Бузурги Ватанӣ ҳазорон тоҷикро ҷалб кард. Дар охири солҳои 1980 ҳаракати миллӣ ва талаби истиқлол қувват гирифт.",
        "В 1924 создана Таджикская АССР; в 1929 — Таджикская ССР. Душанбе стал столицей.\n\nРазвивались промышленность и образование. Таджикский язык получил официальный статус; Айни, Гафуров, Турсунзаде внесли вклад в культуру.\n\nВеликая Отечественная война затронула тысячи таджиков. В конце 1980-х усилилось стремление к независимости.",
        "In 1924 the Tajik ASSR was created; in 1929 the Tajik SSR. Dushanbe became the capital.\n\nIndustry and education grew. Tajik gained official status; Aini, Ghafurov and Tursunzoda shaped culture.\n\nThe Great Patriotic War involved thousands of Tajiks. In the late 1980s the drive for independence grew stronger.",
        ["ҶМШС (1924) ва ҶШС (1929)", "Душанбе — пойтахт", "Маориф ва саноат", "Айнӣ, Ғафуров, Турсунзода", "Ҷанги Бузурги Ватанӣ", "Роҳ ба истиқлолият"],
        ["ТАССР (1924) и ТаджССР (1929)", "Душанбе — столица", "Образование и промышленность", "Айни, Гафуров, Турсунзаде", "Великая Отечественная", "Путь к независимости"],
        ["ASSR (1924) and SSR (1929)", "Dushanbe — capital", "Education and industry", "Aini, Ghafurov, Tursunzoda", "Great Patriotic War", "Path to independence"]),
      L("Истиқлолият (1991)", "Независимость (1991)", "Independence (1991)", 10,
        "9 сентябри соли 1991 Шӯрои Олӣ истиқлолияти давлатии Ҷумҳурии Тоҷикистонро эълон кард. Ин рӯз ҳар сол ҳамчун Рӯзи Истиқлолият ҷашн гирифта мешавад.\n\nРамзҳои миллӣ — парчам, нишон ва суруд — қабул шуданд. Конститутсия соли 1994 қабул шуд. Сиёсати хориҷӣ ва узвият дар созмонҳои байналмилалӣ оғоз ёфт.\n\nИстиқлолият имкони мустақилона ҳал кардани масъалаҳои дохилӣ ва рушди забон ва фарҳангро фароҳам овард.",
        "9 сентября 1991 Верховный Совет провозгласил независимость Республики Таджикистан. Этот день отмечается как День независимости.\n\nПриняты государственные символы — флаг, герб, гимн. Конституция принята в 1994 году. Началась самостоятельная внешняя политика.\n\nНезависимость дала возможность решать внутренние вопросы и развивать язык и культуру.",
        "On 9 September 1991 the Supreme Soviet declared independence. This day is celebrated as Independence Day.\n\nNational symbols — flag, emblem and anthem — were adopted. The Constitution was adopted in 1994. Independent foreign policy began.\n\nIndependence made it possible to manage internal affairs and develop language and culture.",
        ["9 сентябри 1991", "Рӯзи Истиқлолият", "Парчам, нишон, суруд", "Конститутсия (1994)", "Сиёсати хориҷӣ", "Давлати мустақил"],
        ["9 сентября 1991", "День независимости", "Флаг, герб, гимн", "Конституция (1994)", "Внешняя политика", "Независимое государство"],
        ["9 September 1991", "Independence Day", "Flag, emblem, anthem", "Constitution (1994)", "Foreign policy", "Independent state"]),
      L("Ҷанги шаҳрвандӣ ва сулҳ", "Гражданская война и мир", "Civil war and peace", 14,
        "Солҳои 1992–1997 ҷанги шаҳрвандӣ Тоҷикистонро фаро гирифт. Ҳазорон нафар кушта шуданд; иқтисод ва инфрасохтор зарар диданд.\n\nСоли 1997 дар Москва Созишномаи умумии истиқрори сулҳ ва ризоияти миллӣ ба имзо расид ва ба ҷанг хотима гузошт.\n\nВаҳдати миллӣ, бозгашти муҳоҷирон ва барқароршавии иқтисод ҳадафҳои асосӣ шуданд. Таҷрибаи сулҳи тоҷик ҳамчун намуна эътироф шудааст.",
        "В 1992–1997 гражданская война охватила Таджикистан. Тысячи погибли; экономика и инфраструктура пострадали.\n\nВ 1997 в Москве подписано Общее соглашение об установлении мира и национального согласия.\n\nНациональное единство и восстановление экономики стали главными задачами. Опыт мира признан примером урегулирования.",
        "In 1992–1997 civil war engulfed Tajikistan. Thousands died; the economy and infrastructure were damaged.\n\nIn 1997 the General Agreement on Peace and National Accord was signed in Moscow, ending the war.\n\nNational unity and economic recovery became priorities. Tajikistan’s peace experience is recognised as a model.",
        ["1992–1997 · ҷанги шаҳрвандӣ", "Зарари инсонӣ ва иқтисодӣ", "Созишномаи сулҳ (1997, Москва)", "Ризоияти миллӣ", "Ваҳдат", "Барқароршавӣ"],
        ["1992–1997 · гражданская война", "Человеческий и экономический ущерб", "Мирное соглашение (1997)", "Национальное согласие", "Единство", "Восстановление"],
        ["1992–1997 · civil war", "Human and economic cost", "Peace agreement (1997)", "National accord", "Unity", "Recovery"]),
      L("Тоҷикистони муосир", "Современный Таджикистан", "Modern Tajikistan", 11,
        "Имрӯз Ҷумҳурии Тоҷикистон давлати мустақил бо низоми президентӣ аст. Эмомалӣ Раҳмон ҳамчун Пешвои миллат роҳбарии кишварро ба ӯҳда дорад. Ҳадафҳо: субот, амният, рушди иқтисод ва маориф.\n\nКишвар захираҳои обӣ ва сайёҳӣ дорад. Лоиҳаҳои энергетика ва ҳамкорӣ бо ҳамсояҳо аҳамият доранд. Забон ва фарҳанг ҳифз ва рушд дода мешаванд.\n\nҲифзи мероси таърихӣ қисми сиёсати фарҳангӣ аст. Насли ҷавон тавассути мактаб ва платформаҳое монанди Histori.tj таърихро меомӯзад.",
        "Сегодня Республика Таджикистан — независимое государство. Эмомали Рахмон как Лидер нации возглавляет страну. Приоритеты: стабильность, безопасность, экономика и образование.\n\nСтрана обладает водными и туристическими ресурсами. Важны проекты энергетики и сотрудничество с соседями.\n\nСохранение исторического наследия — часть культурной политики. Молодёжь изучает историю через школы и платформы вроде Histori.tj.",
        "Today the Republic of Tajikistan is an independent presidential state. Emomali Rahmon, Leader of the Nation, heads the country. Priorities: stability, security, economy and education.\n\nThe country has water and tourism resources. Energy projects and regional cooperation matter.\n\nPreserving historical heritage is part of cultural policy. Young people learn history through schools and platforms such as Histori.tj.",
        ["Давлати мустақил", "Пешвои миллат", "Субот ва рушд", "Энергетика", "Забон ва фарҳанг", "Ҳифзи мероси таърихӣ"],
        ["Независимое государство", "Лидер нации", "Стабильность и развитие", "Энергетика", "Язык и культура", "Сохранение наследия"],
        ["Independent state", "Leader of the Nation", "Stability and development", "Energy", "Language and culture", "Preserving heritage"]),
    ],
  },
  {
    id: "samanid", titleKey: "samanid", categoryKey: "medieval", levelKey: "intermediate", lessons: 6, emoji: "👑",
    color: "from-amber-900/80 to-amber-700/40",
    desc: "Исмоили Сомонӣ, Бухоро, илм ва фарҳанги асри тиллоӣ.",
    descRu: "Исмаил Самани, Бухара, наука и культура золотого века.",
    descEn: "Ismail Samani, Bukhara, science and culture of the golden age.",
    topics: [
      stub("Асосгузории давлат", "Основание государства", "Founding of the state", 12),
      stub("Исмоили Сомонӣ", "Исмаил Самани", "Ismail Samani", 15),
      stub("Пойтахт — Бухоро", "Столица — Бухара", "Capital — Bukhara", 10),
      stub("Рӯдакӣ ва адабиёт", "Рудаки и литература", "Rudaki and literature", 12),
      stub("Илм ва тиб (Ибни Сино)", "Наука и медицина (Ибн Сина)", "Science and medicine (Ibn Sina)", 14),
      stub("Мерос ва аҳамият", "Наследие и значение", "Legacy and significance", 10),
    ],
  },
  {
    id: "ancient", titleKey: "ancient", categoryKey: "world", levelKey: "intermediate", lessons: 7, emoji: "🏺",
    color: "from-sky-900/80 to-sky-700/40",
    desc: "Ориёиҳо, Ҳахоманишиён, Куруши Кабир ва Мовароуннаҳр.",
    descRu: "Арии, Ахемениды, Кир Великий и Мавераннахр.",
    descEn: "Aryans, Achaemenids, Cyrus the Great and Transoxiana.",
    topics: [
      stub("Тамаддунҳои қадими Осиёи Миёна", "Древние цивилизации Средней Азии", "Ancient civilizations of Central Asia", 12),
      stub("Куруши Кабир", "Кир Великий", "Cyrus the Great", 14),
      stub("Империяи Ҳахоманишӣ", "Империя Ахеменидов", "Achaemenid Empire", 12),
      stub("Искандари Мақдунӣ", "Александр Македонский", "Alexander the Great", 11),
      stub("Юнону Бохтар", "Греко-Бактрия", "Greco-Bactria", 10),
      stub("Кушониён", "Кушаны", "The Kushans", 12),
      stub("Мероси қадим", "Древнее наследие", "Ancient heritage", 9),
    ],
  },
  {
    id: "silkRoad", titleKey: "silkRoad", categoryKey: "world", levelKey: "advanced", lessons: 6, emoji: "🐪",
    color: "from-orange-900/80 to-orange-700/40",
    desc: "Тиҷорат, фарҳанг ва шаҳрҳои Роҳи абришам.",
    descRu: "Торговля, культура и города Шёлкового пути.",
    descEn: "Trade, culture and cities of the Silk Road.",
    topics: [
      stub("Роҳи абришам чист?", "Что такое Шёлковый путь?", "What is the Silk Road?", 10),
      stub("Самарқанд ва Бухоро", "Самарканд и Бухара", "Samarkand and Bukhara", 14),
      stub("Тиҷорат ва молҳо", "Торговля и товары", "Trade and goods", 11),
      stub("Дину фарҳанг", "Религия и культура", "Religion and culture", 12),
      stub("Сайёҳон ва сайёҳномаҳо", "Путешественники и записки", "Travelers and accounts", 10),
      stub("Мерос дар Тоҷикистон", "Наследие в Таджикистане", "Heritage in Tajikistan", 11),
    ],
  },
  {
    id: "soviet", titleKey: "soviet", categoryKey: "national", levelKey: "intermediate", lessons: 6, emoji: "⭐",
    color: "from-red-900/80 to-red-700/40",
    desc: "Ташаккули ҶШС Тоҷикистон, ҷанг ва сохтмони миллӣ.",
    descRu: "Становление Таджикской ССР, война и национальное строительство.",
    descEn: "Formation of the Tajik SSR, war and nation-building.",
    topics: [
      stub("Инқилоб ва тағйирот", "Революция и перемены", "Revolution and change", 11),
      stub("Нусратулло Махсум ва Шотемур", "Нусратулло Махсум и Шотемур", "Nusratullo Makhsum and Shotemur", 13),
      stub("ҶШС Тоҷикистон (1929)", "Таджикская ССР (1929)", "Tajik SSR (1929)", 12),
      stub("Ҷанги Бузурги Ватанӣ", "Великая Отечественная война", "Great Patriotic War", 14),
      stub("Айнӣ, Ғафуров, Турсунзода", "Айни, Гафуров, Турсунзаде", "Aini, Ghafurov, Tursunzoda", 12),
      stub("Роҳ ба сӯи истиқлолият", "Путь к независимости", "Path to independence", 10),
    ],
  },
  {
    id: "modern", titleKey: "modern", categoryKey: "contemporary", levelKey: "beginner", lessons: 5, emoji: "🏛️",
    color: "from-indigo-900/80 to-indigo-700/40",
    desc: "Истиқлолият, сулҳ ва рушди Тоҷикистони муосир.",
    descRu: "Независимость, мир и развитие современного Таджикистана.",
    descEn: "Independence, peace and development of modern Tajikistan.",
    topics: [
      stub("Эълони истиқлолият", "Провозглашение независимости", "Declaration of independence", 10),
      stub("Ҷанги шаҳрвандӣ", "Гражданская война", "Civil war", 14),
      stub("Созишномаи сулҳ (1997)", "Мирное соглашение (1997)", "Peace agreement (1997)", 12),
      stub("Пешвои миллат", "Лидер нации", "Leader of the Nation", 11),
      stub("Тоҷикистон имрӯз", "Таджикистан сегодня", "Tajikistan today", 10),
    ],
  },
]

export default function CoursesPage() {
  const { t, i18n } = useTranslation()
  const [openId, setOpenId] = useState<string | null>(null)
  const [lessonIdx, setLessonIdx] = useState<number | null>(null)
  const lang = i18n.language?.startsWith("ru") ? "ru" : i18n.language?.startsWith("en") ? "en" : "tg"

  const open = courses.find((c) => c.id === openId)
  const lesson = open && lessonIdx !== null ? open.topics[lessonIdx] : null

  function descOf(c: Course) {
    if (lang === "ru") return c.descRu
    if (lang === "en") return c.descEn
    return c.desc
  }
  function topicTitle(l: Lesson) {
    if (lang === "ru") return l.titleRu
    if (lang === "en") return l.titleEn
    return l.title
  }
  function bodyOf(l: Lesson) {
    if (lang === "ru") return l.bodyRu
    if (lang === "en") return l.bodyEn
    return l.body
  }
  function pointsOf(l: Lesson) {
    if (lang === "ru") return l.pointsRu
    if (lang === "en") return l.pointsEn
    return l.points
  }
  const minLabel = lang === "ru" ? "мин" : lang === "en" ? "min" : "дақ"
  const lessonsLabel = lang === "ru" ? "Уроки" : lang === "en" ? "Lessons" : "Дарсҳо"
  const keyPoints = lang === "ru" ? "Ключевые пункты" : lang === "en" ? "Key points" : "Нуқтаҳои асосӣ"
  const nextLabel = lang === "ru" ? "Следующий урок" : lang === "en" ? "Next lesson" : "Дарси навбатӣ"
  const doneLabel = lang === "ru" ? "К списку уроков" : lang === "en" ? "Back to list" : "Бозгашт ба рӯйхат"

  if (open && lesson && lessonIdx !== null) {
    const hasNext = lessonIdx < open.topics.length - 1
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button type="button" onClick={() => setLessonIdx(null)}
          className="text-sm text-muted-foreground hover:text-white mb-6 inline-flex items-center gap-1">
          ← {t("common.back")}
        </button>
        <div className={`rounded-2xl bg-gradient-to-br ${open.color} border border-border p-6 sm:p-8 mb-6`}>
          <div className="text-sm text-white/60 mb-2">
            {t(`courses.items.${open.titleKey}`)} · {lessonIdx + 1}/{open.topics.length}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{topicTitle(lesson)}</h1>
          <p className="text-sm text-muted">{lesson.minutes} {minLabel}</p>
        </div>
        <div className="mb-6">
          <p className="text-[16px] leading-relaxed text-white/85 whitespace-pre-line">{bodyOf(lesson)}</p>
        </div>
        <div className="rounded-xl border border-border bg-card/40 p-4 mb-8">
          <h3 className="text-sm font-semibold text-primary mb-3">{keyPoints}</h3>
          <ul className="space-y-2">
            {pointsOf(lesson).map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-white/80">
                <span className="text-primary shrink-0">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {hasNext ? (
            <Button onClick={() => setLessonIdx(lessonIdx + 1)} className="flex-1">{nextLabel} →</Button>
          ) : null}
          <Button variant="secondary" onClick={() => setLessonIdx(null)} className="flex-1">{doneLabel}</Button>
        </div>
      </div>
    )
  }

  if (open) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button type="button" onClick={() => setOpenId(null)}
          className="text-sm text-muted-foreground hover:text-white mb-6 inline-flex items-center gap-1">
          ← {t("common.back")}
        </button>
        <div className={`rounded-2xl bg-gradient-to-br ${open.color} border border-border p-6 sm:p-8 mb-8`}>
          <div className="text-5xl mb-3">{open.emoji}</div>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">{t(`courses.categories.${open.categoryKey}`)}</Badge>
            <Badge variant="outline">{t(`courses.${open.levelKey}`)}</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{t(`courses.items.${open.titleKey}`)}</h1>
          <p className="text-muted-foreground">{descOf(open)}</p>
          <p className="text-sm text-muted mt-3">
            {open.topics.length} {t("courses.lessons")} · {open.topics.reduce((s, x) => s + x.minutes, 0)} {minLabel}
          </p>
        </div>
        <h2 className="text-lg font-semibold mb-4">{lessonsLabel}</h2>
        <div className="space-y-2">
          {open.topics.map((les, i) => (
            <button key={i} type="button" onClick={() => setLessonIdx(i)}
              className="w-full flex items-center gap-4 rounded-xl border border-border bg-card/40 px-4 py-3 hover:border-primary/40 transition text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-bold">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{topicTitle(les)}</div>
                <div className="text-xs text-muted">{les.minutes} {minLabel}</div>
              </div>
              <span className="text-primary text-sm">▶</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">{t("courses.title")}</h1>
      <p className="text-muted mb-8">{t("courses.subtitle")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:border-primary/40 transition cursor-pointer overflow-hidden group"
            onClick={() => { setOpenId(course.id); setLessonIdx(null) }}>
            <div className={`h-36 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
              <span className="text-5xl group-hover:scale-110 transition-transform">{course.emoji}</span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <Badge variant="secondary">{t(`courses.categories.${course.categoryKey}`)}</Badge>
                <Badge variant="outline">{t(`courses.${course.levelKey}`)}</Badge>
              </div>
              <CardTitle className="text-lg">{t(`courses.items.${course.titleKey}`)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted mb-3 line-clamp-2">{descOf(course)}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">{course.topics.length} {t("courses.lessons")}</p>
                <Button size="sm" variant="secondary" onClick={(e) => { e.stopPropagation(); setOpenId(course.id); setLessonIdx(null) }}>
                  {lang === "ru" ? "Открыть" : lang === "en" ? "Open" : "Кушодан"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
