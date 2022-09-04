function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = toRad(lat2-lat1);  // deg2rad below
    let dLon = toRad(lon2-lon1);
    let a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c; // Distance in km
    return d;
}

function getDirectionEmoji(lat1, lon1, lat2, lon2) {
    let bearing = degreeBearing(lat1, lon1, lat2, lon2);
    if (bearing > 337.5 || bearing <= 22.5) {
        return '⬆️';
    } else if (bearing > 22.5 && bearing <= 67.5) {
        return '↗️';
    } else if (bearing > 67.5 && bearing <= 112.5) {
        return '➡️';
    } else if (bearing > 112.5 && bearing <= 157.5) {
        return '↘️';
    } else if (bearing > 157.5 && bearing <= 202.5) {
        return '⬇️';
    } else if (bearing > 202.5 && bearing <= 247.5) {
        return '↙️';
    } else if (bearing > 247.5 && bearing <= 292.5) {
        return '⬅️';
    } else if (beraing > 292.5 && bearing <= 337.5) {
        return '↖️';
    }
}

function degreeBearing(lat1, lon1, lat2, lon2) {
    let dLon = toRad(lon2-lon1);
    let dPhi = Math.Log(
        Math.Tan(toRad(lat2)/2+Math.PI/4)/Math.Tan(toRad(lat1)/2+Math.PI/4));
    if (Math.Abs(dLon) > Math.PI)
        dLon = dLon > 0 ? -(2*Math.PI-dLon) : (2*Math.PI+dLon);
    return toBearing(Math.Atan2(dLon, dPhi));
}

function toRad(double degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(double radians) {
    return radians * 180 / Math.PI;
}

function toBearing(double radians) {
    return (toDegrees(radians) +360) % 360;
}

