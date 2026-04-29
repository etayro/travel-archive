"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/useLocale";
import { trips } from "@/data/trips";
import { posts } from "@/data/posts";
import { countries } from "@/data/countries";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, ThumbsUp, ThumbsDown, MapPin, Lightbulb, Image as ImageIcon } from "lucide-react";

interface PageProps {
  params: Promise<{ tripId: string }>;
}

export default function TripPostPage({ params }: PageProps) {
  const { tripId } = use(params);
  const { t: tRaw } = useTranslation("common");
  const { t } = useLocale();

  const trip = trips.find((tr) => tr.id === tripId);
  if (!trip) notFound();

  const post = posts.find((p) => p.tripId === tripId);
  const country = countries.find((c) => c.id === trip.countryId);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Back link */}
      {country && (
        <Link
          href={`/countries/${country.slug}`}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {country.flag} {country.name.en}
        </Link>
      )}

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="sky">{tRaw(`tripStyles.${trip.style}`)}</Badge>
          {trip.partners.map((p, i) => (
            <Badge key={i} variant="amber">{p}</Badge>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{t(trip.title)}</h1>
        <p className="text-slate-400">{formatDate(trip.date)}</p>
      </header>

      {/* Route */}
      {trip.stops.length > 0 && (
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              {tRaw("trip.route")}
            </h2>
            <div className="flex flex-wrap items-center gap-1.5">
              {trip.stops.map((stop, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm">
                  <span className="text-white">{stop.label}</span>
                  {i < trip.stops.length - 1 && (
                    <span className="text-slate-600 text-xs">→</span>
                  )}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {/* Story */}
      {post ? (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">{tRaw("post.story")}</h2>
          <div className="prose prose-invert prose-slate max-w-none">
            {t(post.story)
              .split("\n\n")
              .map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
          </div>
        </section>
      ) : (
        <section>
          <h2 className="text-xl font-bold text-white mb-4">{tRaw("post.story")}</h2>
          <p className="text-slate-300 leading-relaxed">{t(trip.routeSummary)}</p>
        </section>
      )}

      {/* Photos placeholder */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-sky-400" />
          {tRaw("post.photos")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center text-slate-600"
            >
              <ImageIcon className="w-8 h-8" />
            </div>
          ))}
        </div>
      </section>

      {/* Likes & dislikes */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Card>
          <CardBody>
            <h3 className="text-sm font-semibold text-emerald-400 flex items-center gap-2 mb-3">
              <ThumbsUp className="w-4 h-4" />
              {tRaw("trip.likes")}
            </h3>
            <ul className="space-y-2">
              {(post?.likes ?? trip.likes).map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3 className="text-sm font-semibold text-rose-400 flex items-center gap-2 mb-3">
              <ThumbsDown className="w-4 h-4" />
              {tRaw("trip.dislikes")}
            </h3>
            <ul className="space-y-2">
              {(post?.dislikes ?? trip.dislikes).map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-rose-500 mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      {/* Practical tips */}
      {post?.tips && (
        <section>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            {tRaw("post.tips")}
          </h2>
          <Card>
            <CardBody>
              <ul className="space-y-3">
                {(post.tips.en).map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-amber-400 font-bold tabular-nums shrink-0">{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </section>
      )}
    </div>
  );
}
