//number of attempts user has//
let remainingAttempts = 4; // Change the number of attempts as needed
let randomNumber; // To store the random number

//get elements from html//
const attemptsElement = document.getElementById("attemptsRemaining");
const numberContainer = document.getElementById("numberContainer");
const messageElement = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

//start at 0 attempts made//
let attempts = 0;

//generate a random number from 1-12//
function generateRandomNumber() {
    return Math.floor(Math.random() * 12) + 1; // Generates a random number between 1 and 12
}

//display no.of atttempts message//
function updateAttemptsDisplay() {
    attemptsElement.textContent = `You have ${remainingAttempts} attempts remaining`;
}

//assess users guess//
function handleGuess(userGuess) {
    if (userGuess === randomNumber) {
        // Check if this was the last attempt before displaying the win message//
        if (remainingAttempts === 1) {
            messageElement.textContent = `Winner! The correct number was ${randomNumber}. You got it on the last attempt!`;
        } else {
            messageElement.textContent = `Winner! The correct number was ${randomNumber}. It took you ${attempts} attempts.`;
        }
        //disable numbers if they chose correctly//
        disableNumbers();
        resetButton.disabled = false;
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "Too high! Try again.";
    }

    //log no of attempts made//
    attempts++;
    //log number of attempts remaining//
    remainingAttempts--;

    updateAttemptsDisplay(); // Update and display remaining attempts

    if (remainingAttempts === 0 && userGuess !== randomNumber) {
        disableNumbers();
        messageElement.textContent = `Out of attempts. Game over. The number was ${randomNumber}.`;
        resetButton.disabled = false;
    }
}

function createNumberButtons() {
    for (let i = 1; i <= 12; i++) { // Change the loop limit to 12//
        const numberButton = document.createElement("button");
        numberButton.textContent = i;
        numberButton.classList.add("number-button");
        numberButton.addEventListener("click", () => {
            const userGuess = parseInt(numberButton.textContent);
            handleGuess(userGuess);
        });
        numberContainer.appendChild(numberButton);
    }
}
//reset game//
function resetGame() {
    randomNumber = generateRandomNumber();
    messageElement.textContent = "";
    attempts = 0;
    enableNumbers();
    resetButton.disabled = true;
    remainingAttempts = 4; // Reset the attempts
    updateAttemptsDisplay(); // Update and display remaining attempts
}

function disableNumbers() {
    const numberButtons = document.querySelectorAll(".number-button");
    numberButtons.forEach((button) => {
        button.disabled = true;
    });
}
function enableNumbers() {
    const numberButtons = document.querySelectorAll(".number-button");
    numberButtons.forEach((button) => {
        button.disabled = false;
    });
}

resetButton.addEventListener("click", resetGame);

createNumberButtons();
resetGame();
