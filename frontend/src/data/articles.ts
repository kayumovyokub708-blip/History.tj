export type LocalizedText = {
  tg: string
  ru: string
  en: string
}

export interface Article {
  id: string
  slug: string
  title: LocalizedText
  category?: LocalizedText
  period?: string
  readTime?: LocalizedText
  shortDesc: LocalizedText
  content: LocalizedText
  sources?: string[]
  status: "published" | "draft"
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "why-samanids-matter",
    title: {
      tg: "Чаро Сомониён муҳим ҳастанд",
      ru: "Почему Саманиды важны",
      en: "Why the Samanids matter",
    },
    category: {
      tg: "Таърих",
      ru: "История",
      en: "History",
    },
    period: "819–999",
    readTime: {
      tg: "5 дақ",
      ru: "5 мин",
      en: "5 min",
    },
    shortDesc: {
      tg: "Фарҳанг, давлатдорӣ ва ҳофиза дар таърихи тоҷик.",
      ru: "Культура, государственность и память в истории таджиков.",
      en: "Culture, statehood and memory in Tajik history.",
    },
    content: {
      tg: "Давлати Сомониён барои бисёри тоҷикон ва форсизабонон ҳамчун асри тиллои фарҳанг ва идора дар Мовароуннаҳр ёд мешавад.\n\nБухоро дар замони Сомониён маркази илм буд. Шахсиятҳое ҳамчун Исмоили Сомонӣ ва Рӯдакӣ ин ҳофизаро мустаҳкам мекунанд.\n\nФаҳмидани Сомониён ба фаҳмидани забон, ҷуғрофия ва таърихи сиёсӣ дар Осиёи Миёна кумак мекунад.",
      ru: "Государство Саманидов для многих таджиков и персоязычных народов вспоминается как золотой век культуры и управления в Мавераннахре.\n\nБухара во времена Саманидов была центром науки. Такие личности, как Исмаил Самани и Рудаки, укрепляют эту память.\n\nПонимание Саманидов помогает понять язык, географию и политическую историю Средней Азии.",
      en: "The Samanid state is remembered by many Tajiks and Persian-speakers as a golden age of culture and governance in Transoxiana.\n\nBukhara was a centre of learning under the Samanids. Figures such as Ismail Samani and Rudaki reinforce that memory.\n\nUnderstanding the Samanids helps us understand language, geography and political history in Central Asia.",
    },
    sources: ["Frye, Bukhara: The Medieval Achievement"],
    status: "published",
  },
  {
    id: "2",
    slug: "silk-road-cities",
    title: {
      tg: "Шаҳрҳои Роҳи абришам дар Осиёи Миёна",
      ru: "Города Шёлкового пути в Средней Азии",
      en: "Silk Road cities of Central Asia",
    },
    category: {
      tg: "Ҷуғрофия",
      ru: "География",
      en: "Geography",
    },
    period: "Medieval",
    readTime: {
      tg: "6 дақ",
      ru: "6 мин",
      en: "6 min",
    },
    shortDesc: {
      tg: "Бухоро, Самарқанд ва шабакаҳои тиҷорат.",
      ru: "Бухара, Самарканд и торговые сети.",
      en: "Bukhara, Samarkand and trade networks.",
    },
    content: {
      tg: "Шаҳрҳое ҳамчун Бухоро ва Самарқанд дар роҳҳое қарор доштанд, ки Чин, Ҳиндустон, Эрон ва Баҳри Медитеранаро мепайвастанд.\n\nТиҷорат на танҳо мол, балки андеша ва фарҳанг ҳам меовард. Дарборҳо донишмандон ва ҳунармандонро ҳимоят мекарданд.\n\nМанзараи имрӯзаи ин шаҳрҳо ҳанӯз қабатҳои он таърихро нишон медиҳад.",
      ru: "Города вроде Бухары и Самарканда стояли на путях, связывавших Китай, Индию, Иран и Средиземноморье.\n\nТорговля приносила не только товары, но и идеи и культуру. Дворы поддерживали учёных и ремесленников.\n\nСегодняшний облик этих городов всё ещё показывает слои той истории.",
      en: "Cities such as Bukhara and Samarkand sat on routes linking China, India, Iran and the Mediterranean.\n\nTrade brought not only goods but ideas and culture. Courts supported scholars and artisans.\n\nThe modern face of these cities still shows layers of that history.",
    },
    status: "published",
  },
  {
    id: "3",
    slug: "independence-1991",
    title: {
      tg: "Истиқлолият дар соли 1991",
      ru: "Независимость в 1991 году",
      en: "Independence in 1991",
    },
    category: {
      tg: "Муосир",
      ru: "Современность",
      en: "Contemporary",
    },
    period: "1991—",
    readTime: {
      tg: "10 дақ",
      ru: "10 мин",
      en: "10 min",
    },
    shortDesc: {
      tg: "Рӯзи Истиқлолияти Ҷумҳурии Тоҷикистон — 9 сентябри соли 1991.",
      ru: "День государственной независимости Республики Таджикистан — 9 сентября 1991 года.",
      en: "Day of State Independence of the Republic of Tajikistan — 9 September 1991.",
    },
    content: {
      tg: "Рӯзи Истиқлолияти Ҷумҳурии Тоҷикистон — 9 сентябри соли 1991 Ҷумҳурии Тоҷикистон аз ИҶШС (СССР) соҳибистиқлол шуд. Ҳар сол дар Ҷумҳурии Тоҷикистон 9 сентябр — «Рӯзи истиқлолияти давлатии Ҷумҳурии Тоҷикистон» ҷашн гирифта мешавад. Иди Истиқлолият яке аз идҳои асосии расмии давлати Тоҷикистон аст.\n\nТаърих\n\nДар нимаи дуюми солҳои 80-уми асри XX баъд аз саршавии равандҳои демократикунонии ҷомеа дар ҷумҳуриҳои Иттиҳоди Шӯравӣ (СССР) ҷунбишу созмонҳои миллӣ-демократӣ ба миён омаданд. Сиёсати ислоҳотҳои демократӣ ва махсусан «ошкорбаёнӣ», ки аз ҷониби роҳбарияти ҳизби коммунистӣ (КПСС) ба миён оварда шуд, имконият фароҳам овард, ки камбудиҳои сиёсати коммунистии замони шӯравӣ оид ба вазъи иҷтимоиву сиёсӣ, иқтисодӣ, фарҳангӣ ва сиёсати миллӣ дар ҷумҳуриҳои миллии ИҶШС дар ҷомеа баррасӣ ва муҳокима карда шаванд.\n\nҶунбишу созмонҳои миллӣ-демократии дар охири солҳои 80-ум — ибтидои 90-ум дар Тоҷикистон ташкилёфта камбудиҳои дар ҷомеаи ҷумҳурӣ ҷойдоштаро ба элитаи роҳбарикунандаи ҳизбию давлатии ҷумҳурӣ ва ҳизби коммунистӣ (бевосита роҳбарияти ҲКИШ / КПСС) нисбат медоданд. Дар охири солҳои 80-ум муборизаи ҷунбишу созмонҳои миллӣ-демократии ҷумҳурӣ барои истиқлолияти Тоҷикистон сар шуд.\n\n24 августи соли 1990 дар Иҷлосияи дуюми Шӯрои Олии ҶШС Тоҷикистон бори аввал «Эъломияи истиқлолияти Ҷумҳурии Шӯравии Сотсиалистии Тоҷикистон дар ҳайати Иттиҳоди Шӯравӣ» (ИҶШС) қабул шуда буд. Вале ин ҳуҷҷат истиқлолияти комили мамлакатро пурра таъмин карда наметавонист.\n\nПас аз «табаддулот»-и бебарори Кумитаи давлатии вазъи фавқулода (КДВФ — ГКЧП), ки коммунистони тундрав 19–21 августи соли 1991 дар шаҳри Москва ташкил намуданд, аз нав муборизаи ҷунбишу созмонҳои миллӣ-демократии Тоҷикистон барои истиқлолияти комили Тоҷикистон аз Иттиҳоди Шӯравӣ авҷ гирифт. Гирдиҳамоиҳои серодам дар шаҳри Душанбе ва баъзе шаҳрҳои ҷумҳурӣ баргузор мегардиданд ва эълон намудани истиқлолияти Ҷумҳурии Тоҷикистонро талаб мекарданд.\n\nБо талаби тазоҳуркунандагони гирдиҳамоиҳо дар Душанбе Иҷлосияи ғайринавбатии Шӯрои Олии Ҷумҳурии Тоҷикистон даъват карда шуд. 9 сентябри соли 1991 вакилони Иҷлосияи ғайринавбатии Шӯрои Олии Ҷумҳурии Тоҷикистон, даъвати дувоздаҳум, ҳуҷҷати «Изҳорот дар бораи Истиқлолияти давлатии Ҷумҳурии Тоҷикистон»-ро қабул намуданд. Ҳамин ҳуҷҷати таърихӣ қонунан Истиқлолияти давлатии Ҷумҳурии Тоҷикистонро ба аҳли башар эълон кард.\n\nҶашн\n\nТибқи Қонуни Ҷумҳурии Тоҷикистон «Дар бораи рӯзҳои ид», 9 сентябр ҳамчун «Рӯзи истиқлолияти давлатии Ҷумҳурии Тоҷикистон» дар Ҷумҳурии Тоҷикистон муайян гардид. 9 сентябр иди расмии давлатӣ аст ва ҳар сол ҷашн гирифта мешавад. Дар рӯзи ид мувофиқи Низомнома «Дар бораи Байрақи давлатии Ҷумҳурии Тоҷикистон» Байрақи давлатии Ҷумҳурии Тоҷикистон афрохта мешавад.\n\nБа муносибати рӯзи ид бо ташаббуси мақомоти давлатӣ, ташкилотҳои ҷамъиятӣ ва коллективҳои меҳнатӣ чораҳои ҷамъиятию сиёсӣ андешида мешаванд. Парадҳои ҳарбӣ, салюти артиллерӣ ва оташбозӣ дар рӯзҳои ид мувофиқи қонунгузории Ҷумҳурии Тоҷикистон ва бо тартиби муайянкардаи Вазорати мудофиаи Ҷумҳурии Тоҷикистон ба ҷо оварда мешаванд.\n\nТоҷикистон марзубуми Оли Сомонӣ ман аст,\nХоку покаш дар шабистони ман аст.\nТоҷикам ман, Тоҷикистон кишварам,\nДар фазояш чун кабутар мепарам.",
      ru: "День государственной независимости Республики Таджикистан — 9 сентября 1991 года Республика Таджикистан стала независимой от СССР. Каждый год 9 сентября в Республике Таджикистан отмечается как «День государственной независимости Республики Таджикистан». Праздник Независимости — один из главных официальных государственных праздников Таджикистана.\n\nИстория\n\nВо второй половине 1980-х годов, после начала процессов демократизации общества в республиках Советского Союза, возникли национально-демократические движения и организации. Политика демократических реформ и особенно «гласность», выдвинутая руководством Коммунистической партии (КПСС), позволила обсуждать в обществе недостатки коммунистической политики советского периода в социально-политической, экономической, культурной сферах и в национальной политике.\n\nНационально-демократические движения и организации, возникшие в Таджикистане в конце 1980-х — начале 1990-х годов, связывали имевшиеся в обществе проблемы с партийно-государственной элитой республики и Коммунистической партией. В конце 1980-х годов началась борьба этих движений за независимость Таджикистана.\n\n24 августа 1990 года на второй сессии Верховного Совета Таджикской ССР впервые была принята «Декларация о независимости Таджикской Советской Социалистической Республики в составе Советского Союза». Однако этот документ не обеспечивал полной независимости страны.\n\nПосле провала «путча» Государственного комитета по чрезвычайному положению (ГКЧП) 19–21 августа 1991 года в Москве борьба национально-демократических сил Таджикистана за полную независимость от СССР вновь усилилась. В Душанбе и других городах республики проходили многочисленные митинги с требованием провозглашения независимости.\n\nПо требованию участников митингов была созвана внеочередная сессия Верховного Совета Республики Таджикистан. 9 сентября 1991 года депутаты внеочередной сессии Верховного Совета двенадцатого созыва приняли документ «Заявление о государственной независимости Республики Таджикистан». Этот исторический документ юридически провозгласил государственную независимость Республики Таджикистан.\n\nПразднование\n\nСогласно Закону Республики Таджикистан «О праздничных днях», 9 сентября определено как «День государственной независимости Республики Таджикистан». Это официальный государственный праздник, который отмечается ежегодно. В этот день в соответствии с Положением о Государственном флаге Республики Таджикистан поднимается Государственный флаг.\n\nПо инициативе государственных органов, общественных организаций и трудовых коллективов проводятся общественно-политические мероприятия. Военные парады, артиллерийский салют и фейерверки организуются в соответствии с законодательством и порядком, установленным Министерством обороны Республики Таджикистан.",
      en: "Day of State Independence of the Republic of Tajikistan — on 9 September 1991 the Republic of Tajikistan became independent from the USSR. Every year on 9 September Tajikistan celebrates the Day of State Independence. Independence Day is one of the main official state holidays of Tajikistan.\n\nHistory\n\nIn the second half of the 1980s, after democratisation processes began in the Soviet republics, national-democratic movements and organisations emerged. Democratic reforms and especially “glasnost”, promoted by the Communist Party leadership (CPSU), made it possible to discuss in society the shortcomings of Soviet communist policy in social, political, economic, cultural and national spheres.\n\nNational-democratic movements that formed in Tajikistan in the late 1980s and early 1990s attributed the problems in the republic to the party-state elite and the Communist Party. At the end of the 1980s their struggle for Tajikistan’s independence began.\n\nOn 24 August 1990 the second session of the Supreme Soviet of the Tajik SSR adopted for the first time the “Declaration of Independence of the Tajik Soviet Socialist Republic within the Soviet Union”. That document, however, did not provide full independence.\n\nAfter the failed coup of the State Committee on the State of Emergency (GKChP) in Moscow on 19–21 August 1991, the struggle of Tajikistan’s national-democratic forces for complete independence from the USSR intensified again. Large rallies in Dushanbe and other cities demanded the proclamation of independence.\n\nAt the demand of the demonstrators an extraordinary session of the Supreme Soviet of the Republic of Tajikistan was convened. On 9 September 1991 the deputies of the extraordinary session of the twelfth convocation adopted the “Statement on the State Independence of the Republic of Tajikistan”. This historic document legally proclaimed the state independence of the Republic of Tajikistan.\n\nCelebration\n\nUnder the Law of the Republic of Tajikistan “On Holidays”, 9 September is designated as the Day of State Independence. It is an official state holiday celebrated every year. On that day the State Flag is raised in accordance with the Regulation on the State Flag of the Republic of Tajikistan.\n\nState bodies, public organisations and work collectives organise public and political events. Military parades, artillery salutes and fireworks are held in accordance with the law and procedures set by the Ministry of Defence of the Republic of Tajikistan.",
    },
    status: "published",
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getPublishedArticles() {
  return articles.filter((a) => a.status === "published")
}
