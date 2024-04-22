function checkTrivia() {
    const answer = document.getElementById("triviaAnswer").value;
    const correctAnswer = "Paris";
    const triviaResult = document.getElementById("triviaResult");
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        triviaResult.textContent = `Correct! You guessed ${answer}.`;
    } else {
        triviaResult.textContent = `Incorrect! You guessed ${answer}.`;
    }
}

function checkNumber() {
    const input = document.getElementById("numberCheck").value;
    const number = parseInt(input, 10); 
    
    const numberCheckResult = document.getElementById("numberCheckResult");
    
    if (isNaN(number)) {
        numberCheckResult.textContent = "The input is not a valid number. Please enter only numeric values.";
        return;
    }

    if (input.trim().length === 5 && number >= 10000 && number <= 99999) {
        const isEven = number % 2 === 0;
        numberCheckResult.textContent = `${number} is an ${isEven ? "even" : "odd"} number.`;
    } else {
        numberCheckResult.textContent = "Please enter a valid 5-digit number.";
    }
}


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
           
            checkNumber();
        }
    });
});
