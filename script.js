const words = [
    "COMPUTER",
    "JAVASCRIPT",
    "PROGRAMMING",
    "GITHUB",
    "INTERNET",
    "PYTHON",
    "CODING"
];

let selectedWord;
let guessedLetters = [];
let wrongGuesses = 0;

const wordElement = document.getElementById("word");
const wrongElement = document.getElementById("wrong");
const lettersElement = document.getElementById("letters");
const messageElement = document.getElementById("message");

function newGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongGuesses = 0;

    messageElement.textContent = "";
    wrongElement.textContent = wrongGuesses;

    displayWord();
    createLetters();
}

function displayWord() {
    let display = "";

    for (let letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }

    wordElement.textContent = display;

    if (!display.includes("_")) {
        messageElement.textContent = "🎉 You Win!";
        disableLetters();
    }
}

function createLetters() {
    lettersElement.innerHTML = "";

    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);

        const button = document.createElement("button");
        button.textContent = letter;

        button.onclick = function () {
            guessLetter(letter, button);
        };

        lettersElement.appendChild(button);
    }
}

function guessLetter(letter, button) {
    button.disabled = true;
    guessedLetters.push(letter);

    if (selectedWord.includes(letter)) {
        displayWord();
    } else {
        wrongGuesses++;
        wrongElement.textContent = wrongGuesses;

        if (wrongGuesses >= 6) {
            messageElement.textContent =
                "😢 Game Over! Word was: " + selectedWord;

            disableLetters();
        }
    }
}

function disableLetters() {
    const buttons = lettersElement.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    });
}

newGame();
