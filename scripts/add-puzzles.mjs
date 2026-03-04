#!/usr/bin/env node

/**
 * Add new puzzles to the Satle game.
 *
 * Merges new puzzle entries into the pool, updates the schedule
 * (new puzzles shuffled first, then remaining old puzzles shuffled),
 * and rebuilds the .lz files.
 *
 * Usage: node scripts/add-puzzles.mjs <new-puzzles.json> [--deploy-date YYYY-MM-DD]
 *
 * Options:
 *   --deploy-date  Date to use as the cutoff for preserving past schedule entries.
 *                  Defaults to today. Format: YYYY-MM-DD
 */

import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

const puzzlesPath = join(projectRoot, 'data', 'puzzles.json')
const schedulePath = join(projectRoot, 'data', 'schedule.json')

// Parse args
const args = process.argv.slice(2)
let newPuzzlesFile = null
let deployDate = null

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--deploy-date' && i + 1 < args.length) {
        deployDate = args[++i]
    } else if (!args[i].startsWith('--')) {
        newPuzzlesFile = args[i]
    }
}

if (!newPuzzlesFile) {
    console.error('Usage: node scripts/add-puzzles.mjs <new-puzzles.json> [--deploy-date YYYY-MM-DD]')
    process.exit(1)
}

// Fisher-Yates shuffle
function shuffle(array) {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

// Calculate days since start date (Aug 1, 2025) — matches time.js and DateTimeProvider.kt
function daysSinceStart(dateStr) {
    const startDate = new Date(2025, 7, 1) // Aug 1, 2025 (month is 0-indexed)
    const target = dateStr ? new Date(dateStr + 'T00:00:00') : new Date()
    // Set target to start of day in local time
    target.setHours(0, 0, 0, 0)
    const msPerDay = 24 * 60 * 60 * 1000
    return Math.max(0, Math.floor((target - startDate) / msPerDay))
}

// Read existing data
const existingPuzzles = JSON.parse(readFileSync(puzzlesPath, 'utf-8'))
const existingSchedule = JSON.parse(readFileSync(schedulePath, 'utf-8'))

// Read new puzzles
const newPuzzles = JSON.parse(readFileSync(newPuzzlesFile, 'utf-8'))

// Build lookup of existing IDs
const existingIds = new Set(existingPuzzles.map(p => p.id))

// Validate new puzzles
const requiredFields = ['id', 'city', 'country', 'emoji', 'loc', 'name', 'description']
for (const puzzle of newPuzzles) {
    for (const field of requiredFields) {
        if (puzzle[field] === undefined) {
            console.error(`Puzzle ${puzzle.id || '(no id)'} missing required field: ${field}`)
            process.exit(1)
        }
    }
    if (puzzle.loc && (puzzle.loc.lat === undefined || puzzle.loc.lng === undefined)) {
        console.error(`Puzzle ${puzzle.id} has invalid loc (needs lat and lng)`)
        process.exit(1)
    }
    if (existingIds.has(puzzle.id)) {
        console.error(`Duplicate ID: puzzle ${puzzle.id} already exists in pool`)
        process.exit(1)
    }
}

console.log(`Existing: ${existingPuzzles.length} puzzles, ${existingSchedule.length} schedule entries`)
console.log(`Adding: ${newPuzzles.length} new puzzles`)

// Merge new puzzles into pool
const allPuzzles = [...existingPuzzles, ...newPuzzles]

// Calculate deploy day index
const dayIndex = daysSinceStart(deployDate)
console.log(`Deploy day index: ${dayIndex} (${deployDate || 'today'})`)

// Build new schedule
// 1. Preserve schedule entries for days already played (0 to dayIndex-1)
const preservedSchedule = existingSchedule.slice(0, dayIndex)
console.log(`Preserving ${preservedSchedule.length} past schedule entries`)

// 2. Collect IDs already used in preserved portion
const usedIds = new Set(preservedSchedule)

// 3. New puzzle IDs, shuffled
const newPuzzleIds = shuffle(newPuzzles.map(p => p.id))
console.log(`New puzzles (shuffled): ${newPuzzleIds.length}`)

// 4. Remaining old puzzle IDs not in the preserved portion, shuffled
const remainingOldIds = shuffle(
    existingPuzzles
        .map(p => p.id)
        .filter(id => !usedIds.has(id))
)
console.log(`Remaining old puzzles (shuffled): ${remainingOldIds.length}`)

// 5. Combine: preserved + new shuffled + remaining old shuffled
const newSchedule = [...preservedSchedule, ...newPuzzleIds, ...remainingOldIds]
console.log(`Total schedule: ${newSchedule.length} entries`)

// Sanity check: every puzzle should appear in the schedule exactly once
const scheduleSet = new Set(newSchedule)
const allIds = new Set(allPuzzles.map(p => p.id))
const missingFromSchedule = [...allIds].filter(id => !scheduleSet.has(id))
const missingFromPool = [...scheduleSet].filter(id => !allIds.has(id))

if (missingFromSchedule.length > 0) {
    console.warn(`Warning: ${missingFromSchedule.length} puzzle IDs not in schedule: ${missingFromSchedule.join(', ')}`)
}
if (missingFromPool.length > 0) {
    console.error(`Error: schedule references ${missingFromPool.length} IDs not in pool: ${missingFromPool.join(', ')}`)
    process.exit(1)
}

// Write updated files
writeFileSync(puzzlesPath, JSON.stringify(allPuzzles, null, 2) + '\n')
console.log(`Wrote ${puzzlesPath}`)

writeFileSync(schedulePath, JSON.stringify(newSchedule, null, 2) + '\n')
console.log(`Wrote ${schedulePath}`)

// Run build script
console.log('\nRunning build script...')
execSync('node scripts/build-satles.mjs', { cwd: projectRoot, stdio: 'inherit' })
