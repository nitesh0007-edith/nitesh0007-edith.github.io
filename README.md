# Nitesh Ranjan Singh — Portfolio

A portfolio for Nitesh's data engineering work, current LLM evaluation research and YouTube teaching. Built with Next.js 15 and Tailwind CSS 4, with nine selected projects and clear routes for employers and prospective PhD supervisors.

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
- `docs/portfolio-story.md`: current narrative, project selection and research/channel evidence.
- `docs/community-testimonials.md`: Topmate review provenance, excerpts and free-session link.

The existing `/chapters/*/` routes render the same redesigned sections. Project links such as `/chapters/projects/#project-10` continue to open the corresponding project details.

Private biographical source: `info.md` (ignored by Git).
