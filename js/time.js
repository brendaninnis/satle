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
    console.log("start timer minutes=" + minutes);
    startTimer(minutes, display);
});
