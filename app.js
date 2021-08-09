//define array with CPU choices
const items = ["Rock", "Paper", "Scissors"];

//Create a function that picks an item from the array randomly
function computerPlay()
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

//invoke the function with the CPU choice
let cpu = computerPlay();
let msg = "";
let playerChoice = "";
let roundNumber = 0; //round starts at 0 plays ofc
let playerScore = 0
let cpuScore = 0;

//retrieve elements from DOM
let p1Score = document.querySelector(".p1Score");
let compScore = document.querySelector(".cpuScoreNum");
let finalResult = document.querySelector(".final-result");




function game(func) {
    
    while (roundNumber < 5) {
        playRound(playerChoice, cpu);
        roundNumber++;
        
        if (playerScore > cpuScore) {
            finalResult.textContent = "You win! :D";
            finalResult.style.color = 'green';
        } else if (cpuScore > playerScore) {
            finalResult.textContent = "You lose! :(";
            finalResult.style.color = 'red';
        } else if (cpuScore === 0 && playerScore === 0) {
            finalResult.textContent = "";
        } else {
            finalResult.textContent = "It's a tie!";
            finalResult.style.color = 'black';
        }
    }
    
}

function playRound(choice, cpuChoice){
    cpu = computerPlay();
    playerChoice = prompt("Please select Rock, paper or scissors", "");   
    let pChoiceCapital = playerChoice.toUpperCase();
    let compChoice = cpu.toUpperCase();

    if(pChoiceCapital === "ROCK" && compChoice === "SCISSORS") {
        alert("You win! Rock beats Scissors");
        playerScore++;
        p1Score.textContent = playerScore;

    } else if (pChoiceCapital === "PAPER" && compChoice === "SCISSORS") {
        alert("You lose. Scissors beats paper"); 
        cpuScore++;
        compScore.textContent = cpuScore;
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "SCISSORS") {
        alert("It's a tie. Scissors vs scissors");
    } else if (pChoiceCapital === "ROCK" && compChoice === "PAPER") {
        alert("You lose. Paper beats rock");
        cpuScore++;
        compScore.textContent = cpuScore;
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "PAPER") {
        alert("You win. Scissors beat Paper");
        playerScore++;
        p1Score.textContent = playerScore;
    } else if (pChoiceCapital === "PAPER" && compChoice === "PAPER") {
        alert("It's a tie. Paper vs paper");
    } else if (pChoiceCapital === "ROCK" && compChoice === "ROCK") {
        alert("It's a tie. Rock vs rock");
    } else if (pChoiceCapital === "SCISSORS" && compChoice === "ROCK") {
        alert("You lose. Rock beats scissors");
        cpuScore++;
        compScore.textContent = cpuScore;
    } else if (pChoiceCapital === "PAPER" && compChoice === "ROCK") {
        alert("You win. Paper beats rock");
        playerScore++;
        p1Score.textContent = playerScore;
    }

    
}

game();

//playRound(playerChoice, cpu );
console.log(msg);