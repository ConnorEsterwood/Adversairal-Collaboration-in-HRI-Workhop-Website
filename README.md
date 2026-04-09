# Robots Among Us Workshop Site

Production web app for the HICSS 2027 workshop:
"Robots Among Us: Provocations and Debates on the Future of Human-Robot Collaboration".

## Quick Start

Requirements:
- Node.js 18+
- npm 9+

Install and run:

1. `npm ci`
2. `npm run dev`
3. Open the local URL shown by Vite

Build and preview production output:

1. `npm run build`
2. `npm run preview`

## Scripts

- `npm run dev` - Start local development server.
- `npm run build` - Build production assets into `dist/`.
- `npm run build:dev` - Build with development mode flags.
- `npm run lint` - Run ESLint checks.
- `npm run test` - Run Vitest once.
- `npm run test:watch` - Run Vitest in watch mode.

## Deployment

GitHub Actions workflow is at `.github/workflows/deploy-pages.yml`.

For deployment details and checklists, see `DEPLOY.md`.

## Content Update Workflow

Most day-to-day updates are page content changes under `src/pages/`:
- `Index.tsx`
- `Provocations.tsx`
- `Schedule.tsx`
- `Organizers.tsx`
- `Submit.tsx`

Typical flow:

1. Update page content.
2. Run `npm run lint` and `npm run test`.
3. Run `npm run build` to verify production build.
4. Push to `main` to publish.

## Process Documents

Project process and content guidance documents are maintained in the parent workspace:
- `../Workshop_Website_Spec.md`
- `../Website_Style_Guide.md`

When editing site content, keep these documents aligned.

## Notes For Maintainers

- Keep dates and submission links easy to find and update.
- Avoid introducing unnecessary framework complexity.
- Preserve accessibility and responsive behavior when updating layouts.
