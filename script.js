/*getting the code to randomly generate a number between 1 and 10*/
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

/*changing the the const to register the users guess and for code to get answer*/
submitGuess.addEventListener("click", () => {
    // Get the user's guess from the input field
    const userGuess = parseInt(guessInput.value);

        /* Adding an else if to feedback to the user that they got the rght anser (or not)*/
function handleGuess(userGuess) {
    if (userGuess === randomNumber) {
        }
            messageElement.textContent = `Winner! The correct number was ${randomNumber}. It took you ${attempts} attempts.`;
        }else {
        messageElement.textContent = `Wrong answer. Try again!`;

        /* Start with a score of 0*/
        let score = 0;

        /*Code to register when the user has clicked button & increase with each click*/
        clickButton.addEventListener("click", () => {
            score++;
         
        });
