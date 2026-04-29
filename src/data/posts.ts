import type { TripPost } from "@/types";

export const posts: TripPost[] = [
  {
    id: "post-italy-2018",
    tripId: "trip-italy-2018",
    title: { en: "Two Weeks in Rome & Tuscany", he: "שבועיים ברומא ותוסקנה" },
    date: "2018-09-15",
    route: ["Rome", "Orvieto", "Siena", "San Gimignano", "Florence"],
    story: {
      en: `September is the sweet spot for central Italy — the August crowds are gone, the light turns golden, and the harvest season begins.

I landed at Fiumicino early on a Tuesday and was at the Colosseum by 8am with the pre-booked priority entrance. The ancient city core is genuinely overwhelming on a first visit: the Forum, the Palatine Hill, the Pantheon, the Campo de' Fiori — it could fill a week alone.

After four days in Rome I took the slow train to Orvieto, one of Tuscany's most dramatic hill towns perched on a volcanic plateau. The duomo facade is extraordinary. Two nights there, then hired a car and drove the back roads to Siena.

Siena's Piazza del Campo is one of the great public spaces in Europe. I sat there for three hours one evening watching the light shift from gold to purple as locals used it as their living room.

The drive from Siena south through Val d'Orcia is one of those routes you plan once and repeat forever. Cypress trees in long rows, mist in the valleys, terracotta farmhouses. The photos write themselves.`,
      he: `ספטמבר הוא הזמן המושלם לאיטליה המרכזית — המוני אוגוסט נעלמו, האור הופך לזהוב ועונת הבציר מתחילה.

נחתי בפיומיצ'ינו בבוקר יום שלישי והייתי בקולוסיאום בשמונה עם כניסה מוקדמת מוזמנת מראש. ליבת העיר העתיקה מכריעה בביקור ראשון: הפורום, גבעת פלטינה, הפנתאון, קמפו דה' פיורי.`,
    },
    photos: [
      "/images/posts/italy-2018-colosseum.jpg",
      "/images/posts/italy-2018-valdorcia.jpg",
      "/images/posts/italy-2018-siena.jpg",
    ],
    likes: [
      "Colosseum at sunrise with almost no crowds",
      "Pici pasta in a Sienese trattoria",
      "Driving the cypress-lined roads of Val d'Orcia",
      "Orvieto's cathedral facade",
    ],
    dislikes: [
      "August heat in Rome (35°C+)",
      "Aggressive tourist traps near the Vatican",
    ],
    tips: {
      en: [
        "Book Colosseum tickets 2-3 months ahead for the September morning slot",
        "Stay in Trastevere, not near Termini — it's a completely different experience",
        "Rent a car for Tuscany — buses exist but are infrequent",
        "Orvieto Classico wine is excellent and a fraction of the Florentine tourist price",
      ],
      he: [
        "הזמינו כרטיסים לקולוסיאום 2-3 חודשים מראש לחלון של בוקר ספטמבר",
        "להתאכסן בטראסטבורה ולא ליד תרמיני — חוויה שונה לחלוטין",
        "לשכור רכב לתוסקנה — אוטובוסים קיימים אבל נדירים",
        "יין Orvieto Classico מעולה ובחלק ממחיר הפלורנטיני התיירותי",
      ],
    },
  },
  {
    id: "post-vietnam-2019",
    tripId: "trip-vietnam-2019",
    title: { en: "Vietnam End to End", he: "וייטנאם מקצה לקצה" },
    date: "2019-03-10",
    route: [
      "Ho Chi Minh City",
      "Mui Ne",
      "Hoi An",
      "Hai Van Pass",
      "Hue",
      "Hanoi",
      "Ha Long Bay",
    ],
    story: {
      en: `Vietnam is a country best understood as a collection of completely distinct regions glued together by one slender coastline. Three weeks barely scratches it.

Ho Chi Minh City is relentless — motorbikes outnumber traffic lights, the heat sits on you like a wet towel, and the food is outstanding. The War Remnants Museum is necessary but brutal. Spent two nights, ate excellent pho for breakfast, and caught the overnight train north.

Hoi An is everything the Instagram photos promise and slightly more crowded. I arrived at 6am and had the streets to myself for an hour — then the tour buses arrived. The tailors are the real story: I had two shirts made in 24 hours for $40 each.

The Hai Van Pass on a rented Honda Wave was the highlight of the trip. The road climbs into low cloud, then descends to the bay view that was apparently used in Top Gear. Stopped every 500m to photograph something.

Ha Long Bay: the landscape is one of the most spectacular on Earth. The number of tourist boats is also spectacular. Book a smaller junk with overnight cabins, wake early, and get away from the flotilla.`,
      he: `וייטנאם היא מדינה שהכי טוב להבין אותה כאוסף של אזורים שונים לחלוטין שמחוברים על ידי קו חוף אחד צר. שלושה שבועות בקושי מגרדים.

הו צ'י מין סיטי היא ללא רחמים — אופנועים מרובים מרמזורים, החום יושב עליך כמו מגבת רטובה, והאוכל מצוין.`,
    },
    photos: [
      "/images/posts/vietnam-halong.jpg",
      "/images/posts/vietnam-hoian.jpg",
      "/images/posts/vietnam-haivan.jpg",
    ],
    likes: [
      "Ha Long Bay overnight cruise at dawn",
      "Bun bo Hue in Hue",
      "Hai Van Pass on a scooter",
      "Hoi An at 6am",
    ],
    dislikes: [
      "Ha Long Bay overdevelopment",
      "Hoi An after 9am",
      "War Remnants Museum (necessary but heavy)",
    ],
    tips: {
      en: [
        "Take the overnight train between HCMC and Hoi An — saves a night hotel, arrives with morning light",
        "Hire a scooter in Hoi An and ride the Hai Van Pass toward Hue yourself",
        "Book a smaller Ha Long Bay boat — aim for max 20 passengers",
        "Bun bo Hue is the local specialty — skip the tourist pho signs",
      ],
      he: [
        "לקחת רכבת לילה בין הו צ'י מין להוי אן — חוסך לילה מלון, מגיע באור בוקר",
        "לשכור קטנוע בהוי אן ולרכב על מעבר Hai Van לכיוון חוה",
        "להזמין סירה קטנה יותר במפרץ הלונג — לכל היותר 20 נוסעים",
      ],
    },
  },
];
