"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { useTranslation } from "react-i18next";
import { countries } from "@/data/countries";
import { trips } from "@/data/trips";
import CountryHero from "@/components/country/CountryHero";
import TripCard from "@/components/trip/TripCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CountryPage({ params }: PageProps) {
  const { slug } = use(params);
  const { t } = useTranslation("common");

  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  const countryTrips = trips.filter((trip) =>
    country.trips.includes(trip.id)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <Link
        href="/countries"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {t("countries.title")}
      </Link>

      {/* Overview section */}
      <section>
        <CountryHero country={country} />
      </section>

      {/* Trips section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">{t("country.trips")}</h2>
        {countryTrips.length > 0 ? (
          <div className="space-y-6">
            {countryTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        ) : (
          <p className="text-slate-400">{t("country.noTrips")}</p>
        )}
      </section>
    </div>
  );
}
