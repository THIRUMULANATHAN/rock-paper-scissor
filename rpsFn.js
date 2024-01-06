const choices = ["rock", "paper", "scissor"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");

function playGame(playerChoices) {
    const ComputerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoices === ComputerChoice) {
        result = "IT's A TIE";
    } else {
        switch (playerChoices) {
            case "rock":
                result = (ComputerChoice === "scissor") ? "You Won!!" : "You Loose!!";
                break;
            case "paper":
                result = (ComputerChoice === "rock") ? "You Won!!" : "You Loose!!";
                break;
            case "scissor":
                result = (ComputerChoice === "paper") ? "You Won!!" : "You Loose!!";
                break;
        }
    }

    PlayerDisplay.textContent = `PLAYER: ${playerChoices}`;
    ComputerDisplay.textContent = `Computer: ${ComputerChoice}`;
    ResultDisplay.textContent = result;

    // Remove existing classes before adding new ones
    ResultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "You Won!!":
            ResultDisplay.classList.add("greenText");
            break;
        case "You Loose!!":
            ResultDisplay.classList.add("redText");
            break;
    }
}
