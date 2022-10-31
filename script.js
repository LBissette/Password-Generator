var passLength = prompt("Pick a number")

var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}",":",";","'","<",">",",",".","?","/"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var hasSymbols = confirm("Use Symbols?")
var hasNumbers = confirm("Use Numbers?")
var hasLowerCase = confirm("Use Lowercase?")
var hasUpperCase = confirm("Use Uppercase?")

console.log(
    "Length: ", passLength,
    "Symbols: ", hasymbols,
    "Numbers: ", hasNumbers,
    "Lowercase: ", hasLowerCase,
    "Uppercase: ", hasUpperCase,
)
