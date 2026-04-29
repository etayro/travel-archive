"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { trips } from "@/data/trips";
import { countries } from "@/data/countries";
import TripCard from "@/components/trip/TripCard";
import type { TripStyle } from "@/types";

const ALL_STYLES: (TripStyle | "all")[] = [
  "all",
  "road-trip",
  "city-break",
  "hiking",
  "backpacking",
  "cultural",
  "resort",
  "cruise",
];

export default function TripsPage() {
  const { t } = useTranslation("common");
  const [styleFilter, setStyleFilter] = useState<TripStyle | "all">("all");

  const filtered =
    styleFilter === "all"
      ? trips
      : trips.filter((tr) => tr.style === styleFilter);

  // Sort trips by year descending
  const sorted = [...filtered].sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{t("nav.trips")}</h1>
        <p className="text-slate-400 mt-2">
          {trips.length} trips across {countries.length} countries
        </p>
      </div>

      {/* Style filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {ALL_STYLES.map((style) => (
          <button
            key={style}
            onClick={() => setStyleFilter(style)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              styleFilter === style
                ? "bg-sky-500 text-white"
                : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {style === "all" ? "All" : t(`tripStyles.${style}`)}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {sorted.map((trip) => {
          const country = countries.find((c) => c.id === trip.countryId);
          return (
            <div key={trip.id}>
              {country && (
                <div className="flex items-center gap-2 mb-3">
                  <span>{country.flag}</span>
                  <span className="text-sm text-slate-400">{country.name.en}</span>
                  <span className="text-slate-600 text-xs">· {trip.year}</span>
                </div>
              )}
              <TripCard trip={trip} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
