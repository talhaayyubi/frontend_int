# GitHub Repository UI Clone

This project reproduces the GitHub repository page using **Next.js**, **TypeScript**, and **Tailwind CSS v4**. The visual theme is driven by a small subset of [Primer](https://primer.style) dark mode design tokens.

## Token mapping

`styles/tokens.css` defines CSS variables from Primer. Tailwind is extended so utilities map directly to those variables:

| Primer token | CSS variable            | Tailwind utility |
|--------------|------------------------|-----------------|
| `bgColor-canvas` | `--bgColor-canvas` | `bg-canvas` |
| `bgColor-muted`  | `--bgColor-muted`  | `bg-surface` |
| `fgColor-default` | `--fgColor-default` | `text-default` |
| `fgColor-muted`   | `--fgColor-muted`   | `text-muted` |
| `borderColor-default` | `--borderColor-default` | `border-default` |
| `accent-fg` | `--accent-fg` | `text-accent` / `bg-accent` |

Icons are inlined SVG paths and `.gitattributes` marks `*.svg` as text to ensure no binary assets enter the repository.

Run the usual checks before committing changes:

```
pnpm lint
pnpm typecheck
pnpm build
```
