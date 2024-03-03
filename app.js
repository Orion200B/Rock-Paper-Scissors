let playerScore = 0;
let computerScore = 0;
let tie= 0;
let rounds = 3;

for(let i = 0; i < rounds; i++){
    let playerChoice = prompt("Type below your choice: Rock, Paper or Scissors");
    let array = ["Rock","Paper","Scissors"];
    function getComputerChoice(){
        return array[(Math.floor(Math.random() * array.length))];
    }
    let computerChoice = getComputerChoice();

    function fixTypos(string){
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    playerChoice = fixTypos(playerChoice);

    function playGame(playerChoice, computerChoice){
        if(playerChoice == computerChoice){
            console.log("It's a Tie");
            tie++;
        }
        else if(playerChoice == "Rock" && computerChoice=="Paper" || 
        playerChoice == "Paper" && computerChoice=="Rock" || 
        playerChoice == "Scissors" && computerChoice=="Paper" ||
        playerChoice == "Rock" && computerChoice=="Scissors"){
            console.log("Player Won");
            playerScore++;
        }
        else if(playerChoice == "Paper" && computerChoice=="Rock" || 
        playerChoice == "Paper" && computerChoice=="Scissors" || 
        playerChoice == "Scissors" && computerChoice=="Rock" ||
        playerChoice == "Scissors" && computerChoice=="Rock"){
            console.log("Computer Won");
            computerScore++;
        }
        console.log("Player: " + playerScore,"Computer: " + computerScore,"Ties: " + tie);
        console.log("Rounds: " + rounds);
    }
    console.log(playGame(playerChoice, computerChoice));
    if(i == rounds - 1){
        if(computerScore > playerScore && computerScore > tie){
            console.log("Computer Won!");
        }
        else if(playerScore > computerScore && playerScore > tie){
            console.log("Player Won!");
        }
        else if(tie > computerScore && tie > playerScore){
            console.log("It's a tie!");
        }
    }
}

