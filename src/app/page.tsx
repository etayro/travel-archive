"use client";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { countries } from "@/data/countries";
import { trips } from "@/data/trips";
import { StatCard } from "@/components/ui/StatCard";
import CountryCard from "@/components/country/CountryCard";

const GlobeComponent = dynamic(() => import("@/components/globe/GlobeComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const uniqueYears = new Set(countries.flatMap((c) => c.yearsVisited));

export default function HomePage() {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col">
      {/* Hero globe section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl" />
        </div>

        {/* Text overlay */}
        <div className="relative z-10 text-center px-4 mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            {t("home.title")}
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl mt-3 max-w-lg mx-auto">
            {t("home.subtitle")}
          </p>
          <p className="text-slate-500 text-sm mt-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse inline-block" />
            {t("home.clickCountry")}
          </p>
        </div>

        {/* Globe */}
        <div className="relative w-full max-w-3xl mx-auto" style={{ height: "min(70vw, 500px)" }}>
          <GlobeComponent />
        </div>

        {/* Stats bar */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 mt-12 sm:mt-16">
          <div className="bg-slate-800/60 backdrop-blur border border-white/10 rounded-2xl p-6 grid grid-cols-3 gap-4 divide-x divide-white/10">
            <StatCard
              value={countries.length}
              label={t("home.visitedCountries")}
            />
            <StatCard value={trips.length} label={t("home.totalTrips")} />
            <StatCard
              value={uniqueYears.size}
              label={t("home.yearsExploring")}
            />
          </div>
        </div>
      </section>

      {/* Countries grid preview */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">{t("countries.title")}</h2>
          <a href="/countries" className="text-sky-400 hover:text-sky-300 text-sm transition-colors">
            {t("countries.subtitle")} →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </section>
    </div>
  );
}
