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

function L(tg: string, ru: string, en: string): LocalizedText {
  return { tg, ru, en }
}

function opt(id: string, tg: string, ru: string, en: string, correct: boolean): MissionOption {
  return { id, text: L(tg, ru, en), correct }
}

function mission(
  id: string,
  title: [string, string, string],
  story: [string, string, string],
  question: [string, string, string],
  options: MissionOption[]
): Mission {
  return {
    id,
    title: L(...title),
    story: L(...story),
    question: L(...question),
    options,
  }
}

const manuscriptMissions: Mission[] = [
  mission("m1", ["Китобхонаи пинҳон", "Скрытая библиотека", "Hidden library"],
    ["Дар зери қасри Сомонӣ дастхатҳо пинҳон шудаанд.", "Под дворцом Саманидов спрятаны рукописи.", "Manuscripts are hidden under the Samanid palace."],
    ["Кадом шаҳр пойтахти асосии Сомониён дар замони Исмоил буд?", "Какой город был главной столицей Саманидов при Исмаиле?", "Which city was the main Samanid capital under Ismail?"],
    [opt("a", "Самарқанд", "Самарканд", "Samarkand", false), opt("b", "Бухоро", "Бухара", "Bukhara", true), opt("c", "Балх", "Балх", "Balkh", false), opt("d", "Марв", "Мерв", "Merv", false)]),
  mission("m2", ["Номи сулола", "Имя династии", "Dynasty name"],
    ["Дастхат дар бораи асосгузори давлат сухан меронад.", "Рукопись говорит об основателе государства.", "The manuscript speaks of the state founder."],
    ["Сулолаи Сомониён аз кадом қабилаи эронӣ пайдо шудааст?", "Из какого иранского племени произошли Саманиды?", "From which Iranian lineage did the Samanids descend?"],
    [opt("a", "Деҳқонони Мовароуннаҳр", "Дехкане Мавераннахра", "Dehqans of Transoxiana", true), opt("b", "Туркҳои ғуз", "Тюрки-огузы", "Oghuz Turks", false), opt("c", "Арабҳои Қурайш", "Арабы Курайш", "Quraysh Arabs", false), opt("d", "Муғулҳои чинӣ", "Китайские монголы", "Chinese Mongols", false)]),
  mission("m3", ["Санаи тиллоӣ", "Золотая дата", "Golden date"],
    ["Солҳои ҳукмронии Сомониёнро бояд донед.", "Нужно знать годы правления Саманидов.", "You need the Samanid ruling years."],
    ["Давлати Сомониён тақрибан кадом солҳо вуҷуд дошт?", "В какие примерно годы существовало государство Саманидов?", "Roughly which years did the Samanid state exist?"],
    [opt("a", "661–750", "661–750", "661–750", false), opt("b", "819–999", "819–999", "819–999", true), opt("c", "1220–1370", "1220–1370", "1220–1370", false), opt("d", "1501–1736", "1501–1736", "1501–1736", false)]),
  mission("m4", ["Шоири кӯр", "Слепой поэт", "Blind poet"],
    ["Дар дарбор шоире буд, ки баъдтар «падари шеър» номида шуд.", "При дворе был поэт, позже названный «отцом поэзии».", "A court poet later called the father of poetry."],
    ["Рӯдакӣ асосан дар кадом жанр маъруф аст?", "В каком жанре в основном известен Рудаки?", "In which genre is Rudaki mainly known?"],
    [opt("a", "Шеъри қасида ва ғазал", "Касыда и газель", "Qasida and ghazal", true), opt("b", "Роман", "Роман", "Novel", false), opt("c", "Драма", "Драма", "Drama", false), opt("d", "Таърихнома", "Хроника", "Chronicle", false)]),
  mission("m5", ["Ҷанги тақдирсоз", "Судьбоносная битва", "Fateful battle"],
    ["Сомониён бо туркҳои Қарахонӣ мубориза мебурданд.", "Саманиды сражались с тюрками-Караханидами.", "Samanids fought the Qarakhanid Turks."],
    ["Кадом ҳодиса ба поёни давлати Сомониён наздик шуд?", "Какое событие приблизило конец государства Саманидов?", "What event brought the Samanid state near its end?"],
    [opt("a", "Фатҳи Қарахониён", "Завоевание Караханидов", "Qarakhanid conquest", true), opt("b", "Ҷанги Талос", "Битва при Таласе", "Battle of Talas", false), opt("c", "Ҳуҷуми Темур", "Нашествие Тимура", "Timur’s invasion", false), opt("d", "Инқилоби Октябр", "Октябрьская революция", "October Revolution", false)]),
  mission("m6", ["Илми тиб", "Медицина", "Medicine"],
    ["Олими бузург дар ҳамин давра зиндагӣ мекард.", "Великий учёный жил в эту эпоху.", "A great scholar lived in this era."],
    ["«Ал-Қонун фи-т-тиб» асари кӣст?", "Кто автор «Канона врачебной науки»?", "Who wrote the Canon of Medicine?"],
    [opt("a", "Ал-Форобӣ", "Аль-Фараби", "Al-Farabi", false), opt("b", "Ибни Сино", "Ибн Сина", "Ibn Sina", true), opt("c", "Берунӣ", "Бируни", "Biruni", false), opt("d", "Хоразмӣ", "Хорезми", "Khwarizmi", false)]),
  mission("m7", ["Забони дарбор", "Язык двора", "Court language"],
    ["Дар дарбори Сомонӣ фарҳанг ва забон муҳим буд.", "При саманидском дворе важны были культура и язык.", "Culture and language mattered at the Samanid court."],
    ["Дар давраи Сомониён кадом забон забони адабӣ шуд?", "Какой язык стал литературным в эпоху Саманидов?", "Which language became literary in the Samanid era?"],
    [opt("a", "Арабӣ", "Арабский", "Arabic", false), opt("b", "Форсии нав (дарӣ)", "Новоперсидский (дари)", "New Persian (Dari)", true), opt("c", "Туркӣ", "Тюркский", "Turkic", false), opt("d", "Юнонӣ", "Греческий", "Greek", false)]),
  mission("m8", ["Сарҳадҳои империя", "Границы империи", "Empire borders"],
    ["Сомониён қаламрави васеъро идора мекарданд.", "Саманиды управляли обширной территорией.", "The Samanids governed a wide territory."],
    ["Қаламрави Сомониён асосан кадом минтақаҳоро фаро мегирифт?", "Какие регионы в основном охватывало государство Саманидов?", "Which regions did the Samanid state mainly cover?"],
    [opt("a", "Мовароуннаҳр ва Хуросон", "Мавераннахр и Хорасан", "Transoxiana and Khurasan", true), opt("b", "Ҳиндустон", "Индия", "India", false), opt("c", "Миср", "Египет", "Egypt", false), opt("d", "Андалусия", "Андалусия", "Andalusia", false)]),
  mission("m9", ["Пули тиҷорат", "Торговый мост", "Trade bridge"],
    ["Роҳи абришам аз ин шаҳрҳо мегузашт.", "Шёлковый путь проходил через эти города.", "The Silk Road passed through these cities."],
    ["Чаро Бухоро дар замони Сомониён муҳим буд?", "Почему Бухара была важна при Саманидах?", "Why was Bukhara important under the Samanids?"],
    [opt("a", "Маркази сиёсӣ, илмӣ ва тиҷоратӣ", "Политический, научный и торговый центр", "Political, scholarly and trade centre", true), opt("b", "Танҳо қалъаи ҳарбӣ", "Только военная крепость", "Only a military fort", false), opt("c", "Бандари баҳрӣ", "Морской порт", "Seaport", false), opt("d", "Пойтахти Хилофат", "Столица Халифата", "Caliphate capital", false)]),
  mission("m10", ["Душмани шарқӣ", "Восточный враг", "Eastern rival"],
    ["Аз шарқ хавф меомад.", "С востока шла угроза.", "Threat came from the east."],
    ["Кадом давлат дар охири асри X Сомониёнро танг кард?", "Какое государство в конце X века теснило Саманидов?", "Which state pressed the Samanids in the late 10th century?"],
    [opt("a", "Қарахониён", "Караханиды", "Qarakhanids", true), opt("b", "Усмониён", "Османы", "Ottomans", false), opt("c", "Русия", "Россия", "Russia", false), opt("d", "Чин Танг", "Танский Китай", "Tang China", false)]),
  mission("m11", ["Олими ҷуғрофӣ", "Географ", "Geographer"],
    ["Олимоне аз ин минтақа ҷаҳонро тавсиф карданд.", "Учёные этого региона описывали мир.", "Scholars of this region described the world."],
    ["Ал-Берунӣ бештар бо чӣ машҳур аст?", "Чем более всего известен аль-Бируни?", "What is al-Biruni best known for?"],
    [opt("a", "Астрономия, риёзиёт ва ҷуғрофия", "Астрономия, математика и география", "Astronomy, mathematics and geography", true), opt("b", "Шеър", "Поэзия", "Poetry", false), opt("c", "Ҷанг", "Война", "Warfare", false), opt("d", "Тиҷорати абрешим", "Торговля шёлком", "Silk trade", false)]),
  mission("m12", ["Сохти давлат", "Устройство государства", "State structure"],
    ["Сомониён низоми идораи мураккаб доштанд.", "У Саманидов была сложная система управления.", "The Samanids had a complex administration."],
    ["Дар давлати Сомонӣ «деҳқон» чӣ маъно дошт?", "Что означало «дехкан» в государстве Саманидов?", "What did “dehqan” mean in the Samanid state?"],
    [opt("a", "Заминдори ашрофӣ", "Земельный аристократ", "Landed aristocrat", true), opt("b", "Ғулом", "Раб", "Slave", false), opt("c", "Соҳибкори баҳрӣ", "Морской купец", "Sea merchant", false), opt("d", "Рӯҳонии масеҳӣ", "Христианский священник", "Christian priest", false)]),
  mission("m13", ["Меъмории муқаддас", "Священная архитектура", "Sacred architecture"],
    ["Ёдгориҳои он давра то имрӯз боқӣ мондаанд.", "Памятники той эпохи сохранились до наших дней.", "Monuments of that era survive today."],
    ["Мақбараи Исмоили Сомонӣ дар кадом шаҳр ҷойгир аст?", "В каком городе находится мавзолей Исмаила Самани?", "In which city is Ismail Samani’s mausoleum?"],
    [opt("a", "Бухоро", "Бухара", "Bukhara", true), opt("b", "Душанбе", "Душанбе", "Dushanbe", false), opt("c", "Техрон", "Тегеран", "Tehran", false), opt("d", "Истамбул", "Стамбул", "Istanbul", false)]),
  mission("m14", ["Пайванди Хилофат", "Связь с Халифатом", "Link to the Caliphate"],
    ["Сомониён бо Хилофати Аббосӣ муносибат доштанд.", "Саманиды имели отношения с Аббасидским халифатом.", "Samanids had ties with the Abbasid Caliphate."],
    ["Сомониён нисбат ба хилафат чӣ мақом доштанд?", "Какой статус имели Саманиды относительно халифата?", "What status did the Samanids have relative to the caliphate?"],
    [opt("a", "Ҳокимони мустақил бо эътирофи рамзии хилафат", "Независимые правители при символическом признании халифа", "Independent rulers with symbolic recognition of the caliph", true), opt("b", "Вилояти оддии Миср", "Обычная провинция Египта", "Ordinary Egyptian province", false), opt("c", "Қисми империяи Рум", "Часть Римской империи", "Part of the Roman Empire", false), opt("d", "Давлати тобеи Чин", "Вассал Китая", "Chinese vassal", false)]),
  mission("m15", ["Мерос барои оянда", "Наследие для будущего", "Legacy for the future"],
    ["Охирин имтиҳон: аҳамияти таърихии Сомониён.", "Последнее испытание: историческое значение Саманидов.", "Final test: historical importance of the Samanids."],
    ["Чаро давраи Сомониёнро «асри тиллоӣ» меноманд?", "Почему эпоху Саманидов называют «золотым веком»?", "Why is the Samanid era called a “golden age”?"],
    [opt("a", "Шукуфоии фарҳанг, илм ва забони форсӣ", "Расцвет культуры, науки и персидского языка", "Flourishing of culture, learning and Persian language", true), opt("b", "Кашфи Америка", "Открытие Америки", "Discovery of America", false), opt("c", "Ихтирои интернет", "Изобретение интернета", "Invention of the internet", false), opt("d", "Ҷанги якуми ҷаҳонӣ", "Первая мировая война", "First World War", false)]),
]

const capitalMissions: Mission[] = [
  mission("c1", ["Дарвозаи ғарбӣ", "Западные ворота", "Western gate"],
    ["Шумо аз ғарб ба Бухоро наздик мешавед.", "Вы подходите к Бухаре с запада.", "You approach Bukhara from the west."],
    ["Бухоро дар кадом дарёи муҳим наздик аст?", "Близ какой важной реки находится Бухара?", "Near which important river is Bukhara?"],
    [opt("a", "Сирдарё", "Сырдарья", "Syr Darya", false), opt("b", "Зарафшон", "Зеравшан", "Zeravshan", true), opt("c", "Амударё", "Амударья", "Amu Darya", false), opt("d", "Волга", "Волга", "Volga", false)]),
  mission("c2", ["Номи қадим", "Древнее имя", "Ancient name"],
    ["Шаҳр номҳои гуногун дошт.", "У города были разные имена.", "The city had different names."],
    ["Бухоро дар сарчашмаҳои қадим чӣ гуна ёд мешуд?", "Как Бухара упоминалась в древних источниках?", "How was Bukhara mentioned in ancient sources?"],
    [opt("a", "Маркази Суғд ва баъд пойтахти Сомонӣ", "Центр Согда и затем столица Саманидов", "Sogdian centre then Samanid capital", true), opt("b", "Пойтахти Юнон", "Столица Греции", "Capital of Greece", false), opt("c", "Шаҳри Рим", "Город Рима", "City of Rome", false), opt("d", "Бандари Ҷопон", "Порт Японии", "Port of Japan", false)]),
  mission("c3", ["Мадрасаи тиллоӣ", "Золотое медресе", "Golden madrasa"],
    ["Донишҷӯён аз тамоми минтақа меомаданд.", "Ученики съезжались со всего региона.", "Students came from across the region."],
    ["Дар замони Сомониён Бухоро чӣ нақш дошт?", "Какую роль играла Бухара при Саманидах?", "What role did Bukhara play under the Samanids?"],
    [opt("a", "Пойтахт ва маркази илму фарҳанг", "Столица и центр науки и культуры", "Capital and centre of learning and culture", true), opt("b", "Танҳо деҳаи хурд", "Лишь маленькая деревня", "Only a small village", false), opt("c", "Пойтахти Хитой", "Столица Китая", "Capital of China", false), opt("d", "Қалъаи яҳудиён", "Иудейская крепость", "Jewish fortress", false)]),
  mission("c4", ["Пулу тиҷорат", "Мост и торговля", "Bridge and trade"],
    ["Корвонҳо аз ин ҷо мегузаштанд.", "Через город шли караваны.", "Caravans passed through the city."],
    ["Роҳи абришам Бухороро бо кадом самтҳо мепайваст?", "С какими направлениями Шёлковый путь связывал Бухару?", "Which directions did the Silk Road link Bukhara to?"],
    [opt("a", "Чин, Эрон, Ҳиндустон ва Ғарб", "Китай, Иран, Индия и Запад", "China, Iran, India and the West", true), opt("b", "Танҳо Африка", "Только Африка", "Only Africa", false), opt("c", "Танҳо Австралия", "Только Австралия", "Only Australia", false), opt("d", "Қутби Шимол", "Северный полюс", "North Pole", false)]),
  mission("c5", ["Ҳокими шаҳр", "Правитель города", "City ruler"],
    ["Шаҳрро ҳокими пурқудрат идора мекард.", "Городом правил могущественный государь.", "A powerful ruler governed the city."],
    ["Исмоили Сомонӣ чаро муҳим аст?", "Почему важен Исмаил Самани?", "Why is Ismail Samani important?"],
    [opt("a", "Мустаҳкам кардани давлати мустақил", "Укрепление независимого государства", "Strengthening an independent state", true), opt("b", "Кашфи Америка", "Открытие Америки", "Discovering America", false), opt("c", "Сохтани Пирамидаҳо", "Строительство пирамид", "Building the pyramids", false), opt("d", "Ихтирои чоп", "Изобретение печати", "Inventing printing", false)]),
  mission("c6", ["Забони шеър", "Язык поэзии", "Language of poetry"],
    ["Дар кӯчаҳо шеър мехонданд.", "На улицах читали стихи.", "Poetry was recited in the streets."],
    ["Кадом шоир бо дарбори Сомонӣ алоқаманд аст?", "Какой поэт связан с саманидским двором?", "Which poet is linked to the Samanid court?"],
    [opt("a", "Рӯдакӣ", "Рудаки", "Rudaki", true), opt("b", "Шекспир", "Шекспир", "Shakespeare", false), opt("c", "Гомер", "Гомер", "Homer", false), opt("d", "Данте", "Данте", "Dante", false)]),
  mission("c7", ["Дин ва давлат", "Религия и государство", "Religion and state"],
    ["Ислом дини расмӣ буд, аммо фарҳанг гуногун буд.", "Ислам был официальной религией, но культура была многообразной.", "Islam was official, but culture was diverse."],
    ["Дар давраи Сомониён кадом дин бартарӣ дошт?", "Какая религия преобладала в эпоху Саманидов?", "Which religion prevailed in the Samanid era?"],
    [opt("a", "Исломи суннӣ", "Суннитский ислам", "Sunni Islam", true), opt("b", "Буддоизм", "Буддизм", "Buddhism", false), opt("c", "Масеҳият", "Христианство", "Christianity", false), opt("d", "Ҳиндуизм", "Индуизм", "Hinduism", false)]),
  mission("c8", ["Хазинаи дониш", "Сокровищница знаний", "Treasury of knowledge"],
    ["Китобхонаҳо пур аз дастхат буданд.", "Библиотеки были полны рукописей.", "Libraries were full of manuscripts."],
    ["Чаро Бухороро «Қуббату-л-ислом» меномиданд?", "Почему Бухару называли «Куббат аль-Ислам»?", "Why was Bukhara called “Qubbat al-Islam”?"],
    [opt("a", "Барои нақши бузурги динӣ ва илмӣ", "За выдающуюся религиозную и научную роль", "For its great religious and scholarly role", true), opt("b", "Барои кӯҳҳои баланд", "Из-за высоких гор", "For high mountains", false), opt("c", "Барои баҳри калон", "Из-за большого моря", "For a large sea", false), opt("d", "Барои яхбандӣ", "Из-за ледников", "For glaciers", false)]),
  mission("c9", ["Муҳосира", "Осада", "Siege"],
    ["Душманон ба шаҳр наздик шуданд.", "Враги приблизились к городу.", "Enemies approached the city."],
    ["Дар охири асри X Бухоро аз кадом хавф ранҷ мекашид?", "От какой угрозы страдала Бухара в конце X века?", "What threat did Bukhara face in the late 10th century?"],
    [opt("a", "Ҳуҷуми Қарахониён", "Натиск Караханидов", "Qarakhanid pressure", true), opt("b", "Ҳуҷуми Викингҳо", "Набег викингов", "Viking raids", false), opt("c", "Заминларзаи Ҷопон", "Землетрясение в Японии", "Japan earthquake", false), opt("d", "Тӯфони Атлантик", "Атлантический ураган", "Atlantic hurricane", false)]),
  mission("c10", ["Меъмории хиштӣ", "Кирпичная архитектура", "Brick architecture"],
    ["Бинҳои зебо аз хишт сохта шудаанд.", "Красивые здания построены из кирпича.", "Beautiful buildings are made of brick."],
    ["Мақбараи Исмоили Сомонӣ бо чӣ маъруф аст?", "Чем известен мавзолей Исмаила Самани?", "What is Ismail Samani’s mausoleum known for?"],
    [opt("a", "Меъмории қадимии исломӣ аз хишт", "Древняя исламская кирпичная архитектура", "Early Islamic brick architecture", true), opt("b", "Шишаи муосир", "Современное стекло", "Modern glass", false), opt("c", "Чӯби тропикӣ", "Тропическое дерево", "Tropical wood", false), opt("d", "Санги мармур аз Итолиё", "Итальянский мрамор", "Italian marble", false)]),
  mission("c11", ["Бозори абрешим", "Шёлковый базар", "Silk bazaar"],
    ["Бӯи адвия ва абрешим дар ҳаво аст.", "В воздухе запах пряностей и шёлка.", "The air smells of spices and silk."],
    ["Кадом молҳо аз Роҳи абришам мегузаштанд?", "Какие товары шли по Шёлковому пути?", "What goods traveled the Silk Road?"],
    [opt("a", "Абрешим, адвия, коғаз, андешаҳо", "Шёлк, пряности, бумага, идеи", "Silk, spices, paper, ideas", true), opt("b", "Танҳо ях", "Только лёд", "Only ice", false), opt("c", "Танҳо нафт", "Только нефть", "Only oil", false), opt("d", "Танҳо пластик", "Только пластик", "Only plastic", false)]),
  mission("c12", ["Ҷуғрофияи сиёсӣ", "Политическая география", "Political geography"],
    ["Шаҳрҳои дигар низ муҳим буданд.", "Другие города тоже были важны.", "Other cities also mattered."],
    ["Самарқанд дар давраи Сомониён чӣ мақом дошт?", "Какой статус имел Самарканд при Саманидах?", "What status did Samarkand have under the Samanids?"],
    [opt("a", "Шаҳри муҳими дуюм / маркази минтақавӣ", "Важный второй город / региональный центр", "Important second city / regional centre", true), opt("b", "Пойтахти ягонаи Хилофат", "Единственная столица Халифата", "Sole caliphate capital", false), opt("c", "Шаҳри пинҳон", "Скрытый город", "Hidden city", false), opt("d", "Деҳаи моҳигирӣ", "Рыбацкая деревня", "Fishing village", false)]),
  mission("c13", ["Фалсафа ва тиб", "Философия и медицина", "Philosophy and medicine"],
    ["Олимон дар ин шаҳр менавиштанд.", "Учёные писали в этом городе.", "Scholars wrote in this city."],
    ["Ибни Сино бо кадом номи лотинӣ дар Аврупо маъруф шуд?", "Под каким латинским именем Ибн Сина известен в Европе?", "Under what Latin name is Ibn Sina known in Europe?"],
    [opt("a", "Ависенна", "Авиценна", "Avicenna", true), opt("b", "Аристотел", "Аристотель", "Aristotle", false), opt("c", "Гален", "Гален", "Galen", false), opt("d", "Гиппократ", "Гиппократ", "Hippocrates", false)]),
  mission("c14", ["Суқути пойтахт", "Падение столицы", "Fall of the capital"],
    ["Соли 999 барои Бухоро тақдирсоз буд.", "999 год стал судьбоносным для Бухары.", "The year 999 was fateful for Bukhara."],
    ["Соли 999 чӣ рӯй дод?", "Что произошло в 999 году?", "What happened in 999?"],
    [opt("a", "Қарахониён Бухороро гирифтанд", "Караханиды взяли Бухару", "Qarakhanids took Bukhara", true), opt("b", "Кашфи оташ", "Открытие огня", "Discovery of fire", false), opt("c", "Бунёди Рим", "Основание Рима", "Founding of Rome", false), opt("d", "Ҷанги Ватерлоо", "Битва при Ватерлоо", "Battle of Waterloo", false)]),
  mission("c15", ["Мероси пойтахт", "Наследие столицы", "Capital’s legacy"],
    ["Бухоро то имрӯз рамзи фарҳанг аст.", "Бухара до сих пор символ культуры.", "Bukhara is still a symbol of culture."],
    ["Чаро Бухоро барои тоҷикон муҳим аст?", "Почему Бухара важна для таджиков?", "Why is Bukhara important for Tajiks?"],
    [opt("a", "Маркази таърихӣ-фарҳангии гузаштаи муштарак", "Историко-культурный центр общего прошлого", "Historic-cultural centre of a shared past", true), opt("b", "Пойтахти муосири Тоҷикистон", "Современная столица Таджикистана", "Modern capital of Tajikistan", false), opt("c", "Шаҳри Ҷопон", "Город Японии", "A city in Japan", false), opt("d", "Ҷазираи баҳрӣ", "Морской остров", "A sea island", false)]),
]

const silkMissions: Mission[] = [
  mission("s1", ["Оғози роҳ", "Начало пути", "Start of the road"],
    ["Корвон аз шарқ ба ғарб ҳаракат мекунад.", "Караван движется с востока на запад.", "The caravan moves from east to west."],
    ["Роҳи абришам асосан чӣ мепайваст?", "Что в основном связывал Шёлковый путь?", "What did the Silk Road mainly connect?"],
    [opt("a", "Чин бо Осиёи Миёна, Эрон ва Аврупо", "Китай со Средней Азией, Ираном и Европой", "China with Central Asia, Iran and Europe", true), opt("b", "Танҳо Африка бо Антарктида", "Только Африку с Антарктидой", "Only Africa with Antarctica", false), opt("c", "Танҳо Амрикои Ҷанубӣ", "Только Южную Америку", "Only South America", false), opt("d", "Танҳо Австралия", "Только Австралию", "Only Australia", false)]),
  mission("s2", ["Моли асосӣ", "Главный товар", "Main good"],
    ["Номи роҳ аз як мол гирифта шудааст.", "Название пути взято от одного товара.", "The road is named after one commodity."],
    ["Чаро ин роҳро «Роҳи абришам» номидаанд?", "Почему путь назвали «Шёлковым»?", "Why was it called the Silk Road?"],
    [opt("a", "Абрешими чинӣ молҳои асосии тиҷорат буд", "Китайский шёлк был ключевым товаром", "Chinese silk was a key trade good", true), opt("b", "Роҳ аз абрешим сохта шудааст", "Дорога сделана из шёлка", "The road was made of silk", false), opt("c", "Фақат шоирон аз он мегузаштанд", "По ней ходили только поэты", "Only poets used it", false), opt("d", "Абрешим дар яхдон нигоҳ дошта мешуд", "Шёлк хранили во льду", "Silk was stored in ice", false)]),
  mission("s3", ["Шаҳрҳои калидӣ", "Ключевые города", "Key cities"],
    ["Корвон ба шаҳрҳои калон мерасад.", "Караван достигает крупных городов.", "The caravan reaches major cities."],
    ["Кадом шаҳрҳо марказҳои муҳими Роҳи абришам дар Осиёи Миёна буданд?", "Какие города были важными центрами Шёлкового пути в Средней Азии?", "Which cities were major Silk Road hubs in Central Asia?"],
    [opt("a", "Самарқанд, Бухоро, Марв", "Самарканд, Бухара, Мерв", "Samarkand, Bukhara, Merv", true), opt("b", "Париж, Лондон, Берлин", "Париж, Лондон, Берлин", "Paris, London, Berlin", false), opt("c", "Ню-Йорк, Токио", "Нью-Йорк, Токио", "New York, Tokyo", false), opt("d", "Кейптаун", "Кейптаун", "Cape Town", false)]),
  mission("s4", ["На танҳо мол", "Не только товары", "Not only goods"],
    ["Бо корвонҳо чизи дигаре ҳам меомад.", "С караванами шло и нечто иное.", "Something else came with the caravans."],
    ["Ғайр аз мол, Роҳи абришам чӣ интиқол медод?", "Помимо товаров, что ещё нёс Шёлковый путь?", "Besides goods, what else did the Silk Road carry?"],
    [opt("a", "Андеша, дин, технология ва фарҳанг", "Идеи, религии, технологии и культуру", "Ideas, religions, technology and culture", true), opt("b", "Танҳо санг", "Только камни", "Only stones", false), opt("c", "Танҳо барф", "Только снег", "Only snow", false), opt("d", "Танҳо ҳаво", "Только воздух", "Only air", false)]),
  mission("s5", ["Коғаз ба ғарб", "Бумага на запад", "Paper westward"],
    ["Пас аз Ҷанги Талос дониши нав паҳн шуд.", "После битвы при Таласе распространились новые знания.", "After Talas, new knowledge spread."],
    ["Ҷанги Талос (751) ба паҳншавии чӣ кумак кард?", "Битва при Таласе (751) способствовала распространению чего?", "The Battle of Talas (751) helped spread what?"],
    [opt("a", "Технологияи коғазсозӣ ба ғарб", "Технологии производства бумаги на запад", "Papermaking technology westward", true), opt("b", "Автомобил", "Автомобиль", "The automobile", false), opt("c", "Телефон", "Телефон", "The telephone", false), opt("d", "Сателлит", "Спутник", "Satellites", false)]),
  mission("s6", ["Хавфҳои роҳ", "Опасности пути", "Road dangers"],
    ["Роҳ хатарнок буд.", "Путь был опасен.", "The road was dangerous."],
    ["Корвонҳо дар Роҳи абришам бо чӣ дучор мешуданд?", "С чем сталкивались караваны на Шёлковом пути?", "What did Silk Road caravans face?"],
    [opt("a", "Дуздӣ, биёбон, кӯҳҳо ва сиёсати маҳаллӣ", "Разбой, пустыни, горы и местная политика", "Bandits, deserts, mountains and local politics", true), opt("b", "Танҳо осоишгоҳҳо", "Только курорты", "Only resorts", false), opt("c", "Танҳо метрои зеризаминӣ", "Только метро", "Only subway", false), opt("d", "Танҳо интернет", "Только интернет", "Only internet", false)]),
  mission("s7", ["Дини буддоӣ", "Буддизм", "Buddhism"],
    ["Монахҳо низ аз роҳ мегузаштанд.", "По пути шли и монахи.", "Monks also traveled the road."],
    ["Кадом дин аз Ҳиндустон тавассути Роҳи абришам ба Чин расид?", "Какая религия из Индии через Шёлковый путь достигла Китая?", "Which religion reached China from India via the Silk Road?"],
    [opt("a", "Буддоизм", "Буддизм", "Buddhism", true), opt("b", "Протестантизм", "Протестантизм", "Protestantism", false), opt("c", "Шинто", "Синто", "Shinto", false), opt("d", "Вуду", "Вуду", "Voodoo", false)]),
  mission("s8", ["Ислом дар роҳ", "Ислам на пути", "Islam on the road"],
    ["Пас аз фатҳҳои араб дини нав паҳн шуд.", "После арабских завоеваний распространилась новая религия.", "After the Arab conquests a new religion spread."],
    ["Ислом дар Осиёи Миёна асосан чӣ гуна паҳн шуд?", "Как в основном распространялся ислам в Средней Азии?", "How did Islam mainly spread in Central Asia?"],
    [opt("a", "Фатҳ, тиҷорат ва табдилёбии тадриҷӣ", "Завоевания, торговля и постепенное обращение", "Conquest, trade and gradual conversion", true), opt("b", "Танҳо тавассути телевизион", "Только через телевидение", "Only via television", false), opt("c", "Танҳо тавассути ҳавопаймо", "Только самолётами", "Only by airplane", false), opt("d", "Танҳо дар асри XX", "Только в XX веке", "Only in the 20th century", false)]),
  mission("s9", ["Темур ва Самарқанд", "Тимур и Самарканд", "Timur and Samarkand"],
    ["Баъдтар як ҳокими пурқудрат шаҳрро шукуфо кард.", "Позже могущественный правитель возвысил город.", "Later a powerful ruler elevated the city."],
    ["Темур (Тамерлан) кадом шаҳрро пойтахти империяаш кард?", "Какой город Тимур сделал столицей своей империи?", "Which city did Timur make his imperial capital?"],
    [opt("a", "Самарқанд", "Самарканд", "Samarkand", true), opt("b", "Москва", "Москва", "Moscow", false), opt("c", "Қоҳира", "Каир", "Cairo", false), opt("d", "Мадрид", "Мадрид", "Madrid", false)]),
  mission("s10", ["Регистон", "Регистан", "Registan"],
    ["Майдони машҳур дар Самарқанд.", "Знаменитая площадь в Самарканде.", "A famous square in Samarkand."],
    ["Регистон рамзи кадом давра аст?", "Регистан — символ какой эпохи?", "Registan is a symbol of which era?"],
    [opt("a", "Темуриён", "Тимуридов", "Timurids", true), opt("b", "Юнони қадим", "Древней Греции", "Ancient Greece", false), opt("c", "Викингиҳо", "Викингов", "Vikings", false), opt("d", "Инқилоби саноатӣ", "Промышленной революции", "Industrial Revolution", false)]),
  mission("s11", ["Биёбони хавфнок", "Опасная пустыня", "Dangerous desert"],
    ["Корвон аз биёбон мегузарад.", "Караван пересекает пустыню.", "The caravan crosses a desert."],
    ["Кадом биёбонҳо дар роҳҳои Осиёи Миёна муҳим буданд?", "Какие пустыни были важны на путях Средней Азии?", "Which deserts mattered on Central Asian routes?"],
    [opt("a", "Қарақум ва Қизилқум", "Каракумы и Кызылкум", "Karakum and Kyzylkum", true), opt("b", "Сахара танҳо", "Только Сахара", "Only Sahara", false), opt("c", "Антарктида", "Антарктида", "Antarctica", false), opt("d", "Гobi танҳо дар Аврупо", "Гоби только в Европе", "Gobi only in Europe", false)]),
  mission("s12", ["Пули фарҳанг", "Культурный мост", "Cultural bridge"],
    ["Осиёи Миёна миёнарави фарҳангҳо буд.", "Средняя Азия была посредником культур.", "Central Asia mediated cultures."],
    ["Чаро Осиёи Миёна дар Роҳи абришам калидӣ буд?", "Почему Средняя Азия была ключевой на Шёлковом пути?", "Why was Central Asia key on the Silk Road?"],
    [opt("a", "Ҷойгиршавии ҷуғрофӣ байни Шарқ ва Ғарб", "Географическое положение между Востоком и Западом", "Geographic position between East and West", true), opt("b", "Набудани одамон", "Отсутствие людей", "Absence of people", false), opt("c", "Набудани шаҳрҳо", "Отсутствие городов", "Absence of cities", false), opt("d", "Танҳо яхбандӣ", "Только ледники", "Only ice", false)]),
  mission("s13", ["Суқути роҳ", "Упадок пути", "Decline of the road"],
    ["Бо замон роҳ тағйир ёфт.", "Со временем путь изменился.", "Over time the route changed."],
    ["Кадом омилҳо ба сустшавии Роҳи абришами хушкӣ кумак карданд?", "Какие факторы способствовали упадку сухопутного Шёлкового пути?", "What factors helped decline the overland Silk Road?"],
    [opt("a", "Роҳҳои баҳрӣ ва тағйироти сиёсӣ", "Морские пути и политические перемены", "Sea routes and political change", true), opt("b", "Ихтирои велосипед", "Изобретение велосипеда", "Invention of the bicycle", false), opt("c", "Набудани офтоб", "Отсутствие солнца", "Lack of sun", false), opt("d", "Манъи нафаскашӣ", "Запрет дыхания", "Ban on breathing", false)]),
  mission("s14", ["Мероси имрӯз", "Наследие сегодня", "Legacy today"],
    ["Ёдгориҳои роҳ то ҳол боқӣ мондаанд.", "Памятники пути сохранились до сих пор.", "Road monuments still remain."],
    ["Кадом ёдгориҳо мероси Роҳи абришамро нишон медиҳанд?", "Какие памятники отражают наследие Шёлкового пути?", "Which monuments reflect Silk Road heritage?"],
    [opt("a", "Мадрасаҳо, масҷидҳо, корвонсаройҳо", "Медресе, мечети, караван-сараи", "Madrasas, mosques, caravanserais", true), opt("b", "Осмонхарошҳои шишагӣ", "Стеклянные небоскрёбы", "Glass skyscrapers", false), opt("c", "Истгоҳҳои метро", "Станции метро", "Metro stations", false), opt("d", "Паркингҳои калон", "Большие парковки", "Large parking lots", false)]),
  mission("s15", ["Хулосаи сафар", "Итог путешествия", "Journey’s end"],
    ["Шумо ба охири экспедитсия расидед.", "Вы дошли до конца экспедиции.", "You reached the end of the expedition."],
    ["Аҳамияти асосии Роҳи абришам чӣ буд?", "В чём главное значение Шёлкового пути?", "What was the main significance of the Silk Road?"],
    [opt("a", "Пайвастани тамаддунҳо тавассути тиҷорат ва фарҳанг", "Связь цивилизаций через торговлю и культуру", "Linking civilizations through trade and culture", true), opt("b", "Ҷудо кардани ҷаҳон", "Разделение мира", "Dividing the world", false), opt("c", "Манъи сафар", "Запрет путешествий", "Banning travel", false), opt("d", "Нести танҳо ҷанг", "Нести только войну", "Carrying only war", false)]),
]

export const expeditions: Expedition[] = [
  {
    id: "1",
    slug: "manuscript",
    titleKey: "manuscript",
    periodKey: "samanid",
    difficulty: "hard",
    xp: 750,
    time: "40 min",
    status: "available",
    missions: manuscriptMissions,
  },
  {
    id: "2",
    slug: "capital",
    titleKey: "capital",
    periodKey: "samanidYears",
    difficulty: "hard",
    xp: 750,
    time: "40 min",
    status: "available",
    missions: capitalMissions,
  },
  {
    id: "3",
    slug: "silk-road",
    titleKey: "silkRoad",
    periodKey: "medieval",
    difficulty: "hard",
    xp: 900,
    time: "45 min",
    status: "available",
    missions: silkMissions,
  },
]

export function getExpeditionBySlug(slug: string): Expedition | undefined {
  return expeditions.find((e) => e.slug === slug)
}

export function getAvailableExpeditions(): Expedition[] {
  return expeditions.filter((e) => e.status === "available")
}
