
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
        computerChoice = "sissors";
    }
    return computerChoice;
}

function getHummanChoice() {
    let userChoice = prompt("Please enter your choice (rock, paper or sissors): ");
    return userChoice;
}
