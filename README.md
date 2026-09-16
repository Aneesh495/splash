# Splash (PricedIn)

Static-first marketing site: React 19, Vite 5, TypeScript. Built for CDN deploy (`npm run build` → hashed assets in `dist/`).

## Front-end architecture

```mermaid
flowchart TB
  Entry[main.tsx] --> Router[react-router-dom]
  Router --> Hero[hero.tsx]
  Router --> Quotes[quotes / FeaturedQuotes]
  Router --> FAQ[FAQ.tsx]
  Router --> Contact[ContactForm.tsx]
  Router --> Testimonials[FeaturedTestimonials.tsx]
```

MUI icons where needed; no server runtime in production.

## Engineering

| Topic | Approach |
| --- | --- |
| Bundling | Vite + `@vitejs/plugin-react`, TS project references |
| Lint | ESLint 9 flat config |
| Preview | `npm run preview` serves production build locally |

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Layout

| Path | Role |
| --- | --- |
| `src/hero.tsx` | Above-the-fold |
| `src/FAQ.tsx` | Collapsible FAQ |
| `src/ContactForm.tsx` | Lead form UI |
| `public/` | Static assets |

## License

MIT
