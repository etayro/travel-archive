# Travel Archive

A personal travel database web app featuring an interactive 3D globe homepage, country pages, trip cards, full trip posts, and English/Hebrew (RTL) multilingual support.

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 16 (App Router) | File-based routing, SSR, React server components |
| Language | TypeScript | End-to-end type safety |
| Styling | Tailwind CSS v4 | Utility-first, zero config with PostCSS |
| Globe | react-globe.gl + Three.js | WebGL-powered 3D globe with click/hover |
| i18n | react-i18next | Language detection, RTL, namespace support |
| Icons | lucide-react | Consistent icon set |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (globe + stats + country grid)
│   ├── countries/          # Country list + [slug] detail pages
│   ├── trips/              # Trip list + [tripId] post pages
│   └── about/              # About page
├── components/
│   ├── globe/              # GlobeComponent (WebGL, lazy-loaded)
│   ├── navbar/             # Navbar with language toggle
│   ├── country/            # CountryHero, CountryCard, CrowdChart
│   ├── trip/               # TripCard
│   ├── layout/             # I18nProvider
│   └── ui/                 # Badge, Card, StatCard, SectionTitle
├── data/                   # Mock data layer (countries, trips, posts)
├── hooks/                  # useLocale (i18n + RTL helper)
├── i18n/                   # i18next config + en/he translation files
├── lib/                    # Utilities (cn, formatDate)
└── types/                  # TypeScript interfaces
```

## Quick Start

**Requirements:** Node.js ≥ 20.9.0

```bash
# If you use nvm:
nvm use   # reads .nvmrc → Node 20

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000
```

## Available Scripts

```bash
npm run dev      # Development server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Data Layer

All data lives in `src/data/` as typed TypeScript files. To replace with a CMS or database:

1. Keep the same interfaces in `src/types/index.ts`
2. Replace the exports in `src/data/index.ts` with API calls or DB queries
3. Mark pages as `async` and `await` the data fetches

### Sample countries included

| Country | Visits | Years |
|---|---|---|
| 🇮🇹 Italy | 3 | 2018, 2021, 2023 |
| 🇨🇭 Switzerland | 2 | 2019, 2022 |
| 🇹🇭 Thailand | 2 | 2017, 2020 |
| 🇻🇳 Vietnam | 1 | 2019 |
| 🇫🇷 France | 4 | 2016, 2018, 2020, 2023 |

## Internationalization

Two locales are supported: `en` (English, LTR) and `he` (Hebrew, RTL).

- Translations are in `src/i18n/locales/{en,he}/common.json`
- Language is auto-detected from the browser and persisted in `localStorage`
- Toggle is in the navbar (switches between EN ↔ עב)
- `document.dir` is automatically set to `rtl`/`ltr` on language change
- Country names, trip titles, summaries, and post stories all have per-locale fields

## Globe

The homepage globe (`src/components/globe/GlobeComponent.tsx`) is:

- Lazy-loaded with `next/dynamic` + `ssr: false` (Three.js needs the browser)
- Renders via an imperative `createRoot` inside a `useEffect` to avoid SSR issues
- Shows visited country centroids as glowing blue points
- Shows country flag + name labels floating above the globe
- Clicking a label or point navigates to `/countries/[slug]`
- Auto-rotates slowly after mount
- Reacts to container resize via `ResizeObserver`

## Deployment (Vercel)

```bash
# Push to GitHub, then connect repo in Vercel dashboard
# No environment variables needed for the base app
```

For a custom domain or CMS integration, add the relevant env vars in Vercel's dashboard. The app reads no hardcoded paths.
