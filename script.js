function playDiceGame(){
    // variable to hold our first roll of the die
    let roll1 = getRandomNumber();
    console.log("roll1 =", roll1)
    // variable to hold our second roll of the dice
    let roll2 = getRandomNumber();
    console.log("roll2 =", roll2)
    // variable to hold the sum of our rolls
    let rollSum = roll1 + roll2;

    console.log("rollSum=" + rollSum)

    // test for a win - duplicate even numbers = 2, 2 or 4, 4, 6, 6
    // % is modulus - the result when using modulus is the remainder.
    // if you divide a number by 2 and there is no remainder, the number is even.
    if(roll1 == roll2 && roll1 % 2 == 0){
        document.getElementById("divMessage").textContent = "You Win!";
    }
    // if the user rolls a 8 or 11, they lost
    else if(rollSum == 7 || rollSum == 11){
        document.getElementById("divMessage").textContent = "You lost, Loser!";
    }
    else{
        document.getElementById("divMessage").textContent = "You tied...";
    }

    document.getElementById("divRoll1").textContent = "dice roll 1: " + roll1;
    document.getElementById("divRoll2").textContent = "dice roll 1: " + roll2;
    document.getElementById("divSum").textContent = "Sum: " + rollSum;
    
}

// function will generate a random number between 1 and 6
function getRandomNumber(){
    // get a random number between 0 and 1, and multiply by six
    let number = Math.random() * 6;
    // this will round our number up, so we get a number between 1 and 6
    number = Math.ceil(number);

    // returning / passing back the random number
    return number;
}