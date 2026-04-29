import type { Trip } from "@/types";

export const trips: Trip[] = [
  // Italy trips
  {
    id: "trip-italy-2018",
    countryId: "italy",
    title: { en: "Classic Rome & Tuscany", he: "רומא ותוסקנה קלאסית" },
    date: "2018-09",
    year: 2018,
    style: "city-break",
    partners: ["Solo"],
    routeSummary: {
      en: "Two weeks covering Rome's ancient sites, a train up to Florence, and a rental car loop through the Tuscan hills — Siena, San Gimignano, and the Val d'Orcia.",
      he: "שבועיים שכיסו את האתרים העתיקים של רומא, רכבת לפירנצה ולולאת רכב שכור דרך גבעות תוסקנה.",
    },
    stops: [
      { lat: 41.9028, lng: 12.4964, label: "Rome" },
      { lat: 43.3228, lng: 11.3307, label: "Siena" },
      { lat: 43.7696, lng: 11.2558, label: "Florence" },
      { lat: 43.4677, lng: 11.0376, label: "San Gimignano" },
    ],
    likes: [
      "Colosseum at sunrise with almost no crowds",
      "Pici pasta in a Sienese trattoria",
      "Driving the cypress-lined roads of Val d'Orcia",
    ],
    dislikes: [
      "August heat in Rome (35°C+)",
      "Aggressive tourist traps near the Vatican",
    ],
    postId: "post-italy-2018",
    coverImage: "/images/italy-2018.jpg",
  },
  {
    id: "trip-italy-2021",
    countryId: "italy",
    title: { en: "Venice & the Dolomites", he: "ונציה והדולומיטים" },
    date: "2021-06",
    year: 2021,
    style: "hiking",
    partners: ["Partner"],
    routeSummary: {
      en: "Five days in Venice then north into the Dolomites — Alta Via 1 trail section, Cortina d'Ampezzo, and the Tre Cime di Lavaredo loop.",
      he: "חמישה ימים בונציה ולאחר מכן צפונה לדולומיטים — קטע מסלול Alta Via 1, קורטינה ולולאת Tre Cime.",
    },
    stops: [
      { lat: 45.4408, lng: 12.3155, label: "Venice" },
      { lat: 46.5368, lng: 12.1355, label: "Cortina d'Ampezzo" },
      { lat: 46.6183, lng: 12.3033, label: "Tre Cime di Lavaredo" },
    ],
    likes: [
      "Golden hour on the Tre Cime loop",
      "Spritz aperitivo in a tiny Venice bacaro",
      "The vertical drama of the Dolomite cliffs",
    ],
    dislikes: [
      "Venice crowds in June — even early morning",
      "Expensive mountain huts if you don't book months ahead",
    ],
    postId: "post-italy-2021",
    coverImage: "/images/italy-2021.jpg",
  },
  {
    id: "trip-italy-2023",
    countryId: "italy",
    title: { en: "Amalfi & Sicily", he: "אמלפי וסיציליה" },
    date: "2023-05",
    year: 2023,
    style: "road-trip",
    partners: ["Partner", "Friends"],
    routeSummary: {
      en: "Flew into Naples, drove the Amalfi Coast, ferry to Palermo, and a week-long road trip around Sicily ending in Catania with Etna in the rearview mirror.",
      he: "נחתנו בנאפולי, נסענו לאורך חוף אמלפי, מעבורת לפלרמו, ואחריה סיבוב שבועי בסיציליה שהסתיים בקטאניה.",
    },
    stops: [
      { lat: 40.8518, lng: 14.2681, label: "Naples" },
      { lat: 40.6331, lng: 14.602, label: "Positano" },
      { lat: 38.1157, lng: 13.3615, label: "Palermo" },
      { lat: 37.5079, lng: 15.0830, label: "Catania" },
    ],
    likes: [
      "Positano at dawn before tour boats arrive",
      "Arancini from a Palermo street stall",
      "The alien landscape around Mount Etna",
    ],
    dislikes: [
      "Amalfi Coast driving — beautiful but genuinely terrifying",
      "Limited parking everywhere in Sicily's hill towns",
    ],
    postId: "post-italy-2023",
    coverImage: "/images/italy-2023.jpg",
  },

  // Switzerland trips
  {
    id: "trip-switzerland-2019",
    countryId: "switzerland",
    title: { en: "Bernese Oberland Hike", he: "טיול ברנר אוברלנד" },
    date: "2019-07",
    year: 2019,
    style: "hiking",
    partners: ["Friends"],
    routeSummary: {
      en: "A week based in Grindelwald tackling the classic Eiger Trail, Schynige Platte panoramic walk, and a day trip to Oeschinensee — the most ridiculously photogenic lake I have ever seen.",
      he: "שבוע מבוסס בגרינדלוולד עם מסלולי Eiger Trail, Schynige Platte ויום בנסיעה ל-Oeschinensee — האגם הצילומי ביותר שראיתי מעולם.",
    },
    stops: [
      { lat: 46.6241, lng: 8.0408, label: "Grindelwald" },
      { lat: 46.5553, lng: 7.9957, label: "Interlaken" },
      { lat: 46.4944, lng: 7.7314, label: "Oeschinensee" },
    ],
    likes: [
      "The Eiger north face looming above the trail",
      "Swiss Käseschnitten (cheese toast) after a long hike",
      "Oeschinensee — turquoise water ringed by 3000m peaks",
    ],
    dislikes: [
      "July prices — train passes and lodging are eye-watering",
      "Afternoon thunderstorms that cut walks short",
    ],
    postId: "post-switzerland-2019",
    coverImage: "/images/switzerland-2019.jpg",
  },
  {
    id: "trip-switzerland-2022",
    countryId: "switzerland",
    title: { en: "Glacier Express & Zermatt", he: "רכבת הקרחונים וצרמט" },
    date: "2022-08",
    year: 2022,
    style: "road-trip",
    partners: ["Partner"],
    routeSummary: {
      en: "Eight days: Zürich → Lucerne → Glacier Express to Zermatt → Verbier → Geneva. The Glacier Express is five hours of pure scenery and compulsory overpriced wine.",
      he: "שמונה ימים: ציריך → לוצרן → רכבת הקרחונים לצרמט → ורבייה → ז'נבה.",
    },
    stops: [
      { lat: 47.3769, lng: 8.5417, label: "Zürich" },
      { lat: 47.0502, lng: 8.3093, label: "Lucerne" },
      { lat: 46.6199, lng: 8.0348, label: "Andermatt" },
      { lat: 46.0207, lng: 7.7491, label: "Zermatt" },
    ],
    likes: [
      "Glacier Express panorama cars through Andermatt",
      "Matterhorn at 6am — no clouds, no crowds, just orange light",
      "Fondue in a proper Valais chalet",
    ],
    dislikes: [
      "Zermatt prices (a round of drinks = a Paris restaurant)",
      "Glacier Express dining car overpriced and mediocre",
    ],
    postId: "post-switzerland-2022",
    coverImage: "/images/switzerland-2022.jpg",
  },

  // Thailand trips
  {
    id: "trip-thailand-2017",
    countryId: "thailand",
    title: {
      en: "Bangkok, Chiang Mai & Islands",
      he: "בנגקוק, צ'יאנג מאי ואיים",
    },
    date: "2017-01",
    year: 2017,
    style: "backpacking",
    partners: ["Friends"],
    routeSummary: {
      en: "Three weeks: arrived Bangkok, night train to Chiang Mai with elephant sanctuary day trip, overnight bus to Koh Tao for diving, then Koh Samui to fly home.",
      he: "שלושה שבועות: הגעה לבנגקוק, רכבת לילה לצ'יאנג מאי עם יום במקלט פילים, אוטובוס לילה לקו טאו לצלילה, ואחר כך קו סמוי.",
    },
    stops: [
      { lat: 13.7563, lng: 100.5018, label: "Bangkok" },
      { lat: 18.7883, lng: 98.9853, label: "Chiang Mai" },
      { lat: 10.0956, lng: 99.8396, label: "Koh Tao" },
      { lat: 9.5488, lng: 100.0607, label: "Koh Samui" },
    ],
    likes: [
      "Elephant Nature Park — ethical, emotional, unforgettable",
      "Street food night market in Chiang Mai every Saturday",
      "First open-water dive in Koh Tao's crystal water",
    ],
    dislikes: [
      "Bangkok traffic at rush hour (2 hours to go 5km)",
      "Over-touristified Khao San Road",
    ],
    postId: "post-thailand-2017",
    coverImage: "/images/thailand-2017.jpg",
  },
  {
    id: "trip-thailand-2020",
    countryId: "thailand",
    title: { en: "Chiang Rai & Golden Triangle", he: "צ'יאנג ראי ומשולש הזהב" },
    date: "2020-01",
    year: 2020,
    style: "cultural",
    partners: ["Partner"],
    routeSummary: {
      en: "Ten days in northern Thailand — White Temple, Black House, boat trip on the Mekong to the Golden Triangle, and hill-tribe trekking in the jungle outside Chiang Rai.",
      he: "עשרה ימים בצפון תאילנד — המקדש הלבן, הבית השחור, שייט במקונג למשולש הזהב וטיול בג'ונגל.",
    },
    stops: [
      { lat: 19.9105, lng: 99.8406, label: "Chiang Rai" },
      { lat: 20.0891, lng: 100.0929, label: "Golden Triangle" },
      { lat: 19.8243, lng: 100.0451, label: "Wat Rong Khun" },
    ],
    likes: [
      "Wat Rong Khun (White Temple) at sunrise — completely surreal",
      "Slow boat on the Mekong watching Laos drift by",
      "The Baan Dam Museum (Black House) — dark and fascinating",
    ],
    dislikes: [
      "Trekking guides pushing elephant rides",
      "Northern Thailand in January is surprisingly cool at night",
    ],
    postId: "post-thailand-2020",
    coverImage: "/images/thailand-2020.jpg",
  },

  // Vietnam trip
  {
    id: "trip-vietnam-2019",
    countryId: "vietnam",
    title: { en: "Vietnam South to North", he: "וייטנאם מדרום לצפון" },
    date: "2019-03",
    year: 2019,
    style: "backpacking",
    partners: ["Solo"],
    routeSummary: {
      en: "Three weeks flying into Ho Chi Minh City, overnight train to Hoi An, motorbike ride over Hai Van Pass, Hue, Hanoi, then a 2-night boat in Ha Long Bay to finish.",
      he: "שלושה שבועות: נחיתה בהו צ'י מין, רכבת לילה להוי אן, רכיבה על אופנוע על מעבר Hai Van, חוה, הנוי ולסיום שייט דו-לילי במפרץ הלונג.",
    },
    stops: [
      { lat: 10.8231, lng: 106.6297, label: "Ho Chi Minh City" },
      { lat: 15.8801, lng: 108.338, label: "Hoi An" },
      { lat: 16.4637, lng: 107.5909, label: "Hue" },
      { lat: 21.0285, lng: 105.8542, label: "Hanoi" },
      { lat: 20.9101, lng: 107.1839, label: "Ha Long Bay" },
    ],
    likes: [
      "Ha Long Bay overnight cruise — woke up to mist between the karst towers",
      "Bun bo Hue in Hue — the spiciest, best soup of the trip",
      "Riding the Hai Van Pass on a rented scooter",
    ],
    dislikes: [
      "Ha Long Bay is overdeveloped — hundreds of boats fighting for the same shot",
      "Hoi An lanterns make every photo look identical",
    ],
    postId: "post-vietnam-2019",
    coverImage: "/images/vietnam-2019.jpg",
  },

  // France trips
  {
    id: "trip-france-2016",
    countryId: "france",
    title: { en: "Paris First Visit", he: "פריז — ביקור ראשון" },
    date: "2016-04",
    year: 2016,
    style: "city-break",
    partners: ["Friends"],
    routeSummary: {
      en: "Five days in Paris covering the obvious classics — Eiffel Tower, Louvre, Musée d'Orsay, Montmartre, and a day trip to Versailles. Tourist to the core but worth every cliché.",
      he: "חמישה ימים בפריז עם הקלאסיקות הברורות — מגדל אייפל, הלובר, מוזיאון דורסה, מונמרטר ויום בוורסאי.",
    },
    stops: [
      { lat: 48.8584, lng: 2.2945, label: "Eiffel Tower" },
      { lat: 48.8606, lng: 2.3376, label: "Louvre" },
      { lat: 48.8867, lng: 2.3431, label: "Montmartre" },
      { lat: 48.8048, lng: 2.1203, label: "Versailles" },
    ],
    likes: [
      "Watching the Eiffel Tower sparkle at midnight from Trocadéro",
      "Musée d'Orsay's Impressionism rooms",
      "Wandering Marais without a plan",
    ],
    dislikes: [
      "Louvre is overwhelming — you need a strategy",
      "Everything is expensive and portions are small",
    ],
    postId: "post-france-2016",
    coverImage: "/images/france-2016.jpg",
  },
  {
    id: "trip-france-2023",
    countryId: "france",
    title: { en: "Provence & the Riviera", he: "פרובנס והריביירה" },
    date: "2023-06",
    year: 2023,
    style: "road-trip",
    partners: ["Partner"],
    routeSummary: {
      en: "Two weeks: flew into Nice, drove west through Antibes, Marseille, the Calanques, Arles, and into Provence for lavender fields around Valensole before returning to Nice.",
      he: "שבועיים: הגעה לניס, נסיעה מערבה דרך אנטיב, מרסיי, הקאלאנקים, ארל ופרובנס עם שדות לבנדר ליד ואלנסול.",
    },
    stops: [
      { lat: 43.7102, lng: 7.262, label: "Nice" },
      { lat: 43.5698, lng: 7.1271, label: "Antibes" },
      { lat: 43.2965, lng: 5.3698, label: "Marseille" },
      { lat: 43.677, lng: 4.6274, label: "Arles" },
      { lat: 43.8362, lng: 5.9808, label: "Valensole" },
    ],
    likes: [
      "Lavender fields at Valensole in full bloom",
      "Bouillabaisse at a proper Marseille port restaurant",
      "Calanques sea kayak — turquoise water, white cliffs",
    ],
    dislikes: [
      "June traffic on the Côte d'Azur is brutal",
      "Lavender season is 2 weeks — easy to miss",
    ],
    postId: "post-france-2023",
    coverImage: "/images/france-2023.jpg",
  },
];
