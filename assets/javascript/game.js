var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var yourguessessofarText = document.getElementById("yourguessessofar-text");

console.log(winsText);

// assign the computer's letter guess
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("Computer's " + computerGuess);

// when the player presses a key
document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log("User's guess " + userGuess);
  if (userGuess === computerGuess && guessesLeft > 0) {
    wins++;
    losses = 0;
    guessesLeft = 9;
    yourGuessesSoFar = 0;
    console.log("Correct, it was " + userGuess);
  } else if (userGuess !== computerGuess && guessesLeft > 0) {
    guessesLeft = guessesLeft - 1;
  }

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesleftText.textContent = "Guesses Left: " + guessesLeft;
  yourguessessofarText.textContent = "Your Guesses so far: " + yourguessessofar;
};
