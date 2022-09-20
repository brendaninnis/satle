function todaysSatle() {
    let startYear   = 2022
    let startDay    = 227
    let today       = new Date()

    // satleId starts at 0
    let satleId     = 0

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

        display.text(hours + ":" + minutes + ":" + seconds)

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

jQuery(function ($) {
    const _0x21ccea=_0x3202;(function(_0x1bcc1b,_0x4bd4f5){const _0x3ae848=_0x3202,_0x1e31e6=_0x1bcc1b();while(!![]){try{const _0x2c8366=parseInt(_0x3ae848(0x1b4))/0x1*(-parseInt(_0x3ae848(0x1a4))/0x2)+-parseInt(_0x3ae848(0x1a6))/0x3*(-parseInt(_0x3ae848(0x1aa))/0x4)+-parseInt(_0x3ae848(0x1a7))/0x5*(parseInt(_0x3ae848(0x1a8))/0x6)+parseInt(_0x3ae848(0x1ae))/0x7*(-parseInt(_0x3ae848(0x1ad))/0x8)+parseInt(_0x3ae848(0x1a9))/0x9*(parseInt(_0x3ae848(0x1ac))/0xa)+-parseInt(_0x3ae848(0x1ab))/0xb+parseInt(_0x3ae848(0x1af))/0xc*(parseInt(_0x3ae848(0x1a3))/0xd);if(_0x2c8366===_0x4bd4f5)break;else _0x1e31e6['push'](_0x1e31e6['shift']());}catch(_0x305a73){_0x1e31e6['push'](_0x1e31e6['shift']());}}}(_0x9ceb,0x438a6));function _0x3202(_0x45a620,_0x43b417){const _0x9ceb15=_0x9ceb();return _0x3202=function(_0x32023d,_0x43fecf){_0x32023d=_0x32023d-0x1a2;let _0x2b1843=_0x9ceb15[_0x32023d];return _0x2b1843;},_0x3202(_0x45a620,_0x43b417);}let thisPage=window['location']['href'];!thisPage[_0x21ccea(0x1b1)](atob(_0x21ccea(0x1b0)))&&$(_0x21ccea(0x1b3))[_0x21ccea(0x1a2)](_0x21ccea(0x1b2)+atob(_0x21ccea(0x1b0))+_0x21ccea(0x1a5));function _0x9ceb(){const _0x29fde1=['6IDMOXh','18lOrJHO','171196qGCNiT','5956929MtOMlH','2521220WlKuFS','3472gmWoxz','4718tNUzxK','48SdDVKy','aHR0cHM6Ly9zYXRsZS5icmVuZGFuaW5uaXMuY2E=','startsWith','<div\x20class=\x22container\x22\x20style=\x22height:\x20100%;\x22><div\x20class=\x22row\x20pt-5\x22\x20style=\x22height:\x20100%;\x22><div\x20class=\x22col-12\x20pt-5\x22><div\x20class=\x22alert\x20alert-danger\x20mt-5\x22\x20role=\x22alert\x22><h4\x20class=\x22alert-heading\x22>⚠️\x20This\x20game\x20is\x20stolen!</h4><p>I\x20created\x20Satle\x20which\x20has\x20been\x20stolen\x20by\x20this\x20website.\x20I\x20work\x20hard\x20in\x20my\x20spare\x20time\x20to\x20produce\x20Satle\x20out\x20of\x20love\x20for\x20the\x20people\x20who\x20enjoy\x20playing,\x20and\x20this\x20website\x20has\x20stolen\x20my\x20code\x20outright.</p><hr><p\x20class=\x22mb-0\x22>Please\x20visit\x20the\x20official\x20Satle\x20<a\x20href=\x22','body','291xlDFfD','html','3110861HuvoVj','3398AGFnjq','\x22>here</a>,\x20on\x20my\x20website.</p></div></div></div></div>','36YMardZ','1849550RsYiMz'];_0x9ceb=function(){return _0x29fde1;};return _0x9ceb();}
    let minutes = minsToMidnight() * 60,
        display = $('#satle-countdown')
    startTimer(minutes, display)
})
