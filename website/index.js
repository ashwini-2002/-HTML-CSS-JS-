//NUMBER GUESSING GAME
const minimum=1;
const maximum=100;
const answer=Math.floor(Math.random()*(maximum-minimum+1))+minimum;

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`guess a number btw ${minimum} - ${maximum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("please enter valid number");
    }
    else if(guess < minimum || guess > maximum){
        window.alert("please enter a valid number");
    }
    else{
        attempt++;
        if(guess < answer){
          window.alert("TOO high try again")
        }
        else{
            window.alert("correct is answer was ${answer}.it took you ${attempts} attempts ");
            running=false;

        }
    }
    
}