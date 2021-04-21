

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  let computerResIndex = Math.floor(Math.random() * 3);
  let computerResponse = options[computerResIndex];
  return computerResponse;
};

// function playerPlay() {
//   // let playerResponse = prompt("Enter Rock, Paper, or Scissors:");
//   playerResponse = playerResponse.toLowerCase();
//   return playerResponse;
// };

function playRound(gameScore, playerResponse) {
  let computerSelection = computerPlay();
  let playerSelection = playerResponse;
  console.log(computerSelection);
  console.log(playerSelection);
  if ((computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")) {
    console.log("Computer wins, " + computerSelection + " beats " + playerSelection);
    gameScore.computerWinCount++;
    console.log("Computer: " + gameScore.computerWinCount + " Player: " + gameScore.playerWinCount);
  } else if ((computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")) {
    console.log("Player wins, " + playerSelection + " beats " + computerSelection);
    gameScore.playerWinCount++;
    console.log("Computer: " + gameScore.computerWinCount + " Player: " + gameScore.playerWinCount);
  } else {
    console.log("It's a draw");
    console.log("Computer: " + gameScore.computerWinCount + " Player: " + gameScore.playerWinCount);
  }
  return gameScore;
};

function game() {
  let gameScore = {
    playerWinCount: 0,
    computerWinCount: 0
  };
  const buttons = document.querySelectorAll("button");
  buttons.forEach(function(button) {
    button.addEventListener("click",function() {
      const playerResponse = event.target.innerText.toLowerCase();
      gameScore = playRound(gameScore, playerResponse);
      console.log(gameScore);
    });
  });
}
  // let winFlag = false;
  // while (winFlag == false) {
  //   })

    // if (gameScore.playerWinCount === 5) {
    //   winFlag = true;
    //   console.log("The winner of 5 rounds is player!");
    // } else if (gameScore.computerWinCount === 5) {
    //   winFlag = true;
    //   console.log("The winner of 5 rounds is computer!");
    // }

game();
