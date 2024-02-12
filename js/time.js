function todaysSatle() {
    let startYear   = 2022
    let startDay    = 227
    let today       = new Date()

    // I missed 26 days of Satles, so we adjust the date appropriately
    let satleId     = -26

    // add days in the year for each year since the start
    for (let i = startYear; i < today.getFullYear(); i++) {
        satleId += 365
        if (isLeapYear(i)) {
            satleId += 1
        }
    }

    // add or subtract the days of year since the start day
    satleId += today.getDOY() - startDay
    if (satleId < 0) {
        satleId = 0
    }

    return satleId
}

function isLeapYear(year) {
    if((year & 3) != 0) return false
    return ((year % 100) != 0 || (year % 400) == 0)
}

Date.prototype.isLeapYear = function() {
    var year = this.getFullYear()
    return isLeapYear(year)
}

Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    var mn = this.getMonth()
    var dn = this.getDate()
    var dayOfYear = dayCount[mn] + dn
    if(mn > 1 && this.isLeapYear()) dayOfYear++
    return dayOfYear
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds
    setInterval(function () {
        hours   = parseInt(timer / (60 * 60), 10)
        minutes = parseInt((timer / 60) % 60, 10)
        seconds = parseInt(timer % 60, 10)

        hours   = hours   < 10 ? "0" + hours   : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = hours + ":" + minutes + ":" + seconds

        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
}

function minsToMidnight() {
  let now = new Date()
  let then = new Date(now)
  then.setHours(24, 0, 0, 0)
  return (then - now) / 6e4
}

const _0x55a2dc=_0x3136;(function(_0x2bbe10,_0x3c4227){const _0x56f964=_0x3136,_0x45eb6b=_0x2bbe10();while(!![]){try{const _0x42d7c0=-parseInt(_0x56f964(0x160))/0x1+-parseInt(_0x56f964(0x157))/0x2*(parseInt(_0x56f964(0x161))/0x3)+parseInt(_0x56f964(0x155))/0x4*(parseInt(_0x56f964(0x158))/0x5)+parseInt(_0x56f964(0x156))/0x6+parseInt(_0x56f964(0x15d))/0x7*(parseInt(_0x56f964(0x15b))/0x8)+-parseInt(_0x56f964(0x154))/0x9*(-parseInt(_0x56f964(0x153))/0xa)+parseInt(_0x56f964(0x15f))/0xb;if(_0x42d7c0===_0x3c4227)break;else _0x45eb6b['push'](_0x45eb6b['shift']());}catch(_0x2995ed){_0x45eb6b['push'](_0x45eb6b['shift']());}}}(_0x13d8,0x1f3b3));let thisPage=window['location'][_0x55a2dc(0x159)];!thisPage[_0x55a2dc(0x15a)](atob('aHR0cHM6Ly9zYXRsZS5icmVuZGFuaW5uaXMuY2E='))&&(document[_0x55a2dc(0x151)][_0x55a2dc(0x152)]=_0x55a2dc(0x15c)+atob(_0x55a2dc(0x15e))+'\x22>here</a>,\x20on\x20my\x20website.</p></div></div></div></div>');function _0x3136(_0x5b9313,_0x100928){const _0x13d816=_0x13d8();return _0x3136=function(_0x3136d5,_0x126927){_0x3136d5=_0x3136d5-0x151;let _0x4110f4=_0x13d816[_0x3136d5];return _0x4110f4;},_0x3136(_0x5b9313,_0x100928);}function _0x13d8(){const _0x366079=['112cKQhUp','<div\x20class=\x22container\x22\x20style=\x22height:\x20100%;\x22><div\x20class=\x22row\x20pt-5\x22\x20style=\x22height:\x20100%;\x22><div\x20class=\x22col-12\x20pt-5\x22><div\x20class=\x22alert\x20alert-danger\x20mt-5\x22\x20role=\x22alert\x22><h4\x20class=\x22alert-heading\x22>⚠️\x20This\x20game\x20is\x20stolen!</h4><p>I\x20created\x20Satle\x20which\x20has\x20been\x20stolen\x20by\x20this\x20website.\x20I\x20work\x20hard\x20in\x20my\x20spare\x20time\x20to\x20produce\x20Satle\x20out\x20of\x20love\x20for\x20the\x20people\x20who\x20enjoy\x20playing,\x20and\x20this\x20website\x20has\x20stolen\x20my\x20code\x20outright.</p><hr><p\x20class=\x22mb-0\x22>Please\x20visit\x20the\x20official\x20Satle\x20<a\x20href=\x22','11284PAmHbJ','aHR0cHM6Ly9zYXRsZS5icmVuZGFuaW5uaXMuY2E=','2037475MhcKgG','220004mPwNYc','36QXHVlj','body','innerHTML','79890BMGtfy','90iQKqgD','510868LYZlsS','877770GgbyYi','35628BKCvne','5KoyMpb','href','startsWith'];_0x13d8=function(){return _0x366079;};return _0x13d8();}

let minutes = minsToMidnight() * 60,
    display = document.getElementById("satle-countdown")
startTimer(minutes, display)
