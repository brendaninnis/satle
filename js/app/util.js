
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

export { shuffle, populateSatles, getTextWidth, getChildIndex, formatCityCountry }

