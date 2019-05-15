// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================
var randomNumber = 0;
var winCount = 0;
var lossCount = 0;
var totalScore = 0;
var blueCrystalValue = 0;
var purpleCrystalValue = 0;
var orangeCrystalValue = 0;
var greenCrystalValue = 0;

// FUNCTIONS (These are bits of code that we will call upon to run when needed).
// ==================================================================================================
$(document).ready(function() {
  // Generate a Random number between 19-120
  $(".crystal").on("click", function() {
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    var blueCrystalValue = Math.floor(Math.random() * 12) + 1;
    var purpleCrystalValue = Math.floor(Math.random() * 12) + 1;
    var greenCrystalValue = Math.floor(Math.random() * 12) + 1;
    var orangeCrystalValue = Math.floor(Math.random() * 12) + 1;

    console.log("Rand " + randomNumber);
    console.log("Blue " + blueCrystalValue);
    console.log("Purple " + purpleCrystalValue);
    console.log("Green " + greenCrystalValue);
    console.log("Orange " + orangeCrystalValue);
    $("#random-number").text(randomNumber);
  });
});

// display random number

// Game starts when user clicks on on of the crystals

// each crystal is assigned a random value between 1 and 12

// Total Score increases by the value of the crystal the user selected

// user continues to click crystals until they win the game or lose the game
// game is won if user matches the random number
// game is lost if user goes above the random number
// win and loss counters are updated based on results
// Game resets

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================
