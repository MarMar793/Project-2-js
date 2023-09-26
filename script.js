/*Generate a random number between 1 and 10*/
let randomNumber = generateRandomNumber();
let remainingAttempts = 4;/*gives the user 4 attempts*/

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
        disableNumbers(); 
        resetButton.disabled = false; 
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low. Try again!";
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "Too high. Try again!";
    }

    /*adds number of attempts*/
    attempts++;
}

    /*logs remaining attempts*/
    remainingAttempts--;

    if (remainingAttempts === 0) {
        disableNumbers(); /* takes away more guesses*/
        messageElement.textContent = "You lose sucker!";
        resetButton.disabled = false;
    }
}


/*create numbers with html*/
function createNumberButtons() {
    for (let i = 1; i <= 10; i++) {
        const numberButton = document.createElement("button");
        numberButton.textContent = i;

       /* classlist to style in css*/
numberButton.classList.add("number-button");
    

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
    randomNumber = generateRandomNumber(); 
    messageElement.textContent = ""; 
    attempts = 0;
    enableNumbers();
      resetButton.disabled = true; /*added a disabled condition for the reset button when the game is in play*/
     remainingAttempts = 4; /*puts guesses back to 4*/
}

/* Enable function buttons*/
function enableNumbers() {
    const numberButtons = document.querySelectorAll("#numberContainer button");
    numberButtons.forEach((button) => {
        button.disabled = false;
    });
}

/*Add reset button*/
resetButton.addEventListener("click", () => {
    resetGame();
});

/*Recreate numbers. Start game again*/
createNumberButtons();
resetGame(); // 
