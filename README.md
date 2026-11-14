# Nitesh Ranjan Singh — Portfolio

A bold, illustrated Data & AI Engineering portfolio built with Next.js 15 and Tailwind CSS 4. Orange display typography, an original manga hero, pastel sections, and sketch-style details frame real projects and experience.

## Development

```bash
npm install
npm run dev
```

## Validation and build

```bash
npx tsc --noEmit
npm run build
```

The production site exports to `out/`. The existing GitHub Actions workflow deploys that directory to GitHub Pages when changes are pushed to `main`.

## Content and design

- `src/lib/portfolio.ts`: projects, experience, modules, and awards.
- `src/components/Portfolio.tsx`: homepage sections and their interactions.
- `src/app/globals.css`: visual styles and responsive layouts.
- `public/images/hero-manga.webp`: original transparent hero illustration.
- `docs/design-notes.md`: reference, artwork prompt, and verification notes.

The existing `/chapters/*/` routes render the same redesigned sections. Project links such as `/chapters/projects/#project-10` continue to open the corresponding project details.

Private biographical source: `info.md` (ignored by Git).
