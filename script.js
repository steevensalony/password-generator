// Assignment Code
var generateBtn = document.querySelector("#generate");

function getUpperCase() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCase[Math.floor(Math.random() * upperCase.length)];
  }
  
  function getLowerCase() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  function getNumber() {
  var number = "0123456789"
  return number[Math.floor(Math.random() * number.length)];
  }
  function getSpecialCharacters() {
  var specialCharacters = "!@#$%^&*(){}[]=<>/,.";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
