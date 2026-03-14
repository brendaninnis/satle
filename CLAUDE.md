# CLAUDE.md

## Project Overview

Satle is a daily geography puzzle game (like Wordle but with maps). Players get 6 attempts to guess a city from satellite imagery, starting zoomed in and zooming out with each wrong guess. Live at https://satle.ca.

Companion Compose Multiplatform mobile app lives at `../SatleCompose/`.

## Commands

```bash
npm run dev        # Dev server on port 3000 (auto-opens browser)
npm run build      # Production build to dist/
npm run deploy     # Build + rsync to VPS (barbarosa@172.105.4.199)
```

Puzzle management scripts (all `.mjs` — project has no `"type": "module"` in package.json):
```bash
node scripts/build-satles.mjs                                           # Regenerate .lz files from data/
node scripts/add-puzzles.mjs <new-puzzles.json> [--deploy-date DATE]    # Add puzzles to pool + rebuild
node scripts/rebuild-schedule.mjs --new-puzzles <file> [--deploy-date]  # Adjust schedule timing (defaults to today)
```

## Environment

Requires `VITE_MAPBOX_TOKEN` in `.env.development` and `.env.production` (see `.env.example`). These files are gitignored.

## Architecture

**No framework, no bundler magic.** Vanilla JS with ES module imports, loaded via script tags in `index.html`. Vite is used only for dev server and production bundling.

### File Structure

```
js/app/
├── util.js          # Data loading, lz-string decompression, shuffle
├── clipboard.js     # Share/copy functionality
├── map.js           # GameMap class (wraps Mapbox GL)
├── storage.js       # Storage class (localStorage persistence)
├── time.js          # todaysSatle() day index calc, countdown timer
├── geolocation.js   # Distance/bearing calculations between coordinates
├── settings.js      # User preferences (units, distance display)
└── game.js          # Main orchestrator — game logic, DOM, state machine

data/                # Source of truth (committed)
├── puzzles.json     # All puzzle objects (the pool)
└── schedule.json    # Ordered array of puzzle IDs (day index → puzzle)

public/              # Generated compressed files (committed)
├── satles-v2.lz     # { puzzles, schedule } — used by web + new mobile
└── satles-encoded.lz # [puzzles...] in schedule order — legacy mobile compat

scripts/             # Maintenance scripts (committed)
workspace/           # Throwaway/one-time scripts (gitignored)
docs/                # Deployment and puzzle management guides
```

### How the Daily Puzzle Works

1. `time.js` → `todaysSatle()` returns days elapsed since **Aug 1, 2025** (hardcoded: `startYear=2025, startDay=213`)
2. `game.js` → `data.puzzlesById[data.schedule[dayIndex % data.schedule.length]]`
3. The start date never changes. The schedule array controls which puzzle appears on which day.

Mobile equivalent: `DateTimeProvider.kt` uses `LocalDate(2025, 8, 1)`.

### Puzzle Data Format

```json
{ "id": 1, "city": "Paris", "country": "France", "emoji": "🇫🇷",
  "loc": { "lat": 48.8584, "lng": 2.2945 },
  "name": "Eiffel Tower", "description": "..." }
```

### Zoom Mechanic

6 zoom levels: `[18, 16, 14, 11, 8, 4]`. Guess 1 is most zoomed in (hardest), each wrong guess zooms out.

### Data Loading

`util.js` fetches `satles-v2.lz`, decompresses with lz-string, builds a `puzzlesById` dictionary (O(1) lookup). Falls back to localStorage cache if fetch fails.

## Key Conventions

- **Two `.lz` files** are always generated together by `build-satles.mjs` for backwards compatibility with old mobile apps that use the v1 array format
- **Schedule is separate from puzzles.** `data/schedule.json` maps day positions to puzzle IDs. `data/puzzles.json` is the unordered pool. Never modify the schedule by hand — use the scripts.
- **Preserved schedule positions** (days already played) must match the live site. When verifying, compare against `https://satle.ca/satles-encoded.lz`
- **The start date (Aug 1, 2025) must not change.** It's hardcoded in both web (`time.js`) and mobile (`DateTimeProvider.kt`). The schedule handles everything.
- **`workspace/` is gitignored.** Use it for one-time scripts, temp files, and working data like `new-satles.json`.
- **Scripts use `.mjs` extension** because the project doesn't set `"type": "module"` in package.json. Use `import LZString from 'lz-string'` (default import), not named imports.

## Common Tasks

**Fix puzzle data (typo, coordinates):** Edit `data/puzzles.json` directly, then run `node scripts/build-satles.mjs`.

**Add new puzzles:** See `docs/puzzle-management.md`. Short version: create JSON file with new entries → `add-puzzles.mjs` → `rebuild-schedule.mjs` right before deploy → `npm run deploy`.

**Deploy:** See `docs/deployment.md`. Short version: `npm run deploy` (builds + rsyncs to VPS).

**Test a specific puzzle:** In `game.js`, temporarily replace `todaysSatle()` with a day index number. New puzzles start at whatever position `rebuild-schedule.mjs` last set them to (printed in its output).

## External Dependencies

- **Mapbox GL 3.9.1** — Satellite map tiles (requires API token)
- **Bootstrap 5.2** — UI components (CDN)
- **Twemoji** — Cross-platform emoji rendering (CDN)
- **lz-string** — Compress/decompress puzzle data (npm)

## Gotchas

- No test framework or linter. Verify changes manually with `npm run dev`.
- `time.js` contains obfuscated anti-theft code at the bottom — don't touch it.
- The `game.js` file is large (~700 lines) and handles all DOM interaction, game state, modals, and autocomplete. Most game logic changes happen here.
- `populateSatles()` (v1 loader) still exists in `util.js` but is unused by the web app. Keep it for reference.
- When running `rebuild-schedule.mjs` multiple times, each run reshuffles. The preserved section stays stable as long as the underlying schedule hasn't been corrupted by a previous run with wrong parameters.
