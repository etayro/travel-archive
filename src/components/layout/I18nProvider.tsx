"use client";

import { useEffect } from "react";
import "@/i18n/config";
import { useTranslation } from "react-i18next";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language?.startsWith("he") ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language ?? "en";
  }, [i18n.language]);

  return <>{children}</>;
}
