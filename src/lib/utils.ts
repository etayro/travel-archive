import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatYear(year: number): string {
  return year.toString();
}

export function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}
