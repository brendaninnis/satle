# Puzzle Management Guide

## Overview

Satle puzzle data is managed through two source files and three scripts:

**Source files** (in `data/`, committed to repo):
- `data/puzzles.json` — all puzzle objects (the pool)
- `data/schedule.json` — ordered list of puzzle IDs determining which puzzle appears on each day

**Scripts** (in `scripts/`):
- `scripts/build-satles.mjs` — generates compressed `.lz` files from the source data
- `scripts/add-puzzles.mjs` — adds new puzzles to the pool and schedule
- `scripts/rebuild-schedule.mjs` — adjusts when new puzzles start appearing

## How the Schedule Works

The game calculates a **day index** from a fixed start date (August 1, 2025). Each day, the puzzle is selected by:

```
puzzleId = schedule[dayIndex % schedule.length]
```

The schedule array maps each day index to a puzzle ID. Position 0 = Aug 1, 2025, position 1 = Aug 2, 2025, and so on. After all entries are exhausted, it wraps around.

## Adding New Puzzles

### Step 1: Prepare a JSON file

Create a JSON file with new puzzle entries. Each entry needs:

```json
{
  "id": 472,
  "city": "City Name",
  "country": "Country Name",
  "emoji": "🏳️",
  "loc": { "lat": 0.0, "lng": 0.0 },
  "name": "Landmark Name",
  "description": "2-4 sentence description without giving away the location."
}
```

IDs must be unique and not conflict with existing puzzles. Check the highest existing ID with:

```bash
node -e "const p = require('./data/puzzles.json'); console.log(Math.max(...p.map(x=>x.id)))"
```

### Step 2: Add puzzles and set deploy date

Run the add-puzzles script with your deploy date:

```bash
node scripts/add-puzzles.mjs path/to/new-puzzles.json --deploy-date YYYY-MM-DD
```

This does everything in one step:
1. Validates new puzzles (no duplicate IDs, required fields)
2. Merges them into `data/puzzles.json`
3. Rebuilds `data/schedule.json`: past days preserved, new puzzles shuffled starting on the deploy date, then remaining old puzzles shuffled
4. Generates both `.lz` files and copies them to SatleCompose

### Step 3: Verify

```bash
npm run dev
```

Open the dev server and check that the puzzle loads correctly. Check the browser console for errors.

### Step 4: Deploy

1. Commit `data/`, `public/`, and any code changes
2. Deploy the website
3. Release mobile app updates (if applicable)

## Changing the Deploy Date

If you've already added puzzles but the deploy date changed, use `rebuild-schedule.mjs`:

```bash
node scripts/rebuild-schedule.mjs --deploy-date YYYY-MM-DD --new-puzzles path/to/new-puzzles.json
```

This preserves past schedule entries, then re-shuffles new puzzles first, then old puzzles, starting from the new deploy date. It does NOT modify the puzzle pool — only the schedule and `.lz` files.

You can run this as many times as needed. The `--new-puzzles` file tells the script which IDs to prioritize in the schedule.

## Deployment and Backwards Compatibility

### Two compressed files

The build script generates two files:

| File | Format | Used by |
|------|--------|---------|
| `public/satles-v2.lz` | `{ puzzles: [...], schedule: [...] }` | New web app, new mobile app |
| `public/satles-encoded.lz` | `[puzzle, puzzle, ...]` (ordered by schedule) | Old mobile apps |

Old mobile apps that haven't been updated fetch `satles-encoded.lz` and use array-index-based selection. Because the array is ordered to match the schedule, they show the same puzzle as the new apps.

### Deployment order

1. **Release mobile apps first** (optional but recommended) — new mobile apps support both formats and will work before or after the website update
2. **Deploy website** — both `.lz` files are served; old mobile apps fetch `satles-encoded.lz`, new apps fetch `satles-v2.lz`

### Start date

The start date is **August 1, 2025** and is hardcoded in:
- `js/app/time.js` (web): `startYear = 2025`, `startDay = 213`
- `DateTimeProvider.kt` (mobile): `LocalDate(2025, 8, 1)`

This never needs to change. The schedule accounts for all days since the start date.

## Script Reference

### `scripts/build-satles.mjs`

Generates `.lz` files from `data/puzzles.json` and `data/schedule.json`.

```bash
node scripts/build-satles.mjs
```

Also copies files to `../SatleCompose/composeApp/src/commonMain/composeResources/files/` if that path exists.

### `scripts/add-puzzles.mjs`

Adds new puzzles to the pool and rebuilds the schedule.

```bash
node scripts/add-puzzles.mjs <new-puzzles.json> [--deploy-date YYYY-MM-DD]
```

- `--deploy-date` defaults to today if not provided
- Fails if any new puzzle ID already exists in the pool

### `scripts/rebuild-schedule.mjs`

Rebuilds the schedule for a different deploy date without changing the pool.

```bash
node scripts/rebuild-schedule.mjs --deploy-date YYYY-MM-DD --new-puzzles <file.json>
```

- `--new-puzzles` tells the script which IDs to place first in the schedule
- Past entries (before deploy date) are always preserved
- Both flags are required

## Data Fixes

To fix data issues (typos, bad coordinates, etc.):

1. Edit `data/puzzles.json` directly
2. Run `node scripts/build-satles.mjs` to regenerate the `.lz` files
3. Verify with `npm run dev`
