"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/data/countries";

const visitedIso2 = new Set(countries.map((c) => c.iso2));
const iso2ToSlug: Record<string, string> = Object.fromEntries(
  countries.map((c) => [c.iso2, c.slug])
);
const iso2ToLabel: Record<string, string> = Object.fromEntries(
  countries.map((c) => [c.iso2, `${c.flag} ${c.name.en}`])
);

interface GeoFeature {
  properties: Record<string, string>;
  geometry: object;
}

const COLOR_DEFAULT = "rgba(74,222,128,0.35)";
const COLOR_HOVER   = "rgba(134,239,172,0.50)";
const COLOR_NONE    = "rgba(0,0,0,0)";

export default function GlobeComponent() {
  const mountRef  = useRef<HTMLDivElement>(null);
  const router    = useRouter();
  const [loading,    setLoading]    = useState(true);
  const [tooltip,    setTooltip]    = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [rotating,   setRotating]   = useState(true);

  // Refs shared between effect and button handlers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef   = useRef<any>(null);
  const rotRef     = useRef(true);

  // Keep rotRef in sync so interval callback sees latest value
  useEffect(() => { rotRef.current = rotating; }, [rotating]);

  useEffect(() => {
    if (!mountRef.current) return;
    let cancelled = false;
    let hoveredIso: string | null = null;

    async function init() {
      const GlobeLib = (await import("globe.gl")).default;
      const geoRes   = await fetch("/ne_110m_admin_0_countries.geojson");
      const geoData  = await geoRes.json();
      if (cancelled || !mountRef.current) return;

      const w = mountRef.current.offsetWidth  || 800;
      const h = mountRef.current.offsetHeight || 600;

      const globe = new GlobeLib(mountRef.current);
      globeRef.current = globe;

      globe
        .width(w).height(h)
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
        .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
        .atmosphereColor("#38bdf8")
        .atmosphereAltitude(0.18)
        .polygonsData(geoData.features)
        .polygonGeoJsonGeometry((f: unknown) => (f as GeoFeature).geometry as never)
        .polygonCapColor((f: unknown) => {
          const feat = f as GeoFeature;
          if (!visitedIso2.has(feat.properties.ISO_A2)) return COLOR_NONE;
          return feat.properties.ISO_A2 === hoveredIso ? COLOR_HOVER : COLOR_DEFAULT;
        })
        .polygonSideColor((f: unknown) =>
          visitedIso2.has((f as GeoFeature).properties.ISO_A2)
            ? "rgba(74,222,128,0.12)"
            : COLOR_NONE
        )
        .polygonStrokeColor((f: unknown) =>
          visitedIso2.has((f as GeoFeature).properties.ISO_A2)
            ? "rgba(74,222,128,0.75)"
            : false
        )
        .polygonAltitude((f: unknown) =>
          visitedIso2.has((f as GeoFeature).properties.ISO_A2) ? 0.01 : 0
        )
        .polygonsTransitionDuration(0)
        .onPolygonHover((f: unknown | null) => {
          const feat = f ? (f as GeoFeature) : null;
          const iso  = feat && visitedIso2.has(feat.properties.ISO_A2)
            ? feat.properties.ISO_A2
            : null;
          if (iso === hoveredIso) return;
          hoveredIso = iso;
          globe.polygonCapColor(globe.polygonCapColor()); // force repaint
          setTooltip(iso ? (iso2ToLabel[iso] ?? null) : null);
        })
        .onPolygonClick((f: unknown) => {
          const iso  = (f as GeoFeature).properties.ISO_A2;
          const slug = iso2ToSlug[iso];
          if (slug) router.push(`/countries/${slug}`);
        });

      // Wire up OrbitControls
      const controls = globe.controls();
      controls.autoRotate      = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom      = true;
      controls.minDistance     = 101;   // don't let camera clip into globe
      controls.maxDistance     = 1000;

      // Keep autoRotate in sync with React state via interval
      const syncInterval = setInterval(() => {
        controls.autoRotate = rotRef.current;
      }, 100);

      // Track mouse for tooltip positioning
      const onMove = (e: MouseEvent) => {
        if (tooltip !== null) setTooltipPos({ x: e.clientX, y: e.clientY });
      };
      mountRef.current?.addEventListener("mousemove", onMove as EventListener);

      setLoading(false);

      // Resize observer
      const ro = new ResizeObserver(() => {
        if (cancelled || !mountRef.current) return;
        globe.width(mountRef.current.offsetWidth).height(mountRef.current.offsetHeight);
      });
      if (mountRef.current.parentElement) ro.observe(mountRef.current.parentElement);

      return () => {
        clearInterval(syncInterval);
        ro.disconnect();
        mountRef.current?.removeEventListener("mousemove", onMove as EventListener);
      };
    }

    init();

    return () => {
      cancelled = true;
      // globe.gl attaches to the DOM node; clearing innerHTML tears it down
      if (mountRef.current) mountRef.current.innerHTML = "";
      globeRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const zoom = (delta: number) => {
    const g = globeRef.current;
    if (!g) return;
    const controls = g.controls();
    const camera   = g.camera();
    // Move camera along its current direction
    const dir = camera.position.clone().normalize();
    camera.position.addScaledVector(dir, delta * (camera.position.length() * 0.15));
    controls.update();
  };

  const toggleRotate = () => setRotating((r) => !r);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Controls */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
        <button
          onClick={() => zoom(-1)}
          className="w-8 h-8 rounded-lg bg-slate-800/80 backdrop-blur border border-white/10 text-white text-lg font-bold flex items-center justify-center hover:bg-slate-700/80 transition-colors"
          aria-label="Zoom in"
        >+</button>
        <button
          onClick={() => zoom(1)}
          className="w-8 h-8 rounded-lg bg-slate-800/80 backdrop-blur border border-white/10 text-white text-lg font-bold flex items-center justify-center hover:bg-slate-700/80 transition-colors"
          aria-label="Zoom out"
        >−</button>
        <button
          onClick={toggleRotate}
          className="w-8 h-8 rounded-lg bg-slate-800/80 backdrop-blur border border-white/10 text-white text-xs flex items-center justify-center hover:bg-slate-700/80 transition-colors"
          aria-label={rotating ? "Pause rotation" : "Resume rotation"}
        >
          {rotating ? "⏸" : "▶"}
        </button>
      </div>

      <div
        ref={mountRef}
        className="w-full h-full"
        onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
      />

      {tooltip && (
        <div
          className="fixed pointer-events-none z-50 bg-slate-800/95 backdrop-blur px-3 py-1.5 rounded-lg text-white text-sm font-medium shadow-xl border border-green-500/40 translate-x-3 -translate-y-full"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}
