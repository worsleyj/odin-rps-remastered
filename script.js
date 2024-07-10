let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomSelection = Math.floor(Math.random() * 3);

    if (randomSelection == 0) {
        return "Rock";
    } else if (randomSelection == 1) {
        return "Paper";
    } else if (randomSelection == 2) {
        return "Scissors";
    } else return "error"
}

function getPlayerChoice() {
    let playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'").charAt(0).toUpperCase();

    if (playerSelection == "R") {
        return "Rock";
    } else if (playerSelection == "P") {
        return "Paper";
    } else if (playerSelection == "S") {
        return "Scissors";
    } else return "error"
}

function RockPaperScissors(computerChoice, playerChoice) {
    if (playerChoice == "error") { 
        console.log("Your input was invalid! Try again.");
    } else { 
        console.log("You selected: " + playerChoice);}
    console.log("The computer selected: " + computerChoice);

    if (computerChoice == playerChoice) {
        console.log("It's a draw! You both selected " + computerChoice);
    } else if (computerChoice == "Rock" && playerChoice == "Paper") {
        console.log("You won! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
    } else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        console.log("You won! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
    } else if (computerChoice == "Scissors" && playerChoice == "Rock") {
        console.log("You won! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++;
    } else if (computerChoice == "Rock" && playerChoice == "Scissors") {
        console.log("You lost! " + playerChoice + " loses to " + computerChoice + ".");
        computerScore++;
    } else if (computerChoice == "Paper" && playerChoice == "Rock") {
        console.log("You lost! " + playerChoice + " loses to " + computerChoice + ".");
        computerScore++;
    } else if (computerChoice == "Scissors" && playerChoice == "Paper") {
        console.log("You lost! " + playerChoice + " loses to " + computerChoice + ".");
        computerScore++;
    }
}

//RockPaperScissors(getComputerChoice(), getPlayerChoice());