let roundCount = 1;

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
    let userChoice = prompt(`Please enter your choice for round ${roundCount} (rock, paper or scissors): `);
    return userChoice.toLocaleLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
       
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You won round ${roundCount}! human choice (${humanChoice}) crushes computer choice (${computerChoice})`);
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You lost round ${roundCount}! computer choice (${computerChoice}) crushes human choice (${humanChoice})`);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You won round ${roundCount}! human choice (${humanChoice}) cuts computer choice (${computerChoice})`);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`You lost round ${roundCount}! computer choice (${computerChoice}) cuts human choice (${humanChoice})`);
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You won round ${roundCount}! human choice (${humanChoice}) covers computer choice (${computerChoice})`);
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`You lost round ${roundCount}! computer choice (${computerChoice}) covers human choice (${humanChoice})`);
            computerScore++;
        } else {
            console.log(`Round ${roundCount} is a tie, both players chose ${humanChoice}`);
        }
    }

    while (roundCount <= 5) {
        let humanSelection = getHummanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        roundCount++;
    }

    if (humanScore === computerScore) {
        console.log(`It's a tie game! human score is ${humanScore} and computer score is ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`Congratulations you have won the game! human score is ${humanScore} and computer score is ${computerScore}`);
    } else {
        console.log(`Sorry you have lost the game! human score is ${humanScore} and computer score is ${computerScore}`);
    }
}

playGame();