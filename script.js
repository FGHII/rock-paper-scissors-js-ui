function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  let computerResIndex = Math.floor(Math.random() * 3);
  let computerResponse = options[computerResIndex];
  return computerResponse;
};

function playRound(gameScore, playerResponse) {
  let computerSelection = computerPlay();
  let playerSelection = playerResponse;
  if ((computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")) {
    document.querySelector(".round-winner").innerText = "Computer wins, " + computerSelection + " beats " + playerSelection;
    gameScore.computerWinCount++;
  } else if ((computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")) {
    document.querySelector(".round-winner").innerText = "Player wins, " + playerSelection + " beats " + computerSelection;
    gameScore.playerWinCount++;
  } else {
    document.querySelector(".round-winner").innerText = "It's a draw";
  }
  document.querySelector(".results p").innerText = "Computer: " + gameScore.computerWinCount + " Player: " + gameScore.playerWinCount;
  return gameScore;
};

function game() {
  let gameScore = {
    playerWinCount: 0,
    computerWinCount: 0
  };
  let winFlag = false;
  const buttons = document.querySelectorAll("button");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      const playerResponse = event.target.innerText.toLowerCase();
      gameScore = playRound(gameScore, playerResponse);
      if (gameScore.playerWinCount === 5) {
        document.querySelector(".game-winner").innerText = "The winner of 5 rounds is player!";
      } else if (gameScore.computerWinCount === 5) {
        document.querySelector(".game-winner").innerText = "The winner of 5 rounds is computer!";
      }
    });
  });
  // while (winFlag == false) {
  //   if (gameScore.playerWinCount === 5) {
  //     winFlag = true;
  //     console.log("The winner of 5 rounds is player!");
  //   } else if (gameScore.computerWinCount === 5) {
  //     winFlag = true;
  //     console.log("The winner of 5 rounds is computer!");
  //   }
  // }
}

game();
