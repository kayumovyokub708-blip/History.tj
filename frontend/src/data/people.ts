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
  image?: string
  status: "published" | "draft"
}

export const people: Person[] = [
  {
    id: "10",
    slug: "sadriddin-aini",
    name: "Sadriddin Aini",
    nameTj: "Садриддин Айнӣ",
    nameRu: "Садриддин Айни",
    alternativeNames: ["Садриддин Саидмуродов", "Садриддин Саид-Муродзода"],
    birthYear: "1878",
    deathYear: "1954",
    birthPlace: "Соктаре (Ғиждувон)",
    deathPlace: "Душанбе",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Асосгузори адабиёти муосири тоҷик; аввалин Президенти Академияи илмҳои Тоҷикистон; Қаҳрамони Тоҷикистон (1997).",
    biography: "Садриддин Айнӣ (Садриддин Саидмуродзода) 15 (27) апрели соли 1878 дар деҳаи Соктареи тумани Ғиждувони Аморати Бухоро таваллуд шудааст. Дар 12-солагӣ падару модарро аз даст дода, ба Бухоро омад ва дар мадрасаҳои Мири Араб, Олимхон, Бадалбек ва Кӯкалтош таҳсил кард. Ӯ асосгузори насри муосири тоҷик ва яке аз бунёдгузорони адабиёти нави тоҷик ҳисоб мешавад. Романҳои «Дохунда», «Ғуломон», «Марги судхӯр», достонҳо ва ёддоштҳои ӯ («Ёддоштҳо») барои ташаккули забони адабии тоҷикӣ нақши бузург бозидаанд. Солҳои тӯлонӣ вакили Шӯрои Олии Тоҷикистон буд. Соли 1951 аввалин Президенти Академияи илмҳои ҶШС Тоҷикистон интихоб шуд. Бо се ордени Ленин ва Ҷоизаи давлатии ИҶШС мукофотонида шудааст. 15 июли соли 1954 дар Душанбе вафот кард. Соли 1997 бо фармони Президенти Ҷумҳурии Тоҷикистон ба ӯ унвони олии Қаҳрамони Тоҷикистон дода шуд.",
    biographyRu: "Садриддин Айни (Садриддин Саидмуродович Саидмуродов) родился 15 (27) апреля 1878 года в кишлаке Соктаре Гиждуванского тумана Бухарского эмирата. В 12 лет потерял родителей, переехал в Бухару и учился в медресе Мир-Араб, Олим-хан, Бадалбек и Кукельдаш. Он считается основоположником современной таджикской прозы и одним из создателей новой таджикской литературы. Романы «Дохунда», «Рабы», «Смерть ростовщика», повести и мемуары («Воспоминания») сыграли огромную роль в становлении литературного таджикского языка. Долгие годы был депутатом Верховного Совета Таджикистана. В 1951 году избран первым Президентом Академии наук Таджикской ССР. Награждён тремя орденами Ленина и Государственной премией СССР. Умер 15 июля 1954 года в Душанбе. В 1997 году указом Президента Республики Таджикистан удостоен высшего звания Героя Таджикистана.",
    biographyEn: "Sadriddin Aini (Sadriddin Saidmurodzoda) was born on 15 (27) April 1878 in the village of Saktare in the Gijduvon district of the Emirate of Bukhara. Orphaned at twelve, he moved to Bukhara and studied at the Mir-i Arab, Olim-khan, Badalbek and Kukeldash madrasas. He is regarded as the founder of modern Tajik prose and one of the creators of new Tajik literature. His novels Dokhunda, The Slaves, Death of the Usurer, and his memoirs played a major role in shaping the modern Tajik literary language. For many years he was a deputy of the Supreme Soviet of Tajikistan. In 1951 he became the first President of the Academy of Sciences of the Tajik SSR. He was awarded three Orders of Lenin and the USSR State Prize. He died in Dushanbe on 15 July 1954. In 1997, by decree of the President of the Republic of Tajikistan, he was awarded the highest title Hero of Tajikistan.",
    achievements: ["Асосгузори адабиёти муосири тоҷик", "Аввалин Президенти Академияи илмҳои Тоҷикистон", "Муаллифи «Дохунда», «Ғуломон», «Ёддоштҳо»", "Қаҳрамони Тоҷикистон (1997)"],
    sources: ["Википедияи тоҷикӣ", "Китобхонаи миллии Тоҷикистон"],
    status: "published"
  },
  {
    id: "11",
    slug: "bobojon-ghafurov",
    name: "Bobojon Ghafurov",
    nameTj: "Бобоҷон Ғафуров",
    nameRu: "Бободжан Гафуров",
    alternativeNames: ["Бобоҷон Ғафурович Ғафуров"],
    birthYear: "1908",
    deathYear: "1977",
    birthPlace: "Исфисор (Хуҷанд)",
    deathPlace: "Душанбе",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Таърихшинос ва шарқшинос; муаллифи китоби «Тоҷикон»; Қаҳрамони Тоҷикистон (1997).",
    biography: "Бобоҷон Ғафуров 18 (31) декабри соли 1908 дар деҳаи Исфисор наздикии Хуҷанд таваллуд шудааст. Соли 1935 Институти умумииттифоқии журналистикаи коммунистиро дар Маскав хатм кард. Солҳои 1946–1956 Котиби якуми КМ Ҳизби коммунистии Тоҷикистон буд. Аз соли 1956 то охири умр директори Пажӯҳишгоҳи шарқшиносии Академияи илмҳои ИҶШС буд. Доктори илмҳои таърих (1949), академики АИ ҶШС Тоҷикистон (1951) ва академики АИ ИҶШС (1968). Асари бузурги ӯ «Тоҷикон» (1972) таърихи қадимтарин, қадим ва асрҳои миёнаи халқи тоҷикро фаро мегирад ва барои худшиносии миллӣ аҳамияти ҷаҳонӣ дорад. Китоб ба забонҳои ҷопонӣ, лаҳистонӣ ва дигар забонҳо тарҷума шудааст. 12 июли соли 1977 дар Душанбе вафот кард. Соли 1997 ба ӯ унвони Қаҳрамони Тоҷикистон дода шуд. Ноҳия ва шаҳраки Бобоҷон Ғафуров ба номи ӯ гузошта шудаанд.",
    biographyRu: "Бободжан Гафурович Гафуров родился 18 (31) декабря 1908 года в кишлаке Исфисор близ Худжанда. В 1935 году окончил Всесоюзный коммунистический институт журналистики в Москве. В 1946–1956 годах — первый секретарь ЦК Коммунистической партии Таджикистана. С 1956 года до конца жизни — директор Института востоковедения АН СССР. Доктор исторических наук (1949), академик АН Таджикской ССР (1951) и академик АН СССР (1968). Его фундаментальный труд «Таджики» (1972) охватывает древнейшую, древнюю и средневековую историю таджикского народа и имеет мировое значение для национального самосознания. Книга переведена на японский, польский и другие языки. Умер 12 июля 1977 года в Душанбе. В 1997 году удостоен звания Героя Таджикистана. Район и посёлок Бободжон Гафуров названы в его честь.",
    biographyEn: "Bobojon Ghafurovich Ghafurov was born on 18 (31) December 1908 in the village of Isfisor near Khujand. In 1935 he graduated from the All-Union Communist Institute of Journalism in Moscow. From 1946 to 1956 he was First Secretary of the Central Committee of the Communist Party of Tajikistan. From 1956 until his death he directed the Institute of Oriental Studies of the USSR Academy of Sciences. Doctor of Historical Sciences (1949), academician of the Tajik SSR Academy of Sciences (1951) and of the USSR Academy of Sciences (1968). His major work The Tajiks (1972) covers the ancient and medieval history of the Tajik people and is of world importance for national identity. The book has been translated into Japanese, Polish and other languages. He died in Dushanbe on 12 July 1977. In 1997 he was named Hero of Tajikistan. The town and district of Bobojon Ghafurov are named after him.",
    achievements: ["Муаллифи китоби «Тоҷикон»", "Котиби якуми КМ ҲКТ (1946–1956)", "Директори Пажӯҳишгоҳи шарқшиносии АИ ИҶШС", "Академики АИ ИҶШС", "Қаҳрамони Тоҷикистон (1997)"],
    sources: ["Википедияи тоҷикӣ", "Китоби «Тоҷикон»"],
    status: "published"
  },
  {
    id: "7",
    slug: "emomali-rahmon",
    name: "Emomali Rahmon",
    nameTj: "Эмомалӣ Раҳмон",
    nameRu: "Эмомали Рахмон",
    alternativeNames: ["Эмомалӣ Шарифович Раҳмонов"],
    birthYear: "1952",
    birthPlace: "Данғара",
    title: "Қаҳрамони Тоҷикистон · Президенти Ҷумҳурии Тоҷикистон",
    period: "Муосир",
    shortBio: "Президенти Ҷумҳурии Тоҷикистон; Қаҳрамони Тоҷикистон (1999); Пешвои миллат.",
    biography: "Эмомалӣ Раҳмон 5 октябри соли 1952 дар ноҳияи Данғара таваллуд шудааст. Соли 1982 Донишгоҳи миллии Тоҷикистонро хатм кард. 19 ноябри соли 1992 дар иҷлосияи XVI Шурои Олии Ҷумҳурии Тоҷикистон раиси Шурои Олӣ интихоб гардид ва дар давраи ҷанги шаҳрвандӣ роҳбарии давлатро ба уҳда гирифт. 6 ноябри соли 1994 бори аввал Президенти Ҷумҳурии Тоҷикистон интихоб шуд; баъдтар солҳои 1999, 2006, 2013 ва 2020 аз нав интихоб гардид. Соли 1997 Созишномаи умумии истиқрори сулҳ ва ризоияти миллӣ ба имзо расид. 11 декабри соли 1999 бо қарори Маҷлиси Олӣ барои мустаҳкам намудани давлатдории соҳибистиқлол ва пойдории сулҳ бо унвони олии Қаҳрамони Тоҷикистон қадр гардид. Унвони «Асосгузори сулҳу ваҳдати миллӣ — Пешвои миллат» ба ӯ дода шудааст.",
    biographyRu: "Эмомали Рахмон родился 5 октября 1952 года в районе Дангара. В 1982 году окончил Таджикский национальный университет. 19 ноября 1992 года на XVI сессии Верховного Совета Республики Таджикистан был избран председателем Верховного Совета и возглавил государство в период гражданской войны. 6 ноября 1994 года впервые избран Президентом Республики Таджикистан; впоследствии переизбирался в 1999, 2006, 2013 и 2020 годах. В 1997 году было подписано Общее соглашение об установлении мира и национального согласия. 11 декабря 1999 года постановлением Маджлиси Оли за укрепление независимой государственности и мира удостоен высшего звания Героя Таджикистана. Ему присвоено звание «Основатель мира и национального единства — Лидер нации».",
    biographyEn: "Emomali Rahmon was born on 5 October 1952 in the Danghara district. He graduated from the Tajik National University in 1982. On 19 November 1992, at the 16th session of the Supreme Council of the Republic of Tajikistan, he was elected Chairman of the Supreme Council and led the state during the civil war. On 6 November 1994 he was first elected President of the Republic of Tajikistan; he was re-elected in 1999, 2006, 2013 and 2020. In 1997 the General Agreement on the Establishment of Peace and National Accord was signed. On 11 December 1999, by resolution of the Majlisi Oli, he was awarded the highest title Hero of Tajikistan for strengthening independent statehood and peace. He holds the title Founder of Peace and National Unity — Leader of the Nation.",
    achievements: ["Қаҳрамони Тоҷикистон (1999)", "Раҳбарии давлат дар давраи ҷанги шаҳрвандӣ", "Созишномаи сулҳи 1997", "Президенти Ҷумҳурии Тоҷикистон аз соли 1994", "Пешвои миллат"],
    sources: ["Сомонаи расмии Президенти Ҷумҳурии Тоҷикистон"],
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Emomali_Rahmon_on_April_3%2C_2025_%28cropped%29.jpg/960px-Emomali_Rahmon_on_April_3%2C_2025_%28cropped%29.jpg",
    status: "published"
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
    shortBio: "Шоири халқии Тоҷикистон; раиси Иттифоқи нависандагон; Қаҳрамони Тоҷикистон (2001).",
    biography: "Мирзо Турсунзода 19 апрел (2 май) соли 1911 дар деҳаи Қаратоғи бекигарии Ҳисор таваллуд шудааст. Ӯ шоири халқии Тоҷикистон (1961), академики Академияи илмҳои ҶШС Тоҷикистон (1951), раиси Иттифоқи нависандагони Тоҷикистон ва раиси Кумитаи якдилии халқҳои Осиё ва Африқо буд. Дар солҳои Ҷанги Бузурги Ватанӣ шеърҳои ватандӯстона навишт. Барандаи Ҷоизаи байналмилалии ба номи Неҳру, Ҷоизаи давлатии ИҶШС ва Ҷоизаи давлатии Тоҷикистон ба номи Рӯдакӣ. Қаҳрамони Меҳнати Сотсиалистӣ (1967). 24 сентябри соли 1977 дар Душанбе вафот кард. Соли 2001 бо фармони Президент ба ӯ унвони Қаҳрамони Тоҷикистон дода шуд. Шаҳри Турсунзода ба номи ӯ гузошта шудааст.",
    biographyRu: "Мирзо Турсун-заде родился 19 апреля (2 мая) 1911 года в кишлаке Каратаг Гиссарского бекства. Народный поэт Таджикистана (1961), академик АН Таджикской ССР (1951), председатель Союза писателей Таджикистана и Комитета солидарности народов Азии и Африки. В годы Великой Отечественной войны писал патриотические стихи. Лауреат Международной премии имени Неру, Государственной премии СССР и Государственной премии Таджикистана имени Рудаки. Герой Социалистического Труда (1967). Умер 24 сентября 1977 года в Душанбе. В 2001 году указом Президента удостоен звания Героя Таджикистана. Город Турсунзаде назван в его честь.",
    biographyEn: "Mirzo Tursunzoda was born on 19 April (2 May) 1911 in the village of Karatag in the Hissar beylik. People's Poet of Tajikistan (1961), academician of the Academy of Sciences of the Tajik SSR (1951), chairman of the Writers' Union of Tajikistan and of the Afro-Asian Peoples' Solidarity Committee. During the Great Patriotic War he wrote patriotic poetry. Laureate of the Nehru International Prize, the USSR State Prize and the Rudaki State Prize of Tajikistan. Hero of Socialist Labour (1967). He died in Dushanbe on 24 September 1977. In 2001, by presidential decree, he was awarded the title Hero of Tajikistan. The city of Tursunzoda is named after him.",
    achievements: ["Шоири халқии Тоҷикистон", "Қаҳрамони Меҳнати Сотсиалистӣ (1967)", "Раиси Кумитаи якдилии Осиё ва Африқо", "Қаҳрамони Тоҷикистон (2001)"],
    sources: ["Википедияи тоҷикӣ", "ВКХ ҶТ"],
    status: "published"
  },
  {
    id: "13",
    slug: "nusratullo-makhsum",
    name: "Nusratullo Makhsum",
    nameTj: "Нусратулло Махсум",
    nameRu: "Нусратулло Махсум",
    alternativeNames: ["Нусратулло Лутфуллоев"],
    birthYear: "1881",
    deathYear: "1937",
    birthPlace: "Чашмаи Қозӣ (Ғарм)",
    deathPlace: "Маскав",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Аввалин роҳбари Тоҷикистони Шӯравӣ; яке аз асосгузорони Ҷумҳурии Тоҷикистон; Қаҳрамони Тоҷикистон (2006).",
    biography: "Нусратулло Махсум (Нусратулло Лутфуллоев) 1 июли соли 1881 дар деҳаи Чашмаи Қозии водии Ғарм (ҳоло ноҳияи Рашт) дар оилаи деҳқон таваллуд шудааст. Дар ҷавонӣ дар Фарғона кор кард. Баъди Инқилоби Октябр дар таъсиси ҳокимияти шӯравӣ дар Осиёи Миёна иштирок намуд. Моҳи ноябри соли 1924, пас аз ташкили Ҷумҳурии Мухтори Шӯравии Сотсиалистии Тоҷикистон, раиси Кумитаи инқилобӣ (Реком) интихоб шуд — аввалин роҳбари Тоҷикистони Шӯравӣ. Солҳои 1926–1933 раиси Кумитаи Иҷроияи Марказии ҶШС Тоҷикистон буд ва дар ташаккули давлатдории тоҷикӣ нақши марказӣ бозид. Соли 1937 дар давраи репрессияҳо дастгир ва 1 ноябри соли 1937 қатл шуд. Соли 2006 бо фармони Президент Эмомалӣ Раҳмон ба ӯ (пас аз вафот) унвони олии Қаҳрамони Тоҷикистон дода шуд.",
    biographyRu: "Нусратулло Махсум (Нусратулло Лутфуллоев) родился 1 июля 1881 года в кишлаке Чашмаи Кози Гармской долины (ныне Раштский район) в крестьянской семье. В молодости работал в Фергане. После Октябрьской революции участвовал в установлении советской власти в Средней Азии. В ноябре 1924 года, после образования Таджикской АССР, был избран председателем Революционного комитета — первым руководителем советского Таджикистана. В 1926–1933 годах — председатель Центрального исполнительного комитета Таджикской ССР; сыграл центральную роль в становлении таджикской государственности. В 1937 году в период репрессий арестован и 1 ноября 1937 года расстрелян. В 2006 году указом Президента Эмомали Рахмона посмертно удостоен высшего звания Героя Таджикистана.",
    biographyEn: "Nusratullo Makhsum (Nusratullo Lutfulloev) was born on 1 July 1881 in the village of Chashmai Qozi in the Garm Valley (now Rasht District) to a peasant family. In his youth he worked in the Ferghana region. After the October Revolution he took part in establishing Soviet power in Central Asia. In November 1924, after the creation of the Tajik ASSR, he was elected chairman of the Revolutionary Committee — the first leader of Soviet Tajikistan. From 1926 to 1933 he was chairman of the Central Executive Committee of the Tajik SSR and played a central role in building Tajik statehood. In 1937, during the repressions, he was arrested and executed on 1 November 1937. In 2006, by decree of President Emomali Rahmon, he was posthumously awarded the highest title Hero of Tajikistan.",
    achievements: ["Аввалин роҳбари Тоҷикистони Шӯравӣ (1924)", "Раиси КИМ ҶШС Тоҷикистон (1926–1933)", "Асосгузори давлатдории тоҷикӣ", "Қаҳрамони Тоҷикистон (2006)"],
    sources: ["Википедия", "НИАТ «Ховар»"],
    status: "published"
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
    birthPlace: "Поршинев (Шуғнон)",
    deathPlace: "Маскав",
    title: "Қаҳрамони Тоҷикистон",
    period: "Муосир",
    shortBio: "Арбоби давлатӣ; муборизи табдили Тоҷикистон ба ҷумҳурии иттифоқӣ; Қаҳрамони Тоҷикистон (2006).",
    biography: "Шириншоҳ Шоҳтемур соли 1899 дар деҳаи Поршинев ноҳияи Шуғнони Бадахшон дар оилаи деҳқон таваллуд шудааст. Дар хурдсолӣ ятим монд. Ӯ ходими давлатӣ ва ҳизбӣ буд ва ҳамроҳ бо Нусратулло Махсум барои табдили Тоҷикистон аз ҷумҳурии мухтор ба ҷумҳурии иттифоқии баробарҳуқуқ дар ҳайати ИҶШС саъй кард. Соли 1929 Ҷумҳурии Шӯравии Сотсиалистии Тоҷикистон эълон шуд. Шоҳтемур дар ҳукумати ҷумҳурӣ вазифаҳои муҳим ишғол мекард. Соли 1937 дар давраи репрессияҳо дастгир ва қатл шуд. Соли 2006 бо фармони Президент Эмомалӣ Раҳмон ба ӯ (пас аз вафот) унвони Қаҳрамони Тоҷикистон дода шуд.",
    biographyRu: "Шириншо Шотемур родился в 1899 году в кишлаке Поршинев Шугнанского района Бадахшана в крестьянской семье. Рано осиротел. Государственный и партийный деятель; вместе с Нусратулло Махсумом боролся за превращение Таджикистана из автономной в равноправную союзную республику в составе СССР. В 1929 году была провозглашена Таджикская ССР. Шотемур занимал важные посты в правительстве республики. В 1937 году в период репрессий арестован и расстрелян. В 2006 году указом Президента Эмомали Рахмона посмертно удостоен звания Героя Таджикистана.",
    biographyEn: "Shirinsho Shotemur was born in 1899 in the village of Porshinev in the Shughnan district of Badakhshan to a peasant family. He was orphaned at an early age. A state and party figure, he worked with Nusratullo Makhsum to transform Tajikistan from an autonomous into an equal union republic within the USSR. In 1929 the Tajik SSR was proclaimed. Shotemur held important posts in the republican government. In 1937, during the repressions, he was arrested and executed. In 2006, by decree of President Emomali Rahmon, he was posthumously awarded the title Hero of Tajikistan.",
    achievements: ["Мубориза барои мақоми ҷумҳурии иттифоқӣ", "Асосгузори давлатдории тоҷикӣ", "Қаҳрамони Тоҷикистон (2006)"],
    sources: ["Википедияи тоҷикӣ", "НИАТ «Ховар»"],
    status: "published"
  },
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
    shortBio: "Асосгузори давлати мустақили Сомониён; Мовароуннаҳр ва қисмате Хуросонро иттиҳод кард.",
    biography: "Исмоили Сомонӣ баъди вафоти бародараш Насри I, аз соли 892 амири мутлақи Давлати Сомониён гардид. Соли 892 Наср аз дунё рафт ва мувофиқи васияти ӯ Исмоил сарвари Хонадони Сомониён ва амири Давлати Сомониён (Мовароуннаҳр) гардид.",
    biographyRu: "Исмаил Самани после смерти брата Насра I с 892 года стал полновластным амиром Государства Саманидов.",
    biographyEn: "After the death of his brother Nasr I, Ismail Samani became absolute amir of the Samanid state from 892.",
    achievements: ["Мустаҳкам кардани ҳокимияти Сомониён дар Мовароуннаҳр", "Пуштибонӣ аз забон ва фарҳанги форсӣ"],
    sources: ["Наршахӣ, Таърихи Бухоро"],
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/%D0%98%D1%81%D0%BC%D0%BE%D0%B8%D0%BB%D0%B8_%D0%A1%D0%BE%D0%BC%D0%BE%D0%BD%D0%B8_%28%D0%9A%D0%BE%D0%BD%D0%B8%D0%B1%D0%BE%D0%B4%D0%BE%D0%BC%29.jpg/960px-%D0%98%D1%81%D0%BC%D0%BE%D0%B8%D0%BB%D0%B8_%D0%A1%D0%BE%D0%BC%D0%BE%D0%BD%D0%B8_%28%D0%9A%D0%BE%D0%BD%D0%B8%D0%B1%D0%BE%D0%B4%D0%BE%D0%BC%29.jpg",
    status: "published"
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
    title: "Шоир",
    period: "Давраи Сомониён",
    shortBio: "Нахустин шоири бузурги адабиёти форсии дарӣ; дар дарбори Сомониён шеър гуфт.",
    biography: "Рӯдакӣ бунёнгузори шеъри классикии форсӣ шинохта мешавад. Уй дар дарбори Сомониён дар Бухоро хизмат мекард ва ҳазорҳо байт суруд.",
    biographyRu: "Рудаки признан основоположником классической персидской поэзии.",
    biographyEn: "Rudaki is recognized as the founder of classical Persian poetry.",
    achievements: ["Бунёдгузори шеъри классикии форсӣ"],
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/%D8%B1%D9%88%D8%AF%DA%A9%DB%8C_-_%D8%B1%D8%B3%D8%A7%D9%85_%D8%A7%D8%B1%DA%98%D9%86%DA%AF%DB%8C.jpg/960px-%D8%B1%D9%88%D8%AF%DA%A9%DB%8C_-_%D8%B1%D8%B3%D8%A7%D9%85_%D8%A7%D8%B1%DA%98%D9%86%DA%AF%DB%8C.jpg",
    status: "published"
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
    biography: "Ибни Сино яке аз бузургтарин олимони асри миёна аст. Уй дар Бухоро таҳсил кард ва китоби «ал-Қонун фи-т-тиб»-ро навишт.",
    biographyRu: "Ибн Сина — один из величайших учёных Средневековья.",
    biographyEn: "Ibn Sina is one of the greatest scholars of the Middle Ages.",
    achievements: ["Муаллифи Қонуни тиб"],
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Avicenna_Drawing.jpg/960px-Avicenna_Drawing.jpg",
    status: "published"
  },
  {
    id: "4",
    slug: "ferdowsi",
    name: "Ferdowsi",
    nameTj: "Фирдавсӣ",
    nameRu: "Фирдоуси",
    birthYear: "940",
    deathYear: "1020",
    birthPlace: "Тус",
    deathPlace: "Тус",
    title: "Шоир",
    period: "Асри миёна",
    shortBio: "Муаллифи ҳамосаи Шоҳнома.",
    biography: "Фирдавсӣ Шоҳномаро тақрибан 30 сол навишт.",
    biographyRu: "Фирдоуси писал «Шахнаме» около 30 лет.",
    biographyEn: "Ferdowsi spent about 30 years writing the Shahnameh.",
    achievements: ["Муаллифи Шоҳнома"],
    status: "published"
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
    biography: "Куруши Кабир империяи васеъро аз Осиёи Миёна то Баҳри Миёназамин бунёд кард.",
    biographyRu: "Кир Великий создал обширную империю от Средней Азии до Средиземного моря.",
    biographyEn: "Cyrus the Great built a vast empire from Central Asia to the Mediterranean.",
    status: "published"
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
    biography: "Темур империяи бузургеро дар Осиёи Миёна ва берун аз он бунёд кард.",
    biographyRu: "Тимур создал большую империю в Средней Азии и за её пределами.",
    biographyEn: "Timur built a large empire in Central Asia and beyond.",
    status: "published"
  }
]

export function getPersonBySlug(slug: string) {
  return people.find((p) => p.slug === slug)
}

export function getPublishedPeople() {
  return people.filter((p) => p.status === "published")
}
