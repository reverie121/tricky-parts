function guessingGame() {
    let num = Math.floor(Math.random() * 100);
    gameIsActive = true;
    guessCount = 0;
    console.log("num is" + num)
    return function game(guess) {
        if (gameIsActive) {
            guessCount++;
            if (guess < num) return `${guess} is too low!`
            else if (guess > num) return `${guess} is too high!`
            else {
                gameIsActive = false;
                return `You win! You found ${num} in ${guessCount} guesses.`
            }
        }
        else {
            return "The game is over, you already won!"
        }
    }
}

module.exports = { guessingGame };
