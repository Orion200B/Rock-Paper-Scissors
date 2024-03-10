const rockButton = document.querySelector(".Rock");
const paperButton = document.querySelector(".Paper");
const scissorsButton = document.querySelector(".Scissors");
const scorePlayer = document.querySelector(".scorePlayer");
const scoreComputer = document.querySelector(".scoreCom");
const choiceTextP = document.querySelector(".PlayerC");
const choiceTextC = document.querySelector(".ComputerC");
const whoWon = document.querySelector(".whoWon");
const end = document.querySelector("#end");

let playerScore = 0;
let computerScore = 0;
let playerChoose;

scorePlayer.textContent = playerScore;
scoreComputer.textContent = computerScore;
let array = ["Rock","Paper","Scissors"];
function getcomputerChoose(){
    return array[(Math.floor(Math.random() * array.length))];
}
let computerChoose = getcomputerChoose();

rockButton.addEventListener("click", () =>{
    playerChoose = "Rock";
    choiceTextP.textContent = "You Chose: " + playerChoose + "!";
    choiceTextC.textContent = "Computer Chose: " + computerChoose + "!";
    playGame(playerChoose, computerChoose);
    computerChoose = getcomputerChoose();
});
paperButton.addEventListener("click", () =>{
    playerChoose = "Paper";
    choiceTextP.textContent = "You Chose: " + playerChoose + "!";
    choiceTextC.textContent = "Computer Chose: " + computerChoose + "!";
    playGame(playerChoose, computerChoose);
    computerChoose = getcomputerChoose();
});
scissorsButton.addEventListener("click", () =>{
    playerChoose = "Scissors";
    choiceTextP.textContent = "You Chose: " + playerChoose + "!";
    choiceTextC.textContent = "Computer Chose: " + computerChoose + "!";
    playGame(playerChoose, computerChoose);
    computerChoose = getcomputerChoose();
});

function playGame(playerChoose, computerChoose){
    if(playerChoose == computerChoose){
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
        whoWon.textContent = "It's a Tie!";
    }
    else if(playerChoose == "Rock" && computerChoose=="Paper" || 
    playerChoose == "Paper" && computerChoose=="Rock" || 
    playerChoose == "Scissors" && computerChoose=="Paper" ||
    playerChoose == "Rock" && computerChoose=="Scissors"){
        playerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
        whoWon.textContent = "You Won!";
    }
    else if(playerChoose == "Paper" && computerChoose=="Rock" || 
    playerChoose == "Paper" && computerChoose=="Scissors" || 
    playerChoose == "Scissors" && computerChoose=="Rock" ||
    playerChoose == "Scissors" && computerChoose=="Rock"){
        computerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
        whoWon.textContent = "Computer Won!";
    }
    if(playerScore == 5 || computerScore == 5){
        const endBtn = document.createElement("button");    
        end.appendChild(endBtn);
        rockButton.disabled = "disabled";
        paperButton.disabled = "disabled";
        scissorsButton.disabled = "disabled";
        if(playerScore === 5){
            endBtn.textContent = "Player Won! Retry?";
        }
        else if(computerScore === 5){
            endBtn.textContent = "Computer Won! Retry?";
        }
        endBtn.addEventListener("click", () => {
            document.location.reload();
        });
    }
}