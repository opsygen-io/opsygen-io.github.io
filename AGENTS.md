# Repository Guidelines

## Project Structure & Module Organization
This portal runs on Vite 5 with React 19. The entry point `src/main.jsx` wires React Router into `Layout.jsx`, which frames page components from `src/Pages`. Shared UI lives under `src/Components` (notably the TypeScript admin widgets in `src/Components/admin`), while lightweight helpers stay in `src/utils.js`. Static HTML shell, favicons, and other assets belong in `public/`. Prefer the Vite alias `@/` (see `vite.config.js`) over long relative import chains when referencing code in `src`.

## Build, Test, and Development Commands
- `yarn install` synchronises dependencies whenever `package.json` changes.
- `yarn dev` launches the Vite dev server for local iteration; use it for manual QA before opening a PR.
- `yarn build` produces the static bundle in `dist/`, which is what ships to GitHub Pages. `yarn preview` serves that bundle locally for final smoke checks.

## Coding Style & Naming Conventions
Favor functional components and React hooks, and keep modules focused. Name components and their files in PascalCase (e.g., `Products.jsx`), utilities in camelCase, and colocated styles with matching names. Indent JSX with two spaces, prefer double quotes inside JSX attributes, and group imports by origin (React, third-party, then internal `@/`). TypeScript admin widgets should declare explicit prop types or interfaces for clarity. Until a formatter is added to the toolchain, rely on your editor’s Prettier integration to keep diffs clean and avoid mixed tabs and spaces.

## Testing Guidelines
Automated tests are not yet configured. When adding coverage, bootstrap Vitest, add a matching `test` script in `package.json`, and colocate specs as `ComponentName.test.tsx` beside the component or inside `src/__tests__`. For now, manual verification via `yarn dev` plus targeted screenshot comparisons is required. Document any new test commands here as the suite evolves.

## Commit & Pull Request Guidelines
Recent history favours short, imperative summaries (e.g., `changed logo`). Keep subject lines under 72 characters and add body context when behaviour changes are non-trivial. Each PR should summarise scope, list affected routes or components, link related GitHub issues, and attach before/after screenshots for UI updates. Request review only after `yarn build` succeeds locally and any preview links are updated.

## Security & Configuration Tips
This site is statically deployed; never commit secrets or runtime credentials. Prefer compile-time constants or JSON under `public/` for configuration. New dependencies must be browser-safe because the final bundle runs entirely on the client.
