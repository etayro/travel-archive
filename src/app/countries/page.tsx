"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { countries } from "@/data/countries";
import CountryCard from "@/components/country/CountryCard";
import type { Country } from "@/types";

const continents = ["All", "Europe", "Asia", "Americas", "Africa", "Oceania"];

export default function CountriesPage() {
  const { t } = useTranslation("common");
  const [filter, setFilter] = useState("All");

  const filtered: Country[] =
    filter === "All"
      ? countries
      : countries.filter((c) => c.continent === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          {t("countries.title")}
        </h1>
        <p className="text-slate-400 mt-2">{t("countries.subtitle")}</p>
      </div>

      {/* Continent filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {continents.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === c
                ? "bg-sky-500 text-white"
                : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {c === "All"
              ? t("countries.all")
              : t(`countries.${c.toLowerCase()}`)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No countries yet in this region.
        </div>
      )}
    </div>
  );
}
