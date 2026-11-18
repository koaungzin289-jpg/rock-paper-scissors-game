const getComputerChoice = () => {
  const num = Math.random();
  if (num < 1 / 3) {
    return "rock";
  } else if (num < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = () => {
  return prompt("Enter rock or paper or scissors");
};
let humanScore = 0;
let computerScore = 0;
const playRound = (humanSelection, computerSelection) => {
  if (computerSelection === "rock" && humanSelection === "paper") {
    humanScore++;
    console.log(" You Win! Paper beats Rock");
  } else if (computerSelection === "rock" && humanSelection === "scissors") {
    computerScore++;
    console.log(" You lose! Rock beats Scissors");
  } else if (computerSelection === "paper" && humanSelection === "rock") {
    computerScore++;
    console.log(" You lose! Paper beats Rock");
  } else if (computerSelection === "paper" && humanSelection === "scissors") {
    humanScore++;
    console.log(" You Win! Scissors beats Paper");
  } else if (computerSelection === "scissors" && humanSelection === "rock") {
    humanScore++;
    console.log(" You Win! Rock beats Scissors");
  } else if (computerSelection === "scissors" && humanSelection === "paper") {
    computerScore++;
    console.log(" You Lose! Scissors beats Paper");
  } else {
    console.log("It's tie.");
  }
};

let roundCount = 1;
const playGame = () => {
  console.log(`Round : ${roundCount}`);
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice().toLocaleLowerCase();
  playRound(humanSelection, computerSelection);
  if (roundCount === 5) {
    roundCount = 0;
    if (computerScore > humanScore) {
      console.log("Computer win");
    } else if (computerScore < humanScore) {
      console.log("Human Win");
    } else {
      console.log("Draw");
    }
    humanScore = 0;
    computerScore = 0;
  }
  roundCount++;
};
for (let i = 0; i < 5; i++) {
  playGame();
}
