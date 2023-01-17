// Assignment Code
var generateBtn = document.querySelector("#generate");

function getUpperCase() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCase[Math.floor(Math.random() * upperCase.length)];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
