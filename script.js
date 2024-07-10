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
    }
}

console.log(getComputerChoice());
console.log(getPlayerChoice());