let minNum = 1;
let maxNum = 15;
let targetNum = Math.floor(Math.random() * 15) + 1;
let attempt = 0;
let guesses = [];
let maxAttempt = 3;

function checkGuess() {
    if (attempt >= maxAttempt) {
        alert("Sorry! only 3 three guesses are allowed");
    }
    
    let guess = parseInt(document.getElementById("guessField").value);
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        alert("please enter a valid number between 1 and 15")
        return;
    }
    guesses.push(guess);
    attempt++;

    let userInput = document.getElementById("guessField");
    userInput.value = "";

    document.getElementById("guess").textContent = `Guessed numbers are: ${guess}`;
    document.getElementById("num").textContent = `No. of guesses: ${attempt}`;

    if (guess === targetNum) {
        document.getElementById("hint").textContent = `Congratulations! You have guessed the number ${targetNum}`;
    } else if (guess < targetNum) {
        document.getElementById("hint").textContent = `Try a higher number. 😲`;
    } else {
        document.getElementById("hint").textContent = `Try a lower number. 😲`;
    }
}