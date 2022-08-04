/*
 * CONSTS AND VARS
 */
const satellite = "\u{1F6F0}";
const greenBox  = "\u{1F7E9}";
const blackBox  = "\u{2B1B}";
const redBox    = "\u{1F7E5}";
const whiteBox  = "\u{2B1C}";

const id = 1
const correct = "Victoria"
const loc = { lat: 48.4195002, lng: -123.3701672 };

var isGameOver = false;
var guesses = Array();
var zoom = 18;
var map;
const skipStr = "Skip"

/*
 * BOOTSTRAP
 */

// Initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/*
 * GOOGLE MAPS
 */
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

/*
 * CLIPBOARD
 */
function fallbackCopyTextToClipboard(text) {
  let textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    let successful = document.execCommand('copy');
    let msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

/*
 * GAME LOGIC
 */
$(document).ready(function() {
    $.fn.getHiddenWidth = function () {
        // save a reference to a cloned element that can be measured
        let $hiddenElement = $(this).clone().appendTo('body');
        // calculate the width of the clone
        let width = $hiddenElement.width();
        // remove the clone from the DOM
        $hiddenElement.remove();
        return width;
    };

    function gameOver(win) {
        if (win) {
            $("#gameEndTitle").text("Correct!")
            let winText = "You got it in " + guesses.length + " guess";
            if (guesses.length > 1) {
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

        isGameOver = true;
    }

    function submit(guess) {
        // If guess contains only whitespace then skip
        if (!guess.replace(/\s/g, '').length) {
            guess = skipStr;
        }
        guesses.push(guess);
        let guessSpan = $("<span class=\"guess\">" + guess + "</span>");
        let guessesDiv = $("#guesses");
        let duration = 0
        if (guesses.length > 1) {
            duration = 300
        }
        let dist = (guessSpan.getHiddenWidth() + 20) * 0.5
        guessesDiv.animate({
            'left': dist + 'px'
        }, duration, "swing", function() {
            guessesDiv.css({'left': '0px'});
            guessesDiv.prepend(guessSpan);
            // Allow time for the span to be appended with animation
            setTimeout(function() {
                if (guess == "Skip") {
                    setTimeout(function() {
                        if (guesses.length > 5) {
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
                        if (guesses.length > 5) {
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

    // Share button
    $("#shareButton").click(function() {
        let shareText = satellite + "Satle #" + id + " " + guesses.length + "/6\n";
        for (let i = 0; i < 6; i++) {
            if (i < guesses.length) {
                if (guesses[i] == correct) {
                    shareText += greenBox;
                } else if (guesses[i] == skipStr) {
                    shareText += blackBox;
                } else {
                    shareText += redBox;
                }
            } else {
                shareText += whiteBox;
            }
        }
        shareText += "\nsatle.brendaninnis.ca"
        copyTextToClipboard(shareText);
    });

    // Previous guesses show previous zoom levels
    $(document).on("click", ".guess", function() {
        offset = 1;
        if (isGameOver) {
            offset = 0;
        }
        map.setZoom(zoom + 2 * ($(this).index() + offset));
    });

    // Focusing the guess box shows the current zoom level
    $("#guessBox").focus(function() {
        map.setZoom(zoom);
    });
});
