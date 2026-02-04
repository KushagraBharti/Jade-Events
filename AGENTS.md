# Repository Guidelines

This guide keeps contributions consistent for the Jade Events Next.js site.

## Project Structure & Module Organization
- Next.js 16 App Router lives in `app/` (`layout.tsx`, `page.tsx`, route folders `/services`, `/about`) with shared styles in `app/globals.css`.
- Reusable UI and page sections sit in `components/` (page-specific subfolders plus `components/ui` primitives); shared helpers in `lib/utils.ts`; custom hooks in `hooks/`.
- Static assets go in `public/`; reference them with root-relative paths (e.g., `/images/hero.jpg`). Temporary source images live in `images to use/` - move finalized assets into `public/` before shipping.
- Path alias `@/*` resolves from repo root (set in `tsconfig.json`); prefer it over long relative imports.

## Build, Test, and Development Commands
- `bun install` to sync dependencies.
- `bun run dev` starts the local server on `http://localhost:3000`.
- `bun run lint` runs eslint across the repo; fix warnings before opening a PR.
- `bun run build` produces the production bundle; `bun start` serves the built output (use to smoke-test prod config).

## Coding Style & Naming Conventions
- TypeScript, functional React components, and Tailwind CSS. Add "use client" only when needed for browser APIs or interactive state.
- 2-space indentation; favor concise components with clear prop typing and named exports.
- PascalCase components and files under `components/`; camelCase functions, variables, and hooks (`useX`) in `hooks/`.
- Keep Tailwind classes purposeful; prefer CSS variables defined in `app/globals.css` for color/typography tokens.

## Testing Guidelines
- No automated tests are checked in yet. When adding features, include lightweight coverage (React Testing Library for components, Playwright for flows) and run `bun run lint` + `bun run build` to catch regressions.
- Name tests after the behavior they assert (e.g., `contact-form.spec.ts` should verify submission success/error paths).

## Commit & Pull Request Guidelines
- Commits: short, imperative subject lines that describe intent (e.g., `Refine services hero animation`). Group related changes; avoid mixed concerns.
- PRs: include a summary of changes, any linked issue, before/after screenshots for UI updates, and the commands you ran (`bun run lint`, `bun run build`). Call out content or asset placeholders that still need replacement.
- Keep PRs scoped; prefer follow-up PRs for large redesigns or asset drops.
