// create the checkPalin function
function checkPalin(event){
    // prevent the form from submitting (so the page does not refresh)
    event.preventDefault();


    // create a variable to store the word that the user entered
    let wordToTest = document.getElementById("txtWord").value;

    console.log("wordToTest=" + wordToTest);

    // call the function to test it
    // TODO: print out the result to the user
    let bPalin = isPalin(wordToTest);


    // create a shortcut to the message div
    let divMessage = document.getElementById("divMessage")
    // create a message for the user based on the value of bPalin
    if (bPalin == true){
        // show the user a message
        divMessage.textContent = "The phrase " + wordToTest + " is a palindrome!"
    }
    else{
        divMessage.textContent = "The phrase " + wordToTest + " is not a palindrome!"
    }
}

// create a function to test to see if the string is the same backwards as it is forwards
function isPalin(strToTest){
    // I want to convert the string to all lowercase so that it is a more fair comparison
    strToTest = strToTest.toLowerCase();
    // replaces all instances /g of spaces /\s with an empty string
    strToTest = strToTest.replace(/\s/g, "");

    console.log("strToTest=" + strToTest);

    // creates a new variable so we can keep the original string for testing.
    let strReverse = strToTest;

    // convert the reverse string to an array, we will reverse the contents
    // so test would become tset and then convert the array back to a string
    strReverse = strReverse.split("").reverse().join("");

    console.log("strReverse=" + strReverse);

    // compare the original string with the reverse string
    // if they match, this function will return true, otherwise it will return false
    if (strReverse == strToTest){
        return true;
    
    }
    else{
        // if we get here, it must not be a palindrome; if so, return FALSE
        return false;
    }
}