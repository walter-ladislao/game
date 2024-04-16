var playerScore = 0;
var computerScore = 0;
var draws = 0;

function play(userChoice) {
    var choices = ["Sasso", "Carta", "Forbici"];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var result;

    if (userChoice === computerChoice) {
        result = "Pareggio!";
        draws++; 
    } else if (
        (userChoice === "Sasso" && computerChoice === "Forbici") ||
        (userChoice === "Carta" && computerChoice === "Sasso") ||
        (userChoice === "Forbici" && computerChoice === "Carta")
    ) {
        result = "Hai vinto!";
        playerScore++;
    } else {
        result = "Hai perso!";
        computerScore++;
    }
    
    document.getElementById("result").innerText = result;
    document.getElementById("score").innerText = "Punteggio: Giocatore " + playerScore + " - Computer " + computerScore + " - Pareggi " + draws;
    document.getElementById("score1").innerText = playerScore;
    document.getElementById("score2").innerText = computerScore;
    document.getElementById("score3").innerText = draws;
    document.getElementById("pcChoice").innerText = computerChoice;    
}

