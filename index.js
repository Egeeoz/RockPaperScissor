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
function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(`Computer wins, paper beats rock!`); 
    } else if(playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log(`You win, scissor beats paper!`);
    } else if(playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log(`You win, rock beats scissor!`);
    } else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        console.log(`Computer wins, scissor beats paper!`);
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('You win, paper beats rock!')
    } else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        console.log('Computer wins, rock beats scissor!');
    } else {
        console.log(`Tie!`)
    }
}

playRound(userChoice,computerChoice);