
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "sicssors";
    }
    return computerChoice;
}

function getHummanChoice() {
    let userChoice = prompt("Please enter your choice (rock, paper or scissors): ");
    return userChoice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It is a tie, both players chose ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! human choice: ${humanChoice} crushes computer choice: ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! computer choice: ${computerChoice} crushes human choice: ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! human choice: ${humanChoice} cuts computer choice: ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! computer choice: ${computerChoice} cuts human choice: ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! human choice: ${humanChoice} covers computer choice: ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! computer choice: ${computerChoice} covers human choice: ${humanChoice}`);
        computerScore++;
    }
}

let humanSelection = getHummanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);