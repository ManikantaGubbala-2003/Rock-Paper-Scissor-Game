let score = 
    JSON.parse(localStorage.getItem('score')) || {
        Wins : 0,
        Loss : 0,
        Tie : 0
    };  
UpdateScore();
function UpdateScore() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.Wins} | Loss : ${score.Loss} | Ties : ${score.Tie}`;
}
function PickComputerMove() {
    const randomNumber1 = Math.random();
    let computerMove1 = '';
    if (randomNumber1 >= 0 && randomNumber1 < 1/3) {
        computerMove1 = 'rock';            
    }else if (randomNumber1 >= 1/3 && randomNumber1 < 2/3) {
        computerMove1 = 'paper';
    }else if (randomNumber1 >= 2/3 && randomNumber1 < 1) {
        computerMove1 = 'scissors';
    }
    return computerMove1
    }
function results(parameter1) {
    const computerMove = PickComputerMove();
    let result = '';
    if (parameter1 === 'scissors') {						
        if (computerMove === 'scissors') {
            result = 'Tie';
        }else if (computerMove === 'rock'){
            result = 'You Lose';
        }else if (computerMove === 'paper'){
            result = 'You Win';
        }
                                
    } else if (parameter1 === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie';
        }else if (computerMove === 'scissors'){
            result = 'You Lose';
        }else if (computerMove === 'rock'){
            result = 'You Win';
        }
        
    } else if (parameter1 === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        }else if (computerMove === 'paper'){
            result = 'You Lose';
        }else if (computerMove === 'scissors'){
            result = 'You Win';
        }
        
    }
    if (result === 'You Win') {
        score.Wins += 1;
    }else if (result === 'You Lose') {
        score.Loss += 1;
    }else if (result === 'Tie') {
        score.Tie += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = ` ${result}`;
    document.querySelector('.js-moves').innerHTML = `Yours <img class="moves-img" src="./images/${parameter1}-emoji.png" alt=""> |  Computers <img class="moves-img" src="./images/${computerMove}-emoji.png" alt="">`
    UpdateScore();


    
}