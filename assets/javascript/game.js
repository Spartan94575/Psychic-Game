// My array
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// The Wins
var wins = 0;
// The Losses
var loses = 0;
// vars for use in the funtions latter on
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();

// if statement that reacts when a key is pressed
document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

// updates the html display 
function display() {
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");
  winsP.innerHTML = wins;
  losesP.innerHTML = loses;
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(',');
}

// adds wins to the win score
function win() {
  wins++;
  resetGame();
}

// add losses to the loss score
function lost() {
    loses++;
    resetGame();
  }
  
  // counts down the guesses you have left
  function fail(letter) {
    guessesLeft--;
    guessedLetters.push(letter);
  }
  
  // resets the game
  function resetGame() {
    guessesLeft = 12;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to guess: " + letterToGuess);
  }