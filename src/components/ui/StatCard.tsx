import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string | number;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">{value}</div>
      <div className="text-xs sm:text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}
