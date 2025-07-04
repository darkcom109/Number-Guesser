// Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a number between ${minNum} - ${maxNum}`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`TOO LOW! TRY AGAIN. You are on attempt ${attempts}`);
        }
        else if(guess > answer){
            window.alert(`TOO HIGH! TRY AGAIN. You are on attempt ${attempts}`);
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`)
            running = false;
        }
    }
}