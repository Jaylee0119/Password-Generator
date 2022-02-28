// Assignment code here

// check length of characters from user input
var passwordLength;
//confirms if user wants lowercase letters
var confirmLower;
//confirms if user wants uppercase letters
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var passwordLength; // check length of characters from user input
var confirmLower; //confirms if user wants lowercase letters
var confirmUpper; //confirms if user wants uppercase letters
var confirmNumber; //ask user if to include numbers in the password to be generated
var confirmSpecial; //confirm special characters
var choice_by_user;  //choices from user


// Get references to the #generate element
@@ -25,3 +23,10 @@ function writePassword() {

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
}; 