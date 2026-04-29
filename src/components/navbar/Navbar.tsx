"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/useLocale";
import { cn } from "@/lib/utils";
import { Globe, Map, Compass, User, Languages } from "lucide-react";

const NAV_ITEMS = [
  { key: "home", href: "/", icon: Globe },
  { key: "countries", href: "/countries", icon: Map },
  { key: "trips", href: "/trips", icon: Compass },
  { key: "about", href: "/about", icon: User },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { t: tRaw } = useTranslation("common");
  const { toggle, locale } = useLocale();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white hover:text-sky-400 transition-colors">
          <Globe className="w-5 h-5 text-sky-400" />
          <span className="hidden sm:inline">Travel Archive</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map(({ key, href, icon: Icon }) => {
            const isActive =
              key === "home" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={key}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-sky-500/20 text-sky-400"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tRaw(`nav.${key}`)}</span>
              </Link>
            );
          })}

          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all ms-2"
            title="Switch language"
          >
            <Languages className="w-4 h-4" />
            <span className="text-xs font-mono uppercase">{locale === "en" ? "עב" : "EN"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
