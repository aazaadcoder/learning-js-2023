let guessRemaining = 10
const submitButton = document.querySelector('button')
const randomNumber = Math.floor(Math.random() * 100 + 1)
// console.log(randomNumber)
const guessInput = document.querySelector('.guessInput')
const gameStatusDisplay = document.querySelector('.gameStatus')
const guessStatusDisplay = document.querySelector('.guessStatus')
const previousGuessDisplay = document.querySelector('.previousGuessDisplay')
const playAgainButton = document.querySelector('.playAgainButton')
let guessArray = []
gameStatus = false


submitButton.addEventListener("click", () => {
    if (guessRemaining) {
        const guess = guessInput.value
        if (guess === '' || isNaN(guess) || parseInt(guess) < 0 || guess > 100) {
            alert(`Enter a Number Between 1 and 100.`)
        }
        else {
            guessInput.value = ''
            guessRemaining--
            guessStatusDisplay.innerHTML = `Guesses Remaining: ${guessRemaining}`
            guessArray.push(guess)
            previousGuessDisplay.innerHTML = `Previous Guesses: ${guessArray}`

            if (parseInt(guess) === randomNumber) {
                gameStatusDisplay.innerHTML = "You Won"
                gameStatus = true
                guessRemaining = 0

            }
            else {
                gameStatusDisplay.innerHTML = "Wrong Guess"

            }


        }

    }
    else {
        if (!gameStatus) {
            gameStatusDisplay.innerHTML = "You Lost"

        }

    }
}
)

playAgainButton.addEventListener("click", () => {
    gameStatus = false
    gameStatusDisplay.innerHTML = "⠀"

    guessRemaining = 10
    guessStatusDisplay.innerHTML = `Guesses Remaining: ${guessRemaining}`

    guessArray = []
    previousGuessDisplay.innerHTML = `Previous Guesses: ${guessArray}`

    guessInput.value = ''

})