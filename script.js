var passLength = prompt("Pick a number")

// var for super array content
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}",":",";","'","<",">",",",".","?","/"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// var for password critera prompts
var hasSymbols = confirm("Use Symbols?")
var hasNumbers = confirm("Use Numbers?")
var hasLowerCase = confirm("Use Lowercase?")
var hasUpperCase = confirm("Use Uppercase?")

// var for super array
var superArray = [];


// show criteria selected
console.log(
    "Length: ", passLength,
    "Symbols: ", hasSymbols,
    "Numbers: ", hasNumbers,
    "Lowercase: ", hasLowerCase,
    "Uppercase: ", hasUpperCase,
)

// combining selected criteria into one super array
if (hasSymbols) {
    superArray = superArray.concat(symbols)
}

if (hasNumbers) {
    superArray = superArray.concat(numbers)
}

if (hasLowerCase) {
    superArray = superArray.concat(alphabet)
}

if (hasUpperCase) {
    superArray = superArray.concat(alphabet.join(" ").toUpperCase().split(" "))
}

console.log("Super Array: ", superArray)




// TODO:
// math for random number generator

// creating the password

// creating restraints