#!/usr/bin/env node

/**
 * Check script: Downloads live .lz files from satle.ca, decompresses both
 * live and local versions, and diffs the puzzle data.
 *
 * Usage: node scripts/check-satles.mjs
 */

import { readFileSync } from 'fs'
import LZString from 'lz-string'
const { decompressFromUTF16 } = LZString
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

const v2LocalPath = join(projectRoot, 'public', 'satles-v2.lz')

async function fetchText(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
    return res.text()
}

async function main() {
    console.log('Fetching live satles-v2.lz from satle.ca...')
    const liveCompressed = await fetchText('https://satle.ca/satles-v2.lz')
    const liveData = JSON.parse(decompressFromUTF16(liveCompressed))

    console.log('Reading local satles-v2.lz...')
    const localCompressed = readFileSync(v2LocalPath, 'utf-8')
    const localData = JSON.parse(decompressFromUTF16(localCompressed))

    // Compare schedules
    const scheduleMatch = JSON.stringify(liveData.schedule) === JSON.stringify(localData.schedule)
    console.log(`\nSchedule: ${scheduleMatch ? '✓ identical' : '✗ DIFFERENT'}`)

    if (!scheduleMatch) {
        console.log(`  Live: ${liveData.schedule.length} entries`)
        console.log(`  Local: ${localData.schedule.length} entries`)
    }

    // Build lookup maps
    const livePuzzles = Object.fromEntries(liveData.puzzles.map(p => [p.id, p]))
    const localPuzzles = Object.fromEntries(localData.puzzles.map(p => [p.id, p]))

    const liveIds = new Set(Object.keys(livePuzzles))
    const localIds = new Set(Object.keys(localPuzzles))

    // Find added/removed puzzles
    const added = [...localIds].filter(id => !liveIds.has(id))
    const removed = [...liveIds].filter(id => !localIds.has(id))

    if (added.length > 0) {
        console.log(`\nAdded puzzles (${added.length}):`)
        for (const id of added) {
            const p = localPuzzles[id]
            console.log(`  + [${id}] ${p.city}, ${p.country} — ${p.name}`)
        }
    }

    if (removed.length > 0) {
        console.log(`\nRemoved puzzles (${removed.length}):`)
        for (const id of removed) {
            const p = livePuzzles[id]
            console.log(`  - [${id}] ${p.city}, ${p.country} — ${p.name}`)
        }
    }

    // Find modified puzzles
    const modified = []
    for (const id of liveIds) {
        if (!localIds.has(id)) continue
        const live = livePuzzles[id]
        const local = localPuzzles[id]
        if (JSON.stringify(live) !== JSON.stringify(local)) {
            const changes = []
            for (const key of new Set([...Object.keys(live), ...Object.keys(local)])) {
                if (JSON.stringify(live[key]) !== JSON.stringify(local[key])) {
                    changes.push(`${key}: "${live[key]}" → "${local[key]}"`)
                }
            }
            modified.push({ id, live, local, changes })
        }
    }

    if (modified.length > 0) {
        console.log(`\nModified puzzles (${modified.length}):`)
        for (const { id, live, changes } of modified) {
            console.log(`  ~ [${id}] ${live.city}, ${live.country} — ${live.name}`)
            for (const change of changes) {
                console.log(`      ${change}`)
            }
        }
    }

    if (added.length === 0 && removed.length === 0 && modified.length === 0 && scheduleMatch) {
        console.log('\nNo differences found — local matches live.')
    }

    console.log('')
}

main().catch(err => {
    console.error(err.message)
    process.exit(1)
})
