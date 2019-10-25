var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    console.log(event.key)
    console.log(event)
    var userChoice = event.key
    console.log(userChoice)
    wins = event.key
example()
}

function example(){
    console.log(wins)
}
console.log(wins)