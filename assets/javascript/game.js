// array of letters that the computer can choose from
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
var wins = 0; // player wins
var losses = 0; // player losses
var guessesLeft = 9; // guesses remaining for the game
var yourGuessesSoFar = []; // letter's guessed by the player

// Create variables that reference the HTML ids where we want to display the text.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var yourGuessesSoFarText = document.getElementById("yourguessessofar-text");

// Load the out html page elements with their default values
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesleftText.textContent = "Guesses Left: " + guessesLeft;
yourGuessesSoFarText.textContent = "Your Guesses so far: " + yourGuessesSoFar;

// assign the computer's letter guess by picking a random letter from the array
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// when the player presses a key
document.onkeyup = function(event) {
  
  // store the player's guess via event.key
  var userGuess = event.key;

  // check if the guess was correct
  if (userGuess === computerGuess) {
    alert("Congratulations, you have won!"); // show a win alert   
    wins++; // add a win
    
    computerGuess = letters[Math.floor(Math.random() * letters.length)]; // assign a new random letter    
    guessesLeft = 9; // reset the guess count
    yourGuessesSoFar = []; // clear the guesses made array  
  }
  // if the guess was wrong 
  else if (userGuess !== computerGuess) {
    yourGuessesSoFar.push(userGuess); // add user guess to the guesses array
    guessesLeft = guessesLeft - 1; // subtract 1 guess
  }

  // the user has no guesses left
  if (guessesLeft === 0) {
    alert("Game over! Try again."); // show a loss alert
    losses++ // add a loss
    
    computerGuess = letters[Math.floor(Math.random() * letters.length)]; // assign a new random letter
    guessesLeft = 9; // reset the guess count
    yourGuessesSoFar = []; // clear the guesses made array
  }

  // update our html to show updated values
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesleftText.textContent = "Guesses Left: " + guessesLeft;
  yourGuessesSoFarText.textContent = "Your Guesses so far: " + yourGuessesSoFar;
};
