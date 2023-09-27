/*number of attempts*/
let remainingAttempts = 4; 
/*Log randomly chosen number (winning number)*/
let randomNumber; 

/*get from HTML*/
const attemptsElement = document.getElementById("attemptsRemaining");
const numberContainer = document.getElementById("numberContainer");
const messageElement = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

/*start with 0 attempts made by user*/
let attempts = 0;

/* generate a number randomly between 1-12*/
function generateRandomNumber() {
    return Math.floor(Math.random() * 12) + 1; // Generates a random number between 1 and 12
}
/*no. of attempts remaining to be displayed*/
function updateAttemptsDisplay() {
    attemptsElement.textContent = `You have ${remainingAttempts} attempts remaining`;
}

/* What should be displayed depending on if the user chose correctly or not*/
function handleGuess(userGuess) {
    if (userGuess === randomNumber) {
        
        /*check if the user had 1 guess left when they chose the correct random numnber*/
        if (remainingAttempts === 1) {
            messageElement.textContent = `Winner! The correct number was ${randomNumber}. You got it on the last attempt!`;
        } else {
            messageElement.textContent = `Winner! The correct number was ${randomNumber}. It took you ${attempts} attempts.`;
        }
        disableNumbers(); /* disable numbers if they guessed correctly*/
        resetButton.disabled = false;
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "Too high! Try again.";
    }

    /* log number of guesses made*/
    attempts++;
    /*log number of guesses left*/
    remainingAttempts--;

    updateAttemptsDisplay(); /* Update and display remaining attempts*/

    if (remainingAttempts === 0 && userGuess !== randomNumber) {
        disableNumbers();
        messageElement.textContent = `Out of attempts. Game over. The number was ${randomNumber}.`; /* tell user they lose if they don't guess the correct number */
        resetButton.disabled = false;
    }
}

/*conditions in which to disable numbers*/
function disableNumbers() {
    const numberButtons = document.querySelectorAll(".number-button");
    numberButtons.forEach((button) => {
        button.disabled = true;
    });

    
/*create number buttons*/
function createNumberButtons() {
    for (let i = 1; i <= 12; i++) { // number range is 1-12
        const numberButton = document.createElement("button");
        numberButton.textContent = i;
        numberButton.classList.add("number-button");

        /*each "click" on a number is a guess. log guess*/
        numberButton.addEventListener("click", () => {
            const userGuess = parseInt(numberButton.textContent);
            handleGuess(userGuess);
        });
        numberContainer.appendChild(numberButton);
    }
}


/*reset game*/
function resetGame() {
    randomNumber = generateRandomNumber();
    messageElement.textContent = "";
    attempts = 0;
    enableNumbers();
    resetButton.disabled = true;
    remainingAttempts = 4; // Reset attempts
    updateAttemptsDisplay(); // Update and display remaining attempts
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
