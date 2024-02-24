/**
 * CONSTS AND VARS
 */
const satellite = "\u{1F6F0}"
const greenBox  = "\u{1F7E9}"
const blackBox  = "\u{2B1B}"
const redBox    = "\u{1F7E5}"
const whiteBox  = "\u{2B1C}"

const skipStr       = "Skip"
const maxGuesses    = 6
const animDuration  = 300

const queryParamKeys = [
    "currentStreak",
    "gamesWon",
    "longestStreak",
    "showDistance",
    "guesses",
    "isGameOver",
    "guessDistributions",
    "metricDistance",
    "currentSatleId",
    "gamesPlayed"
]
const queryParams = new URLSearchParams(window.location.search)

/**
 * BOOTSTRAP
 */
// Initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

let helpModal = new bootstrap.Modal(document.getElementById("helpModal"), {})
let update1Modal = new bootstrap.Modal(document.getElementById("update1Modal"), {})
let gameEndModal = new bootstrap.Modal(document.getElementById("gameEndModal"), {})

/**
 * PRE-GAME CHECKS
 */

// Check for redirect
const satleUrl = "https://satle.ca"

if (window.location.hostname !== satleUrl) {
    // Get stored player data
    function formatLocalStorageAsQueryParams() {
        let queryParams = queryParamKeys.reduce((acc, key) => {
            let value = localStorage.getItem(key)
            if (value !== null) {
                let encodedKey = encodeURIComponent(key)
                let encodedValue = encodeURIComponent(value)
                acc.push(`${encodedKey}=${encodedValue}`)
            }
            return acc
        }, [])

        return queryParams.join('&')
    }

    // Include player data in the query parameters
    let fullUrl = satleUrl + "?" + formatLocalStorageAsQueryParams()

    try {
        // Perform the redirect
        window.location.replace(fullUrl)
    } catch {
        document.body.textContent = "<div class=\"container\" style=\"height: 100%;\"><div class=\"row pt-5\" style=\"height: 100%;\"><div class=\"col-12 pt-5\"><div class=\"alert alert-primary mt-5\" role=\"alert\"><h4 class=\"alert-heading\">⚠️  Satle has moved.</h4><p>To visit the new home of Satle <a href=\"" + fullUrl + "\">click here</a>.</p></div></div></div></div>"
        // Fallback if unable to redirect
        throw new Error("Failed to redirect")
    }
} else if (queryParams.size !== 0 && !localStorage.storagePorted) { 
    // hostname is https://satle.ca

    // Port storage
    queryParamKeys.forEach(key => {
        if (queryParams.has(key)) {
            let value = decodeURIComponent(queryParams.get(key))
            localStorage.setItem(key, value)
        }
    })

    update1Modal.show()
    localStorage.storagePorted = true
    localStorage.instructionsShown = true
    localStorage.update2Shown = true
}

// Check for Satle stolen in iFrame
try {
    if (window.top !== window.self) window.top.location.replace(window.self.location.href)
} catch(error) {
    if (window.top !== window.self) {
        document.body.textContent = "<div class=\"container\" style=\"height: 100%;\"><div class=\"row pt-5\" style=\"height: 100%;\"><div class=\"col-12 pt-5\"><div class=\"alert alert-danger mt-5\" role=\"alert\"><h4 class=\"alert-heading\">⚠️ This game is stolen!</h4><p>I created Satle which has been stolen by this website. I work hard in my spare time to produce Satle out of love for the people who enjoy playing, and this website has stolen my code and hosting outright.</p><hr><p class=\"mb-0\">Please visit the official Satle <a href=\"" + atob("aHR0cHM6Ly9zYXRsZS5jYS8=") + "\">here</a>, on my website.</p></div></div></div></div>"
        throw new Error("Satle stolen in iframe")
    }
}

/**
 * POPULATE SATLES
 */

const satles    = populateSatles()
const answer    = satles[todaysSatle() % satles.length]
const id        = answer.id
const loc       = answer.loc

const storage = new Storage(id)

/**
 * GOOGLE MAP
 */
const map = new GameMap(storage)

function initMap() {
    map.initMap()
}

window.initMap = initMap

/**
 * SETTINGS
 */
let showDistSwitch = document.getElementById("show-distance-switch")
let distUnitSwitch = document.getElementById("distance-units-switch")
let distUnitValue  = document.getElementById("distance-units-value")
let emailButton    = document.getElementById("emailButton")
let settings = new Settings(storage, showDistSwitch, distUnitSwitch, distUnitValue, emailButton)

/**
 * GAME LOGIC
 */
let guessBox = document.getElementById("guessBox")

function guessIsCorrect(guess) {
    return guess.toLowerCase().trim() == answer.city.toLowerCase().trim()
}

function populateStatistics(correctGuessNumber) {
    document.getElementById("playedValue").textContent = storage.gamesPlayed
    if (storage.gamesPlayed > 0) {
        document.getElementById("winPercentValue").textContent = parseInt((parseFloat(storage.gamesWon) / parseFloat(storage.gamesPlayed)) * 100)
    }
    document.getElementById("currentStreakValue").textContent = storage.currentStreak
    document.getElementById("longestStreakValue").textContent = storage.longestStreak
    let guessDistributions = storage.guessDistributions
    let largestDistribution = 1
    for (const index in guessDistributions) {
        let value = guessDistributions[index]
        if (value > largestDistribution) {
            largestDistribution = value
        }
    }
    let distributionsDiv = document.getElementById("distributions")
    distributionsDiv.textContent = ""
    for (const index in guessDistributions) {
        let guessNumber = parseInt(index) + 1
        let value = guessDistributions[index]
        let widthString = "auto"
        if (value > 0) {
            widthString = parseInt((value / largestDistribution) * 100) + "%"
        }

        // Create row for this distribution
        let distributionDiv = document.createElement("div")
        distributionDiv.classList.add("row")
        distributionDiv.classList.add("align-items-center")

        // Give the row a label
        let labelCol = document.createElement("div")
        labelCol.classList.add("col-1")
        let labelText = document.createElement("p")
        labelText.classList.add("my-auto")
        labelText.textContent = guessNumber
        labelCol.appendChild(labelText)
        distributionDiv.appendChild(labelCol)

        // Add the progress bar to the distribution
        let progressCol = document.createElement("div")
        progressCol.classList.add("col-11")
        let progressBar = document.createElement("div")
        progressBar.classList.add("p-1")
        progressBar.classList.add("guess-distribution")
        progressBar.style.minWidth = widthString
        if (guessNumber == correctGuessNumber) {
            progressBar.classList.add("guess-number")
        }
        let progressLabel = document.createElement("span")
        progressLabel.style.marginRight = "8px"
        progressLabel.style.cssFloat = "right"
        progressLabel.textContent = value
        progressBar.appendChild(progressLabel)
        progressCol.appendChild(progressBar)
        distributionDiv.appendChild(progressCol)

        // Add this distribution to the distributions div
        distributionsDiv.appendChild(distributionDiv)
    }
}

function gameOver(win) {
    storage.updateStatistics(win)
    showGameOverModal(win)
    updateGameOverState(win)
}

function showGameOverModal(win) {
    let gameEndTitle = document.getElementById("gameEndTitle")
    let gameEndText = document.getElementById("gameEndText")
    let gameEndMap = document.getElementById("gameEndMap")

    if (win) {
        gameEndTitle.textContent = "Correct!"
        let winText = "You got it in " + storage.guesses.length + " guess"
        if (storage.guesses.length > 1) {
            winText += "es"
        }
        winText += "!"
        gameEndText.textContent = winText
    } else {
        gameEndTitle.textContent = "Incorrect!"
        gameEndText.textContent = "Try again tomorrow."
    }

    let endMap = document.createElement("iframe")
    endMap.style.border = "0"
    endMap.setAttribute("width", "100%")
    endMap.setAttribute("height", "100%")
    endMap.setAttribute("allowfullscreen", "")
    endMap.setAttribute("loading", "lazy")
    endMap.setAttribute("referrerPolicy", "no-referrer-when-downgrade")
    endMap.setAttribute("src", "https://www.google.com/maps/embed/v1/view?center=" + answer.loc.lat + "," + answer.loc.lng + "&zoom=5&maptype=satellite&key=AIzaSyBsAJ8zq3tIH-ALCwimBjWxb5rrQETrwJ8")
    gameEndMap.textContent = ""
    gameEndMap.append(endMap)

    gameEndModal.show()
}

function updateGameOverState(win) {
    document.getElementById("submitBtn").setAttribute("disabled", true)
    storage.isGameOver = true
    if (win) {
        populateStatistics(storage.guesses.length)
    } else {
        populateStatistics()
    }
}

function submit(guess) {
    // If guess contains only whitespace then skip
    if (!guess.replace(/\s/g, '').length) {
        guess = skipStr
    }
    let candidate = findCandidateAnswer(guess)
    if (guess !== skipStr) {
        if (!candidate) {
            let guessWarning = document.getElementById("guessWarning")
            if (guessWarning.classList.contains("show")) {
                if (guessWarning.classList.contains("big")) {
                    return false
                }
                guessWarning.classList.add("big")
                setTimeout(function() {
                    guessWarning.classList.remove("big")
                }, 500)
                return false
            }
            guessWarning.classList.add("show")
            setTimeout(function() {
                guessWarning.classList.remove("show")
            }, 3000)
            return false
        }
    }
    storage.addGuess(guess)
    let guessSpan = createGuessSpan(guess, candidate)
    let guessesDiv = document.getElementById("guesses")
    let duration = 0
    if (storage.guesses.length > 1) {
        duration = animDuration
    }
    let dist = (getTextWidth(guessSpan.textContent) + 48) * 0.5

    let animateLeft = function(el, newValue, duration, completion) {
        if (duration < 1) {
            completion()
            return
        }
        let diff = newValue / (duration / 10)
        let left = 0
        let id
        function tick() {
            left += diff
            el.style.left = left + "px"
            if (left >= newValue) {
                clearInterval(id)
                completion()
            }
        }
        id = setInterval(tick, 10)
    }

    animateLeft(guessesDiv, dist, duration, function() {
        guessesDiv.style.left = "0px"
        guessesDiv.prepend(guessSpan)
        twemoji.parse(document.body)
        // Allow time for the span to be appended with animation
        setTimeout(function() {
            let win = guessIsCorrect(guess)
            let ended = win || storage.guesses.length >= maxGuesses
            setTimeout(function() {
                if (ended) {
                    gameOver(win)
                } else {
                    map.zoomOutMap()
                }
            }, animDuration)
        }, animDuration)
    })

    return true
}

function findCandidateAnswer(guess) {
    return satles.find(el => el.city.toLowerCase().trim() === guess.toLowerCase().trim())
}

function createGuessSpan(guess, candidate) {
    let guessSpan = document.createElement("span")
    guessSpan.classList.add("guess")
    guessSpan.textContent = guess
    if (guessIsCorrect(guess)) {
        guessSpan.classList.add("right")
        guessSpan.setAttribute("data-bs-toggle", "modal")
        guessSpan.setAttribute("data-bs-target", "#gameEndModal")
    } else if (guess !== skipStr) {
        let distanceUnit = storage.metricDistance ? "km" : "mi"
        guessSpan.classList.add("wrong")
        if (storage.showDistance) {
            guessSpan.textContent = getDistanceFromLatLon(storage.metricDistance, candidate.loc.lat, candidate.loc.lng, answer.loc.lat, answer.loc.lng) + " " + distanceUnit + " " + getDirectionEmoji(candidate.loc.lat, candidate.loc.lng, answer.loc.lat, answer.loc.lng) + " of " + guess
        }
    }

    guessSpan.addEventListener("click", (event) => {
        let index = storage.guesses.length - getChildIndex(event.target) - 1
        map.setZoomToIndex(index)
    })

    return guessSpan
}

// Autocomplete guesses
function addAutocompleteListeners() {
    let autocompleteEls = document.getElementsByClassName("autocomplete-option")

    let autocompleteClick = function() {
        document.getElementById("autocompleteList").textContent = ""
        guessBox.value = this.textContent
    }

    for (var i = 0; i < autocompleteEls.length; i++) {
        autocompleteEls[i].addEventListener('click', autocompleteClick, false)
    }
}

guessBox.addEventListener("input", (event) => {
    let autocompleteList = document.getElementById("autocompleteList")
    autocompleteList.textContent = ""

    let guess = guessBox.value.toLowerCase()
    if (guess == "" || storage.isGameOver) {
        return
    }

    let suggestions = Array()
    let shuffled = shuffle(satles.slice())

    // Suggestions are shuffled. Text appearing at the beginning comes first
    for (let i = 0; i < shuffled.length; i++) {
        if (shuffled[i].city.toLowerCase().startsWith(guess)) {
            suggestions.unshift(shuffled[i].city)
        } else if (shuffled[i].city.toLowerCase().includes(guess)) {
            suggestions.push(shuffled[i].city)
        }
    }

    suggestions = [...new Set(suggestions)]

    // Limit to 5 suggestions
    for (let i = 0; i < suggestions.length && i < 5; i++) {
        let suggestion = suggestions[i]

        // Wrap emphasis around the first occurance of the guess
        let firstIndex = 0,
            lastIndex = 0,
            checkIndex = 0
        for (let j = 0; j < suggestion.length; j++) {
            let charAt = suggestion.toLowerCase().charAt(j)
            if (charAt == guess.charAt(checkIndex)) {
                if (checkIndex == 0) {
                    firstIndex = j
                }
                checkIndex += 1
                if (checkIndex == guess.length) {
                    lastIndex = j + 1
                    break
                }
            } else {
                checkIndex = 0
            }
        }
        let suggestionText = suggestion.slice(0, firstIndex) + "<strong>" + suggestion.slice(firstIndex, lastIndex) + "</strong>" + suggestion.slice(lastIndex)

        // Add the suggestion to the autocomplete list
        let listItem = document.createElement("li")
        listItem.classList.add("list-group-item")
        listItem.classList.add("autocomplete-option")
        listItem.classList.add("text-light")
        listItem.append(suggestion.slice(0, firstIndex))
        let strongSpan = document.createElement("strong")
        strongSpan.textContent = suggestion.slice(firstIndex, lastIndex)
        listItem.append(strongSpan)
        listItem.append(suggestion.slice(lastIndex))
        //listItem.textContent = suggestionText
        autocompleteList.prepend(listItem)
    }

    addAutocompleteListeners()
})

// Submitting the guess form submits the guess and clears the form
document.getElementById("guessForm").addEventListener("submit", (event) => {
    event.preventDefault()
    document.getElementById("autocompleteList").textContent = ""
    if (submit(guessBox.value)) {
        guessBox.value = null
    }
})

// Share button
document.getElementById("shareButton").addEventListener("click", (event) => {
    let shareText = satellite + "Satle #" + id + " " + storage.guesses.length + "/6\n"
    for (let i = 0; i < maxGuesses; i++) {
        if (i < storage.guesses.length) {
            if (guessIsCorrect(storage.guesses[i])) {
                shareText += greenBox
            } else if (storage.guesses[i] == skipStr) {
                shareText += blackBox
            } else {
                shareText += redBox
            }
        } else {
            shareText += whiteBox
        }
    }
    shareText += "\nhttps://satle.ca"
    copyTextToClipboard(shareText)
})

document.getElementById("gameEndAnswer").textContent = "Answer: " + answer.city

// Focusing the guess box shows the current zoom level
guessBox.addEventListener("focus", (event) => {
    map.resetZoom()
})

let showGameOverOnLoad = true
function rebuildGuesses() {
    let guessesDiv = document.getElementById("guesses")
    guessesDiv.textContent = ""
    for (const index in storage.guesses) {
        let guess = storage.guesses[index]
        let candidate = findCandidateAnswer(guess)
        let guessSpan = createGuessSpan(guess, candidate)
        guessesDiv.prepend(guessSpan)
        if (guessIsCorrect(guess) && showGameOverOnLoad) {
            showGameOverModal(true)
            updateGameOverState(true)
            showGameOverOnLoad = false
        }
    }
    twemoji.parse(document.body)
}


// Initialize game state
if (storage.isGameOver) {
    document.getElementById("submitBtn").setAttribute("disabled", true)
}
populateStatistics()
rebuildGuesses()

// Show instructions if the player has not seen them
if (!localStorage.instructionsShown) {
    helpModal.show()
} else if (!localStorage.update2Shown) {
    update1Modal.show()
}
localStorage.instructionsShown = true
localStorage.update2Shown = true

settings.bindSettings(rebuildGuesses)

twemoji.parse(document.body)
