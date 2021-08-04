//define array with CPU choices
const items = ["Rock", "Paper", "Scissors"];

//Create a function that picks an item from the array randomly
function computerPlay()
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

//invoke the function with the CPU choice
const cpu = computerPlay();
let msg = "";
let playerChoice = "";
let roundNumber = 0; //round starts at 0 plays ofc
let playerScore = 0
let cpuScore = 0;

//retrieve elements from DOM
let p1Score = document.querySelector(".p1Score");
let compScore = document.querySelector(".cpuScoreNum");




function game(func) {
    
    while (roundNumber < 5) {
        playRound(playerChoice, cpu);
        roundNumber++;
 
    } 
    console.log("Final Score --> Player: "+ playerScore + " --- CPU: " + cpuScore);
    console.log("Game over");    

}

function playRound(choice, cpuChoice){
    playerChoice = prompt("Please select Rock, paper or scissors", "");   
    let pChoiceCapital = playerChoice.toUpperCase();
    let compChoice = cpu.toUpperCase();
    
 

    if(pChoiceCapital === "ROCK" && compChoice === "SCISSORS") {
        msg = "You win! Rock beats Scissors";
        playerScore++;
        p1Score.textContent = playerScore;

    } else if (pChoiceCapital === "PAPER" && compChoice === "SCISSORS") {
        msg = "You lose. Scissors beats paper"; 
        cpuScore++;
        compScore.textContent = cpuScore;
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "SCISSORS") {
        msg = "It's a tie. Scissors vs scissors";
    } else if (pChoiceCapital === "ROCK" && compChoice === "PAPER") {
        msg = "You lose. Paper beats rock";
        cpuScore++;
        compScore.textContent = cpuScore;
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "PAPER") {
        msg = "You win. Scissors beat Paper";
        playerScore++;
        p1Score.textContent = playerScore;
    } else if (pChoiceCapital === "PAPER" && compChoice === "PAPER") {
        msg = "It's a tie. Paper vs paper";
    } else if (pChoiceCapital === "ROCK" && compChoice === "ROCK") {
        msg = "IT's a tie. Rock vs rock";
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "ROCK") {
        msg = "You lose. Rock beats scissors";
        cpuScore++;
        compScore.textContent = cpuScore;
    } else if (pChoiceCapital === "PAPER" && compChoice === "ROCK") {
        msg = "You win. Paper beats rock";
        playerScore++;
        p1Score.textContent = playerScore;
    }
    
    return msg;
}

game();

//playRound(playerChoice, cpu );
console.log(msg);