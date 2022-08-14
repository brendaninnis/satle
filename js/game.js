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
    },
    {
        id: 4,
        city: "Tokyo",
        loc: { lat: 35.6851291, lng: 139.7526762 }
    },
    {
        id: 5,
        city: "New York",
        loc: { lat: 40.749168, lng: -73.9674781 }
    },
    {
        id: 6,
        city: "Sydney",
        loc: { lat: -33.8568712, lng: 151.2151015 }
    },
    {
        id: 7,
        city: "Rome",
        loc: { lat: 41.8975992, lng: 12.498294 }
    },
    {
        id: 8,
        city: "San Francisco",
        loc: { lat: 37.8021099, lng: -122.4188881 }
    },
    {
        id: 9,
        city: "Athens",
        loc: { lat: 37.9714351, lng: 23.7265401 }
    },
    {
        id: 10,
        city: "Rio De Janeiro",
        loc: { lat: -22.9524228, lng: -43.2106339 }
    },
    {
        id: 11,
        city: "Moscow",
        loc: { lat: 55.7538862, lng: 37.6198876 }
    },
    {
        id: 12,
        city: "Istanbul",
        loc: { lat: 41.0052433, lng: 28.9767462 }
    },
    {
        id: 13,
        city: "Barcelona",
        loc: { lat: 41.4036868, lng: 2.1741376 }
    },
    {
        id: 14,
        city: "Berlin",
        loc: { lat: 52.5162652, lng: 13.3776097 }
    },
    {
        id: 15,
        city: "Paris",
        loc: { lat: 48.8737125, lng: 2.2948805 }
    },
    {
        id: 16,
        city: "Dubai",
        loc: { lat: 25.1973375, lng: 55.2741268 }
    },
    {
        id: 17,
        city: "Brussels",
        loc: { lat: 50.8449911, lng: 4.3498734 }
    },
    {
        id: 18,
        city: "Beijing",
        loc: { lat: 39.916978, lng: 116.390402 }
    },
    {
        id: 19,
        city: "Milan",
        loc: { lat: 45.4642458, lng: 9.1913347 }
    },
    {
        id: 20,
        city: "Mexico City",
        loc: { lat: 19.4270037, lng: -99.1679614 }
    },
    {
        id: 21,
        city: "Cairo",
        loc: { lat: 30.0289085, lng: 31.2598523 }
    },
    {
        id: 22,
        city: "New Dehli",
        loc: { lat: 28.612883, lng: 77.2293827 }
    },
    {
        id: 23,
        city: "Bangkok",
        loc: { lat: 13.7517322, lng: 100.4923808 }
    },
    {
        id: 24,
        city: "Seoul",
        loc: { lat: 37.5795472, lng: 126.9771171 }
    },
    {
        id: 25,
        city: "Santiago",
        loc: { lat: -33.4402425, lng: -70.6435504 }
    },
    {
        id: 26,
        city: "Madrid",
        loc: { lat: 40.4135854, lng: -3.682132 }
    },
    {
        id: 27,
        city: "Toronto",
        loc: { lat: 43.6435798, lng: -79.3866698 }
    },
    {
        id: 28,
        city: "Johannesburg",
        loc: { lat: -26.237723, lng: 28.0080722 }
    },
    {
        id: 29,
        city: "Montreal",
        loc: { lat: 45.5037421, lng: -73.5875173 }
    },
    {
        id: 30,
        city: "Los Angeles",
        loc: { lat: 34.0085908, lng: -118.4980924 }
    },
    {
        id: 31,
        city: "Lisbon",
        loc: { lat: 38.6916358, lng: -9.2160065 }
    },
    {
        id: 32,
        city: "Taipei",
        loc: { lat: 25.034884, lng: 121.521449 }
    },
    {
        id: 33,
        city: "Vancouver",
        loc: { lat: 49.2887724, lng: -123.1113258 }
    },
    {
        id: 34,
        city: "Tunis",
        loc: { lat: 36.7970974, lng: 10.1712205 }
    },
    {
        id: 35,
        city: "Houston",
        loc: { lat: 29.5520598, lng: -95.0973736 }
    },
    {
        id: 36,
        city: "Vienna",
        loc: { lat: 48.1848747, lng: 16.3119157 }
    },
    {
        id: 37,
        city: "Panama City",
        loc: { lat: 8.9688307, lng: -79.5311185 }
    },
    {
        id: 38,
        city: "Amsterdam",
        loc: { lat: 52.3598832, lng: 4.884893 }
    },
    {
        id: 39,
        city: "Hong Kong",
        loc: { lat: 22.3064972, lng: 114.1699276 }
    },
    {
        id: 40,
        city: "Florence",
        loc: { lat: 43.7746045, lng: 11.2492361 }
    },
    {
        id: 41,
        city: "Venice",
        loc: { lat: 45.4380731, lng: 12.3358132 }
    },
    {
        id: 42,
        city: "Buenos Aires",
        loc: { lat: -34.6037938, lng: -58.3816318 }
    },
    {
        id: 43,
        city: "Prague",
        loc: { lat: 50.0870387, lng: 14.4206185 }
    },
    {
        id: 44,
        city: "Hanoi",
        loc: { lat: 21.0292039, lng: 105.8360361 }
    },
    {
        id: 45,
        city: "Cape Town",
        loc: { lat: -33.9258507, lng: 18.427272 }
    },
    {
        id: 46,
        city: "Chicago",
        loc: { lat: 41.8827293, lng: -87.6233749 }
    },
    {
        id: 47,
        city: "Jerusalem",
        loc: { lat: 31.7780172, lng: 35.235057 }
    },
    {
        id: 48,
        city: "Budapest",
        loc: { lat: 47.5149298, lng: 19.0775822 }
    },
    {
        id: 49,
        city: "Mumbai",
        loc: { lat: 18.9398517, lng: 72.835139 }
    },
    {
        id: 50,
        city: "Edinburgh",
        loc: { lat: 55.9485692, lng: -3.1999916 }
    },
    {
        id: 51,
        city: "Dublin",
        loc: { lat: 53.3431639, lng: -6.2678759 }
    },
    {
        id: 52,
        city: "Las Vegas",
        loc: { lat: 36.1129152, lng: -115.1746864 }
    },
    {
        id: 53,
        city: "Munich",
        loc: { lat: 48.1372508, lng: 11.5753827 }
    },
    {
        id: 54,
        city: "Melbourne",
        loc: { lat: -37.8304775, lng: 144.9730735 }
    },
    {
        id: 55,
        city: "Macau",
        loc: { lat: 22.1483682, lng: 113.5608671 }
    },
    {
        id: 56,
        city: "Singapore",
        loc: { lat: 1.2863122, lng: 103.8591852 }
    },
    {
        id: 57,
        city: "Kuala Lumpur",
        loc: { lat: 3.1583815, lng: 101.7117803 }
    },
    {
        id: 58,
        city: "Ho Chi Minh City",
        loc: { lat: 10.7770439, lng: 106.6950997 }
    },
    {
        id: 59,
        city: "Jakarta",
        loc: { lat: -6.1753943, lng: 106.8269649 }
    },
    {
        id: 60,
        city: "Copenhagen",
        loc: { lat: 55.6814027, lng: 12.5757404 }
    },
    {
        id: 61,
        city: "Warsaw",
        loc: { lat: 52.1651584, lng: 21.0904356 }
    },
    {
        id: 62,
        city: "Marrakesh",
        loc: { lat: 31.6426313, lng: -8.0033109 }
    },
    {
        id: 63,
        city: "Cebu City",
        loc: { lat: 10.3343738, lng: 123.8877777 }
    },
    {
        id: 64,
        city: "Stockholm",
        loc: { lat: 59.3280334, lng: 18.0914484 }
    },
    {
        id: 65,
        city: "Lima",
        loc: { lat: -12.0459767, lng: -77.0306541 }
    },
    {
        id: 66,
        city: "Sao Paulo",
        loc: { lat: -23.5614749, lng: -46.6560088 }
    },
    {
        id: 67,
        city: "Zurich",
        loc: { lat: 47.3701342, lng: 8.5440613 }
    },
    {
        id: 68,
        city: "Boston",
        loc: { lat: 42.3602451, lng: -71.0549348 }
    },
    {
        id: 69,
        city: "Tehran",
        loc: { lat: 35.6997392, lng: 51.3379946 }
    },
    {
        id: 70,
        city: "Bogota",
        loc: { lat: 4.6025177, lng: -74.0630191 }
    },
    {
        id: 71,
        city: "Beirut",
        loc: { lat: 33.8953219, lng: 35.5058482 }
    },
    {
        id: 72,
        city: "Lagos",
        loc: { lat: 6.476326, lng: 3.3693564 }
    },
    {
        id: 73,
        city: "Montevideo",
        loc: { lat: -34.9065254, lng: -56.1998629 }
    },
    {
        id: 74,
        city: "Honolulu",
        loc: { lat: 21.281561, lng: -157.8379671 }
    },
    {
        id: 75,
        city: "Osaka",
        loc: { lat: 34.6526584, lng: 135.5062322 }
    }
]

const answer    = answers[todaysSatle() % answers.length];
const id        = answer.id;
const correct   = answer.city;
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
            zoom: 5,
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
        let shuffled = shuffle(answers);

        for (let i = 0; i < shuffled.length; i++) {
            if (answers[i].city.toLowerCase().startsWith(guess)) {
                suggestions.unshift(answers[i].city);
            } else if (answers[i].city.toLowerCase().includes(guess)) {
                suggestions.push(answers[i].city);
            }
        }

        for (let i = 0; i < suggestions.length && i < 5; i++) {
            $("#autocompleteList").prepend("<li class=\"list-group-item autocomplete-option text-light\">" + suggestions[i] + "</li>");
        }
    });

    // Submitting the guess form submits the guess and clears the form
    $("#guessForm").submit(function(event) {
        event.preventDefault();
        $("#autocompleteList").empty();
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
        let index = storage.guesses.length - $(this).index() - 1;
        console.log("zoom to index " + index);
        map.setZoomToIndex(index);
    });

    // Focusing the guess box shows the current zoom level
    $("#guessBox").focus(function() {
        map.resetZoom();
    });

    // Email feedback button
    function buildFeedbackBody() {
        return "%0A%0A---%0ADevice Details:%0A" + window.navigator.userAgent;
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
