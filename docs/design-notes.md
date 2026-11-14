# Portfolio redesign

Visual reference: https://kushalkongara.vercel.app/

The redesign adapts its oversized orange typography, character-led hero, sketch-like borders, colourful sections, and dark contact area to Nitesh’s own content. It uses original artwork and existing portfolio facts. The hero bubble links to the about section. Contact opens the visitor’s email app; the email address can also be copied.

The site remains a static Next.js export for the existing GitHub Pages workflow. No new hosting service or backend is required.

## Original artwork

Generated with the built-in imagegen tool, using `public/images/avatar.jpg` as an identity reference. Saved to `public/images/hero-manga.webp`; converted to WebP with alpha retained (378 KB).

Final generation prompt:

> Use case: illustration-story. Asset type: transparent portfolio website hero illustration. Create an original black-and-white manga ink illustration inspired by the identity of the smiling Indian man in the reference image: curly dark hair, short full beard, strong eyebrows. Show him from mid-thigh upward, in a casual open dark jacket over a light T-shirt, smiling confidently, one hand in pocket and the other holding an open laptop casually at his side. Three-quarter pose facing slightly left but looking at viewer. Expressive professional anime protagonist with elegant detailed ink linework, screentone shadows, crisp black and white shapes. Large isolated single character filling canvas, transparent background, no scenery, no text, no lettering, no logos, no border. Maintain recognizable curly hair and beard; adult proportions. Designed to layer in front of oversized orange typography on a white website.

## Verification

- TypeScript validation and production static export.
- Chrome browser checks at widths of 320, 390, 768, 1024, and 1440 pixels, with no horizontal scrolling.
- Career tabs, including arrow-key navigation.
- Project categories, search, empty results, and expansion to all 23 projects.
- Project dialogs, Escape dismissal, focus restoration, and direct links.
- All six existing chapter routes.
- Mobile navigation and reduced-motion preference.

## Personal photographs

The About portrait now uses a real photograph. Selected user-supplied photographs also illustrate CodeOlympics, the Glasgow university chapter, the dissertation and a personal photo journal. See [the placement analysis](photo-placement.md) for the full selection and decisions about duplicates and alternate shots.

## Local project coverage

The November home-directory audit added 11 source-backed projects. See [the audit](root-project-audit.md) for evidence, status decisions and exclusions. Project presentation and category metadata now live in the project records, with six explicitly featured entries and all work accessible through expansion and filtering.
