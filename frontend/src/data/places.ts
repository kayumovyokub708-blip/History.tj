export interface Place {
  id: string
  slug: string
  name: string
  nameTj: string
  nameRu?: string
  location?: string
  country?: string
  period?: string
  coordinates?: string
  shortDesc: string
  shortDescRu?: string
  shortDescEn?: string
  description: string
  descriptionRu?: string
  descriptionEn?: string
  sources?: string[]
  status: "published" | "draft"
}

export const places: Place[] = [
  {
    id: "1",
    slug: "bukhara",
    name: "Bukhara",
    nameTj: "Бухоро",
    nameRu: "Бухара",
    location: "Ӯзбекистон",
    country: "Ӯзбекистон",
    period: "Пойтахти Сомониён",
    coordinates: "39.7747, 64.4286",
    shortDesc: "Шаҳри таърихӣ ва пойтахти давлати Сомониён.",
    shortDescRu: "Исторический город и столица государства Саманидов.",
    shortDescEn: "Historic city and capital of the Samanid state.",
    description:
      "Бухоро пойтахти империяи Сомониён ва яке аз марказҳои бузурги илм ва фарҳанг дар ҷаҳони исломии асри миёна буд. То ҳанӯз яке аз муҳимтарин маконҳои мероси Осиёи Миёна боқӣ мондааст.",
    descriptionRu:
      "Бухара была столицей империи Саманидов и одним из крупнейших центров науки и культуры средневекового исламского мира. До сих пор остаётся одним из важнейших мест наследия Средней Азии.",
    descriptionEn:
      "Bukhara was the capital of the Samanid empire and one of the great centres of learning and culture in the medieval Islamic world. It remains one of the most important heritage sites of Central Asia.",
    sources: ["Наршахӣ, Таърихи Бухоро"],
    status: "published",
  },
  {
    id: "2",
    slug: "samarkand",
    name: "Samarkand",
    nameTj: "Самарқанд",
    nameRu: "Самарканд",
    location: "Ӯзбекистон",
    country: "Ӯзбекистон",
    period: "Пойтахти Темуриён",
    coordinates: "39.6270, 66.9750",
    shortDesc: "Шаҳри қадимӣ дар Роҳи абришам; пойтахт дар замони Темур.",
    shortDescRu: "Древний город на Шёлковом пути; столица при Тимуре.",
    shortDescEn: "Ancient city on the Silk Road; capital under Timur.",
    description:
      "Самарқанд шаҳри муҳими Роҳи абришам ва баъдтар пойтахти империяи Темур буд. Ёдгорҳои он, аз ҷумла Регистон, рамзи шукуфоии фарҳанги Темуриён ҳисоб мешаванд.",
    descriptionRu:
      "Самарканд был важным городом Шёлкового пути, а позже столицей империи Тимура. Его памятники, в том числе Регистан, символизируют расцвет культуры Тимуридов.",
    descriptionEn:
      "Samarkand was a major Silk Road city and later the capital of Timur’s empire. Its monuments, including the Registan, symbolise the flowering of Timurid culture.",
    sources: ["Manz, The Rise and Rule of Tamerlane"],
    status: "published",
  },
  {
    id: "3",
    slug: "khujand",
    name: "Khujand",
    nameTj: "Хуҷанд",
    nameRu: "Худжанд",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Аз қадим то имрӯз",
    coordinates: "40.2822, 69.6220",
    shortDesc: "Яке аз қадимтарин шаҳрҳои Осиёи Миёна, дар канори Сирдарё.",
    shortDescRu: "Один из древнейших городов Средней Азии, на берегу Сырдарьи.",
    shortDescEn: "One of the oldest cities of Central Asia, on the Syr Darya.",
    description:
      "Хуҷанд (дар қадим Александрияи Аҳдарӣн ва шаклҳои баъдӣ) аз ҷумлаи қадимтарин шаҳрҳои муттасили Осиёи Миёна аст ва маркази муҳими шимоли Тоҷикистон мебошад.",
    descriptionRu:
      "Худжанд (в древности Александрия Эсхата и поздние названия) — один из древнейших непрерывно существующих городов Средней Азии и важный центр северного Таджикистана.",
    descriptionEn:
      "Khujand (ancient Alexandria Eschate and later names) is among the oldest continuously inhabited cities of Central Asia and a major centre of northern Tajikistan.",
    status: "published",
  },
  {
    id: "4",
    slug: "panjakent",
    name: "Panjakent",
    nameTj: "Панҷакент",
    nameRu: "Пенджикент",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Суғдӣ",
    coordinates: "39.4950, 67.6090",
    shortDesc: "Макони шаҳри қадими суғдӣ бо нақшҳои маъруф.",
    shortDescRu: "Место древнего согдийского города со знаменитыми росписями.",
    shortDescEn: "Site of an ancient Sogdian city with famous wall paintings.",
    description:
      "Панҷакенти қадим шаҳри суғдӣ буд, ки ба нақшҳои деворӣ ва фарҳанги шаҳрӣ маъруф аст. Пеш аз фатҳҳои араб ин ҷо маркази ҳаёт буд. Боқияҳои бостоншиносӣ сарчашмаи муҳими таърихи суғдӣ ҳисоб мераванд.",
    descriptionRu:
      "Древний Пенджикент был согдийским городом, известным стенными росписями и городской культурой. До арабских завоеваний это был оживлённый центр. Археологические остатки — важный источник по истории Согда.",
    descriptionEn:
      "Ancient Panjakent was a Sogdian city known for wall paintings and urban culture. Before the Arab conquests it was a lively centre. The archaeological remains are a major source for Sogdian history.",
    status: "published",
  },
  {
    id: "5",
    slug: "dushanbe",
    name: "Dushanbe",
    nameTj: "Душанбе",
    nameRu: "Душанбе",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Пойтахти муосир",
    coordinates: "38.5598, 68.7870",
    shortDesc: "Пойтахти Ҷумҳурии Тоҷикистон; маркази сиёсӣ, фарҳангӣ ва иқтисодӣ.",
    shortDescRu: "Столица Республики Таджикистан; политический, культурный и экономический центр.",
    shortDescEn: "Capital of the Republic of Tajikistan; political, cultural and economic centre.",
    description:
      "Душанбе пойтахти Ҷумҳурии Тоҷикистон аст. Аз деҳаи хурд дар ибтидои асри XX ба шаҳри калон табдил ёфт ва аз соли 1929 (бо номи Сталинобод) то имрӯз маркази асосии давлатдорӣ, илм ва фарҳанги тоҷик боқӣ мондааст. Ёдгориҳои муосир, осорхонаҳо ва майдонҳои марказӣ рамзи истиқлол ва таърихи нав мебошанд.",
    descriptionRu:
      "Душанбе — столица Республики Таджикистан. Из небольшого поселения начала XX века вырос в крупный город и с 1929 года (под именем Сталинабад) остаётся главным центром государственности, науки и культуры таджиков. Современные памятники, музеи и центральные площади символизируют независимость и новую историю.",
    descriptionEn:
      "Dushanbe is the capital of the Republic of Tajikistan. From a small settlement in the early 20th century it grew into a major city and since 1929 (as Stalinabad) has been the main centre of Tajik statehood, learning and culture. Modern monuments, museums and central squares symbolise independence and recent history.",
    status: "published",
  },
  {
    id: "6",
    slug: "kulob",
    name: "Kulob",
    nameTj: "Кӯлоб",
    nameRu: "Куляб",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Аз асри миёна то имрӯз",
    coordinates: "37.9146, 69.7845",
    shortDesc: "Яке аз қадимтарин шаҳрҳои ҷануби Тоҷикистон; маркази таърихӣ ва фарҳангӣ.",
    shortDescRu: "Один из древнейших городов юга Таджикистана; исторический и культурный центр.",
    shortDescEn: "One of the oldest cities of southern Tajikistan; historical and cultural centre.",
    description:
      "Кӯлоб дар ҷануби Тоҷикистон ҷойгир аст ва аз қадим ҳамчун маркази тиҷорат ва фарҳанг маълум буд. Мақбараи Мир Сайид Алии Ҳамадонӣ ва дигар ёдгориҳо шаҳрро бо таърихи исломӣ ва минтақавӣ пайваст мекунанд. Кӯлоб нақши муҳим дар таърихи сиёсии ҷануби кишвар дошт.",
    descriptionRu:
      "Куляб расположен на юге Таджикистана и с древности известен как центр торговли и культуры. Мавзолей Мир Сайида Али Хамадани и другие памятники связывают город с исламской и региональной историей. Куляб сыграл важную роль в политической истории юга страны.",
    descriptionEn:
      "Kulob lies in southern Tajikistan and has long been known as a centre of trade and culture. The mausoleum of Mir Sayyid Ali Hamadani and other monuments link the city to Islamic and regional history. Kulob played an important role in the political history of the south.",
    status: "published",
  },
  {
    id: "7",
    slug: "bokhtar",
    name: "Bokhtar",
    nameTj: "Бохтар",
    nameRu: "Бохтар",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Маркази вилояти Хатлон",
    coordinates: "37.8364, 68.7803",
    shortDesc: "Маркази маъмурии вилояти Хатлон; шаҳри муҳими ҷануби Тоҷикистон.",
    shortDescRu: "Административный центр Хатлонской области; важный город юга Таджикистана.",
    shortDescEn: "Administrative centre of Khatlon Region; major city of southern Tajikistan.",
    description:
      "Бохтар (собиқ Қӯрғонтеппа) маркази вилояти Хатлон аст. Шаҳр дар водиҳои ҳосилхези ҷануб ҷойгир буда, дар таърихи муосири Тоҷикистон ҳамчун маркази кишоварзӣ, саноат ва маъмурӣ аҳамият дорад. Номи «Бохтар» ба таърихи қадими Бохтар (Бактрия) ишора мекунад.",
    descriptionRu:
      "Бохтар (бывший Курган-Тюбе) — центр Хатлонской области. Город расположен в плодородных долинах юга и в современной истории Таджикистана важен как сельскохозяйственный, промышленный и административный центр. Название «Бохтар» отсылает к древней Бактрии.",
    descriptionEn:
      "Bokhtar (formerly Qurghonteppa) is the centre of Khatlon Region. Situated in the fertile southern valleys, it is important in modern Tajik history as an agricultural, industrial and administrative hub. The name Bokhtar recalls ancient Bactria.",
    status: "published",
  },
  {
    id: "8",
    slug: "danghara",
    name: "Danghara",
    nameTj: "Данғара",
    nameRu: "Дангара",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Ноҳияи Хатлон",
    coordinates: "38.0950, 69.2270",
    shortDesc: "Ноҳия ва шаҳраки муҳими вилояти Хатлон; зодгоҳи шахсиятҳои сиёсӣ.",
    shortDescRu: "Важный район и посёлок Хатлонской области; родина политических деятелей.",
    shortDescEn: "Important district and town of Khatlon Region; birthplace of political figures.",
    description:
      "Данғара дар вилояти Хатлон ҷойгир аст. Ноҳия барои кишоварзӣ ва нақши худ дар таърихи муосири Тоҷикистон маълум аст. Аз ин ҷо шахсиятҳои муҳими сиёсии кишвар баромадаанд; макон бо рӯйдодҳои асри XX ва давраи истиқлол пайваст аст.",
    descriptionRu:
      "Дангара находится в Хатлонской области. Район известен сельским хозяйством и ролью в современной истории Таджикистана. Отсюда вышли важные политические деятели страны; место связано с событиями XX века и периода независимости.",
    descriptionEn:
      "Danghara is in Khatlon Region. The district is known for agriculture and its role in modern Tajik history. Important political figures of the country come from here; the place is linked to 20th-century events and the independence period.",
    status: "published",
  },
  {
    id: "9",
    slug: "hisor",
    name: "Hisor",
    nameTj: "Ҳисор",
    nameRu: "Гиссар",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Қалъаи қадим",
    coordinates: "38.5250, 68.5510",
    shortDesc: "Қалъаи Ҳисор — яке аз муҳимтарин ёдгориҳои таърихии назди Душанбе.",
    shortDescRu: "Крепость Гиссар — один из важнейших исторических памятников близ Душанбе.",
    shortDescEn: "Hisor Fortress — one of the most important historical monuments near Dushanbe.",
    description:
      "Ҳисор (Гиссар) бо қалъаи қадимии худ маъруф аст. Қалъа дар тӯли асрҳо маркази сиёсӣ ва ҳарбӣ буд ва имрӯз яке аз ҷойҳои асосии сайёҳӣ ва омӯзиши таърихи водии Ҳисор мебошад.",
    descriptionRu:
      "Гиссар известен своей древней крепостью. Крепость веками была политическим и военным центром и сегодня — одно из главных мест туризма и изучения истории Гиссарской долины.",
    descriptionEn:
      "Hisor is known for its ancient fortress. For centuries the fortress was a political and military centre; today it is a main site for tourism and the study of the history of the Hisor valley.",
    status: "published",
  },
  {
    id: "10",
    slug: "istaravshan",
    name: "Istaravshan",
    nameTj: "Истаравшан",
    nameRu: "Истаравшан",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Шаҳри қадим (Уротеппа)",
    coordinates: "39.9142, 69.0036",
    shortDesc: "Яке аз қадимтарин шаҳрҳои шимоли Тоҷикистон; собиқ Уротеппа.",
    shortDescRu: "Один из древнейших городов севера Таджикистана; бывший Ура-Тюбе.",
    shortDescEn: "One of the oldest cities of northern Tajikistan; formerly Uroteppa.",
    description:
      "Истаравшан (собиқ Уротеппа) аз шаҳрҳои қадимии шимоли Тоҷикистон аст. Мадрасаҳо, масҷидҳо ва бозорҳои анъанавӣ ҳофизаи таърихии шаҳрро нигоҳ медоранд.",
    descriptionRu:
      "Истаравшан (бывший Ура-Тюбе) — один из древних городов севера Таджикистана. Медресе, мечети и традиционные базары сохраняют историческую память города.",
    descriptionEn:
      "Istaravshan (formerly Uroteppa) is among the ancient cities of northern Tajikistan. Madrasas, mosques and traditional bazaars preserve the city’s historical memory.",
    status: "published",
  },
  {
    id: "11",
    slug: "khorog",
    name: "Khorog",
    nameTj: "Хоруғ",
    nameRu: "Хорог",
    location: "Тоҷикистон",
    country: "Тоҷикистон",
    period: "Маркази Бадахшон",
    coordinates: "37.4910, 71.5530",
    shortDesc: "Маркази Вилояти Мухтори Кӯҳистони Бадахшон; дар Помир.",
    shortDescRu: "Центр Горно-Бадахшанской автономной области; на Памире.",
    shortDescEn: "Centre of Gorno-Badakhshan Autonomous Region; in the Pamirs.",
    description:
      "Хоруғ маркази Вилояти Мухтори Кӯҳистони Бадахшон аст. Шаҳр дар водиҳои Помир ҷойгир буда, дарвоза ба кӯҳҳои Бадахшон ва Роҳи Помир ҳисоб мешавад. Фарҳанги помирӣ ва манзараҳои кӯҳӣ ӯро махсус мегардонанд.",
    descriptionRu:
      "Хорог — центр Горно-Бадахшанской автономной области. Город лежит в долинах Памира и служит воротами в горы Бадахшана и на Памирский тракт. Памирская культура и горные пейзажи делают его особенным.",
    descriptionEn:
      "Khorog is the centre of Gorno-Badakhshan Autonomous Region. Set in Pamir valleys, it is a gateway to the Badakhshan mountains and the Pamir Highway. Pamiri culture and mountain landscapes make it distinctive.",
    status: "published",
  },
]

export function getPlaceBySlug(slug: string) {
  return places.find((p) => p.slug === slug)
}

export function getPublishedPlaces() {
  return places.filter((p) => p.status === "published")
}
