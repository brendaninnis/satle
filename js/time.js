function todaysSatle() {
    let startYear   = 2022;
    let startDay    = 224;
    let today       = new Date();

    // satleId starts at 0
    let satleId     = 0;

    // add days in the year for each year since the start
    for (let i = startYear; i < today.getFullYear(); i++) {
        satleId += 365;
        if (isLeapYear(i)) {
            satleId += 1;
        }
    }

    // add or subtract the days of year since the start day
    satleId += today.getDOY() - startDay;

    return satleId;
}

function isLeapYear(year) {
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
}

Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    return isLeapYear(year);
};

Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        hours   = parseInt(timer / (60 * 60), 10)
        minutes = parseInt((timer / 60) % 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours   = hours   < 10 ? "0" + hours   : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(hours + ":" + minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function minsToMidnight() {
  let now = new Date();
  let then = new Date(now);
  then.setHours(24, 0, 0, 0);
  return (then - now) / 6e4;
}

jQuery(function ($) {
    let minutes = minsToMidnight() * 60,
        display = $('#satle-countdown');
    startTimer(minutes, display);
});
