#!/usr/bin/env node

/**
 * Print upcoming puzzles from the schedule.
 *
 * Usage:
 *   node scripts/print-schedule.mjs [--start-date YYYY-MM-DD] [--num-days N]
 *
 * Options:
 *   --start-date   Date to start from (default: today)
 *   --num-days     Number of days to print (default: 7)
 */

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

const puzzles = JSON.parse(readFileSync(join(projectRoot, 'data', 'puzzles.json'), 'utf-8'))
const schedule = JSON.parse(readFileSync(join(projectRoot, 'data', 'schedule.json'), 'utf-8'))

const puzzlesById = Object.fromEntries(puzzles.map(p => [p.id, p]))

// Same epoch as time.js: Aug 1, 2025 (day-of-year 213)
const startYear = 2025
const startDoy = 213

function isLeapYear(year) {
  if ((year & 3) !== 0) return false
  return (year % 100) !== 0 || (year % 400) === 0
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365
}

function dayOfYear(date) {
  const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  const mn = date.getMonth()
  const dn = date.getDate()
  let doy = dayCount[mn] + dn
  if (mn > 1 && isLeapYear(date.getFullYear())) doy++
  return doy
}

function dayIndex(date) {
  let idx = 0
  for (let y = startYear; y < date.getFullYear(); y++) {
    idx += daysInYear(y)
  }
  idx += dayOfYear(date) - startDoy
  return Math.max(idx, 0)
}

// Parse args
const args = process.argv.slice(2)
let startDate = new Date()
let numDays = 7

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--start-date' && args[i + 1]) {
    const parts = args[i + 1].split('-').map(Number)
    startDate = new Date(parts[0], parts[1] - 1, parts[2])
    i++
  } else if (args[i] === '--num-days' && args[i + 1]) {
    numDays = parseInt(args[i + 1], 10)
    i++
  }
}

const startIdx = dayIndex(startDate)

console.log(`Schedule (${numDays} days starting ${startDate.toISOString().slice(0, 10)}, day index ${startIdx}):\n`)
console.log('Day'.padEnd(6) + 'Date'.padEnd(13) + 'ID'.padEnd(6) + 'City, Country'.padEnd(30) + 'Location')
console.log('-'.repeat(90))

for (let i = 0; i < numDays; i++) {
  const idx = startIdx + i
  const schedIdx = idx % schedule.length
  const puzzleId = schedule[schedIdx]
  const puzzle = puzzlesById[puzzleId]

  const date = new Date(startDate)
  date.setDate(date.getDate() + i)
  const dateStr = date.toISOString().slice(0, 10)

  const city = puzzle ? `${puzzle.city}, ${puzzle.country}` : '(unknown)'
  const name = puzzle?.name || ''
  console.log(`${String(idx).padEnd(6)}${dateStr.padEnd(13)}${String(puzzleId).padEnd(6)}${city.padEnd(30)}${name}`)
}
