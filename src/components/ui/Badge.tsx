import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "sky" | "amber" | "emerald" | "rose";
  className?: string;
}

const variantClasses = {
  default: "bg-slate-700 text-slate-300",
  sky: "bg-sky-500/20 text-sky-400 border border-sky-500/30",
  amber: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  emerald: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  rose: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
