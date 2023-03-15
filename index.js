//ARRAY OF CHOICES FOR computerChoice FUNCTION
const choices = ["rock","paper","scissor"]

//USER AND COMPUTER SCORES
let userScore = parseInt(0);
let computerScore = parseInt(0);

//USER CHOICE
function userChoiceFunc(){
let userChoice = prompt("Rock, paper or scissor?");
    if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissor"){
        console.log(`You chose ${userChoice}`);
    } else {
        console.log(`Not a choice, try again!`);
    }
}
//COMPUTER CHOICE
function random()   {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(`Computer chose ${computerChoice}`);
}

//PLAYS SINGLE ROUND OF ROCK PAPER SCISSOR
function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return console.log(`Computer wins, paper beats rock!`); 
    } else if(playerSelection == 'scissor' && computerSelection == 'paper') {
        userScore++;
        return console.log(`You win, scissor beats paper!`);
    } else if(playerSelection == 'rock' && computerSelection == 'scissor') {
        userScore++;
        return console.log(`You win, rock beats scissor!`);
    } else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        computerScore++;
        return console.log(`Computer wins, scissor beats paper!`);
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        userScore++;
        return console.log('You win, paper beats rock!')
    } else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        computerScore++;
        return console.log('Computer wins, rock beats scissor!');
    } else {
        console.log(`Tie!`)
    }
}


//PLAYS 5 ROUNDS OF ROCK PAPER SCISSOR
    for (let i = 0; i < 5; i++){
        let user = userChoiceFunc();
        let computer = random();
        playRound(user,computer);
        console.log(`Your score ${userScore}`);
        console.log(`Computer score ${computerScore}`);   
    }   
    






