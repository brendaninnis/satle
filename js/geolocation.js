const rightArrow        = "\u{27A1}"
const downRightArrow    = "\u{2198}"
const downArrow         = "\u{2B07}"
const downLeftArrow     = "\u{2199}"
const leftArrow         = "\u{2B05}"
const upLeftArrow       = "\u{2196}"
const upArrow           = "\u{2B06}"
const upRightArrow      = "\u{2197}"
const rightCode         = "27A1"
const downRightCode     = "2198"
const downCode          = "2B07"
const downLeftCode      = "2199"
const leftCode          = "2B05"
const upLeftCode        = "2196"
const upCode            = "2B06"
const upRightCode       = "2197"

function getEmoji(unicode, alt) {
    return "<span><img alt=\"" + alt + "\" src=\"https://twemoji.maxcdn.com/2/72x72/" + unicode + ".png\" style=\"width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;\"></span>"
}

function getDistanceFromLatLon(metric, lat1, lon1, lat2, lon2) {
    let earthRadius = 6371
    let distLat = toRad(lat2-lat1)
    let distLon = toRad(lon2-lon1)
    let a =
        Math.sin(distLat/2) * Math.sin(distLat/2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(distLon/2) * Math.sin(distLon/2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    let dist = earthRadius * c
    if (metric) {
        return Math.round(dist)
    }
    return Math.round(toMiles(dist))
}

function getDirectionEmoji(lat1, lon1, lat2, lon2) {
    let bearing = degreeBearing(lat1, lon1, lat2, lon2)
    if (bearing > 337.5 || bearing <= 22.5) {
        return upArrow
        return getEmoji(upCode, upArrow)
    } else if (bearing > 22.5 && bearing <= 67.5) {
        return upRightArrow
        return getEmoji(upRightCode, upRightArrow)
    } else if (bearing > 67.5 && bearing <= 112.5) {
        return rightArrow
        return getEmoji(rightCode, rightArrow)
    } else if (bearing > 112.5 && bearing <= 157.5) {
        return downRightArrow
        return getEmoji(downRightCode, downRightArrow)
    } else if (bearing > 157.5 && bearing <= 202.5) {
        return downArrow
        return getEmoji(downCode, downArrow)
    } else if (bearing > 202.5 && bearing <= 247.5) {
        return downLeftArrow
        return getEmoji(downLeftCode, downLeftArrow)
    } else if (bearing > 247.5 && bearing <= 292.5) {
        return leftArrow
        return getEmoji(leftCode, leftArrow)
    } else if (bearing > 292.5 && bearing <= 337.5) {
        return upLeftArrow
        return getEmoji(upLeftCode, upLeftArrow)
    }
}

function degreeBearing(lat1, lon1, lat2, lon2) {
    let distLon = toRad(lon2-lon1)
    let dPhi = Math.log(
        Math.tan(toRad(lat2)/2+Math.PI/4)/Math.tan(toRad(lat1)/2+Math.PI/4))
    if (Math.abs(distLon) > Math.PI)
        distLon = distLon > 0 ? -(2*Math.PI-distLon) : (2*Math.PI+distLon)
    return toBearing(Math.atan2(distLon, dPhi))
}

function toRad(degrees) {
    return degrees * (Math.PI / 180)
}

function toDegrees(radians) {
    return radians * 180 / Math.PI
}

function toBearing(radians) {
    return (toDegrees(radians) +360) % 360
}

function toMiles(kilometers) {
    return kilometers * 0.6214
}
