const correct = "Victoria"
const loc = { lat: 48.4195002, lng: -123.3701672 };

var guesses = 0;
var zoom = 18;
var map;
const skipStr = "Skip"

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: loc,
        disableDefaultUI: true,
        gestureHandling: "none",
        keyboardShortcuts: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
}

function zoomOutMap() {
    zoom -= 2;
    map.setZoom(zoom);
}

window.initMap = initMap;

$(document).ready(function() {
    $.fn.getHiddenWidth = function () {
        // save a reference to a cloned element that can be measured
        var $hiddenElement = $(this).clone().appendTo('body');
        // calculate the width of the clone
        var width = $hiddenElement.width();
        // remove the clone from the DOM
        $hiddenElement.remove();
        return width;
    };

    function gameOver(win) {
        if (win) {
            $("#gameEndTitle").text("Correct!")
            var winText = "You got it in " + guesses + " guess";
            if (guesses > 1) {
                winText += "es"
            }
            winText += "!"
            $("#gameEndText").text(winText)
        } else {
            $("#gameEndTitle").text("Incorrect!")
            $("#gameEndText").text("Try again tomorrow.")
        }

        endMap = new google.maps.Map(document.getElementById("gameEndMap"), {
            zoom: 6,
            center: loc,
            disableDefaultUI: true,
        });

        const marker = new google.maps.Marker({
            position: loc,
            map: endMap,
        });

        $("#gameEndModal").modal("show");
        $("#submitBtn").prop("disabled", true);
    }

    function submit(guess) {
        // If guess contains only whitespace then skip
        if (!guess.replace(/\s/g, '').length) {
            guess = skipStr;
        }
        guesses += 1;
        var guessSpan = $("<span class=\"guess\">" + guess + "</span>");
        var guessesDiv = $("#guesses");
        var duration = 0
        if (guesses > 1) {
            duration = 300
        }
        var dist = (guessSpan.getHiddenWidth() + 20) * 0.5
        guessesDiv.animate({
            'left': dist + 'px'
        }, duration, "swing", function() {
            guessesDiv.css({'left': '0px'});
            guessesDiv.prepend(guessSpan);
            // Allow time for the span to be appended with animation
            setTimeout(function() {
                if (guess == "Skip") {
                    setTimeout(function() {
                        if (guesses > 5) {
                            gameOver(false);
                        } else {
                            zoomOutMap();
                        }
                    }, 300);
                } else if (guess.toLowerCase() == correct.toLowerCase()) {
                    guessSpan.toggleClass("right");
                    setTimeout(function() {
                        gameOver(true);
                    }, 300);
                } else {
                    guessSpan.toggleClass("wrong")
                    setTimeout(function() {
                        if (guesses > 5) {
                            gameOver(false);
                        } else {
                            zoomOutMap();
                        }
                    }, 300);
                }
            }, 300);
        });
    }

    // Submitting the guess form submits the guess and clears the form
    $("#guessForm").submit(function(event) {
        event.preventDefault();
        submit($("#guessBox").val());
        $("#guessBox").val(null);
    });

    // Previous guesses show previous zoom levels
    $(document).on("click", ".guess", function() {
        offset = 1;
        if (gameOver) {
            offset = 0;
        }
        map.setZoom(zoom + 2 * ($(this).index() + offset));
    });

    // Focusing the guess box shows the current zoom level
    $("#guessBox").focus(function() {
        map.setZoom(zoom);
    });
});
