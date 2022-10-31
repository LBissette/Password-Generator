// PASSWORD LENGTH

var passLength = prompt("How many characters would you like in your password?");

// if not inbetween 8 & 128, try again.
if (passLength < 8 || passLength > 128) {
    confirm("Please limit between 8 & 128.");
    passLength
 }
// vars for character arrays
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",":",";","'","<",">",",",".","?","/"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// CRITERIA PROMPTS
var hasSymbols = confirm("Use Symbols?")
var hasNumbers = confirm("Use Numbers?");
var hasLowerCase = confirm("Use Lowercase?");
var hasUpperCase = confirm("Use Uppercase?");





// show criteria selected
// console.log(
//     "Length: ", passLength,
//     "Symbols: ", hasSymbols,
//     "Numbers: ", hasNumbers,
//     "Lowercase: ", hasLowerCase,
//     "Uppercase: ", hasUpperCase,
// )

// vars for password
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





// CREATE PASSWORD




function generatePassword(event) {
    event.preventDefault();
    prompt("did it work?")
 // math for random number generator
    for (var i = 0; i < passLength; i++) {
        var randomNumber = Math.floor(Math.random() * superArray.length);
        passwordArray.push(superArray[randomNumber]);
    }
    var finalPassword = passwordArray.join("");
    document.getElementById("password").textContent = finalPassword;
}

// create event listener for click
var generateEl = document.querySelector("#generate")
generateEl.addEventListener("click", generatePassword);

