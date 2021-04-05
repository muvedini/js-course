'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 👍';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//SECRET NUMBER
let secret_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

//EVENT LISTENER
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //when no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number😒';
    }
    //when guess is correct
    else if (guess === secret_number) {
        document.querySelector('.message').textContent = 'Correct Number 👍';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secret_number;

        document.querySelector('.number').style.width = '30rem';
        //SETTING HIGH-SCORE
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //when guess is wrong
    else if (guess !== secret_number) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secret_number ? 'TOO High 🤷‍♀️' : 'TOO Low 🤷‍♀️';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost🤦‍♀️';
            document.querySelector('.score').textContent = 0;
        }
    }
    //when guess is higher
    // else if (guess > secret_number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'TOO High 🤷‍♀️';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost🤦‍♀️';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // //when guess is low
    // else if (guess < secret_number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'TOO Low 🤷‍♀️';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost🤦‍♀️';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

//RESET EVENT LISTENER
document.querySelector('.again').addEventListener('click', function() {
    secret_number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
});