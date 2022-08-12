// TODO: Remove this
// Populate some statistics in localStorage
localStorage.guessDistributions = JSON.stringify([1, 3, 5, 5, 4, 1]);
localStorage.gamesPlayed = 24;
localStorage.winPercent = 0.8;
localStorage.currentStreak = 8;
localStorage.longestStreak = 11;

/*
 * CONSTS AND VARS
 */
const satellite = "\u{1F6F0}";
const greenBox  = "\u{1F7E9}";
const blackBox  = "\u{2B1B}";
const redBox    = "\u{1F7E5}";
const whiteBox  = "\u{2B1C}";

const skipStr       = "Skip";
const zoomDefault   = 18;
const zoomFactor    = 2;
const maxGuesses    = 6;
const animDuration  = 300;

const answers = [
    {
        id: 1,
        city: "Victoria",
        loc: { lat: 48.4195002, lng: -123.3701672 }
    },
    {
        id: 2,
        city: "London",
        loc: { lat: 51.5008283, lng: -0.1429443 }
    },
    {
        id: 3,
        city: "Mecca",
        loc: { lat: 21.422474, lng: 39.826096 }
    }
]

const answer = answers[0];
const id = answer.id;
const correct = answer.city;
const loc = answer.loc;

if (localStorage.guesses) {
    var guesses = JSON.parse(localStorage.guesses);
} else {
    var guesses = Array();
}

var zoom = zoomDefault - (guesses.length * zoomFactor);
if (zoom < 8) {
    zoom = 8;
}
var map;

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
    zoom -= zoomFactor;
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
        localStorage.guesses = JSON.stringify(guesses);
        let guessSpan = $("<span class=\"guess\">" + guess + "</span>");
        let guessesDiv = $("#guesses");
        let duration = 0;
        if (guesses.length > 1) {
            duration = animDuration;
        }
        let dist = (guessSpan.getHiddenWidth() + 20) * 0.5;
        guessesDiv.animate({
            'left': dist + 'px'
        }, duration, "swing", function() {
            guessesDiv.css({'left': '0px'});
            guessesDiv.prepend(guessSpan);
            // Allow time for the span to be appended with animation
            setTimeout(function() {
                if (guess == skipStr) {
                    setTimeout(function() {
                        if (guesses.length >= maxGuesses) {
                            gameOver(false);
                        } else {
                            zoomOutMap();
                        }
                    }, animDuration);
                } else if (guess.toLowerCase() == correct.toLowerCase()) {
                    guessSpan.toggleClass("right");
                    guessSpan.attr("data-bs-toggle", "modal");
                    guessSpan.attr("data-bs-target", "#gameEndModal");
                    setTimeout(function() {
                        gameOver(true);
                    }, animDuration);
                } else {
                    guessSpan.toggleClass("wrong")
                    setTimeout(function() {
                        if (guesses.length >= maxGuesses) {
                            gameOver(false);
                        } else {
                            zoomOutMap();
                        }
                    }, animDuration);
                }
            }, animDuration);
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
        for (let i = 0; i < maxGuesses; i++) {
            if (i < guesses.length) {
                if (guesses[i].toLowerCase() == correct.toLowerCase()) {
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
        map.setZoom(zoom + zoomFactor * ($(this).index() + offset));
    });

    // Focusing the guess box shows the current zoom level
    $("#guessBox").focus(function() {
        map.setZoom(zoom);
    });

    // Initialize game state
    var isGameOver = guesses.length >= maxGuesses;

    for (const index in guesses) {
        let guess = guesses[index];
        let guessSpan = $("<span class=\"guess\">" + guess + "</span>");
        let guessesDiv = $("#guesses");
        guessesDiv.prepend(guessSpan);
        if (guess.toLowerCase() == correct.toLowerCase()) {
            guessSpan.toggleClass("right");
            guessSpan.attr("data-bs-toggle", "modal");
            guessSpan.attr("data-bs-target", "#gameEndModal");
            gameOver(true);
        } else if (guess != skipStr) {
            guessSpan.toggleClass("wrong");
        }
    }

    if (isGameOver) {
        $("#submitBtn").prop("disabled", true);
    }

    // Show instructions if the player has not seen them
    if (!localStorage.instructionsShown) {
        $("#helpModal").modal("show");
    }
    localStorage.instructionsShown = true;

    // Populate statistics
    $("#playedValue").text(localStorage.gamesPlayed);
    $("#winPercentValue").text(parseInt(localStorage.winPercent * 100));
    $("#currentStreakValue").text(localStorage.currentStreak);
    $("#longestStreakValue").text(localStorage.longestStreak);
    let guessDistributions = JSON.parse(localStorage.guessDistributions);
    let largestDistribution = 1;
    for (const index in guessDistributions) {
        let value = guessDistributions[index];
        if (value > largestDistribution) {
            largestDistribution = value;
        }
    }
    for (const index in guessDistributions) {
        let guessNumber = parseInt(index) + 1;
        let value = guessDistributions[index];
        let widthString = "auto";
        if (value > 0) {
            widthString = parseInt((value / largestDistribution) * 100) + "%";
        }
        let distributionDiv = $("<div class=\"row align-items-center\"><div class=\"col-1\"><p class=\"my-auto\">" + guessNumber + "</p></div><div class=\"col-11\"><div class=\"p-1 guess-distribution\" style=\"width: " + widthString + ";\"><span style=\"margin-right: 8px; float: right;\">" + value + "</span></div></div></div>");
        $("#distributions").append(distributionDiv);
    }
});
