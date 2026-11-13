# Md Nafis Al Safayet — Portfolio

Personal portfolio site for a software engineer working across React, React Native, ASP.NET Core and SQL Server. It is a single-page static site: selected work, experience, skills, research, education, and contact.

**Live site:** https://nafis217.github.io/portfolio/

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion (animation) · Lucide icons · oxlint

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run lint     # oxlint
npm run preview  # serve the production build locally
```

Requires Node 22 (see `.nvmrc`).

## Editing content

All content lives in `src/data/` (`profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `research.ts`, `education.ts`). Components only render this data.

- **CV:** put the PDF at `public/Md-Nafis-Al-Safayet-CV.pdf`.
- **Project screenshots:** add images to `public/projects/<project-id>/` and list them in the project's `images` array.
- **Result chips / placeholders:** values starting with `TODO` are shown in dev only and hidden in production builds.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci` and `npm run build`, then publishes `dist/` to GitHub Pages. Pages must be set to **Source: GitHub Actions** in the repo settings. Assets use relative paths (`base: './'`); set `VITE_BASE_PATH` only if you need a fixed sub-path.
