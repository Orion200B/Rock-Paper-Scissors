let playerScore = 0;
let computerScore = 0;
let rounds = 6;

for(let i = 1; i < rounds; i++){
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
        console.log("You chose: " + playerChoice + " Computer chose: " + computerChoice);
        if(playerChoice == computerChoice){
            console.log("It's a Tie");
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
        console.log("Points -> Player: " + playerScore + " Computer: " + computerScore);
        console.log("Round: " + i);
    }
    console.log(playGame(playerChoice, computerChoice));
    if(i == rounds - 1){
        if(computerScore > playerScore){
            console.log("Computer Won!");
        }
        else if(playerScore > computerScore){
            console.log("Player Won!");
        }
        else if(playerScore == computerScore){
            console.log("It's a Tie!")
        }
    }
}

