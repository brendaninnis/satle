#!/usr/bin/env node

/**
 * Rebuild the schedule for a new deploy date WITHOUT modifying the puzzle pool.
 *
 * Use this when you've already added puzzles to data/puzzles.json but need to
 * set (or change) when the new puzzles start appearing.
 *
 * You must provide --new-puzzles to tell the script which puzzle IDs should
 * appear first (shuffled), followed by remaining old puzzles (shuffled).
 * Past schedule entries (before the deploy date) are always preserved.
 *
 * Usage:
 *   node scripts/rebuild-schedule.mjs --new-puzzles <file.json> [--deploy-date YYYY-MM-DD]
 *
 * Options:
 *   --deploy-date   (optional) The date the update will go live. Defaults to today.
 *   --new-puzzles   (required) Path to JSON file containing new puzzle entries.
 *                   Only the "id" field is read from each entry.
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
let deployDate = null
let newPuzzlesFile = null

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--deploy-date' && i + 1 < args.length) {
        deployDate = args[++i]
    } else if (args[i] === '--new-puzzles' && i + 1 < args.length) {
        newPuzzlesFile = args[++i]
    }
}

if (!newPuzzlesFile) {
    console.error('Usage: node scripts/rebuild-schedule.mjs --new-puzzles <file.json> [--deploy-date YYYY-MM-DD]')
    console.error('')
    console.error('Rebuilds the schedule so that puzzles from <file.json> start on the deploy date,')
    console.error('followed by remaining old puzzles. Past schedule entries are preserved.')
    console.error('If --deploy-date is omitted, defaults to today.')
    process.exit(1)
}

if (!deployDate) {
    const today = new Date()
    deployDate = today.getFullYear() + '-' +
        String(today.getMonth() + 1).padStart(2, '0') + '-' +
        String(today.getDate()).padStart(2, '0')
    console.log(`No --deploy-date specified, using today: ${deployDate}`)
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

// Calculate days since start date (Aug 1, 2025)
function daysSinceStart(dateStr) {
    const startDate = new Date(2025, 7, 1) // Aug 1, 2025
    const target = new Date(dateStr + 'T00:00:00')
    target.setHours(0, 0, 0, 0)
    const msPerDay = 24 * 60 * 60 * 1000
    return Math.max(0, Math.floor((target - startDate) / msPerDay))
}

// Read data
const puzzles = JSON.parse(readFileSync(puzzlesPath, 'utf-8'))
const currentSchedule = JSON.parse(readFileSync(schedulePath, 'utf-8'))
const newPuzzles = JSON.parse(readFileSync(newPuzzlesFile, 'utf-8'))

const allIds = new Set(puzzles.map(p => p.id))
const newIds = new Set(newPuzzles.map(p => p.id))
const dayIndex = daysSinceStart(deployDate)

console.log(`Total puzzles in pool: ${puzzles.length}`)
console.log(`Current schedule length: ${currentSchedule.length}`)
console.log(`New puzzles to prioritize: ${newIds.size}`)
console.log(`Deploy date: ${deployDate} (day index: ${dayIndex})`)

// Validate new puzzle IDs exist in pool
for (const id of newIds) {
    if (!allIds.has(id)) {
        console.error(`Error: new puzzle ID ${id} not found in data/puzzles.json. Run add-puzzles.mjs first.`)
        process.exit(1)
    }
}

// The game uses schedule[dayIndex % schedule.length], so when the schedule
// has wrapped we need to use the effective position, not the raw dayIndex.
const effectiveIndex = currentSchedule.length > 0
    ? dayIndex % currentSchedule.length
    : 0

if (dayIndex !== effectiveIndex) {
    console.log(`Schedule has wrapped (day ${dayIndex} % ${currentSchedule.length} = position ${effectiveIndex})`)
}

// Preserve schedule entries for days already played (0 to effectiveIndex-1)
const preservedSchedule = currentSchedule.slice(0, effectiveIndex)
const preservedIds = new Set(preservedSchedule)
console.log(`Preserving ${preservedSchedule.length} past schedule entries`)

// New puzzle IDs that aren't in the preserved portion (not yet played)
const newUnplayed = [...newIds].filter(id => !preservedIds.has(id))

// Old puzzle IDs: everything in the pool that isn't new and isn't in preserved portion
const oldUnplayed = puzzles
    .map(p => p.id)
    .filter(id => !newIds.has(id) && !preservedIds.has(id))

const shuffledNew = shuffle(newUnplayed)
const shuffledOld = shuffle(oldUnplayed)

console.log(`New puzzles (shuffled, after preserved): ${shuffledNew.length}`)
console.log(`Old unplayed puzzles (shuffled): ${shuffledOld.length}`)

// Build new schedule: preserved + new shuffled + old remaining shuffled
const newSchedule = [...preservedSchedule, ...shuffledNew, ...shuffledOld]

// Validate every puzzle appears exactly once
const scheduleSet = new Set(newSchedule)
const missing = [...allIds].filter(id => !scheduleSet.has(id))
if (missing.length > 0) {
    console.warn(`Warning: ${missing.length} puzzle IDs not in schedule: ${missing.join(', ')}`)
}
if (newSchedule.length !== allIds.size) {
    console.warn(`Warning: schedule length (${newSchedule.length}) != puzzle count (${allIds.size})`)
}

console.log(`New schedule length: ${newSchedule.length}`)
console.log(`New puzzles start at position: ${preservedSchedule.length}`)

// Write updated schedule
writeFileSync(schedulePath, JSON.stringify(newSchedule, null, 2) + '\n')
console.log(`Wrote ${schedulePath}`)

// Rebuild .lz files
console.log('\nRunning build script...')
execSync('node scripts/build-satles.mjs', { cwd: projectRoot, stdio: 'inherit' })

// Schedule preview
const puzzlesById = Object.fromEntries(puzzles.map(p => [p.id, p]))
const startDate = new Date(2025, 7, 1) // Aug 1, 2025
const newEnd = effectiveIndex + shuffledNew.length - 1
const oldEnd = newEnd + shuffledOld.length
const newMonths = (shuffledNew.length / 30).toFixed(1)
const oldMonths = (shuffledOld.length / 30).toFixed(1)

function dateForDay(idx) {
    const d = new Date(startDate)
    d.setDate(d.getDate() + idx)
    return d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0')
}

console.log('\n--- New Puzzles Schedule ---')
for (let i = 0; i < shuffledNew.length; i++) {
    const idx = dayIndex + i
    const id = newSchedule[idx % newSchedule.length]
    const p = puzzlesById[id]
    const date = dateForDay(idx)
    console.log(`  Day ${idx} (${date}) → ID ${id} ${p.city}, ${p.country} — ${p.name}`)
}

console.log(`\n--- Schedule Summary ---`)
console.log(`  Preserved (past):  positions 0–${effectiveIndex - 1}`)
console.log(`  New puzzles:       positions ${effectiveIndex}–${newEnd} (${shuffledNew.length} puzzles, ~${newMonths} months)`)
console.log(`  Old puzzles:       positions ${newEnd + 1}–${oldEnd} (${shuffledOld.length} puzzles, ~${oldMonths} months)`)
console.log(`  Total:             ${newSchedule.length} puzzles, wraps after ~${(newSchedule.length / 30).toFixed(1)} months`)
