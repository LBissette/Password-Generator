// vars for character arraysre
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",":",";","'","<",">",",",".","?","/"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function generatePassword(event) {
    event.preventDefault();
//PASSWORD LENGTH
    var passLength = prompt("How many characters would you like in your password?");
// if not inbetween 8 & 128, try again.
    if (passLength < 8 || passLength > 128) {
        alert("Please limit between 8 & 128.");
        return;
    }

// CRITERIA PROMPTS
    var hasSymbols = confirm("Use Symbols?")
    var hasNumbers = confirm("Use Numbers?");
    var hasLowerCase = confirm("Use Lowercase?");
    var hasUpperCase = confirm("Use Uppercase?");

    if (hasSymbols === false && hasNumbers === false && hasLowerCase === false && hasUpperCase === false) {
        alert("Please select at least one.");
        return;
    }

// vars for array
    var superArray = [];
    var passwordArray = [];

// CREATE PASSWORD ARRAY
    if (hasSymbols) {
        superArray = superArray.concat(symbols);
    }

    if (hasNumbers) {
        superArray = superArray.concat(numbers);
    }

    if (hasLowerCase) {
        superArray = superArray.concat(alphabet);
    }

    if (hasUpperCase) {
        superArray = superArray.concat(alphabet.join(" ").toUpperCase().split(" "));
    }

// math for random number generator
    for (var i = 0; i < passLength; i++) {
        var randomNumber = Math.floor(Math.random() * superArray.length);
        passwordArray.push(superArray[randomNumber]);
    }

    // Turn array into a password
    var finalPassword = passwordArray.join("");
    document.getElementById("password").textContent = finalPassword;
}
   
// create event listener for click
var generateEl = document.querySelector("#generate")
generateEl.addEventListener("click", generatePassword);

