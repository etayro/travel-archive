import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className, onClick, hoverable }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-slate-800/60 backdrop-blur border border-white/10 rounded-2xl shadow-lg",
        hoverable && "hover:border-sky-500/40 hover:shadow-sky-500/10 hover:shadow-xl transition-all duration-300 cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-5 pb-0", className)}>{children}</div>;
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-5", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("px-5 pb-5 pt-0 border-t border-white/10 mt-4 pt-4", className)}>
      {children}
    </div>
  );
}
