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
    document.getElementById("divRoll2").textContent = "dice roll 2: " + roll2;
    document.getElementById("divSum").textContent = "Sum: " + rollSum;
    
}

// create a variable to track the current interval ID (returned from the setInterval function)
        let intervalId = 0;
        // create the function to move the image
        function startImageMove(){
            // we are creating a variable that is a shortcut/nick for our HTML image element.
            let memeImage = document.getElementById("memeImage");
            
            // setInterval allows us to repeatedly run code
            // function() is an anonymous function - a way to run a chunk of code 1 time as a function argument.
            intervalId = setInterval(function(){
                // get a random number for top and left coordinates
                let topCoord = getRandomPixels();
                let leftCoord = getRandomPixels();

                memeImage.style.left = topCoord + "px";
                memeImage.style.top = leftCoord + "px";
            }, 1000); // 1000 milliseconds = 1 second

            // enable the Stop button
            document.getElementById("btnStop").disabled = false;

            // disable the start button
            document.getElementById("btnStart").disabled = true;
        }

        // build a function to get a random number
        function getRandomPixels(){
            // I'm picking 800 As the max number - I'll adjust accordingly based on what my screen size is.
            return Math.floor(Math.random() * 500);
        }
        // create the function that stops the image's movement
        function stopImageMove(){
            // call a built-in javascript function that stops setInterval from running
            clearInterval(intervalId);
            

            document.getElementById("btnStop").disabled = true;
            document.getElementById("btnStart").disabled = false;
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