# Style Guide — "Ink & Ember"

## Colour tokens (src/app/globals.css)
| Token | Dark (Ink) | Light (Paper) |
|---|---|---|
| `--background` | `#0D0C0B` | `#F4EFE4` |
| `--foreground` | `#F4EFE6` | `#1B1814` |
| `--primary` / `--accent-light` | `#FF6B3D` ember | `#C23B14` |
| `--secondary` (body text) | `#A8A196` | `#5E574D` |
| `--bg-medium` (cards) | `#151311` | `#FBF8F1` |
| `--border-color` | `rgba(244,239,230,.10)` | `rgba(27,24,20,.13)` |

Change `--primary` / `--accent-light` once and the whole site re-colours.

## Fonts (src/app/layout.tsx)
- **Headings** — Bricolage Grotesque (`font-heading`), extrabold, tight tracking, sentence case.
- **Accent word** — Fraunces italic (`font-accent`), used for the last word of big headings.
- **Body** — Instrument Sans (`font-sans`).
- **Labels / tags** — JetBrains Mono (`font-label`, uppercase, wide tracking).

## Background lines (src/components/Background.tsx + `.bg-lines*` in globals.css)
32px blueprint grid, 160px major grid, 3 vertical rails with a travelling ember streak,
dashed horizontal guides, corner registration marks, ember glows, film grain, vignette.
All colours come from `--line`, `--line-strong`, `--rail`, `--glow`.

## Other pieces
- `.ruler` — ticked divider under headings.
- `Marquee.tsx` — tech-stack ticker under the hero.
- `ScrollProgress.tsx` — thin ember progress bar at the top.
