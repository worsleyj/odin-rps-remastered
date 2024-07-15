let playerScore = 0;
let computerScore = 0;
let roundAmount = 5;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const log = document.querySelector(".log");

rock.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock")
})

paper.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper")
})

scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors")
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
}

