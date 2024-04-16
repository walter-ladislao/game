var playerScore = 0;
var computerScore = 0;
var draws = 0; // Variabile per tenere traccia dei pareggi

function play(userChoice) {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var result;

    if (userChoice === computerChoice) {
        result = "Pareggio!";
        draws++; 
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Hai vinto!";
        playerScore++;
    } else {
        result = "Hai perso!";
        computerScore++;
    }

    
    document.getElementById("result").innerText = "Hai scelto " + userChoice + ". Il computer ha scelto " + computerChoice + ". " + result;
    document.getElementById("score").innerText = "Punteggio: Giocatore " + playerScore + " - Computer " + computerScore + " - Pareggi " + draws;
    document.getElementById("score1").innerText = playerScore;
    document.getElementById("score2").innerText = computerScore;
    document.getElementById("score3").innerText = draws;
    console.log(computerChoice);
    
}

