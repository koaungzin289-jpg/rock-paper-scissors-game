const getComputerChoice = () => {
  const num = Math.random();
  if (num < 1 / 3) {
    return "rock";
  } else if (num < 1 / 2) {
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
const playRound = (computerSelection, humanSelection) => {
  if (computerSelection === "rock" && humanSelection === "paper") {
    humanScore++;
  } else if (computerSelection === "rock" && humanSelection === "scissors") {
    computerScore++;
  } else if (computerSelection === "paper" && humanSelection === "rock") {
    computerScore++;
  } else if (computerSelection === "paper" && humanSelection === "scissors") {
    humanScore++;
  } else if (computerSelection === "scissors" && humanSelection === "rock") {
    humanScore++;
  } else if (computerSelection === "scissors" && humanSelection === "paper") {
    computerScore++;
  }
  console.log("Computer :" + computerSelection);
  console.log("Human :" + humanSelection);
  console.log("humanScore:" + humanScore);
  console.log("computerScore:" + computerScore);
};

let round = 1;
const playGame = () => {
  console.log(`Round : ${round}`);
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();
  playRound(computerSelection, humanSelection);
  if (round === 5) {
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
  round++;
};
