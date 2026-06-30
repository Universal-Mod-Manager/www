# Universal Mod Manager Website

The showcase / landing website for **Universal Mod Manager (UMM)**, a cross-platform desktop
mod manager for Windows, macOS, Linux and Steam Deck.

## What this site covers

- **Home** — project overview, key features, and latest release notes pulled from GitHub at build time
- **Features** — full feature list: per-game mod lists, enable/disable, drag-and-drop reordering, plugin-per-game architecture, themes, sandboxed plugins, and planned cloud sync
- **Install** — step-by-step setup instructions for Windows, macOS, Linux, and Steam Deck
- **Security** — why UMM is trustworthy: open source, verified GitHub releases, sandboxed plugins

The site links to the desktop app's GitHub releases for downloads. It does not host any binaries.

- Desktop app: [Universal-Mod-Manager/desktop](https://github.com/Universal-Mod-Manager/desktop)

## Stack

Built on the [AstroWind](https://github.com/onwidget/astrowind) template (MIT). Astro 6 ·
TypeScript · Tailwind CSS v4 · pnpm. Requires **Node ≥ 22.12**.

## Commands

| Command        | Action                                   |
| :------------- | :--------------------------------------- |
| `pnpm install` | Install dependencies                     |
| `pnpm dev`     | Start the dev server at `localhost:4321` |
| `pnpm build`   | Build the production site to `./dist/`   |
| `pnpm preview` | Preview the build locally                |
| `pnpm check`   | Type-check, lint and format-check        |

## More

Template credit: AstroWind ([LICENSE.md](LICENSE.md), MIT).
