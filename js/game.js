/**
 * CONSTS AND VARS
 */
const satellite = "\u{1F6F0}";
const greenBox  = "\u{1F7E9}";
const blackBox  = "\u{2B1B}";
const redBox    = "\u{1F7E5}";
const whiteBox  = "\u{2B1C}";

const skipStr       = "Skip";
const maxGuesses    = 6;
const animDuration  = 300;

const satles    = populateSatles();
const answer    = satles[todaysSatle() % satles.length];
const id        = answer.id;
const loc       = answer.loc;

const storage = new Storage(id);

/**
 * GOOGLE MAP
 */

const map = new GameMap(storage);

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

    function guessIsCorrect(guess) {
        return guess.toLowerCase().trim() == answer.city.toLowerCase().trim();
    }

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
            let distributionDiv = $("<div class=\"row align-items-center\"><div class=\"col-1\"><p class=\"my-auto\">" + guessNumber + "</p></div><div class=\"col-11\"><div class=\"p-1 " + guessNumberClass + "guess-distribution\" style=\"min-width: " + widthString + ";\"><span style=\"margin-right: 8px; float: right;\">" + value + "</span></div></div></div>");
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
            if (answer.citystorage.guesses.length > 1) {
                winText += "es"
            }
            winText += "!"
            $("#gameEndText").text(winText)
        } else {
            $("#gameEndTitle").text("Incorrect!")
            $("#gameEndText").text("Try again tomorrow.")
        }

        let endMap = $("<iframe width=\"100%\" height=\"100%\" style=\"border:0;\" loading=\"lazy\" allowfullscreen referrerpolicy=\"no-referrer-when-downgrade\" src=\"https://www.google.com/maps/embed/v1/view?center=" + answer.loc.lat + "," + answer.loc.lng + "&zoom=5&maptype=satellite&key=AIzaSyBsAJ8zq3tIH-ALCwimBjWxb5rrQETrwJ8\"></iframe>")
        $("#gameEndMap").html(endMap);

        $("#gameEndModal").modal("show");
    }

    function updateGameOverState(win) {
        $("#submitBtn").prop("disabled", true);
        storage.isGameOver = true;
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
        let candidate = findCandidateAnswer(guess);
        if (guess !== skipStr) {
            if (!candidate) {
                if ($("#guessWarning").hasClass("show")) {
                    if ($("#guessWarning").hasClass("big")) {
                        return false;
                    }
                    $("#guessWarning").addClass("big");
                    setTimeout(function() {
                        $("#guessWarning").removeClass("big");
                    }, 500);
                    return false;
                }
                $("#guessWarning").addClass("show");
                setTimeout(function() {
                    $("#guessWarning").removeClass("show");
                }, 3000);
                return false;
            }
        }
        storage.addGuess(guess);
        let guessSpan = createGuessSpan();
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
                let win = guessIsCorrect(guess);
                let ended = win || storage.guesses.length >= maxGuesses;
                setupGuessSpan(guessSpan, guess, candidate);
                setTimeout(function() {
                    if (ended) {
                        gameOver(win);
                    } else {
                        map.zoomOutMap();
                    }
                }, animDuration);
            }, animDuration);
        });

        return true;
    }

    function findCandidateAnswer(guess) {
        return satles.find(el => el.city.toLowerCase().trim() === guess.toLowerCase().trim());
    }

    function createGuessSpan() {
        return $("<span class=\"guess\"></span>");
    }

    function setupGuessSpan(guessSpan, guess, candidate) {
        if (guessIsCorrect(guess)) {
            guessSpan.html(guess);
            guessSpan.toggleClass("right");
            guessSpan.attr("data-bs-toggle", "modal");
            guessSpan.attr("data-bs-target", "#gameEndModal");
        } else if (guess !== skipStr) {
            guessSpan.html(guess + " " + getDirectionEmoji(candidate.loc.lat, candidate.loc.lng, answer.loc.lat, answer.loc.lng) + " " + getDistanceFromLatLonInKm(candidate.loc.lat, candidate.loc.lng, answer.loc.lat, answer.loc.lng) + "km");
            guessSpan.toggleClass("wrong");
            twemoji.parse(document.body);
        } else {
            guessSpan.html(guess);
        }
    }

    // Autocomplete guesses
    $(document).on("click", ".autocomplete-option", function() {
        $("#autocompleteList").empty();
        $("#guessBox").val($(this).text());
    });

    $("#guessBox").on("input", function() {
        $("#autocompleteList").empty();

        let guess = $("#guessBox").val().toLowerCase();
        if (guess == "" || storage.isGameOver) {
            return;
        }

        let suggestions = Array();
        let shuffled = shuffle(satles.slice());

        // Suggestions are shuffled. Text appearing at the beginning comes first
        for (let i = 0; i < shuffled.length; i++) {
            if (satles[i].city.toLowerCase().startsWith(guess)) {
                suggestions.unshift(satles[i].city);
            } else if (satles[i].city.toLowerCase().includes(guess)) {
                suggestions.push(satles[i].city);
            }
        }

        // Limit to 5 suggestions
        for (let i = 0; i < suggestions.length && i < 5; i++) {
            let suggestion = suggestions[i];

            // Wrap emphasis around the first occurance of the guess
            let firstIndex = 0,
                lastIndex = 0,
                checkIndex = 0;
            for (let j = 0; j < suggestion.length; j++) {
                let charAt = suggestion.toLowerCase().charAt(j);
                if (charAt == guess.charAt(checkIndex)) {
                    if (checkIndex == 0) {
                        firstIndex = j;
                    }
                    checkIndex += 1;
                    if (checkIndex == guess.length) {
                        lastIndex = j + 1;
                        break;
                    }
                } else {
                    checkIndex = 0;
                }
            }
            let suggestionText = suggestion.slice(0, firstIndex) + "<strong>" + suggestion.slice(firstIndex, lastIndex) + "</strong>" + suggestion.slice(lastIndex);

            // Add the suggestion to the autocomplete list
            $("#autocompleteList").prepend("<li class=\"list-group-item autocomplete-option text-light\">" + suggestionText + "</li>");
        }
    });

    try {
        if (window.top !== window.self) window.top.location.replace(window.self.location.href);
    } catch(error) {
        console.log(error);
        if (window.top !== window.self) {
            $("body").html("<div class=\"container\" style=\"height: 100%;\"><div class=\"row pt-5\" style=\"height: 100%;\"><div class=\"col-12 pt-5\"><div class=\"alert alert-danger mt-5\" role=\"alert\"><h4 class=\"alert-heading\">⚠️ This game is stolen!</h4><p>I created Satle which has been stolen by this website. I work hard in my spare time to produce Satle out of love for the people who enjoy playing, and this website has stolen my code outright.</p><hr><p class=\"mb-0\">Please visit the official Satle <a href=\"" + atob("aHR0cHM6Ly9zYXRsZS5icmVuZGFuaW5uaXMuY2Ev") + "\">here</a>, on my website.</p></div></div></div></div>")
        }
    }

    // Submitting the guess form submits the guess and clears the form
    $("#guessForm").submit(function(event) {
        event.preventDefault();
        $("#autocompleteList").empty();
        if (submit($("#guessBox").val())) {
            $("#guessBox").val(null);
        }
    });

    // Share button
    $("#shareButton").click(function() {
        let shareText = satellite + "Satle #" + id + " " + storage.guesses.length + "/6\n";
        for (let i = 0; i < maxGuesses; i++) {
            if (i < storage.guesses.length) {
                if (guessIsCorrect(storage.guesses[i])) {
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
        shareText += "\nhttps://satle.brendaninnis.ca"
        copyTextToClipboard(shareText);
    });

    $("#gameEndAnswer").text("Answer: " + answer.city);

    // Previous guesses show previous zoom levels
    $(document).on("click", ".guess", function() {
        let index = storage.guesses.length - $(this).index() - 1;
        map.setZoomToIndex(index);
    });

    // Focusing the guess box shows the current zoom level
    $("#guessBox").focus(function() {
        map.resetZoom();
    });

    // Email feedback button
    function buildFeedbackBody() {
        return "%0A%0A---%0AGame Details:%0A" + JSON.stringify(localStorage) + "%0A%0ADevice Details:%0A" + window.navigator.userAgent;
    }

    $("#emailButton").click(function() {
        window.open('mailto:brendaninnis@icloud.com?subject=Satle%20Feedback&body=' + buildFeedbackBody());
    });

    // Initialize game state
    if (storage.isGameOver) {
        $("#submitBtn").prop("disabled", true);
    }

    populateStatistics();

    for (const index in storage.guesses) {
        let guess = storage.guesses[index];
        let candidate = findCandidateAnswer(guess);
        let guessSpan = createGuessSpan();
        let guessesDiv = $("#guesses");
        guessesDiv.prepend(guessSpan);
        setupGuessSpan(guessSpan, guess, candidate);
        if (guessIsCorrect(guess)) {
            showGameOverModal(true);
            updateGameOverState(true);
        }
    }

    // Show instructions if the player has not seen them
    if (!localStorage.instructionsShown) {
        $("#helpModal").modal("show");
    }
    localStorage.instructionsShown = true;

    twemoji.parse(document.body);
});
