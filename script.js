// ARRAYS
// Uppercase Letters
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Lowercase Letters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Special characters
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "_", "-", "+", "=", ",", ".", "/", "?", "\\", "[", "]", "{", "}", ";", ":"];

// PROMPT PASSWORD OPTIONS
function getPasswordOptions() {
  // Ask user to input password length
  var length = parseInt(prompt("How many characters do you want your password to have? "));
  // Alert user if password length is not a number
  if (isNaN(length) == true) {
    alert("Error! Password length must be a number! ");
    return;
  }
  // Password length check between 8 and 128
  if (length < 8) {
    alert("Password length must be at least 8 characters! ");
    return;
  }
  else if (length > 128) {
    alert("Password length must less than 129 characters! ");
    return;
  }
  // Ask to confirm Uppercase Letters
  var hasUppercaseLetters = confirm("Do you want to include Uppercase Letters? ");
  // Ask to confirm Lowercase Letters
  var hasLowercaseLetters = confirm("Do you want to include Lowercase Letters? ");
  // Ask to include Numbers
  var hasNumbers = confirm("Do you want to include Numbers? ");
  // Ask to include Special Characters
  var hasSpecialCharacters = confirm("Do you want to include Special Characters? ");
  // Alerts user if all inputs are false
  if (hasUppercaseLetters === false &&
    hasLowercaseLetters === false &&
    hasNumbers === false &&
    hasSpecialCharacters === false) {
    alert("You did not select any characters for your password. Try again. ");
    return;
  }
  // Saves user input
  var passwordOptions = {
    length: length,
    hasUppercaseLetters: hasUppercaseLetters,
    hasLowercaseLetters: hasLowercaseLetters,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters
  };
  return passwordOptions;
}

// FUNCTIONS
// Function to get random index from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}
// Function to generate the random password from users input
function generatePassword() {
  var userOptions = getPasswordOptions();

  var finalPassword = [];
  var inputCharacters = [];
  var outputCharacters = [];

  // Conditional statement if user selects a password character type then it will output a random character from that array
  if (userOptions.hasUppercaseLetters) {
    inputCharacters = inputCharacters.concat(uppercaseLetters);
    outputCharacters.push(getRandom(uppercaseLetters));
  }
  if (userOptions.hasLowercaseLetters) {
    inputCharacters = inputCharacters.concat(lowercaseLetters);
    outputCharacters.push(getRandom(lowercaseLetters));
  }
  if (userOptions.hasNumbers) {
    inputCharacters = inputCharacters.concat(numbers);
    outputCharacters.push(getRandom(numbers));
  }
  if (userOptions.hasSpecialCharacters) {
    inputCharacters = inputCharacters.concat(specialCharacters);
    outputCharacters.push(getRandom(specialCharacters));
  }

  for (var i = 0; i < userOptions.length; i++) {
    var inputCharacter = getRandom(inputCharacters);
    finalPassword.push(inputCharacter);
  }

  for (var i = 0; i < outputCharacters.length; i++) {
    finalPassword[i] = outputCharacters[i];
  }
  return finalPassword.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = "";
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
