#!/usr/bin/env node

/**
 * Build script: Reads data/puzzles.json and data/schedule.json,
 * generates both satles-v2.lz (new format) and satles-encoded.lz (backwards compat).
 *
 * Usage: node scripts/build-satles.mjs
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from 'fs'
import LZString from 'lz-string'
const { compressToUTF16 } = LZString
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

const puzzlesPath = join(projectRoot, 'data', 'puzzles.json')
const schedulePath = join(projectRoot, 'data', 'schedule.json')
const v2OutputPath = join(projectRoot, 'public', 'satles-v2.lz')
const v1OutputPath = join(projectRoot, 'public', 'satles-encoded.lz')
const composePath = join(projectRoot, '..', 'SatleCompose', 'composeApp', 'src', 'commonMain', 'composeResources', 'files')

// Read source data
const puzzles = JSON.parse(readFileSync(puzzlesPath, 'utf-8'))
const schedule = JSON.parse(readFileSync(schedulePath, 'utf-8'))

// Build lookup dictionary for validation
const puzzlesById = {}
for (const puzzle of puzzles) {
    if (puzzlesById[puzzle.id]) {
        console.error(`Duplicate puzzle ID: ${puzzle.id}`)
        process.exit(1)
    }
    puzzlesById[puzzle.id] = puzzle
}

// Validate schedule
const missingIds = schedule.filter(id => !puzzlesById[id])
if (missingIds.length > 0) {
    console.error(`Schedule references missing puzzle IDs: ${missingIds.join(', ')}`)
    process.exit(1)
}

// Check that all puzzles are in the schedule
const scheduleSet = new Set(schedule)
const unscheduled = puzzles.filter(p => !scheduleSet.has(p.id))
if (unscheduled.length > 0) {
    console.warn(`Warning: ${unscheduled.length} puzzles not in schedule: ${unscheduled.map(p => p.id).join(', ')}`)
}

console.log(`Building from ${puzzles.length} puzzles, ${schedule.length} schedule entries`)

// Generate satles-v2.lz (new format)
const v2Data = { puzzles, schedule }
const v2Json = JSON.stringify(v2Data)
const v2Compressed = compressToUTF16(v2Json)
writeFileSync(v2OutputPath, v2Compressed)
console.log(`Wrote ${v2OutputPath} (${v2Compressed.length} chars)`)

// Generate satles-encoded.lz (backwards compat: puzzles in schedule order)
const orderedPuzzles = schedule.map(id => puzzlesById[id])
const v1Json = JSON.stringify(orderedPuzzles)
const v1Compressed = compressToUTF16(v1Json)
writeFileSync(v1OutputPath, v1Compressed)
console.log(`Wrote ${v1OutputPath} (${v1Compressed.length} chars)`)

// Copy to SatleCompose if the directory exists
if (existsSync(composePath)) {
    copyFileSync(v2OutputPath, join(composePath, 'satles-v2.lz'))
    copyFileSync(v1OutputPath, join(composePath, 'satles-encoded.lz'))
    console.log(`Copied .lz files to ${composePath}`)
} else {
    console.log(`SatleCompose path not found, skipping copy: ${composePath}`)
}

console.log('Build complete!')
