# Universal Mod Manager Website

The showcase / landing website for **Universal Mod Manager (UMM)**, a cross-platform desktop
mod manager for Windows, macOS, Linux and Steam Deck.

This site introduces the project and points users to the app's downloads. It does not host the
binaries. Those live on the desktop app's GitHub releases.

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

See [CLAUDE.md](CLAUDE.md) for architecture and conventions, and
[user-stories.md](user-stories.md) for requirements. Template credit: AstroWind
([LICENSE.md](LICENSE.md), MIT).
