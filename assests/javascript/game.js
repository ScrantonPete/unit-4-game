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
  var randomNumber = Math.floor(Math.random() * 102) + 19;
  // display random number
  $("#random-number").text(randomNumber);
  // each crystal is assigned a random value between 1 and 12
  var blueCrystalValue = Math.floor(Math.random() * 12) + 1;
  var purpleCrystalValue = Math.floor(Math.random() * 12) + 1;
  var greenCrystalValue = Math.floor(Math.random() * 12) + 1;
  var orangeCrystalValue = Math.floor(Math.random() * 12) + 1;
  // Testing
  console.log("Rand " + randomNumber);
  console.log("Blue " + blueCrystalValue);
  console.log("Purple " + purpleCrystalValue);
  console.log("Green " + greenCrystalValue);
  console.log("Orange " + orangeCrystalValue);

  // Counters
  $("#win-count").text(winCount);
  $("#loss-count").text(lossCount);

  // Reset games
  function reset() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    blueCrystalValue = Math.floor(Math.random() * 12) + 1;
    purpleCrystalValue = Math.floor(Math.random() * 12) + 1;
    greenCrystalValue = Math.floor(Math.random() * 12) + 1;
    orangeCrystalValue = Math.floor(Math.random() * 12) + 1;
    totalScore = 0;
    $("#total-score").text(totalScore);
  }
  // game is lost if user goes above the random number

  function winGame() {
    alert("You win!!!");
    winCount++;
    $("#win-count").text(winCount);
    reset();
  }
  // game is lost if user goes above the random number

  function loseGame() {
    alert("You Lost!");
    lossCount++;
    $("#loss-count").text(lossCount);
    reset();
  }

  $("#blueCrystal").on("click", function() {
    // Total Score increases by the value of the crystal the user selected
    totalScore = totalScore + blueCrystalValue;
    console.log("Total Score " + totalScore);
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      // game is won if user matches the random number
      winGame();
    } else if (totalScore > randomNumber) {
      loseGame();
    }
  });

  $("#purpleCrystal").on("click", function() {
    // Total Score increases by the value of the crystal the user selected
    totalScore = totalScore + purpleCrystalValue;
    console.log("Total Score " + totalScore);
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      // game is won if user matches the random number
      winGame();
    } else if (totalScore > randomNumber) {
      loseGame();
    }
  });

  $("#greenCrystal").on("click", function() {
    // Total Score increases by the value of the crystal the user selected
    totalScore = totalScore + greenCrystalValue;
    console.log("Total Score " + totalScore);
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      // game is won if user matches the random number
      winGame();
    } else if (totalScore > randomNumber) {
      loseGame();
    }
  });

  $("#orangeCrystal").on("click", function() {
    // Total Score increases by the value of the crystal the user selected
    totalScore = totalScore + orangeCrystalValue;
    console.log("Total Score " + totalScore);
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      // game is won if user matches the random number
      winGame();
    } else if (totalScore > randomNumber) {
      loseGame();
    }
  });
});

// user continues to click crystals until they win the game or lose the game

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================
