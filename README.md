# Joel Revuelta — Portfolio

Personal portfolio site for Joel Revuelta, software developer. Built with the
Next.js App Router, React, TypeScript and Tailwind CSS, statically exported and
deployed to GitHub Pages.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **UI:** React 19, Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** GitHub Actions → GitHub Pages

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm lint    # ESLint
pnpm build   # static export to out/
```

## Project structure

| Path | Contents |
| --- | --- |
| `app/` | Layout, global styles, page composition and metadata |
| `components/` | Hero, Education, Experience, Projects, Stack and Dock sections |
| `data/` | Projects, stack categories and dock items |
| `types/` | Shared TypeScript interfaces |
| `public/` | Images, icons, CV and static SEO files |

## Editing content

Most content is data-driven:

- **Projects** — add or edit entries in the `projects` array in
  `data/index.ts`. Each entry needs a title, description, cover image, one or
  more tech icons and a link. Covers live in `public/` and render at a 7:4
  aspect ratio (16:9 images work well).
- **Stack** — update `programmingLanguages`, `frontend`, `backend` or `others`
  in `data/index.ts`.
- **Dock** — update `dockItems` in `data/index.ts`.
- **Sections** — `app/page.tsx` defines the section order; each section is a
  component in `components/`.

Metadata and structured data (Open Graph, Twitter cards, JSON-LD) are defined
in `app/layout.tsx`.

## Build and deployment

```bash
pnpm build
```

The site is exported to `out/` (`output: "export"` in `next.config.ts`). Pushing
to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

## Contact

- GitHub: [Joel-Revuelta](https://github.com/Joel-Revuelta)
- LinkedIn: [joel-revuelta](https://www.linkedin.com/in/joel-revuelta)
