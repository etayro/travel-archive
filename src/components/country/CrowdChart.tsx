"use client";

import { useTranslation } from "react-i18next";
import type { CrowdByMonth } from "@/types";
import { cn } from "@/lib/utils";

const MONTHS = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"] as const;

const crowdColor = {
  low: "bg-emerald-500",
  medium: "bg-amber-400",
  high: "bg-rose-500",
};

const crowdHeight = {
  low: "h-3",
  medium: "h-6",
  high: "h-10",
};

interface CrowdChartProps {
  data: CrowdByMonth;
}

export default function CrowdChart({ data }: CrowdChartProps) {
  const { t } = useTranslation("common");

  return (
    <div className="space-y-3">
      <div className="flex items-end gap-1 h-12">
        {MONTHS.map((m) => {
          const level = data[m];
          return (
            <div key={m} className="flex-1 flex flex-col items-center justify-end gap-1" title={t(`crowd.${level}`)}>
              <div className={cn("w-full rounded-sm transition-all", crowdColor[level], crowdHeight[level])} />
            </div>
          );
        })}
      </div>
      <div className="flex items-end gap-1">
        {MONTHS.map((m) => (
          <div key={m} className="flex-1 text-center text-[10px] text-slate-500">
            {t(`months.${m}`)}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"/>{t("crowd.low")}</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block"/>{t("crowd.medium")}</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block"/>{t("crowd.high")}</span>
      </div>
    </div>
  );
}
