"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import type { Country } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { MapPin } from "lucide-react";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  const { t } = useLocale();

  return (
    <Link href={`/countries/${country.slug}`}>
      <Card hoverable>
        <CardBody>
          <div className="flex items-start gap-3">
            <span className="text-4xl">{country.flag}</span>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white truncate">
                {t(country.name)}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <Badge variant="sky">{country.visitCount}x</Badge>
                <Badge variant="amber">{country.continent}</Badge>
              </div>
              <p className="text-sm text-slate-400 mt-2 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {country.keyPoints
                  .slice(0, 3)
                  .map((p) => p.label)
                  .join(", ")}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
