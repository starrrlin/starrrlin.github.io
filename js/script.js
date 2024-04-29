// Last item function
function lastItem() {
    var arrayName = ['Watermelon', 'Apple', 'Orange', 'Kiwi']
    var y = arrayName.slice();
    var selectedElement = document.getElementById("fruit");
    var x = arrayName.sort();
    selectedElement.innerText = `The original array is [${y}], and I sorted it alphabetically.
    The last item of the sorted array is ${x[x.length - 1]}.`;
  }
  
// WHERE DO WE CONSTRUCT THE NEW OBJECT?
const responses = {};

function sortItemsInput() {

    // ASK HOW MANY ITEMS TO ENTER, CHECK THE NUMBER PROVIDED BY THE PROMPT
    while(isNaN(numItems) || numItems > 4 || numItems < 2 || !(Number.isInteger(numItems))){
        var numItems = Number(prompt('How many items would you like to enter? 2-4.'))
    }

    // COLLECT INPUT FROM USER
    for (let index = 0; index < numItems; index++) {
        let catInput = prompt(`Enter category ${index+1} of ${numItems}.`)
        let catItem = prompt(`Enter your ${catInput}`)
        responses[catInput] = catItem;
        // We cannot create the responses object here!
    };

    // IF YOU WANT TO SORT BY KEY
    const responseKeys = Object.keys(responses).sort();

    for (const key of responseKeys) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Your ${key.toLowerCase()} is ${responses[key]}`
        document.getElementById('outputArray').appendChild(newDiv)
    }
};

// Trivia Function
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
