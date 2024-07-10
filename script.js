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


console.log(getComputerChoice());