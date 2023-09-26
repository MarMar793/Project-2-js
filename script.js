/* The below registeres a score each time the user clicks */
const clickButton = document.getElementById("clickButton");
        const scoreElement = document.getElementById("score");

        /* Start with a score of 0*/
        let score = 0;

        /*Code to register when the user has clicked button & increase with each click*/
        clickButton.addEventListener("click", () => {
            score++;
            
            /*show score on page*/
            scoreElement.textContent = score;
        });
