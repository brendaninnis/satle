var correct = "Victoria"
var guesses = 6;
var zoom = 18;
var map;


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

    function submit(guess) {
        console.log("Guessed " + guess);
        guesses -= 1;
        var guessSpan = $("<span class=\"guess\">" + guess + "</span>");
        var guessesDiv = $("#guesses");
        var duration = 0
        if (guesses < 5) {
            duration = 300
        }
        guessesDiv.animate({
            'left': guessSpan.getHiddenWidth() + 'px'
        }, duration, "swing", function() {
            console.log("slide complete");
            guessesDiv.css({'left': '0px'});
            guessesDiv.prepend(guessSpan);
            // Allow time for the span to be appended with animation
            setTimeout(function() {
                if (guess == correct) {
                    guessSpan.toggleClass("right");
                } else {
                    guessSpan.toggleClass("wrong")
                    setTimeout(function() {
                        zoomOutMap();
                    }, 300);
                }
            }, 300);
        });
    }

    $("#guessForm").submit(function(event) {
        event.preventDefault();
        submit($("#guessBox").val());
        $("#guessBox").val(null);
    });
});

function initMap() {
    const city = { lat: 48.4195002, lng: -123.3701672 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: city,
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
