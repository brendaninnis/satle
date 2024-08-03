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

function startTimer(duration) {
    let timer = duration, minutes, seconds
    setInterval(function () {
        hours   = parseInt(timer / (60 * 60), 10)
        minutes = parseInt((timer / 60) % 60, 10)
        seconds = parseInt(timer % 60, 10)

        hours   = hours   < 10 ? "0" + hours   : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        document.querySelectorAll('.satle-countdown').forEach(function(display) {
            display.textContent = hours + ":" + minutes + ":" + seconds
        })

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

const _0x3c4977=_0x4730;function _0x1d79(){const _0x29b4d2=['href','6AAttUC','221095RblBko','<div\x20class=\x22container\x22\x20style=\x22height:\x20100%;\x22><div\x20class=\x22row\x20pt-5\x22\x20style=\x22height:\x20100%;\x22><div\x20class=\x22col-12\x20pt-5\x22><div\x20class=\x22alert\x20alert-danger\x20mt-5\x22\x20role=\x22alert\x22><h4\x20class=\x22alert-heading\x22>⚠️\x20This\x20game\x20is\x20stolen!</h4><p>I\x20created\x20Satle\x20which\x20has\x20been\x20stolen\x20by\x20this\x20website.\x20I\x20work\x20hard\x20in\x20my\x20spare\x20time\x20to\x20produce\x20Satle\x20out\x20of\x20love\x20for\x20the\x20people\x20who\x20enjoy\x20playing,\x20and\x20this\x20website\x20has\x20stolen\x20my\x20code\x20outright.</p><hr><p\x20class=\x22mb-0\x22>Please\x20visit\x20the\x20official\x20Satle\x20<a\x20href=\x22','3717615YHmjvC','aHR0cHM6Ly9zYXRsZS5jYS8=','innerHTML','1471326TiCvrb','6320TLiWLh','2ySLKxX','5019595PimlIX','location','body','3098832hxWkJw','startsWith','10uYxBxS','6318kWfMkE','60414NpbwpK','aHR0cHM6Ly9zYXRsZS5icmVuZGFuaW5uaXMuY2E=','40QGszXd'];_0x1d79=function(){return _0x29b4d2;};return _0x1d79();}(function(_0x3e7d4f,_0x5c94c6){const _0x5f228b=_0x4730,_0x447053=_0x3e7d4f();while(!![]){try{const _0x45b4e2=parseInt(_0x5f228b(0x144))/0x1*(parseInt(_0x5f228b(0x14c))/0x2)+parseInt(_0x5f228b(0x142))/0x3+-parseInt(_0x5f228b(0x14e))/0x4*(parseInt(_0x5f228b(0x151))/0x5)+-parseInt(_0x5f228b(0x150))/0x6*(parseInt(_0x5f228b(0x145))/0x7)+-parseInt(_0x5f228b(0x143))/0x8*(-parseInt(_0x5f228b(0x14b))/0x9)+parseInt(_0x5f228b(0x14a))/0xa*(parseInt(_0x5f228b(0x153))/0xb)+parseInt(_0x5f228b(0x148))/0xc;if(_0x45b4e2===_0x5c94c6)break;else _0x447053['push'](_0x447053['shift']());}catch(_0x30fade){_0x447053['push'](_0x447053['shift']());}}}(_0x1d79,0x8469a));function _0x4730(_0x2881bd,_0x1d1c4d){const _0x1d7924=_0x1d79();return _0x4730=function(_0x47302b,_0x397209){_0x47302b=_0x47302b-0x141;let _0x33e2dc=_0x1d7924[_0x47302b];return _0x33e2dc;},_0x4730(_0x2881bd,_0x1d1c4d);}let thisPage=window[_0x3c4977(0x146)][_0x3c4977(0x14f)];!thisPage[_0x3c4977(0x149)](atob(_0x3c4977(0x14d)))&&!thisPage[_0x3c4977(0x149)](atob('aHR0cHM6Ly9zYXRsZS5jYS8='))&&(document[_0x3c4977(0x147)][_0x3c4977(0x141)]=_0x3c4977(0x152)+atob(_0x3c4977(0x154))+'\x22>here</a>,\x20on\x20my\x20website.</p></div></div></div></div>');

let minutes = minsToMidnight() * 60
startTimer(minutes)
