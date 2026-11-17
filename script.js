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
  } else {
    humanScore = 0;
    computerScore = 0;
  }
  console.log("Computer :" + computerSelection);
  console.log("Human :" + humanSelection);
  console.log("humanScore:" + humanScore);
  console.log("computerScore:" + computerScore);
};
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
