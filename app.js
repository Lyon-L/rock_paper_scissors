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
const playerChoice = prompt("Please select Rock, paper or scissors", "");


function playRound(choice, cpuChoice){
    
    let pChoiceCapital = playerChoice.toUpperCase();
    let compChoice = cpu.toUpperCase();
    
 

    if(pChoiceCapital === "ROCK" && compChoice === "SCISSORS") {
        msg = "You win! Rock beats Scissors";
        
    } else if (pChoiceCapital === "PAPER" && compChoice === "SCISSORS") {
        msg = "You lose. Scissors beats paper";  
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "SCISSORS") {
        msg = "It's a tie. Scissors vs scissors";
    } else if (pChoiceCapital === "ROCK" && compChoice === "PAPER") {
        msg = "You lose. Paper beats rock";
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "PAPER") {
        msg = "You win. Scissors beat Paper";
    } else if (pChoiceCapital === "PAPER" && compChoice === "PAPER") {
        msg = "It's a tie. Paper vs paper";
    } else if (pChoiceCapital === "ROCK" && compChoice === "ROCK") {
        msg = "IT's a tie. Rock vs rock";
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "ROCK") {
        msg = "You lose. Rock beats scissors";
    } else if (pChoiceCapital === "PAPER" && compChoice === "ROCK") {
        msg = "You win. Paper beats rock";
    }

    return msg;



}

playRound(playerChoice, cpu );
console.log(msg);