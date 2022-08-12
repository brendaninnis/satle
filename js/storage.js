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
            localStorage.gamesPlayed = 0;
        }
        this.gamesPlayed = parseInt(localStorage.gamesPlayed);

        if (localStorage.getItem("gamesWon") === null) {
            localStorage.gamesWon = 0;
        }
        this.gamesWon = parseInt(localStorage.gamesWon);

        if (localStorage.getItem("currentStreak") === null) {
            localStorage.currentStreak = 0;
        }
        this.currentStreak = parseInt(localStorage.currentStreak);

        if (localStorage.getItem("longestStreak") === null) {
            localStorage.longestStreak = 0;
        }
        this.longestStreak = parseInt(localStorage.longestStreak);

        if (localStorage.getItem("guessDistributions") === null) {
            localStorage.guessDistributions = JSON.stringify([0, 0, 0, 0, 0, 0]);
        }
        this.guessDistributions = JSON.parse(localStorage.guessDistributions);

        if (localStorage.getItem("currentSatleId") == satleId && localStorage.getItem("guesses") !== null) {
            this.guesses = JSON.parse(localStorage.guesses);
        } else {
            localStorage.currentSatleId = satleId;
            this.guesses = Array();
            localStorage.guesses = JSON.stringify(this.guesses);
        }
    }

    updateStatistics(win) {
        // Update values
        this.gamesPlayed += 1;
        if (win) {
            this.gamesWon += 1;
            this.currentStreak += 1;
            if (this.currentStreak > this.longestStreak) {
                this.longestStreak = this.currentStreak;
            }
            this.guessDistributions[this.guesses.length - 1] += 1;
        } else {
            this.currentStreak = 0;
        }
        // Persist to localStorage
        localStorage.gamesPlayed = parseInt(this.gamesPlayed);
        localStorage.gamesWon = parseInt(this.gamesWon);
        localStorage.currentStreak = parseInt(this.currentStreak);
        localStorage.longestStreak = parseInt(this.longestStreak);
        localStorage.guessDistributions = JSON.stringify(this.guessDistributions);
    }

    addGuess(guess) {
        this.guesses.push(guess);
        localStorage.guesses = JSON.stringify(this.guesses);
    }
}
