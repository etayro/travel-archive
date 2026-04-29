import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{children}</h2>
      {subtitle && <p className="text-slate-400 mt-1">{subtitle}</p>}
    </div>
  );
}
