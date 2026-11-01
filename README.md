# Kai Jonas — personal site

Portfolio and blog built with [Next.js](https://nextjs.org/) (App Router), React, Tailwind CSS, and markdown posts under `app/_markdownFiles/`.

## Requirements

- [Node.js](https://nodejs.org/) **20.9+** (see `engines` in `package.json`)

## Setup

```bash
npm install
```

Direct dependencies are **exact version pins** (no `^` or `~`). After changing versions, run `npm install` and commit `package-lock.json`.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Dev server (Turbopack)   |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint (flat config)     |

Dev: [http://localhost:3000](http://localhost:3000)

## Project layout

- `app/` — routes and UI (`page.tsx`, `layout.tsx`, blog, work, trips)
- `public/images/` — static images
- `app/_markdownFiles/` — blog post sources (`.md`)

## Dependencies

- **Runtime:** Next 16, React 19, Framer Motion (rotating avatar only), Geist font, markdown via `gray-matter` + `remark`/`rehype` (code highlighting at build time)
- **Lint:** ESLint 9 + `eslint-config-next`
- **`overrides.minimatch`:** pins a patched `minimatch` for the ESLint toolchain until upstream plugins update; required for a clean `npm audit`

## Images

- Home and trip galleries use `next/image` with lazy loading (except one above-the-fold home photo).
- Trip photos live under `public/images/`; Next serves AVIF/WebP variants when possible (`images.formats` in `next.config.js`).
- Large originals still slow first deploy; run **`npm run compress-images`** after adding photos (max edge 1920px, JPEG ~82 quality).

## Deploy

Build with `npm run build`, then run `npm run start` or deploy to any Node host (e.g. [Vercel](https://vercel.com/)).
