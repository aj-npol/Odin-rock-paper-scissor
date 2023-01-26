
let OPTIONS = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    computer_index = Math.floor(Math.random() * 3)
    return OPTIONS[computer_index]
}

function _captilize(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if ( playerSelection == computerSelection) return "We have a draw!"
    let result = `You Win! ${_captilize(playerSelection)} beats ${_captilize(computerSelection)}` 
    if ( computerSelection == "rock" && playerSelection == "scissor" ||
        computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "scissor" && playerSelection == "paper"
    ){
        result = `You Lose! ${_captilize(computerSelection)} beats ${_captilize(playerSelection)}` 
    }

    return result
}

const playerSelection = "rock";

function game() {
    for (let i =0; i++<5;){
        round_result = playRound(playerSelection, getComputerChoice())
        console.log(round_result)
    }
}

game()


