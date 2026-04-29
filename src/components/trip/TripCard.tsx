"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/useLocale";
import type { Trip } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { ThumbsUp, ThumbsDown, MapPin, Users, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface TripCardProps {
  trip: Trip;
}

const styleVariant: Record<string, "sky" | "amber" | "emerald" | "rose"> = {
  "road-trip": "sky",
  "city-break": "amber",
  hiking: "emerald",
  backpacking: "amber",
  resort: "rose",
  cruise: "sky",
  cultural: "emerald",
};

export default function TripCard({ trip }: TripCardProps) {
  const { t: tRaw } = useTranslation("common");
  const { t } = useLocale();

  return (
    <Card>
      <CardBody className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{t(trip.title)}</h3>
            <p className="text-sm text-slate-400 mt-0.5">{formatDate(trip.date)}</p>
          </div>
          <Badge variant={styleVariant[trip.style] ?? "sky"}>
            {tRaw(`tripStyles.${trip.style}`)}
          </Badge>
        </div>

        {/* Partners */}
        {trip.partners.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Users className="w-3.5 h-3.5" />
            <span>{trip.partners.join(", ")}</span>
          </div>
        )}

        {/* Route */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {t(trip.routeSummary)}
        </p>

        {/* Key stops */}
        {trip.stops.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            {trip.stops.map((stop, i) => (
              <span key={i} className="text-xs text-slate-400">
                {stop.label}
                {i < trip.stops.length - 1 && (
                  <span className="mx-1 text-slate-600">→</span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Likes / dislikes */}
        <div className="grid sm:grid-cols-2 gap-3">
          {trip.likes.length > 0 && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <ThumbsUp className="w-3 h-3" />
                {tRaw("trip.likes")}
              </div>
              <ul className="space-y-1">
                {trip.likes.slice(0, 3).map((like, i) => (
                  <li key={i} className="text-xs text-slate-400 flex gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    {like}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {trip.dislikes.length > 0 && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-rose-400 font-medium">
                <ThumbsDown className="w-3 h-3" />
                {tRaw("trip.dislikes")}
              </div>
              <ul className="space-y-1">
                {trip.dislikes.slice(0, 2).map((dislike, i) => (
                  <li key={i} className="text-xs text-slate-400 flex gap-1.5">
                    <span className="text-rose-500 mt-0.5">•</span>
                    {dislike}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Read post link */}
        {trip.postId && (
          <div className="pt-2 border-t border-white/10">
            <Link
              href={`/trips/${trip.id}`}
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
            >
              {tRaw("country.readPost")}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
