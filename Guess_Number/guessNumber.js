"use strict";

//States
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Input is Null Or 0
  if (!guess) {
    displayMessage("No Number ⛔");

    //Input Value is Equal To Generated Number
  } else if (guess === secretNumber) {
    //If New Record Reached
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // document.querySelector(".message").textContent = "Correct Answer 😆";
    displayMessage("Correct Answer 😆");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //Refactored (Instead Of 2 Condition I Made It One if else Block)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // NOTICE
      // document.querySelector(".message").textContent =
      // guess > secretNumber ? "Too Greater 📉" : "Too Low";
      displayMessage(guess > secretNumber ? "Too Greater" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "Game Over 💣💥";
      displayMessage("Game Over 💣💥");
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".score").textContent = 0;
    }
  }

  //Input Value is Greater Than Generated Number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Greater 📉";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over 💣💥";
  //     document.querySelector("body").style.backgroundColor = "#ff0000";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //Input Value is Less Than Generated Number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low 📈";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over 💣💥";
  //     document.querySelector("body").style.backgroundColor = "#ff0000";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

//Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
