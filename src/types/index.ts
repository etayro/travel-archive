export interface Country {
  id: string;
  slug: string;
  name: Record<string, string>;
  flag: string;
  iso2: string;
  iso3: string;
  continent: string;
  visitCount: number;
  yearsVisited: number[];
  bestSeason: string;
  crowdLevel: CrowdByMonth;
  summary: Record<string, string>;
  keyPoints: GeoPoint[];
  trips: string[];
}

export interface CrowdByMonth {
  jan: "low" | "medium" | "high";
  feb: "low" | "medium" | "high";
  mar: "low" | "medium" | "high";
  apr: "low" | "medium" | "high";
  may: "low" | "medium" | "high";
  jun: "low" | "medium" | "high";
  jul: "low" | "medium" | "high";
  aug: "low" | "medium" | "high";
  sep: "low" | "medium" | "high";
  oct: "low" | "medium" | "high";
  nov: "low" | "medium" | "high";
  dec: "low" | "medium" | "high";
}

export type TripStyle =
  | "road-trip"
  | "city-break"
  | "resort"
  | "hiking"
  | "backpacking"
  | "cruise"
  | "cultural";

export interface GeoPoint {
  lat: number;
  lng: number;
  label: string;
}

export interface Trip {
  id: string;
  countryId: string;
  title: Record<string, string>;
  date: string;
  year: number;
  style: TripStyle;
  partners: string[];
  routeSummary: Record<string, string>;
  stops: GeoPoint[];
  likes: string[];
  dislikes: string[];
  postId?: string;
  coverImage?: string;
}

export interface TripPost {
  id: string;
  tripId: string;
  title: Record<string, string>;
  date: string;
  route: string[];
  story: Record<string, string>;
  photos: string[];
  likes: string[];
  dislikes: string[];
  tips: Record<string, string[]>;
}

export type Locale = "en" | "he";
