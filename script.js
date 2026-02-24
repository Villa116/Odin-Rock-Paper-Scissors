let roundCount = 1;
let userScore = 0;
let computerScore = 0;
let roundWinner = "";


const divContainer = document.querySelector(".container");
const buttonContainer = document.querySelector("#btnContainer")

const rockButton = document.querySelector(".btnRock");
const paperButton = document.querySelector(".btnPaper");
const scissorsButton = document.querySelector(".btnScissors");
const resetButton = document.querySelector("#btnReset");
const buttonChoice = document.querySelectorAll(".btnChoice");

const roundColumn = document.querySelector(".roundNumber");
const userColumn = document.querySelector(".userSelection");
const computerColumn = document.querySelector(".computerSelection");
const WinnerColumn = document.querySelector(".roundWinner");
const userTotalScore = document.querySelector(".userScore");
const computerTotalScore = document.querySelector(".computerScore");

const clearExceptFirst = (parent, preserveCount = 1) => {
    if (!parent) return;

    while (parent.children.length > preserveCount) {
        parent.removeChild(parent.lastElementChild);
    }
}


buttonContainer.addEventListener('click', (event) => {
    
    let userSelection = event.target.dataset.selection;
    
    if (userSelection === "rock" || userSelection === "paper" || userSelection === "scissors") {
        let computerSelection = getComputerChoice();
        let roundNumberSpan = document.createElement("span");
        let userChoiceSpan = document.createElement("span");
        let computerChoiceSpan = document.createElement("span");
        let roundWinnerSpan = document.createElement("span");
        let userRoundScore = document.createElement("span");
        let computerRoundScore = document.createElement("span")

        roundNumberSpan.textContent = roundCount;

        playRound(userSelection, computerSelection);

        userChoiceSpan.textContent = userSelection;
        computerChoiceSpan.textContent = computerSelection;
        roundWinnerSpan.textContent = roundWinner;
        userRoundScore.textContent = userScore;
        computerRoundScore.textContent = computerScore;

        roundColumn.appendChild(roundNumberSpan);
        userColumn.appendChild(userChoiceSpan);
        computerColumn.appendChild(computerChoiceSpan);
        WinnerColumn.appendChild(roundWinnerSpan);

        userTotalScore.appendChild(userRoundScore);
        computerTotalScore.appendChild(computerRoundScore);

        if (userScore == 5 || computerScore == 5) {
        displayWinner();
        buttonChoice.forEach(button => {
            button.disabled = true;
        });

        resetButton.style.display = "block";
        resetButton.disabled = false;
        }

    }  

});


resetButton.addEventListener('click', (event) => {
    roundCount = 1;
    userScore = 0;
    computerScore = 0;
    roundWinner = "";

    clearExceptFirst(roundColumn);
    clearExceptFirst(userColumn);
    clearExceptFirst(computerColumn);
    clearExceptFirst(WinnerColumn);
    clearExceptFirst(userTotalScore);
    clearExceptFirst(computerTotalScore)
    
    buttonChoice.forEach(button => {
        button.disabled = false;
    });

    resetButton.style.display = "none";
})


function displayWinner() {
    if (userScore > computerScore) {
        alert(`Congratulations you won the game! your score is ${userScore} and the computer score is ${computerScore}`);
    } else {
        alert(`Sorry you have lost the game! your score is ${userScore} and the computer score is ${computerScore}`)
    }
}


function getComputerChoice() {
    let computerChoice;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(userChoice, computerChoice) {

    if (userChoice === "rock" && computerChoice === "scissors") {
        console.log(`You won round ${roundCount}! human choice (${userChoice}) crushes computer choice (${computerChoice})`);
        roundWinner = "User";
        userScore++;
        roundCount++;
    } else if (userChoice === "rock" && computerChoice === "paper") {
        console.log(`You lost round ${roundCount}! computer choice (${computerChoice}) covers human choice (${userChoice})`);
        roundWinner = "Computer"
        computerScore++;
        roundCount++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        console.log(`You won round ${roundCount}! human choice (${userChoice}) cuts computer choice (${computerChoice})`);
        roundWinner = "User"
        userScore++;
        roundCount++;
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lost round ${roundCount}! computer choice (${computerChoice}) crushes human choice (${userChoice})`);
        roundWinner = "Computer"
        computerScore++;
        roundCount++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        console.log(`You won round ${roundCount}! human choice (${userChoice}) covers computer choice (${computerChoice})`);
        roundWinner = "User"
        userScore++;
        roundCount++;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lost round ${roundCount}! computer choice (${computerChoice}) cuts human choice (${userChoice})`);
        roundWinner = "Computer"
        computerScore++;
        roundCount++;
    } else {
        console.log(`Round ${roundCount} is a tie, both players chose ${userChoice}`);
        roundWinner = "Draw";
        roundCount++;
    }
}