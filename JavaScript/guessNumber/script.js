let gameNumber = Math.floor(Math.random()*100);
console.log(gameNumber);
let input = prompt("Guess the number between 1 to 100");

while(input != gameNumber){
    
    input = prompt("Wrong!!! Guess the number again");
}

prompt("Correct guess!!! Give us feedback")
console.log("Congrats your guess was correct");