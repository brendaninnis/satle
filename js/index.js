/**
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

const storage = new Storage(id);

/**
 * GOOGLE MAP
 */
let initialZoom = zoomDefault - (storage.guesses.length * zoomFactor);
if (initialZoom < 8) {
    initialZoom = 8;
}
const map = new GameMap(initialZoom, zoomFactor);

function initMap() {
    map.initMap();
}

window.initMap = initMap;

/**
 * BOOTSTRAP
 */

// Initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/**
 * GAME LOGIC
 */
$(document).ready(function() {

    function populateStatistics(correctGuessNumber) {
        $("#playedValue").text(storage.gamesPlayed);
        if (storage.gamesPlayed > 0) {
            $("#winPercentValue").text(parseInt((parseFloat(storage.gamesWon) / parseFloat(storage.gamesPlayed)) * 100));
        }
        $("#currentStreakValue").text(storage.currentStreak);
        $("#longestStreakValue").text(storage.longestStreak);
        let guessDistributions = storage.guessDistributions;
        let largestDistribution = 1;
        for (const index in guessDistributions) {
            let value = guessDistributions[index];
            if (value > largestDistribution) {
                largestDistribution = value;
            }
        }
        let distributionsDiv = $("#distributions");
        distributionsDiv.empty();
        for (const index in guessDistributions) {
            let guessNumber = parseInt(index) + 1;
            let value = guessDistributions[index];
            let widthString = "auto";
            if (value > 0) {
                widthString = parseInt((value / largestDistribution) * 100) + "%";
            }
            let guessNumberClass = "";
            if (guessNumber == correctGuessNumber) {
                guessNumberClass = "guess-number ";
            }
            let distributionDiv = $("<div class=\"row align-items-center\"><div class=\"col-1\"><p class=\"my-auto\">" + guessNumber + "</p></div><div class=\"col-11\"><div class=\"p-1 " + guessNumberClass + "guess-distribution\" style=\"width: " + widthString + ";\"><span style=\"margin-right: 8px; float: right;\">" + value + "</span></div></div></div>");
            distributionsDiv.append(distributionDiv);
        }
    }

    function gameOver(win) {
        storage.updateStatistics(win);
        showGameOverModal(win);
        updateGameOverState(win);
    }

    function showGameOverModal(win) {
        if (win) {
            $("#gameEndTitle").text("Correct!")
            let winText = "You got it in " + storage.guesses.length + " guess";
            if (storage.guesses.length > 1) {
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
    }

    function updateGameOverState(win) {
        $("#submitBtn").prop("disabled", true);
        isGameOver = true;
        if (win) {
            populateStatistics(storage.guesses.length);
        } else {
            populateStatistics();
        }
    }

    function submit(guess) {
        // If guess contains only whitespace then skip
        if (!guess.replace(/\s/g, '').length) {
            guess = skipStr;
        }
        storage.addGuess(guess);
        let guessSpan = $("<span class=\"guess\">" + guess + "</span>");
        let guessesDiv = $("#guesses");
        let duration = 0;
        if (storage.guesses.length > 1) {
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
                let win = guess.toLowerCase() == correct.toLowerCase();
                let ended = win || storage.guesses.length >= maxGuesses;
                if (win) {
                    guessSpan.toggleClass("right");
                    guessSpan.attr("data-bs-toggle", "modal");
                    guessSpan.attr("data-bs-target", "#gameEndModal");
                } else if (guess != skipStr) {
                    guessSpan.toggleClass("wrong")
                }

                setTimeout(function() {
                    if (ended) {
                        gameOver(win);
                    } else {
                        map.zoomOutMap();
                    }
                }, animDuration);
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
        let shareText = satellite + "Satle #" + id + " " + storage.guesses.length + "/6\n";
        for (let i = 0; i < maxGuesses; i++) {
            if (i < storage.guesses.length) {
                if (storage.guesses[i].toLowerCase() == correct.toLowerCase()) {
                    shareText += greenBox;
                } else if (storage.guesses[i] == skipStr) {
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
        map.setZoomToIndex($(this).index() + offset);
    });

    // Focusing the guess box shows the current zoom level
    $("#guessBox").focus(function() {
        map.resetZoom();
    });

    // Initialize game state
    var isGameOver = storage.guesses.length >= maxGuesses;
    if (isGameOver) {
        $("#submitBtn").prop("disabled", true);
    }

    populateStatistics();

    for (const index in storage.guesses) {
        let guess = storage.guesses[index];
        let guessSpan = $("<span class=\"guess\">" + guess + "</span>");
        let guessesDiv = $("#guesses");
        guessesDiv.prepend(guessSpan);
        if (guess.toLowerCase() == correct.toLowerCase()) {
            guessSpan.toggleClass("right");
            guessSpan.attr("data-bs-toggle", "modal");
            guessSpan.attr("data-bs-target", "#gameEndModal");
            showGameOverModal(true);
            updateGameOverState(true);
        } else if (guess != skipStr) {
            guessSpan.toggleClass("wrong");
        }
    }

    // Show instructions if the player has not seen them
    if (!localStorage.instructionsShown) {
        $("#helpModal").modal("show");
    }
    localStorage.instructionsShown = true;

});
