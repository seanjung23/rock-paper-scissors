const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const getHumanChoice = () => {
  const userInput = window
    .prompt("rock, paper, or scissors (Best of 5)")
    ?.toLowerCase();

  return choices.includes(userInput) ? userInput : null;
};

const determineWinner = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  }

  return "Computer wins!";
};

const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;
  let gameCount = 0;

  while (true) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice === null) {
      console.log("No valid input detected. Game over.");
      break;
    }

    const result = determineWinner(humanChoice, computerChoice);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);
    console.log(result);

    if (result === "You win!") {
      humanScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (gameCount === 5) {
      const playAgain = window
        .prompt("Do you want to play again? (yes/no)")
        ?.toLowerCase();

      if (playAgain !== "yes") {
        console.log("Thanks for playing!");
        break;
      }
    }

    gameCount++;
  }
};

playGame();
