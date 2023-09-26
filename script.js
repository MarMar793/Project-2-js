/*Generate a random number between 1 and 10*/
let randomNumber = generateRandomNumber();

/*Connects to HTML */
const numberContainer = document.getElementById("numberContainer");
const messageElement = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

/*start with 0 attempts made*/
let attempts = 0;

/*Code generates a random number between 1 and 10*/
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

/*added else if to display message depening on users guess*/
function handleGuess(userGuess) {
    if (userGuess === randomNumber) {
        messageElement.textContent = `Winner winner chicken dinner! The right answer was ${randomNumber}. You guessed it in ${attempts} attempts.`;
        disableNumbers(); // Disable number buttons after a correct guess
        resetButton.disabled = false; // Enable the reset button
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low. Try again!";
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "Too high. Try again!";
    }

    /*adds number of attempts*/
    attempts++;
}

/*create numbers with html*/
function createNumberButtons() {
    for (let i = 1; i <= 10; i++) {
        const numberButton = document.createElement("button");
        numberButton.textContent = i;

        /*Registers users guess*/
        numberButton.addEventListener("click", () => {
            const userGuess = parseInt(numberButton.textContent);
            handleGuess(userGuess);
        });
        numberContainer.appendChild(numberButton);
    }
}

/*disable buttons when user guesses correct*/
function disableNumbers() {
    const numberButtons = document.querySelectorAll("#numberContainer button");
    numberButtons.forEach((button) => {
        button.disabled = true;
    });
}

/*This resets the game*/
function resetGame() {
    randomNumber = generateRandomNumber(); // Generate a new random number
    messageElement.textContent = ""; // Clear the message
    attempts = 0; // Reset the number of attempts
    enableNumbers(); // Enable number buttons
}

/*Add reset button*/
resetButton.addEventListener("click", () => {
    resetGame();
});

/*Recreate numbers. Start game again*/
createNumberButtons();
resetGame(); // Initialize the game
