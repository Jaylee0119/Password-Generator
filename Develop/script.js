// Assignment code here



var passwordLength; // check length of characters from user input
var confirmLower; //confirms if user wants lowercase letters
var confirmUpper; //confirms if user wants uppercase letters
var confirmNumber; //ask user if to include numbers in the password to be generated
var confirmSpecial; //confirm special characters
var choice_by_user;  //choices from user
var lowerCase_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var upperCase_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var blankUpper = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// output password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generate pasword function
function generatePassword() {
  // user input for password lenght
  passwordLength = prompt("Define the number of characters for Your PAssword. Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  if(!passwordLength) {
    alert("Required value");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);
  };
  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    choice_by_user = alert("You must choose a criteria");
  }else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    choice_by_user = lowerCase.concat(upperCase_letters, numbers, special);
    choice_by_user = lowerCase_letters.concat(upperCase_letters, numbers, special);
    console.log(choice_by_user);
  }
  // 3 true optionsv
  else if (confirmLower && confirmUpper && confirmNumber) {
    choice_by_user = lowerCase.concat(upperCase_letters, numbers);
    choice_by_user = lowerCase_letters.concat(upperCase_letters, numbers);
    console.log(choice_by_user);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    choice_by_user = lowerCase.concat(upperCase_letters, special);
    choice_by_user = lowerCase_letters.concat(upperCase_letters, special);
    console.log(choice_by_user);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    choice_by_user = lowerCase.concat(numbers, special);
    choice_by_user = lowerCase_letters.concat(numbers, special);
    console.log(choice_by_user);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    choice_by_user = upperCase_letters.concat(numbers, special);
    console.log(choice_by_user);
  }
  // 2 true options
  else if (confirmLower && confirmUpper) {
    choice_by_user = lowerCase.concat(upperCase_letters);
    choice_by_user = lowerCase_letters.concat(upperCase_letters);
    console.log(choice_by_user);
  }
  else if (confirmLower && confirmNumber) {
    choice_by_user = lowerCase.concat(numbers);
    choice_by_user = lowerCase_letters.concat(numbers);
    console.log(choice_by_user);
  }
  else if (confirmLower && confirmSpecial) {
    choice_by_user = lowerCase.concat(special);
    choice_by_user = lowerCase_letters.concat(special);
    console.log(choice_by_user);
  }
  else if (confirmUpper && confirmNumber) {
    choice_by_user = upperCase_letters.concat(numbers);
    console.log(choice_by_user);
  }
  else if (confirmUpper && confirmSpecial) {
    choice_by_user = upperCase_letters.concat(special);
    console.log(choice_by_user);
  }
  else if (confirmNumber && confirmSpecial) {
    choice_by_user = numbers.concat(special);
    console.log(choice_by_user);
  }
  // 1 true option
  else if (confirmLower) {
    choice_by_user = lowerCase;
    choice_by_user = lowerCase_letters;
    console.log(choice_by_user);
  }
  else if (confirmUpper) {
    choice_by_user = blankUpper.concat(upperCase_letters_letters);
    console.log(choice_by_user);
  }
  else if (confirmNumber) {
    choice_by_user = numbers;
    console.log(choice_by_user);
  }
  else if (confirmSpecial) {
    choice_by_user = special;
    console.log(choice_by_user);
  };
   // Empty variable for the password lenght
   var passwordBlank = [];

   // Loop for random selection
   //  generate password according to criteeria chosen
   for (var i = 0; i < passwordLength; i++) {
     var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
     var allChoices = choice_by_user[Math.floor(Math.random() * choice_by_user.length)];
     passwordBlank.push(allChoices);
     console.log(allChoices);
   }

   // Join and return the password 
   // concat the passwords as per selection and print to user in output area and alert screen
   var password = passwordBlank.join("");
   window.alert("Your password is: "+password+"\n Copy from the output area")
   console.log("Your Pasword is: " + password);
   return password;
}