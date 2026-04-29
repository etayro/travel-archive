"use client";

import { useTranslation } from "react-i18next";
import type { Locale } from "@/types";

export function useLocale() {
  const { i18n } = useTranslation();
  const locale = (i18n.language?.slice(0, 2) as Locale) ?? "en";
  const isRTL = locale === "he";

  function t(record: Record<string, string>): string {
    return record[locale] ?? record["en"] ?? "";
  }

  function toggle() {
    i18n.changeLanguage(locale === "en" ? "he" : "en");
  }

  return { locale, isRTL, t, toggle };
}
