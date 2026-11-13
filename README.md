# Joel Revuelta — Portfolio

Personal portfolio site for Joel Revuelta, software engineer. Built with the
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
| `components/` | Header, Hero, Projects, Experience, Education, Stack, Contact and Dock |
| `data/` | Project entries and stack groups |
| `types/` | Shared TypeScript interfaces |
| `public/` | Images, project covers, icons, CV and static SEO files |

## Editing content

Most content is data-driven:

- **Projects** — add or edit entries in the `projects` array in
  `data/index.ts`. Each entry needs a title, description, cover image with its
  intrinsic width and height, one or more tech icons and a link. Covers live in
  `public/` and display at full card width without cropping.
- **Stack** — update the `stackGroups` array in `data/index.ts`.
- **Navigation** — the desktop links live in `components/Header.tsx` and the
  mobile dock items in `components/Dock.tsx`.
- **Sections** — `app/page.tsx` defines the section order; each section is a
  component in `components/`.

Colour, typography and radius tokens live in `app/globals.css`. The Epilogue and
JetBrains Mono fonts are configured in `app/layout.tsx`.

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
