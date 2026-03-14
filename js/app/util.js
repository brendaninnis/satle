
import { decompressFromUTF16 } from 'lz-string'

/**
 * Shuffle an array
 */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }

    return array
}

async function populateSatles() {
    try {
        const response = await fetch("satles-encoded.lz")
        if (!response.ok) {
            throw new Error(`Failed to fetch satles data: ${response.status}`)
        }
        const text = await response.text()
        localStorage.setItem('satles-encoded', text)
        return decompressSatles(text)
    } catch (error) {
        let text = localStorage.getItem('satles-encoded')
        if (!text) {
            throw new Error('Failed to load satles data')
        }
        return decompressSatles(text)
    }
}

function decompressSatles(text) {
    const decompressed = decompressFromUTF16(text)
    if (!decompressed) {
        throw new Error('Failed to decompress satles data')
    }
    return JSON.parse(decompressed)
}

async function populateSatlesV2() {
    try {
        const response = await fetch("satles-v2.lz")
        if (!response.ok) {
            throw new Error(`Failed to fetch v2 satles data: ${response.status}`)
        }
        const text = await response.text()
        localStorage.setItem('satles-v2-encoded', text)
        return decompressSatlesV2(text)
    } catch (error) {
        let text = localStorage.getItem('satles-v2-encoded')
        if (!text) {
            throw new Error('Failed to load v2 satles data')
        }
        return decompressSatlesV2(text)
    }
}

function decompressSatlesV2(text) {
    const decompressed = decompressFromUTF16(text)
    if (!decompressed) {
        throw new Error('Failed to decompress v2 satles data')
    }
    const data = JSON.parse(decompressed)
    const puzzlesById = {}
    for (const puzzle of data.puzzles) {
        puzzlesById[puzzle.id] = puzzle
    }
    return {
        puzzles: data.puzzles,
        schedule: data.schedule,
        puzzlesById: puzzlesById
    }
}

function getTextWidth(text) {
    let el = document.createElement("span")
    el.textContent = text
    document.body.append(el)
    let width = el.offsetWidth
    el.remove()
    return width
}

function getChildIndex(node) {
    return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
}

function formatCityCountry(satle) {
    return satle.city + ", " + satle.country
}

export { shuffle, populateSatles, populateSatlesV2, getTextWidth, getChildIndex, formatCityCountry }

