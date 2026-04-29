"use client";

import { useTranslation } from "react-i18next";
import { countries } from "@/data/countries";
import { trips } from "@/data/trips";
import { Card, CardBody } from "@/components/ui/Card";
import { Globe, Code2, Database, Languages } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation("common");

  const techStack = [
    { icon: Globe, label: "Next.js 15 (App Router)", desc: "React framework with SSR and file-based routing" },
    { icon: Code2, label: "TypeScript", desc: "End-to-end type safety across data models and components" },
    { icon: Globe, label: "react-globe.gl + Three.js", desc: "WebGL-powered interactive 3D globe on the homepage" },
    { icon: Languages, label: "react-i18next", desc: "Full English / Hebrew (RTL) multilingual support" },
    { icon: Database, label: "Mock data layer", desc: "Typed data files — ready to swap for a CMS or database" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t("about.title")}</h1>
        <p className="text-slate-300 text-lg leading-relaxed">{t("about.body")}</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { val: countries.length, label: "Countries" },
          { val: trips.length, label: "Trips" },
          { val: new Set(trips.flatMap((t) => t.stops.map((s) => s.label))).size, label: "Cities" },
          { val: new Set(countries.flatMap((c) => c.yearsVisited)).size, label: "Years" },
        ].map(({ val, label }) => (
          <Card key={label}>
            <CardBody className="text-center py-4">
              <div className="text-3xl font-bold text-white">{val}</div>
              <div className="text-xs text-slate-400 mt-1">{label}</div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Tech stack */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
        <div className="space-y-3">
          {techStack.map(({ icon: Icon, label, desc }) => (
            <Card key={label}>
              <CardBody className="flex items-start gap-3 py-4">
                <Icon className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{desc}</div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
