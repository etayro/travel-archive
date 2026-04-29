"use client";

import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/useLocale";
import type { Country } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import CrowdChart from "./CrowdChart";
import { CalendarDays, Sun, Users } from "lucide-react";

interface CountryHeroProps {
  country: Country;
}

export default function CountryHero({ country }: CountryHeroProps) {
  const { t: tRaw } = useTranslation("common");
  const { t } = useLocale();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="text-6xl leading-none">{country.flag}</span>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {t(country.name)}
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Badge variant="sky">
              {country.visitCount} {country.visitCount === 1 ? tRaw("country.visits") : tRaw("country.visits_plural")}
            </Badge>
            <Badge variant="amber">{country.continent}</Badge>
            <Badge variant="emerald">{tRaw(`seasons.${country.bestSeason}`)}</Badge>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
        {t(country.summary)}
      </p>

      {/* Info cards row */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardBody className="flex items-start gap-3">
            <CalendarDays className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                {tRaw("country.yearsVisited")}
              </div>
              <div className="text-white font-medium">
                {country.yearsVisited.join(", ")}
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-start gap-3">
            <Sun className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                {tRaw("country.bestSeason")}
              </div>
              <div className="text-white font-medium capitalize">
                {tRaw(`seasons.${country.bestSeason}`)}
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-start gap-3">
            <Users className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
            <div className="w-full">
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                {tRaw("country.crowdLevel")}
              </div>
              <CrowdChart data={country.crowdLevel} />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
