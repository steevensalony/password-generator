// Assignment Code
var generateBtn = document.querySelector("#generate");

// getting random upper case characters
function getUpperCase() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

// getting random lower case characters
function getLowerCase() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

// getting random numbers
function getNumber() {
  var number = "0123456789"
  return number[Math.floor(Math.random() * number.length)];
}

// getting random special characters
function getSpecialCharacters() {
  var specialCharacters = "!@#$%^&*(){}[]=<>/,.";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

// getting user inputs
function generatePassword() {
  var length = prompt("please choose how many characters you'd like your password to have. Can't be less than 8 or more than 128.");

  // making sure user stays within the parameters
  while (length < 8 || length > 128) {
    alert("Length is either too short or too big. Length can't be less than 8 or more than 128");
    length = prompt("please choose how many characters you'd like your password to have. Can't be less than 8 or more than 128.");
  }

  // getting user preferences
  var confirmUpperCase = confirm("Would you like your password to have upper cases?");
  var confirmLowerCase = confirm("Would you like your password to have lower cases?");
  var confirmNumber = confirm("Would you like your password to have numbers?");
  var confirmSpecialChar = confirm("Would you like your password to have special characters?");

  // making sure user picks at least one option
  if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialChar) {
    alert("Your password must have at least one of the options.");
  }

  // logic to get password printed for different cases
  var printedPassword = "";
    
  if (confirmUpperCase) {
    printedPassword = printedPassword += getUpperCase();
  }

  if (confirmLowerCase) {
    printedPassword = printedPassword += getLowerCase();
  }
    
  if (confirmNumber) {
    printedPassword = printedPassword += getNumber();
  }

  if (confirmSpecialChar) {
    printedPassword = printedPassword += getSpecialCharacters();
  }

  var userPassword = "";
    
  for (var i = 0; i < length; i++) {
    userPassword = userPassword + printedPassword[Math.floor(Math.random() * printedPassword.length)];
  }
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
