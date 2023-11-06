 init();
 function init(){
    let button = document.querySelector('button');
    button.onclick=playGame
 }
function playGame(){
    let min,max,answer,guess,message;

    [min,max] = [1,100]
    answer = Math.floor(Math.random()*100)+1
    message = "Guess the Number :"

    do{
        guess = prompt(`${message}\n from ${min} to ${max}`)
        if(guess === null) return "game is cancelled";
        guess = parseInt(guess)|| 0;

        if(guess < answer){
            message = "  too low to Guess";
            min = guess + 1
        }
        else if(guess > answer){
            message =" Too High to guess"
            max = guess - 1;
        }else{
            alert("You guess it correctly ")
        }
    }while(guess != answer);
    return "Game Over"
}
// Generate a Random Number
let y = Math.floor(Math.random() * 10 + 1);
 
// Counting the number of guesses
// made for correct Guess
let guess = 1;

document.getElementById("submitguess").onclick = function () {

    // Number guessed by user    
    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }

    /* If guessed number is greater than actual number*/
    else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}