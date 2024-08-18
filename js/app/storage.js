/**
 * @Class
 * Interface with localStorage
 */
class Storage {
    /**
     *
     * @param satleId The current day's Satle id
     */
    constructor(satleId) {
        if (localStorage.getItem("gamesPlayed") === null) {
            localStorage.gamesPlayed = 0
        }
        this.gamesPlayed = parseInt(localStorage.gamesPlayed)

        if (localStorage.getItem("gamesWon") === null) {
            localStorage.gamesWon = 0
        }
        this.gamesWon = parseInt(localStorage.gamesWon)

        if (localStorage.getItem("currentStreak") === null) {
            localStorage.currentStreak = 0
        }
        this.currentStreak = parseInt(localStorage.currentStreak)

        if (localStorage.getItem("longestStreak") === null) {
            localStorage.longestStreak = 0
        }
        this.longestStreak = parseInt(localStorage.longestStreak)

        if (localStorage.getItem("guessDistributions") === null) {
            localStorage.guessDistributions = JSON.stringify([0, 0, 0, 0, 0, 0])
        }
        this.guessDistributions = JSON.parse(localStorage.guessDistributions)

        if (localStorage.getItem("isGameOver") === null) {
            localStorage.isGameOver = JSON.stringify(true)
        }
        this.isGameOver = JSON.parse(localStorage.isGameOver)

        if (localStorage.getItem("currentSatleId") == satleId && localStorage.getItem("guesses") !== null) {
            this.guesses = JSON.parse(localStorage.guesses)
        } else {
            localStorage.currentSatleId = satleId
            this.isGameOver = false
            this.guesses = Array()
            localStorage.guesses = JSON.stringify(this.guesses)
            localStorage.isGameOver = JSON.stringify(this.isGameOver)
        }

        if (localStorage.getItem("showDistance") === null) {
            localStorage.showDistance = JSON.stringify(true)
        }
        this.showDistance = JSON.parse(localStorage.showDistance)

        if (localStorage.getItem("metricDistance") === null) {
            localStorage.metricDistance = JSON.stringify(true)
        }
        this.metricDistance = JSON.parse(localStorage.metricDistance)
    }

    /**
     *
     * @param win True if the game was won and false otherwise.
     */
    updateStatistics(win) {
        // Update values
        this.isGameOver = true
        this.gamesPlayed += 1
        if (win) {
            this.gamesWon += 1
            this.currentStreak += 1
            if (this.currentStreak > this.longestStreak) {
                this.longestStreak = this.currentStreak
            }
            this.guessDistributions[this.guesses.length - 1] += 1
        } else {
            this.currentStreak = 0
        }
        // Persist to localStorage
        localStorage.isGameOver         = JSON.stringify(this.isGameOver)
        localStorage.gamesPlayed        = parseInt(this.gamesPlayed)
        localStorage.gamesWon           = parseInt(this.gamesWon)
        localStorage.currentStreak      = parseInt(this.currentStreak)
        localStorage.longestStreak      = parseInt(this.longestStreak)
        localStorage.guessDistributions = JSON.stringify(this.guessDistributions)
    }

    /**
     *
     * @param guess The guess the player made.
     */
    addGuess(guess) {
        this.guesses.push(guess)
        localStorage.guesses = JSON.stringify(this.guesses)
    }

    toggleShowDistance() {
        this.showDistance = !this.showDistance
        localStorage.showDistance = JSON.stringify(this.showDistance)
    }

    toggleMetricDistance() {
        this.metricDistance = !this.metricDistance
        localStorage.metricDistance = JSON.stringify(this.metricDistance)
    }
}

export { Storage }

