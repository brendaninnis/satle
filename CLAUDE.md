# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Satle is a Wordle-like geography game where players have 6 attempts to guess a city based on satellite images. A new puzzle is available each day. Built with vanilla JavaScript and Vite.

There is also a Compose Multiplatform mobile app at `../SatleCompose/`.

## Development Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server on port 3000 (auto-opens browser)
npm run build            # Production build to dist/
npm run build:dev        # Development build with source maps
npm run preview          # Preview production build
```

## Environment Setup

Requires a Mapbox API token. Copy `.env.example` to `.env.development` and `.env.production` with your `VITE_MAPBOX_TOKEN`.

## Architecture

### Module Loading Order
All modules in `js/app/` are loaded via script tags in `index.html` in this specific order:
1. `util.js` - Data loading, decompression, and shuffle utilities
2. `clipboard.js` - Share functionality
3. `map.js` - GameMap class wrapping Mapbox GL
4. `storage.js` - Storage class managing localStorage persistence
5. `time.js` - Daily puzzle scheduling and countdown timer
6. `geolocation.js` - Distance and bearing calculations
7. `settings.js` - User preferences (distance display, units)
8. `game.js` - Main orchestrator, game logic, DOM interactions

### Key Data Flow
- Puzzle data is stored in two compressed formats in `public/`:
  - `satles-v2.lz` — new format: `{ puzzles: [...], schedule: [...] }` (used by web app and new mobile apps)
  - `satles-encoded.lz` — legacy v1 format: array of puzzles in schedule order (used by old mobile apps)
- Both are generated from `data/puzzles.json` and `data/schedule.json` by `scripts/build-satles.mjs`
- Each puzzle object: `{ id, city, country, loc: {lat, lng}, emoji, name, description }`
- At runtime, `util.js` decompresses v2 data and builds a `puzzlesById` dictionary for O(1) lookup
- Game state is persisted to localStorage (guesses, stats, streaks)

### Daily Puzzle System
- `time.js`: `todaysSatle()` returns a day index (days elapsed since Aug 1, 2025)
- Start date is hardcoded: `startYear = 2025, startDay = 213` in `time.js`, `LocalDate(2025, 8, 1)` in mobile's `DateTimeProvider.kt`
- `game.js` uses the day index to look up the puzzle: `puzzlesById[schedule[dayIndex % schedule.length]]`
- The start date never needs to change. The schedule controls which puzzle appears on which day.

### Zoom Mechanic
The map uses 6 zoom levels `[18, 16, 14, 11, 8, 4]`. Players start at maximum zoom (closest satellite view) and zoom out with each wrong guess, revealing more context.

## Puzzle Management

Full documentation: `docs/puzzle-management.md`

### Source Data (committed to repo)
- `data/puzzles.json` — all puzzle objects (the pool, currently 470)
- `data/schedule.json` — ordered array of puzzle IDs determining which puzzle appears on each day

### Scripts (committed to repo)
- `scripts/build-satles.mjs` — generates both `.lz` files from source data, copies to SatleCompose if present
- `scripts/add-puzzles.mjs` — adds new puzzles to pool, rebuilds schedule and `.lz` files
- `scripts/rebuild-schedule.mjs` — adjusts deploy date without changing the pool; defaults to today if no `--deploy-date` given

### Workspace (gitignored)
- `workspace/` — contains one-time scripts and working files, gitignored
- `workspace/new-satles.json` — the latest batch of new puzzle entries (used with `--new-puzzles` flag)

### Adding New Puzzles Workflow
1. Create a JSON file with new puzzle entries (see `docs/puzzle-management.md` for format)
2. Run `node scripts/add-puzzles.mjs <file.json>` to add to pool and build
3. Run `node scripts/rebuild-schedule.mjs --new-puzzles <file.json>` right before deploying to set the correct start position
4. The script prints a full preview of the new puzzle schedule for verification
5. Deploy website, then release mobile apps (or vice versa — both are backwards compatible)

### Backwards Compatibility
- Old mobile apps fetch `satles-encoded.lz` (v1 array format) and use index-based lookup
- New apps fetch `satles-v2.lz` (object with puzzles + schedule) and use schedule-based lookup
- Mobile app's `SatleNetworkService.kt` tries v2 first, falls back to v1
- Both formats are always generated together by `build-satles.mjs`

## External Dependencies
- Mapbox GL 3.9.1 - Satellite map rendering
- Bootstrap 5.2 (CDN) - UI components
- Twemoji (CDN) - Emoji rendering
- lz-string - Puzzle data compression/decompression

## Notes
- No test framework or linting configured
- Single-page app with no backend required
- Builds to `dist/` for static hosting deployment
- Live site: https://satle.ca
- Scripts use `.mjs` extension because the project doesn't have `"type": "module"` in package.json
- When verifying schedule changes, compare against live data at `https://satle.ca/satles-encoded.lz`
