# Repository Guidelines

## Project Structure & Module Organization

The SvelteKit app lives in `src`. Shared components and utilities stay in `src/lib`, while route files and layouts remain under `src/routes`. Keep global CSS and Tailwind layer directives in `src/app.css`; limit component styles to their `.svelte` files. Static assets belong in `static` and ship at the web root. Regenerate dependencies with the package manager rather than editing `node_modules` or `bun.lock`.

## Build, Test, and Development Commands

Install packages with `bun install` (preferred) or `npm install`. Use `npm run dev -- --open` for the dev server, `npm run build` for the production bundle, and `npm run preview` to inspect the build locally. Validate the stack with `npm run check` (Svelte + TypeScript), `npm run lint` (Prettier then ESLint), and `npm run format` when files need cleanup.

## Coding Style & Naming Conventions

Prettier governs formatting: two-space indentation, trailing commas where valid, double quotes in JSON. Order Tailwind classes from layout → spacing → color for readability. Name Svelte components `PascalCase.svelte`, stores in `src/lib/stores` camelCase, and utility modules kebab-case to mirror their file names. Favor strict TypeScript types, keeping `any` behind a comment that notes why it is required. Avoid disabling ESLint or Svelte warnings unless linked to a tracked issue.

## Testing Guidelines

Every change must pass `npm run check` and `npm run lint` before review. When adding reusable logic, pair it with a `*.spec.ts` file or a `__tests__` directory beside the source. Document manual exercise steps for interactive UI changes—cursor effects, page transitions, and async loads—in the pull request so reviewers can reproduce them. Note known test gaps and create follow-up tasks when automation is not yet in place.

## Commit & Pull Request Guidelines

Follow the active Conventional Commit style (`feat:`, `fix:`, `chore:`, `refactor:`) with concise imperative descriptions; reference related routes or components when helpful. Commit only the files touched by your change, including updated assets or generated CSS. Pull requests should include a summary, checklist of verification commands, and screenshots or clips for any visible adjustments. Link issues or roadmap items and flag breaking changes or migrations in bold up front.

## Asset & Configuration Notes

Tailwind runs through `@tailwindcss/vite`; update `vite.config.ts` when adding plugins or aliases and explain the impact in the PR. Svelte adapter settings live in `svelte.config.js`; verify static asset paths when switching adapters or build targets.
