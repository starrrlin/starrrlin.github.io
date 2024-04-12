// Function to check the trivia answer
function checkTrivia() {
    const answer = document.getElementById("triviaAnswer").value;
    const correctAnswer = "Paris";
    const triviaResult = document.getElementById("triviaResult");
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        triviaResult.textContent = `You guessed ${answer}. Correct!`;
    } else {
        triviaResult.textContent = `You guessed ${answer}. Incorrect!`;
    }
}

// Function to check if a number is odd or even
function checkNumber() {
    const number = document.getElementById("numberCheck").value;
    const numberCheckResult = document.getElementById("numberCheckResult");
    if (/^\d{5}$/.test(number)) {
        const isEven = parseInt(number, 10) % 2 === 0;
        numberCheckResult.textContent = `${number} is an ${isEven ? "even" : "odd"} number.`;
    } else {
        numberCheckResult.textContent = `Please enter a valid 5-digit number.`;
    }
}

// Function to trigger button click on Enter key press
document.addEventListener('DOMContentLoaded', () => {
    const triviaInput = document.getElementById("triviaAnswer");
    triviaInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkTrivia();
        }
    });
    const numberInput = document.getElementById("numberCheck");
    numberInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkNumber();
        }
    });
});
