let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const log = document.querySelector(".log");
const scoreDisplay = document.querySelector(".score");
const winCounter = document.querySelector(".wins");
const clearLog = document.querySelector(".clear-log");

rock.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock")
})

paper.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper")
})

scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors")
})

clearLog.addEventListener("click", () => {
    while(log.firstChild) {
        log.removeChild(log.lastChild);
    }
})

function getComputerChoice() {
    let randomSelection = Math.floor(Math.random() * 3);

    if (randomSelection == 0) {
        return "Rock";
    } else if (randomSelection == 1) {
        return "Paper";
    } else if (randomSelection == 2) {
        return "Scissors";
    } else return "error";
}

function getPlayerChoice() {
    let playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'").charAt(0).toUpperCase();

    if (playerSelection == "R") {
        return "Rock";
    } else if (playerSelection == "P") {
        return "Paper";
    } else if (playerSelection == "S") {
        return "Scissors";
    } else return "error";
}

function logResult() {
    const newLog = document.createElement("li");
    newLog.textContent = results.textContent;
    log.appendChild(newLog);
}

function countWins() {
    if (playerWins > 0 || computerWins > 0) {
        winCounter.textContent = ("Player wins: " + playerWins + ", Computer wins: " + computerWins);
    }
}

function checkWinner() {
    if (computerScore == 5) {
        alert("Computer wins with 5 points!");
        computerWins++;
        countWins();
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore == 5) {
        alert("Player wins with 5 points!");
        playerWins++;
        countWins();
        computerScore = 0;
        playerScore = 0;
    }
}

function playRound(computerChoice, playerChoice) {
    if (playerChoice == "error") { 
        console.log("Your input was invalid! Try again.");
    } else { 
        console.log("You selected: " + playerChoice);}
    console.log("The computer selected: " + computerChoice);

    if (computerChoice == playerChoice) {
        logResult();
        results.textContent = ("It's a draw! You both selected " + computerChoice);
    } else if (computerChoice == "Rock" && playerChoice == "Paper") {
        logResult();
        results.textContent = ("You won! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
    } else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        logResult();
        results.textContent = ("You won! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
    } else if (computerChoice == "Scissors" && playerChoice == "Rock") {
        logResult();
        results.textContent = ("You won! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
    } else if (computerChoice == "Rock" && playerChoice == "Scissors") {
        logResult();
        results.textContent = ("You lost! " + playerChoice + " loses to " + computerChoice + ".");
        computerScore++;
    } else if (computerChoice == "Paper" && playerChoice == "Rock") {
        logResult();
        results.textContent = ("You lost! " + playerChoice + " loses to " + computerChoice + ".");
        computerScore++;
    } else if (computerChoice == "Scissors" && playerChoice == "Paper") {
        logResult();
        results.textContent = ("You lost! " + playerChoice + " loses to " + computerChoice + ".");
        computerScore++;
    }

    scoreDisplay.textContent = ("Player score: " + playerScore + ", Computer score: " + computerScore);
    checkWinner();
}

