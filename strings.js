// this function will validate the user input based on the requirements of the client (assignment requirements)
        function validate(){
            // first name variable
            let firstName = document.getElementById("txtFirstName").value;
        
            // show the first name in the console
            console.log("firstName: " + firstName);

            // last name variable
            let lastName = document.getElementById("txtLastName").value;

            // show the last name in the console
            console.log("lastName: " + lastName);

            // zip code variable
            let zip = document.getElementById("txtZip").value;

            // show the zip in the console
            console.log("zip= " + zip);

            // create a variable to hold the first name + " " + last name
            let fullName = firstName + " " + lastName;

            console.log("fullName= " + fullName);

            // we need to make sure the full name does not exceed 20 characters
            if (fullName.length == 1 || fullName.length > 20){
                message = "Please enter a name that is less than 20 characters.";

            }
            else{
                document.getElementById("secretMessage").textContent = "You win!"
            }

            console.log("message= " + message);

            if (zip.length == 1 || zip.length > 5){
                message = "Please enter a valid ZIP code that is 5 digits long.";
            }

            console.log("message= " + message);
        }