const choices = ["rock","paper","scissor"]

//USER CHOICE
const userChoice = prompt("Rock, paper or scissor?");
    if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissor"){
        console.log(`You chose ${userChoice}`);
    } else {
        console.log(`Not a choice, try again!`);
    }

//COMPUTER CHOICE
let computerChoice = choices[Math.floor(Math.random() * 3)];
console.log(`Computer chose ${computerChoice}`);

//PLAYS SINGLE ROUND OF ROCK PAPER SCISSOR
function rockPaperScissor(playerSelection, computerSelection) {
    
}