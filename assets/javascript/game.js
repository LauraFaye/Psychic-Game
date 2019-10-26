var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numGuesses = document.getElementById("numGuesses-text");
var guessChoices = document.getElementById("guessChoices-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    var userGuess = event.key;
    var userChoice = event.key
    var guessChoices = guessChoisce[Math.floor(Math.random() * guessChoices.length)];

    
    wins = event.key
    example()
}

function example() {
    
}
