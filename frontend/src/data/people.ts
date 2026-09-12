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
  /** Portrait / photo URL */
  image?: string
  status: "published" | "draft"
}

export const people: Person[] = [
  // ——— 6 Қаҳрамони Тоҷикистон (бо тартиби расмӣ) ———
  {
    id: "10",
    slug: "sadriddin-aini",
    name: "Sadriddin Aini",
    nameTj: "Садриддин Айнӣ",
    nameRu: "Садриддин Айни",
    alternativeNames: ["Садриддин Саидмуродов"],
    birthYear: "1878",
    deathYear: "1954",
    birthPlace: "Соктаре (Ғиждувон)",
    deathPlace: "Душанбе",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio:
      "Асосгузори адабиёти муосири тоҷик; аввалин Президенти Академияи илмҳои Тоҷикистон; Қаҳрамони Тоҷикистон (1997).",
    biography:
      "Садриддин Айнӣ соли 1878 дар деҳаи Соктаре таваллуд шудааст. Ӯ асосгузори насри муосири тоҷик ва яке аз бунёдгузорони адабиёти нави тоҷик ҳисоб мешавад. Романҳои «Дохунда», «Ғуломон», «Марги судхӯр» ва ёддоштҳои ӯ барои ташаккули забони адабии тоҷикӣ нақши бузург бозидаанд. Соли 1951 аввалин Президенти Академияи илмҳои ҶШС Тоҷикистон интихоб шуд. Соли 1997 ба ӯ унвони олии Қаҳрамони Тоҷикистон дода шуд.",
    biographyRu:
      "Садриддин Айни родился в 1878 году в кишлаке Соктаре. Он считается основоположником современной таджикской прозы и одним из создателей новой таджикской литературы. Романы «Дохунда», «Рабы», «Смерть ростовщика» и его мемуары сыграли огромную роль в становлении литературного таджикского языка. В 1951 году избран первым Президентом Академии наук Таджикской ССР. В 1997 году удостоен высшего звания Героя Таджикистана.",
    biographyEn:
      "Sadriddin Aini was born in 1878 in the village of Saktare. He is regarded as the founder of modern Tajik prose and one of the creators of new Tajik literature. His novels and memoirs played a major role in shaping the modern Tajik literary language. In 1951 he became the first President of the Academy of Sciences of the Tajik SSR. In 1997 he was awarded the title Hero of Tajikistan.",
    achievements: [
      "Асосгузори адабиёти муосири тоҷик",
      "Аввалин Президенти Академияи илмҳои Тоҷикистон",
      "Қаҳрамони Тоҷикистон (1997)",
    ],
    sources: ["Википедияи тоҷикӣ", "Таърихи адабиёти тоҷик"],
    status: "published",
  },
  {
    id: "11",
    slug: "bobojon-ghafurov",
    name: "Bobojon Ghafurov",
    nameTj: "Бобоҷон Ғафуров",
    nameRu: "Бободжан Гафуров",
    alternativeNames: ["Бобоҷон Ғафурович Ғафуров"],
    birthYear: "1909",
    deathYear: "1977",
    birthPlace: "Исфисор (Хуҷанд)",
    deathPlace: "Душанбе",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio:
      "Таърихшинос ва шарқшинос; муаллифи китоби «Тоҷикон»; Қаҳрамони Тоҷикистон (1997).",
    biography:
      "Бобоҷон Ғафуров соли 1909 дар Исфисор таваллуд шудааст. Ӯ академики Академияи илмҳои ИҶШС, арбоби ҳизбӣ ва давлатӣ буд. Асари бузурги ӯ «Тоҷикон» барои худшиносии миллӣ ва илми шарқшиносӣ аҳамияти ҷаҳонӣ дорад. Солҳо Котиби якуми КМ Ҳизби коммунистии Тоҷикистон ва баъдтар директори Пажӯҳишгоҳи шарқшиносии АИ ИҶШС буд. Соли 1997 ба ӯ унвони Қаҳрамони Тоҷикистон дода шуд.",
    biographyRu:
      "Бободжан Гафуров родился в 1909 году в Исфисоре. Академик АН СССР, партийный и государственный деятель. Его фундаментальный труд «Таджики» имеет мировое значение для национального самосознания и востоковедения. Был первым секретарём ЦК Компартии Таджикистана, затем директором Института востоковедения АН СССР. В 1997 году удостоен звания Героя Таджикистана.",
    biographyEn:
      "Bobojon Ghafurov was born in 1909 in Isfisor. An academician of the USSR Academy of Sciences and a party and state figure, his major work The Tajiks is of world importance for national identity and Oriental studies. He served as First Secretary of the Communist Party of Tajikistan and later as director of the Institute of Oriental Studies. In 1997 he was named Hero of Tajikistan.",
    achievements: [
      "Муаллифи китоби «Тоҷикон»",
      "Академики АИ ИҶШС",
      "Қаҳрамони Тоҷикистон (1997)",
    ],
    sources: ["Википедияи тоҷикӣ", "Китоби «Тоҷикон»"],
    status: "published",
  },
  {
    id: "7",
    slug: "emomali-rahmon",
    name: "Emomali Rahmon",
    nameTj: "Эмомалӣ Раҳмон",
    nameRu: "Эмомали Рахмон",
    alternativeNames: ["Эмомалӣ Шарифович Раҳмонов", "Emomali Sharipovich Rakhmonov"],
    birthYear: "1952",
    birthPlace: "Данғара",
    title: "Қаҳрамони Тоҷикистон · Президенти Ҷумҳурии Тоҷикистон",
    period: "Муосир",
    shortBio:
      "Президенти Ҷумҳурии Тоҷикистон; Қаҳрамони Тоҷикистон (1999); Пешвои миллат.",
    biography:
      "Эмомалӣ Раҳмон соли 1952 дар ноҳияи Данғара таваллуд шудааст. Соли 1992 раиси Шурои Олии Тоҷикистон интихоб гардид ва дар давраи ҷанги шаҳрвандӣ роҳбарии давлатро ба уҳда гирифт. Соли 1994 Президенти Ҷумҳурии Тоҷикистон интихоб шуд. Соли 1999 барои мустаҳкам намудани давлатдории соҳибистиқлол ва пойдории сулҳ бо унвони олии Қаҳрамони Тоҷикистон қадр гардид. Унвони «Пешвои миллат» ба ӯ дода шудааст.",
    biographyRu:
      "Эмомали Рахмон родился в 1952 году в районе Дангара. В 1992 году был избран председателем Верховного Совета Таджикистана и возглавил государство в период гражданской войны. В 1994 году избран Президентом Республики Таджикистан. В 1999 году за укрепление независимой государственности и мира удостоен звания Героя Таджикистана. Ему присвоено звание «Лидер нации».",
    biographyEn:
      "Emomali Rahmon was born in 1952 in the Danghara district. In 1992 he was elected Chairman of the Supreme Council of Tajikistan and led the state during the civil war. In 1994 he was elected President. In 1999 he was awarded the title Hero of Tajikistan for strengthening independent statehood and peace. He holds the title Leader of the Nation.",
    achievements: [
      "Қаҳрамони Тоҷикистон (1999)",
      "Раҳбарии давлат дар давраи ҷанги шаҳрвандӣ",
      "Раванди сулҳ ва созиши миллӣ",
      "Президенти Ҷумҳурии Тоҷикистон аз соли 1994",
    ],
    sources: [
      "Сомонаи расмии Президенти Ҷумҳурии Тоҷикистон",
      "Таърихи муосири Тоҷикистон",
    ],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Emomali_Rahmon_on_April_3%2C_2025_%28cropped%29.jpg/960px-Emomali_Rahmon_on_April_3%2C_2025_%28cropped%29.jpg",
    status: "published",
  },
  {
    id: "12",
    slug: "mirzo-tursunzoda",
    name: "Mirzo Tursunzoda",
    nameTj: "Мирзо Турсунзода",
    nameRu: "Мирзо Турсун-заде",
    birthYear: "1911",
    deathYear: "1977",
    birthPlace: "Қаратоғ",
    deathPlace: "Душанбе",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio:
      "Шоири халқии Тоҷикистон; раиси Иттифоқи нависандагон; Қаҳрамони Тоҷикистон (2001).",
    biography:
      "Мирзо Турсунзода соли 1911 дар Қаратоғ таваллуд шудааст. Ӯ шоири халқии Тоҷикистон, академики АИ Тоҷикистон, раиси Иттифоқи нависандагони Тоҷикистон ва раиси Кумитаи якдилии халқҳои Осиё ва Африқо буд. Барои хидматҳои шоиста соли 2001 ба ӯ унвони Қаҳрамони Тоҷикистон дода шуд.",
    biographyRu:
      "Мирзо Турсун-заде родился в 1911 году в Каратаге. Народный поэт Таджикистана, академик АН Таджикистана, председатель Союза писателей Таджикистана и Комитета солидарности народов Азии и Африки. В 2001 году удостоен звания Героя Таджикистана.",
    biographyEn:
      "Mirzo Tursunzoda was born in 1911 in Karatag. People's Poet of Tajikistan, academician, chairman of the Writers' Union of Tajikistan and of the Afro-Asian Peoples' Solidarity Committee. In 2001 he was awarded the title Hero of Tajikistan.",
    achievements: [
      "Шоири халқии Тоҷикистон",
      "Қаҳрамони Меҳнати Сотсиалистӣ",
      "Қаҳрамони Тоҷикистон (2001)",
    ],
    sources: ["Википедияи тоҷикӣ", "ВКХ ҶТ"],
    status: "published",
  },
  {
    id: "13",
    slug: "nusratullo-makhsum",
    name: "Nusratullo Makhsum",
    nameTj: "Нусратулло Махсум",
    nameRu: "Нусратулло Махсум",
    alternativeNames: ["Нусратулло Лутфуллоев"],
    birthYear: "1881",
    deathYear: "1938",
    birthPlace: "Чоркӯҳ",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio:
      "Арбоби давлатӣ; яке аз асосгузорони Ҷумҳурии Тоҷикистон; Қаҳрамони Тоҷикистон (2006).",
    biography:
      "Нусратулло Махсум (Лутфуллоев) соли 1881 таваллуд шудааст. Ӯ ходими давлатӣ ва ҳизбӣ буд ва дар таъсиси Ҷумҳурии Тоҷикистон нақши муҳим бозид. Соли 2006 ба ӯ унвони олии Қаҳрамони Тоҷикистон (пас аз вафот) дода шуд.",
    biographyRu:
      "Нусратулло Махсум (Лутфуллоев) родился в 1881 году. Государственный и партийный деятель, сыгравший важную роль в создании Республики Таджикистан. В 2006 году посмертно удостоен звания Героя Таджикистана.",
    biographyEn:
      "Nusratullo Makhsum (Lutfulloev) was born in 1881. A state and party figure who played an important role in the creation of the Republic of Tajikistan. In 2006 he was posthumously awarded the title Hero of Tajikistan.",
    achievements: [
      "Нақш дар таъсиси Ҷумҳурии Тоҷикистон",
      "Қаҳрамони Тоҷикистон (2006)",
    ],
    sources: ["Википедияи тоҷикӣ"],
    status: "published",
  },
  {
    id: "14",
    slug: "shirinsho-shotemur",
    name: "Shirinsho Shotemur",
    nameTj: "Шириншоҳ Шоҳтемур",
    nameRu: "Шириншо Шотемур",
    alternativeNames: ["Шириншо Шотемуров"],
    birthYear: "1899",
    deathYear: "1937",
    birthPlace: "Шугнан",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio:
      "Арбоби давлатӣ; муборизи табдили Тоҷикистон ба ҷумҳурии иттифоқӣ; Қаҳрамони Тоҷикистон (2006).",
    biography:
      "Шириншоҳ Шоҳтемур соли 1899 дар Шуғнон таваллуд шудааст. Ӯ ходими давлатӣ ва ҳизбӣ буд ва барои табдили Тоҷикистон ба ҷумҳурии иттифоқии баробарҳуқуқ дар ҳайати ИҶШС саъй кард. Соли 2006 ба ӯ унвони Қаҳрамони Тоҷикистон (пас аз вафот) дода шуд.",
    biographyRu:
      "Шириншо Шотемур родился в 1899 году в Шугнане. Государственный и партийный деятель, боровшийся за превращение Таджикистана в равноправную союзную республику в составе СССР. В 2006 году посмертно удостоен звания Героя Таджикистана.",
    biographyEn:
      "Shirinsho Shotemur was born in 1899 in Shughnan. A state and party figure who worked to make Tajikistan an equal union republic within the USSR. In 2006 he was posthumously awarded the title Hero of Tajikistan.",
    achievements: [
      "Мубориза барои мақоми ҷумҳурии иттифоқӣ",
      "Қаҳрамони Тоҷикистон (2006)",
    ],
    sources: ["Википедияи тоҷикӣ"],
    status: "published",
  },

  // ——— Дигар шахсиятҳои таърихӣ ———
  {
    id: "1",
    slug: "ismoili-somoni",
    name: "Ismail Samani",
    nameTj: "Исмоили Сомонӣ",
    nameRu: "Исмаил Самани",
    alternativeNames: ["Ismā‘īl ibn Aḥmad", "Amir Ismail"],
    birthYear: "849",
    deathYear: "907",
    birthPlace: "Фарғона",
    deathPlace: "Бухоро",
    dynasty: "Сомониён",
    title: "Амири давлати Сомониён",
    period: "Давраи Сомониён",
    shortBio:
      "Асосгузори давлати мустақили Сомониён; Мовароуннаҳр ва қисмате Хуросонро иттиҳод кард.",
    biography:
      "Исмоили Сомонӣ баъди вафоти бародараш Насри I, аз соли 892 амири мутлақи Давлати Сомониён гардид. Ҳанӯз дар аҳди Насри I Сомонӣ, Исмоил ибни Аҳмад саъю кӯшиш намуд, ки дар Бухоро ҳокими мутлақ гардад. Дар натиҷа байни ӯ ва Насри I зиддият ба амал омада, он бо задухурди ҳарбӣ анҷом ёфт. Соли 892 Наср аз дунё рафт ва мувофиқи васияти ӯ Исмоил сарвари Хонадони Сомониён ва амири Давлати Сомониён (Мовароуннаҳр) гардид.",
    biographyRu:
      "Исмаил Самани после смерти брата Насра I с 892 года стал полновластным амиром Государства Саманидов. В 892 году Наср умер, и по его завещанию Исмаил стал главой рода Саманидов и амиром Государства Саманидов (Мавераннахр).",
    biographyEn:
      "After the death of his brother Nasr I, Ismail Samani became absolute amir of the Samanid state from 892. In 892 Nasr died, and by his will Ismail became head of the Samanid house and amir of the Samanid state (Transoxiana).",
    achievements: [
      "Мустаҳкам кардани ҳокимияти Сомониён дар Мовароуннаҳр",
      "Пуштибонӣ аз забон ва фарҳанги форсӣ",
      "Табдили Бухоро ба пойтахти фарҳангӣ",
    ],
    sources: [
      "Наршахӣ, Таърихи Бухоро",
      "Frye, R.N. The History of Bukhara",
    ],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/%D0%98%D1%81%D0%BC%D0%BE%D0%B8%D0%BB%D0%B8_%D0%A1%D0%BE%D0%BC%D0%BE%D0%BD%D0%B8_%28%D0%9A%D0%BE%D0%BD%D0%B8%D0%B1%D0%BE%D0%B4%D0%BE%D0%BC%29.jpg/960px-%D0%98%D1%81%D0%BC%D0%BE%D0%B8%D0%BB%D0%B8_%D0%A1%D0%BE%D0%BC%D0%BE%D0%BD%D0%B8_%28%D0%9A%D0%BE%D0%BD%D0%B8%D0%B1%D0%BE%D0%B4%D0%BE%D0%BC%29.jpg",
    status: "published",
  },
  {
    id: "2",
    slug: "rudaki",
    name: "Rudaki",
    nameTj: "Рӯдакӣ",
    nameRu: "Рудаки",
    alternativeNames: ["Abu Abdulloh Rudaki"],
    birthYear: "858",
    deathYear: "941",
    birthPlace: "Панҷрӯд",
    deathPlace: "Панҷрӯд",
    dynasty: "Дарбори Сомониён",
    title: "Шоир",
    period: "Давраи Сомониён",
    shortBio:
      "Нахустин шоири бузурги адабиёти форсии дарӣ; дар дарбори Сомониён шеър гуфт.",
    biography:
      "Рӯдакӣ бунёнгузори шеъри классикии форсӣ шинохта мешавад. Уй дар дарбори Сомониён дар Бухоро хизмат мекард ва ҳазорҳо байт суруд.",
    biographyRu:
      "Рудаки признан основоположником классической персидской поэзии. Он служил при дворе Саманидов в Бухаре.",
    biographyEn:
      "Rudaki is recognized as the founder of classical Persian poetry. He served at the Samanid court in Bukhara.",
    achievements: [
      "Бунёдгузори шеъри классикии форсӣ",
      "Шоири дарбори Сомониён",
    ],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/%D8%B1%D9%88%D8%AF%DA%A9%DB%8C_-_%D8%B1%D8%B3%D8%A7%D9%85_%D8%A7%D8%B1%DA%98%D9%86%DA%AF%DB%8C.jpg/960px-%D8%B1%D9%88%D8%AF%DA%A9%DB%8C_-_%D8%B1%D8%B3%D8%A7%D9%85_%D8%A7%D8%B1%DA%98%D9%86%DA%AF%DB%8C.jpg",
    status: "published",
  },
  {
    id: "3",
    slug: "ibn-sina",
    name: "Ibn Sina",
    nameTj: "Ибни Сино",
    nameRu: "Ибн Сина",
    alternativeNames: ["Avicenna", "Abu Ali ibn Sino"],
    birthYear: "980",
    deathYear: "1037",
    birthPlace: "Бухоро",
    deathPlace: "Ҳамадон",
    title: "Донишманд ва табиб",
    period: "Асри миёна",
    shortBio: "Файласуф, табиб ва олими бузурги Осиёи Миёна; муаллифи Қонуни тиб.",
    biography:
      "Ибни Сино яке аз бузургтарин олимони асри миёна аст. Уй дар Бухоро таҳсил кард ва китоби «ал-Қонун фи-т-тиб»-ро навишт.",
    biographyRu:
      "Ибн Сина — один из величайших учёных Средневековья. Он учился в Бухаре и написал «Канон врачебной науки».",
    biographyEn:
      "Ibn Sina is one of the greatest scholars of the Middle Ages. He studied in Bukhara and wrote The Canon of Medicine.",
    achievements: ["Муаллифи Қонуни тиб", "Фалсафа ва мантиқ"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Avicenna_Drawing.jpg/960px-Avicenna_Drawing.jpg",
    status: "published",
  },
  {
    id: "4",
    slug: "ferdowsi",
    name: "Ferdowsi",
    nameTj: "Фирдавсӣ",
    nameRu: "Фирдоуси",
    alternativeNames: ["Hakim Abul-Qasim Ferdowsi"],
    birthYear: "940",
    deathYear: "1020",
    birthPlace: "Тус",
    deathPlace: "Тус",
    title: "Шоир",
    period: "Асри миёна",
    shortBio: "Муаллифи ҳамосаи Шоҳнома — достони бузурги таърихи Эрон.",
    biography:
      "Фирдавсӣ Шоҳномаро тақрибан 30 сол навишт. Ин асар таърих, афсона ва ҳувияти фарҳангии ҷаҳони форсиро ҳифз мекунад.",
    biographyRu:
      "Фирдоуси писал «Шахнаме» около 30 лет.",
    biographyEn:
      "Ferdowsi spent about 30 years writing the Shahnameh.",
    achievements: ["Муаллифи Шоҳнома"],
    status: "published",
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
    biography:
      "Куруши Кабир империяи васеъро аз Осиёи Миёна то Баҳри Миёназамин бунёд кард.",
    biographyRu:
      "Кир Великий создал обширную империю от Средней Азии до Средиземного моря.",
    biographyEn:
      "Cyrus the Great built a vast empire from Central Asia to the Mediterranean.",
    status: "published",
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
    biography:
      "Темур империяи бузургеро дар Осиёи Миёна ва берун аз он бунёд кард. Самарқанд дар замони ӯ маркази сиёсӣ ва фарҳангӣ шуд.",
    biographyRu:
      "Тимур создал большую империю в Средней Азии и за её пределами.",
    biographyEn:
      "Timur built a large empire in Central Asia and beyond.",
    status: "published",
  },
]

export function getPersonBySlug(slug: string) {
  return people.find((p) => p.slug === slug)
}

export function getPublishedPeople() {
  return people.filter((p) => p.status === "published")
}
